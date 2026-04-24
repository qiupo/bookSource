// @name 盐选文库（优+）
// @version 2025.10.02
// @author converted
// @url https://www.yanxuanwk.com
// @enabled true
// @tags 小说,书源,converted
// @description 知乎盐选免费看

const LEGADO_SOURCE = {
  "bookSourceComment": "知乎盐选免费看",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "盐选文库（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.yanxuanwk.com#",
  "customButton": false,
  "customOrder": 76,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "知乎盐选::https://www.yanxuanwk.com/topic/yanxuan/page/{{page}}/\n天涯神帖::https://www.yanxuanwk.com/topic/tianya/page/{{page}}/",
  "lastUpdateTime": 1759387597160,
  "respondTime": 3000,
  "ruleBookInfo": {
    "kind": "class.meta-item meta-category.0@a@text",
    "name": "class.entry-header@h1@text"
  },
  "ruleContent": {
    "content": "class.entry-content clearfix@html",
    "nextContentUrl": "class.typology-link-pages@a@href"
  },
  "ruleExplore": {
    "bookList": "class.typology-posts@article",
    "bookUrl": "a.0@href",
    "intro": "p@text",
    "kind": "a.2@text",
    "name": "a.0@text"
  },
  "ruleSearch": {
    "bookList": "class.typology-posts@article",
    "bookUrl": "a.0@href",
    "intro": "p@text",
    "kind": "a.2@text",
    "name": "a.0@text"
  },
  "ruleToc": {
    "chapterList": "class.entry-header@h1",
    "chapterName": "text"
  },
  "searchUrl": "https://www.yanxuanwk.com/?s={{key}}",
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
