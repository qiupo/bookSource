// @name 听蛙音乐（优+）
// @version 2025.09.22
// @author converted
// @url https://so.itingwa.com
// @enabled true
// @tags 音乐,书源,音频,converted
// @description // Error: 发现失效

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 发现失效",
  "bookSourceGroup": "音乐 书源",
  "bookSourceName": "听蛙音乐（优+）",
  "bookSourceType": 1,
  "bookSourceUrl": "https://so.itingwa.com",
  "customButton": false,
  "customOrder": 313,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "电台NJ::https://www.itingwa.com/radio/nj/{{page}}",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Linux; Android 9; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36\"\n}",
  "lastUpdateTime": 1758567769512,
  "respondTime": 180802,
  "ruleBookInfo": {
    "intro": "class.top_10 intro@text",
    "tocUrl": "id.item_music@tag.a@href"
  },
  "ruleContent": {
    "content": "class.jp-jplayer@init-data"
  },
  "ruleExplore": {
    "bookList": "class.clearfix nj_list@tag.li",
    "bookUrl": "class.top_15@tag.a@href",
    "coverUrl": "tag.img@src",
    "kind": "class.color2@text",
    "name": "class.font_14@text"
  },
  "ruleSearch": {
    "author": "tag.a.1@text",
    "bookList": "class.music_list@tag.tr",
    "bookUrl": "tag.a@href",
    "coverUrl": "tag.img@src",
    "name": "tag.a.0@text##未知"
  },
  "ruleToc": {
    "chapterList": "class.frame1||class.left@tag.a",
    "chapterName": "tag.h1@text||tag.a@text##下载音乐 支持听蛙",
    "chapterUrl": "href",
    "nextTocUrl": "text.下一页@href"
  },
  "searchUrl": "https://so.itingwa.com/?c=index&m=index&k={{key}}&t=1",
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
