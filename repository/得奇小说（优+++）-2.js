// @name 得奇小说（优+++）
// @version 2025.12.21
// @author converted
// @url https://www.deqibook.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "得奇小说（优+++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.deqibook.com",
  "bookUrlPattern": "https://www.deqixs.com/xiaoshuo/\\d+/",
  "customButton": false,
  "customOrder": 7,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "热门小说::/xiaoshuo/2-1.html",
  "header": "@js:\nlet ua = java.getWebViewUA()\nJSON.stringify({\n\t\"user-agent\":ua\n})",
  "lastUpdateTime": 1766358196532,
  "respondTime": 3886,
  "ruleBookInfo": {
    "author": ".itemtxt@p.1@text",
    "coverUrl": ".item@img@src",
    "intro": ".des.0@text",
    "kind": ".itemtxt@span@text",
    "lastChapter": ".itemtxt@li.0@text",
    "name": "h1@a@text",
    "wordCount": "h1@i@text"
  },
  "ruleContent": {
    "content": ".con@html",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "p.1@text",
    "bookList": ".item",
    "bookUrl": "a.1@href",
    "checkKeyWord": "传说",
    "coverUrl": "img@src",
    "kind": "span@text",
    "lastChapter": "ul@li.0@text",
    "name": "a.1@text"
  },
  "ruleToc": {
    "chapterList": "#list@li",
    "chapterName": "a@text",
    "chapterUrl": "a@href",
    "nextTocUrl": "text.下一页@href"
  },
  "searchUrl": "/tag/?key={{key}}",
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
