// @name 无奈书库（优）
// @version 2025.12.21
// @author converted
// @url https://www.52shuku123.cc
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "无奈书库（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.52shuku123.cc",
  "customButton": false,
  "customOrder": 150,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "全部小说::/all<,-{{page}}>.html\n玄幻灵异::/xuanhuan<,-{{page}}>.html\n近代现代::/xiandai<,-{{page}}>.html\n古代穿越::/gudai<,-{{page}}>.html\n推理悬疑::/xuanyi<,-{{page}}>.html\n网游竞技::/wangyou<,-{{page}}>.html\nＢＬ同人::/bl<,-{{page}}>.html\nＧＬ百合::/gl<,-{{page}}>.html\n全本小说::/wanben/<,{{page}}>",
  "lastUpdateTime": 1766349580273,
  "respondTime": 14153,
  "ruleBookInfo": {
    "author": "a.0@text",
    "coverUrl": "img@src",
    "init": ".book",
    "intro": ".bookintro@text",
    "kind": "span.2@text&&p.-1@text\n##更新时间：",
    "lastChapter": "a.-1@text",
    "name": "h1@text",
    "wordCount": "span.0@text"
  },
  "ruleContent": {
    "content": ".readcontent@textNodes",
    "nextContentUrl": "text.下一页@href"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".author.0@text",
    "bookList": ".bookbox",
    "bookUrl": "a.0@href",
    "checkKeyWord": "我的",
    "coverUrl": "a.0@href##\\D+((\\d+)\\d{3})\\D*##https://tu.52shuku123.org/$2/$1/$1s.jpg###",
    "intro": ".update@ownText",
    "kind": "span.0@text",
    "lastChapter": "a.1@text",
    "name": "h4@text",
    "wordCount": ".author.1@text##字数：|字"
  },
  "ruleToc": {
    "chapterList": "#list-chapterAll dd a",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/modules/article/search.php,{\n  \"body\": \"searchkey={{key}}\",\n  \"charset\": \"GBK\",\n  \"method\": \"POST\"\n}",
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
