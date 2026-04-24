// @name 斗罗小说（优+）
// @version 2025.10.03
// @author converted
// @url https://www.douluodalu1.com
// @enabled true
// @tags 小说,书源,converted
// @description 斗罗大陆全套，仅发现

const LEGADO_SOURCE = {
  "bookSourceComment": "斗罗大陆全套，仅发现",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "斗罗小说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.douluodalu1.com",
  "customButton": false,
  "customOrder": 87,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "斗罗续集::/xuji/\n斗罗同人::/tongren/\n唐家三少::/tangsan/",
  "lastUpdateTime": 1759513222824,
  "respondTime": 406,
  "ruleBookInfo": {
    "author": "[property=\"og:novel:author\"]@content",
    "coverUrl": "[property=\"og:image\"]@content",
    "intro": "[property=\"og:description\"]@content",
    "kind": "[property=\"og:novel:category\"]@content&&[property=\"og:novel:status\"]@content&&[property=\"og:novel:update_time\"]@content##\\s.*",
    "lastChapter": "[property=\"og:novel:latest_chapter_name\"]@content",
    "name": "[property=\"og:novel:book_name\"]@content"
  },
  "ruleContent": {
    "content": "class.m-post@tag.p@text"
  },
  "ruleExplore": {
    "author": "tag.span@text",
    "bookList": "class.pop-book",
    "bookUrl": "tag.a.1@href",
    "coverUrl": "tag.img@_src",
    "name": "tag.h2@text"
  },
  "ruleSearch": {
    "author": "tag.em@text##作者.|\\s.*",
    "bookList": "class.post",
    "bookUrl": "tag.a.0@href",
    "intro": "tag.p@text",
    "name": "tag.a.0@text"
  },
  "ruleToc": {
    "chapterList": "class.xsbox@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
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
