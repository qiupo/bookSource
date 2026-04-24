// @name 爱下电子（繁）
// @version 2026.02.26
// @author converted
// @url https://ixdzs.tw/
// @enabled true
// @tags 小说,书源,converted
// @description 繁体字

const LEGADO_SOURCE = {
  "bookSourceComment": "繁体字",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "爱下电子（繁）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://ixdzs.tw/",
  "customButton": false,
  "customOrder": 218,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1772086589365,
  "respondTime": 182726,
  "ruleBookInfo": {
    "tocUrl": "{{java.put(\"url\",baseUrl);\n\t\"https://ixdzs.tw/novel/clist/\"}},{\n  \"body\": \"bid={{baseUrl.match(/(\\d+).$/)[1]}}\",\n  \"method\": \"POST\"\n}"
  },
  "ruleContent": {
    "content": ".page-content@p@text"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".bauthor@a@text",
    "bookList": ".burl",
    "bookUrl": ".bname@a@href",
    "coverUrl": ".l-img@img@src",
    "intro": ".l-p2@text",
    "kind": ".lz@text&&.l-time@text",
    "lastChapter": ".l-last@a@text",
    "name": ".bname@a@text",
    "wordCount": ".size@text"
  },
  "ruleToc": {
    "chapterList": "$.data",
    "chapterName": "$.title",
    "chapterUrl": "@get:{url}p{{$.ordernum}}.html",
    "isVolume": "$.ctype"
  },
  "searchUrl": "https://ixdzs.tw/bsearch?q={{key}}",
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
