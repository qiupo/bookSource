// @name 轻菠萝包
// @version 2025.10.02
// @author converted
// @url https://book.sfacg.com
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "轻菠萝包",
  "bookSourceType": 0,
  "bookSourceUrl": "https://book.sfacg.com##目录",
  "customButton": false,
  "customOrder": 415,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"----------全部----------\",\"url\":\"/List/default.aspx?tid=-1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"魔幻\",\"url\":\"/List/default.aspx?tid=21&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"玄幻\",\"url\":\"/List/default.aspx?tid=22&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古风\",\"url\":\"/List/default.aspx?tid=23&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"科幻\",\"url\":\"/List/default.aspx?tid=24&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"校园\",\"url\":\"/List/default.aspx?tid=25&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"都市\",\"url\":\"/List/default.aspx?tid=26&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏\",\"url\":\"/List/default.aspx?tid=27&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"同人\",\"url\":\"/List/default.aspx?tid=28&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"悬疑\",\"url\":\"/List/default.aspx?tid=29&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"----------连载----------\",\"url\":\"/List/?ud=-1&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"魔幻\",\"url\":\"/List/default.aspx?tid=21&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"玄幻\",\"url\":\"/List/default.aspx?tid=22&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古风\",\"url\":\"/List/default.aspx?tid=23&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"科幻\",\"url\":\"/List/default.aspx?tid=24&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"校园\",\"url\":\"/List/default.aspx?tid=25&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"都市\",\"url\":\"/List/default.aspx?tid=26&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏\",\"url\":\"/List/default.aspx?tid=27&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"同人\",\"url\":\"/List/default.aspx?tid=28&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"悬疑\",\"url\":\"/List/default.aspx?tid=29&if=0&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"----------完结----------\",\"url\":\"/List/?ud=-1&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"魔幻\",\"url\":\"/List/default.aspx?tid=21&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"玄幻\",\"url\":\"/List/default.aspx?tid=22&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古风\",\"url\":\"/List/default.aspx?tid=23&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"科幻\",\"url\":\"/List/default.aspx?tid=24&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"校园\",\"url\":\"/List/default.aspx?tid=25&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"都市\",\"url\":\"/List/default.aspx?tid=26&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏\",\"url\":\"/List/default.aspx?tid=27&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"同人\",\"url\":\"/List/default.aspx?tid=28&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"悬疑\",\"url\":\"/List/default.aspx?tid=29&if=1&PageIndex={{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\"\n}",
  "lastUpdateTime": 1759386981522,
  "loginUi": "[\n  {\n    \"name\": \"账号\",\n    \"type\": \"text\"\n  },\n  {\n    \"name\": \"密码\",\n    \"type\": \"password\"\n  }\n]",
  "loginUrl": "@js:\nune=source.getLoginInfoMap().get(\"账号\")\npwd=source.getLoginInfoMap().get(\"密码\")\n\nif(une&&pwd) {\n\t let body=JSON.stringify({\n\t   username: String(une),\n    password: String(pwd)\n  })\n  let url='https://minipapi.sfacg.com/pas/mpapi/sessions'\n  ck=java.post(url,body,{\"sf-minip-info\":\"minip_novel/1.0.70(android;11)/wxmp\",\"Content-Type\":\"application/json\"}).cookies()\n  \n   header=JSON.stringify({\n \t\"Cookie\": String(ck).match(/\\{(.*?)\\}/)[1].replace(/,/g,';')\n \t})\n\tsource.putLoginHeader(header)\n}",
  "respondTime": 2661,
  "ruleBookInfo": {
    "intro": "&nbsp;&nbsp;🔖更新时间：{{@.count-detail span.3@text##更新：}}{{'\\n&lrm;\\n'}}🏷️标签：{{@.tag-list@text}}{{'\\n&lrm;\\n'}}{{@.introduce@html}}##(^|[。！？]+[”」）】]?)##$1<br>@js:result.replace(//g,\"\")",
    "kind": ".title span!0@text&&.count-detail span.0:1:3@text##.*：|.*\\[|\\]|\\s.*",
    "lastChapter": ".chapter-title a@text&&.count-detail span.3@text##更新：\n<js>result.replace(/(.*)\\s/,'$1 • ')</js>\n<js>result.replace(/\\s\\d+:\\d+:\\d+/,'')</js>",
    "tocUrl": "@js:baseUrl.replace(/.+Novel/, 'https://m.sfacg.com/i')",
    "wordCount": ".count-detail span.1@text##.*：|字.*"
  },
  "ruleContent": {
    "content": "div[style=text-indent: 2em;]@html",
    "imageStyle": "0"
  },
  "ruleExplore": {
    "author": "tag.li.1@tag.a.1@text",
    "bookList": "class.Comic_Pic_List",
    "bookUrl": "tag.li.1@tag.a.0@href",
    "coverUrl": "tag.img@src",
    "intro": "tag.li.1@text##^.+/\\s*\\d+字\\s*",
    "kind": "a.3@text&&span@text&&li.1@text##.+\\D(\\d+\\/\\d+\\/\\d+)\\D*(\\d+字)\\s*(.+)##$1,$2",
    "lastChapter": "tag.li.1@text##.+\\D(\\d+\\/\\d+\\/\\d+)\\D*(\\d+字)\\s*(.+)##$1 · $2",
    "name": "tag.li.1@tag.a.0@text"
  },
  "ruleSearch": {
    "author": "tag.li.1@text##.+综合信息：\\s*([^\\/]+).*##$1",
    "bookList": "tag.form@tag.table.-2@tag.ul",
    "bookUrl": "tag.a@href",
    "checkKeyWord": "我的徒儿竟然全是反派",
    "coverUrl": "tag.img@src",
    "intro": "tag.li.1@text##.+\\d+:\\d+\\s*(.+).*##$1",
    "kind": "tag.li.1@text##.+\\/(\\d+\\/\\d+\\/\\d+).*##$1",
    "name": "tag.a@text"
  },
  "ruleToc": {
    "chapterList": "+<js>\nvar rules = {\n  volsName: '//*[@class=\"mulu\"]/text()',\n  volumes: 'class.mulu_list', \n  chapters: 'tag.a',\n  chName: 'text',\n  chLink: 'href',\n  vip: 'class.icon-lock2'\n};\nvar opts = {\n  showVolName: false\n};\n\nfunction chapterLevel(rules, opts){\n  var check = (rule) => rule !== undefined && rule !== '' ? rule : '@xpath:/x[@x=\"\" and @x!=\"\"]';\n  rules.volInfo = check(rules.volInfo);\n  rules.vip = check(rules.vip);\n  opts.showVolName = opts.showVolName === undefined ? true : !!opts.showVolName;\n\n  var NL = '<br/>', NP = \"<br/>\\uFEFF<br/>\";\n  var list = [];\n  var volsName = java.getStringList(rules.volsName).toArray();\n\n  java.getElements(rules.volumes).toArray().forEach((vol,idx) => {\n    java.setContent(vol);\n    var volInfo = '简介：' + NL + java.getStringList(rules.volInfo).toArray().join(NL);\n    var chs = java.getElements(rules.chapters).toArray().map(ch => {\n      java.setContent(ch);\n      var isVip = !java.getElements(rules.vip).isEmpty();\n      var chName = java.getString(rules.chName);\n      return {\n        text: (isVip ? '✿·' : '').padStart(0, \"\\u2000\")+(opts.showVolName ? volsName[idx]+\"\\x20\" : '')+chName,\n        href: java.getString(rules.chLink),\n        name: chName\n        \n      };\n    });\n\n    volInfo += NP + '目录(' + chs.length + ')：' + NL;\n    volInfo += chs.slice(0,10).map(v => v.name).join(NL);\n    volInfo += chs.length > 10 ? NL + '……' : '';\n    volInfo = volInfo.replace(/(\\s)\\1+/g, '$1');\n    list.push({\n      text: '📖['+volsName[idx]+']📖',\n      volsName:true,\n      href: 'https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en&text='+encodeURIComponent(volInfo)\n    });\n    list = list.concat(chs);\n  });\n\n  return list;\n}\n\nchapterLevel(rules, opts);\n</js>",
    "chapterName": "text",
    "chapterUrl": "href",
    "isVolume": "volsName"
  },
  "searchUrl": "http://s.sfacg.com/?Key={{key}}&S=1&SS=0",
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
