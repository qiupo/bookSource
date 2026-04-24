// @name 三五中文（优）
// @version 2026.02.26
// @author converted
// @url http://www.xkushu.com
// @enabled true
// @tags 小说,书源,converted
// @description "error:timeout
// @description "error:Connection reset
// @description ""

const LEGADO_SOURCE = {
  "bookSourceComment": "                    \"error:timeout\n                    \"error:Connection reset\n\"\"",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "三五中文（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.xkushu.com",
  "customButton": false,
  "customOrder": 163,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1772085570361,
  "respondTime": 2740,
  "ruleBookInfo": {
    "intro": "id.intro@text",
    "lastChapter": "id.details@tag.a.2@text",
    "name": "id.info@tag.h1@text"
  },
  "ruleContent": {
    "content": "id.content@textNodes"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.odd.1@text",
    "bookList": "class.grid@tr",
    "bookUrl": "class.odd.0@tag.a.0@href",
    "coverUrl": "tag.a.0@href##^.+?(\\d+)\\D(\\d+).+##/35zwhtml/$1/$2/$2s.jpg",
    "kind": "class.even.2@text",
    "lastChapter": "class.even@a@text",
    "name": "class.odd@a@text"
  },
  "ruleToc": {
    "chapterList": "id.list@dd@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "http://www.xkushu.com/modules/article/search.php?searchkey={{key}}",
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
