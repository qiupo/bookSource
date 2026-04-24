// @name 蚂蚁文学（优）
// @version 2026.02.26
// @author converted
// @url https://www.mayiwsk.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "蚂蚁文学（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.mayiwsk.com",
  "customButton": false,
  "customOrder": 155,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1772085528696,
  "respondTime": 1427,
  "ruleBookInfo": {
    "author": "id.info@p.0@text",
    "coverUrl": "id.fmimg@img@src",
    "intro": "id.intro@text##(^|[。！？]+[”」）】]?)##$1<br>",
    "kind": "id.info@p.2@text##.*：|\\s..:.*",
    "lastChapter": "id.info@a.-1@text##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求更票谢乐发订合补加架字修Kk].*?[】）\\)]",
    "name": "id.info@h1@text"
  },
  "ruleContent": {
    "content": "id.content@html",
    "replaceRegex": "##最新网址.*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "td.2@text",
    "bookList": "id.nr",
    "bookUrl": "a.0@href",
    "coverUrl": "a.0@href##.+\\D((\\d+)\\d{3})\\D##/files/article/image/$2/$1/$1s.jpg###",
    "kind": "td.5:4@text",
    "lastChapter": "td.1@text##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求更票谢乐发订合补加架字修Kk].*?[】）\\)]",
    "name": "td.0@text",
    "wordCount": "td.3@text"
  },
  "ruleToc": {
    "chapterList": "id.list@dd@a",
    "chapterName": "text##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求更票谢乐发订合补加架字修Kk].*?[】）\\)]",
    "chapterUrl": "href"
  },
  "searchUrl": "/modules/article/search.php,{\n  \"method\": \"post\",\n  \"body\": \"searchkey={{key}}&searchtype=articlename\"\n}",
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
