// @name 快眼看书（优+）
// @version 2025.12.21
// @author converted
// @url http://www.booksky.cc
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "快眼看书（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.booksky.cc",
  "customButton": false,
  "customOrder": 106,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1766340762142,
  "respondTime": 18236,
  "ruleBookInfo": {
    "author": "class.novelinfo-l@tag.li.0@text##作者：",
    "coverUrl": "class.novelinfo-r@tag.a@tag.img@src",
    "intro": "class.novelintro@text##各位书友要是.*",
    "kind": "[property=\"og:novel:category\"]@content&&[property=\"og:novel:status\"]@content",
    "lastChapter": "class.novelinfo-l@li@a@text",
    "name": "class.w-left@tag.h1@text"
  },
  "ruleContent": {
    "content": "id.chaptercontent@textNodes"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.info@tag.span.1@text",
    "bookList": "class.librarylist@tag.li",
    "bookUrl": "class.info@tag.span.0@tag.a@href",
    "coverUrl": "class.pt-ll-l@tag.a@tag.img@src",
    "lastChapter": "class.last@tag.a@text",
    "name": "class.info@tag.span.0@tag.a@text"
  },
  "ruleToc": {
    "chapterList": "class.fulldir@tag.ul@tag.li@tag.a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "http://www.booksky.cc/modules/article/search.php?searchkey={{key}}",
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
