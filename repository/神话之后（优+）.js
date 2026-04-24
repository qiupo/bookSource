// @name 神话之后（优+）
// @version 2025.10.03
// @author converted
// @url https://www.shenhuazhihou.com
// @enabled true
// @tags 小说,书源,converted
// @description BY:溪

const LEGADO_SOURCE = {
  "bookSourceComment": "BY:溪",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "神话之后（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.shenhuazhihou.com",
  "bookUrlPattern": "https://www.shenhuazhihou.com/book/\\d+/",
  "customButton": false,
  "customOrder": 129,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "小说::https://www.shenhuazhihou.com/book/<,index_{{page}}.html>",
  "lastUpdateTime": 1759523290402,
  "respondTime": 3604,
  "ruleBookInfo": {
    "author": ".m-infos@span.0@text",
    "coverUrl": "img@src",
    "intro": "p.0@text\n##(^|[。！？……]+[”」）……】]?)##$1<br>",
    "kind": ".m-infos@span.1:2@text##.*：|.*：",
    "lastChapter": ".m-upd@a@text",
    "name": "h1@text"
  },
  "ruleContent": {
    "content": "id.chaptercontent@p@html",
    "nextContentUrl": "text.下一@href"
  },
  "ruleExplore": {
    "author": "td.1@text",
    "bookList": "tbody@tr",
    "bookUrl": "a.0@href",
    "kind": "td.2@text",
    "name": "td.0@a@text"
  },
  "ruleSearch": {
    "author": ".author@text",
    "bookList": ".book-coverlist",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "intro": ".intro@text",
    "name": "h4@a@text"
  },
  "ruleToc": {
    "chapterList": "#play_0@li@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://www.shenhuazhihou.com/e/search/index.php,{\n  \"body\": \"tbname=bookname&show=title,writer&tempid=1&keyboard={{key}}\",\n  \"method\": \"POST\"\n}",
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
