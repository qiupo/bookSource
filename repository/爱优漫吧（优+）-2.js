// @name 爱优漫吧（优+）
// @version 2025.10.01
// @author converted
// @url https://m.iyouman.com/
// @type comic
// @enabled true
// @tags 漫画,书源,图片,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "爱优漫吧（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.iyouman.com/",
  "customButton": false,
  "customOrder": 244,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "每日更新::https://m.iyouman.com/api/updatelist/?productname=aym&platformname=wap\n综合榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=all&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n自制榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=self&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n少年榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=boy&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n少女榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=girl&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n新作榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=new&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n黑马榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=dark&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n付费榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=charge&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n免费榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=free&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n完结榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=finish&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n连载榜::https://m.iyouman.com/api/getRankDataForWeb/?product_id=2&isalldata=0&time_type=total&sort_type=serialize&rank_type=heat&page={{page}}&productname=aym&platformname=wap\n人气::https://m.iyouman.com/api/getsortlist/?comic_sort=&orderby=click&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n更新::https://m.iyouman.com/api/getsortlist/?comic_sort=&orderby=date&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n评分::https://m.iyouman.com/api/getsortlist/?comic_sort=&orderby=score&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n收藏::https://m.iyouman.com/api/getsortlist/?comic_sort=&orderby=shoucang&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n连载::https://m.iyouman.com/api/getsortlist/?comic_sort=lianzai&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n完结::https://m.iyouman.com/api/getsortlist/?comic_sort=wanjie&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n热血::https://m.iyouman.com/api/getsortlist/?comic_sort=rexue&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n机战::https://m.iyouman.com/api/getsortlist/?comic_sort=jizhan&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n运动::https://m.iyouman.com/api/getsortlist/?comic_sort=yundong&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n推理::https://m.iyouman.com/api/getsortlist/?comic_sort=tuili&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n冒险::https://m.iyouman.com/api/getsortlist/?comic_sort=maoxian&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n耽美::https://m.iyouman.com/api/getsortlist/?comic_sort=liaomei&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n百合::https://m.iyouman.com/api/getsortlist/?comic_sort=baihe&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n搞笑::https://m.iyouman.com/api/getsortlist/?comic_sort=gaoxiao&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n战争::https://m.iyouman.com/api/getsortlist/?comic_sort=zhanzhen&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n神魔::https://m.iyouman.com/api/getsortlist/?comic_sort=shenmo&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n忍者::https://m.iyouman.com/api/getsortlist/?comic_sort=renzhe&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n竞技::https://m.iyouman.com/api/getsortlist/?comic_sort=jingji&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n悬疑::https://m.iyouman.com/api/getsortlist/?comic_sort=xuanyi&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n社会::https://m.iyouman.com/api/getsortlist/?comic_sort=shehui&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n恋爱::https://m.iyouman.com/api/getsortlist/?comic_sort=lianai&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n宠物::https://m.iyouman.com/api/getsortlist/?comic_sort=chongwu&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n吸血::https://m.iyouman.com/api/getsortlist/?comic_sort=xixue&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n萝莉::https://m.iyouman.com/api/getsortlist/?comic_sort=luoli&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n后宫::https://m.iyouman.com/api/getsortlist/?comic_sort=hougong&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n御姐::https://m.iyouman.com/api/getsortlist/?comic_sort=yujie&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n霸总::https://m.iyouman.com/api/getsortlist/?comic_sort=bazong&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n玄幻::https://m.iyouman.com/api/getsortlist/?comic_sort=xuanhuan&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n古风::https://m.iyouman.com/api/getsortlist/?comic_sort=gufeng&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n历史::https://m.iyouman.com/api/getsortlist/?comic_sort=lishi&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n漫改::https://m.iyouman.com/api/getsortlist/?comic_sort=mangai&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n游戏::https://m.iyouman.com/api/getsortlist/?comic_sort=youxi&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n穿越::https://m.iyouman.com/api/getsortlist/?comic_sort=chuanyue&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n恐怖::https://m.iyouman.com/api/getsortlist/?comic_sort=kongbu&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n真人::https://m.iyouman.com/api/getsortlist/?comic_sort=zhenren&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n防疫::https://m.iyouman.com/api/getsortlist/?comic_sort=fangyi&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n防疫::https://m.iyouman.com/api/getsortlist/?comic_sort=fangyi&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n科幻::https://m.iyouman.com/api/getsortlist/?comic_sort=kehuan&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n都市::https://m.iyouman.com/api/getsortlist/?comic_sort=dushi&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n武侠::https://m.iyouman.com/api/getsortlist/?comic_sort=wuxia&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n修真::https://m.iyouman.com/api/getsortlist/?comic_sort=xiuzhen&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n生活::https://m.iyouman.com/api/getsortlist/?comic_sort=shenghuo&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n动作::https://m.iyouman.com/api/getsortlist/?comic_sort=dongzuo&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n大陆::https://m.iyouman.com/api/getsortlist/?comic_sort=dalu&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n日本::https://m.iyouman.com/api/getsortlist/?comic_sort=riben&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n港台::https://m.iyouman.com/api/getsortlist/?comic_sort=gangtai&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n欧美::https://m.iyouman.com/api/getsortlist/?comic_sort=oumei&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n韩国::https://m.iyouman.com/api/getsortlist/?comic_sort=os&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n全彩::https://m.iyouman.com/api/getsortlist/?comic_sort=quancai&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n黑白::https://m.iyouman.com/api/getsortlist/?comic_sort=heibai&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n小说::https://m.iyouman.com/api/getsortlist/?comic_sort=xiaoshuo&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n杂志::https://m.iyouman.com/api/getsortlist/?comic_sort=zazhi&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n日更::https://m.iyouman.com/api/getsortlist/?comic_sort=rigeng&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n新作::https://m.iyouman.com/api/getsortlist/?comic_sort=xinzuo&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap\n精品::https://m.iyouman.com/api/getsortlist/?comic_sort=jingpin&orderby=&search_type=&search_key=&page={{page}}&size=30&productname=aym&platformname=wap",
  "lastUpdateTime": 1759291952356,
  "respondTime": 11431,
  "ruleBookInfo": {
    "author": "$.data.comic_author",
    "coverUrl": "$.data.cover_list[0]",
    "intro": "$.data.comic_desc",
    "kind": "$.data.comic_type_new[*].name",
    "lastChapter": "$.data.last_chaptet_name",
    "name": "$.data.comic_name@put:{comic_id:$.data.comic_id}",
    "tocUrl": "https://m.iyouman.com/api/getchapterlist?product_id=4&productname=aym&platformname=wap&comic_id={{$.data.comic_id}}"
  },
  "ruleContent": {
    "content": "data.current_chapter.chapter_img_list@js:\nheaders={\"headers\":{\"Referer\":baseUrl}}\n;\nresult.split(\"\\n\").map(x=>'<img src=\\\"'+x+','+JSON.stringify(headers)+'\\\">').join(\"\\n\")",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.comic_author",
    "bookList": "$.data.update[*].info[*]||$.data.data[*]||$.data[*]",
    "bookUrl": "https://m.iyouman.com/api/getcomicinfo_body/?comic_id={$.comic_id}&productname=aym&platformname=wap",
    "coverUrl": "http://image.mhxk.com/mh/{$.comic_id}.jpg-600x800.jpg.webp",
    "kind": "$.comic_type||$.sort_typelist##[a-zA-Z]|\\|",
    "lastChapter": "$.last_chapter_name||$.comic_chapter_name",
    "name": "$.comic_name"
  },
  "ruleToc": {
    "chapterList": "-$.data.*",
    "chapterName": "$.chapter_name@put:{chapter_id:$.chapter_id}",
    "chapterUrl": "https://m.iyouman.com/api/getchapterinfov2?product_id=4&productname=aym&platformname=wap&comic_id=@get:{comic_id}&chapter_newid={{$.chapter_newid}}&isWebp=1&quality=low"
  },
  "searchUrl": "https://m.iyouman.com/api/getsortlist/?search_type=&search_key={{key}}&page={{page}}&size=30&productname=aym&platformname=wap",
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
