// @name 鬼故事集（优+）
// @version 2025.10.03
// @author converted
// @url http://www.guishiji.com/
// @enabled true
// @tags 小说,书源,converted
// @description //250424by= =

const LEGADO_SOURCE = {
  "bookSourceComment": "//250424by= =",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "鬼故事集（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.guishiji.com/",
  "customButton": false,
  "customOrder": 75,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "小说频道::/html/rmxs/xspd/index_{{page}}.html\n                           最新                           ::\n短篇怪谈::/html/dpggs/\n长篇鬼话::/html/cpggs/\n校园诡事::/html/xyggs/\n医院夜谈::/html/yyggs/\n民间异闻::/html/mjggs/\n家有鬼事::/html/jlggs/\n灵异实录::/html/zslysj/\n                           全部                           ::\n短篇怪谈::/html/dpggs/index_{{page}}.html\n长篇鬼话::/html/cpggs/index_{{page}}.html\n校园诡事::/html/xyggs/index_{{page}}.html\n医院夜谈::/html/yyggs/index_{{page}}.html\n民间异闻::/html/mjggs/index_{{page}}.html\n家有鬼事::/html/jlggs/index_{{page}}.html\n灵异实录::/html/zslysj/index_{{page}}.html",
  "lastUpdateTime": 1759513060976,
  "respondTime": 956,
  "ruleBookInfo": {
    "author": "text.作者@text##作者：|\\s.*",
    "intro": ".desc@html",
    "kind": ".fot@span!0:1@text",
    "name": "h1@text",
    "wordCount": "text.字数@text##字数："
  },
  "ruleContent": {
    "content": "#MyContent@html||p@text",
    "replaceRegex": "##部分文章源自.*|如果您有故事想与.*"
  },
  "ruleExplore": {
    "bookList": "article",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "intro": ".umInfo@text||.intro@text",
    "kind": ".ceta@a@title",
    "lastChapter": ".date@font@text",
    "name": "a.0@title||h2@text"
  },
  "ruleSearch": {
    "author": "a[href*=author]@text",
    "bookList": ".item",
    "bookUrl": "a.0@href",
    "name": "a.0@text"
  },
  "ruleToc": {
    "chapterList": "<js>\n//MjUwNDI0Ynk9ID0=\na=java.getElements(\".txt-list@li@a\")\nif(a.length==0){\n\tlist=[{text:\"第1页\",href:baseUrl}]\n\t}\n</js>",
    "chapterName": "text",
    "chapterUrl": "href",
    "nextTocUrl": ".next@href"
  },
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
