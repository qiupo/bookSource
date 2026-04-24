# Legado Legacy Runtime Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the converter so generated Legado Tauri JS booksources include a high-coverage legacy rule runtime instead of empty placeholder functions.

**Architecture:** Split the runtime template out of `convert_book_json.py` into a dedicated JavaScript template file, then have the Python converter embed it into every generated source. Keep the runtime small but useful: URL templates, HTTP request options, JSONPath/CSS/XPath subsets, field mapping, common Java/cache/cookie/source shims, and compatibility reporting.

**Tech Stack:** Python 3 standard library for conversion and tests. Generated JavaScript targets Legado Tauri runtime APIs such as `legado.http`, `legado.dom`, and standard JS globals.

---

## File Structure

- Create `scripts/legacy_runtime.js`: JS runtime template embedded into generated booksources.
- Modify `scripts/convert_book_json.py`: load runtime template, generate real function wrappers, emit compatibility report.
- Modify `scripts/test_convert_book_json.py`: test runtime embedding, function wrappers, and compatibility report.
- Modify `scripts/check_outputs.py`: validate generated JS files include real runtime function calls.
- Modify `scripts/test_check_outputs.py`: test the stricter validation.
- Generate `booksources/compatibility-report.json`: ignored intermediate report.
- Generate `repository/*.js` and `repository/repository.json`: public publish output.

## Task 1: Add Legacy Runtime Template

**Files:**
- Create: `scripts/legacy_runtime.js`

- [ ] **Step 1: Write failing smoke test for runtime presence**

Modify `scripts/test_convert_book_json.py` by adding this test near the other tests:

