// @name 天天书吧（优+）
// @version 2026.02.26
// @author converted
// @url https://www.ttshu8.net
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "天天书吧（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.ttshu8.net",
  "customButton": false,
  "customOrder": 56,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "header": "{\n\t\"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.92 Safari/537.36\",\n\t\"Content-Type\": \"application/x-www-form-urlencoded\"\n}",
  "lastUpdateTime": 1772086706701,
  "respondTime": 2731,
  "ruleBookInfo": {
    "author": "id.info@tag.p.0@text",
    "coverUrl": "class.cover@img@src",
    "intro": "class.introtxt@text",
    "kind": "class.con_top@tag.a.1@text",
    "lastChapter": "id.info@tag.p.-1@tag.a@text",
    "name": "id.info@h1@text"
  },
  "ruleContent": {
    "content": "id.content@p@textNodes"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.title@span@text",
    "bookList": "id.alistbox",
    "bookUrl": "class.title@tag.h2@tag.a@href",
    "coverUrl": "img@src",
    "intro": "class.intro@text",
    "lastChapter": "class.sys@tag.a@text",
    "name": "class.title@tag.h2@text##《(.*)》##$1###"
  },
  "ruleToc": {
    "chapterList": "id.list@dd@a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "@js:\nvar url = java.connect(source.getKey()).raw().request().url()+ \"search.html\";\nvar head = JSON.parse(source.header);\nvar body = \"searchkey=\"+key;\nsid=java.post(url,body,head).header(\"Location\");\njava.log(sid);\nsid;",
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
