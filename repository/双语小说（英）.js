// @name 双语小说（英）
// @version 2025.10.06
// @author converted
// @url http://www.shubang.net/book
// @enabled true
// @tags 小说,书源,converted
// @description 英文

const LEGADO_SOURCE = {
  "bookSourceComment": "英文",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "双语小说（英）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.shubang.net/book#",
  "customButton": false,
  "customOrder": 225,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759754331076,
  "respondTime": 508,
  "ruleBookInfo": {
    "kind": "class.tags@a@text",
    "lastChapter": "tr.-1@td@a@text"
  },
  "ruleContent": {
    "content": ".line_en@text%%.line_cn@title",
    "nextContentUrl": "class.pagebar@a.-1@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.cont@p@text",
    "bookList": "class.mcon@a",
    "bookUrl": "a@href",
    "coverUrl": "class.cover@img@src",
    "intro": "class.cont@ownText",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "tr@td",
    "chapterName": "a@text",
    "chapterUrl": "a@href"
  },
  "searchUrl": "http://www.shubang.net/book/?q={{key}}",
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
