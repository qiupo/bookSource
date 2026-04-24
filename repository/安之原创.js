// @name 安之原创
// @version 2025.10.02
// @author converted
// @url http://www.azycjd.com-8
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "安之原创",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.azycjd.com-8",
  "customButton": false,
  "customOrder": 424,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759402814071,
  "respondTime": 2849,
  "ruleBookInfo": {
    "intro": "class.top_main.0@tag.p@text"
  },
  "ruleContent": {
    "content": "class.novel@tag.p@text"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.novel_items@tag.p.0@text",
    "bookList": "class.list_main@tag.li",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.img@src",
    "kind": "tag.span.0@text",
    "name": "class.novel_items@tag.h3.0@text"
  },
  "ruleToc": {
    "chapterList": "class.top_main chapter",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "http://www.azycjd.com/webnovelmis/mobile/msearchresult,{\n  \"method\": \"POST\",\n  \"body\": \"searchtxts={{key}}\"\n}",
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
