// @name 酸奶漫画
// @version 2025.10.02
// @author converted
// @url https://m.1kkk.com
// @enabled true
// @tags 正版漫画,书源,图片,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "正版漫画 书源",
  "bookSourceName": "酸奶漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://m.1kkk.com",
  "customButton": false,
  "customOrder": 452,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759431728809,
  "respondTime": 632,
  "ruleBookInfo": {
    "author": "p.detail-main-info-author@tag.a@text",
    "coverUrl": "img.detail-main-bg@src",
    "intro": "p.detail-desc@text",
    "kind": "p.detail-main-info-class@tag.a@text",
    "lastChapter": "ul.detail-list-select@tag,li.0@text",
    "name": "p.detail-main-info-title@text"
  },
  "ruleContent": {
    "content": "@js:header={\"Referer\":baseUrl};\nheaders={\"headers\":JSON.stringify(header)};\neval(result.match(/eval(.*?)\\{\\}\\)\\)/)[0])\nvar image_list = []\nnewImgs.map(item=>{\n    image_list.push('<img src=\"'+item+','+JSON.stringify(headers)+'\">')\n})\nimage_list.join(\"\\n\")"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "tag.p.0@text",
    "bookList": "ul.book-list@tag.li",
    "bookUrl": "tag.a.0@href",
    "coverUrl": "tag.img@src",
    "intro": "p.book-list-info-desc@text",
    "name": "p.book-list-info-title@text"
  },
  "ruleToc": {
    "chapterList": "ul.detail-list-select@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href",
    "isVip": "@js:var vip_bool = result.select('img').hasClass('detail-list-lock');\nif(!vip_bool){\nvip_bool = result.select('img').hasClass('detail-list-2-info-right');\n}\nvip_bool;"
  },
  "searchUrl": "https://m.1kkk.com/search?title={{key}}&language=1",
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
