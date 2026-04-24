// @name 追书神器
// @version 2025.12.20
// @author converted
// @url http://zhuishushenqi.com/
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description build 2025-11-22
// @description 雨落星辰
// @description 失效反馈：961955482
// @description 网页版本，只能看前20章，适合找书然后换源看，群里有去广告版本

const LEGADO_SOURCE = {
  "bookSourceComment": "build 2025-11-22\n雨落星辰\n失效反馈：961955482\n网页版本，只能看前20章，适合找书然后换源看，群里有去广告版本",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "追书神器",
  "bookSourceType": 0,
  "bookSourceUrl": "http://zhuishushenqi.com/",
  "customButton": false,
  "customOrder": 371,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nvar result = [];\nvar push = function(title, url, size) {\nresult.push({\"title\": title, \"url\": url, \"style\": {\"layout_flexGrow\": 1, \"layout_flexBasisPercent\": size}});\n};\nvar tagUrl = source.key;\nvar tag = java.ajax(tagUrl);\nvar tagList = org.jsoup.Jsoup.parse(tag).select(\".category-list a\");\nvar tagSize = 0.4;\npush(\"分类\", null, 1);\nfor (var i = 0; i < tagList.length; i++) {\nvar title = org.jsoup.Jsoup.parse(tagList[i]).select(\".name\").text();\nvar url = String(tagList[i].attr(\"href\")) + \"&page={{page}}\"\ntitle = String(title).replace(/\\s/g, \"\");\npush(title, url, tagSize);\n}\nJSON.stringify(result);",
  "lastUpdateTime": 1766264895242,
  "respondTime": 6547,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": ".inner-text@html"
  },
  "ruleExplore": {
    "author": ".author@span.0@text",
    "bookList": ".books-list@a",
    "bookUrl": "href",
    "coverUrl": "img@src",
    "intro": ".desc@text",
    "kind": ".author@span.-1@text",
    "name": "h4@text"
  },
  "ruleSearch": {
    "author": ".author@span.0@text",
    "bookList": ".books-list@.book",
    "bookUrl": "data-href",
    "checkKeyWord": "剑来",
    "coverUrl": "img@src",
    "intro": ".desc@text",
    "kind": ".author@span.-1@text",
    "name": ".name@text"
  },
  "ruleToc": {
    "chapterList": "class.chapter-list.-1@li",
    "chapterName": "a@text##^(.*?)第",
    "chapterUrl": "a@href"
  },
  "searchUrl": "https://www.zhuishushenqi.com/search?val={{key}}",
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
