// @name 全英文学（英）
// @version 2025.12.21
// @author converted
// @url https://novelnext.net
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "全英文学（英）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://novelnext.net",
  "customButton": false,
  "customOrder": 221,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1766358915921,
  "respondTime": 17723,
  "ruleBookInfo": {
    "author": "@XPath://ul[@class='info info-meta']/li[1]/a/text()",
    "coverUrl": "@XPath://img[@class='lazy']/@data-src",
    "intro": "@XPath://div[@class='desc-text' and @itemprop='description']/text()",
    "kind": "@XPath://ul[@class='info info-meta']/li[2]/a/text()",
    "lastChapter": "@XPath://div[@class='item-value']/a/text()",
    "name": "@XPath://h3[@class='title'][1]/text()"
  },
  "ruleContent": {
    "content": "@XPath://div[@id='chapter-content']/p/text()"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "@XPath:div[2]/div/span[2]/text()",
    "bookList": "@XPath://div[@class='row' and position()>1]",
    "bookUrl": "@XPath:div[2]/div/h3/a/@href",
    "checkKeyWord": "I",
    "coverUrl": "@XPath:div[1]/div/img/@src",
    "lastChapter": "@XPath:div[3]/div/a/@title",
    "name": "@XPath:div[2]/div/h3/a/@title"
  },
  "ruleToc": {
    "chapterList": "@XPath://ul[@class='list-chapter']/li/a",
    "chapterName": "@title",
    "chapterUrl": "@href",
    "nextTocUrl": "@XPath://li[@class='next']/a/@href"
  },
  "searchUrl": "https://novelnext.net/search?keyword={{key}}&page={{page}}",
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
