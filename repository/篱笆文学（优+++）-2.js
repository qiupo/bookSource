// @name 篱笆文学（优+++）
// @version 2026.02.26
// @author converted
// @url https://m.libahao.com
// @enabled true
// @tags 小说,书源,converted
// @description // Error: stream was reset: PROTOCOL_ERROR

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: stream was reset: PROTOCOL_ERROR",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "篱笆文学（优+++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.libahao.com",
  "bookUrlPattern": "https://m.libahao.com/book/.+",
  "customButton": false,
  "customOrder": 9,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": false,
  "eventListener": false,
  "lastUpdateTime": 1772086876606,
  "respondTime": 184112,
  "ruleBookInfo": {
    "author": "[property=\"og:novel:author\"]@content",
    "coverUrl": "img@src",
    "intro": "[property=\"og:description\"]@content",
    "kind": "[property～=category|status|update_time]@content",
    "lastChapter": "[property~=las?test_chapter_name]@content",
    "name": "[property=\"og:novel:book_name\"]@content",
    "tocUrl": "[property=\"og:novel:read_url\"]@content"
  },
  "ruleContent": {
    "content": ".chapter-content@html",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".book-author@text",
    "bookList": ".book-item",
    "bookUrl": "href",
    "coverUrl": "img@src",
    "intro": ".book-description@text",
    "name": ".book-title@text"
  },
  "ruleToc": {
    "chapterList": ".chapter-list.1@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://m.libahao.com/sou?wd={{key}}",
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
