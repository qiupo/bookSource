// @name 陶越文华（优++）
// @version 2025.12.21
// @author 明月照大江
// @url https://qcbook.taoyuewenhua.net
// @enabled true
// @tags 小说,书源,converted
// @description 作者：明月照大江

const LEGADO_SOURCE = {
  "bookSourceComment": "作者：明月照大江",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "陶越文华（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://qcbook.taoyuewenhua.net",
  "customButton": false,
  "customOrder": 45,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nif (source.getVariable() == \"\") {\n  java.log(\"未注册设备，自动注册中…\");\n  eval(String(source.loginUrl));\n  login();\n}\nlet push = (list, title, url, type) => list.push({ title: title, url: url, style: { layout_flexGrow: type } });\n\nconst categories = [\n  [\n    \"玄幻\", \"奇幻\", \"武侠\", \"仙侠\", \"都市\",\n    \"历史\", \"军事\", \"奇闻怪谈\", \"科幻\", \"游戏\",\n    \"体育\", \"N次元\", \"现实\"\n  ],\n  [\n    \"玄幻言情\", \"仙侠奇缘\", \"古代言情\", \"现代言情\",\n    \"浪漫青春\", \"奇闻怪谈\", \"科幻空间\", \"游戏竞技\",\n    \"N次元\", \"同人纯爱\", \"短篇\"\n  ]\n];\n\nlet list = [];\n\n// 男生推荐\npush(list, \"▱▱▱▱男生推荐▱▱▱▱\", null, 1);\ncategories[0].forEach(category => {\n  // 生成动态请求地址\n  let u = `@js:let t = Date.now().toString();\n  let params = {\n    btype: 100,\n    category: \"${category}\",\n    ctype: 1,\n    page: page - 1,\n    pageSize: \"16\",\n    t: t\n  };\n  creatRequest(\"/book_mall/book_rank\", params)`;\n  push(list, category, u, 0.16);\n});\n\n// 女生推荐\npush(list, \"▱▱▱▱女生推荐▱▱▱▱\", null, 1);\ncategories[1].forEach(category => {\n  let u = `@js:let t = Date.now().toString();\n  let params = {\n    brtype: 100,\n    category: \"${category}\",\n    ctype: 2,\n    page: page - 1,\n    pageSize: \"10\",\n    t: t\n  };\n  creatRequest(\"/book_mall/book_rank\", params)`;\n  push(list, category, u, 0.16);\n});\n\nJSON.stringify(list);",
  "header": "{\n  \"User-Agent\": \"okhttp/4.12.0\",\n  \"Connection\": \"Keep-Alive\",\n  \"Accept\": \"*/*\",\n  \"Accept-Encoding\": \"\"\n}",
  "jsLib": "let default_pm = {\n    appid: \"qcbook\",\n    optype: \"0\",\n    ostype: \"0\",\n    package_name: \"com.martian.qmbook\",\n    version_code: \"617\",\n    version_name: \"2.2.6.8\"\n};\n\nfunction o2p(json) {\n    if (typeof json !== \"object\" || json === null) {\n        return \"\";\n    }\n    return Object.keys(json)\n        .sort()\n        .map(key => encodeURIComponent(key) + \"=\" + json[key])\n        .join(\"&\");\n}\n\nfunction ruid(l, k = true) {\n    var u = String(Packages.java.util.UUID.randomUUID());\n    u = k ? u : u.replace(/-/g, \"\");\n    return l > 0 ? u.substring(0, l) : u;\n}\n\nfunction creatRequest(path, params, method, body) {\n    const { source, java } = this;\n    let default_pm = JSON.parse(source.getVariable());\n    let pm = Object.assign({}, params, default_pm);\n    let spm = o2p(pm);\n    pm.sign = java.md5Encode(spm + \"&key=qcbook_123456\");\n    spm = o2p(pm);\n    return path + \"?\" + spm;\n}",
  "lastUpdateTime": 1766359781494,
  "loginUi": "[\n{\"name\":\"游客登录\",\"type\":\"button\",\"action\":\"login()\"}\n]",
  "loginUrl": "function login() {\n    let aid = ruid(16, false),\n        did = ruid(),\n        gaid = ruid(),\n        t = Date.now().toString(),\n        model = Packages.android.os.Build.MODEL,\n        brand = Packages.android.os.Build.MANUFACTURER,\n        os = Math.floor(Math.random() * (15 - 10 + 1)) + 10;\n    default_pm.device_id = did;\n    default_pm.gaid = gaid;\n    default_pm.model = model;\n    default_pm.brand = brand;\n    default_pm.channel = brand;\n    default_pm.osversion = os;\n    default_pm.android_id = aid;\n    pm = Object.assign({}, default_pm);\n    pm.t = t;\n    spm = o2p(pm) + \"&key=qcbook_123456\";\n    sign = java.md5Encode(spm);\n    pm.sign = sign;\n    spm = o2p(pm);\n    java.log(spm);\n    u = \"https://qcbook.taoyuewenhua.net/guest_user_login?\" + spm;\n\n    loginres = java.ajax(u);\n    res = JSON.parse(loginres);\n    if (res.errmsg == \"success\") {\n        java.longToast(\"✅登录成功\");\n        default_pm.uid = res.data.uid;\n        default_pm.token = res.data.token;\n        source.setVariable(JSON.stringify(default_pm));\n    } else {\n        java.longToast(\"❌登录失败\" + res.errmsg);\n    }\n}",
  "respondTime": 52701,
  "ruleBookInfo": {
    "author": "data.authorName",
    "intro": "data.intro",
    "lastChapter": "data.latestChapter",
    "name": "data.title",
    "tocUrl": "http://scdn.taoyuewenhua.net/app/chapters/{{$.data.bid}}.json"
  },
  "ruleContent": {
    "content": "data.content",
    "replaceRegex": "##[\\u0041-\\u005A\\u0061-\\u007A\\uFF21-\\uFF3A\\uFF41-\\uFF5A]+\\.[\\u0041-\\u005A\\u0061-\\u007A\\uFF21-\\uFF3A\\uFF41-\\uFF5A0-9\\uFF10-\\uFF19-]+\\.[\\u0041-\\u005A\\u0061-\\u007A\\uFF21-\\uFF3A\\uFF41-\\uFF5A]{2,}.*|{{chapter.title}}|第[0-9一二两三四五六七八九十百千万]{1,9}章.*|[(（]?本章未?完[）)]?.*|\\(第.+页\\)|.?加入书签.*|.*下一页(翻页)?继续阅读.*|.*(退出|浏览器)阅读模式.*|.*点击下载{{book.name}}.*|.*最新(永久域名|网址).*|.*一秒记住(本站地址|.+网).*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "authorName",
    "bookList": "data.bookList",
    "bookUrl": "@js:\nlet t = Date.now().toString(),\n    params = { \n    \tbid: \"{{$.sourceId}}\", \n    \tt: t\n    \t};\ncreatRequest(\"/tf/book\", params);",
    "coverUrl": "coverUrl",
    "intro": "intro",
    "kind": "categoryName&&tagList",
    "name": "title",
    "wordCount": "allWords"
  },
  "ruleToc": {
    "chapterList": "data.chapterList",
    "chapterName": "title",
    "chapterUrl": "@js:\nlet bid = \"{{$.bid}}\"\n,cid = \"{{$.cid}}\"\n,t = Date.now().toString()\nparams = {\n\tbid:bid,\n\tcid:cid,\n\tt:t\n}\ncreatRequest(\n\t\"https://qcbook.taoyuewenhua.net/tf/chapter_content\",\n\tparams\n)"
  },
  "searchUrl": "@js:\nif (source.getVariable() == \"\") {\n\tjava.log(\"未注册设备，自动注册中…\")\n\teval(String(source.loginUrl));\n\tlogin();\n}\nlet t = Date.now().toString(),\n    params = {\n        ctype: 0,\n        keywords: key,\n        order: 0,\n        page: page,\n        pageSize: 10,\n        searchType: 1,\n        t: t\n    };\ncreatRequest(\"/authopt/ty/search_books\", params);",
  "weight": 0
};

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

  function sourceType() {
    if (source.bookSourceType === 2) return 'comic';
    if (source.bookSourceType === 4) return 'video';
    if (source.bookSourceType === 1) return 'audio';
    return 'novel';
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

  function unique(values) {
    var seen = {};
    var out = [];
    for (var i = 0; i < values.length; i++) {
      var value = String(values[i] || '').trim();
      if (value && !seen[value]) {
        seen[value] = true;
        out.push(value);
      }
    }
    return out;
  }

  function extractImageUrls(value, parentUrl) {
    var text = stringify(value);
    var urls = [];
    try {
      var parsed = JSON.parse(text);
      if (Array.isArray(parsed)) urls = parsed;
    } catch (_) {}
    text.replace(/<img[^>]+(?:src|data-src|data-original)=["']([^"']+)["'][^>]*>/gi, function (_, url) {
      urls.push(url);
      return _;
    });
    text.split(/[\n,]+/).forEach(function (part) {
      if (/\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(part)) urls.push(part.trim());
    });
    return unique(urls.map(function (url) { return absolutize(url, parentUrl || baseUrl()); }));
  }

  function extractMediaUrl(value, parentUrl) {
    var text = stringify(value).replace(/\\\//g, '/');
    var match = text.match(/https?:\/\/[^\s"'<>]+\.(m3u8|mp4|mp3|m4a|flv|avi|mkv)(\?[^\s"'<>]*)?/i);
    if (match) return absolutize(match[0], parentUrl || baseUrl());
    if (/^https?:\/\//i.test(text.trim())) return absolutize(text.trim(), parentUrl || baseUrl());
    return text.trim();
  }

  function formatChapterContent(value, parentUrl) {
    var type = sourceType();
    if (type === 'comic') return JSON.stringify(extractImageUrls(value, parentUrl));
    if (type === 'video' || type === 'audio') return extractMediaUrl(value, parentUrl);
    return stringify(value);
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
      return formatChapterContent(applyRule(data, source.ruleContent && source.ruleContent.content), chapterUrl);
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


const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);

async function search(keyword, page) {
  return await legacyRuntime.search(keyword, page);
}

async function bookInfo(bookUrl) {
  return await legacyRuntime.bookInfo(bookUrl);
}

async function chapterList(tocUrl) {
  return await legacyRuntime.chapterList(tocUrl);
}

async function chapterContent(chapterUrl) {
  return await legacyRuntime.chapterContent(chapterUrl);
}

async function explore(page, category) {
  return await legacyRuntime.explore(page, category);
}
