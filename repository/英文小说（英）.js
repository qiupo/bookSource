// @name 英文小说（英）
// @version 2025.10.06
// @author converted
// @url http://novel.tingroom.com/wap
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "英文小说（英）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://novel.tingroom.com/wap",
  "customButton": false,
  "customOrder": 222,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "经典小说::http://novel.tingroom.com/wap/?moduleid=1025&catid=1&type=2\n双语小说::http://novel.tingroom.com/wap/index.php?moduleid=1025&catid=33&type=2\n名人传记::http://novel.tingroom.com/wap/index.php?moduleid=1025&catid=32&type=2\n励志小说::http://novel.tingroom.com/wap/index.php?moduleid=1025&catid=6&type=2\n短篇小说::http://novel.tingroom.com/wap/index.php?moduleid=1025&catid=31&type=2\n儿童小说::http://novel.tingroom.com/wap/index.php?moduleid=1025&catid=29&type=2\n科幻小说::http://novel.tingroom.com/wap/index.php?moduleid=1025&catid=30&type=2\n宗教小说::http://novel.tingroom.com/wap/index.php?moduleid=1025&catid=28&type=2",
  "lastUpdateTime": 1759754353098,
  "loginUrl": "{\n  \"url\": \"null\"\n}",
  "respondTime": 10424,
  "ruleBookInfo": {
    "author": "class.novle@tag.a@text"
  },
  "ruleContent": {
    "content": "id.nr@html",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.zong_list@class.list_1",
    "bookUrl": "tag.a.1@href",
    "coverUrl": "tag.img@src",
    "intro": "tag.span@text",
    "name": "tag.a.1@text"
  },
  "ruleToc": {
    "chapterList": "class.listtxt@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "http://novel.tingroom.com/wap/&& tag.a@href"
  },
  "searchUrl": "http://novel.tingroom.com/wap/index.php?moduleid=1025&type=2&kw={{key}},{\n  \"charset\": \"utf-8\"\n}",
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
