// @name 五五读书（优）
// @version 2025.12.23
// @author converted
// @url https://www.changduzw.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "五五读书（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.changduzw.com#",
  "customButton": false,
  "customOrder": 143,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1766457803593,
  "respondTime": 1450,
  "ruleBookInfo": {
    "author": "class.status@tag.p.1@text",
    "coverUrl": "class.imgbox@tag.img@src",
    "intro": "class.con@tag.p@text",
    "kind": "class.status@tag.a.0@text",
    "lastChapter": "class.red.1@text",
    "name": "class.status@tag.h1@text",
    "tocUrl": "text.点击阅读@href",
    "wordCount": "class.status@tag.p.-3@text##总字数."
  },
  "ruleContent": {
    "content": "id.htmlContent@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "td.2@text",
    "bookList": "body > div.warpper > div.o_all > div.o_content > div > table > tbody > tr!0",
    "bookUrl": "td.0@a@href",
    "kind": "class.even@text",
    "lastChapter": "td.1@a@text",
    "name": "td.0@a@text"
  },
  "ruleToc": {
    "chapterList": "class.mulu_list@tag.a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://www.changduzw.com/modules/article/search.php,{\n'charset': 'utf-8',\n'method': 'POST',\n'body': 'searchkey={{key}}&type=submit'\n}",
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
