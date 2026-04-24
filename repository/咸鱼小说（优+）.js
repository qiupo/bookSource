// @name 咸鱼小说（优+）
// @version 2025.12.21
// @author converted
// @url https://ruarourou.top
// @enabled true
// @tags 小说,书源,converted
// @description 仅发现

const LEGADO_SOURCE = {
  "bookSourceComment": "仅发现",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "咸鱼小说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://ruarourou.top",
  "customButton": false,
  "customOrder": 122,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "归档::https://ruarourou.top/",
  "lastUpdateTime": 1766350159039,
  "respondTime": 90736,
  "ruleBookInfo": {
    "tocUrl": "text.more@href"
  },
  "ruleContent": {
    "content": "class.entry-content@html"
  },
  "ruleExplore": {
    "bookList": "class.menu-item",
    "bookUrl": "a@href",
    "name": "text"
  },
  "ruleSearch": {},
  "ruleToc": {
    "chapterList": "-class.entry-list",
    "chapterName": "h2@text",
    "chapterUrl": "h2@a@href",
    "nextTocUrl": "<js>\nif(!/page\\/2/.test(baseUrl)){\n\tpage = result.match(/第 1 页，共 (\\d+) 页/)[1];\nfor(var list=[],i=2;i<=page;i++){\n\tlist.push(baseUrl+\"page/\"+i+\"/\")\n\t}\nlist\n}\n</js>",
    "updateTime": "class.entry-date@text"
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
