// @name 霓虹漫画（优）
// @version 2025.10.04
// @author converted
// @url https://rawkuma.com/
// @enabled true
// @tags 漫画,书源,图片,converted
// @description 感谢酷安大佬 “莫宁哦” 做的源
// @description 纯英文

const LEGADO_SOURCE = {
  "bookSourceComment": "感谢酷安大佬 “莫宁哦” 做的源\n纯英文",
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "霓虹漫画（优）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://rawkuma.com/",
  "customButton": false,
  "customOrder": 256,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759568930817,
  "respondTime": 3805,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "#readerarea@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": ".bs",
    "bookUrl": ".bsx@a.0@href",
    "coverUrl": ".limit@img@src",
    "lastChapter": ".epxs@text",
    "name": ".tt@text"
  },
  "ruleToc": {
    "chapterList": "-.clstyle@li",
    "chapterName": ".chapternum.0@text",
    "chapterUrl": ".eph-num@a@href"
  },
  "searchUrl": "page/{{page}}/?s={{key}}",
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
