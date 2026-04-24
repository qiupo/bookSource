// @name 殓师灵异（优）
// @version 2025.10.02
// @author converted
// @url http://www.rulianshi.org/
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "殓师灵异（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.rulianshi.org/#pb1101",
  "customButton": false,
  "customOrder": 171,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759386366650,
  "respondTime": 1353,
  "ruleBookInfo": {
    "author": "class.info@class.small@tag.span.0@text",
    "coverUrl": "class.cover@img@src",
    "intro": "class.info@ownText",
    "kind": "class.info@class.small@tag.span.4@text&&\nclass.info@class.small@tag.span.1@text&&\nclass.info@class.small@tag.span.2@text##分类：|状态：|更新时间：",
    "lastChapter": "class.info@class.small@tag.span.5@a@text",
    "name": "class.info@h2@text",
    "wordCount": "class.info@class.small@tag.span.3@text##字数："
  },
  "ruleContent": {
    "content": "id.content@html##http.*html|请记住本书首发.*org",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.author@text",
    "bookList": "class.bookbox",
    "bookUrl": "h4@a@href",
    "coverUrl": "img@src",
    "lastChapter": "class.update@a@text",
    "name": "h4@a@text"
  },
  "ruleToc": {
    "chapterList": "class.listmain@dd",
    "chapterName": "a@text",
    "chapterUrl": "a@href"
  },
  "searchUrl": "http://www.rulianshi.org/s.php?ie=utf-8&q={{key}}",
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
