// @name 爱看影视（优++）
// @version 2025.12.28
// @author converted
// @url https://v.ikanbot.com
// @type video
// @enabled true
// @tags 影视,书源,类型4,converted
// @description //解析接口
// @description //  https://yy.69mzf.com/player/player/?url=
// @description //	 https://jx.nnsvip.cn/?url=
// @description //  https://api.nnsvip.sbs/?url=
// @description //阅读分组图标排行(高→低)
// @description ⏹⏺🇨🇳➡️⬅️⬆️⬇️☢️☣️♥️⚜️⚠️⚪️⚫️⚽️⛳️✈️✨⭐️🌀🌁🌃🌆🌇🌉🌋🌐🌠🌰🌶🌸🍊🍇🍋🍉🍌🍎🍑🍓🍘🍙🍡🍤🍥🍬🍭🍯🍺🎀🎈🌌🎆🎇🎉🎊🎋🎐🎖🎥🎦🎨🎫🎬🎮🎯🎲🎴🎵🎼🏀🏅🏆🏐🏖🏜🏵🏷💊💎💠💡💮💯💰📀📁📃📌📎📄📑📒📓📔📕📖📗📘📙📚📜📝📡📤📥📦📷📺📻🔑🔔🔖🔗🔘🔞🔫🔮🔲🔳🔴🔵🕯🕹🖼🗂🗃🥇🥈🥉🥊🥩🦴🧊🧧🧩🧭🧲🧻🧼🧽🪄🪙🪧🚀🚨🚩🚫🚬🚭🛸🟠🟡🟢🟣㍘㍙㍚㍛㍜㍝㍞㍟㍠㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍰Ⓜ️

