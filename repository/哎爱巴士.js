// @name 哎爱巴士
// @version 2025.12.19
// @author converted
// @url https://www.ibus233.com/
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description // Error: 搜索失效
// @description //2024.12.13 ◎夜泽川◎

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 搜索失效\n\n//2024.12.13 ◎夜泽川◎",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "哎爱巴士",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.ibus233.com/",
  "customButton": false,
  "customOrder": 385,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js: var result = [];\njava.toast(\"🔥动态获取发现中……\");\nvar push=(title,url,size)=>result.push({\n  \t\"title\": title,\n  \t\"url\": url,\n  \t\"style\": {\n   \"layout_flexGrow\": 1,\n   \"layout_flexBasisPercent\": size\n   }\n });\nvar tag = java.ajax(\"https://www.ibus233.com/category\");\nif (tag) {\na=org.jsoup.Jsoup.parse(tag).select(\".list a\");\npush(\"分类\",null,1)\n    for(i in a){\n        title=a[i].text()\n        url=a[i].attr(\"href\")\n        size=0.4\n        title=String(title).replace(/\\s/,\"\");\n  url=String(url).replace(/^/,\"https:\").replace(/$/i,\"_{{page}}\");\n        push(title,url,size)\n    };\n      } else { \n      java.toast(\"🚫发现获取失败……\");\n}\nJSON.stringify(result);",
  "lastUpdateTime": 1766149197683,
  "respondTime": 182198,
  "ruleBookInfo": {
    "author": ".auth@text",
    "intro": ".intro p@text",
    "kind": ".tags a@text",
    "name": "h1@text",
    "tocUrl": "a[href~=catalog]@href"
  },
  "ruleContent": {
    "content": ".article@html||.nochapter@html",
    "replaceRegex": "##\\n.*华丽的分割线[\\s\\S]*"
  },
  "ruleExplore": {
    "author": "h2@text##.*by",
    "bookList": ".g-list@li",
    "bookUrl": "a.0@href##^##https:",
    "kind": ".tags span@text",
    "name": "h2@text##by.*"
  },
  "ruleSearch": {
    "author": "$.auth",
    "bookList": "$.data.list",
    "bookUrl": "https://www.ibus233.com/novel/{{$._id}}",
    "kind": "$.tags",
    "name": "$.name"
  },
  "ruleToc": {
    "chapterList": ".list a",
    "chapterName": "text",
    "chapterUrl": "href##^##https:",
    "nextTocUrl": ".section-list@a@href##^##https:"
  },
  "searchUrl": "<js>\nsckey = org.jsoup.Jsoup.parse(java.ajax(source.key + \"search\")).select(\".page-search\").attr(\"data-id\");\njava.log(sckey);\nbody = {\n  \"body\": `name=${key}&tags=&type=3&tt=&page_index=${page}&app=2&searchkey=${sckey}`,\n  \"headers\":{\"Referer\":source.key},\n  \"method\": \"POST\"\n}\nresult = source.key + \"api/search/list\" + \",\" + JSON.stringify(body);\nresult;\n</js>",
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
