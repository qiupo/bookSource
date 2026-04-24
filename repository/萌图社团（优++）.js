// @name 萌图社团（优++）
// @version 2025.10.04
// @author converted
// @url https://moetu.club
// @enabled true
// @tags 漫画,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "萌图社团（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://moetu.club",
  "customButton": false,
  "customOrder": 230,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nsort=[];\npush=(title,url,type1,type2)=>sort.push({\n\t\ttitle: title,\n\t\turl: url,\n\t\tstyle: {\n\t\t\t\tlayout_flexGrow: type1,\n\t\t\t\tlayout_flexBasisPercent: type2\n\t\t\t}\n\t});\n\tpush(\"全部🏷分类\",null,1,1);\npush(\"画师推荐\",`/category/pixiv/page/{{page}}`,1,0.35);\npush(\"图集画册\",`/category/illustration/page/{{page}}`,1,0.35);\npush(\"绘画官绘\",`/category/official/page/{{page}}`,1,0.35);\npush(\"其他🏷标签\",null,1,1);\nxrList=[[\"megami\",\"megami\"],[\"C96\",\"c96\"],[\"C97\",\"c97\"],[\"C94\",\"c94\"],[\"C99\",\"c99\"],[\"C100\",\"c100\"],[\"C95\",\"c95\"],[\"Hiten\",\"hiten\"],[\"りいちゅ\",\"%e3%82%8a%e3%81%84%e3%81%a1%e3%82%85\"],[\"椎野せら\",\"%e6%a4%8e%e9%87%8e%e3%81%9b%e3%82%89\"],[\"C98\",\"c98\"],[\"C93\",\"c93\"],[\"カントク\",\"%e3%82%ab%e3%83%b3%e3%83%88%e3%82%af\"],[\"C101\",\"c101\"],[\"ももこ\",\"%e3%82%82%e3%82%82%e3%81%93\"],[\"C92\",\"c92\"],[\"ふーみ\",\"%e3%81%b5%e3%83%bc%e3%81%bf\"],[\"kyuri\",\"kyuri\"],[\"望月しいな\",\"%e6%9c%9b%e6%9c%88%e3%81%97%e3%81%84%e3%81%aa\"],[\"森倉円\",\"%e6%a3%ae%e5%80%89%e5%86%86\"],[\"Anmi\",\"anmi\"],[\"遠坂あさぎ\",\"%e9%81%a0%e5%9d%82%e3%81%82%e3%81%95%e3%81%8e\"],[\"DSマイル\",\"ds%e3%83%9e%e3%82%a4%e3%83%ab\"],[\"ほし\",\"%e3%81%bb%e3%81%97\"],[\"C91\",\"c91\"],[\"Tiv\",\"tiv\"],[\"COMITIA128\",\"comitia128\"],[\"Aちき\",\"a%e3%81%a1%e3%81%8d\"],[\"あやみ\",\"%e3%81%82%e3%82%84%e3%81%bf\"],[\"RiE\",\"rie\"],[\"餡こたく\",\"%e9%a4%a1%e3%81%93%e3%81%9f%e3%81%8f\"],[\"naoto\",\"naoto\"],[\"にもし\",\"%e3%81%ab%e3%82%82%e3%81%97\"],[\"6U☆\",\"6u%e2%98%86\"],[\"みわべさくら\",\"%e3%81%bf%e3%82%8f%e3%81%b9%e3%81%95%e3%81%8f%e3%82%89\"],[\"八城惺架\",\"%e5%85%ab%e5%9f%8e%e6%83%ba%e6%9e%b6\"],[\"はねこと\",\"%e3%81%af%e3%81%ad%e3%81%93%e3%81%a8\"],[\"COMITIA134\",\"comitia134\"],[\"なきょ\",\"%e3%81%aa%e3%81%8d%e3%82%87\"],[\"ピロリ菌\",\"%e3%83%94%e3%83%ad%e3%83%aa%e8%8f%8c\"],[\"C103\",\"c103\"],[\"C104\",\"c104\"],[\"C102\",\"c102\"],[\"gomzi\",\"gomzi\"],[\"がおう\",\"%e3%81%8c%e3%81%8a%e3%81%86\"],[\"にじはしそら\",\"%e3%81%ab%e3%81%98%e3%81%af%e3%81%97%e3%81%9d%e3%82%89\"],[\"桜ひより\",\"%e6%a1%9c%e3%81%b2%e3%82%88%e3%82%8a\"],[\"小奈きなこ\",\"%e5%b0%8f%e5%a5%88%e3%81%8d%e3%81%aa%e3%81%93\"],[\"necömi\",\"necomi\"],[\"せんちゃ\",\"%e3%81%9b%e3%82%93%e3%81%a1%e3%82%83\"],[\"くれ～ぷ\",\"%e3%81%8f%e3%82%8c%ef%bd%9e%e3%81%b7\"],[\"恋小いろり\",\"%e6%81%8b%e5%b0%8f%e3%81%84%e3%82%8d%e3%82%8a\"],[\"画集\",\"%e7%94%bb%e9%9b%86\"],[\"かにビーム\",\"%e3%81%8b%e3%81%ab%e3%83%93%e3%83%bc%e3%83%a0\"],[\"フカヒレ\",\"%e3%83%95%e3%82%ab%e3%83%92%e3%83%ac\"],[\"和錆\",\"%e5%92%8c%e9%8c%86\"],[\"きみしま青\",\"%e3%81%8d%e3%81%bf%e3%81%97%e3%81%be%e9%9d%92\"],[\"桜木蓮\",\"%e6%a1%9c%e6%9c%a8%e8%93%ae\"],[\"アシマ\",\"%e3%82%a2%e3%82%b7%e3%83%9e\"],[\"Mocha\",\"mocha\"],[\"美和野らぐ\",\"%e7%be%8e%e5%92%8c%e9%87%8e%e3%82%89%e3%81%90\"],[\"すいみゃ\",\"%e3%81%99%e3%81%84%e3%81%bf%e3%82%83\"],[\"なび\",\"%e3%81%aa%e3%81%b3\"],[\"ぎるせ\",\"%e3%81%8e%e3%82%8b%e3%81%9b\"],[\"COMIC1☆15\",\"comic1%e2%98%8615\"],[\"COMIC1☆13\",\"comic1%e2%98%8613\"],[\"C89\",\"c89\"],[\"C88\",\"c88\"],[\"まふゆ\",\"%e3%81%be%e3%81%b5%e3%82%86\"],[\"Mika Pikazo\",\"mika-pikazo\"],[\"COMITIA120\",\"comitia120\"],[\"なつめえり\",\"%e3%81%aa%e3%81%a4%e3%82%81%e3%81%88%e3%82%8a\"],[\"COMITIA130\",\"comitia130\"],[\"まさよ\",\"%e3%81%be%e3%81%95%e3%82%88\"],[\"胡麻乃りお\",\"%e8%83%a1%e9%ba%bb%e4%b9%83%e3%82%8a%e3%81%8a\"],[\"COMITIA137\",\"comitia137\"],[\"COMITIA136\",\"comitia136\"],[\"ぷらこ\",\"%e3%81%b7%e3%82%89%e3%81%93\"],[\"おしおしお\",\"%e3%81%8a%e3%81%97%e3%81%8a%e3%81%97%e3%81%8a\"],[\"COMIC1☆20\",\"comic1%e2%98%8620\"],[\"C84\",\"c84\"],[\"C85\",\"c85\"],[\"C87\",\"c87\"],[\"C86\",\"c86\"],[\"C90\",\"c90\"],[\"木なこ\",\"%e6%9c%a8%e3%81%aa%e3%81%93\"],[\"佐伯ソラ\",\"%e4%bd%90%e4%bc%af%e3%82%bd%e3%83%a9\"],[\"桝石きのと\",\"%e6%a1%9d%e7%9f%b3%e3%81%8d%e3%81%ae%e3%81%a8\"],[\"U35\",\"u35\"],[\"荻pote\",\"%e8%8d%bbpote\"],[\"QP:flapper\",\"qpflapper\"],[\"COMITIA131\",\"comitia131\"],[\"あまみね\",\"%e3%81%82%e3%81%be%e3%81%bf%e3%81%ad\"],[\"sakana\",\"sakana\"],[\"らんふ\",\"%e3%82%89%e3%82%93%e3%81%b5\"],[\"ねむりねむ\",\"%e3%81%ad%e3%82%80%e3%82%8a%e3%81%ad%e3%82%80\"],[\"COMITIA126\",\"comitia126\"],[\"とぴあ\",\"%e3%81%a8%e3%81%b4%e3%81%82\"],[\"ただのゆきこ\",\"%e3%81%9f%e3%81%a0%e3%81%ae%e3%82%86%e3%81%8d%e3%81%93\"],[\"ひげ猫\",\"%e3%81%b2%e3%81%92%e7%8c%ab\"],[\"深崎暮人\",\"%e6%b7%b1%e5%b4%8e%e6%9a%ae%e4%ba%ba\"],[\"COMITIA140\",\"comitia140\"],[\"しらたま\",\"%e3%81%97%e3%82%89%e3%81%9f%e3%81%be\"],[\"三嶋くろね\",\"%e4%b8%89%e5%b6%8b%e3%81%8f%e3%82%8d%e3%81%ad\"],[\"こーやふ\",\"%e3%81%93%e3%83%bc%e3%82%84%e3%81%b5\"],[\"COMIC1☆10\",\"comic1%e2%98%8610\"],[\"COMIC1☆8\",\"comic1%e2%98%868\"],[\"C83\",\"c83\"],[\"うなさか\",\"%e3%81%86%e3%81%aa%e3%81%95%e3%81%8b\"],[\"COMIC1☆14\",\"comic1%e2%98%8614\"],[\"COMITIA127\",\"comitia127\"],[\"COMIC1☆11\",\"comic1%e2%98%8611\"],[\"COMITIA124\",\"comitia124\"],[\"ねこめたる\",\"%e3%81%ad%e3%81%93%e3%82%81%e3%81%9f%e3%82%8b\"],[\"ぽんかん⑧\",\"%e3%81%bd%e3%82%93%e3%81%8b%e3%82%93%e2%91%a7\"],[\"COMITIA123\",\"comitia123\"],[\"リン☆ユウ\",\"%e3%83%aa%e3%83%b3%e2%98%86%e3%83%a6%e3%82%a6\"],[\"COMITIA144\",\"comitia144\"],[\"nana\",\"nana\"],[\"火ノ\",\"%e7%81%ab%e3%83%8e\"],[\"ももしき\",\"%e3%82%82%e3%82%82%e3%81%97%e3%81%8d\"],[\"ミュシャ\",\"%e3%83%9f%e3%83%a5%e3%82%b7%e3%83%a3\"],[\"あまき\",\"%e3%81%82%e3%81%be%e3%81%8d\"],[\"COMITIA129\",\"comitia129\"],[\"COMITIA125\",\"comitia125\"]]\nxrList.map([tag,uri]=>{\n\turl=`/tag/${uri}/page/{{page}}`;\n\tpush(tag,url,1,0.25);\n\t});\n//java.log(JSON.stringify(sort))\nJSON.stringify(sort)",
  "header": "{\n  'User-Agent': \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\"\n}",
  "lastUpdateTime": 1759567809496,
  "loginUrl": "https://moetu.club#signup",
  "respondTime": 3900,
  "ruleBookInfo": {
    "name": "h1@text"
  },
  "ruleContent": {
    "content": ".entry-content@img@data-src\n<js>\n//java.log(result);\nlet newResult = result.split(\"\\n\").map(x => x);\nlet headers = JSON.stringify({\"headers\":{\"Referer\":\"https://moetu.club/\"}});\nnewResult.map(x => `<img src=\"${x},${headers}\">`).join(\"\\n\");\n</js>",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "span.-2@text",
    "bookList": ".hidden-line@.post-list-item",
    "bookUrl": "h2@a.0@href",
    "checkKeyWord": "pp",
    "coverUrl": ".post-thumb@data-src",
    "kind": "{{@@.post-list-cat@a.0@text}},{{@@.post-list-meta-views@span.0@text}},{{@@.post-list-meta-like@text}}",
    "lastChapter": "span.-1@text",
    "name": "h2@a.0@text"
  },
  "ruleToc": {
    "chapterList": "body",
    "chapterName": "h1@text",
    "chapterUrl": "{{baseUrl}}"
  },
  "searchUrl": "/<,page/{{page}}>?s=pp&type=post",
  "weight": 0
};

async function search(keyword, page) {
  legado.log('[search] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return [];
}

async function bookInfo(bookUrl) {
  legado.log('[bookInfo] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return {
    name: LEGADO_SOURCE.bookSourceName || '',
    author: '',
    bookUrl: bookUrl,
    tocUrl: bookUrl,
    coverUrl: '',
    intro: LEGADO_SOURCE.bookSourceComment || ''
  };
}

async function chapterList(tocUrl) {
  legado.log('[chapterList] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return [];
}

async function chapterContent(chapterUrl) {
  legado.log('[chapterContent] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return '';
}

async function explore(page, category) {
  legado.log('[explore] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return [];
}