const LEGADO_SOURCE = {
  "bookSourceComment": "//解析接口\n//  https://yy.69mzf.com/player/player/?url=\n//\t https://jx.nnsvip.cn/?url=\n//  https://api.nnsvip.sbs/?url=\n\n//阅读分组图标排行(高→低)\n⏹⏺🇨🇳➡️⬅️⬆️⬇️☢️☣️♥️⚜️⚠️⚪️⚫️⚽️⛳️✈️✨⭐️🌀🌁🌃🌆🌇🌉🌋🌐🌠🌰🌶🌸🍊🍇🍋🍉🍌🍎🍑🍓🍘🍙🍡🍤🍥🍬🍭🍯🍺🎀🎈🌌🎆🎇🎉🎊🎋🎐🎖🎥🎦🎨🎫🎬🎮🎯🎲🎴🎵🎼🏀🏅🏆🏐🏖🏜🏵🏷💊💎💠💡💮💯💰📀📁📃📌📎📄📑📒📓📔📕📖📗📘📙📚📜📝📡📤📥📦📷📺📻🔑🔔🔖🔗🔘🔞🔫🔮🔲🔳🔴🔵🕯🕹🖼🗂🗃🥇🥈🥉🥊🥩🦴🧊🧧🧩🧭🧲🧻🧼🧽🪄🪙🪧🚀🚨🚩🚫🚬🚭🛸🟠🟡🟢🟣㍘㍙㍚㍛㍜㍝㍞㍟㍠㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍰Ⓜ️\n\n<js>\nn=book.name\nurl=\"https://cn.bing.com/search?q=\"+n+\"site:movie.douban.com&FORM=QBDCRD\"\nr=String(java.ajax(url))\nr=r.match(/b_algoheader\\\"\\>\\<a href=\\\"(.*)/)[1]\nd_url=r.replace(/\" h=\".*/,'')\nd_r=java.ajax(d_url)\nd_r=org.jsoup.Jsoup.parse(d_r).select(\".subject-intro p\").text()\nd_r\n</js>",
  "bookSourceGroup": "影视 书源",
  "bookSourceName": "爱看影视（优++）",
  "bookSourceType": 4,
  "bookSourceUrl": "https://v.ikanbot.com",
  "bookUrlPattern": ".*aikanbot.com/play/\\d+",
  "customButton": false,
  "customOrder": 271,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"🚫电影🚫\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"热门\",\"url\":\"/hot/index-movie-热门{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"最新\",\"url\":\"/hot/index-movie-最新{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周榜\",\"url\":\"/billboard.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"经典\",\"url\":\"/hot/index-movie-经典{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"豆瓣高分\",\"url\":\"/hot/index-movie-豆瓣高分{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"冷门佳片\",\"url\":\"/hot/index-movie-冷门佳片{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"华语\",\"url\":\"/hot/index-movie-华语{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"欧美\",\"url\":\"/hot/index-movie-欧美{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韩国\",\"url\":\"/hot/index-movie-韩国{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"日本\",\"url\":\"/hot/index-movie-日本{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"动作\",\"url\":\"/hot/index-movie-动作{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"喜剧\",\"url\":\"/hot/index-movie-喜剧{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"爱情\",\"url\":\"/hot/index-movie-爱情{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"科幻\",\"url\":\"/hot/index-movie-科幻{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"悬疑\",\"url\":\"/hot/index-movie-悬疑{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"恐怖\",\"url\":\"/hot/index-movie-恐怖{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"成长\",\"url\":\"/hot/index-movie-成长{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"豆瓣top250\",\"url\":\"/hot/index-movie-豆瓣top250{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"🚫剧集🚫\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"热门\",\"url\":\"/hot/index-tv-热门{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"美剧\",\"url\":\"/hot/index-tv-美剧{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"英剧\",\"url\":\"/hot/index-tv-英剧{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韩剧\",\"url\":\"/hot/index-tv-韩剧{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"日剧\",\"url\":\"/hot/index-tv-日剧{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"国产剧\",\"url\":\"/hot/index-tv-国产剧{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"港剧\",\"url\":\"/hot/index-tv-港剧{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"综艺\",\"url\":\"/hot/index-tv-综艺{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"纪录片\",\"url\":\"/hot/index-tv-纪录片{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"日本动画\",\"url\":\"/hot/index-tv-日本动画{{page==1?'':'-p-'+page}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "header": "{\n\"User-Agent\":\"Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36\",\n\"accept\":\"image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8\",\n\"referer\":\"https://www.aikanbot.com\",\n\"x-requested-with\":\"com.UCMobile\"\n}",
  "lastUpdateTime": 1766914821307,
  "respondTime": 180000,
  "ruleBookInfo": {
    "tocUrl": "<js>\nbaseUrl+',{\"webView\":true}'\n</js>"
  },
  "ruleContent": {
    "content": "@js:\n//https://jx.2s0.cn/player/?url=\n//https://op.洛阳it商城.com/pi.php?url=\n//可去广告\n//非凡、量子、优质、暴风、ikun\n\nplay='https://jx.2s0.cn/player/?url='\nresult=play+baseUrl\nif(book.durChapterIndex==chapter.index){\n\t\tjava.startBrowser(result,title)\n\t\tjava.toast('正在加载视频\\n视频加载较慢，请耐心等待')\n\t}\nresult",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "author": ".celebrity@text",
    "bookList": "a[class=\"item\"]||.item-root",
    "bookUrl": "a.0@href",
    "coverUrl": "img@data-src##^##https://imgp.aikanbot.com/proxy?url=",
    "kind": ".year@title&&.country@title",
    "name": "img@alt"
  },
  "ruleSearch": {
    "author": "class.small.-1@text## {1}##,",
    "bookList": "class.media",
    "bookUrl": "a.0@href",
    "checkKeyWord": "澳门往事",
    "coverUrl": "img@data-src##^##https://imgp.aikanbot.com/proxy?url=",
    "kind": "class.label@text&&.small.0@text##\\[|\\]|可播放| .*",
    "name": "class.title-text@text",
    "wordCount": "{{\"🤖爱看bot\"}}"
  },
  "ruleToc": {
    "chapterList": "class.line-res@div",
    "chapterName": "text",
    "chapterUrl": "udata",
    "updateTime": "udata##https?:\\/\\/(.*\\..*)\\..*\\/.*##$1\n<js>\n  result=String(result).replace(/\\.com.*|\\.cn.*|\\.cc.*|\\.vip.*/,'').replace(/https?\\:\\/\\//,'')\nif(result.match(/lz.*cdn|cdnlz/)){result='🎬量子(⭐️无广告)'}else if(result.match(/ffzy/)){result='🎬非凡(⭐️无广告)'}else if(result.match(/qihu/)){result='🎬奇虎'}else  if(result.match(/dious/)){result='🎬天空'}else if(result.match(/mstop|daayee/)){result='🎬最大'}else if(result.match(/kuaikan/)){result='🎬快看'}else if(result.match(/jszy|jisubf|jisuzy/)){result='🎬极速'}else if(result.match(/ylbf|ylzy/)){result='🎬鱼乐'}else if(result.match(/xlzy|xluuss/)){result='🎬新浪'}else if(result.match(/suoni|qrssv/)){result='🎬索尼'}else if(result.match(/ijycnd/)){result='🎬金鹰'}else if(result.match(/jiguang/)){result='🎬极光'}else if(result.match(/bfzy|bfengbf|bbff|rrcdn/)){result='🎬暴风(⭐️无广告)'}else\nif(result.match(/uku/)){result='🎬U酷'}else if(result.match(/kczy|longshengtea/)){result='🎬快车'}else if(result.match(/bdzy/)){result='🎬百度'}else \nif(result.match(/1080pzy|tlkqc/)){result='🎬无尽'}else if(result.match(/ikzy/)){result='🎬爱酷'}else if(result.match(/fsvod/)){result='🎬飞速'}else if(result.match(/taopian/)){result='🎬淘片'}else if(result.match(/68zy/)){result='🎬68'}else if(result.match(/yzzy/)){result='🎬优质'}else if(result.match(/wolong|wls|wlcdn/)){result='🎬卧龙'}else if(result.match(/hnzy|bfvvs/)){result='🎬红牛'}else if(result.match(/gsu|gszy/)){result='🎬光速'}else if(result.match(/monidai/)){result='🎬八戒'}else if(result.match(/xmyy/)){result='🎬樱花'}else if(result.match(/1080tg/)){result='🎬闪电'} else if(result.match(/subo|sbzy/)){result='🎬速播'}else if(result.match(/dmzy/)){result='🎬弹幕'}else if(result.match(/vipzyk/)){result='🎬1080'}else if(result.match(/sd-play/)){result='🎬标清'}else if(result.match(/huyall/)){result='🎬虎牙'}else if(result.match(/49zy/)){result='🎬49'}else if(result.match(/high.*playback/)){result='🎬优质(⭐️无广告)'}else if(result.match(/hhuus/)){result='🎬豪华'}else if(result.match(/pe12369/)){result='🎬少年HD'}else if(result.match(/huicheng|healthcare/)){result='🎬360'}else if(result.match(/nikanba|m3u8hw8/)){result='🎬华为(⭐️暂无广告)'}else if(result.match(/bfikun/)){result='🎬爱坤(⭐️无广告)'}else if(result.match(/wgslsw/)){result='🎬樱花'}else if(result.match(/bxgbnet/)){result='🎬OK'}else if(result.match(/qdhdcate/)){result='🎬鸭鸭'}else if(result.match(/fentvoss/)){result='🎬闪电'}else if(result.match(/oiods/)){result='🎬豆瓣'}else if(result.match(/360zyx/)){result='🎬360'}else if(result.match(/xingchongwang/)){result='🎬星虫'}else if(result.match(/dytt/)){result='🎬天堂'}\n</js>"
  },
  "searchUrl": "/search?q={{key}}{{page==1?'':'&p='+page}}",
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
