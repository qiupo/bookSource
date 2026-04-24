// @name 电线看书（优）
// @version 2025.10.04
// @author converted
// @url https://101kanshu.com
// @enabled true
// @tags 小说,书源,converted
// @description 需要魔法

const LEGADO_SOURCE = {
  "bookSourceComment": "需要魔法",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "电线看书（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://101kanshu.com",
  "concurrentRate": "2000",
  "customButton": false,
  "customOrder": 194,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "header": "{\n\"User-Agent\":\"Mozilla/5.0 (Linux; Android 9) Mobile Safari/537.36\",\"referer\":\"{{baseUrl}}\"\n}",
  "lastUpdateTime": 1759581869925,
  "respondTime": 180702,
  "ruleBookInfo": {
    "author": "[property=\"og:novel:author\"]@content",
    "coverUrl": "[property=\"og:image\"]@content",
    "intro": "[property=\"og:description\"]@content",
    "kind": "[property=\"og:novel:category\"]@content",
    "lastChapter": "[property=\"og:novel:latest_chapter_name\"]@content",
    "name": "[property=\"og:novel:book_name\"]@content",
    "tocUrl": "@js:\nresult = \"/ajax_novels/chapterlist/\" + baseUrl.match(/book\\/(\\d+)/)[1]+\".html\";"
  },
  "ruleContent": {
    "content": "#txtcontent@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".labelbox label.0@text",
    "bookList": "#article_list_content li",
    "bookUrl": "a.0@href",
    "coverUrl": ".imgbox@img.0@data-src",
    "intro": ".ellipsis_2@text",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "li a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/search/{{key}}/{{page}}.html",
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
