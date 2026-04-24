// @name 茶杯狐狸（优+++）
// @version 2026.02.26
// @author converted
// @url https://www.cupfox7.com/
// @enabled true
// @tags 影视,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "影视 书源",
  "bookSourceName": "茶杯狐狸（优+++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.cupfox7.com/",
  "customButton": false,
  "customOrder": 269,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "国漫::vodshow/guochandongman/page/{{page}}.html\n日韩::vodshow/rihandongman/page/{{page}}.html\n欧美::vodshow/oumeidongman/page/{{page}}.html",
  "lastUpdateTime": 1772086435308,
  "respondTime": 4787,
  "ruleBookInfo": {
    "intro": "class.stui-content__detail@p@text##详情$##"
  },
  "ruleContent": {
    "content": "@js:\nvar pUrl = result.match(/\"url_next\":\"([^\"]*)\"/)\npUrl = pUrl[1].replace(/\\\\/g, \"\");\nif (cache.get(book.name+title)){\n    try{\n        java.startBrowserAwait(pUrl, title);\n    }catch(err){\n       \"其实...1+1=2!\"\n    }\n}else{\n    cache.put(book.name+title,true, 31536000);\n}\n\"请刷新查看内容\";"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.stui-vodlist[0]@tag.li",
    "bookUrl": "tag.a@href",
    "checkKeyWord": "魔王",
    "coverUrl": "tag.a@data-original",
    "kind": "tag.a@tag.span@text",
    "name": "tag.a@title"
  },
  "ruleToc": {
    "chapterList": "id.playlist1@tag.ul@tag.li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "vodsearch/{{key}}----------{{page}}---.html",
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
