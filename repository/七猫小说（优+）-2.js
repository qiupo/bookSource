// @name 七猫小说（优+）
// @version 2025.07.02
// @author converted
// @url https://api-bc.wtzw.com/
// @enabled true
// @tags 小说,书源,converted
// @description 源名：七猫
// @description 来源：风停在了窗边
// @description 修复：

const LEGADO_SOURCE = {
  "bookSourceComment": "源名：七猫\n来源：风停在了窗边\n修复：",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "七猫小说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://api-bc.wtzw.com/",
  "customButton": false,
  "customOrder": 95,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "现代言情::https://www.baidu.com/category/gender=2&category_id=260&need_filters=1&page={{page}}&need_category=0\n古代言情::https://www.baidu.com/category/gender=2&category_id=259&need_filters=1&page={{page}}&need_category=0\n青春文学::https://www.baidu.com/category/gender=2&category_id=265&need_filters=1&page={{page}}&need_category=0\n影视原著::https://www.baidu.com/tag/need_filters=1&tag_id=539&gender=2&page={{page}}\n悬疑推理::https://www.baidu.com/category/gender=2&category_id=262&need_filters=1&page={{page}}&need_category=0\n武侠小说::https://www.baidu.com/category/gender=2&category_id=289&need_filters=1&page={{page}}&need_category=0\n科幻未来::https://www.baidu.com/category/gender=2&category_id=261&need_filters=1&page={{page}}&need_category=0\n历史小说::https://www.baidu.com/category/gender=2&category_id=264&need_filters=1&page={{page}}&need_category=0\n仙侠奇缘::https://www.baidu.com/category/gender=2&category_id=276&need_filters=1&page={{page}}&need_category=0\n仙侠玄幻::https://www.baidu.com/category/gender=2&category_id=288&need_filters=1&page={{page}}&need_category=0\n现实小说::https://www.baidu.com/category/gender=2&category_id=266&need_filters=1&page={{page}}&need_category=0\n现代军旅::https://www.baidu.com/category/gender=2&category_id=290&need_filters=1&page={{page}}&need_category=0\n文学艺术::https://www.baidu.com/category/gender=2&category_id=240&need_filters=1&page={{page}}&need_category=0\n人物传记::https://www.baidu.com/category/gender=2&category_id=247&need_filters=1&page={{page}}&need_category=0\n人文科社::https://www.baidu.com/category/gender=2&category_id=241&need_filters=1&page={{page}}&need_category=0\n少儿教育::https://www.baidu.com/category/gender=2&category_id=258&need_filters=1&page={{page}}&need_category=0\n经管励志::https://www.baidu.com/category/gender=2&category_id=242&need_filters=1&page={{page}}&need_category=0\n经典文学::https://www.baidu.com/category/gender=2&category_id=243&need_filters=1&page={{page}}&need_category=0\n历史::https://www.baidu.com/category/gender=2&category_id=56&need_filters=1&page={{page}}&need_category=1\n游戏::https://www.baidu.com/category/gender=2&category_id=75&need_filters=1&page={{page}}&need_category=1\n科幻::https://www.baidu.com/category/gender=2&category_id=64&need_filters=1&page={{page}}&need_category=1\n体育::https://www.baidu.com/category/gender=2&category_id=206&need_filters=1&page={{page}}&need_category=1\n影视::https://www.baidu.com/tag/need_filters=1&tag_id=539&gender=2&page={{page}}\n穿越::https://www.baidu.com/tag/need_filters=1&tag_id=373&gender=2&page={{page}}\n鉴宝::https://www.baidu.com/tag/need_filters=1&tag_id=47&gender=2&page={{page}}\n重生::https://www.baidu.com/tag/need_filters=1&tag_id=779&gender=2&page={{page}}\n血脉::https://www.baidu.com/tag/need_filters=1&tag_id=426&gender=2&page={{page}}\n签到::https://www.baidu.com/tag/need_filters=1&tag_id=565&gender=2&page={{page}}\n复仇::https://www.baidu.com/tag/need_filters=1&tag_id=790&gender=2&page={{page}}\n丹药::https://www.baidu.com/tag/need_filters=1&tag_id=428&gender=2&page={{page}}\n医生::https://www.baidu.com/tag/need_filters=1&tag_id=156&gender=2&page={{page}}\n战神::https://www.baidu.com/tag/need_filters=1&tag_id=527&gender=2&page={{page}}\n女婿::https://www.baidu.com/tag/need_filters=1&tag_id=36&gender=2&page={{page}}\n皇帝::https://www.baidu.com/tag/need_filters=1&tag_id=62&gender=2&page={{page}}\n弃少::https://www.baidu.com/tag/need_filters=1&tag_id=525&gender=2&page={{page}}\n热血::https://www.baidu.com/tag/need_filters=1&tag_id=1&gender=2&page={{page}}\n爽文::https://www.baidu.com/tag/need_filters=1&tag_id=570&gender=2&page={{page}}\n现实::https://www.baidu.com/tag/need_filters=1&tag_id=12&gender=2&page={{page}}\n悬疑流::https://www.baidu.com/tag/need_filters=1&tag_id=27&gender=2&page={{page}}\n女总裁::https://www.baidu.com/tag/need_filters=1&tag_id=89&gender=2&page={{page}}\n二次元::https://www.baidu.com/category/gender=2&category_id=207&need_filters=1&page={{page}}&need_category=1\n无限流::https://www.baidu.com/tag/need_filters=1&tag_id=557&gender=2&page={{page}}\n强者回归::https://www.baidu.com/tag/need_filters=1&tag_id=402&gender=2&page={{page}}\n都市人生::https://www.baidu.com/category/gender=2&category_id=203&need_filters=1&page={{page}}&need_category=1\n异术超能::https://www.baidu.com/category/gender=2&category_id=219&need_filters=1&page={{page}}&need_category=1\n玄幻奇幻::https://www.baidu.com/category/gender=2&category_id=202&need_filters=1&page={{page}}&need_category=1\n武侠仙侠::https://www.baidu.com/category/gender=2&category_id=205&need_filters=1&page={{page}}&need_category=1\n奇闻异事::https://www.baidu.com/category/gender=2&category_id=204&need_filters=1&page={{page}}&need_category=1\n短篇::https://www.baidu.com/tag/need_filters=1&tag_id=541&gender=2&page={{page}}\n重生::https://www.baidu.com/tag/need_filters=1&tag_id=779&gender=2&page={{page}}\n女强::https://www.baidu.com/tag/need_filters=1&tag_id=620&gender=2&page={{page}}\n年下::https://www.baidu.com/tag/need_filters=1&tag_id=631&gender=2&page={{page}}\n空间::https://www.baidu.com/tag/need_filters=1&tag_id=345&gender=2&page={{page}}\n穿越::https://www.baidu.com/tag/need_filters=1&tag_id=373&gender=2&page={{page}}\n隐婚::https://www.baidu.com/tag/need_filters=1&tag_id=481&gender=2&page={{page}}\n系统::https://www.baidu.com/tag/need_filters=1&tag_id=782&gender=2&page={{page}}\n快穿::https://www.baidu.com/tag/need_filters=1&tag_id=335&gender=2&page={{page}}\n虐渣::https://www.baidu.com/tag/need_filters=1&tag_id=739&gender=2&page={{page}}\n皇后::https://www.baidu.com/tag/need_filters=1&tag_id=106&gender=2&page={{page}}\n王爷::https://www.baidu.com/tag/need_filters=1&tag_id=125&gender=2&page={{page}}\n学霸::https://www.baidu.com/tag/need_filters=1&tag_id=781&gender=2&page={{page}}\n毒妃::https://www.baidu.com/tag/need_filters=1&tag_id=109&gender=2&page={{page}}\n校草::https://www.baidu.com/tag/need_filters=1&tag_id=701&gender=2&page={{page}}\n女配::https://www.baidu.com/tag/need_filters=1&tag_id=191&gender=2&page={{page}}\n甜宠::https://www.baidu.com/tag/need_filters=1&tag_id=21&gender=2&page={{page}}\n搞笑::https://www.baidu.com/tag/need_filters=1&tag_id=788&gender=2&page={{page}}\n虐恋::https://www.baidu.com/tag/need_filters=1&tag_id=16&gender=2&page={{page}}\n治愈::https://www.baidu.com/tag/need_filters=1&tag_id=17&gender=2&page={{page}}\n现代言情::https://www.baidu.com/category/gender=2&category_id=1&need_filters=1&page={{page}}&need_category=1\n总裁豪门::https://www.baidu.com/category/gender=2&category_id=8&need_filters=1&page={{page}}&need_category=0\n古代言情::https://www.baidu.com/category/gender=2&category_id=2&need_filters=1&page={{page}}&need_category=1\n种田经商::https://www.baidu.com/category/gender=2&category_id=16&need_filters=1&page={{page}}&need_category=0\n宫闱宅斗::https://www.baidu.com/category/gender=2&category_id=209&need_filters=1&page={{page}}&need_category=0\n幻想言情::https://www.baidu.com/category/gender=2&category_id=4&need_filters=1&page={{page}}&need_category=1\n奇闻异事::https://www.baidu.com/category/gender=2&category_id=204&need_filters=1&page={{page}}&need_category=1\n日久生情::https://www.baidu.com/tag/need_filters=1&tag_id=700&gender=2&page={{page}}\n影视原著::https://www.baidu.com/tag/need_filters=1&tag_id=539&gender=2&page={{page}}",
  "lastUpdateTime": 1751460956389,
  "respondTime": 2127,
  "ruleBookInfo": {
    "author": "author",
    "coverUrl": "image_link",
    "init": "data.book",
    "intro": "&nbsp;&nbsp;🔖更新时间：{{java.timeFormat(java.getString('$.update_time')*1000)}}\t{{'\\n&lrm;\\n'}}🏷️ 标签：{{$.book_tag_list[*].title&&$.category_over_words##・|\\s##，}}{{'\\n'+'​'}}\n\n{{$.intro}}\n{{'\\n&lrm;\\n'}}📍版权来源：{{$.statement##如有疑问可联系:fawu@qimao.com或客服QQ:3598987377}}",
    "kind": "book_tag_list[*].title##\\s##，",
    "lastChapter": "{{$.latest_chapter_title}} • {{java.timeFormat(java.getString('$.update_time')*1000)}}\n<js>result.replace(/\\s\\d+:\\d+/,'')</js>\n<js>result.replace(/\\//g,'-')</js>\n<js>##[\\(（【].*?[求更谢乐发订/万字票合补加].*?[】）\\)]</js>",
    "name": "title@put:{bid:id}",
    "tocUrl": "@js:\nsign_key='d3dGiJc651gSQ8w1'\n\nparams={'id':{{$.id}}}\n\nvar urlEncode = function (param, key, encode) {  \n  if(param==null) return '';  \n  var paramStr = '';  \n  var t = typeof (param);  \n  if (t == 'string' || t == 'number' || t == 'boolean') {  \n    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  \n  } else {  \n    for (var i in param) {  \n      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  \n      paramStr += urlEncode(param[i], k, encode);  \n    }  \n  }  \n  return paramStr;  \n};\nparamSign=String(java.md5Encode(Object.keys(params).sort().reduce((pre,n)=>pre+n+'='+params[n],'')+sign_key))\nparams['sign']=paramSign\n\"https://api-ks.wtzw.com/api/v1/chapter/chapter-list?\"+urlEncode(params)+\",\"+java.get(\"headers\")",
    "wordCount": "words_num"
  },
  "ruleContent": {
    "content": "@js:\nvar javaImport = new JavaImporter();\njavaImport.importPackage(\n    Packages.java.lang,\n    Packages.javax.crypto.spec,\n    Packages.javax.crypto,\n    Packages.java.util\n);\nwith(javaImport) {\n    function decode(content) {\n        var ivEncData = Base64.getDecoder().decode(String(content));\n        var key = SecretKeySpec(String(\"242ccb8230d709e1\").getBytes(), \"AES\");\n        var iv = IvParameterSpec(Arrays.copyOfRange(ivEncData, 0, 16));\n        var chipher = Cipher.getInstance(\"AES/CBC/PKCS5Padding\");\n        chipher.init(2, key, iv);\n        return String(chipher.doFinal(Arrays.copyOfRange(ivEncData, 16, ivEncData.length)));\n    }\n}\n\n\nsign_key='d3dGiJc651gSQ8w1'\n\nparams={'id':String(java.get('bid')),'chapterId':String(baseUrl.split(\"/\").pop())}\n\nvar urlEncode = function (param, key, encode) {  \n  if(param==null) return '';  \n  var paramStr = '';  \n  var t = typeof (param);  \n  if (t == 'string' || t == 'number' || t == 'boolean') {  \n    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  \n  } else {  \n    for (var i in param) {  \n      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  \n      paramStr += urlEncode(param[i], k, encode);  \n    }\n  }\n  return paramStr;\n};\n\nparamSign=String(java.md5Encode(Object.keys(params).sort().reduce((pre,n)=>pre+n+'='+params[n],'')+sign_key))\nparams['sign']=paramSign\nurl=\"https://api-ks.wtzw.com/api/v1/chapter/content?\"+urlEncode(params)\ndecode(JSON.parse(java.ajax(url+','+java.get(\"headers\"))).data.content)\n\n"
  },
  "ruleExplore": {
    "author": "$.author",
    "bookList": "<js>\ngender=baseUrl.match(/gender=(\\d+)/)?baseUrl.match(/gender=(\\d+)/)[1]:\"\"\ncategory_id=baseUrl.match(/category_id=(\\d+)/)?baseUrl.match(/category_id=(\\d+)/)[1]:\"\"\nneed_filters=baseUrl.match(/need_filters=(\\d+)/)?baseUrl.match(/need_filters=(\\d+)/)[1]:\"\"\npage=baseUrl.match(/page=(\\d+)/)?baseUrl.match(/page=(\\d+)/)[1]:\"\"\nneed_category=baseUrl.match(/need_category=(\\d+)/)?baseUrl.match(/need_category=(\\d+)/)[1]:\"\"\ntag_id=baseUrl.match(/tag_id=(\\d+)/)?baseUrl.match(/tag_id=(\\d+)/)[1]:\"\"\nsign_key='d3dGiJc651gSQ8w1'\nheaders={'app-version':'51110','platform':'android','reg':'0','AUTHORIZATION':'','application-id':'com.****.reader','net-env':'1','channel':'unknown','qm-params':''}\nheaders['sign']=String(java.md5Encode(Object.keys(headers).sort().reduce((pre,n)=>pre+n+'='+headers[n],'')+sign_key))\n\n\nvar urlEncode = function (param, key, encode) {\n  if(param==null) return '';\n  var paramStr = '';\n  var t = typeof (param);\n  if (t == 'string' || t == 'number' || t == 'boolean') {\n    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);\n  } else {\n    for (var i in param) {\n      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);\n      paramStr += urlEncode(param[i], k, encode);\n    }\n  }\n  return paramStr;\n};\n\nvar category = function () {\n  params={'gender':gender,'category_id':category_id,'need_filters':need_filters,'page':page,'need_category':need_category}\n  params['sign']=String(java.md5Encode(Object.keys(params).sort().reduce((pre,n)=>pre+n+'='+params[n],'')+sign_key))\n  url=\"https://api-bc.wtzw.com/api/v4/category/get-list?\"+urlEncode(params)\n  return java.ajax(url+','+java.put(\"headers\",JSON.stringify({\"headers\":headers})))\n};\n\nvar tag = function () {\n  params={'gender':gender,'need_filters':need_filters,'page':page,'tag_id':tag_id}\n  params['sign']=String(java.md5Encode(Object.keys(params).sort().reduce((pre,n)=>pre+n+'='+params[n],'')+sign_key))\n  url=\"https://api-bc.wtzw.com/api/v4/tag/index?\"+urlEncode(params)\n  return java.ajax(url+','+java.put(\"headers\",JSON.stringify({\"headers\":headers})))\n};\n\n\nif(baseUrl.match(/category/)){\n  category()\n}else {\n  tag()\n}\n</js>\n$.data.books",
    "bookUrl": "@js:\nsign_key='d3dGiJc651gSQ8w1'\n\nparams={'id':{{$.id}},'imei_ip':'2937357107','teeny_mode':0}\n\nvar urlEncode = function (param, key, encode) {  \n  if(param==null) return '';  \n  var paramStr = '';  \n  var t = typeof (param);  \n  if (t == 'string' || t == 'number' || t == 'boolean') {  \n    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  \n  } else {  \n    for (var i in param) {  \n      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  \n      paramStr += urlEncode(param[i], k, encode);  \n    }  \n  }  \n  return paramStr;  \n};\nparamSign=String(java.md5Encode(Object.keys(params).sort().reduce((pre,n)=>pre+n+'='+params[n],'')+sign_key))\nparams['sign']=paramSign\n\"https://api-bc.wtzw.com/api/v4/book/detail?\"+urlEncode(params)+\",\"+java.get(\"headers\")",
    "coverUrl": "$.image_link",
    "intro": "$.intro",
    "kind": "$.ptags",
    "name": "$.title",
    "wordCount": "$.words_num"
  },
  "ruleSearch": {
    "author": "original_author",
    "bookList": "data.books",
    "bookUrl": "@js:\nsign_key='d3dGiJc651gSQ8w1'\n\nparams={'id':{{$.id}},'imei_ip':'2937357107','teeny_mode':0}\n\nvar urlEncode = function (param, key, encode) {  \n  if(param==null) return '';  \n  var paramStr = '';  \n  var t = typeof (param);  \n  if (t == 'string' || t == 'number' || t == 'boolean') {  \n    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  \n  } else {  \n    for (var i in param) {  \n      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  \n      paramStr += urlEncode(param[i], k, encode);  \n    }  \n  }  \n  return paramStr;  \n};\nparamSign=String(java.md5Encode(Object.keys(params).sort().reduce((pre,n)=>pre+n+'='+params[n],'')+sign_key))\nparams['sign']=paramSign\n\"/api/v4/book/detail?\"+urlEncode(params)+\",\"+java.get(\"headers\")",
    "coverUrl": "image_link",
    "intro": "intro",
    "kind": "ptags",
    "name": "original_title",
    "wordCount": "words_num"
  },
  "ruleToc": {
    "chapterList": "data.chapter_lists",
    "chapterName": "title##[\\(（【].*?[求更谢乐发订/万字票合补加].*?[】）\\)]",
    "chapterUrl": "id",
    "updateTime": "{{$.words}}字"
  },
  "searchUrl": "@js:\nsign_key='d3dGiJc651gSQ8w1'\n\nheaders={'app-version':'51110','platform':'android','reg':'0','AUTHORIZATION':'','application-id':'com.****.reader','net-env':'1','channel':'unknown','qm-params':''}\n\nparams={'gender':'3','imei_ip':'2937357107','page':page,'wd':key}\n\nvar urlEncode = function (param, key, encode) {  \n  if(param==null) return '';  \n  var paramStr = '';  \n  var t = typeof (param);  \n  if (t == 'string' || t == 'number' || t == 'boolean') {  \n    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  \n  } else {  \n    for (var i in param) {  \n      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  \n      paramStr += urlEncode(param[i], k, encode);  \n    }  \n  }  \n  return paramStr;  \n};\n\nheaderSign=String(java.md5Encode(Object.keys(headers).sort().reduce((pre,n)=>pre+n+'='+headers[n],'')+sign_key))\nparamSign=String(java.md5Encode(Object.keys(params).sort().reduce((pre,n)=>pre+n+'='+params[n],'')+sign_key))\nheaders['sign']=headerSign\nparams['sign']=paramSign\nbody=urlEncode(params)\n\n\"/api/v5/search/words?\" +body+\",\"+java.put(\"headers\",JSON.stringify({\"headers\":headers}))",
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
