// @name 幻想小说（优++）
// @version 2025.10.01
// @author converted
// @url https://m.huanxiangxs.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "幻想小说（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.huanxiangxs.com",
  "customButton": false,
  "customOrder": 36,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "header": "{\n    \"User-Agent\":\"Mozilla/5.0 (Linux; Android 10; V1824A Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko)  Chrome/74.0.3729.186 Mobile Safari/537.36\"\n\n}",
  "lastUpdateTime": 1759350973181,
  "respondTime": 240016,
  "ruleBookInfo": {
    "author": "[property$=author]@content",
    "coverUrl": "[property$=image]@content",
    "intro": "[property$=description]@content",
    "kind": "[property~=category|status|update_time]@content",
    "lastChapter": "[property$=latest_chapter_name]@content",
    "name": "[property$=book_name]@content",
    "tocUrl": "[property$=read_url]@content##$##,{'webView': true}"
  },
  "ruleContent": {
    "content": "#txt@p@html",
    "replaceRegex": "##“.+最新章节！ |阅读.+请关注幻想小说网.+"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".info a.1@text",
    "bookList": ".subject-item",
    "bookUrl": ".info a.0@href##$##,{'webView': true}",
    "checkKeyWord": "斗破苍穹",
    "coverUrl": ".nbg img@data-original",
    "intro": ".info p@text##【内容简介】",
    "kind": ".info a.2@text",
    "lastChapter": ".info a.3@text##【最新章节】",
    "name": ".info a.0@text",
    "wordCount": ".pub@text##.+\\/\\s"
  },
  "ruleToc": {
    "chapterList": "#chapter@a",
    "chapterName": "text",
    "chapterUrl": "href##$##,{'webView': true}"
  },
  "searchUrl": "https://m.huanxiangxs.com/search/?keyword={{key}}&t=0&page={{page}},{\n  \"webView\": true\n}",
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
