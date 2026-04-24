// @name 刺猬猫说
// @version 2025.10.04
// @author converted
// @url 刺猬猫
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "刺猬猫说",
  "bookSourceType": 0,
  "bookSourceUrl": "刺猬猫",
  "customButton": false,
  "customOrder": 434,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759573181394,
  "respondTime": 6475,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": ".chapter@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".author@text##\\/.*",
    "bookList": ".book-item",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "intro": ".desc@textNodes",
    "kind": ".author@text##.*?\\/",
    "lastChapter": ".new@text##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求更票谢乐发订合补加架字修Kk].*?[】）\\)]",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "class.catalogue-list less@li@a",
    "chapterName": "text##^\\d+\\.|（.*合.*|（含.*|\\(.*合.*|\\(含.*\n@js:result\n.replace(\"••\",\"\")\n.replace(/^(\\d+).第/,'第')\n.replace(/^(正文|VIP章节|最新章节|免费章节.|章节目录)?(\\s+|_)|[\\(\\{（｛【].*[求含理更谢乐发推票盟补加字Kk\\/].*/g,'')\n.replace(/^(\\d+)[、．]第.+章/,'第$1章')\n.replace(/^(\\d+)、\\d+、/,'第$1章 ')\n.replace(/^(\\d+)、\\d+/,'第$1章')\n.replace(/^(第.+章)\\s?\\d+/,'$1')\n.replace(/^(\\d+)、/,'第$1章 ')\n.replace(/^(第.+章)\\s?第.+章/,'$1')\n.replace(/第\\s(.+)\\s章/,'第$1章')\n.replace(/.*(chapter|Chapter)\\s?(\\d+)\\s?/,'$1 $2 ')\n.replace(/\\(.+\\)/,'')\n.replace(/\\[|。/,'')\n.replace(/第([零一二两三四五六七八九十百千]+)章/g,java.toNumChapter(result))\n##(章)([^\\s]+)(\\s·)##$1 $2$3",
    "chapterUrl": "href@js:result+',{webView:\"true\"}'",
    "preUpdateJs": "java.refreshTocUrl()"
  },
  "searchUrl": "https://wap.ciweimao.com:443/book_list?keyword={{key}}",
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
