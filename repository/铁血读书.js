// @name 铁血读书
// @version 2025.10.02
// @author converted
// @url https://book.tiexue.net
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "铁血读书",
  "bookSourceType": 0,
  "bookSourceUrl": "https://book.tiexue.net",
  "customButton": false,
  "customOrder": 406,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759387083867,
  "loginUrl": "https://m.book.tiexue.net/Login.aspx",
  "respondTime": 1000,
  "ruleBookInfo": {
    "intro": ".bookPrdt@html##^##<br>",
    "tocUrl": "@js:baseUrl.replace(/\\/?$/, '/list.html')"
  },
  "ruleContent": {
    "content": ".p_01@html@js:result || ' 付费章节，换源阅读！'"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".zuoZhe1 a@text",
    "bookList": ".tianZhi_list dl:lt(3)",
    "bookUrl": "h6 a@href",
    "coverUrl": "a img@src",
    "intro": ".cel02_row3@textNodes@js:result.trim()",
    "kind": ".cel02_row2 span:not([class])@text",
    "lastChapter": ".zhuJue@text",
    "name": "h6 a@text"
  },
  "ruleToc": {
    "chapterList": ".list01 li p",
    "chapterName": "@js:(result.outerHtml().includes('vip_icon') ? '🔒' : '') + result.select('a').text()",
    "chapterUrl": "a@href"
  },
  "searchUrl": "/SearchResults.aspx?PageSize=3&keywords={{key}}&noveltype=0,{\n  \"charset\": \"gb2312\"\n}",
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
