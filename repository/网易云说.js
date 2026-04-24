// @name 网易云说
// @version 2025.12.17
// @author converted
// @url http://m.yuedu.163.com
// @enabled true
// @tags 正版小说,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "网易云说",
  "bookSourceType": 0,
  "bookSourceUrl": "http://m.yuedu.163.com#yc1101",
  "customButton": false,
  "customOrder": 429,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1765997467565,
  "loginUrl": "https://m.yuedu.163.com/login.do",
  "respondTime": 1689,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "data.content@js:\nresult ? String(java.base64Decode(result)).replace(/<h1>.+?<\\/h1>/, '') : ' 付费章节，换源阅读！';",
    "imageStyle": "0"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "author",
    "bookList": "data.books[*]\n@js:JSON.parse(result).map(o=> {\n    var J = org.jsoup.Jsoup.parse(java.ajax(baseUrl.match(/(.+?\\/\\/.+?\\/)/)[1] + 'source/' + o.sourceUuid));\n    return {\n        name: o.title,\n        author: o.author,\n        tags: o.keyName,\n        num:o.showTotalCount+'字',\n        latest: String(J.select('.m-book-recent a').text()).replace(/[\\(（【].*[求更谢乐发合].*[】）\\)]/,'') +String(J.select('.m-book-recent p').text()).replace(/\\s*(\\d+-\\d+-\\d+).+/, '（$1）').replace(/\\s*(\\d+)月(\\d+)日.+/, '（$1-$2）'),\n        intro: o.description.replace(/<\\/?\\w+>/g, '').trim(),\n        cover: o.coverImage,\n        catalogUrl: '/reader/book/info.json?catalog_only=true&source_uuid=' + o.sourceUuid\n    }\n});",
    "bookUrl": "catalogUrl",
    "coverUrl": "cover",
    "intro": "intro",
    "kind": "tags",
    "lastChapter": "latest",
    "name": "name",
    "wordCount": "num"
  },
  "ruleToc": {
    "chapterList": "data.catalog[?(@.grade > 1)]",
    "chapterName": "$.title##[\\(（【].*[求更谢乐发合].*[】）\\)]",
    "chapterUrl": "uuid@js:\nvar s_uuid = baseUrl.replace(/.*source_uuid=/,'')\n'/reader/book/content.json?source_uuid='+s_uuid+'&content_uuid='+result;",
    "isVip": "$.needPay"
  },
  "searchUrl": "/search/book/data.json?key={{key}}",
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
