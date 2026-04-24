// @name 纵横中文
// @version 2025.12.17
// @author converted
// @url https://www.zongheng.com/
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description 20241025修复发现
// @description 20240222By_zhbyjm77833
// @description 免费：vip=0
// @description 全部：vip=9

const LEGADO_SOURCE = {
  "bookSourceComment": "20241025修复发现\n20240222By_zhbyjm77833\n免费：vip=0\n全部：vip=9",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "纵横中文",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.zongheng.com/##zhbyjm7783",
  "customButton": false,
  "customOrder": 388,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nsort = [];\npush = (title, url, type) => sort.push({\n    title: title,\n    url: url,\n    style: {\n        layout_flexBasisPercent: type\n    }\n});\n\npush(\"༺ˇ»`ʚ 排行榜 ɞ´«ˇ༻\", null, 1);\n [\n        [\"月票榜\", \"1\"],\n        [\"新书榜\", \"4\"],\n        [\"点击榜\", \"5\"],\n        [\"推荐榜\", \"6\"],\n        [\"捧场榜\",\"7\"],\n        [\"完结榜\",\"8\"],\n        [\"新书订阅\", \"9\"],\n        [\"24h畅销\",\"3\"],\n        [\"24h更新\",\"10\"],\n        [\"作者人气\",\"12\"]\n].map([title, Id] => {\n    title=title,\n    url= `https://www.zongheng.com/api/rank/details,{\"method\":\"POST\",\"body\":\"cateFineId=0&cateType=0&pageNum={{page}}&pageSize=20&period=0&rankNo=&rankType=${Id}\"}`,\n    push(title, url, 0.29)\n    });\n\npush(\"༺ˇ»`ʚ 男生 ɞ´«ˇ༻\", null, 1);\n [\n        [\"全部\", \"0\",\"\"],\n        [\"玄幻奇幻\", \"8101\",\"\"],\n        [\"王朝争霸\", \"8101\",\"8411\"],\n        [\"诸天万界\", \"8101\",\"8412\"],\n        [\"西方奇幻\", \"8101\",\"8413\"],\n        [\"异世大陆\", \"8101\",\"8414\"],\n        [\"东方玄幻\", \"8101\",\"8415\"],\n        [\"武侠仙侠\", \"8102\",\"\"],\n        [\"古典仙侠\", \"8102\",\"8351\"],\n        [\"上古洪荒\", \"8102\",\"8352\"],\n        [\"幻想修真\", \"8102\",\"8353\"],\n        [\"传统武侠\", \"8102\",\"8354\"],\n        [\"武侠幻想\", \"8102\",\"8355\"],\n        [\"都市\",\"8103\",\"\"],\n        [\"热血校园\",\"8103\",\"8471\"],\n        [\"商战职场\",\"8103\",\"8472\"],\n        [\"都市高手\",\"8103\",\"8473\"],\n        [\"乡村生活\",\"8103\",\"8474\"],\n        [\"明星娱乐\",\"8103\",\"8475\"],\n        [\"都市生活\",\"8103\",\"8476\"],\n        [\"都市高武\",\"8103\",\"8477\"],\n        [\"灵气复苏\",\"8103\",\"8478\"],\n        [\"官场\",\"8103\",\"8479\"],\n        [\"历史\",\"8104\",\"\"],\n        [\"架空历史\",\"8104\",\"8291\"],\n        [\"历史传记\",\"8104\",\"8292\"],\n        [\"穿越历史\",\"8104\",\"8293\"],\n        [\"科幻\",\"8105\",\"\"],\n        [\"未来幻想\",\"8105\",\"8441\"],\n        [\"末世危机\",\"8105\",\"8442\"],\n        [\"星际机甲\",\"8105\",\"8443\"],\n        [\"奇闻异事\",\"8106\",\"\"],\n        [\"侦探推理\",\"8106\",\"8321\"],\n        [\"寻宝探险\",\"8106\",\"8322\"],\n        [\"恐怖灵异\",\"8106\",\"8323\"],\n        [\"奇门秘术\",\"8106\",\"8324\"],\n        [\"游戏\", \"8107\",\"\"],\n        [\"虚拟网游\", \"8107\",\"8381\"],\n        [\"电子竞技\", \"8107\",\"8382\"],\n        [\"N次元\",\"8108\",\"\"],\n        [\"衍生同人\",\"8108\",\"8201\"],\n        [\"原生幻想\",\"8108\",\"8202\"],\n        [\"轻小说\",\"8108\",\"8203\"],\n        [\"现实题材\",\"8109\",\"\"],\n        [\"现实百态\",\"8109\",\"8501\"],\n        [\"体育\", \"8110\",\"\"],\n        [\"足球天下\", \"8110\",\"8231\"],\n        [\"篮球风云\", \"8110\",\"8232\"],\n        [\"其他竞技\", \"8110\",\"8233\"],\n        [\"军事\",\"8111\",\"\"],\n        [\"战争幻想\",\"8111\",\"8261\"],\n        [\"谍战特工\",\"8111\",\"8262\"],\n        [\"抗战烽火\",\"8111\",\"8263\"],\n        [\"现代军事\",\"8111\",\"8264\"]\n].map([title, Id, id] => {\n    title=title,\n    url= `https://www.zongheng.com/api2/catefine/storeSearch,{\"method\":\"POST\",\"body\":\"worksTypes=${Id}&bookType=0&subWorksTypes=${id}&totalWord=0&serialStatus=9&vip=9&categoryId=${id}&categoryPid=${Id}&naodongFilter=0&pageNum={{page}}&pageSize=20\"}`,\n    push(title, url, 0.29)\n    });\n    \npush(\"༺ˇ»`ʚ 女生 ɞ´«ˇ༻\", null, 1);\n [\n        [\"全部\", \"0\",\"\"],       \n        [\"现代言情\", \"8161\",\"\"],\n        [\"总裁豪门\", \"8161\",\"8531\"],\n        [\"都市奇幻\", \"8161\",\"8532\"],\n        [\"年代重生\", \"8161\",\"8533\"],\n        [\"现实生活\", \"8161\",\"8534\"],\n        [\"青春校园\", \"8161\",\"8535\"],\n        [\"娱乐明星\", \"8161\",\"8536\"],\n        [\"民国旧影\", \"8161\",\"8537\"],\n        [\"职场情缘\", \"8161\",\"8538\"],\n        [\"现代悬疑\", \"8161\",\"8539\"],\n        [\"古代言情\", \"8162\",\"\"],\n        [\"远古大陆\", \"8162\",\"8561\"],\n        [\"武侠江湖\", \"8162\",\"8562\"],\n        [\"权谋天下\", \"8162\",\"8563\"],\n        [\"古代情缘\", \"8162\",\"8564\"],\n        [\"宫闱宅斗\", \"8162\",\"8565\"],\n        [\"种田经商\", \"8162\",\"8566\"],\n        [\"古代悬疑\", \"8162\",\"8567\"],\n        [\"幻想言情\",\"8163\",\"\"],\n        [\"异世幻想\",\"8163\",\"8591\"],\n        [\"末世求生\",\"8163\",\"8592\"],\n        [\"无限快穿\",\"8163\",\"8593\"],\n        [\"未来科幻\",\"8163\",\"8594\"],\n        [\"玄幻仙侠\",\"8163\",\"8595\"],\n        [\"衍生言情\", \"8164\",\"\"],\n        [\"经典衍生\", \"8164\",\"8651\"],\n        [\"次元衍生\", \"8164\",\"8652\"],\n        [\"游戏竞技\", \"8165\",\"\"],\n        [\"运动竞技\", \"8165\",\"8621\"],\n        [\"网游电竞\", \"8165\",\"8622\"],\n        [\"现实主义\",\"8166\",\"\"],\n        [\"现实故事\",\"8166\",\"8711\"]\n].map([title, Id, id] => {\n    title=title,\n    url= `https://www.zongheng.com/api2/catefine/storeSearch,{\"method\":\"POST\",\"body\":\"worksTypes=${Id}&bookType=1&subWorksTypes=${id}&totalWord=0&serialStatus=9&vip=9&categoryId=${id}&categoryPid=${Id}&naodongFilter=0&pageNum={{page}}&pageSize=20\"}`,\n    push(title, url, 0.29)\n    });\n\nJSON.stringify(sort);",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\"}",
  "lastUpdateTime": 1765997566947,
  "respondTime": 2431,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": ".content@p@text"
  },
  "ruleExplore": {
    "author": "pseudonym||authorName",
    "bookList": "result.resultList||result.bookList",
    "bookUrl": "https://bookapi.zongheng.com/api/chapter/getChapterList,{\"method\":\"POST\",\"body\":\"bookId={{$.bookId}}\"}",
    "coverUrl": "bookCover||picUrl",
    "intro": "description",
    "kind": "{{$.cateFineName||$.categoryName}}\n{{$.latestChapterTime||$.orderColumnInfo}}\n连载{{$.serialStatus}}完结@js:result.replace(/连载1完结/g,'完结').replace(/连载0完结/g,'连载')",
    "lastChapter": "{{$.latestChapterName||$.theNewChapter}}{{$.latestChapterTime||$.orderColumnInfo}}",
    "name": "bookName||name",
    "wordCount": "number||totalWords"
  },
  "ruleSearch": {
    "author": "authorName",
    "bookList": "data.datas.list",
    "bookUrl": "https://bookapi.zongheng.com/api/chapter/getChapterList,{\"method\":\"POST\",\"body\":\"bookId={$.bookId}\"}",
    "coverUrl": "https://static.zongheng.com/upload{{$.coverUrl}}",
    "intro": "description",
    "kind": "{{$.cateFineName&&$.tomeName&&$.catePName&&$.keyword&&$.updateTime}}\n连载{{$.serialStatus}}完结##\\<font color\\=\\\"RED\\\"\\>|\\<\\/font\\>\n@js:result.replace(/连载1完结/g,'完结').replace(/连载0完结/g,'连载')",
    "lastChapter": "chapterName&&updateTime",
    "name": "name##\\<font color\\=\\\"RED\\\"\\>|\\<\\/font\\>",
    "wordCount": "totalWord"
  },
  "ruleToc": {
    "chapterList": "result.chapterList[*].chapterViewList[*]",
    "chapterName": "chapterName",
    "chapterUrl": "https://read.zongheng.com/chapter/{$.bookId}/{$.chapterId}.html",
    "isVip": "level",
    "updateTime": "{{$.createTime}} 字数：{{$.wordNums}}"
  },
  "searchUrl": "https://search.zongheng.com/search/book?keyword={{key}}&sort=null&pageNo=1&pageNum=20&isFromHuayu=0",
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
