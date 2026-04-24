// @name 古龙全集（优+）
// @version 2025.10.03
// @author converted
// @url https://www.gulongwang.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "古龙全集（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.gulongwang.com",
  "customButton": false,
  "customOrder": 69,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "古龙全集::/",
  "lastUpdateTime": 1759513025455,
  "respondTime": 535,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": ".nr_con@html",
    "replaceRegex": "##（古龙网.*）"
  },
  "ruleExplore": {
    "author": "@js:'古龙'",
    "bookList": ".shuming@li",
    "bookUrl": "a.1@href",
    "coverUrl": "img@src",
    "name": "a.1@text"
  },
  "ruleSearch": {},
  "ruleToc": {
    "chapterList": "id.right@li@a",
    "chapterName": "text##正文\\s",
    "chapterUrl": "href"
  },
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
