// @name 名著阅读（优++）
// @version 2025.12.20
// @author converted
// @url https://api.520diandu.com/
// @enabled true
// @tags 漫画,书源,图片,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "名著阅读（优++）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://api.520diandu.com/",
  "customButton": false,
  "customOrder": 229,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"📚全部书籍\",\"url\":\"https://api.520diandu.com/api/read/allReadBooks?uid=&key=&page={{page}}&cv=134&from=web\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}}]",
  "lastUpdateTime": 1766230205190,
  "respondTime": 2348,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "@get:{img}@js:headers={\"headers\":{\"Referer\":baseUrl}};\nresult.split(\"\\n\").map(x=>'<img src=\\\"'+x+','+JSON.stringify(headers)+'\\\">').join(\"\\n\")"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "$..books[*]",
    "bookUrl": "https://api.520diandu.com/api/read/readAllPages?uid=&key=&cv=134&from=web&bid={{$.id}}",
    "checkKeyWord": "封神",
    "coverUrl": "$.famous",
    "intro": "$.title",
    "name": "$.book_name"
  },
  "ruleToc": {
    "chapterList": "$.data",
    "chapterName": "$.page",
    "chapterUrl": "$.pic@put:{img:pic}"
  },
  "searchUrl": "https://api.520diandu.com/api/read/allReadBooks?uid=&key=&name={{key}}&page={{page}}&cv=134&from=app",
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
