// @name 梧桐中文
// @version 2026.02.26
// @author converted
// @url http://www.wtzw.com
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "梧桐中文",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.wtzw.com",
  "customButton": false,
  "customOrder": 422,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1772088124667,
  "respondTime": 1581,
  "ruleBookInfo": {
    "author": "class.sName@text",
    "coverUrl": "class.w_pic@tag.img@src",
    "intro": "class.pWorkInformation@text",
    "lastChapter": "class.li_upDate@tag.a@text",
    "name": "class.li_tit@tag.a@text"
  },
  "ruleContent": {
    "content": "class.article@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "tag.a.2@text",
    "bookList": "class.searchList@li",
    "bookUrl": "class.sTit@tag.a@href",
    "coverUrl": "tag.img@src",
    "lastChapter": "tag.a.3@text",
    "name": "class.sTit@text"
  },
  "ruleToc": {
    "chapterList": "class.w_ulTxt w_ulTxt_3 clearfix@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "http://www.wtzw.com/search-{{key}}.html?null",
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
