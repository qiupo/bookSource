// @name 轻文库说（优++）
// @version 2025.10.01
// @author converted
// @url 轻文库小说
// @enabled true
// @tags 小说,书源,converted
// @description -聆听月与悦 . 25-8.15
// @description -
// @description -app链接(三十天有效期)：
// @description https://www.123865.com/s/ASCSjv-z7QTv

const LEGADO_SOURCE = {
  "bookSourceComment": "-聆听月与悦 . 25-8.15\n-\n\t\n-app链接(三十天有效期)：\n https://www.123865.com/s/ASCSjv-z7QTv",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "轻文库说（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "轻文库小说",
  "customButton": false,
  "customOrder": 25,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n {\n   \"title\": \" 最近更新 \",\n   \"url\": \"{{Update()}}\",\n   \"style\": {\n       \"layout_flexGrow\": 0,\n       \"layout_flexBasisPercent\": 1 \n   }\n },\n {\n   \"title\": \" ↓ 排行榜 ↓ \",\n   \"url\": \"\",\n   \"style\": {\n       \"layout_flexGrow\": 0,\n       \"layout_flexBasisPercent\": 1\n   }\n },\n {\n   \"title\": \" 总点击排行 \",\n   \"url\": \"{{Every()}}\",\n   \"style\": {\n       \"layout_flexGrow\": 1,\n       \"layout_flexBasisPercent\": 0.29\n   }\n },\n {\n   \"title\": \" 总推荐排行 \",\n   \"url\": \"source.getKey()\",\n   \"style\": {\n       \"layout_flexGrow\": 1,\n       \"layout_flexBasisPercent\": 0.29\n   }\n }\n]",
  "header": "{\n\t\"User-Agent\": \"Dalvik/2.1.0 (Linux; U; Android 15; V2338A Build/AP3A.240905.015.A2)\",\n\t\"Content-Type\": \"application/x-www-form-urlencoded\"\n}",
  "jsLib": "let base_url = \"http://app.wenku8.com/android.php\";\n\nfunction Update() {\n    try {\n        let burl = \"https://wenku8-relay.mewx.org/,\";\n        let by = \"action=novellist&sort=lastupdate&page={{page}}&t=0\";\n        const timetoken = Packages.java.lang.System.currentTimeMillis();\n        const base64Encode = (str) => {\n            const bytes = new java.lang.String(str).getBytes(\"UTF-8\");\n            return Packages.android.util.Base64.encodeToString(bytes, Packages.android.util.Base64.NO_WRAP);\n        };\n        \n        let body = {\n            \"body\": `&appver=1.22&timetoken=${timetoken}&request=${base64Encode(by)}`,\n            \"charset\": \"UTF-8\",\n            \"method\": \"POST\"\n        };\n        \n        return burl + JSON.stringify(body);\n        \n    } catch (e) {\n        // 错误处理\n        Packages.java.lang.System.err.println(\"Update函数错误: \" + e);\n        return \"https://wenku8-relay.mewx.org/,\" + JSON.stringify({\n            error: e.toString()\n        });\n    }\n}\nfunction Every() {\n    let burl = \"https://wenku8-relay.mewx.org/,\";\n    let by = \"action=articlelist&sort=allvisit&page={{page}}&t=0\";\n    const timetoken = Packages.java.lang.System.currentTimeMillis();\n    const base64Encode = (str) => {\n    const bytes = new java.lang.String(str).getBytes(\"UTF-8\");\n    return Packages.android.util.Base64.encodeToString(bytes, Packages.android.util.Base64.NO_WRAP);\n   };\n        \n    let body = {\n       \"body\": `&appver=1.22&timetoken=${timetoken}&request=${base64Encode(by)}`,\n        \"charset\": \"UTF-8\",\n        \"method\": \"POST\"\n    };\n    return burl + JSON.stringify(body);\n }",
  "lastUpdateTime": 1759350589619,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "//data[@name='Author']/@value",
    "coverUrl": "@js:\nvar id = java.getString(\"//data[@name='Title']/@aid\");\nvar iid = id.toString().substring(0,1);\nvar cover = \"http://img.wenku8.com/image/\" + iid + \"/\" + id + \"/\" + id + \"s.jpg\";\ncover ",
    "init": "@js:\n//完整简介\nvar id = java.getString(\"//data[@name='Title']/@aid\");\nvar by = `action=book&do=intro&aid=${id}&t=0`;\nvar body = {\n  body: `&appver=1.22&timetoken=${Date.now()}&request=${java.base64Encode(by)}`,\n  method: \"POST\"\n}\nvar url = base_url + \",\" + JSON.stringify(body);\nvar intro = java.ajax(url);\njava.put(\"intro\", intro);\njava.put(\"bid\", id);\nsrc",
    "intro": "&nbsp;&nbsp;\n📖 书名：{{//data[@name='Title']/text()}}\n✏️ 作者：{{//data[@name='Author']/@value}}{{\"\\n\"+\"​\"}}\n🏷 标签：{{//data[@name='Tags']/@value}}\n🎐 来源：{{//data[@name='PressId']/@value}}\n👀点击量：{{//data[@name='TotalHitsCount']/@value}}{{\"\\n\"+\"​\"}}\n📜 简介：{{java.get(\"intro\")}}",
    "kind": "//data[@name='Tags']/@value",
    "lastChapter": "{{//data[@name='LatestSection']/text()}} {{//data[@name='LastUpdate']/@value}}",
    "name": "//data[@name='Title']/text()",
    "tocUrl": "@js:\nvar s = base_url + \",\";\nvar id = java.getString(\"//data[@name='Title']/@aid\");\nvar by = `action=book&do=list&aid=${id}&t=0`;\nvar body = {\n  body: `&appver=1.22&timetoken=${Date.now()}&request=${java.base64Encode(by)}`,\n  method: \"POST\"\n}\nvar CheaperUrl = s + JSON.stringify(body);\nCheaperUrl"
  },
  "ruleContent": {
    "content": "<js>\nfunction convertToSimpleImgTags(content) {\n    if (!content || typeof content !== \"string\") {\n        return content;\n    }\n    var imgRegex = /(https?:\\/\\/[^\\s]+?\\.(?:jpg|png|webp|jpeg)(?:\\?[^\\s]*)?)/gi;\n    var newContent = content.replace(imgRegex, function(url) {\n        return '<img src=\"' + url + '\">';\n    });\n    \n    return newContent;\n}\nresult = convertToSimpleImgTags(result);\n</js>"
  },
  "ruleExplore": {
    "author": "//data[@name='Author']/@value",
    "bookList": "@XPath:item",
    "bookUrl": "@js:\nvar s = base_url + \",\";\nvar id = java.getString(\"//@aid\");\nvar by = `action=book&do=meta&aid=${id}&t=0`;\nvar body = {\n  body: `&appver=1.22&timetoken=${Date.now()}&request=${java.base64Encode(by)}`,\n  method: \"POST\"\n}\nvar bookUrl = s + JSON.stringify(body);\nbookUrl",
    "coverUrl": "@js:\nvar id = java.getString(\"//@aid\");\nvar iid = id.toString().substring(0,1);\nvar cover = \"http://img.wenku8.com/image/\" + iid + \"/\" + id + \"/\" + id + \"s.jpg\";\ncover ",
    "intro": "//data[@name='IntroPreview']/text()",
    "kind": "//data[@name='Tags']/@value\n@js:\nif ( !result ) {\n\t   result = java.get(\"tag\");\n\t} else {\n\t\t  result\n\t}",
    "lastChapter": "{{//data[@name='LastUpdate']/@value}}",
    "name": "//data[@name='Title']/text()\n@js:\nif ( !result ) {\n\t   let id = java.getString(\"//@aid\");\n\t   let by = `action=book&do=meta&aid=${id}&t=0`;\n\t   let body = {\n          body: `&appver=1.22&timetoken=${Date.now()}&request=${java.base64Encode(by)}`,\n          method: \"POST\"\n       }\n\t   let book = java.ajax(base_url + \",\" + JSON.stringify(body));\n\t   java.put(\"tag\", java.getString(\"//data[@name='Tags']/@value\", book));\n\t   result = java.getString(\"//data[@name='Title']/text()\", book);\n\t} else {\n\t\t result\n\t}",
    "wordCount": "//data[@name='TotalHitsCount']/@value"
  },
  "ruleSearch": {
    "author": "//data[@name='Author']/@value",
    "bookList": "@XPath:item",
    "bookUrl": "@js:\nvar s = base_url + \",\";\nvar id = java.getString(\"//@aid\");\nvar by = `action=book&do=meta&aid=${id}&t=0`;\nvar body = {\n  body: `&appver=1.22&timetoken=${Date.now()}&request=${java.base64Encode(by)}`,\n  method: \"POST\"\n}\nvar bookUrl = s + JSON.stringify(body);\nbookUrl",
    "checkKeyWord": "魔法师",
    "coverUrl": "@js:\nvar id = java.getString(\"//@aid\");\nvar iid = id.toString().substring(0,1);\nvar cover = \"http://img.wenku8.com/image/\" + iid + \"/\" + id + \"/\" + id + \"s.jpg\";\ncover ",
    "intro": "//data[@name='IntroPreview']/text()",
    "kind": "//data[@name='Tags']/@value",
    "lastChapter": "{{//data[@name='LastUpdate']/@value}}",
    "name": "//data[@name='Title']/text()",
    "wordCount": "//data[@name='TotalHitsCount']/@value"
  },
  "ruleToc": {
    "chapterList": "volume,chapter",
    "chapterName": "/text()[1]",
    "chapterUrl": "@js:\nvar s = base_url + \",\";\nvar id = java.getString(\"//chapter/@cid\");\nvar vid = java.getString(\"//volume/@vid\");\nvar by = `action=book&do=text&aid=${java.get(\"bid\")}&cid=${id}&t=0`;\nvar body = {\n  body: `&appver=1.22&timetoken=${Date.now()}&request=${java.base64Encode(by)}`,\n  method: \"POST\"\n};\n// 当vid不为空时输出空字符串，否则输出拼接的URL\nvar ContentUrl = vid != \"\" ? \"\" : s + JSON.stringify(body);\nContentUrl",
    "isVolume": "{{java.getString('vid')}}<js>if (result == \"\") {\n    false\n} else {\n    true\n}</js>"
  },
  "searchUrl": "@js:\nvar s = base_url + \",\";\nvar page = page-1;\nvar keywords = \"action=search&searchtype=articlename&searchkey=\" + key + \"&t=\" + page;\nvar body = {\n  body: `&appver=1.22&timetoken=${Date.now()}&request=${java.base64Encode(keywords)}`,\n  method: \"POST\"\n}\nvar url = s + JSON.stringify(body);\nurl",
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
