// @name 轻说机翻（优+）
// @version 2025.10.01
// @author converted
// @url https://n.novelia.cc
// @enabled true
// @tags 小说,书源,converted
// @description by·holzora
// @description 详细说明请见：https://n.novelia.cc/forum/66a8e77866bff10c16e51d6a

const LEGADO_SOURCE = {
  "bookSourceComment": "by·holzora\n详细说明请见：https://n.novelia.cc/forum/66a8e77866bff10c16e51d6a",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "轻说机翻（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://n.novelia.cc",
  "bookUrlPattern": "(?:https?://)?(?:books\\d?.fishhawk.top|n.novelia.cc)/(?:api/)?novel/\\w+/[\\w-]+",
  "customButton": false,
  "customOrder": 52,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "<js>\nvar discover = [];\nvar showR18 = false;\nvar push = (title, url, style) => {\n    discover.push({\n        title: title,\n        url: url,\n        style: {\n            layout_flexGrow: 1,\n            layout_flexBasisPercent: style\n        }\n    });\n};\nvar addSlots = (count, style) => {\n    var remainder = count % 3;\n    var slotsAdd = remainder === 0 ? 0 : 3 - remainder;\n    for (var i = 0; i < slotsAdd; i++) {\n        push(\"\", null, style);\n    }\n};\npush(\"书架\", null, 1);\ntry {\n    var favored = java.ajax(`${baseUrl}/api/user/favored`);\n    if (favored.includes(\"Token不合法或者过期\")) {\n    \t   showR18 = false;\n        push(\"账号未登录\", null, 0.25);\n        addSlots(1, 0.25);\n    } else {\n    \t   showR18 = true;\n    \t   push(\"阅读历史\", \"/api/user/read-history?page={{(page-1)}}&pageSize=30\", 0.25);\n        var favoredData = JSON.parse(favored).favoredWeb;\n        favoredData.forEach(item => {\n            push(item.title, `/api/user/favored-web/${item.id}?page={{(page-1)}}&pageSize=30&query=&provider=kakuyomu%2Csyosetu%2Cnovelup%2Chameln%2Cpixiv%2Calphapolis&type=0&level=0&translate=0&sort=update`, 0.25);\n        });\n        addSlots(1 + favoredData.length, 0.25);\n    }\n} catch (e) {\n\t   showR18 = false;\n    push(\"未知错误\", null, 0.25);\n    addSlots(1, 0.25);\n}\npush(\"来源\", null, 1);\nvar providers = [\"全部\", \"kakuyomu\", \"syosetu\", \"novelup\", \"hameln\", \"pixiv\", \"alphapolis\"];\nproviders.forEach(provider => {\n    var url = provider === \"全部\" ? \n        `/api/novel?page={{(page-1)}}&pageSize=20&query=&provider=${providers.slice(1).join('%2C')}&type=0&level=0&translate=0&sort=0` : \n        `/api/novel?page={{(page-1)}}&pageSize=20&query=&provider=${provider}&type=0&level=0&translate=0&sort=0`;\n    push(provider, url, 0.25);\n});\naddSlots(providers.length, 0.25);\npush(\"类型\", null, 1);\nvar types = [\"全部\", \"连载中\", \"已完结\", \"短篇\"];\ntypes.forEach((type, index) => {\n    var url = `/api/novel?page={{(page-1)}}&pageSize=20&query=&provider=kakuyomu%2Csyosetu%2Cnovelup%2Chameln%2Cpixiv%2Calphapolis&type=${index}&level=0&translate=0&sort=0`;\n    push(type, url, 0.25);\n});\naddSlots(types.length, 0.25);\npush(\"分级\", null, 1);\nvar levels = showR18 ? [\"全部\", \"一般向\", \"R18\"] : [\"全部\", \"一般向\"];\nlevels.forEach((level, index) => {\n    var url = `/api/novel?page={{(page-1)}}&pageSize=20&query=&provider=kakuyomu%2Csyosetu%2Cnovelup%2Chameln%2Cpixiv%2Calphapolis&type=0&level=${index}&translate=0&sort=0`;\n    push(level, url, 0.25);\n});\naddSlots(levels.length, 0.25);\npush(\"排序\", null, 1);\nvar sorts = [\"更新\", \"点击\"];\nsorts.forEach((sort, index) => {\n    var url = `/api/novel?page={{(page-1)}}&pageSize=20&query=&provider=kakuyomu%2Csyosetu%2Cnovelup%2Chameln%2Cpixiv%2Calphapolis&type=0&level=0&translate=0&sort=${index}`;\n    push(sort, url, 0.25);\n});\naddSlots(sorts.length, 0.25);\nJSON.stringify(discover);\n</js>",
  "header": "<js>\nvar header = {\n    \"Referer\": baseUrl\n};\nJSON.stringify(header);\n</js>",
  "jsLib": "var update = (initUrl, initToken) => {\n    try {\n        var [novelUrl, chapterId] = initUrl.split('/chapter/');\n        var url = novelUrl.replace('/novel/', '/user/read-history/');\n        var {Authorization: token} = JSON.parse(initToken);\n        return Packages.org.jsoup.Jsoup.connect(url).method(Packages.org.jsoup.Connection.Method.PUT).header(\"Authorization\", token).requestBody(chapterId).execute().body();\n    } catch (e) {\n        return \"\";\n    }\n};\nvar annotate = (text, dict) => {\n    var keys = Object.keys(dict).sort((a, b) => b.length - a.length);\n    var pat = new RegExp(keys.join('|'), 'g');\n    return text.replace(pat, word => {\n        var read = dict[word];\n        if (/[ぁ-んァ-ン]/.test(word) && /[一-龯々]/.test(word)) {\n            var pre = (word.match(/^([ぁ-んァ-ン]+)/) || [''])[0];\n            var suf = (word.match(/([ぁ-んァ-ン]+)$/) || [''])[0];\n            var kanji = word.substring(pre.length, word.length - suf.length);\n            return (!pre || read.startsWith(pre)) && (!suf || read.endsWith(suf)) ? `${pre}${kanji}(${read.substring(pre.length, read.length - suf.length)})${suf}` : `${word}(${read})`;\n        }\n        return `${word}(${read})`;\n    });\n};\nvar regex = content => {\n    var displayedImages = new Set();\n    return JSON.stringify(content).replace(/<图片>(https?:\\/\\/[^\"\\s]+)/g, (match, url) => {\n        if (displayedImages.has(url)) return '';\n        displayedImages.add(url);\n        var referer = url.match(/https?:\\/\\/[^\\/]+/)[0].replace(/i\\.pximg\\.net/, 'www.pixiv.net');\n        var headers = JSON.stringify({headers: {Referer: referer}});\n        return `<img src=\"${url},${headers}\">`;\n    });\n};\nvar format = content => content.replace(/^\\[|\\]$/g, '').split(',').map(item => item.trim().replace(/^\"|\"$/g, '')).filter(Boolean).map((item, i) => item.startsWith('{\"headers\"') && i > 0 ? ',' + item : '    ' + item).join(\"\\n\");",
  "lastUpdateTime": 1759350398729,
  "loginUi": "[\n    {\n        \"name\": \"账号\",\n        \"type\": \"text\"\n    },\n    {\n        \"name\": \"密码\",\n        \"type\": \"password\"\n    }\n]",
  "loginUrl": "<js>\nvar login = () => {\n    var username = source.getLoginInfoMap().get(\"账号\");\n    var password = source.getLoginInfoMap().get(\"密码\");\n    var res = java.post(\n        `${baseUrl.replace('n', 'auth')}/api/v1/auth/login`,\n        JSON.stringify({\n            username: username,\n            password: password,\n            app: \"legado\"\n        }),\n        {\"Content-Type\": \"application/json\"}\n    );\n    source.putLoginHeader(JSON.stringify({\n        Authorization: `Bearer ${res.body()}`\n    }));\n}\nlogin();\n</js>",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "authors..name",
    "coverUrl": "{{'https://static.kksk.io/image/convert/885e391180d8d1f37ad157338daa61dd.webp'}}",
    "init": "<js>\nvar initUrl = book.bookUrl;\nvar url = initUrl.includes('api/novel') ? initUrl : initUrl.replace('/novel/', '/api/novel/');\nvar body = initUrl.includes('api/novel') ? result : java.ajax(url);\nif (body.includes('ID不合适，应当使用')) {\n    var match = body.match(/\\/\\w+\\/[\\w-]+/);\n    url = `${book.origin}/api/novel${match}`;\n    body = java.ajax(url);\n}\nif (body.includes(\"Token不合法或者过期\")) {\n    java.toast(\"当前会话已失效，请重新登录\");\n}\njava.put('url', url);\nbody;\n</js>",
    "intro": "<js>\nvar value = String(book.getVariable(\"custom\")) || String(source.getVariable());\nvar data = JSON.parse(result);\nvar cnIntro = data.introductionZh;\nvar jpIntro = data.introductionJp;\nvar intro = cnIntro ? (value === '5' ? jpIntro : ['6', '8'].includes(value) ? cnIntro + \"\\n&lrm;\\n\" + jpIntro : ['7', '9'].includes(value) ? jpIntro + \"\\n&lrm;\\n\" + cnIntro : cnIntro) : jpIntro;\nvar timeStamp = '{{$.toc[-1].createAt}}' || '{{$.syncAt}}';\nintro = '&nbsp;&nbsp;📬最近' + ('{{$.toc[-1].createAt}}' ? '更新' : '同步') + '：' + java.timeFormat(timeStamp * 1000) + '\\n&lrm;\\n' + intro;\nintro;\n</js>",
    "kind": "{{$.type##中|已}},{{$.attentions}},{{$.keywords}}",
    "name": "<js>\nvar value = String(book.getVariable(\"custom\")) || String(source.getVariable());\nvar data = JSON.parse(result);\nvar name = value === '5' ? data.titleJp : data.titleZh || data.titleJp;\nname;\n</js>",
    "tocUrl": "{{java.get('url')}}",
    "wordCount": "totalCharacters"
  },
  "ruleContent": {
    "content": "<js>\nvar token = source.getLoginHeader();\nupdate(baseUrl, token);\nvar value = String(book.getVariable(\"custom\")) || String(source.getVariable());\nvar get = /^[1-9]$/.test(value) ? value : '1';\nvar config = {\n    1: 'sakuraParagraphs',\n    2: 'gptParagraphs',\n    3: 'youdaoParagraphs',\n    4: 'baiduParagraphs',\n    5: 'paragraphs'\n};\nvar data = JSON.parse(result);\nvar content = data[config[get]] || data[config[1]] || data[config[2]] || data[config[3]] || data[config[4]] || data[config[5]];\nif (['6', '7', '8', '9'].includes(get)) {\n    var cnContent = data[config[1]] || data[config[2]] || data[config[3]] || data[config[4]];\n    var jpContent = data[config[5]];\n    if (cnContent) {\n        if (['8', '9'].includes(get)) {\n            var res = java.post(\n                'https://static.kksk.io/api/kanji',\n                JSON.stringify({\"content\": format(regex(jpContent))}),\n                {\"Content-Type\": \"application/json\"}\n            );\n            var kanji = JSON.parse(res.body());\n            jpContent = jpContent.map(text => annotate(text, kanji));\n        }\n        var type = ['6', '8'].includes(get);\n        content = jpContent.flatMap((jp, i) => {\n            if (!((jp || '').trim() && (cnContent[i] || '').trim())) return [];\n            var pair = type ? [cnContent[i], jp] : [jp, cnContent[i]];\n            return pair.filter(Boolean).concat(i === jpContent.length - 1 ? [] : '\\u200B');\n        }).filter(Boolean);\n    } else {\n        content = jpContent;\n    }\n}\nformat(regex(content));\n</js>"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "<js>\nif (result.includes(\"Token不合法或者过期\")) {\n    java.toast(\"当前会话已失效，请重新登录\");\n}\nresult;\n</js>\nitems",
    "bookUrl": "/api/novel/{{$.providerId}}/{{$..novelId}}",
    "coverUrl": "{{'https://static.kksk.io/image/convert/885e391180d8d1f37ad157338daa61dd.webp'}}",
    "intro": "&nbsp;&nbsp;源站：{{$.providerId}}{{'\\n'}}📬最近同步：{{java.timeFormat(java.getString('$.updateAt')*1000)}}{{'\\n'}}总计{{$.total}}|百度{{$.baidu}}|有道{{$.youdao}}|gpt{{$.gpt}}|sakura{{$.sakura}}",
    "kind": "{{$.type##中|已}},{{$.attentions}},{{$.keywords}}",
    "name": "<js>\nvar value = String(book.getVariable(\"custom\")) || String(source.getVariable());\nvar name = value === '5' ? result.titleJp : result.titleZh || result.titleJp;\nname;\n</js>"
  },
  "ruleToc": {
    "chapterList": "<js>\nif (result.includes(\"Token不合法或者过期\")) {\n    java.toast(\"当前会话已失效，请重新登录\");\n}\nresult;\n</js>\ntoc\n<js>\nresult.forEach(item => {\n    if ('chapterId' in item) {\n        item.url = `${baseUrl}/chapter/${item.chapterId}`;\n        var timeStamp = item.createAt ? item.createAt * 1000 : null;\n        if (timeStamp) {\n            item.time = java.timeFormat(timeStamp);\n        }\n    } else {\n        item.isVolume = true;\n    }\n});\nresult;\n</js>",
    "chapterName": "<js>\nvar value = String(book.getVariable(\"custom\")) || String(source.getVariable());\nvar name = result.titleZh ? (value === '5' ? result.titleJp : ['6', '8'].includes(value) ? result.titleZh + ' ↔ ' + result.titleJp : ['7', '9'].includes(value) ? result.titleJp + ' ↔ ' + result.titleZh : result.titleZh) : result.titleJp;\nname;\n</js>",
    "chapterUrl": "url",
    "isVolume": "isVolume",
    "updateTime": "<js>\nvar value = String(book.getVariable(\"custom\")) || String(source.getVariable());\nvar info = result.isVolume ? null : (result.time ? (result.titleZh ? (['6', '8'].includes(value) ? result.titleJp + ' · ' + result.time : ['7', '9'].includes(value) ? result.titleZh + ' · ' + result.time : result.time) : result.time) : (['7', '9'].includes(value) ? result.titleZh : ['6', '8'].includes(value) ? result.titleJp : null));\ninfo;\n</js>"
  },
  "searchUrl": "<js>\nvar providers = {\n    kakuyomu: /(?:https?:\\/\\/)?kakuyomu\\.jp\\/works\\/(\\d+)/,\n    syosetu: /(?:https?:\\/\\/)?(ncode|novel18)\\.syosetu\\.com\\/(\\w+)/,\n    novelup: /(?:https?:\\/\\/)?novelup\\.plus\\/story\\/(\\d+)/,\n    hameln: /(?:https?:\\/\\/)?syosetu\\.org\\/novel\\/(\\d+)/,\n    pixiv: /(?:https?:\\/\\/)?(www\\.pixiv\\.net\\/novel\\/series\\/(\\d+)|www\\.pixiv\\.net\\/novel\\/show\\.php\\?id=(\\d+))/,\n    alphapolis: /(?:https?:\\/\\/)?www\\.alphapolis\\.co\\.jp\\/novel\\/(\\d+)\\/(\\d+)/,\n    sakura: /(?:https?:\\/\\/)?(?:books\\d?\\.fishhawk\\.top|n\\.novelia\\.cc)\\/(?:api\\/)?novel\\/(\\w+)\\/([\\w-]+)/\n};\nvar url;\nfor (var provider in providers) {\n    var match = key.match(providers[provider]);\n    if (match) {\n        var providerId = provider === 'sakura' ? match[1] : provider;\n        var novelId = provider === 'alphapolis' ? `${match[1]}-${match[2]}` : provider === 'pixiv' ? (match[3] ? `s${match[3]}` : match[2]) : (match[2] || match[1]);\n        url = `${baseUrl}/api/novel/${providerId}/${novelId}`;\n        break;\n    }\n}\nif (!url) {\n    url = `${baseUrl}/api/novel?page=${page-1}&pageSize=20&query=${key}&provider=kakuyomu,syosetu,novelup,hameln,pixiv,alphapolis&type=0&level=0&translate=0&sort=1`;\n}\nurl;\n</js>",
  "variableComment": "输入对应数字刷新即可获取对应文本，{1: \"sakura译文\", 2: \"gpt译文\", 3: \"有道译文\", 4: \"百度译文\", 5: \"原文\", 6: \"中日对照\", 7: \"日中对照\", 8: \"6+平假注音\", 9: \"7+平假注音\"}，默认sakura译文。书籍变量作用于一本书，源变量作用于整个书源，书籍变量优先级高于源变量。",
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
