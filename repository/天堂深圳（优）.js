// @name 天堂深圳（优）
// @version 2025.10.02
// @author converted
// @url http://tiantangxiangzuoshenzhenwangyou.qwyd.net
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "天堂深圳（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://tiantangxiangzuoshenzhenwangyou.qwyd.net",
  "customButton": false,
  "customOrder": 174,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759402749615,
  "respondTime": 4583,
  "ruleBookInfo": {
    "author": "class.container@tag.p.0@text##一段悲.*\n版权所有©2013-2016 天堂向左 深圳往右 作者慕容雪村",
    "intro": "class.container@tag.p.0@text##作者：.*",
    "name": "tag.h1@text"
  },
  "ruleContent": {
    "content": "class.span12@html",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.active",
    "bookUrl": "tag.a@href",
    "name": "tag.a@text"
  },
  "ruleToc": {
    "chapterList": "class.thumbnail",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "http://tiantangxiangzuoshenzhenwangyou.qwyd.net/",
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
