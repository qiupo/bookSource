// @name 全本小说（优+）
// @version 2025.12.21
// @author converted
// @url https://m.qbxsba.com
// @enabled true
// @tags 小说,书源,converted
// @description // Error: 都是老书

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 都是老书",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "全本小说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.qbxsba.com",
  "customButton": false,
  "customOrder": 90,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "玄幻魔幻::https://m.qbxsba.com/category-1-{{page}}/\n都市娱乐::https://m.qbxsba.com/category-2-{{page}}/\n仙侠武侠::https://m.qbxsba.com/category-3-{{page}}/\n历史军事::https://m.qbxsba.com/category-4-{{page}}/\n女频言情::https://m.qbxsba.com/category-5-{{page}}/\n游戏竞技::https://m.qbxsba.com/category-6-{{page}}/\n科幻灵异::https://m.qbxsba.com/category-7-{{page}}/\n综合其他::https://m.qbxsba.com/category-8-{{page}}/\n全部小说::https://m.qbxsba.com/category-0-{{page}}/",
  "lastUpdateTime": 1766359167112,
  "respondTime": 184734,
  "ruleBookInfo": {
    "coverUrl": "class.block_img2@img@src",
    "intro": "class.intro_info@text",
    "lastChapter": "class.block_txt2@p.6@a@text"
  },
  "ruleContent": {
    "content": "id.nr1@html",
    "nextContentUrl": "text.下一页@href",
    "replaceRegex": "##本章未完.*"
  },
  "ruleExplore": {
    "author": "a.1@text",
    "bookList": "class.cover@p",
    "bookUrl": "a.0@href",
    "name": "a.0@text"
  },
  "ruleSearch": {
    "author": "a.2@text",
    "bookList": "class.cover@p",
    "bookUrl": "a.1@href",
    "checkKeyWord": "我的",
    "kind": "a.0@text##\\[|\\]",
    "name": "a.1@text"
  },
  "ruleToc": {
    "chapterList": "class.chapter@li",
    "chapterName": "a@text",
    "chapterUrl": "a@href",
    "nextTocUrl": "id.pagelink@a.11@href"
  },
  "searchUrl": "/modules/article/search.php,{\n  \"body\": \"searchkey={{key}}&action=login&searchtype=all\",\n  \"charset\": \"UTF-8\",\n  \"method\": \"POST\"\n}",
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
