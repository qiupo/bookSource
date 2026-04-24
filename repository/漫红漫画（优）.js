// @name 漫红漫画（优）
// @version 2025.10.04
// @author converted
// @url https://manhuaus.com/
// @enabled true
// @tags 漫画,书源,图片,converted
// @description 纯英文

const LEGADO_SOURCE = {
  "bookSourceComment": "纯英文",
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "漫红漫画（优）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://manhuaus.com/",
  "customButton": false,
  "customOrder": 265,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759568903372,
  "respondTime": 2458,
  "ruleBookInfo": {
    "intro": "class.summary__content show-more@text",
    "name": "class.post-title@h1@text"
  },
  "ruleContent": {
    "content": "class.reading-content@class.page-break no-gaps@img@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.c-tabs-item@class.row c-tabs-item__content",
    "bookUrl": ".h4@a@href",
    "checkKeyWord": "god",
    "coverUrl": "class.col-4 col-md-2@class.tab-thumb c-image-hover@a@img@data-src",
    "kind": "class.summary-content@text",
    "name": ".h4@a@text"
  },
  "ruleToc": {
    "chapterList": "-class.wp-manga-chapter    ",
    "chapterName": "a@text",
    "chapterUrl": "a@href"
  },
  "searchUrl": "https://manhuaus.com/?s={{key}}&post_type=wp-manga&post_type=wp-manga",
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