```python
def test_runtime_template_contains_required_entrypoints():
    runtime = Path(__file__).with_name('legacy_runtime.js').read_text(encoding='utf-8')
    for name in [
        'createLegacyRuntime',
        'search(keyword, page)',
        'bookInfo(bookUrl)',
        'chapterList(tocUrl)',
        'chapterContent(chapterUrl)',
        'explore(page, category)',
        'applyRule',
        'request',
        'evaluateJsonPath',
        'evaluateCss',
        'evaluateXPath',
        'createJavaShim',
    ]:
        assert name in runtime, name
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL with `FileNotFoundError` for `legacy_runtime.js`.

- [ ] **Step 3: Create `scripts/legacy_runtime.js`**

Write this complete file:

```js
function createLegacyRuntime(source) {
  var memoryCache = {};

  function log(message) {
    if (typeof legado !== 'undefined' && legado.log) legado.log(String(message));
  }

  function unsupported(name) {
    log('[legacyRuntime unsupported] ' + source.bookSourceName + ': ' + name);
  }

  function baseUrl() {
    return String(source.bookSourceUrl || '').split('#')[0];
  }

  function absolutize(url, parentUrl) {
    if (!url) return '';
    var text = String(url).trim();
    if (/^https?:\/\//i.test(text) || text.indexOf('data:') === 0) return text;
    var base = parentUrl || baseUrl();
    if (!base) return text;
    if (text.indexOf('//') === 0) return 'https:' + text;
    if (text[0] === '/') {
      var match = base.match(/^(https?:\/\/[^\/]+)/i);
      return match ? match[1] + text : text;
    }
    return base.replace(/\/[^\/]*$/, '/') + text;
  }

  function first(value) {
    if (Array.isArray(value)) return value.length ? value[0] : '';
    if (value === null || value === undefined) return '';
    return value;
  }

  function stringify(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    return JSON.stringify(value);
  }

  function getPathValue(context, path) {
    if (!path) return context;
    var text = String(path).replace(/^@json:/, '').trim();
    if (text === '$') return context;
    if (text.indexOf('$.') === 0) text = text.slice(2);
    if (text.indexOf('$..') === 0) return recursiveFind(context, text.slice(3));
    var parts = text.split('.').filter(Boolean);
    var current = context;
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (part.slice(-3) === '[*]') {
        var key = part.slice(0, -3);
        current = key ? current && current[key] : current;
        if (!Array.isArray(current)) return [];
        var rest = parts.slice(i + 1).join('.');
        if (!rest) return current;
        var out = [];
        for (var j = 0; j < current.length; j++) out = out.concat(asArray(getPathValue(current[j], rest)));
        return out;
      }
      var indexMatch = part.match(/^(.+)\[(\d+)\]$/);
      if (indexMatch) {
        current = current && current[indexMatch[1]];
        current = Array.isArray(current) ? current[Number(indexMatch[2])] : undefined;
      } else {
        current = current && current[part];
      }
      if (current === undefined || current === null) return '';
    }
    return current;
  }

  function recursiveFind(context, key) {
    var found = [];
    function walk(value) {
      if (!value || typeof value !== 'object') return;
      if (Object.prototype.hasOwnProperty.call(value, key)) found.push(value[key]);
      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) walk(value[i]);
      } else {
        Object.keys(value).forEach(function (childKey) { walk(value[childKey]); });
      }
    }
    walk(context);
    return found;
  }

  function asArray(value) {
    if (Array.isArray(value)) return value;
    if (value === null || value === undefined || value === '') return [];
    return [value];
  }

  function renderTemplate(template, vars, context) {
    return String(template || '').replace(/\{\{([\s\S]*?)\}\}/g, function (_, expr) {
      var key = expr.trim();
      if (key === 'key') return encodeURIComponent(vars.keyword || '');
      if (key === 'page') return vars.page || 1;
      if (key === 'baseUrl') return vars.baseUrl || '';
      if (key === 'source.key') return baseUrl();
      if (key.indexOf('$.') === 0 || key === '$') return stringify(first(getPathValue(context, key)));
      return '';
    });
  }

  function parseUrlRule(urlRule, vars, context) {
    var rendered = renderTemplate(urlRule, vars, context);
    if (rendered.indexOf('@js:') === 0 || rendered.indexOf('<js>') === 0) return runScriptUrl(rendered, vars, context);
    var comma = rendered.indexOf(',{');
    if (comma === -1) return { url: absolutize(rendered, vars.baseUrl), options: {} };
    var url = rendered.slice(0, comma);
    var optionsText = rendered.slice(comma + 1);
    try {
      return { url: absolutize(url, vars.baseUrl), options: JSON.parse(optionsText) };
    } catch (error) {
      log('[legacyRuntime] failed to parse request options: ' + error.message);
      return { url: absolutize(url, vars.baseUrl), options: {} };
    }
  }

  function runScriptUrl(script, vars, context) {
    var java = createJavaShim(vars);
    var cache = createCacheShim();
    var cookie = createCookieShim();
    var result = vars.result || '';
    var baseUrlValue = vars.baseUrl || baseUrl();
    try {
      var body = String(script).replace(/^@js:/, '').replace(/^<js>|<\/js>$/g, '');
      var fn = new Function('java', 'cache', 'cookie', 'source', 'result', 'baseUrl', 'key', 'page', body);
      var value = fn(java, cache, cookie, source, result, baseUrlValue, vars.keyword || '', vars.page || 1);
      return { url: absolutize(value || result, baseUrlValue), options: {} };
    } catch (error) {
      unsupported('script url failed: ' + error.message);
      return { url: '', options: {} };
    }
  }

  async function request(urlRule, vars, context) {
    var parsed = parseUrlRule(urlRule, vars, context);
    if (!parsed.url) return '';
    var options = parsed.options || {};
    if (options.webView || options.webJs) unsupported('webView');
    if (String(options.method || 'GET').toUpperCase() === 'POST') {
      return await legado.http.post(parsed.url, options.body || '', options.headers || {});
    }
    return await legado.http.get(parsed.url, options.headers || {});
  }

  function parseData(text) {
    if (typeof text !== 'string') return text;
    try { return JSON.parse(text); } catch (_) { return text; }
  }

  function applyRegexClean(value, rule) {
    var parts = String(rule).split('##');
    if (parts.length < 2) return value;
    var pattern = parts[1];
    var replacement = parts.length >= 3 ? parts[2] : '';
    try { return stringify(value).replace(new RegExp(pattern, 'g'), replacement); } catch (_) { return value; }
  }

  function splitRuleAndClean(rule) {
    var text = String(rule || '');
    var idx = text.indexOf('##');
    if (idx === -1) return { rule: text, clean: '' };
    return { rule: text.slice(0, idx), clean: text.slice(idx) };
  }

  function evaluateJsonPath(context, rule) {
    return getPathValue(context, String(rule).replace(/^@json:/, ''));
  }

  function evaluateCss(context, rule) {
    if (!legado.dom) return '';
    var text = String(rule).replace(/^@css:/, '');
    var parts = text.split('@');
    var selector = parts[0] || '*';
    var attr = parts[1] || 'text';
    var doc = typeof context === 'string' ? legado.dom.parse(context) : context;
    if (attr === 'text') return legado.dom.selectText(doc, selector);
    if (attr === 'html') return legado.dom.selectHtml ? legado.dom.selectHtml(doc, selector) : legado.dom.selectText(doc, selector);
    if (attr === 'all') return legado.dom.selectText(doc, selector);
    return legado.dom.selectAttr(doc, selector, attr);
  }

  function evaluateXPath(context, rule) {
    if (!legado.dom) return '';
    if (!legado.dom.xpath && !legado.dom.selectText) return '';
    var doc = typeof context === 'string' ? legado.dom.parse(context) : context;
    if (legado.dom.xpath) return legado.dom.xpath(doc, rule);
    if (/\/text\(\)$/.test(rule)) return legado.dom.selectText(doc, rule.replace(/\/text\(\)$/, ''));
    var attr = rule.match(/\/@([\w:-]+)$/);
    if (attr) return legado.dom.selectAttr(doc, rule.replace(/\/@[\w:-]+$/, ''), attr[1]);
    return legado.dom.selectText(doc, rule);
  }

  function evaluateDefault(context, rule) {
    var clean = splitRuleAndClean(rule);
    var text = clean.rule.trim();
    var value;
    if (!text || text === 'all') value = context;
    else if (text.indexOf('@json:') === 0 || text.indexOf('$.') === 0 || text === '$') value = evaluateJsonPath(context, text);
    else if (text.indexOf('@css:') === 0) value = evaluateCss(context, text);
    else if (text.indexOf('@XPath:') === 0) value = evaluateXPath(context, text.replace(/^@XPath:/, ''));
    else if (text.indexOf('//') === 0) value = evaluateXPath(context, text);
    else if (text.indexOf('{{') !== -1) value = renderTemplate(text, {}, context);
    else value = getPathValue(context, text);
    return clean.clean ? applyRegexClean(value, clean.clean) : value;
  }

  function applyRule(context, rule) {
    if (!rule) return '';
    var text = String(rule);
    if (text.indexOf('||') !== -1) {
      var any = text.split('||');
      for (var i = 0; i < any.length; i++) {
        var value = applyRule(context, any[i]);
        if (stringify(value)) return value;
      }
      return '';
    }
    if (text.indexOf('&&') !== -1) return text.split('&&').map(function (part) { return stringify(applyRule(context, part)); }).join('');
    if (text.indexOf('@js:') === 0 || text.indexOf('<js>') === 0) return runRuleScript(text, context);
    return evaluateDefault(context, text);
  }

  function runRuleScript(script, context) {
    var java = createJavaShim({ result: context });
    var cache = createCacheShim();
    var cookie = createCookieShim();
    var result = context;
    try {
      var body = String(script).replace(/^@js:/, '').replace(/^<js>|<\/js>$/g, '');
      var fn = new Function('java', 'cache', 'cookie', 'source', 'result', 'baseUrl', body);
      var value = fn(java, cache, cookie, source, result, baseUrl());
      return value === undefined ? result : value;
    } catch (error) {
      unsupported('rule script failed: ' + error.message);
      return '';
    }
  }

  function mapFields(context, rules, mapping, parentUrl) {
    var item = {};
    Object.keys(mapping).forEach(function (target) {
      var oldKey = mapping[target];
      var value = applyRule(context, rules && rules[oldKey]);
      if ((target === 'bookUrl' || target === 'tocUrl' || target === 'coverUrl' || target === 'url') && value) value = absolutize(value, parentUrl || baseUrl());
      item[target] = stringify(first(value));
    });
    return item;
  }

  function listByRule(data, rule) {
    var value = applyRule(data, rule);
    return asArray(value);
  }

  function createJavaShim(vars) {
    return {
      ajax: function (url) { unsupported('java.ajax sync shim'); return ''; },
      ajaxAll: function () { unsupported('java.ajaxAll sync shim'); return []; },
      base64Encode: function (value) { return btoa(unescape(encodeURIComponent(String(value)))); },
      base64Decode: function (value) { return decodeURIComponent(escape(atob(String(value)))); },
      hexDecodeToString: function (value) {
        var out = '';
        String(value).replace(/../g, function (hex) { out += String.fromCharCode(parseInt(hex, 16)); return hex; });
        return out;
      },
      md5Encode: function () { unsupported('java.md5Encode'); return ''; },
      md5Encode16: function () { unsupported('java.md5Encode16'); return ''; },
      timeFormat: function (value) { return new Date(Number(value)).toISOString(); },
      encodeURI: function (value) { return encodeURIComponent(String(value)); },
      urlEncodeCharset: function (value) { return encodeURIComponent(String(value)); },
      htmlFormat: function (value) { return String(value).replace(/<[^>]+>/g, ''); },
      getString: function (rule) { return stringify(first(applyRule(vars.result || {}, rule))); },
      put: function (key, value) { memoryCache[key] = value; },
      get: function (key) { return memoryCache[key]; },
      log: log,
      toast: log,
      longToast: log
    };
  }

  function createCacheShim() {
    return { get: function (key) { return memoryCache[key]; }, put: function (key, value) { memoryCache[key] = value; } };
  }

  function createCookieShim() {
    return { getKey: function () { unsupported('cookie.getKey'); return ''; } };
  }

  async function search(keyword, page) {
    try {
      var vars = { keyword: keyword, page: page || 1, baseUrl: baseUrl() };
      var response = await request(source.searchUrl, vars, source);
      var data = parseData(response);
      var list = listByRule(data, source.ruleSearch && source.ruleSearch.bookList);
      return list.map(function (node) {
        return mapFields(node, source.ruleSearch, {
          name: 'name', author: 'author', bookUrl: 'bookUrl', coverUrl: 'coverUrl', intro: 'intro', kind: 'kind', latestChapter: 'lastChapter'
        }, vars.baseUrl);
      }).filter(function (book) { return book.name || book.bookUrl; });
    } catch (error) {
      log('[legacyRuntime search failed] ' + error.message);
      return [];
    }
  }

  async function bookInfo(bookUrl) {
    try {
      var response = await request(bookUrl, { baseUrl: bookUrl }, {});
      var data = parseData(response);
      if (source.ruleBookInfo && source.ruleBookInfo.init) data = applyRule(data, source.ruleBookInfo.init) || data;
      var info = mapFields(data, source.ruleBookInfo, {
        name: 'name', author: 'author', bookUrl: 'bookUrl', tocUrl: 'tocUrl', coverUrl: 'coverUrl', intro: 'intro', kind: 'kind', latestChapter: 'lastChapter'
      }, bookUrl);
      info.bookUrl = info.bookUrl || bookUrl;
      info.tocUrl = info.tocUrl || bookUrl;
      return info;
    } catch (error) {
      log('[legacyRuntime bookInfo failed] ' + error.message);
      return { name: '', author: '', bookUrl: bookUrl, tocUrl: bookUrl, coverUrl: '', intro: '' };
    }
  }

  async function chapterList(tocUrl) {
    try {
      var response = await request(tocUrl, { baseUrl: tocUrl }, {});
      var data = parseData(response);
      var list = listByRule(data, source.ruleToc && source.ruleToc.chapterList);
      return list.map(function (node) {
        return mapFields(node, source.ruleToc, { name: 'chapterName', url: 'chapterUrl', group: 'group' }, tocUrl);
      }).filter(function (chapter) { return chapter.name || chapter.url; });
    } catch (error) {
      log('[legacyRuntime chapterList failed] ' + error.message);
      return [];
    }
  }

  async function chapterContent(chapterUrl) {
    try {
      var response = await request(chapterUrl, { baseUrl: chapterUrl }, {});
      var data = parseData(response);
      return stringify(applyRule(data, source.ruleContent && source.ruleContent.content));
    } catch (error) {
      log('[legacyRuntime chapterContent failed] ' + error.message);
      return '';
    }
  }

  async function explore(page, category) {
    try {
      var entries = String(source.exploreUrl || '').split(/\n+/).filter(Boolean);
      if (category === 'GETALL') return entries.map(function (line) { return line.split('::')[0]; }).filter(Boolean);
      var matched = entries.filter(function (line) { return line.split('::')[0] === category; })[0];
      if (!matched) return [];
      var urlRule = matched.split('::').slice(1).join('::');
      var response = await request(urlRule, { page: page || 1, baseUrl: baseUrl() }, {});
      var data = parseData(response);
      var list = listByRule(data, source.ruleExplore && source.ruleExplore.bookList);
      return list.map(function (node) {
        var item = mapFields(node, source.ruleExplore, {
          name: 'name', author: 'author', bookUrl: 'bookUrl', coverUrl: 'coverUrl', intro: 'intro', kind: 'kind', latestChapter: 'lastChapter'
        }, baseUrl());
        item.kind = item.kind || category;
        return item;
      }).filter(function (book) { return book.name || book.bookUrl; });
    } catch (error) {
      log('[legacyRuntime explore failed] ' + error.message);
      return [];
    }
  }

  return { search: search, bookInfo: bookInfo, chapterList: chapterList, chapterContent: chapterContent, explore: explore, applyRule: applyRule, request: request, evaluateJsonPath: evaluateJsonPath, evaluateCss: evaluateCss, evaluateXPath: evaluateXPath, createJavaShim: createJavaShim };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: existing tests may still fail until Task 2 if they expect generated content changes; the new runtime-template test should no longer fail with `FileNotFoundError`.

