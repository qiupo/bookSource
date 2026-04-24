// @name 我爱读者（优）
// @version 2025.10.02
// @author converted
// @url https://www.52dzxy.com/
// @enabled true
// @tags 特殊,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "特殊 书源",
  "bookSourceName": "我爱读者（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.52dzxy.com/",
  "customButton": false,
  "customOrder": 344,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759385591772,
  "respondTime": 712,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "tag.p@text##我爱读者校园网"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.booklist@tag.td",
    "bookUrl": "class.time@tag.a.0@href",
    "name": "class.time@tag.a.0@text"
  },
  "ruleToc": {
    "chapterList": "class.maglisttitle@tag.a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "#",
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
