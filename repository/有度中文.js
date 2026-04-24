// @name 有度中文
// @version 2025.12.17
// @author converted
// @url https://www.yodu.org
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "有度中文",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.yodu.org",
  "bookUrlPattern": "https://www.yodu.org/book/\\d+/?for-search",
  "customButton": false,
  "customOrder": 402,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"经典文学\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\":\"传记回忆\",\"url\":\"/zhuanjihuiyi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"英文读本\",\"url\":\"/yingwenduben/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"杂文随笔\",\"url\":\"/zawensuibi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"经典言情\",\"url\":\"/jingdianyanqing/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"经典历史\",\"url\":\"/jingdianlishi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"侦探推理\",\"url\":\"/zhentantuili/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"惊悚悬疑\",\"url\":\"/jingsongxuanyi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"网络玄幻\",\"url\":\"/wangluoxuanhuan/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"寓言童话\",\"url\":\"/yuyantonghua/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"青春都市\",\"url\":\"/qingchundushi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"社会心理\",\"url\":\"/shehuixinli/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"外国小说\",\"url\":\"/waiguoxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"经典科幻\",\"url\":\"/jingdiankehuan/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"当代小说\",\"url\":\"/dangdaixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"经典武侠\",\"url\":\"/jingdianwuxia/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"纪实报告\",\"url\":\"/jishibaogao/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"世界历史\",\"url\":\"/shijielishi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"中国历史\",\"url\":\"/zhongguolishi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"科普学习\",\"url\":\"/kepuxuexi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"诗歌戏曲\",\"url\":\"/shigexiqu/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"宗教哲学\",\"url\":\"/zongjiaozhexue/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"文学理论\",\"url\":\"/wenxuelilun/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"日语读物\",\"url\":\"/riyuduwu/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"作品集\",\"url\":\"/zuopinji/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"国学古籍\",\"url\":\"/guoxueguji/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"战争军事\",\"url\":\"/zhanzhengjunshi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"政治经济\",\"url\":\"/zhengzhijingji/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"古典文学\",\"url\":\"/gudianwenxue/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"现代小说\",\"url\":\"/xiandaixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"官场小说\",\"url\":\"/guanchangxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"轻小说\",\"url\":\"/qingxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"繁体图书\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\":\"世紀百強\",\"url\":\"/shijibaiqiang/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"隨身智囊\",\"url\":\"/suishenzhinang/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"歷史煙雲\",\"url\":\"/lishiyanyun/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"武俠小說\",\"url\":\"/wuxia/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"懸疑小說\",\"url\":\"/xuanyi/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"言情小說\",\"url\":\"/yanqing/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"奇幻小說\",\"url\":\"/qihuanxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"网络小说\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\":\"网游小说\",\"url\":\"/wangyouxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"玄幻小说\",\"url\":\"/xuanhuanxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"穿越小说\",\"url\":\"/chuanyuexiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"科幻小说\",\"url\":\"/kehuanxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"仙侠小说\",\"url\":\"/xianxiaxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"都市小说\",\"url\":\"/dushixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"武侠小说\",\"url\":\"/wuxiaxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"历史小说\",\"url\":\"/lishixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"竞技小说\",\"url\":\"/jingjixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"言情小说\",\"url\":\"/yanqingxiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"悬疑小说\",\"url\":\"/xuanyixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"军事小说\",\"url\":\"/junshixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"灵异小说\",\"url\":\"/lingyixiaoshuo/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"轻の小说\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},{\"title\":\"电击\",\"url\":\"/dianjiwenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"富士\",\"url\":\"/fushijianwenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"角川\",\"url\":\"/jiaochuanwenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"ＭＦ\",\"url\":\"/MFwenkuJ/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"家庭\",\"url\":\"/Famitongwenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"ＧＡ\",\"url\":\"/GAwenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"ＨＪ\",\"url\":\"/HJwenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"一迅\",\"url\":\"/yixunshe/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"集英\",\"url\":\"/jiyingshe/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"小学\",\"url\":\"/xiaoxueguan/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"讲谈\",\"url\":\"/jiangtanshe/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"少女\",\"url\":\"/shaonvwenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"其他\",\"url\":\"/qitawenku/{{page}}.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}}]",
  "header": "{\n    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36',\n'cookie': 'jieqiUserInfo=jieqiUserId%3D29872%2CjieqiUserUname%3D507525872%2CjieqiUserName%3D507525872%2CjieqiUserGroup%3D3%2CjieqiUserGroupName%3D%E6%99%AE%E9%80%9A%E4%BC%9A%E5%91%98%2CjieqiUserVip%3D0%2CjieqiUserHonorId%3D2%2CjieqiUserHonor%3D%E5%91%86%E8%90%8C%2CjieqiUserToken%3D3ab244a90ebf04de30ef0fd0b2c4870c%2CjieqiCodeLogin%3D0%2CjieqiCodePost%3D0%2CjieqiUserPassword%3Dbb4ea1981a8e2dd1b197b448f1cbe5bf%2CjieqiUserLogin%3D1628781305'\n    }",
  "lastUpdateTime": 1765996127955,
  "loginUrl": "https://www.yodu.org/userdetail.php",
  "respondTime": 2366,
  "ruleBookInfo": {
    "author": "._tags a.0@text",
    "coverUrl": ".cover img@src",
    "intro": ".hm-scroll p@html",
    "kind": "._tags span.1:2@text&&small@text##\\s.*",
    "lastChapter": ".lst-chapter@text",
    "name": ".pr h1@text",
    "wordCount": "._tags span.3@text"
  },
  "ruleContent": {
    "content": "<js>\nlet c=java.getString(\"id.TextContent@html\");\nif(baseUrl.match(/yodu.org/)){\nresult=c\n}else{\nresult=baseUrl.match(/text=[^\\.]*\\.(.*)/)[1]\n}\n</js>",
    "nextContentUrl": "@js:url=result.match(/url_next=\"(.+html)\"/)[1];url.includes(\"_\")?url:\"\"",
    "replaceRegex": "<js>\ni = [\"%uE800\",\"%uE801\",\"%uE802\",\"%uE803\",\"%uE804\",\"%uE805\",\"%uE806\",\"%uE807\",\"%uE808\",\"%uE809\",\"%uE80A\",\"%uE80B\",\"%uE80C\",\"%uE80D\",\"%uE80E\",\"%uE80F\",\"%uE810\",\"%uE811\",\"%uE812\",\"%uE813\",\"%uE814\",\"%uE815\",\"%uE816\",\"%uE817\",\"%uE818\",\"%uE819\",\"%uE81A\",\"%uE81B\",\"%uE81C\",\"%uE81D\",\"%uE81E\",\"%uE81F\",\"%uE820\",\"%uE821\",\"%uE822\",\"%uE823\",\"%uE824\",\"%uE825\",\"%uE826\",\"%uE827\",\"%uE828\",\"%uE829\",\"%uE82A\",\"%uE82B\",\"%uE82C\",\"%uE82D\",\"%uE82E\",\"%uE82F\",\"%uE830\",\"%uE831\",\"%uE832\",\"%uE833\",\"%uE834\",\"%uE835\",\"%uE836\",\"%uE837\",\"%uE838\",\"%uE839\",\"%uE83A\",\"%uE83B\",\"%uE83C\",\"%uE83D\",\"%uE83E\",\"%uE83F\",\"%uE840\",\"%uE841\",\"%uE842\",\"%uE843\",\"%uE844\",\"%uE845\",\"%uE846\",\"%uE847\",\"%uE848\",\"%uE849\",\"%uE84A\",\"%uE84B\",\"%uE84C\",\"%uE84D\",\"%uE84E\",\"%uE84F\",\"%uE850\",\"%uE851\",\"%uE852\",\"%uE853\",\"%uE854\",\"%uE855\",\"%uE856\",\"%uE857\",\"%uE858\",\"%uE859\",\"%uE85A\",\"%uE85B\",\"%uE85C\",\"%uE85D\",\"%uE85E\",\"%uE85F\",\"%uE860\",\"%uE861\",\"%uE862\",\"%uE863\"];\n\nz = \"的一是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美乳阴液茎欲呻肉交性胸私穴淫臀舔射脱裸骚唇\"\nhtml = escape(result);\nfunction ti(html,i,z){\n\treg = new RegExp(i,'g');\n\treturn html.replace(reg,z);\n\t}\nfor(x in i){\n\thtml = ti(html,i[x],z[x])\n\t}\nunescape(html)\n</js>\n##\\s*（本章未完）\\s*"
  },
  "ruleExplore": {
    "author": "._tags span.0@text",
    "bookList": ".j_bookList li",
    "bookUrl": "a.0@href",
    "coverUrl": "img@_src",
    "intro": "a.1@text",
    "kind": "._tags span.1:2@text",
    "name": "h2@text"
  },
  "ruleSearch": {
    "author": ".c_small span.1@text",
    "bookList": "#hism",
    "bookUrl": "a.0@href",
    "checkKeyWord": "青春",
    "coverUrl": "img@_src",
    "intro": "p.0@text",
    "kind": ".c_small span.0@text",
    "lastChapter": "a.-1@text",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "<js>result.replace(/(\\/book\\/.+?)(\\.html\" class=.+?\\n.+? href=\")(javascript:)(?=\" class=)/g,\"$1$2$1☆.html\").replace(/(javascript:)(\" class=.+?\\n.+? href=\")(\\/book\\/.+?)(?=\\.html\" class=)/g,\"$3☆☆.html$2$3\")</js>\n//ol[@id=\"chapterList\"]/*<js>\ner=0;\n//按卷分隔\nsub=String(result).slice(1,-1).split(/, (?=<li class=\"volumes ell\")/);\nsm=java.get(\"sm\");\ncount=0;\nif(sub.length>=1)for(var i=0;i<sub.length;i++){\n//捕获卷名\njm=sub[i].match(/\\s*([^<>\\n]+)\\s*<\\/li/);\nif(jm&&!(jm[1].match(/正文/)&&sub.length==1)){\n\t\n\t\n\t\n//补上卷名\n//sub[i]=sub[i]\n//.replace(/html([^>]*)><span([^>]*)>/g,'html$1><span$2>'+ ('').padStart(3, \"\")+jm[1]+' ').replace(/javascript\\:([^>]*)><span([^>]*)>/g,'javascript:/'+jm[1]+'$1><span$2>'+('').padStart(3, \"\\u2000\")+jm[1]+' ');\n\n\n\n//按卷分块，插入卷名\nsub[i]='<li><a href=\"https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en&text='+(++count)+'.'+sm+'/'+jm[1]+'\"><span>★'+jm[1]+'★</span></a></li>'+sub[i];\n}}\n//合并结果\nsub.join(\"\")\n</js>a",
    "chapterName": "span@text",
    "chapterUrl": "href\n<js>\nif(result.indexOf(\"☆\")!=-1){cid=parseInt(result.match(/\\d+(?=☆)/)[0]);\nnex=cid+1;pre=cid-1;\nresult=result.replace(/(\\d+)☆☆/,pre).replace(/(\\d+)☆/,nex)}\nresult\n</js>",
    "isVolume": "a@text\n<js>\nresult=result.match(/★/)?true:false\n</js>"
  },
  "searchUrl": "/sa/all-{{key}}-{{page}}.html",
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
