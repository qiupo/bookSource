// @name 看看阅读
// @version 2025.12.20
// @author converted
// @url http://kkcc.top/
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description // Error: 搜索失效

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 搜索失效",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "看看阅读",
  "bookSourceType": 0,
  "bookSourceUrl": "http://kkcc.top/",
  "customButton": false,
  "customOrder": 384,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\n\nvar sort=[],\npush=(title,surl,size)=>sort.push({\n    title: title,\n    url: surl,\n    style: {\n      layout_flexGrow: 1,\n      layout_flexBasisPercent: size,\n     }\n  });\n  \npush(\"༺ˇ»`ʚ排行榜ɞ´«ˇ༻\",null,1,1); \n\n[\n[\"月票榜\",\"526080\"],\n[\"畅销榜\",\"543064\"],\n[\"潜力榜\",\"543065\"],\n[\"完结榜\",\"551072\"],\n[\"新书榜\",\"535331\"],\n[\"比心榜\",\"543074\"],\n[\"飙升榜\",\"543264\"],\n[\"推荐榜\",\"548111\"],\n[\"封神榜\",\"514637\"],\n[\"会员日榜\",\"516604\"],\n[\"会员周榜\",\"516605\"],\n[\"会员月榜\",\"516606\"],\n[\"免费爆款\",\"543077\"],\n[\"免费完结\",\"543395\"],\n[\"免费飙升\",\"543085\"]\n].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=${id}&pagestamp={{page}}&rankFlag=1&plan=1&pageSize=200`,  0.25));\n  \n  \npush(\"༺ˇ»`ʚ分类ɞ´«ˇ༻\",null,1,1);  \n[\n[\"玄幻\",\"20001\"],\n[\"奇幻\",\"20005\"],\n[\"武侠\",\"20010\"],\n[\"仙侠\",\"20014\"],\n[\"都市\",\"20019\"],\n[\"现实\",\"20065\"],\n[\"历史\",\"20028\"],\n[\"军事\",\"20032\"],\n[\"游戏\",\"20050\"],\n[\"体育\",\"20054\"],\n[\"科幻\",\"20042\"],\n[\"悬疑\",\"20037\"],\n[\"轻小说\",\"20059\"],\n[\"诸天无限\",\"20109\"],\n[\"短篇\",\"20076\"]\n].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?&bookLibraryAbFlag=2&booksort=1&actionTag=,-1,-1,-1,-1,13&actionId=${id}&action=categoryV2&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n \n  \n  \n  \n  \npush(\"༺ˇ»`ʚ情节主题ɞ´«ˇ༻\",null,1,1);\n[\n    [\"穿越\", \"9000722\"],\n    [\"东方玄幻\", \"9000724\"],\n    [\"重生\", \"9000837\"],\n    [\"现代都市\", \"9000728\"],\n    [\"修仙\", \"9000817\"],\n    [\"权谋\", \"9000774\"],\n    [\"异能\", \"9000823\"],\n    [\"异界\", \"9000822\"],\n    [\"娱乐圈\", \"9000828\"],\n    [\"逆袭\", \"9000775\"],\n    [\"修真\", \"9000818\"],\n    [\"种田\", \"9000838\"],\n    [\"爱情\", \"9000748\"],\n    [\"游戏异界\", \"9000827\"],\n    [\"高武\", \"9000739\"],\n    [\"魔法\", \"9000772\"],\n    [\"神话\", \"9000793\"],\n    [\"养成\", \"9000777\"],\n    [\"诡秘\", \"9000744\"],\n    [\"科举\", \"9000760\"],\n    [\"末世\", \"9000773\"],\n    [\"修罗场\", \"9000727\"],\n    [\"克苏鲁\", \"9001075\"],\n    [\"鉴宝\", \"9000752\"],\n    [\"黑科技\", \"9000746\"],\n    [\"抗战\", \"9001010\"],\n    [\"LOL\", \"9001069\"],\n    [\"电竞\", \"9000723\"],\n    [\"寒门子弟\", \"9001015\"],\n    [\"游戏文\", \"9001070\"],\n    [\"美食\", \"9000769\"],\n    [\"朝堂江湖\", \"9001002\"],\n    [\"萌宠\", \"9000770\"],\n    [\"巫师流\", \"9001027\"],\n    [\"盛世\", \"9001030\"],\n    [\"军工\", \"9001011\"],\n    [\"蒸汽朋克\", \"9001076\"],\n    [\"塔防\", \"9001072\"],\n    [\"篮球\", \"9000870\"],\n    [\"第四天灾\", \"9001083\"],\n    [\"签到\", \"9000875\"],\n    [\"荒野求生\", \"9001054\"],\n    [\"高龄\", \"9001044\"],\n    [\"乡村\", \"9001041\"],\n    [\"聊天群\", \"9000767\"],\n    [\"战争\", \"9000830\"],\n    [\"小兵\", \"9001012\"],\n    [\"直播\", \"9000834\"],\n    [\"气运流\", \"9001032\"],\n    [\"硬科幻\", \"9000992\"],\n    [\"航空\", \"9001220\"],\n    [\"赛博朋克\", \"9000993\"],\n    [\"足球\", \"9000871\"],\n    [\"探险\", \"9000800\"],\n    [\"民俗\", \"9000990\"],\n    [\"人间百态\", \"9001046\"],\n    [\"军旅\", \"9000756\"],\n    [\"武侠幻想\", \"9001001\"],\n    [\"DND\", \"9001071\"],\n    [\"店主\", \"9000989\"],\n    [\"玄学\", \"9000819\"],\n    [\"夺舍\", \"9000984\"],\n    [\"穿书\", \"9000985\"],\n    [\"卡牌\", \"9000757\"],\n    [\"侠客\", \"9001004\"],\n    [\"科技修真\", \"9001078\"],\n    [\"机甲\", \"9000742\"],\n    [\"中年\", \"9001042\"],\n    [\"丧尸\", \"9001029\"],\n    [\"山海经\", \"9001040\"],\n    [\"生存挑战\", \"9000988\"],\n    [\"考古\", \"9001055\"],\n    [\"史诗奇幻\", \"9000797\"],\n    [\"宗门\", \"9001003\"],\n    [\"主神创世\", \"9001050\"],\n    [\"乱世\", \"9001031\"],\n    [\"手足情深\", \"9001045\"],\n    [\"奇妙幻想\", \"9000779\"],\n    [\"扶贫\", \"9001043\"],\n    [\"传统武侠\", \"9001000\"],\n    [\"吃鸡\", \"9001073\"],\n    [\"家庭伦理\", \"9001033\"],\n    [\"社会悬疑\", \"9001048\"],\n    [\"短故事\", \"9000905\"],\n    [\"女性题材\", \"9001047\"]\n].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&base_tagid=${id}&bookLibraryAbFlag=2&actionTag=-1,-1,-1,-1,-1,13&actionId=-1&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n  \n  \n  \npush(\"༺ˇ»`ʚ行文流派ɞ´«ˇ༻\",null,1,1);\n[\n    [\"天才流\", \"9000802\"],\n    [\"系统流\", \"9000814\"],\n    [\"无敌流\", \"9000809\"],\n    [\"经营流\", \"9000755\"],\n    [\"诸天流\", \"9000839\"],\n    [\"升级流\", \"9000795\"],\n    [\"无限流\", \"9000812\"],\n    [\"争霸\", \"9000833\"],\n    [\"凡人流\", \"9000735\"],\n    [\"洪荒流\", \"9000747\"],\n    [\"进化流\", \"9000754\"],\n    [\"专业文\", \"9000999\"],\n    [\"富民\", \"9001006\"],\n    [\"时空流\", \"9000796\"],\n    [\"开局流\", \"9000759\"],\n    [\"幕后流\", \"9000996\"],\n    [\"职业文\", \"9000835\"],\n    [\"学院流\", \"9000821\"],\n    [\"召唤流\", \"9000832\"],\n    [\"神医\", \"9000824\"],\n    [\"技术流\", \"9000750\"],\n    [\"随身流\", \"9000799\"],\n    [\"商战\", \"9001085\"],\n    [\"废柴流\", \"9000737\"],\n    [\"极道流\", \"9000749\"],\n    [\"家族\", \"9001084\"],\n    [\"开挂\", \"9000758\"],\n    [\"悬疑流\", \"9000820\"],\n    [\"互联网\", \"9000997\"],\n    [\"刑侦\", \"9001079\"],\n    [\"侦探推理\", \"9001080\"],\n    [\"御兽流\", \"9001082\"],\n    [\"赘婿流\", \"9000840\"],\n    [\"轮回者\", \"9001049\"],\n    [\"异兽流\", \"9000825\"],\n    [\"骑士流\", \"9000780\"],\n    [\"掌门流\", \"9000831\"],\n    [\"学术\", \"9001063\"],\n    [\"原始流\", \"9000829\"],\n    [\"基建流\", \"9001007\"],\n    [\"抽奖\", \"9001013\"],\n    [\"祖宗流\", \"9001005\"],\n    [\"氪金\", \"9001014\"],\n    [\"策略流\", \"9000998\"],\n    [\"儒道流\", \"9000790\"],\n    [\"国术\", \"9000745\"],\n    [\"管理局\", \"9001008\"]\n].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&base_tagid=${id}&bookLibraryAbFlag=2&actionTag=-1,-1,-1,-1,-1,13&actionId=-1&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n\n\npush(\"༺ˇ»`ʚ时空背景ɞ´«ˇ༻\",null,1,1);\n[\n    [\"架空\", \"9000751\"],\n    [\"年代文\", \"9000776\"],\n    [\"明朝\", \"9001023\"],\n    [\"星际\", \"9000816\"],\n    [\"未来\", \"9000805\"],\n    [\"贞观\", \"9001021\"],\n    [\"秦汉三国\", \"9000782\"],\n    [\"美洲\", \"9001019\"],\n    [\"秦汉\", \"9001034\"],\n    [\"两晋隋唐\", \"9000765\"],\n    [\"宋朝\", \"9001022\"],\n    [\"元宇宙\", \"9001077\"],\n    [\"清朝\", \"9001036\"],\n    [\"欧洲\", \"9001018\"],\n    [\"非洲\", \"9001020\"],\n    [\"外国历史\", \"9001016\"],\n    [\"五代十国\", \"9000808\"],\n    [\"上古先秦\", \"9000792\"],\n    [\"清史民国\", \"9000784\"],\n    [\"民间传说\", \"9001017\"]\n]\n.map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&base_tagid=${id}&bookLibraryAbFlag=2&actionTag=-1,-1,-1,-1,-1,13&actionId=-1&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n\n\n\npush(\"༺ˇ»`ʚ角色身份ɞ´«ˇ༻\",null,1,1);  \n[\n    [\"至尊流\", \"9000863\"],\n    [\"明星\", \"9000852\"],\n    [\"君王\", \"9000851\"],\n    [\"谍战\", \"9001058\"],\n    [\"太监\", \"9001074\"],\n    [\"女神\", \"9000855\"],\n    [\"农民\", \"9000842\"],\n    [\"法师\", \"9000844\"],\n    [\"道门\", \"9001039\"],\n    [\"谍战特工\", \"9001056\"],\n    [\"玩家\", \"9000858\"],\n    [\"NPC\", \"9001064\"],\n    [\"学霸\", \"9000873\"],\n    [\"特种兵\", \"9001061\"],\n    [\"门阀\", \"9001026\"],\n    [\"盗贼\", \"9001068\"],\n    [\"战士\", \"9000877\"],\n    [\"写手\", \"9000859\"],\n    [\"御宅族\", \"9000861\"],\n    [\"和尚\", \"9000879\"],\n    [\"保安\", \"9000994\"],\n    [\"杀手\", \"9001059\"],\n    [\"锦衣卫\", \"9000849\"],\n    [\"大师兄\", \"9000878\"],\n    [\"仙君\", \"9000864\"],\n    [\"神奇生物\", \"9001028\"],\n    [\"牧师\", \"9001065\"],\n    [\"女尊\", \"9000854\"],\n    [\"世家\", \"9001025\"],\n    [\"弓箭手\", \"9001066\"],\n    [\"保镖\", \"9000995\"],\n    [\"兵王\", \"9001057\"]\n].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&base_tagid=${id}&bookLibraryAbFlag=2&actionTag=-1,-1,-1,-1,-1,13&actionId=-1&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n\n\n\npush(\"༺ˇ»`ʚ角色性格ɞ´«ˇ༻\",null,1,1);\n[\n    [\"杀伐果断\", \"9000847\"],\n    [\"成熟\", \"9000843\"],\n    [\"思路清奇\", \"9000845\"],\n    [\"腹黑\", \"9000874\"],\n    [\"扮猪吃虎\", \"9000719\"],\n    [\"自律\", \"9000866\"],\n    [\"思想迪化\", \"9001053\"],\n    [\"嘴炮\", \"9000867\"],\n    [\"钢铁直男\", \"9000846\"]\n    ].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&base_tagid=${id}&bookLibraryAbFlag=2&actionTag=-1,-1,-1,-1,-1,13&actionId=-1&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n\n\n\npush(\"༺ˇ»`ʚ内容风格ɞ´«ˇ༻\",null,1,1);\n[\n    [\"轻松\", \"9000785\"],\n    [\"热血\", \"9000788\"],\n    [\"快节奏\", \"9000762\"],\n    [\"搞笑\", \"9000740\"],\n    [\"群像\", \"9000787\"],\n    [\"正能量\", \"9000862\"],\n    [\"无金手指\", \"9000810\"],\n    [\"单女主\", \"9000718\"],\n    [\"校园\", \"9001035\"],\n    [\"无CP\", \"9000807\"],\n    [\"反套路\", \"9000736\"],\n    [\"红包流\", \"9001051\"],\n    [\"治愈\", \"9000836\"],\n    [\"扮演流\", \"9001052\"],\n    [\"励志\", \"9000764\"],\n    [\"青春\", \"9000783\"],\n    [\"多女主\", \"9000729\"]\n].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&base_tagid=${id}&bookLibraryAbFlag=2&actionTag=-1,-1,-1,-1,-1,13&actionId=-1&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n\n\n\n\n  \npush(\"༺ˇ»`ʚ衍生同人ɞ´«ˇ༻\",null,1,1);\n[\n    [\"同人衍生\", \"9000781\"],\n    [\"斗罗\", \"9000732\"],\n    [\"斗破\", \"9000731\"],\n    [\"综漫\", \"9000841\"],\n    [\"红楼\", \"9000726\"],\n    [\"二次元\", \"9000730\"],\n    [\"三国\", \"9000791\"],\n    [\"封神\", \"9000738\"],\n    [\"水浒\", \"9000987\"],\n    [\"西游\", \"9000815\"],\n    [\"武侠衍生\", \"9000811\"],\n    [\"聊斋\", \"9000986\"],\n    [\"王者荣耀\", \"9000804\"]\n].map([title,id]=>push(title, `https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&base_tagid=${id}&bookLibraryAbFlag=2&actionTag=-1,-1,-1,-1,-1,13&actionId=-1&pagestamp={{page}}&categoryFlag=6&signal=nextpage&searchFrom=${id}`,  0.25));\n\n\n\n\nJSON.stringify(sort);",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 13; 2211133C Build/TKQ1.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1766265572846,
  "loginUrl": "http://kkcc.top/",
  "respondTime": 183248,
  "ruleBookInfo": {
    "author": "$.introinfo.book.author",
    "coverUrl": "$.introinfo.book.coverUrl",
    "intro": "&nbsp;\n🕰  更新：{{$.chapinfo.lastChapterUpdateTime##\\s.*}}\n🌟  书架：{{$.introinfo..number##\\n.*}}\n🏷️  标签：{{$.bookTags..tagshortname##\\n##·}}\n📜  简介：\n{{$.introinfo.book.intro}}\n🍚  书评：\n👤：{{$..commentlist..content##\\n##<p>👤：}}##\\[emot.*\\]",
    "kind": "{{$.introinfo..scoretext}}\n{{java.getString('$.introinfo.book.finished')==1?'完结':'连载'}}\n{{$.cate2Info.cate2Name}}\n{{$.cate3Info.cate3Name}}\n{{$.chapinfo.lastChapterUpdateTime##\\s.*}}\n@js:result\n.replace(/^(\\d\\.\\d)/,'$1分')",
    "lastChapter": "{{$.introinfo.book.lastChapterName##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求含理更谢乐发推票盟补加字].*?[】）\\)]}}•{{$.chapinfo.lastChapterUpdateTime##\\s.*}}\n@js:result\n.replace(\"••\",\"\")\n.replace(/^(\\d+).第/,'第')\n.replace(/^(\\d+)[、．]第.+章/,'第$1章')\n.replace(/^(\\d+)、\\d+、/,'第$1章 ')\n.replace(/^(\\d+)、\\d+/,'第$1章')\n.replace(/^(\\d+)、/,'第$1章 ')\n.replace(/^(第.+章)\\s?第.+章/,'$1')\n.replace(/第\\s(.+)\\s章/,'第$1章')\n.replace(/.*(chapter|Chapter)\\s?(\\d+)\\s?/,'$1 $2 ')\n.replace(/\\(.+\\)/,'')\n.replace(/\\[|。/,'')\n.replace(/第([零一二两三四五六七八九十百千]+)章/g,java.toNumChapter(result))\n##(章)([^\\s]+)(\\s·)##$1 $2$3",
    "name": "$.introinfo.book.title",
    "tocUrl": "https://ubook.reader.qq.com/api/book/chapter-list?bid={{$.introinfo.book.id}}",
    "wordCount": "$.introinfo.book.totalwords"
  },
  "ruleContent": {
    "content": "$.data.content"
  },
  "ruleExplore": {
    "author": "$..author",
    "bookList": "$..bookList..second[*]||$..bookList[*]",
    "bookUrl": "https://detailadr.reader.qq.com/v7_8_7/nativepage/book/detail?bid={{$..bid}}",
    "coverUrl": "$..bid\n@js:\nvar s = result\nfunction gt(s){\n\tlet a = s.slice(-3)\n\tif(a<10){\n\t\t\tn = s.slice(-1)\n\t\t}\n\telse if(a<100){\n\t\t\tn = s.slice(-2)\n\t\t}\n\telse{\n\t\t\tn = a\n\t\t}\n\treturn n\n}\n\"http://wfqqreader-1252317822.image.myqcloud.com/cover/\"+gt(s)+\"/\"+s+\"/b_\"+s+\".jpg\"",
    "intro": "$..intro",
    "kind": "{{$..catScore}}\n{{java.getString('$.finished')==1?'完结':'连载'}}\n{{$..catel2name}}\n{{String(java.timeFormat(java.getString('$.updateTime')*1000)).replace(/\\//g,'-').replace(/\\s.*/,'').replace(/1970\\-01\\-01/,'')}}\n{{$..rank_value}}\n{{$..catel3name}}",
    "lastChapter": "$..lastChapterName##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求含理更谢乐发推票盟补加字].*?[】）\\)]\n@js:result\n.replace(\"••\",\"\")\n.replace(/^(\\d+).第/,'第')\n.replace(/^(\\d+)[、．]第.+章/,'第$1章')\n.replace(/^(\\d+)、\\d+、/,'第$1章 ')\n.replace(/^(\\d+)、\\d+/,'第$1章')\n.replace(/^(第.+章)\\s?\\d+/,'$1')\n.replace(/^(\\d+)、/,'第$1章 ')\n.replace(/^(第.+章)\\s?第.+章/,'$1')\n.replace(/第\\s(.+)\\s章/,'第$1章')\n.replace(/.*(chapter|Chapter)\\s?(\\d+)\\s?/,'$1 $2 ')\n.replace(/\\(.+\\)/,'')\n.replace(/\\[|。/,'')\n.replace(/第([零一二两三四五六七八九十百千]+)章/g,java.toNumChapter(result))\n##(章)([^\\s]+)(\\s·)##$1 $2$3",
    "name": "$..title",
    "wordCount": "$..totalWords"
  },
  "ruleSearch": {
    "author": "$.author",
    "bookList": "$.data.books",
    "bookUrl": "https://detailadr.reader.qq.com/v7_8_7/nativepage/book/detail?bid={{$.id}}",
    "checkKeyWord": "我的模拟长生路",
    "coverUrl": "$.cover",
    "intro": "$.intro",
    "kind": "{{java.getString('$.finished')=='true'?'完结':'连载'}}\n{{$..shortName##小说}}",
    "name": "$.title",
    "wordCount": "$.totalWords"
  },
  "ruleToc": {
    "chapterList": "$.data.chapters",
    "chapterName": "title",
    "chapterUrl": "<js>\nvar bid = baseUrl.match(/\\d+/);\njava.put('bid', bid);\n'https://wxmini.reader.qq.com/api/chapter/content?bid='+bid+'&cid={{$.seq}}'\n</js>",
    "isVip": "{{java.getString('$.free')=='true'?'false':'true'}}",
    "updateTime": "$.publishTime##^##更新时间："
  },
  "searchUrl": "api/search?keywords={{key}}&pageIndex={{page}}&pageSize=20",
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