## Task 2: Embed Runtime and Real Function Wrappers

**Files:**
- Modify: `scripts/convert_book_json.py:119-157`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Add failing test for generated runtime wrappers**

Replace assertions in `test_convert_writes_js_with_metadata_and_payload()` that check old placeholder logs with these assertions:

```python
        assert 'function createLegacyRuntime(source)' in content
        assert 'const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);' in content
        assert 'return await legacyRuntime.search(keyword, page);' in content
        assert 'return await legacyRuntime.bookInfo(bookUrl);' in content
        assert 'return await legacyRuntime.chapterList(tocUrl);' in content
        assert 'return await legacyRuntime.chapterContent(chapterUrl);' in content
        assert 'return await legacyRuntime.explore(page, category);' in content
        assert 'converted source requires manual migration' not in content
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL because generated JS still contains placeholder functions.

- [ ] **Step 3: Modify `convert_book_json.py`**

Add this helper above `render_source`:

```python
def runtime_template():
    return (Path(__file__).with_name("legacy_runtime.js")).read_text(encoding="utf-8")
```

Replace `render_source(source)` with:

```python
def render_source(source):
    metadata = "\n".join(metadata_lines(source))
    payload = js_string(source)
    runtime = runtime_template()
    return f"""{metadata}

const LEGADO_SOURCE = {payload};

{runtime}

const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);

async function search(keyword, page) {{
  return await legacyRuntime.search(keyword, page);
}}

async function bookInfo(bookUrl) {{
  return await legacyRuntime.bookInfo(bookUrl);
}}

async function chapterList(tocUrl) {{
  return await legacyRuntime.chapterList(tocUrl);
}}

async function chapterContent(chapterUrl) {{
  return await legacyRuntime.chapterContent(chapterUrl);
}}

async function explore(page, category) {{
  return await legacyRuntime.explore(page, category);
}}
"""
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 3: Add Compatibility Report

