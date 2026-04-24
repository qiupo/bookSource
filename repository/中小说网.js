// @name 中小说网
// @version 2025.12.15
// @author converted
// @url https://h5.17k.com
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "中小说网",
  "bookSourceType": 0,
  "bookSourceUrl": "https://h5.17k.com",
  "concurrentRate": "1500",
  "customButton": false,
  "customOrder": 398,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1765832597046,
  "respondTime": 4692,
  "ruleBookInfo": {
    "tocUrl": "https://h5.17k.com/list/@get:{id}.html"
  },
  "ruleContent": {
    "content": "#Context@html",
    "replaceRegex": "##.*17K小说.*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.authorPenName",
    "bookList": "<js>\nif (result.includes('setCookie')) {\n    java.webView(null, \"https://h5.17k.com/ck/search/\", null);\n    x = java.ajax(java.get(\"su\"));\n} else {\n    x = result;\n}\nx;\n</js>\n$.data.lists[*]",
    "bookUrl": "@put:{id:$.id}\nhttps://h5.17k.com/book/@get:{id}.html",
    "coverUrl": "$.coverImg",
    "kind": "$.bookChannel.name",
    "lastChapter": "{{$.lastUpdateChapterName}}",
    "name": "$.bookName"
  },
  "ruleToc": {
    "chapterList": ".listCont@dd",
    "chapterName": "a@text",
    "chapterUrl": "a@href",
    "isVip": "@js:// 字符串\n/vip/.test(result) ? true : false;"
  },
  "searchUrl": "{{java.put(\"su\",`https://h5.17k.com/ck/search/list?page=1&keyword=${key}`)}}",
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
