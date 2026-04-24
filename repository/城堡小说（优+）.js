// @name 城堡小说（优+）
// @version 2025.10.01
// @author converted
// @url https://www.96cbtxt.com/
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "城堡小说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.96cbtxt.com/",
  "customButton": false,
  "customOrder": 92,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n  {\n    \"title\": \"男生\",\n    \"url\": \"/list-1-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"玄幻小说\",\n    \"url\": \"/list-4-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"奇幻小说\",\n    \"url\": \"/list-5-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"武侠小说\",\n    \"url\": \"/list-6-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"仙侠小说\",\n    \"url\": \"/list-7-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"都市小说\",\n    \"url\": \"/list-8-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"军事小说\",\n    \"url\": \"/list-9-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"历史小说\",\n    \"url\": \"/list-10-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"游戏小说\",\n    \"url\": \"/list-11-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"体育小说\",\n    \"url\": \"/list-12-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"科幻小说\",\n    \"url\": \"/list-13-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"诸天无限\",\n    \"url\": \"/list-14-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"悬疑小说\",\n    \"url\": \"/list-15-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"女生\",\n    \"url\": \"/list-2-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"古代言情\",\n    \"url\": \"/list-16-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"仙侠奇缘\",\n    \"url\": \"/list-17-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"现代言情\",\n    \"url\": \"/list-18-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"浪漫青春\",\n    \"url\": \"/list-19-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"玄幻言情\",\n    \"url\": \"/list-20-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"悬疑推理\",\n    \"url\": \"/list-21-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"科幻空间\",\n    \"url\": \"/list-22-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"游戏竞技\",\n    \"url\": \"/list-23-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"短篇言情\",\n    \"url\": \"/list-24-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"轻小说\",\n    \"url\": \"/list-42-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"耽美\",\n    \"url\": \"/list-40-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"百合\",\n    \"url\": \"/list-41-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"二次元\",\n    \"url\": \"/list-3-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 1\n    }\n  },\n  {\n    \"title\": \"原生幻想\",\n    \"url\": \"/list-25-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"恋爱日常\",\n    \"url\": \"/list-26-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"衍生同人\",\n    \"url\": \"/list-27-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },\n  {\n    \"title\": \"搞笑吐槽\",\n    \"url\": \"/list-28-{{page}}/\",\n    \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  }\n]",
  "header": "{\n  \"upgrade-insecure-requests\": \"1\",\n  \"user-agent\": \"Mozilla/5.0 (Linux; Android 15; 23113RKC6C Build/AQ3A.240912.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.6778.260 Mobile Safari/537.36\",\n  \"accept\": \"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\n  \"x-requested-with\": \"cn.mujiankeji.mbrowser\",\n  \"accept-encoding\": \"deflate, br, zstd\",\n  \"accept-language\": \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"\n}",
  "lastUpdateTime": 1759350462783,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "[property=\"og:novel:author\"]@content",
    "coverUrl": "[property=\"og:image\"]@content",
    "intro": "[property=\"og:description\"]@content",
    "kind": "[property~=category|status|update_time]@content",
    "lastChapter": "[property~=las?test_chapter_name]@content",
    "name": "[property=\"og:novel:book_name\"]@content",
    "tocUrl": "@js: \nso = java.ajax(baseUrl.replace(/book/,\"chapter\"));\njava.setContent(so);\nvar id = baseUrl.match(/book\\/(.*?)\\.html/)[1];\njava.put(\"id\",id);\nvar pages = java.getStringList(\".dropDown@li@data-p\");\njava.put(\"page\",pages.length);\nresult = source.key + \"/index.php?action=loadChapterPage\" + \",\" + JSON.stringify({\n  \"body\": `id=${id}&page=1`,\n  \"method\": \"POST\"\n});",
    "wordCount": ".t_c.2@text##字数："
  },
  "ruleContent": {
    "content": "<js>\nfunction replace (content) {\n  const source = \"内暴强情缝贪插逼操潮喷阴艳裸乳荡穴鸡淫苞奸胸射嫩肉骚性蒂茎陰騷奶屄成人药春迷尿粉肛龟头A精屌口狂蜜处女唇道阳虐虫妇液色颜熟交爽臀爆舔做爱欲吹自慰点gG玉幼援抽Bb水母狗户部要了奴小脚痒酥死我兽揉搓捏扣抠棍棒洞密美少摩腿春乱伦露漏浪开巨根菊巴黑豪好肥送艳被干拔乱理白刺体下面诱感快货比日妈你娘婊子配仙火叫在里子宫给聊照流群屁眼马无码友拳洞片黄偷禁套弄位脱光舒服溜舞丢还糜妻换妓招嫖娼aA毛Hh一夜本热推图书娃男抓浑圆饱满润湿滑丰腴韵尤物横陈存娇喘息麻桃透风腹长粗肿胀人紧夹吸撅起来雪发翘硕大胴双草坐挲跨柔软臂瘫媚秘破\"\n  const replacementChars = source.split(\"\")\n  replacementChars[43]=\"AV\"\n  content = content.replace(/<i class=\"icon icon-uni(.{4})\"><\\/i>/g, (_, p1) => String.fromCharCode(parseInt(p1, 16)));\n\n  return Array.from(content, char => {\n    const code = char.charCodeAt(0)\n    if (code >= 0xE001 && code <= 0xE101) {\n      return replacementChars[code - 0xE001]\n    } else {\n      return char\n    }\n  }).join('')\n}\nreplace(result)\n</js>\n.content@html",
    "nextContentUrl": "text.下一@href",
    "replaceRegex": "##.*{{source.key}}.*|\\n+.*章节错误,点此举报.*\\n+|\\(https?.*\\/book\\/.*\\)|.*首发域名.*"
  },
  "ruleExplore": {
    "bookList": ".picList@li",
    "bookUrl": "a.1@href",
    "coverUrl": "img@src",
    "name": "a.1@text"
  },
  "ruleSearch": {
    "author": "a.2@text",
    "bookList": ".list@ul@li",
    "bookUrl": "@js:\na=java.getString('.pic@html')\nb=String(a).match(/upclick\\(\\'(.*?)\\'/)[1]\nurl =source.key+\"/book/\"+`${b}`+\".html\"\nurl",
    "coverUrl": "img@src",
    "intro": ".intro@text",
    "kind": "a.3@text",
    "lastChapter": "a.4@text",
    "name": "a.1@text"
  },
  "ruleToc": {
    "chapterList": "$.data[*]\n<js>\nresult=result\naa=/\\{.*?\"chapterorder\":\"(\\d+)\".*?\\}/g\nli=[]\nlet match\nwhile ((match = aa.exec(result)) !== null) {\n  li.push({\n    id: parseInt(match[1], 10),\n    content: match[0]\n  });\n}\nli.sort((a, b) => a.id - b.id)\n//java.log(JSON.stringify(li))\nso=li.map(item => item.content).join(',')\ns=so.replace(/^/,'{\"list\":[').replace(/$/,']}')\ns\n</js>$.list[*]",
    "chapterName": "$.chaptername",
    "chapterUrl": "$.chapterurl",
    "nextTocUrl": "@js: result = []\nid = java.get(\"id\");\npages = java.get(\"page\");\njava.log(pages)\nfor (let i = 2 ; i <= pages ; i++) {\noption = source.key + \"/index.php?action=loadChapterPage\" + \",\" + JSON.stringify({\n  \"body\": `id=${id}&page=${i}`,\n  \"method\": \"POST\"\n});\nresult.push(option);\n}\nresult;"
  },
  "searchUrl": "@js: \nvar url = java.ajax(source.key).match(/window\\.location\\.href=\\'([^']+)/)[1];\ncookie.removeCookie(source.key);\njava.log(url);\ncookie.removeCookie(url)\nvar kku = url.replace(/m\\/.*html$/,\"m\");\njava.log(kku);\n\ncs = java.get(url,{})\ncc = cs.headers().get(\"set-cookie\")\ncookie.setCookie(source.key, cc)\n\nvar ckk = String(cs.body());\n//java.log(ckk)\nif (ckk.match(/Checking your browser before accessing/)) {\n   java.webView(null, url, \"document.cookie\")\n   cok = cookie.getCookie(url)\n   head = JSON.stringify({ headers: { 'Cookie': cok } })\n   u = url + \",\" + head\n   java.ajax(u)\n}\nvar result = kku + \"/k-{{java.base64Encode(java.encodeURI(key, 'utf-8'))}}-{{page}}.html\"\nresult;",
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
