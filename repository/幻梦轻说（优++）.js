// @name 幻梦轻说（优++）
// @version 2025.12.10
// @author converted
// @url https://www.huanmengacg.com
// @enabled true
// @tags 小说,书源,converted
// @description QQ资源群：992706162
// @description TG交流群：https://t.me/huanmengnovel
// @description 由于一直疯狂被人举报免费书源、软件、QQ群，所以QQ群以后长期禁言
// @description 幻梦轻小说全网最齐全的轻小说网，访问速度优质而且网页内置插图，拥有海量的轻小说书籍，如果有网页bug或者需求的小说可以进网站群及时反馈
// @description 作者留言：
// @description 1.0更新：本网站所有的小说都是免费的，目前已经有了PC端和wap端，APP端目前还有点问题需要调试

const LEGADO_SOURCE = {
  "bookSourceComment": "\nQQ资源群：992706162\n\nTG交流群：https://t.me/huanmengnovel\n\n由于一直疯狂被人举报免费书源、软件、QQ群，所以QQ群以后长期禁言\n\n幻梦轻小说全网最齐全的轻小说网，访问速度优质而且网页内置插图，拥有海量的轻小说书籍，如果有网页bug或者需求的小说可以进网站群及时反馈\n\n\n作者留言：\n\n1.0更新：本网站所有的小说都是免费的，目前已经有了PC端和wap端，APP端目前还有点问题需要调试\n\n本次初次制作好了对接阅读的书源，但是为了避免被大规模盗刷流量，书源暂时没有对接插图\n\n2.0更新：本次更新解决了插图问题，让书源可以显示插图，显示不出来多刷新就行\n\n站长在Cdn处新增速率限制，超过限制会被拉黑，国外地区也会无法访问插图，非官网访问也会无法访问插图\n\n如果后续阅读方面流量过于异常，我会关闭阅读的阅读插图渠道，希望各位可以理解\n\n2.1更新：新增发现页面的选项功能，用户可以更快速便捷的从分类和题材中寻找自己想要的小说\n\n2.2更新：修复发现页面的分类功能异常的问题，现在移除文库分类\n\n2.3更新：修复发现界面过于拥挤，点击作者无法快速搜索作者，总有几本推荐阅读始终占据分类书籍顶部的问题，这里感谢QQ用户雪隐梅香提供的修复\n\n\n2.4更新：优化了插图排版的问题，如果插图不是一张图片一页，可以尝试在阅读界面右上角手动把图片样式改为SINGLE\n\n2.5更新：本次网站将图床更换为了下行宽带300M，上行200M的大宽带服务器，方便大家更快的使用。与此同时修复了更换图床后，插图异常不显示的问题\n\n2.6更新：网友修改优化版本，由于海外线路需要人机交互，修复了海外线路被阻拦，无法使用书源的问题\n\n2.7更新：修复阅读app下载过快，会触发拉黑的问题，限制并发\n\n2.8更新：兼容苹果用户的读不舍手书源，修复目录异常的问题\n\n注意：\n\n此书源支持苹果用户的TF测试版的读不舍手\n\n以前书源版本可能会出现目录没有文章，或者显示异常\n\n我没有苹果手机，也无法测试和写书源，能够适配一个苹果书源我已经尽力了，大家见谅\n\n\n2.9更新：上调并发率，并发率太低可能会出现图片加载异常，太高会导致被拉黑\n\n3.0更新：在发现功能中，新增一个【最新】按钮功能，自动索引获取时间戳最新入库50本小说\n\n更多详情内容，可以关注：www.huanmengacg.com\n\n",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "幻梦轻说（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.huanmengacg.com",
  "concurrentRate": "80/5000",
  "customButton": false,
  "customOrder": 12,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\"title\": \"🍑 幻梦轻小说首页 🍑\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/page/{{page}}\",\n\"style\": {\"layout_flexGrow\": 0,\n\"layout_flexBasisPercent\": 1\n}},\n{\"title\": \"🍓 全部 🍓\",\"url\": \"\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.29\n}},\n{\"title\": \"🍅 ↓ 以下为题材分类 ↓ 🍅\",\"url\": \"\",\n\"style\": {\"layout_flexGrow\": 0,\n\"layout_flexBasisPercent\": 1\n}},\n{\"title\": \"最新\",\"url\": \"https://www.huanmengacg.com/index.php/custom/serial\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"校园\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/1/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"青春\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/2/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"恋爱\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/3/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"治愈\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/4/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"群像\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/5/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"竞技\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/6/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"音乐\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/7/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"美食\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/8/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"旅行\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/9/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"欢乐向\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/10/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"经营\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/11/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"职场\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/12/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"斗智\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/13/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"脑洞\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/14/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"宅文化\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/15/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"穿越\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/16/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"奇幻\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/17/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"魔法\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/18/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"异能\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/19/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"战斗\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/20/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"科幻\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/21/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"机战\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/22/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"战争\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/23/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"冒险\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/24/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"龙傲天\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/25/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"悬疑\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/26/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"犯罪\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/27/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"复仇\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/28/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"黑暗\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/29/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"猎奇\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/30/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"惊悚\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/31/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"间谍\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/32/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"末日\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/33/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"游戏\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/34/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"大逃杀\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/35/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"青梅竹马\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/36/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"妹妹\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/37/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"女儿\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/38/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"JK\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/39/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"JC\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/40/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"大小姐\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/41/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"性转\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/42/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"伪娘\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/43/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"人外\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/44/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"后宫\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/45/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"百合\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/46/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"耽美\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/47/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"NTR\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/48/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"女性视角\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/49/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}},\n{\"title\": \"暂未分类\",\"url\": \"https://www.huanmengacg.com/index.php/book/category/tags/50/page/{{page}}\",\"style\": {\"layout_flexGrow\": 1,\"layout_flexBasisPercent\": 0.29}}\n]",
  "header": "@js: \nJSON.stringify({\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36\",\n  \"Referer\": baseUrl\n})",
  "lastUpdateTime": 1765372786876,
  "loginCheckJs": "if (result.body().match(/<title>Just a moment...<\\/title>/))\n{\tjava.startBrowserAwait(baseUrl,\"验证\")\n}\nresult",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": ".book-metas.0@text##作者：",
    "coverUrl": "dt@img@src",
    "intro": ".book-summary@text",
    "kind": ".book-metas.1@text&&.book-metas.2@text&&.book-metas.3@text##(?:分类|状态|更新)：| [\\d：:]+\n<js>result.replace(/ /,\",\")</js>",
    "name": ".book-title@text"
  },
  "ruleContent": {
    "content": "#BookText@p@html",
    "imageStyle": "SINGLE",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {
    "author": ".book-module@class.pipe-z@text",
    "bookList": "class.module@class.contentbox@class.boxbd@.common-list",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "intro": ".book-profile@text",
    "kind": ".book-module@class.pipe-z-s@text",
    "name": "dt@text"
  },
  "ruleSearch": {
    "author": ".book-module@text##··.*",
    "bookList": ".boxbd@.common-list",
    "bookUrl": "a@href",
    "checkKeyWord": "--https://www.huanmengacg.com/index.php/book_read_4799_2022.html",
    "coverUrl": "img@data-original",
    "intro": ".book-profile@text",
    "kind": ".book-module@text##.*··",
    "name": "dt@text"
  },
  "ruleToc": {
    "chapterList": "#chapterlist li a",
    "chapterName": "text",
    "chapterUrl": "href",
    "nextTocUrl": "text.下一页@href"
  },
  "searchUrl": "/index.php/book/search?action=search&key={{key}}",
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