**Files:**
- Modify: `scripts/convert_book_json.py`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Add failing tests for compatibility report**

Add these tests to `scripts/test_convert_book_json.py`:

```python
def test_analyze_compatibility_detects_features_and_manual_level():
    source = {
        'bookSourceName': '复杂源',
        'searchUrl': '@js:java.ajax("https://example.com")',
        'ruleContent': {'content': 'Packages.javax.crypto.Cipher'},
        'ruleBookInfo': {'name': '@css:h1@text'},
        'ruleToc': {'chapterList': '$.data[*]'},
        'ruleExplore': {'bookList': '//div'},
        'ruleSearch': {'bookList': '$.list'},
        'ruleContent': {'webJs': 'click()', 'content': 'all'},
    }

    report = analyze_compatibility(source, '复杂源.js')

    assert report['name'] == '复杂源'
    assert report['fileName'] == '复杂源.js'
    assert report['level'] == 'manual'
    assert 'js' in report['features']
    assert 'java.ajax' in report['features']
    assert 'css' in report['features']
    assert 'jsonpath' in report['features']
    assert 'xpath' in report['features']
    assert 'webView' in report['unsupported']
    assert 'Android Java package' in report['unsupported']


def test_convert_writes_compatibility_report():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        input_path = root / 'book.json'
        output_dir = root / 'booksources'
        input_path.write_text(json.dumps([
            {'bookSourceName': '简单源', 'bookSourceUrl': 'https://example.com', 'ruleSearch': {'bookList': '$.data'}}
        ], ensure_ascii=False), encoding='utf-8')

        convert(input_path, output_dir)

        report_path = output_dir / 'compatibility-report.json'
        assert report_path.exists()
        report = json.loads(report_path.read_text(encoding='utf-8'))
        assert report[0]['name'] == '简单源'
        assert report[0]['level'] in {'high', 'partial', 'manual'}
```

