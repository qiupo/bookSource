// @name 追书出版
// @version 2025.12.20
// @author converted
// @url http://www.zhuishushenqi.com/chuban
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "追书出版",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.zhuishushenqi.com/chuban",
  "customButton": false,
  "customOrder": 396,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1766232404683,
  "respondTime": 1106,
  "ruleBookInfo": {
    "coverUrl": "class.book-info@img@src",
    "intro": "class.content intro@textNodes",
    "lastChapter": "class.chapter-list clearfix@tag.li.0@a@text"
  },
  "ruleContent": {
    "content": "class.inner-text@p@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.author@tag.span.0@text",
    "bookList": "class.book",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "kind": "class.author@tag.span.2@text&&class.popularity@text##\\|.*",
    "lastChapter": "class.popularity@text##.*\\|",
    "name": "class.name@text"
  },
  "ruleToc": {
    "chapterList": "id.J_chapterList@li@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://www.zhuishushenqi.com/search?val={{key}}",
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
