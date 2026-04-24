// @name 布咕阅读
// @version 2025.10.02
// @author converted
// @url http://www.bgwxc.com
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "布咕阅读",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.bgwxc.com#",
  "customButton": false,
  "customOrder": 425,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "header": "{\"Cookie\":\"user_account=F76A5O7ZdGuH3Ey2Frt34k3p9WBtdKheC3N%2Bk85WDanWB4lQx42C5q136iNFIafAJdQ8ESdj2TBFTB772Djd03teGEtg\"}",
  "lastUpdateTime": 1759387226914,
  "respondTime": 1881,
  "ruleBookInfo": {
    "intro": ".txtinfobox@html",
    "tocUrl": "class.tabs-menus@tag.a.0@href"
  },
  "ruleContent": {
    "content": "class.read-content@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".author@text",
    "bookList": "class.res-item",
    "bookUrl": "tag.a.0@href",
    "coverUrl": "img@src",
    "intro": "class.search-alt@html\n<js>result.replace(/(.*)/,' ○○○STORY:\\n$1')</js>",
    "kind": "class.t-row t-row-2@span@text",
    "lastChapter": "class.chapter-span@text",
    "name": "h4@text"
  },
  "ruleToc": {
    "chapterList": "class.chapter-item",
    "chapterName": "a@text",
    "chapterUrl": "a@href",
    "isVip": "text##(VIP)##$1###"
  },
  "searchUrl": "http://www.bgwxc.com/module/novel/search.php?keyword={{key}}",
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
