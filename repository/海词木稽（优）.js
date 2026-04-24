// @name 海词木稽（优）
// @version 2025.10.02
// @author converted
// @url http://dict.cn已整理
// @enabled true
// @tags 特殊,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "特殊 书源",
  "bookSourceName": "海词木稽（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://dict.cn已整理",
  "bookUrlPattern": "已校验",
  "customButton": false,
  "customOrder": 346,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759386721793,
  "respondTime": 203,
  "ruleBookInfo": {
    "intro": "text"
  },
  "ruleContent": {
    "content": "html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "@css:.phonetic@text",
    "bookList": "body",
    "lastChapter": "@css:.dict-basic-ul@text",
    "name": "@js:decodeURI(baseUrl.split(\"/\").pop())"
  },
  "ruleToc": {
    "chapterList": "body",
    "chapterName": "@js:\"详细\""
  },
  "searchUrl": "http://dict.cn/{{key}}",
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
