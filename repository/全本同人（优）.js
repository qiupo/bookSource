// @name 全本同人（优）
// @version 2025.09.22
// @author converted
// @url https://www.qbtr.me/
// @enabled true
// @tags 小说,书源,converted
// @description // Error: 同人作品为多，但没有封面。

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 同人作品为多，但没有封面。",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "全本同人（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.qbtr.me/",
  "customButton": false,
  "customOrder": 179,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "同人小说::/tongren/<,index_{{page}}.html>\n常规小说::/changgui/<,index_{{page}}.html>\n同人榜单::/hot/<,index_{{page}}.html>",
  "lastUpdateTime": 1758571899699,
  "respondTime": 182927,
  "ruleBookInfo": {
    "author": ".date span@text##.*：",
    "coverUrl": ".pic img@src",
    "intro": ".infos p@html",
    "kind": ".menNav a.1@text&&.date@textNodes##.*：|小说",
    "lastChapter": ".book_list a.-1@text",
    "name": ".infos h1@text##\\(\\S+"
  },
  "ruleContent": {
    "content": ".read_chapterDetail@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".booknews@ownText##.*：",
    "bookList": ".bk",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "intro": "p@text##简介.",
    "kind": "label@text",
    "lastChapter": "h3@text##\\S+\\(|\\)",
    "name": "h3@text##\\(\\S+"
  },
  "ruleToc": {
    "chapterList": ".book_list a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/e/search/index.php,{\n  \"charset\": \"gb2312\",\n  \"method\": \"POST\",\n  \"body\": \"keyboard={{key}}&show=title&classid=0\"\n}",
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