Update the import line to include `analyze_compatibility`.

- [ ] **Step 2: Run tests to verify they fail**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL because `analyze_compatibility` does not exist.

- [ ] **Step 3: Implement compatibility analysis**

Add these imports and functions to `scripts/convert_book_json.py`:

```python
FEATURE_PATTERNS = {
    "js": re.compile(r"@js:|<js>", re.I),
    "java.ajax": re.compile(r"\bjava\.ajax(All)?\b", re.I),
    "java.base64": re.compile(r"\bjava\.base64", re.I),
    "java.md5": re.compile(r"\bjava\.md5", re.I),
    "cache": re.compile(r"\bcache\.", re.I),
    "cookie": re.compile(r"\bcookie\.", re.I),
    "source": re.compile(r"\bsource\.", re.I),
    "jsonpath": re.compile(r"@json:|\$\.", re.I),
    "css": re.compile(r"@css:", re.I),
    "xpath": re.compile(r"@XPath:|//", re.I),
}

UNSUPPORTED_PATTERNS = {
    "webView": re.compile(r"webView|webJs", re.I),
    "Android Java package": re.compile(r"Packages\.|JavaImporter", re.I),
    "crypto/signature": re.compile(r"javax\.crypto|MessageDigest|xGorgon|sign_key|Crypto", re.I),
}


def analyze_compatibility(source, file_name):
    text = json.dumps(source, ensure_ascii=False)
    features = [name for name, pattern in FEATURE_PATTERNS.items() if pattern.search(text)]
    unsupported = [name for name, pattern in UNSUPPORTED_PATTERNS.items() if pattern.search(text)]
    if unsupported:
        level = "manual"
    elif "js" in features or any(name.startswith("java.") for name in features):
        level = "partial"
    else:
        level = "high"
    return {
        "name": clean_text(source.get("bookSourceName")) or Path(file_name).stem,
        "fileName": file_name,
        "level": level,
        "features": features,
        "unsupported": unsupported,
    }
```

