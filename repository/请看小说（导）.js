// @name 请看小说（导）
// @version 2025.12.21
// @author converted
// @url https://www.qinkan.net
// @enabled true
// @tags 小说,书源,文件,converted
// @description 注：小说可下载到本地，若想下载到本地看，把左上角的类型“文本”改为“文件”。

const LEGADO_SOURCE = {
  "bookSourceComment": "注：小说可下载到本地，若想下载到本地看，把左上角的类型“文本”改为“文件”。",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "请看小说（导）",
  "bookSourceType": 3,
  "bookSourceUrl": "https://www.qinkan.net",
  "customButton": false,
  "customOrder": 210,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1766352763959,
  "respondTime": 2647,
  "ruleBookInfo": {
    "author": "text.书籍作者@text##书籍作者：",
    "coverUrl": "class.detail_pic@img@src",
    "downloadUrls": "class.downButton@href",
    "intro": "class.showinfo@textNodes",
    "name": "class.detail_right@text",
    "wordCount": "text.文件大小@text"
  },
  "ruleContent": {},
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.s@text##作者：|大小.*",
    "bookList": "tag.li",
    "bookUrl": "tag.a@href",
    "checkKeyWord": "斗破苍穹",
    "coverUrl": "tag.img@src",
    "intro": "class.u@text",
    "name": "a@text##《|》"
  },
  "ruleToc": {},
  "searchUrl": "/e/search/index.php,{\n  \"body\": \"show=title&classid=0&keyboard={{key}}&Submit22=搜索\",\n  \"charset\": \"GB2312\",\n  \"method\": \"POST\"\n}",
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
