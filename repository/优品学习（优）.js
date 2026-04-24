// @name 优品学习（优）
// @version 2025.12.23
// @author converted
// @url https://www.ypppt.com
// @enabled true
// @tags 特殊,书源,文件,converted
// @description // Error: 下载链接为空
// @description 更新：
// @description 使用说明

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 下载链接为空\n\n更新：\n使用说明",
  "bookSourceGroup": "特殊 书源",
  "bookSourceName": "优品学习（优）",
  "bookSourceType": 3,
  "bookSourceUrl": "https://www.ypppt.com",
  "customButton": false,
  "customOrder": 336,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1766465452852,
  "respondTime": 180556,
  "ruleBookInfo": {
    "intro": "@js:\nvar lis = {\n  比例:(String(src).match(/比例：.*?\\n/)),\n  页数:(String(src).match(/页数：.*?\\n/)),\n  格式:(String(src).match(/格式：.*?\\n/)),\n  大小:(String(src).match(/大小：.*?\\n/)),\n  日期:(String(src).match(/日期：.*?\\n/)),\n  效果:(String(src).match(/效果：.*?\\n/))\n}\n\"    \" + lis['比例'] + lis['页数'] + lis['格式'] + lis['大小'] + lis['日期'] + lis['效果']",
    "tocUrl": "class.down-button@href"
  },
  "ruleContent": {
    "content": "html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.posts clear@li",
    "bookUrl": "a.1@href",
    "coverUrl": "a.0@img@src",
    "kind": "div@span.0@a@text",
    "name": "a.1@text"
  },
  "ruleToc": {
    "chapterList": "class.down clear@li",
    "chapterName": "a@text##2##1"
  },
  "searchUrl": "https://www.ypppt.com/p/search.php?kwtype=1&q={{key}}",
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
