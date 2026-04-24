// @name 镇魂小说（优++）
// @version 2025.12.21
// @author converted
// @url https://www.zhenhunxiaoshuo.com/chaxun.html
// @enabled true
// @tags 小说,书源,converted
// @description //By情无羁25.04.26

const LEGADO_SOURCE = {
  "bookSourceComment": "//By情无羁25.04.26",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "镇魂小说（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.zhenhunxiaoshuo.com/chaxun.html",
  "customButton": false,
  "customOrder": 30,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\nvar result = [];\njava.toast(\"🔥正在刷新列表,请稍等！\");\nvar push = (title, url, size) => result.push({\n    \"title\": title,\n    \"url\": url,\n    \"style\": {\n        \"layout_flexGrow\": 1,\n        \"layout_flexBasisPercent\": size\n    }\n});\nvar baseUrl = \"https://www.zhenhunxiaoshuo.com/chaxun.html\";\nvar tag = java.ajax(baseUrl);\nif (tag) {\n    var a = org.jsoup.Jsoup.parse(tag).select(\".col-md-9 a\");\n    push(\"🔥作者集🔥\", null, 1);\n    for (var i = 0; i < a.length ; i++) {\n        var title = a[i].text();\n        var url = a[i].attr(\"href\");\n        var size = 0.25;\n        title = String(title).replace(/\\s/g, \"\");\n        push(title, url, size);\n    }\n} else {\n  java.toast(\"🤔列表刷新失败！！！\");     \n} \nJSON.stringify(result);",
  "lastUpdateTime": 1766351135638,
  "respondTime": 5221,
  "ruleBookInfo": {
    "intro": ".focusbox-text@text"
  },
  "ruleContent": {
    "content": ".article-content@html"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "<js>\nif (result.match(/作品集/)){\n\tresult=java.getElements('tbody tr td a')\n\t}else {\n\t\tresult=java.getElements('h1')\n\t\t}\n</js>",
    "bookUrl": "href",
    "checkKeyWord": "淮上",
    "name": "text"
  },
  "ruleToc": {
    "chapterList": ".excerpts article a||h1",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://www.zhenhunxiaoshuo.com/{{key}}",
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
