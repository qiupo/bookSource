// @name 盗墓笔记（优+）
// @version 2025.10.02
// @author converted
// @url http://www.daomubiji.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "盗墓笔记（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.daomubiji.com",
  "customButton": false,
  "customOrder": 73,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "盗墓笔记::http://www.daomubiji.com/",
  "lastUpdateTime": 1759387475979,
  "respondTime": 16490,
  "ruleBookInfo": {
    "intro": "class.focusbox-text@text"
  },
  "ruleContent": {
    "content": "class.article-content@tag.p@text"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "text##(|)",
    "bookList": "class.container@tag.li!0",
    "bookUrl": "tag.a@href",
    "name": "class.menu-item@tag.a.0@text"
  },
  "ruleToc": {
    "chapterList": "class.excerpts-wrapper@tag.a",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "-",
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
