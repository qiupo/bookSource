// @name 心轻小说
// @version 2025.10.02
// @author converted
// @url http://s.sfacg.com/
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "心轻小说",
  "bookSourceType": 0,
  "bookSourceUrl": "http://s.sfacg.com/",
  "customButton": false,
  "customOrder": 438,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759386833801,
  "loginUrl": "http://passport.sfacg.com/Login.aspx",
  "respondTime": 792,
  "ruleBookInfo": {
    "kind": "class.tag-list@class.text@text",
    "tocUrl": "text.点击阅读@href"
  },
  "ruleContent": {
    "content": "class.article-content font16@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "tag.li.1@text##.+综合信息：\\s*([^\\/]+).*##$1",
    "bookList": "tag.form@tag.table.-2@tag.ul",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.img@src",
    "intro": "tag.li.1@text##.+\\d+:\\d+\\s*(.+).*##$1",
    "lastChapter": "tag.li.1@text##.+\\/(\\d+\\/\\d+\\/\\d+).*##$1",
    "name": "tag.a@text"
  },
  "ruleToc": {
    "chapterList": "class.catalog-list@tag.ul@tag.li@tag.a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "http://s.sfacg.com/?Key={{key}}&S=1&SS=0",
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
