// @name 微博书源（优+）
// @version 2025.10.01
// @author converted
// @url https://m.weibo.cn
// @enabled true
// @tags 特殊,书源,小说,converted
// @description 网页能打开看的基本能看，其他bug未知
// @description 搜索格式如下
// @description ①综合：直接搜索
// @description 以下需关闭精确搜索
// @description ②用户：@用户名@
// @description ③超话：%超话名%

const LEGADO_SOURCE = {
  "bookSourceComment": "网页能打开看的基本能看，其他bug未知\n搜索格式如下\n①综合：直接搜索\n\n以下需关闭精确搜索\n②用户：@用户名@\n③超话：%超话名%\n④话题：#话题名#\n\n更改下面数字可查看评论（不登录只有20条，登录后条数太多会请求频繁导致获取正文为空【可以选择清除cookie回到未登录状态】）\n\n是/否开启评论：是20条",
  "bookSourceGroup": "特殊 书源",
  "bookSourceName": "微博书源（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.weibo.cn",
  "bookUrlPattern": "https://m.weibo.cn/detail/\\d+",
  "customButton": false,
  "customOrder": 327,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "                                      超话                                        ::\n\n百合小说::https://m.weibo.cn/api/container/getIndex?containerid=100808f0685be662acf02ce3230fac1a7e9443_-_feed&page={{page}}\nmilklove::https://m.weibo.cn/api/container/getIndex?containerid=1008086a3f910bdc5fcd535fb9aeffdffc75ff_-_feed&page={{page}}\n                                      用户                                        ::\n\n一条废狗狗狗狗::https://m.weibo.cn/api/container/getIndex?containerid=1076036055804589_-_WEIBO_SECOND_PROFILE_WEIBO&luicode=10000011&lfid=1076036055804589_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={{page}}\n\n崖生_深海::https://m.weibo.cn/api/container/getIndex?containerid=1076037727808028_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={{page}}\n\n砂上雪::https://m.weibo.cn/api/container/getIndex?containerid=1076035239650586_-_WEIBO_SECOND_PROFILE_WEIBO&luicode=10000011&lfid=1076035239650586_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={{page}}\nWhisky老鹿::https://m.weibo.cn/api/container/getIndex?containerid=1076036537563116_-_WEIBO_SECOND_PROFILE_WEIBO&luicode=10000011&lfid=1076036537563116_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={{page}}\n郭斯特::https://m.weibo.cn/api/container/getIndex?containerid=1076031907542963_-_WEIBO_SECOND_PROFILE_WEIBO&luicode=10000011&lfid=1076031907542963_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={{page}}\n\n西凌萝卜::https://m.weibo.cn/api/container/getIndex?containerid=1076032141864060_-_WEIBO_SECOND_PROFILE_WEIBO&luicode=10000011&lfid=1076035239650586_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={{page}}\n口袋巧克力::https://m.weibo.cn/api/container/getIndex?containerid=1076031423169553_-_WEIBO_SECOND_PROFILE_WEIBO&luicode=10000011&lfid=1076031423169553_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={{page}}\n\n\n                                      话题                                        ::\n\n#百合小说推荐#::https://m.weibo.cn/api/container/getIndex?containerid=231522type%3D1%26t%3D10%26q%3D%23%E7%99%BE%E5%90%88%E5%B0%8F%E8%AF%B4%E6%8E%A8%E8%8D%90%23&luicode=10000011&lfid=100103type%253D38%2526q%253D%E7%99%BE%E5%90%88%E5%B0%8F%E8%AF%B4%2526t%253D&page={{page}}\n#百合小说#::https://m.weibo.cn/api/container/getIndex?containerid=231522type%3D1%26t%3D10%26q%3D%23%E7%99%BE%E5%90%88%E5%B0%8F%E8%AF%B4%23&isnewpage=1&luicode=10000011&lfid=100103type%253D38%2526q%253D%E7%99%BE%E5%90%88%E5%B0%8F%E8%AF%B4%2526t%253D&page={{page}}",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 8.1.0; JKM-AL00b Build/HUAWEIJKM-AL00b; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044807 Mobile Safari/537.36\"\n}",
  "lastUpdateTime": 1759350767645,
  "loginUrl": "https://m.weibo.cn",
  "respondTime": 195470,
  "ruleBookInfo": {
    "author": "@js:\n/screen_name\": \"/.test(result)?String(result).match(/\"screen_name\": \"([^\"]+)\"/)[1]:\"\";",
    "canReName": "1",
    "intro": "@js:\n\nresult = /\"text\": \".*\",/.test(result)?String(result).match(/ \"text\": \"(.*)\",/)[1]:\"\";\n\nif(/extparam=/.test(baseUrl)){\n\tcontainerid = baseUrl.match(/containerid=(.*)/)[1];\n\tresult += \"\\n---复制下方文字，将#超话#粘贴进发现规则---\\n\"+book.name+`::https://m.weibo.cn/api/container/getIndex?containerid=${containerid}_-_feed&page={\\{page}}`\n\t}\n\nif(/search\\?/.test(baseUrl)){\n\tcontainerid = baseUrl.replace(/http.*?\\?/,'https://m.weibo.cn/api/container/getIndex?');\n\tresult += \"\\n---复制下方文字，将#话题#粘贴进发现规则---\\n\"+book.name+`::${containerid}&page={\\{page}}`\n\t}\n\nif(/u\\//.test(baseUrl)){\n\tcontainerid = baseUrl.match(/u\\/(\\d+)/)[1];\n\tresult += \"\\n---复制下方文字，将#用户#粘贴进发现规则---\\n\"+book.name+`::https://m.weibo.cn/api/container/getIndex?containerid=107603${containerid}_-_WEIBO_SECOND_PROFILE_WEIBO&page_type=03&page={\\{page}}`\n\t}\nresult;",
    "name": "<js>\nresult = /\"text\": \".*\",/.test(result)?String(result).match(/ \"text\": \"(.*)\",/)[1]:\"\";\n</js>\ntext##^(.{0,30})##$1......####",
    "tocUrl": "@js:baseUrl"
  },
  "ruleContent": {
    "content": "<js>\ntry{\ncimg=[];\nif(String(result).match(/ \"text\": \"(.*)\",/)){\nb=String(result).match(/ \"text\": \"(.*)\",/)[1];}\nelse{b=''}\n\nif(String(result).match(/\"size\":\\s*\"[^\"]+\",\\s*\"url\":\\s*\"[^\"]+\"/g)){\na=String(result).match(/\"size\":\\s*\"[^\"]+\",\\s*\"url\":\\s*\"[^\"]+\"/g);\nfor (i=0;i<a.length;i++){\n       cimg.push(a[i].match(/url\":\\s*\"([^\"]+)\"/)[1])\n    }\n    \nhtml='';\nfor(i in cimg){\nhtml += '<img src=\"'+cimg[i]+'\">\\n'\n}}else{html=''}\n\n\nif(/title=%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95/.test(baseUrl)){\n\thtml = \"\";\n\tjson = JSON.parse(result).data.cards;\n\tjson.forEach(x=>{\n\t\t     let mblog = x.card_group[0].mblog;\n\t\t     let time = mblog.created_at;\n\t\t     // 原始时间字符串\nconst timeStr = mblog.created_at\n\n// 创建 Date 对象\nconst date = new Date(timeStr);\nconst year = date.getFullYear();\nconst month = String(date.getMonth() + 1).padStart(2, '0');\nconst day = String(date.getDate()).padStart(2, '0');\nconst hours = String(date.getHours()).padStart(2, '0');\nconst minutes = String(date.getMinutes()).padStart(2, '0');\nconst seconds = String(date.getSeconds()).padStart(2, '0');\n\nconst customFormat = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;\t\t   \t\t       \n\t\t     let picsJ = mblog.pics;\n\t\t     let pics = \"\";\n\t\t     \n\t\t     if(picsJ)picsJ.forEach(y=>{\n\t\t     \t     pics +=\"<img src=\\\"\"+ y.large.url+\"\\\">\\n\"\t     \t\n\t\t     \t})\n\t\t     html += \"-⬇️ 编辑于\"+customFormat+\" ⬇️ -\\n\"+mblog.text+\"\\n\"+pics+\"\\n&lrm;\\n\";\n\t\t})\n\tresult = html\n\t}\n\n\nif(/timeline_card_small_article_default/.test(result)&&!/title=%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95/.test(baseUrl)){\n\t$ = result.match(/\"page_info\":\\s*(\\{[\\s\\S]+?\\}),\\s+\"bid/)[1];\n\t$ = JSON.parse($);\n\thtml = '<img src=\"'+$.page_pic.url+'\">\\n'\n}\n   \nif(!baseUrl.match(/ttarticle/)&&!/title=%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95/.test(baseUrl)){\nresult = org.jsoup.Jsoup.parse(b).html()+'\\n'+html+java.getString(\"@@class.h5-4con@html||class.error_msg@text\")\n}else if(!/title=%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95/.test(baseUrl)){result=java.getString(\"@@class.f-art@html||class.error_msg@text\")\n}\n\nif(/暂无目录....../.test(chapter.title)){\n\t\n\tresult = book.intro\n\t}\n\n\nif(/是\\d+条/.test(source.bookSourceComment) && !baseUrl.match(/ttarticle/) && /detail/.test(baseUrl)){\npage = source.bookSourceComment.match(/是(\\d+)条/)[1];\n\npage = Math.ceil(page/20);\nmid = baseUrl.match(/(\\d+)$/)[1];\nmax_id=\"0\";\ncomments=\"\";\ncount = 0;\n\nfor(j=1;j<=page;j++){\ncommentsurl = `https://m.weibo.cn/comments/hotflow?id=${mid}&mid=${mid}&max_id=${max_id}&max_id_type=0`;\nvar times = Math.round(new Date().getTime() / 1000)\nwhile(Math.round(new Date().getTime() / 1000)-times<1){}\nhh= java.ajax(commentsurl);\nif(/体验微博客户端/.test(hh)){\n\th={};\n\tpage = 2;\n\t}else{\n\th=/<title>登录 - 微博<\\/title>/.test(hh)?{}:JSON.parse(hh);\n\tif(/<title>登录 - 微博<\\/title>/.test(hh)){java.toast(\"更多评论请登录\");break;}\n\t\t}\nif(h.ok==1){\nlist=h.data.data;\nmax_id = h.data.max_id;\nif(j==1){\ntotal = Math.ceil(h.data.total_number/20);\npage= page<=total?page:total;\n}\n    for(i=0;i<list.length;i++){\n    \t\n    \tdetails=\"\";\n    if(list[i].pic!=undefined){\n    pic=list[i].pic.large.url;\n    details = `<br><img src=\"${pic}\"><br>`\n    \t\n}\ncount += 1;\ncomments +=\"\\n--@\"+list[i].user.screen_name+\"@--\\n\"+list[i].text+details;\n      }}\n}  \n result + comments\n\n}\n\n}catch(e){\n\tjava.log(\"错误: \"+e)\n\t}\n\t\n</js>",
    "imageDecode": "var Magua = new JavaImporter();\nMagua.importPackage(\n    Packages.java.io,\n    Packages.android.graphics\n);\n\nwith(Magua) {\n    // 1. 解码原始图片数据\n    var img = BitmapFactory.decodeByteArray(result, 0, result.length);\n    var originalWidth = img.getWidth();\n    var originalHeight = img.getHeight();\n\n    // 2. 判断是否需要旋转（仅当 width > height * 3 时旋转）\n    if (originalWidth > originalHeight * 4.5) {\n        // 3. 创建新图片（旋转后宽高互换）\n        var newWidth = originalHeight;\n        var newHeight = originalWidth;\n        var newImg = Bitmap.createBitmap(newWidth, newHeight, Bitmap.Config.ARGB_8888);\n\n        // 4. 使用 Matrix 旋转图片（顺时针90度）\n        var canvas = new Canvas(newImg);\n        var matrix = new Matrix();\n        matrix.setRotate(90);\n        matrix.postTranslate(newWidth, 0); // 调整位移避免裁剪\n\n        // 5. 绘制旋转后的图片\n        canvas.drawBitmap(img, matrix, null);\n\n        // 6. 转换为字节数组输出\n        var outputStream = new ByteArrayOutputStream();\n        newImg.compress(Bitmap.CompressFormat.PNG, 100, outputStream);\n        result = outputStream.toByteArray();\n    }\n    // 否则直接保留原图（无需操作）\n}\nresult",
    "imageStyle": "FULL",
    "nextContentUrl": "<js>\nif(/title=%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95/.test(baseUrl)){\n\tpage = JSON.parse(src).data.cardlistInfo.page;\n\tif(page!=null){\n\t\tresult = baseUrl.replace(/&page=/g,'')+\"&page=\"+page;\n\t\t}\n\t}\n\n</js>",
    "replaceRegex": "##<img.*?src=\"https://.*?small.*?default.*?\">|https://m.weibo.cn\\\\\"|\\\\\"|<!---->\n<js>\nresult = result.replace(/src=\"([^\"]+)\"/g,'src=\"$1,{\\\"headers\\\":{\\\"referer\\\":\\\"https://m.weibo.cn\\\"}}\"').replace(/(<img.*?>)/g,'$1\\n').replace(/(--@.*?@--)/g,'\\n&lrm;\\n$1');\n</js>\n##<img src=\"https://m.weibo.cn/detail/.*?\">"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "<js>\nif(java.getString(\"$.msg\")!=\"\"){\njava.toast(java.getString(\"$.msg\"));\n}\nresult;\n</js>\n$.data.cards[*]&&$.data.cards[*].card_group[*]",
    "bookUrl": "$.mblog.id\n@js:\nif(/^\\d+$/.test(result)){\nresult=\"https://m.weibo.cn/detail/\"+result\n}else{\n\tresult = \"{{$.scheme}}\";\n\t}",
    "checkKeyWord": "https://m.weibo.cn/detail/4856119220244813",
    "coverUrl": "{{$.mblog.page_info.page_pic.url||$.mblog.thumbnail_pic||$.mblog.user.profile_image_url||$.pic||$.user.profile_image_url}},{\"headers\":{\"referer\":\"https://m.weibo.cn\"}}",
    "intro": "$..text&&$.desc1&&$..description##\\n+|(?:<br />)+#~",
    "kind": "$.desc2&&$..verified_reason",
    "lastChapter": "$.mblog.created_at",
    "name": "$.mblog.text||$.title_sub||$.user.screen_name@js:result.replace(/<.*?>/g,\"\").match(/(.{0,30}).*/)[1]",
    "wordCount": "##timeline_card_small_article_default##有专栏###"
  },
  "ruleToc": {
    "chapterList": "<js>\n\nd=/\"text\": \"(.*)\",/.test(result)?String(result).match(/ \"text\": \"(.*)\",/)[1]:\"暂无目录\";\nb=d.replace(/<.*?>/g,\"\").replace(/#.*?#/g,\"\");\nc=baseUrl;\nl=[];\n\nedit_count = Number(/\"edit_count\": \\d+/.test(result)?result.match(/\"edit_count\": (\\d+),/)[1]:0);\n\n\nif(/网页链接/.test(d) || /timeline_card_small_article_default/.test(d)){\n\tif(/timeline_card_small_article_default/.test(d)){\n\t\tl.push({text:b.substring(0,10)+\"......\",href:c});\n\tl.push({\n\t\thref:result.match(/\"page_url\": \"([^\"]+)\",/)[1]+\",{'webView':true}\",\n\t\ttext:result.match(/\"content1\": \"([^\"]+)\",/)[1],\n\t\tinfo:result.match(/ \"content2\": \"([^\"]*)\",/)[1]\n\t\t})\n}\n\nif(/网页链接/.test(d)){\n\tlist = d.match(/<br \\/>[^<]+<a  href=\\\\\"[^\"]+\\\\\" data-hid/g);\n\tl.push({\n\t\ttext:b.substring(0,10)+\"......\",\n\t\thref:c\n\t\t})\n\tfor(i in list){\n\tl.push({\n\t\ttext : list[i].match(/>([^<]+)<a/)[1],\n\t\thref:list[i].match(/href=\\\\\"([^\"]+)\\\\\"/)[1]\n\t\t})\n\t  }\n\t}\n\t}else{\n\t\tl.push({text:b.substring(0,10)+\"......\",href:c})\n\t\t}\n\nif(edit_count>0){\n\tl.push({\n\t\ttext:\"编辑记录\",\n\thref:\"https://m.weibo.cn/api/container/getIndex?title=%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95&containerid=231440_-_\"+baseUrl.match(/(\\d+)/)[1]\n\t\t})\n\t\n\t}\t\t\n\t\t\n\t\tl\n</js>",
    "chapterName": "text",
    "chapterUrl": "href",
    "updateTime": "info"
  },
  "searchUrl": "@js:\nresult =\"https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D1%26q%3D{{key}}%26t%3D&page_type=searchall&page={{page}}\";\n\nif(/^#.*?#$/.test(key)){\n\t//话题搜索\n\tkey = key.match(/^#(.*?)#$/)[1];\tresult=`https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D38%26q%3D${key}%26t%3D&page_type=searchall&page={{page}}`\n\t}\n\t\nif(/^%.*?%$/.test(key)){\n\t//超话搜索\n\tkey = key.match(/^%(.*?)%$/)[1];\tresult=`https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D98%26q%3D${key}%26t%3D&page_type=searchall&page={{page}}`\n\t}\n\t\nif(/^@.*?@$/.test(key)){\n\t//用户搜索\n\tkey = key.match(/^@(.*?)@$/)[1];\tresult=`https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D3%26q%3D${key}%26t%3D&page_type=searchall&page={{page}}`\n\t}",
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
