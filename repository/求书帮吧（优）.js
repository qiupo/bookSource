// @name 求书帮吧（优）
// @version 2025.10.27
// @author converted
// @url https://www.qiushubang.com/
// @enabled true
// @tags 小说,书源,converted
// @description // Error: 搜索失效

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 搜索失效",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "求书帮吧（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.qiushubang.com/",
  "customButton": false,
  "customOrder": 176,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 9) Mobile Safari/537.36\"}",
  "lastUpdateTime": 1761532484024,
  "respondTime": 181779,
  "ruleBookInfo": {
    "author": "class.fix@tag.a@text",
    "coverUrl": "class.imgbox@tag.img@src",
    "intro": "class.desc xs-hidden@text",
    "name": "class.top@tag.h1@text"
  },
  "ruleContent": {
    "content": "id.content@html",
    "nextContentUrl": "id.next_url@href",
    "replaceRegex": "##一秒记住【完本神站】手机用户输入地址.*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "tag.span@text",
    "bookList": "class.item",
    "bookUrl": "a@href",
    "coverUrl": "a@img",
    "intro": "tag.dd@text",
    "name": "tag.dt@tag.a@text"
  },
  "ruleToc": {
    "chapterList": "class.section-list fix.-1@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href",
    "nextTocUrl": "tag.option@value"
  },
  "searchUrl": "https://www.sososhu.com/?q={{key}}&site=qiushubang&Submit=%E6%90%9C%E7%B4%A2,{\"webView\": true}",
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