Modify `convert()` so it collects reports and writes `compatibility-report.json`:

```python
    reports = []
    for index, source in enumerate(sources, start=1):
        ...
        path.write_text(render_source(source), encoding="utf-8")
        written.append(path)
        reports.append(analyze_compatibility(source, filename))
    (output_dir / "compatibility-report.json").write_text(
        json.dumps(reports, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 4: Strengthen Output Validation

**Files:**
- Modify: `scripts/check_outputs.py`
- Modify: `scripts/test_check_outputs.py`

- [ ] **Step 1: Add failing validation test for runtime wrappers**

Add this test to `scripts/test_check_outputs.py`:

```python
def test_check_rejects_placeholder_generated_source():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        booksources = root / 'booksources'
        repository = root / 'repository'
        booksources.mkdir()
        repository.mkdir()
        placeholder = """
async function search(keyword, page) {
  legado.log('[search] converted source requires manual migration');
  return [];
}
"""
        (booksources / 'bad.js').write_text(placeholder, encoding='utf-8')
        (repository / 'bad.js').write_text(placeholder, encoding='utf-8')
        (repository / 'repository.json').write_text(json.dumps({
            'sources': [{
                'name': 'bad', 'version': '1.0.0', 'url': 'https://example.com',
                'fileName': 'bad.js',
                'downloadUrl': 'https://raw.githubusercontent.com/user/repo/refs/heads/master/repository/bad.js',
                'fileSize': len(placeholder), 'updatedAt': '2026-04-24T00:00:00Z'
            }]
        }), encoding='utf-8')

        try:
            check(booksources, repository)
        except SystemExit as exc:
            assert 'legacy runtime' in str(exc)
        else:
            raise AssertionError('check should fail')
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_check_outputs.py
```

Expected: FAIL because `check_outputs.py` does not inspect JS runtime content.

- [ ] **Step 3: Implement runtime validation**

In `scripts/check_outputs.py`, inside the loop over `sources`, after `downloadUrl` validation, add:

```python
        content = (repository_dir / file_name).read_text(encoding="utf-8")
        required_fragments = [
            "function createLegacyRuntime(source)",
            "const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);",
            "return await legacyRuntime.search(keyword, page);",
            "return await legacyRuntime.bookInfo(bookUrl);",
            "return await legacyRuntime.chapterList(tocUrl);",
            "return await legacyRuntime.chapterContent(chapterUrl);",
            "return await legacyRuntime.explore(page, category);",
        ]
        for fragment in required_fragments:
            if fragment not in content:
                raise SystemExit(f"missing legacy runtime fragment in {file_name}: {fragment}")
