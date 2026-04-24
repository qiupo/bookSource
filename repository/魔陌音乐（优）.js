// @name 魔陌音乐（优）
// @version 2025.10.03
// @author converted
// @url 魔音-MORIN
// @enabled true
// @tags 音乐,书源,音频,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "音乐 书源",
  "bookSourceName": "魔陌音乐（优）",
  "bookSourceType": 1,
  "bookSourceUrl": "魔音-MORIN",
  "customButton": false,
  "customOrder": 314,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "<js>\nvar Va = source.getVariable();\nif (  Va== \"\" ) {\n\tvar page = \"1\";\n\t} else {\n var page = JSON.parse(Va).page;\n }\n\n\nvar sort = [];\n\nsort.push(\n{\n\t  title: source.bookSourceName,\n\t  url: \"\",\n   style: {\n   \t           \n   \t           layout_flexGrow: 0,\n              layout_flexBasisPercent: 1\n    }\n},\n{\n\t   title: \"    咪咕尖叫新歌榜    \",\n\t   url: \"https://app.c.nf.migu.cn//bmw/rank/rank-info/v1.0?rankId=27553319\",\n   style: {\n   \t           layout_flexGrow: 1,\n   \t           layout_flexBasisPercent: 0.29\n   }\n},\n{\n\t  title: \"    咪咕尖叫热歌榜    \",\n\t  url: \"https://app.c.nf.migu.cn//bmw/rank/rank-info/v1.0?rankId=27186466\",\n   style: {\n   \t           layout_flexGrow: 1,\n   \t           layout_flexBasisPercent: 0.29\n   }\n},\n{\n\t  title: \"    咪咕尖叫原创榜    \",\n\t  url: \"https://app.c.nf.migu.cn//bmw/rank/rank-info/v1.0?rankId=27553408\",\n\t  style: {\n\t  \t           layout_flexGrow: 1,\n\t  \t           layout_flexBasisPercent: 0.29\n    }    \n},\n{\n\t  title: \"      港台榜      \",\n\t  url: \"https://app.c.nf.migu.cn//bmw/rank/rank-info/v1.0?rankId=23189800\",\n   style: {\n   \t           layout_flexGrow: 1,\n   \t           layout_flexBasisPercent: 0.29\n    }\n},\n{\n\t  title: \"      欧美榜      \",\n\t  url: \"\",\n   style: {\n   \t           layout_flexGrow: 1,\n   \t           layout_flexBasisPercent: 0.29\n   \t }\n},\n{\n\t  title: \"      占位      \",\n\t  url: \"\",\n   style: {\n   \t           layout_flexGrow: 1,\n   \t           layout_flexBasisPercent: 0.29\n   \t }\n},\n{\n\t  title: \"  ↓  以下为聚合歌单  ↓  \",\n\t  url: \"\",\n   style: {\n   \t           layout_flexGrow: 0,\n   \t           layout_flexBasisPercent: 1\n   \t }\n},\n{\n\t  title: \"   🍒   小清新   🍒   \",\n\t  url: \"\",\n   style: {\n   \t           layout_flexGrow: 0,\n   \t           layout_flexBasisPercent: 1\n   \t }\n});\n\njava.toast(\"稍等，正在更新发现列表！\");\nvar Headers = sortH();\n\n//小清新\nvar url1 = `https://m.music.migu.cn/migumusic/h5/playlist/list?columnId=15127272&tagId=1000587673&pageNum=${page}&pageSize=20${Headers}`;\nvar res1 = JSON.parse(java.ajax(url1)).data.items;\nfor ( i = 0; i < res1.length; i ++ ) {\n\t var data1 = res1[i];\n  var sid1 = data1.playListId;\n  var sti1 = data1.playListName;\n\t var sur1 = `https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?playlistId=${sid1}&pageNo={{page}}&pageSize=20`;\n\t sort.push({\n        title: sti1,\n        url: sur1,\n        style: {\n            layout_flexGrow: 1,\n            layout_flexBasisPercent: 0.29\n        }\n    })\n\t}\n\n//国风\nvar url2 = `https://m.music.migu.cn/migumusic/h5/playlist/list?columnId=15127272&tagId=1000001675&pageNum=${page}&pageSize=20${Headers}`;\nvar res2 = JSON.parse(java.ajax(url2)).data.items;\nfor ( j = 0; j < res2.length; j ++ ) {\n\t var data2 = res2[j];\n  var sid2 = data2.playListId;\n  var sti2 = data2.playListName;\n\t var sur2 = `https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?playlistId=${sid1}&pageNo={{page}}&pageSize=20`;\n\t sort.push({\n        title: sti2,\n        url: sur2,\n        style: {\n            layout_flexGrow: 1,\n            layout_flexBasisPercent: 0.29\n        }\n    })\n\t}\n\nsort.push({\n        title: \"  🔥 热 歌  🔥 \",\n        url: \"\",\n        style: {\n            layout_flexGrow: 0,\n            layout_flexBasisPercent: 1\n      }\n  })\n\n//热歌\nvar url3 = `https://m.music.migu.cn/migumusic/h5/playlist/list?columnId=15127272&tagId=1001076096&pageNum=${page}&pageSize=20${Headers}`;\nvar res3 = JSON.parse(java.ajax(url3)).data.items;\nfor ( r = 0; r < res3.length; r ++ ) {\n\t var data3 = res3[r];\n  var sid3 = data3.playListId;\n  var sti3 = data3.playListName;\n\t var sur3 = `https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?playlistId=${sid1}&pageNo={{page}}&pageSize=20`;\n\t sort.push({\n        title: sti3,\n        url: sur3,\n        style: {\n            layout_flexGrow: 1,\n            layout_flexBasisPercent: 0.29\n        }\n    })\n\t}\n\nsort.push({\n        title: \"  散 步  \",\n        url: \"\",\n        style: {\n            layout_flexGrow: 0,\n            layout_flexBasisPercent: 1\n      }\n  })\n//散步\nvar url4 = `https://m.music.migu.cn/migumusic/h5/playlist/list?columnId=15127272&tagId=1000587694&pageNum=${page}&pageSize=20${Headers}`;\nvar res4 = JSON.parse(java.ajax(url2)).data.items;\nfor ( s = 0; s < res4.length; s ++ ) {\n\t var data4 = res4[s];\n  var sid4 = data4.playListId;\n  var sti4 = data4.playListName;\n\t var sur4 = `https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?playlistId=${sid1}&pageNo={{page}}&pageSize=20`;\n\t sort.push({\n        title: sti4,\n        url: sur4,\n        style: {\n            layout_flexGrow: 1,\n            layout_flexBasisPercent: 0.29\n        }\n    })\n\t}\n\nJSON.stringify(sort);\n</js>",
  "jsLib": "function getAPI() {\n\treturn \"https://app.u.nf.migu.cn\"\n\t}\n\nfunction getHeader() {\n\tvar header = `,{\n  \"headers\": {\n    \"User-Agent\": \"stagefright/1.2 (Linux;Android 15)\"\n  },\n  \"webView\": true\n}`\n return header\n\t}\n\nfunction getcHeader() {\n\tvar header = `{\n  \"headers\": {\n    \"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36\",\n    \"Cookie\": \"SESSION=MmU0ZDNlZWMtMjgwNS00ODcwLTk0MTMtZmU5YjVmY2UzNmM5;\",\n    \"ce\": \"D8CCB89492D3A98C66988FA381799C7A9A90888DC7A39F9064928A9A8D7A9A75999487B89AA0AB8858CAC7AA8582996F94998C85929EA38F58CECAD6C7ADD57E949B858F96A6A88D67938793B8AEDDAAC6C89DBB9ED4A29067938EA6857F9DA59397858E95\",\n    \"By\": \"4f09e01c83d69100c363c33aecfef9f8\",\n    \"Referer\": \"https://m.music.migu.cn/v4/\",\n    \"channel\": \"014000D\"\n  },\n  \"method\": \"GET\"\n }`\n return header\n}\n\n\nfunction sortH() {\n\tvar Hea = `,{\n  \"headers\": {\n    \"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36\",\n    \"channel\": \"014000D\",\n    \"Host\": \"m.music.migu.cn\",\n    \"Referer\": \"https://m.music.migu.cn/v4/\",\n    \"By\": \"4f09e01c83d69100c363c33aecfef9f8\",\n    \"Cookie\": \"SESSION=MmU0ZDNlZWMtMjgwNS00ODcwLTk0MTMtZmU5YjVmY2UzNmM5;\",\n    \"ce\": \"D8CCB89492D3A98C66988FA381799C7A9A90888DC7A39F9064928A9A8D7A9A75999487B89AA0AB8858CAC7AA8582996F94998C85929EA38F58CECAD6C7ADD57E949B858F96A6A88D67938793B8AEDDAAC6C89DBB9ED4A29067938EA6857F9DA59397858E95\"\n   }\n }`;\n return Hea\n}",
  "lastUpdateTime": 1759505490146,
  "loginCheckJs": "if (source.getVariable()==\"\") {\n    eval(String(source.loginUrl));\n    reg(true);\n}\nresult",
  "loginUi": "[\n{\n        \"name\":  \"在这里填入发现列表的页码数\",\n        \"type\": \"text\"\n}\n]",
  "loginUrl": "function login() {\n\tvar text = String(source.getLoginInfoMap().get('在这里填入发现列表的页码数'));\n\tif ( text == \"\" && text == null && text == undefined ) {\n\tvar page = \"1\";\n} else {\n var page = text;\n}\n\tvar Variable = {\n\t\t      page: page\n\t}\n\t source.setVariable(JSON.stringify(Variable));\n }",
  "respondTime": 180000,
  "ruleBookInfo": {
    "coverUrl": "$..img1||$..img2",
    "init": "<js>\nlet data;\ntry {\n        var res = JSON.parse(result);\n    } catch (e) {\n        java.log(\"JSON解析错误: \" + e);\n        let data = {\n        \tname: \"失败！\",\n        \tauthor: \"失败！\"\n        \t}\n        \tvar res = JSON.parse(JSON.stringify(data));\n        \tjava.toast(\"歌曲无来源！\");\n    }\nvar ring = res.ringCopyrightId;\nif ( ring == undefined && ring == \"\" ) {\n\tjava.toast(\"歌曲无来源！\");\n\t}\nresult\n</js>",
    "intro": "<js>\nvar d = JSON.parse(result);\nvar songid = d.data.song.ringCopyrightId;\n\nvar url = `https://m.music.migu.cn/migumusic/h5/song/lyric?copyrightId=${songid},${getcHeader()}`;\n\nconst data = JSON.parse(java.ajax(url));\nif (data.code === \"200\" && data.data && data.data.lyric) {\n    var lyric = data.data.lyric;\n} else {\n    java.toast(\"无法获取歌词！\");\n    var lyric = \"无法获取歌词！\";\n}\nlyric\n</js>",
    "tocUrl": "@js:\nvar url = baseUrl;\nurl"
  },
  "ruleContent": {},
  "ruleExplore": {
    "author": "$.txt2||$.singerList[0].name&&$.singerList[1].name",
    "bookList": "$.data.contents.*||$.data.songList[*]",
    "bookUrl": "@js:\nvar H = getheader();\nvar id = java.getString(\"resId||contentId\");\nvar iid = java.getString(\"copyrightId\")||java.getString(\"ringCopyrightId\");\n\nvar url = `https://app.c.nf.migu.cn/MIGUM3.0/strategy/pc/listen/v1.0?resourceType=2&contentId=${id}&copyrightId=${iid}&toneFlag=PQ${H}`;\n\nurl",
    "coverUrl": "$.img||$.img3##.*(/data.*)##https://d.musicapp.migu.cn$1###",
    "kind": "$.txt3",
    "name": "$.txt||$.songName"
  },
  "ruleSearch": {
    "author": "musicAuthor",
    "bookList": "<js>\nlet data;\ntry {\n        var res = JSON.parse(result);\n    } catch (e) {\n        java.log(\"JSON解析错误: \" + e);\n        let data = {\n        \tname: \"失败！\",\n        \tauthor: \"失败！\"\n        \t}\n        \tvar res = JSON.parse(JSON.stringify(data));\n    }\n\nvar musicList = [];\n\nres.forEach ( function ( data, i ) {\n\tvar name = data.songName;\n\n var write = data.singerList.map(singer => singer.name);\n var author = write.join(\" \");\n \n if ( data.album ) {\n    var album = \"专辑名称：\" + data.album;\n } else {\n    var album = \"\";\n }  \n\n var kind = \"共播放\" + data.playNumDesc + \"次\" + \" | \" + \"时长：\" + data.duration + \"秒\" + \" | \"  + album;\n \n if ( cover != \"\" || cover != null ) {\n \tvar cover = data.img1;\n \t} else {\n \tvar cover = data.img2;\n \t}\n \t\n \tvar api = getAPI();\n \tvar contentId = data.contentId;\n \tvar ringCopyrightId = data.ringCopyrightId;\n \tvar header = `{\"headers\": {\"channel\": \"014000D\"},\"method\": \"GET\"}`;\n\n var iurl = `${api}/MIGUM3.0/strategy/pc/listen/v1.0?resourceType=2&contentId=${contentId}&copyrightId=${ringCopyrightId}&toneFlag=PQ,${header}`\n\nmusicList.push({\n       \tmusicName: name,\n       \tmusicAuthor: author,\n       \tmusicSort: String(kind),\n       \tmusicCover: cover,\n       \tmusicInfo: iurl\n  \t})\n\t})\nmusicList\n</js>",
    "bookUrl": "musicInfo",
    "checkKeyWord": "坏女孩",
    "coverUrl": "musicCover",
    "kind": "musicSort",
    "name": "musicName"
  },
  "ruleToc": {
    "chapterList": "<js>\nconst data = JSON.parse(result);\n\nconst url = data.data.url;\nconst songName = data.data.song.songName;\nconst singerList = data.data.song.singerList.map(singer => singer.name);\nconst t = data.data.audioFormatType;\n\nvar kind = singerList + t;\nvar mp3 = url + getHeader();\nvar list = [];\n\nlist.push({\n\tmusicName: songName,\n\tkind: kind,\n\tmusic: mp3\n\t})\nlist\n</js>",
    "chapterName": "musicName",
    "chapterUrl": "music",
    "updateTime": "kind"
  },
  "searchUrl": "<js>\nvar api = getAPI();\nvar action = \"/pc/resource/song/item/search/v1.0?text=\" + key + \"&pageNo=\" + page + \"&pageSize=4\";\nvar search = api + action;\nsearch\n\n</js>",
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
