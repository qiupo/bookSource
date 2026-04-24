// @name 掌阅小说
// @version 2025.12.20
// @author converted
// @url http://m.zhangyue.com
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "掌阅小说",
  "bookSourceType": 0,
  "bookSourceUrl": "http://m.zhangyue.com，",
  "customButton": false,
  "customOrder": 403,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "男频*玄幻::http://m.zhangyue.com/category/10/11?currentPage={{page}}\n男频*都市::http://m.zhangyue.com/category/10/27?currentPage={{page}}\n男频*武侠::http://m.zhangyue.com/category/10/19?currentPage={{page}}\n男频*仙侠::http://m.zhangyue.com/category/10/22?currentPage={{page}}\n男频*奇幻::http://m.zhangyue.com/category/10/16?currentPage={{page}}\n男频*校园::http://m.zhangyue.com/category/10/39?currentPage={{page}}\n男频*历史::http://m.zhangyue.com/category/10/42?currentPage={{page}}\n男频*军事::http://m.zhangyue.com/category/10/50?currentPage={{page}}\n男频*游戏::http://m.zhangyue.com/category/10/54?currentPage={{page}}\n男频*竞技::http://m.zhangyue.com/category/10/57?currentPage={{page}}\n男频*科幻::http://m.zhangyue.com/category/10/60?currentPage={{page}}\n男热*销榜::http://m.zhangyue.com/rank/list/19258?name=%E7%83%AD%E9%94%80%E6%A6%9C\n男生完结榜::http://m.zhangyue.com/rank/list/19265?name=%E5%AE%8C%E7%BB%93%E6%A6%9C\n男生免费榜::http://m.zhangyue.com/rank/list/19272?name=%E5%85%8D%E8%B4%B9%E6%A6%9C\n男生武道榜::http://m.zhangyue.com/rank/list/19267?name=%E6%AD%A6%E9%81%93%E4%B8%BA%E7%8E%8B%E6%A6%9C\n女现代言情::http://m.zhangyue.com/category/68/69?currentPage={{page}}\n女古代言情::http://m.zhangyue.com/category/68/74?currentPage={{page}}\n女幻想言情::http://m.zhangyue.com/category/68/82?currentPage={{page}}\n女青春校园::http://m.zhangyue.com/category/68/86?currentPage={{page}}\n女同人作品::http://m.zhangyue.com/category/68/89?currentPage={{page}}\n女推理悬疑::http://m.zhangyue.com/category/68/90?currentPage={{page}}\n女惊悚恐怖::http://m.zhangyue.com/category/68/91?currentPage={{page}}\n女次元专区::http://m.zhangyue.com/category/68/723?currentPage={{page}}\n女生热销榜::http://m.zhangyue.com/rank/list/19261?name=%E7%83%AD%E9%94%80%E6%A6%9C\n女生完结榜::http://m.zhangyue.com/rank/list/19264?name=%E5%AE%8C%E7%BB%93%E6%A6%9C\n女生免费榜::http://m.zhangyue.com/rank/list/19269?name=%E5%85%8D%E8%B4%B9%E6%A6%9C\n女生灵异榜::http://m.zhangyue.com/rank/list/19266?name=%E7%81%B5%E5%BC%82%E6%96%B0%E4%B9%A6%E6%A6%9C",
  "lastUpdateTime": 1766231659818,
  "respondTime": 6461,
  "ruleBookInfo": {
    "coverUrl": "class.side@tag.img@src",
    "intro": "class.brief_intro@text",
    "lastChapter": "class.catalog_new@tag.a.0@text##.*更新",
    "tocUrl": "class.title@tag.a@href"
  },
  "ruleContent": {
    "content": "@js:dt=lr='';c=1;动=java.get(\"动\");\nif(动!=''&&!~baseUrl.indexOf(\",\")){\nresult=String(java.ajax(baseUrl+动))\n}else if(java.get(\"静\")==动)c=dt=2;\n\nr=org.jsoup.Jsoup.parse(r1=result.replace(/&nbsp;/g,' '));\n查=i=java.get(\"序\");\n\nif(java.get(\"文\")==1){for(;c;c--){\nd=[\"img[data-src],img[src~=[^a-z]cid[^a-z]]\"\n,\"img:not([src~=(?i)^$|^javascript:|\\\\.gif|\\\\.png|[^a-z](cover|css|ic(on)?|load(ing|ed)?)[^a-z]])\"\n,\"img[src~=(?i)\\\\.png]:not([src~=(?i)[^a-z](cover|css|ic(on)?|load(ing|ed)?)[^a-z]])\"\n,'img[src~=(?i)\\\\.gif]:not([src~=(?i)[^a-z](cover|css|ic(on)?|load(ing|ed)?)[^a-z]])'];\n\nif(!(查!=\"\"&&(查!=-1&&((lr=r.select(d[查])).size(),true)))){\n$=it=>(lr=r.select(it)).size();\nif($(d[i=0])||$(d[i=1])||$(d[i=2])||false)break;\n\nif(c==2){dt=1;\nr=org.jsoup.Jsoup.parse(java.ajax(baseUrl+',{\"webView\":true}'))\n}else i=$(d[3])?3:-1}}\nif(i==0)lr=String(lr).replace(/(?:src=['\"][^'\"]+['\"] +)?data-/g,'');\nif(查==\"\")book.putVariable(\"序\",i);\n\n}else{\nsc=java.get(\"文\")==2?\n'[style~=(?i)text-align:center|(^| |;)color: *(rgb.(?!255[ ,]+255[ ,]+255)[\\\\d, ]*2\\\\d\\\\d|#(?=[a-f\\\\d]{3}([^a-f\\\\d]|$))(?!fff)[a-f\\\\d]*[d-f]|#(?=[a-f\\\\d]{4})(?!ffffff)([\\\\da-f]{2})*[d-f][\\\\da-f]|green|red|blue|yellow|purple|pink|brown)],script,noscript,style,header,footer,[class~=^foot|^head],[id~=^foot|^head],:has(>a):not(:has(p:matchesOwn(\\\\S),br)),a>*,:has(a):not(:matchesOwn([\\\\S\\\\s]{50,}),:has(:matchesOwn([\\\\S\\\\s]{50,}))),:matchesOwn([\\\\s\\\\S]{50})>:not(br,a,:matchesOwn([\\\\s\\\\S]{50})),:not(br,p,a,:matches([\\\\s\\\\S]{200}),:has(p,br,div:matchesOwn(，|。)+div:matchesOwn(，|。)),:has(p,br,div:matchesOwn(，|。)+div:matchesOwn(，|。)) :matchesOwn(\\\\S):not(:not(p,div,span:has(br))))'\n:\n'[style~=(?i)text-align:center|(^| |;)color: *(rgb.(?!255[ ,]+255[ ,]+255)[\\\\d, ]*2\\\\d\\\\d|#(?=[a-f\\\\d]{3}([^a-f\\\\d]|$))(?!fff)[a-f\\\\d]*[d-f]|#(?=[a-f\\\\d]{4})(?!ffffff)([\\\\da-f]{2})*[d-f][\\\\da-f]|green|red|blue|yellow|purple|pink|brown)],script,noscript,style,header,footer,[class~=^foot|^head],[id~=^foot|^head],:has(>a):not(:has(p:matchesOwn(\\\\S),br,img:not([src~=(?i)^$|^javascript:|[^a-z](css|ic(on)?|load(ing|ed)?)[^a-z]|/\\\\d+s\\\\.jpg]))),img[src~=(?i)^$|^javascript:|[^a-z](css|ic(on)?|load(ing|ed)?)[^a-z]|/\\\\d+s\\\\.jpg],a:not(:matches(^$)>img)>*,:has(a):not(img,:matchesOwn([\\\\S\\\\s]{50,}),:has(img,:matchesOwn([\\\\S\\\\s]{50,}))),:matchesOwn([\\\\s\\\\S]{50})>:not(img,br,a,:has(img),:matchesOwn([\\\\s\\\\S]{50})),:not(img,br,p,a,:matches([\\\\s\\\\S]{200}),:has(p,br,img,div:matchesOwn(，|。)+div:matchesOwn(，|。)),:has(img,p,br,div:matchesOwn(，|。)+div:matchesOwn(，|。)) :matchesOwn(\\\\S):not(:not(p,div,span:has(br))))';\n\nd=[\":matchesOwn(\\\\S):has(br):has(:matchesOwn(\\\\S):has(br))\"\n,\":matchesOwn(\\\\S):has(br)\"\n,\":has(>:matchesOwn(\\\\S):not(:has(*))+:matchesOwn(\\\\S):not(:has(*)))\"\n,\":has(>:has(>p:only-child:matchesOwn(\\\\S):not(:has(*)))+:has(>p:only-child:matchesOwn(\\\\S):not(:has(*))))\"\n,\"img\"\n,\":matchesOwn(\\\\S)\"];\n\ntry{for(查=i!=''?i:java.get(\"元\");c;c--){\n\nif(!(c>1&&(String(r.text()).length<400||r.select(':matchesOwn(内容未加载完成|关闭(阅读|小说)模式)').size()))){\nr.select(sc).remove();\n\nif(!(查!=\"\"&&(lr=r.select(i?d[i==6?5:i]:查)).size()))for(i=0;i<6&&(lr=r.select(d[i]),i==4&&c==1?!lr.size():String(lr.text()).length<200);i++);\nif(c<2||i<6)break;}\n\nr=org.jsoup.Jsoup.parse(r2=String(java.ajax(baseUrl+',{\"webView\":true}')).replace(/(<[a-z]+)&nbsp;/g,'$1 '));\ndt=r1.length==r2.length?2:1}\n\nfor(c=lr.first(),v=1;v<lr.size();v++)if(lr.get(v).parents().contains(c)){\nlr.remove(v);\nv--}else c=lr.get(v);\n\nlr=String((c=lr.size()==2&&i<4)?String(lr.first().text()).length>String(lr.get(1).text()).length?lr.first():lr.get(1):(c=lr.size()==1)?lr.first():lr);\n\nif(查==\"\"){\nif(c&&(查=lr.match(/<([a-z]+) ([^>]+)>/))&&(查[2]=查[2].match(/(?:id|class|style)=(?:\"[^\"]+\"|'[^']+')|[^= ]+(?==\"[^\"]+\"|'[^']+')/g))){\nbook.putVariable(\"元\",查[1]+'['+查[2].join('][')+']')\n}else book.putVariable(\"序\",i)}\n\nlr=lr.replace(/<([a-z]+)[^>]*\"-\\d+\"[^>]*>[^<]+<\\/\\1>|[^<>]*<a[^<]+<\\/a>[^<]*|&lt[; ]?\\/?[a-z]+(?= |\\/?&gt)(?:[ a-z=-]+|\"[^\"]+\"|'[^']+')*\\/?&gt[; ]?|[☯📑⚙️🌕︴]/g,\"\").replace(/\\s+(?:\\s|(?:(?:(?:n?b)?s)?p)?;)/g,\"　　\");\n\nif(java.get(\"原\")!=1)lr=(!lr.indexOf(\"　　\")?lr.replace(/>(?!　　|\\s*(?:(?:(?:n?b)?s)?p)?;)\\s*(?=[^\\s<>])/g,\">︴\"):lr).replace(/((?:[〖【『「（《〈〔［\\[(][^〖【『「（《〈〔［\\[()］〕〉》）」』】〗\\]]*[)］〕〉》）」』】〗\\]]\\s*)*(?:第?\\s*[一二三四五六七八九十百千万〇零0-9]+\\s*[章节回話话：:.．,，、]*\\s*)?{{n=(t=title.match(/\\S+$/)[0].replace(/[*$|?+\\\\\\^\\[\\](){}/]/g,\".?\")).replace(/^(正文[^\\u4e00-\\u9fa5A-Za-z]*|第?[一二三四五六七八九十百千万〇零0-9]+[章节回話话\\s：:.．,，、]*)+/,\"\"),n!=t&&/\\S/.test(n)?\"(?:第?\\\\s*[一二三四五六七八九十百千万〇零0-9]+\\\\s*[章节回話话：:.．,，、]*\\\\s*\"+n+\"|\"+t+\")\":t}}(?:\\s*[〖【『「（《〈〔［\\[(][^〖【『「（《〈〔［\\[()］〕〉》）」』】〗\\]]*[)］〕〉》）」』】〗\\]])*)/g,\"⚙️$1⚙️\")+\"📑\"\n}catch(e){}}\nif(dt)book.putVariable(dt==1?\"动\":\"静\",',{\"webView\":true}');lr",
    "replaceRegex": "##.*⚙️.*|📑*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.author@text||class.author ellipsis@text",
    "bookList": "class.section_b@tag.a||class.rank_booklist@tag.li||class.category_booklist@tag.li",
    "bookUrl": "tag.a@href||href",
    "coverUrl": "tag.img@data-src||tag.img@src",
    "name": "class.name ellipsis@text||tag.dt@text##-.*"
  },
  "ruleToc": {
    "chapterList": "class.catalog_ls@li",
    "chapterName": "text",
    "chapterUrl": "a@href##http://m.zhangyue.com/readbook/(\\d+)/(\\d+).html##https://ah2.zhangyue.com/fe3/mip/readbook.html?bid=$1&chapter=$2"
  },
  "searchUrl": "http://m.zhangyue.com/search?keyWord={{key}}",
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