```

- [ ] **Step 4: Update passing test fixture**

In `test_check_accepts_matching_booksources_repository_and_index()`, replace the JS content with a minimal string containing all required fragments:

```python
        valid_js = '''
const LEGADO_SOURCE = {};
function createLegacyRuntime(source) { return {}; }
const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);
async function search(keyword, page) { return await legacyRuntime.search(keyword, page); }
async function bookInfo(bookUrl) { return await legacyRuntime.bookInfo(bookUrl); }
async function chapterList(tocUrl) { return await legacyRuntime.chapterList(tocUrl); }
async function chapterContent(chapterUrl) { return await legacyRuntime.chapterContent(chapterUrl); }
async function explore(page, category) { return await legacyRuntime.explore(page, category); }
'''
        (booksources / '示例.js').write_text(valid_js, encoding='utf-8')
        (repository / '示例.js').write_text(valid_js, encoding='utf-8')
```

- [ ] **Step 5: Run validator tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_check_outputs.py
```

Expected: PASS.

## Task 5: Regenerate Outputs

**Files:**
- Generated: `booksources/*.js`
- Generated: `booksources/compatibility-report.json`
- Generated: `repository/*.js`
- Generated: `repository/repository.json`

- [ ] **Step 1: Regenerate editable sources**

Run:

