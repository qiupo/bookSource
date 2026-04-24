// @name 酷安应用（优+）
// @version 2025.10.02
// @author converted
// @url https://api.coolapk.com
// @enabled true
// @tags 特殊,书源,小说,converted
// @description // Error: 发现失效
// @description 评论最多设置了查看回复100条，多了会限制访问，所以超过100条的回复评论不完整

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 发现失效\n\n评论最多设置了查看回复100条，多了会限制访问，所以超过100条的回复评论不完整",
  "bookSourceGroup": "特殊 书源",
  "bookSourceName": "酷安应用（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://api.coolapk.com",
  "customButton": false,
  "customOrder": 326,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "阅读▪回复::https://api.coolapk.com/v6/page/dataList?url=#/feed/apkCommentList?id=256030&sort=&title=最近回复&page={{page}}&lastItem=\n\n阅读▪发布::https://api.coolapk.com/v6/page/dataList?url=#/feed/apkCommentList?id=256030&sort=dateline_desc&title=最近发布&page={{page}}&lastItem=\n\n阅读▪热度::https://api.coolapk.com/v6/page/dataList?url=#/feed/apkCommentList?id=256030&sort=popular&title=热度排序&page={{page}}&lastItem=",
  "header": "<js>\nlet TOKEN = 'token://com.coolapk.market/c67ef5943784d09750dcfbb31020f0ab?'\nlet PACKAGE_NAME = 'com.coolapk.market';\nlet DEVICE_ID = String(java.randomUUID());\nlet APP_DEVICE = (length => {\n  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'\n  let result = ''\n  for (var i = length; i > 0; --i) {\n    result += chars[Math.floor(Math.random() * chars.length)]\n  }\n  return result\n})(50);\n\n  let t = parseInt(Date.now() / 1000)\n  let hex_t = `0x${t.toString(16)}`\n  let md5_t = java.digestHex(t.toString(), \"md5\")\n  let a = `${TOKEN}${md5_t}$${DEVICE_ID}&${PACKAGE_NAME}`;\n  let md5_a = java.digestHex(String(java.base64Encode(a)),\"md5\")\n  let token = `${md5_a}${DEVICE_ID}${hex_t}`\n\nhead = {\n      'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 10; Pixel 4 XL Build/QQ2A.200405.005) +CookMarket/10.1.2-2004302',\n      'X-Requested-With': 'XMLHttpRequest',\n      'X-Sdk-Int': '29',\n      'X-Sdk-Locale': 'zh-CN',\n      'X-App-Id': 'com.coolapk.market',\n      'X-App-Version': '10.1.2',\n      'X-App-Code': '2004302',\n      'X-App-Token': token,\n      'X-Api-Version': '10',\n      'X-App-Device': APP_DEVICE,\n      'X-Dark-Mode': '0'\n    }\nJSON.stringify(head)\n</js>",
  "jsLib": "function pad(s) {\n  return s < 10 ? `0${s}` : s\n}\n\nfunction formatDate(timeStamp){\n\tlet diff = (Date.now() - timeStamp * 1000) / 1000\n    if (diff < 60) {\n      return '刚刚'\n    } else if (diff < 3600) {\n      return `${parseInt(diff / 60)}分钟前`\n    } else if (diff < 86400) {\n      return `${parseInt(diff / 3600)}小时前`\n    } else if (diff < 604800) {\n      return `${parseInt(diff / 86400)}天前`\n    } else if (diff < 2592000) {\n      return `${parseInt(diff / 604800)}周前`\n    } else if (diff < 31104000) {\n      return `${parseInt(diff / 2592000)}个月前`\n    } else {\n      let date = new Date(timeStamp * 1000)\n      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`\n    }\n\t}\n\t\nfunction createReply(item, addPadding) {\n\t  let html = \"\";\n    addPadding?fu = \"▲\":fu=\"\"\n    html += `<br>&lrm;<br>---${fu}${item.username}▪${formatDate(item.dateline)}---<br>`\n    html += `${item.message}`\n    if (item.picArr && item.picArr.length) {\n      item.picArr.filter(it => it).map(it => {\n        html += `<img src=\"${it}\"><br>`\n      })\n    } else if (item.pic) {\n      html += `<img src=\"${item.pic}\"><br>`\n    }\n    return html\n  }",
  "lastUpdateTime": 1759384894182,
  "respondTime": 181336,
  "ruleBookInfo": {
    "init": "$.data",
    "intro": "<p>☼版本号:{{$.version}}</p>\n<p>☉最近更新：{{$.changehistory##\\n.*}}</p>\n<p>☪︎{{$.apksize}}/{{$.downCount}}下载/{{$.followCount}}人关注/{{$.commentCount}}人评论/{{$.language}}</p>\n<br>&lrm;<br>\n<p>📖新版特性📖</p>\n<p>{{$.changelog}}</p>\n<br>&lrm;<br>\n<p>📖应用介绍📖</p>\n{{$.introduce}}\n<js>\nif(/apk\\/detail/.test(baseUrl)){\n\tresult = result\n\t}else{\n\t\tresult = \"\"\n\t\t}\n</js>"
  },
  "ruleContent": {
    "content": "<js>\nif(!/apk\\/detail/.test(baseUrl)){\n    let id = \"{{$.data.id}}\";\n    let html = \"\"\n    let item = JSON.parse(result).data;\n    let curPage = 1;\n    let lastItem = \"\";\n    let resp2 = JSON.parse(java.ajax(\"https://api.coolapk.com/v6/feed/replyList?id={{$.data.id}}&page=1&lastItem=\"));\n    let replynum5 = item.replynum;\n    replynum5 > 100?replynum5=100:replynum5\n    html += createReply(item)\n    let item_reply = []\n    let totalnum = 0\n    let item2 = resp2.data\n    item_reply = item_reply.concat(item2)\n    while (item2.length && (totalnum = totalnum + item2.length) < replynum5) {\n      curPage = curPage + 1\n      lastItem = item2[item2.length - 1].id\n      resp2 = JSON.parse(java.ajax(`https://api.coolapk.com/v6/feed/replyList?id=${id}&page=${curPage}&lastItem=${lastItem}`))\n      item2 = resp2.data\n      item_reply = item_reply.concat(item2)\n    }\n\n    let grouped_item_reply = {}\n    item_reply.map(item => {\n      if (item.rrid) {\n        grouped_item_reply[item.rrid] = grouped_item_reply[item.rrid] || []\n        grouped_item_reply[item.rrid].push(item)\n      } else {\n        grouped_item_reply[item.id] = grouped_item_reply[item.id] || []\n        grouped_item_reply[item.id].push(item)\n      }\n    })\n    for (key in grouped_item_reply) {\n      grouped_item_reply[key].sort((e1, e2) => {\n        return e1.dateline - e2.dateline\n      }).map(item => html += createReply(item, !!item.rrid))\n    }\n    result = String(html).replace(/<a .*?href=\"([^\"]+)\".*?>([^<]+)<\\/a>/g,'▪$2：$1▪')\n   }else{\n   \tlet html = \"软件地址：\\nhttps://www.coolapk.com/apk/{{$.data.apkname}}\\n\";\n   \t html +=\"---复制下面文字到发现规则可看评论---\\n\"\n   \thtml += \"{{$.data.title}}▪回复::https://api.coolapk.com/v6/page/dataList?url=#/feed/apkCommentList?id={{$.data.id}}&sort=&title=最近回复&page={\\{page}}&lastItem=\\n\"\n\nhtml += \"{{$.data.title}}▪发布::https://api.coolapk.com/v6/page/dataList?url=#/feed/apkCommentList?id=256030&sort=dateline_desc&title=最近发布&page={\\{page}}&lastItem=\\n\"\n\nhtml += \"{{$.data.title}}▪热度::https://api.coolapk.com/v6/page/dataList?url=#/feed/apkCommentList?id={{$.data.id}}&sort=popular&title=热度排序&page={\\{page}}&lastItem=\\n\"\n   \t}\n</js>"
  },
  "ruleExplore": {
    "bookList": "$.data[*]",
    "bookUrl": "https://api.coolapk.com/v6/feed/detail?id={{$.id}}",
    "coverUrl": "$.pic||$.userAvatar",
    "intro": "$.message##<a .*?href=\"([^\"]+)\".*?>([^<]+)</a>##▪$2：$1▪",
    "kind": "发布时间:{{formatDate(java.getString(\"$.dateline\"))}}",
    "name": "$.username",
    "wordCount": "@js:\nlet num = Number(\"{{$.replynum}}\");\nresult = `${num}回复${(num && '('+formatDate({{$.lastupdate}})+')') || \"\"}`"
  },
  "ruleSearch": {
    "author": "$.developername",
    "bookList": "$.data[*]",
    "bookUrl": "https://api.coolapk.com/v6/apk/detail?id={{$.apkname}}&installed=0",
    "checkKeyWord": "阅读",
    "coverUrl": "$.logo",
    "intro": "$.note",
    "kind": "{{$.apksize}},下载数：{{$.downCount}},评论：{{$.commentCount}}",
    "name": "$.origTitle||$.title"
  },
  "ruleToc": {
    "chapterList": "<js>\nif(!/^\\{\"data\":\\[/.test(result)){\n\tresult = \"[\"+result +\"]\";\n\t}\n</js>\n$.[*]",
    "chapterName": "{{$.data.username||$.data.title}}▪{{java.getString(\"$.data.dateline\")!=\"\"?formatDate(java.getString(\"$.data.dateline\")):\"\"}}##▪$",
    "updateTime": "$.message##</*a.*?>"
  },
  "searchUrl": "https://api.coolapk.com/v6/search?type=apk&cat=&sort=default&searchValue={{key}}&page={{page}}&lastItem=",
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
    if (text.indexOf('$..') === 0) return recursiveFind(context, text.slice(3));
    if (text.indexOf('$.') === 0) text = text.slice(2);
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

  function primitiveForUrl(value) {
    value = first(value);
    if (value === null || value === undefined) return '';
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (typeof value === 'object') {
      var keys = ['url', 'chapterUrl', 'bookUrl', 'tocUrl', 'href'];
      for (var i = 0; i < keys.length; i++) {
        var child = value[keys[i]];
        if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') return String(child);
      }
    }
    return '';
  }

  function applyCleanSuffix(value, clean) {
    var parts = String(clean || '').split('##');
    if (parts.length < 2) return value;
    var pattern = parts[1];
    var replacement = parts.length >= 3 ? parts[2] : '';
    try { return stringify(value).replace(new RegExp(pattern, 'g'), replacement); } catch (_) { return value; }
  }

  function findTemplateCleanIndex(text) {
    var depth = 0;
    for (var i = 0; i < text.length - 1; i++) {
      var pair = text.slice(i, i + 2);
      if (pair === '{{') {
        depth++;
        i++;
      } else if (pair === '}}' && depth > 0) {
        depth--;
        i++;
      } else if (pair === '##' && depth === 0) {
        return i;
      }
    }
    return -1;
  }

  function splitTemplateExpression(expr) {
    var parts = String(expr || '').split('##');
    return { rule: parts[0].trim(), clean: parts.length > 1 ? '##' + parts.slice(1).join('##') : '' };
  }

  function renderTemplate(template, vars, context) {
    return String(template || '').replace(/\{\{([\s\S]*?)\}\}/g, function (_, expr) {
      var parsed = splitTemplateExpression(expr);
      var key = parsed.rule;
      var value = '';
      if (key === 'key') value = encodeURIComponent(vars.keyword || '');
      else if (key === 'page') value = vars.page || 1;
      else if (key === 'baseUrl') value = vars.baseUrl || '';
      else if (key === 'source.key') value = baseUrl();
      else if (key.indexOf('$.') === 0 || key.indexOf('$..') === 0 || key === '$') value = first(getPathValue(context, key));
      return stringify(parsed.clean ? applyCleanSuffix(value, parsed.clean) : value);
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
    var idx = findTemplateCleanIndex(text);
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
    else if (text.indexOf('@json:') === 0 || text.indexOf('$.') === 0 || text.indexOf('$..') === 0 || text === '$') value = evaluateJsonPath(context, text);
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
      if (value === undefined) return (typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') ? result : '';
      return value;
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
      if (target === 'bookUrl' || target === 'tocUrl' || target === 'coverUrl' || target === 'url') {
        value = primitiveForUrl(value);
        if (value) value = absolutize(value, parentUrl || baseUrl());
      }
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

  return { search: search, bookInfo: bookInfo, chapterList: chapterList, chapterContent: chapterContent, explore: explore, applyRule: applyRule, request: request, evaluateJsonPath: evaluateJsonPath, evaluateCss: evaluateCss, evaluateXPath: evaluateXPath, createJavaShim: createJavaShim, mapFields: mapFields };
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
