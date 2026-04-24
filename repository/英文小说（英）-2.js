// @name 英文小说（英）
// @version 2025.12.21
// @author converted
// @url https://www.yingyuxiaoshuo.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "英文小说（英）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.yingyuxiaoshuo.com",
  "customButton": false,
  "customOrder": 223,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1766359054956,
  "respondTime": 10551,
  "ruleBookInfo": {
    "author": "@css:.listshadow1 .text-danger:nth-child(2)@text",
    "coverUrl": "@css:.listshadow1 img@src",
    "intro": "@css:.listshadow1 .text-intro1@text",
    "kind": "@css:.listshadow1 .text-danger:nth-child(n+3)@text",
    "name": "@css:.listshadow1 .text-danger:first-child h2@text"
  },
  "ruleContent": {
    "content": "{{@css:.text-content1 .c-en@text||.text-content1@text}}"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "@css:.grow>div:nth-child(2)@text",
    "bookList": "@css:.main-list-container>div.h-36",
    "bookUrl": "a@href",
    "checkKeyWord": "加",
    "coverUrl": "img@src",
    "intro": "@css:.grow>div:nth-child(3)@text",
    "kind": "@css:.grow>div:nth-child(4) span:first-child@text",
    "name": "@css:.grow h2>a:nth-child(n)@text"
  },
  "ruleToc": {
    "chapterList": "@css:.shadow-listshadow1 .grid .text-danger",
    "chapterName": "class.text-danger@text",
    "chapterUrl": "class.text-danger@href"
  },
  "searchUrl": "/search/{{key}}",
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
