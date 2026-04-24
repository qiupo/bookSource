// @name 金庸小说（优+）
// @version 2025.09.16
// @author converted
// @url https://www.jinyongwang.net
// @enabled true
// @tags 小说,书源,converted
// @description // Error: stream was reset: CANCEL

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: stream was reset: CANCEL",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "金庸小说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.jinyongwang.net#♤yc",
  "customButton": false,
  "customOrder": 71,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"金庸作品\",\"url\":\"/book/\",\"style\":{\"layout_flexGrow\":1}}]",
  "lastUpdateTime": 1758062512466,
  "respondTime": 182485,
  "ruleBookInfo": {
    "author": ".author a@text",
    "coverUrl": ".bookimg img@src",
    "kind": ".title h1@text&&.time@text##.*小说|出版时间.|出版社.",
    "lastChapter": ".mlist a.-1@text",
    "name": ".title span@text##小说"
  },
  "ruleContent": {
    "content": "#vcon@p@html||#con@html",
    "imageStyle": "0"
  },
  "ruleExplore": {
    "author": "p.-1@text##.*年|\\/.*",
    "bookList": "class.list.3@li",
    "bookUrl": "a.1@href",
    "coverUrl": "img@src",
    "kind": "p.-1@text##金庸.*",
    "name": "a.1@text##小说"
  },
  "ruleSearch": {
    "bookList": ".article_li",
    "bookUrl": "a.0@href",
    "checkKeyWord": "雪山",
    "intro": "p.0@text##\\s",
    "kind": "a.1@text&&span@text",
    "name": "a.0@text"
  },
  "ruleToc": {
    "chapterList": ".mlist li@a||h1",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/search/{{key}}/",
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