```bash
python3 scripts/convert_book_json.py --input book.json --output booksources
```

Expected:

```text
Converted 459 sources into booksources
```

- [ ] **Step 2: Regenerate public repository with master refs URL**

Run:

```bash
python3 scripts/prepare_public_repository.py \
  --source-dir booksources \
  --repository-dir repository \
  --base-url https://raw.githubusercontent.com/qiupo/bookSource/refs/heads/master \
  --name "我的社区书源仓库"
```

Expected:

```text
Prepared repository: copied 459 sources, indexed 459 sources
```

If absolute paths are printed instead of `repository`, accept the same counts.

- [ ] **Step 3: Validate outputs**

Run:

```bash
python3 scripts/check_outputs.py --booksources-dir booksources --repository-dir repository
```

Expected:

```text
Validated 459 sources
```

- [ ] **Step 4: Inspect compatibility report summary**

Run:

```bash
python3 - <<'PY'
import json
from collections import Counter
from pathlib import Path
report = json.loads(Path('booksources/compatibility-report.json').read_text(encoding='utf-8'))
print(len(report))
print(dict(Counter(item['level'] for item in report)))
print(report[0]['name'], report[0]['level'])
PY
```

Expected first line:

```text
459
```

- [ ] **Step 5: Inspect generated JS wrapper**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
first = sorted(Path('repository').glob('*.js'))[0]
text = first.read_text(encoding='utf-8')
for fragment in ['function createLegacyRuntime(source)', 'return await legacyRuntime.search(keyword, page);', 'return await legacyRuntime.explore(page, category);']:
    assert fragment in text, fragment
print(first.name)
print('runtime wrapper ok')
PY
```

Expected:

```text
runtime wrapper ok
```

## Task 6: Final Full Verification

**Files:**
- Verify scripts and outputs only.

- [ ] **Step 1: Run all script tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py && \
PYTHONPATH=scripts python3 scripts/test_generate_repository.py && \
PYTHONPATH=scripts python3 scripts/test_prepare_public_repository.py && \
PYTHONPATH=scripts python3 scripts/test_check_outputs.py
```

Expected output contains:

```text
convert tests passed
repository generator tests passed
prepare repository tests passed
output validator tests passed
```

- [ ] **Step 2: Verify repository URL and runtime content**

Run:

```bash
python3 - <<'PY'
import json
from pathlib import Path
payload = json.loads(Path('repository/repository.json').read_text(encoding='utf-8'))
assert len(payload['sources']) == 459
assert all(item['downloadUrl'].startswith('https://raw.githubusercontent.com/qiupo/bookSource/refs/heads/master/repository/') for item in payload['sources'])
for path in sorted(Path('repository').glob('*.js'))[:10]:
    text = path.read_text(encoding='utf-8')
    assert 'function createLegacyRuntime(source)' in text
    assert 'const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);' in text
print('final repository runtime verification ok')
PY
```

Expected:

```text
final repository runtime verification ok
```
