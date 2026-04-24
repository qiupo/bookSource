// @name 多多书院（优）
// @version 2025.12.21
// @author converted
// @url https://www.txtduo.net/
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "多多书院（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.txtduo.net/##Rosiapng",
  "customButton": false,
  "customOrder": 136,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "玄幻魔法::/sort/1/{{page}}.html\n武侠修真::/sort/2/{{page}}.html\n都市言情::/sort/3/{{page}}.html\n历史军事::/sort/4/{{page}}.html\n侦探推理::/sort/5/{{page}}.html\n网游动漫::/sort/6/{{page}}.html\n科幻小说::/sort/7/{{page}}.html\n恐怖灵异::/sort/8/{{page}}.html\n散文诗词::/sort/9/{{page}}.html\n其他类型::/sort/10/{{page}}.html\n",
  "lastUpdateTime": 1766340793649,
  "respondTime": 26312,
  "ruleBookInfo": {
    "coverUrl": "//div[@id='fming']//img/@src",
    "intro": "//div[@id='intro]/p/text()",
    "lastChapter": "//div[@id='info']/p[1]/a/text()"
  },
  "ruleContent": {
    "content": "//*[@id=\"content\"]/p/text()"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "//div[@class='info']//span/text() ##作者：",
    "bookList": "//div[@id='alistbox']",
    "bookUrl": "//h2/a/@href",
    "checkKeyWord": "闪婚",
    "coverUrl": "//img/@src",
    "intro": "//div[@class='intro']/text()",
    "name": "//h2/a/text()"
  },
  "ruleToc": {
    "chapterList": "//div[@id='list']/dl/dt[2]/following::dd",
    "chapterName": "//a/text()",
    "chapterUrl": "//a/@href"
  },
  "searchUrl": "https://www.txtduo.net/search.html?searchkey={{key}}",
  "weight": 60
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
