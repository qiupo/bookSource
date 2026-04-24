// @name 萌图社团（优++）
// @version 2025.10.04
// @author converted
// @url https://moetu.club
// @enabled true
// @tags 漫画,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "萌图社团（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://moetu.club",
  "customButton": false,
  "customOrder": 230,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nsort=[];\npush=(title,url,type1,type2)=>sort.push({\n\t\ttitle: title,\n\t\turl: url,\n\t\tstyle: {\n\t\t\t\tlayout_flexGrow: type1,\n\t\t\t\tlayout_flexBasisPercent: type2\n\t\t\t}\n\t});\n\tpush(\"全部🏷分类\",null,1,1);\npush(\"画师推荐\",`/category/pixiv/page/{{page}}`,1,0.35);\npush(\"图集画册\",`/category/illustration/page/{{page}}`,1,0.35);\npush(\"绘画官绘\",`/category/official/page/{{page}}`,1,0.35);\npush(\"其他🏷标签\",null,1,1);\nxrList=[[\"megami\",\"megami\"],[\"C96\",\"c96\"],[\"C97\",\"c97\"],[\"C94\",\"c94\"],[\"C99\",\"c99\"],[\"C100\",\"c100\"],[\"C95\",\"c95\"],[\"Hiten\",\"hiten\"],[\"りいちゅ\",\"%e3%82%8a%e3%81%84%e3%81%a1%e3%82%85\"],[\"椎野せら\",\"%e6%a4%8e%e9%87%8e%e3%81%9b%e3%82%89\"],[\"C98\",\"c98\"],[\"C93\",\"c93\"],[\"カントク\",\"%e3%82%ab%e3%83%b3%e3%83%88%e3%82%af\"],[\"C101\",\"c101\"],[\"ももこ\",\"%e3%82%82%e3%82%82%e3%81%93\"],[\"C92\",\"c92\"],[\"ふーみ\",\"%e3%81%b5%e3%83%bc%e3%81%bf\"],[\"kyuri\",\"kyuri\"],[\"望月しいな\",\"%e6%9c%9b%e6%9c%88%e3%81%97%e3%81%84%e3%81%aa\"],[\"森倉円\",\"%e6%a3%ae%e5%80%89%e5%86%86\"],[\"Anmi\",\"anmi\"],[\"遠坂あさぎ\",\"%e9%81%a0%e5%9d%82%e3%81%82%e3%81%95%e3%81%8e\"],[\"DSマイル\",\"ds%e3%83%9e%e3%82%a4%e3%83%ab\"],[\"ほし\",\"%e3%81%bb%e3%81%97\"],[\"C91\",\"c91\"],[\"Tiv\",\"tiv\"],[\"COMITIA128\",\"comitia128\"],[\"Aちき\",\"a%e3%81%a1%e3%81%8d\"],[\"あやみ\",\"%e3%81%82%e3%82%84%e3%81%bf\"],[\"RiE\",\"rie\"],[\"餡こたく\",\"%e9%a4%a1%e3%81%93%e3%81%9f%e3%81%8f\"],[\"naoto\",\"naoto\"],[\"にもし\",\"%e3%81%ab%e3%82%82%e3%81%97\"],[\"6U☆\",\"6u%e2%98%86\"],[\"みわべさくら\",\"%e3%81%bf%e3%82%8f%e3%81%b9%e3%81%95%e3%81%8f%e3%82%89\"],[\"八城惺架\",\"%e5%85%ab%e5%9f%8e%e6%83%ba%e6%9e%b6\"],[\"はねこと\",\"%e3%81%af%e3%81%ad%e3%81%93%e3%81%a8\"],[\"COMITIA134\",\"comitia134\"],[\"なきょ\",\"%e3%81%aa%e3%81%8d%e3%82%87\"],[\"ピロリ菌\",\"%e3%83%94%e3%83%ad%e3%83%aa%e8%8f%8c\"],[\"C103\",\"c103\"],[\"C104\",\"c104\"],[\"C102\",\"c102\"],[\"gomzi\",\"gomzi\"],[\"がおう\",\"%e3%81%8c%e3%81%8a%e3%81%86\"],[\"にじはしそら\",\"%e3%81%ab%e3%81%98%e3%81%af%e3%81%97%e3%81%9d%e3%82%89\"],[\"桜ひより\",\"%e6%a1%9c%e3%81%b2%e3%82%88%e3%82%8a\"],[\"小奈きなこ\",\"%e5%b0%8f%e5%a5%88%e3%81%8d%e3%81%aa%e3%81%93\"],[\"necömi\",\"necomi\"],[\"せんちゃ\",\"%e3%81%9b%e3%82%93%e3%81%a1%e3%82%83\"],[\"くれ～ぷ\",\"%e3%81%8f%e3%82%8c%ef%bd%9e%e3%81%b7\"],[\"恋小いろり\",\"%e6%81%8b%e5%b0%8f%e3%81%84%e3%82%8d%e3%82%8a\"],[\"画集\",\"%e7%94%bb%e9%9b%86\"],[\"かにビーム\",\"%e3%81%8b%e3%81%ab%e3%83%93%e3%83%bc%e3%83%a0\"],[\"フカヒレ\",\"%e3%83%95%e3%82%ab%e3%83%92%e3%83%ac\"],[\"和錆\",\"%e5%92%8c%e9%8c%86\"],[\"きみしま青\",\"%e3%81%8d%e3%81%bf%e3%81%97%e3%81%be%e9%9d%92\"],[\"桜木蓮\",\"%e6%a1%9c%e6%9c%a8%e8%93%ae\"],[\"アシマ\",\"%e3%82%a2%e3%82%b7%e3%83%9e\"],[\"Mocha\",\"mocha\"],[\"美和野らぐ\",\"%e7%be%8e%e5%92%8c%e9%87%8e%e3%82%89%e3%81%90\"],[\"すいみゃ\",\"%e3%81%99%e3%81%84%e3%81%bf%e3%82%83\"],[\"なび\",\"%e3%81%aa%e3%81%b3\"],[\"ぎるせ\",\"%e3%81%8e%e3%82%8b%e3%81%9b\"],[\"COMIC1☆15\",\"comic1%e2%98%8615\"],[\"COMIC1☆13\",\"comic1%e2%98%8613\"],[\"C89\",\"c89\"],[\"C88\",\"c88\"],[\"まふゆ\",\"%e3%81%be%e3%81%b5%e3%82%86\"],[\"Mika Pikazo\",\"mika-pikazo\"],[\"COMITIA120\",\"comitia120\"],[\"なつめえり\",\"%e3%81%aa%e3%81%a4%e3%82%81%e3%81%88%e3%82%8a\"],[\"COMITIA130\",\"comitia130\"],[\"まさよ\",\"%e3%81%be%e3%81%95%e3%82%88\"],[\"胡麻乃りお\",\"%e8%83%a1%e9%ba%bb%e4%b9%83%e3%82%8a%e3%81%8a\"],[\"COMITIA137\",\"comitia137\"],[\"COMITIA136\",\"comitia136\"],[\"ぷらこ\",\"%e3%81%b7%e3%82%89%e3%81%93\"],[\"おしおしお\",\"%e3%81%8a%e3%81%97%e3%81%8a%e3%81%97%e3%81%8a\"],[\"COMIC1☆20\",\"comic1%e2%98%8620\"],[\"C84\",\"c84\"],[\"C85\",\"c85\"],[\"C87\",\"c87\"],[\"C86\",\"c86\"],[\"C90\",\"c90\"],[\"木なこ\",\"%e6%9c%a8%e3%81%aa%e3%81%93\"],[\"佐伯ソラ\",\"%e4%bd%90%e4%bc%af%e3%82%bd%e3%83%a9\"],[\"桝石きのと\",\"%e6%a1%9d%e7%9f%b3%e3%81%8d%e3%81%ae%e3%81%a8\"],[\"U35\",\"u35\"],[\"荻pote\",\"%e8%8d%bbpote\"],[\"QP:flapper\",\"qpflapper\"],[\"COMITIA131\",\"comitia131\"],[\"あまみね\",\"%e3%81%82%e3%81%be%e3%81%bf%e3%81%ad\"],[\"sakana\",\"sakana\"],[\"らんふ\",\"%e3%82%89%e3%82%93%e3%81%b5\"],[\"ねむりねむ\",\"%e3%81%ad%e3%82%80%e3%82%8a%e3%81%ad%e3%82%80\"],[\"COMITIA126\",\"comitia126\"],[\"とぴあ\",\"%e3%81%a8%e3%81%b4%e3%81%82\"],[\"ただのゆきこ\",\"%e3%81%9f%e3%81%a0%e3%81%ae%e3%82%86%e3%81%8d%e3%81%93\"],[\"ひげ猫\",\"%e3%81%b2%e3%81%92%e7%8c%ab\"],[\"深崎暮人\",\"%e6%b7%b1%e5%b4%8e%e6%9a%ae%e4%ba%ba\"],[\"COMITIA140\",\"comitia140\"],[\"しらたま\",\"%e3%81%97%e3%82%89%e3%81%9f%e3%81%be\"],[\"三嶋くろね\",\"%e4%b8%89%e5%b6%8b%e3%81%8f%e3%82%8d%e3%81%ad\"],[\"こーやふ\",\"%e3%81%93%e3%83%bc%e3%82%84%e3%81%b5\"],[\"COMIC1☆10\",\"comic1%e2%98%8610\"],[\"COMIC1☆8\",\"comic1%e2%98%868\"],[\"C83\",\"c83\"],[\"うなさか\",\"%e3%81%86%e3%81%aa%e3%81%95%e3%81%8b\"],[\"COMIC1☆14\",\"comic1%e2%98%8614\"],[\"COMITIA127\",\"comitia127\"],[\"COMIC1☆11\",\"comic1%e2%98%8611\"],[\"COMITIA124\",\"comitia124\"],[\"ねこめたる\",\"%e3%81%ad%e3%81%93%e3%82%81%e3%81%9f%e3%82%8b\"],[\"ぽんかん⑧\",\"%e3%81%bd%e3%82%93%e3%81%8b%e3%82%93%e2%91%a7\"],[\"COMITIA123\",\"comitia123\"],[\"リン☆ユウ\",\"%e3%83%aa%e3%83%b3%e2%98%86%e3%83%a6%e3%82%a6\"],[\"COMITIA144\",\"comitia144\"],[\"nana\",\"nana\"],[\"火ノ\",\"%e7%81%ab%e3%83%8e\"],[\"ももしき\",\"%e3%82%82%e3%82%82%e3%81%97%e3%81%8d\"],[\"ミュシャ\",\"%e3%83%9f%e3%83%a5%e3%82%b7%e3%83%a3\"],[\"あまき\",\"%e3%81%82%e3%81%be%e3%81%8d\"],[\"COMITIA129\",\"comitia129\"],[\"COMITIA125\",\"comitia125\"]]\nxrList.map([tag,uri]=>{\n\turl=`/tag/${uri}/page/{{page}}`;\n\tpush(tag,url,1,0.25);\n\t});\n//java.log(JSON.stringify(sort))\nJSON.stringify(sort)",
  "header": "{\n  'User-Agent': \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\"\n}",
  "lastUpdateTime": 1759567809496,
  "loginUrl": "https://moetu.club#signup",
  "respondTime": 3900,
  "ruleBookInfo": {
    "name": "h1@text"
  },
  "ruleContent": {
    "content": ".entry-content@img@data-src\n<js>\n//java.log(result);\nlet newResult = result.split(\"\\n\").map(x => x);\nlet headers = JSON.stringify({\"headers\":{\"Referer\":\"https://moetu.club/\"}});\nnewResult.map(x => `<img src=\"${x},${headers}\">`).join(\"\\n\");\n</js>",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "span.-2@text",
    "bookList": ".hidden-line@.post-list-item",
    "bookUrl": "h2@a.0@href",
    "checkKeyWord": "pp",
    "coverUrl": ".post-thumb@data-src",
    "kind": "{{@@.post-list-cat@a.0@text}},{{@@.post-list-meta-views@span.0@text}},{{@@.post-list-meta-like@text}}",
    "lastChapter": "span.-1@text",
    "name": "h2@a.0@text"
  },
  "ruleToc": {
    "chapterList": "body",
    "chapterName": "h1@text",
    "chapterUrl": "{{baseUrl}}"
  },
  "searchUrl": "/<,page/{{page}}>?s=pp&type=post",
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
