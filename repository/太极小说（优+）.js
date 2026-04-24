// @name 太极小说（优+）
// @version 2025.12.23
// @author converted
// @url https://69shux.co/
// @enabled false
// @tags 小说,书源,converted
// @description ｀https://101kanshu.com/
// @description ｀https://69shux.co/
// @description //❗免责声明：
// @description 本工具/代码/内容仅供学习交流使用，严禁用于任何非法用途。使用者应严格遵守所在国家或地区的法律法规，任何因滥用或违规使用导致的后果均与开发者/提供者无关，责任自负❗

const LEGADO_SOURCE = {
  "bookSourceComment": "｀https://101kanshu.com/\n｀https://69shux.co/\n//❗免责声明：  \n本工具/代码/内容仅供学习交流使用，严禁用于任何非法用途。使用者应严格遵守所在国家或地区的法律法规，任何因滥用或违规使用导致的后果均与开发者/提供者无关，责任自负❗",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "太极小说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://69shux.co/",
  "bookUrlPattern": ".*(69|101).*book.*",
  "concurrentRate": "1200",
  "customButton": false,
  "customOrder": 54,
  "enabled": false,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nfunction shux() {\n  const cats = [\n    [\"完本小说\", \"full\"],\n    [\"小说分类\", \"class\"]  \n  ];\n\n  const subs = [\n    [\"全部分类\", 0],\n    [\"玄幻奇幻\", 1],\n    [\"武侠仙侠\", 2],\n    [\"现代都市\", 3],\n    [\"历史军事\", 4],\n    [\"科幻小说\", 5],\n    [\"游戏竞技\", 6],\n    [\"恐怖灵异\", 7],\n    [\"言情小说\", 8],\n    [\"动漫同人\", 9],\n    [\"其他类型\", 10]\n  ];\n\n  const ranks = [\n    [\"人气\", \"weekvisit\"],\n    [\"推荐\", \"allvote\"],\n    [\"新书\", \"newhot\"]\n  ];\n\n  const stats = [\n    [\"连载\", 0],\n    [\"全本\", 1]\n  ];\n\n  \n  let disc = [];\n\n  cats.forEach(c => {\n    disc.push({\n      title: c[0],\n      url: \"\",\n      style: {layout_flexBasisPercent: 1, layout_flexGrow: 1}\n    });\n    if (c[1] === \"full\" || c[1] === \"class\") {\n      subs.forEach(s => {\n        disc.push({\n          title: s[0],\n          url: `/novels/${c[1]}/${s[1]}_{{page}}.html`,\n          style: {layout_flexBasisPercent: 0.24, layout_flexGrow: 0.32}\n        });\n      });\n      if (c[1] === \"class\") {\n        subs.forEach(sb => {\n          disc.push({\n            title: `${sb[0]}排行榜`,\n            url: \"\",\n            style: {layout_flexBasisPercent: 1, layout_flexGrow: 1}\n          });\n          stats.forEach(st => {\n            ranks.forEach(r => {\n              disc.push({\n                title: `${r[0]}-${st[0]}`,\n                url: `/novels/${r[1]}_${sb[1]}_${st[1]}_{{page}}.html`,\n                style: {layout_flexGrow: 1}\n              });\n            });\n          });\n        });\n      }\n    } \n  });\n  \n  disc.push({\n            title: `热门标签`,\n            url: \"\",\n            style: {layout_flexBasisPercent: 1, layout_flexGrow: 1}\n          });\n let url = baseUrl.replaceAll(/[^\\w]+$/gi, '');\n  let tagHtml = java.ajax(`${url}/newtags`);\n  if (String(tagHtml).includes('cf_chl')) {\n    let res =java.startBrowserAwait(`${url}/newtags`, \"验证\", false);\n    tagHtml = res.body();\n  }\n  let doc = org.jsoup.Jsoup.parse(tagHtml);\n  let tags = doc.select(\".tag ul a\");\n  Array.from(tags).forEach(a => {\n    let txt = a.ownText().trim();\n    let t = java.t2s(txt);\n    disc.push({\n      title: t,\n      url: source.key + \"/newtag/\" + encodeURI(txt) + \"/{{page}}\",\n      style: {\n        layout_flexGrow: 1,\n        layout_flexBasisPercent: 0.25\n      }\n    });\n  });\n\n  disc.push({\n    title: \"最近更新\",\n    url: \"/last\",\n    style: {layout_flexBasisPercent: 1, layout_flexGrow: 1}\n  });\n  \n  return JSON.stringify(disc);\n}\nshux();",
  "header": "@js:\nJSON.stringify({\n\t\t\"X-Requested-With\": \"mark.via\",\n\t\t\"Cache-control\": \"no-store\",\n\t\t\"Referer\": baseUrl,\n\"Accept-Language\": \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\",\n\"User-Agent\": java.getWebViewUA()\n})",
  "lastUpdateTime": 1766455257614,
  "loginCheckJs": "var resultUrl = result.url();\nvar resultCode = result.code();\nvar resultBoDy = result.body();\nif (/_cf_|ge_ua|verify.php/ig.test(resultBoDy) && resultCode >= 403) {\n    if (key) {\n        url = baseUrl + java.ruleUrl;\n    }\n    cookie.removeCookie(baseUrl)\n    result = java.startBrowserAwait(resultUrl, \n        \"验证\", false); \n    if(key){\n        src = result.body();\n        url = org.jsoup.Jsoup.parse(src).select('meta[property=\"og:url\"]').attr('content');\n        if(url != \"\" ){\n            result = Packages.io.legado.app.help.http.StrResponse(url, src);\n        }\n    }\n}\nresult;",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "@get:{a}",
    "coverUrl": "@get:{c}##$##,{\"headers\": {\"Referer\": \"{{source.getKey()}}\"}}",
    "init": "<js>java.setContent(java.t2s(result))</js>\n@put:{\n\"n\":\"[property$=book_name]@content\",\n\"a\":\"[property$=author]@content\",\n\"k\":\"[property~=category|status|update_time]@content\",\n\"l\":\"[property~=las?test_chapter_name]@content\",\n\"i\":\"[property$=description]@content\",\n\"c\":\"[property$=image]@content\",\n\"m\":\"ul.infolist > li.0@textNodes\",\n\"g\":\"head > script@all##tags: '(.*?)'##$1###\",\n\"x\":\".infolist@text\",\n\"h\":\".review-item@html\"}\n@js:\n//修复书籍重定向目录加载失败\nbook.bookUrl = baseUrl;\nresult; //设置当前url，并返回结果",
    "intro": "📝简介：@get:{x}\n@get:{i}\n&nbsp;&nbsp;\n📝书评：@get:{h}##<a.*?a>|字数",
    "kind": "@get:{g}@get:{k}",
    "lastChapter": "@get:{l}",
    "name": "@get:{n}",
    "tocUrl": "{{baseUrl.replace(/book/, \n\t\"ajax_novels/chapterlist\")}}",
    "wordCount": "@get:{m}"
  },
  "ruleContent": {
    "content": "#txtcontent@html\n@js:\ncontent = java.t2s(result)\n//java.log(content)\ncontent",
    "replaceRegex": "##[\\p{So}+]|\\n?.*(第[^，。]+章|谢[^，。]+打赏|[首发更新最快]{3,}|本章完|补更|追读|加更|月票|章节|求票|本站域名|最.+新.+(小.+说.+|章.+节.+)?(在.+首.+发.+)?).*\\n?|.*[6六陆].*?[9九玖].*?[书書].*?[吧].*"
  },
  "ruleExplore": {
    "author": "label.0@text",
    "bookList": "<js>java.t2s(result)</js>\n#article_list_content@li||.recentupdate2@li||.tag@ul",
    "bookUrl": "a@href",
    "coverUrl": "img@data-src||img@src",
    "intro": "ol.ellipsis_2@text",
    "kind": "label.1:2@text||span@text",
    "lastChapter": ".zxzj@p@a@text||a.1@text",
    "name": "h3@a@text||a.0@text"
  },
  "ruleSearch": {
    "author": "label.0@text",
    "bookList": "<js>java.t2s(result)</js>\n#article_list_content@li||.recentupdate2@li||.tag@ul",
    "bookUrl": "a@href",
    "coverUrl": "img@data-src||img@src##$##,{\"headers\": {\"Referer\": \"{{source.getKey()}}\"}}",
    "intro": "ol.ellipsis_2@text",
    "kind": "label.1:2@text",
    "lastChapter": ".zxzj@p@a@text||a.1@text",
    "name": "h3@a@text||a.0@text"
  },
  "ruleToc": {
    "chapterList": "<js>java.t2s(result)</js>\nul li a",
    "chapterName": "text",
    "chapterUrl": "href",
    "preUpdateJs": "java.refreshTocUrl()"
  },
  "searchUrl": "@js:\nif (/^a/i.test(key)) {\n  // 搜索标签\n  // 搜索例子 `a穿越；a富二代`\n  url = `newtag/${encodeURIComponent(key.substring(1))}/${page}`;\n} else {\n  // 默认搜索模式\n  url = `search/${encodeURIComponent(key)}/${page}.html`\n}",
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
