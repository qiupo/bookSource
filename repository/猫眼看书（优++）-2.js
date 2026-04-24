// @name 猫眼看书（优++）
// @version 2025.12.21
// @author converted
// @url http://download.yichnmedia.com
// @enabled true
// @tags 小说,书源,converted
// @description // http://download.yichnmedia.com
// @description // http://download.biqugexsapp.com
// @description // http://ddxs.xsappxz.com
// @description _path = {
// @description DownApp: "/client/version",
// @description GetHost: "/client/config/value?key=landing_page_domain",

const LEGADO_SOURCE = {
  "bookSourceComment": "// http://download.yichnmedia.com\n// http://download.biqugexsapp.com\n// http://ddxs.xsappxz.com\n_path = {\n    DownApp: \"/client/version\",\n    GetHost: \"/client/config/value?key=landing_page_domain\",\n    LoginID: \"/auth/third; post; type=5&openid= ${R32} &firstBoot=1\"\n};\nsetv = (json) => source.setVariable(JSON.stringify(json, null, \"\\t\"));\ntry {\n    $ = JSON.parse(source.getVariable());\n} catch (err) {\n    $ = {\n        time: 20240202,\n        domains: [\n            // old aes\n            [\"longchunbajiao\", 0],\n            [\"yybhsl\", 0],\n            [\"wzyjxf\", 0],\n            [\"zjlzgg\", 0],\n            [\"sxwlyhzp\", 0],\n            [\"anwaben\", 0],\n            [\"basusan\", 0],\n            [\"myweipin\", 0],\n            [\"lemiyigou\", 0],\n            // new aes\n            [\"xingliangglobal\", 1],\n            [\"fangweicong\", 1],\n            [\"yuanxifayi\", 1],\n            [\"xqjcool\", 1],\n        ]\n    }\n    setv($);\n}\n_reg = /http:\\/\\/api\\.(.+)\\.com/i\ngetHost = i => {\n    [domain, uType] = $.domains[i];\n    [aesKey, Authorization] = [\n        [\"f041c49714d39908\", \"bearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkubXl3ZWlwaW4uY29tXC9hdXRoXC90aGlyZCIsImlhdCI6MTcwNjg0NjM2NiwiZXhwIjoxODAwMTU4MzY2LCJuYmYiOjE3MDY4NDYzNjYsImp0aSI6IjRVbU5BZVpHQ1hvaGNpSEgiLCJzdWIiOjc3MDg5OSwicHJ2IjoiYTFjYjAzNzE4MDI5NmM2YTE5MzhlZjMwYjQzNzk0NjcyZGQwMTZjNSJ9.lOpKG-vWne5Ub8g6byvF53iQjldPUC1-BMoO-OuhOlA\"],\n        [\"4395daa50ad6baf7\", \"bearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkueGluZ2xpYW5nZ2xvYmFsLmNvbVwvYXV0aFwvdGhpcmQiLCJpYXQiOjE3MDY4NjA2NzcsImV4cCI6MTgwMDE3MjY3NywibmJmIjoxNzA2ODYwNjc3LCJqdGkiOiJxdXBGbWo5cnJRMHFoTFVIIiwic3ViIjozMjY4ODcsInBydiI6ImExY2IwMzcxODAyOTZjNmExOTM4ZWYzMGI0Mzc5NDY3MmRkMDE2YzUifQ.CQsDsiDJyyriPmJuT6A38KIvGgq6BEOMWl8H5plqArQ\"]\n    ][uType];\n    headers = \",\" + JSON.stringify({\n        \"headers\": {\n            \"client-device\": java.md5Encode(aesKey),\n            \"Authorization\": Authorization\n        }\n    });\n    host = `http://api.${domain}.com`;\n}\ngetData = (uri) => {\n    url = host + uri + headers;\n    // java.log(url);\n    data = java.ajaxAll([url])[0];\n}\nvuri = \"/search?keyword=深空彼岸\";\ntime = +java.timeFormatUTC(new Date(), 'yyyyMMdd', 8);\narr1 = []; // 成功\narr2 = []; // 失败\narr3 = []; // 新增\nif ($.time < time && 0) {\n    java.toast(\"检测更新中\");\n    try {\n        for (i in $.domains) {\n            arr1.push($.domains[i]);\n            arr2.push($.domains[i]);\n            getHost(i);\n            try {\n                // java.toast(\"正在校验：\"+host);\n                getData(vuri); //校验搜索\n                if (data.code() == 200) {\n                    arr2.length = arr2.length - 1;\n                    try {\n                        getData(_path.GetHost);\n                        domain = JSON.parse(data.body())\n                            .data.landingPageDomain;\n                        arr3.push([\n                            domain.match(_reg)[1],\n                            uType\n                        ]);\n                    } catch (err) {}\n                } else {\n                    arr1.length = arr1.length - 1;\n                }\n            } catch (err) {\n                arr1.length = arr1.length - 1;\n            }\n        }\n        array = arr1.concat(arr3);\n        $.domains = array.filter(function(item, index) {\n            return array.findIndex(function(value) {\n                return value[0] === item[0] && value[1] === item[1];\n            }) === index && arr2.findIndex(function(value) {\n                return value[0] === item[0] && value[1] === item[1];\n            })\n        });\n        $.time = time\n        setv($);\n        java.toast(\"接口更新成功\");\n    } catch (err) {\n        java.toast(\"未知错误：\" + err);\n    }\n}\nrun = Path => {\n    for (i in $.domains) {\n        getHost(i);\n        try {\n            getData(java.hexDecodeToString(result));\n            if (data.code() == 200)\n                return $$ = JSON.parse(data.body())[Path];\n        } catch (err) {}\n    }\n    return $$ = {};\n}\neurl = Path => `data:;base64,${java.base64Encode(Path)},{\"type\":\"maoyankanshu\"}`;",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "猫眼看书（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://download.yichnmedia.com",
  "customButton": false,
  "customOrder": 17,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nsort=[];\npush=(title,url,type)=>sort.push({\n\t\t\t\ttitle: title,\n\t\t\t\turl: url,\n\t\t\t\tstyle: {\n\t\t\t\t\t\tlayout_flexGrow: 1,\n\t\t\t\t\t\tlayout_flexBasisPercent: type\n\t\t\t\t\t}\n\t\t\t});\n$$=(a,b,c)=>{\n\t\turi = c ? `/module/${a}channel=${b}` : `/novel?sort=${a}&categoryId=${b}`;\n\t\treturn `data:;base64,{{java.base64Encode(\"${uri}&page=\"+page)}\\},{\"type\":\"maoyankanshu\"}`;\n\t}\n;[\n\t\t[\"男\",[[\"玄幻\",\"lejRej\"],[\"武侠\",\"nel5aK\"],[\"都市\",\"mbk5ez\"],[\"仙侠\",\"vbmOeY\"],[\"军事\",\"penRe7\"],[\"历史\",\"xbojag\"],[\"游戏\",\"mep2bM\"],[\"科幻\",\"zbq2dp\"],[\"轻小说\",\"YerEdO\"]]],\n\t\t[\"女\",[[\"现代言情\",\"9avmeG\"],[\"古代言情\",\"DdwRb1\"],[\"幻想言情\",\"7ax9by\"],[\"青春校园\",\"Pdy7aQ\"],[\"唯美纯爱\",\"kazYeJ\"],[\"同人衍生\",\"9aAOdv\"]]]\n].map(([title,list],channel)=>{\n\t\tchannel++;\n\t\tpush(\"༺ˇ»`ʚ \"+title+\"生频道 ɞ´«ˇ༻\",null,1);\n\t\tpush(\"༺ˇ»`ʚ 榜单 ɞ´«ˇ༻\",null,1);\n\t\t[\"必读榜\",\"完本榜\",\"更新榜\",\"搜索榜\",\"潜力榜\",\"评论榜\",\"人气完本\",\"新书速递\"].map((title,i)=>{\n\t\t\t\ti++\n\t\t\t\tif(i<7){\n\t\t\t\t\t\ti = \"rank?type=\"+i+\"&\";\n\t\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t\ti = i<8?\"mep2bM?\":\"YerEdO?\";\n\t\t\t\t\t}\n\t\t\t\tpush(title,$$(i,channel,1),0.25);\n\t\t\t});\n\t\tpush(\"༺ˇ»`ʚ 分类 ɞ´«ˇ༻\",null,1);\n\t\tlist.map([title,B]=>{\n\t\t\t\tpush(\"༺ \"+title+\" ༻\",$$(1,B,0),1);\n\t\t\t\t[\"热度\",\"更新\",\"评分\",\"新书\"].map((title,A)=>{\n\t\t\t\t\t\tA++;\n\t\t\t\t\t\t[\"[\"+title+\"]\",\"连载\",\"完结\"].map((title,C)=>{\n\t\t\t\t\t\t\t\tC=C?\"&isComplete=\"+(C-1):\"\";\n\t\t\t\t\t\t\t\tpush(title,$$(A,B+C,0),0.25);\n\t\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t});\n\t}); \nJSON.stringify(sort);",
  "header": "{\n    \"client-version\": \"2.3.0\",\n    \"client-brand\": \"HONOR\",\n    \"client-source\": \"android\",\n    \"client-name\": \"app.maoyankanshu.novel\",\n    \"User-Agent\": \"okhttp/4.9.2\"\n}",
  "lastUpdateTime": 1766340904814,
  "respondTime": 15619,
  "ruleBookInfo": {
    "author": "$.authorName",
    "coverUrl": "$.cover",
    "init": "@js:\neval(String(source.bookSourceComment));\nrun(\"data\");\n$$.cover = $$.cover.replace(_reg, host);\n$$.tocUrl = eurl('/novel/'+$$.novelId+'/chapters');\nJSON.stringify($$);",
    "intro": "{{'\\n&lrm;\\n'}}🏷️ 标签：{{$..className&&$..tagName##\\n##, }}\n{{'\\n&lrm;\\n'}}📑 简介：{{$.summary}}",
    "kind": "{{$.averageScore}}分\n{{$..className}}\n连载中{{$.isComplete}}已完结\n{{$.lastChapter.decTime}}\n##连载中1|0已完结",
    "lastChapter": "{{$.lastChapter.chapterName}} • {{$.lastChapter.decTime}}",
    "name": "$.novelName",
    "tocUrl": "$.tocUrl",
    "wordCount": "$.wordNum"
  },
  "ruleContent": {
    "content": "@js:\neval(String(source.bookSourceComment));\nrun(\"content\");"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.authorName",
    "bookList": "@js:\neval(String(source.bookSourceComment));\nrun(\"data\").map(($$,i)=>{\n$$.cover = $$.cover.replace(_reg, host);\n$$.bookUrl = eurl('/novel/'+$$.novelId);\nreturn JSON.stringify($$);\n});",
    "bookUrl": "$.bookUrl",
    "checkKeyWord": "深空彼岸",
    "coverUrl": "$.cover",
    "intro": "$.summary||$.rankInfo",
    "kind": "{{$.averageScore}}分\n{{$..className}}\n连载中{{$.status}}已完结\n{{$.lastChapter.decTime||$.createdAt##\\s.*}}\n##连载中2|1已完结|连载中已完结",
    "lastChapter": "{{$.lastChapter.chapterName}} • {{$.lastChapter.decTime}}##^•$",
    "name": "$.novelName",
    "wordCount": "$.wordNum"
  },
  "ruleToc": {
    "chapterList": "@js:\neval(String(source.bookSourceComment));\n\nList = run(\"data\").list;\n\nCipher = java.createSymmetricCrypto(\"AES/CBC/PKCS5Padding\", aesKey, \"0123456789abcdef\");\n\nList.map($$=>{\n\tpath = Cipher.decryptStr($$.path);\ntry{\n\tpath = String(path).split(_reg)[2];\n}catch(err){}\n\treturn {\n\t\tname: $$.chapterName,\n\t\tpath: eurl(path),\n\t\tinfo: `章节字数：${$$.wordNum}　更新时间：${$$.updatedAt}`\n\t\t}\n});",
    "chapterName": "name",
    "chapterUrl": "path",
    "updateTime": "info"
  },
  "searchUrl": "data:;base64,{{java.base64Encode(\"/search?keyword=\"+key+\"&page=\"+page)}},{\"type\":\"maoyankanshu\"}",
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
