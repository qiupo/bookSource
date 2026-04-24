// @name 猫耳有声（优）
// @version 2025.10.02
// @author converted
// @url https://www.hhlqilongzhu.cn
// @enabled true
// @tags 听书,书源,音频,converted
// @description dy天天的鸟蛋蛋
// @description //	可搜索猫耳的广播剧
// @description //  并获取免费音频
// @description //	分三步获取

const LEGADO_SOURCE = {
  "bookSourceComment": "dy天天的鸟蛋蛋\n//\t可搜索猫耳的广播剧\n//  并获取免费音频\n//\t分三步获取",
  "bookSourceGroup": "听书 书源",
  "bookSourceName": "猫耳有声（优）",
  "bookSourceType": 1,
  "bookSourceUrl": "https://www.hhlqilongzhu.cn",
  "customButton": false,
  "customOrder": 300,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759386318919,
  "respondTime": 1302,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "url"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "Nickname",
    "bookList": "data[*]",
    "bookUrl": "https://www.hhlqilongzhu.cn/api/ximalaya/maoer_app.php?albumId={{$.albumId}}",
    "coverUrl": "cover",
    "intro": "intro",
    "kind": "type",
    "name": "title"
  },
  "ruleToc": {
    "chapterList": "data[*]",
    "chapterName": "title",
    "chapterUrl": "/api/ximalaya/maoer_app.php?soundid={{$.soundid}}",
    "updateTime": "intro"
  },
  "searchUrl": "/api/ximalaya/maoer_app.php?name={{key}}",
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
