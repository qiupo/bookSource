// @name 中华诗词（优+）
// @version 2025.10.04
// @author converted
// @url https://m.zhonghuashici.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "中华诗词（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.zhonghuashici.com",
  "bookUrlPattern": "https://m.zhonghuashici.com/show-\\d+-\\d+.html",
  "customButton": false,
  "customOrder": 79,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"首页\",\"url\":\"/\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1.0}},{\"title\":\"古诗\",\"url\":\"/list-1-{{page-1}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"宋词\",\"url\":\"/list-2-{{page-1}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"元曲\",\"url\":\"/list-3-{{page-1}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"文言文\",\"url\":\"/list-4-{{page-1}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"诗人\",\"url\":\"/list-5-{{page-1}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"典籍\",\"url\":\"/list-6-{{page-1}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},{\"title\":\"故事\",\"url\":\"/list-7-{{page-1}}.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}}]",
  "header": "{\n\t\"User-Agent\": \"Mozilla/5.0 (Linux; Android 11; Phh-Treble vanilla Build/RQ3A.211001.001;) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.91 Safari/537.36\"\n\t}",
  "lastUpdateTime": 1759589191935,
  "respondTime": 2316,
  "ruleBookInfo": {
    "author": "span.0@text##作者：",
    "kind": "span.1@text",
    "name": "h1@text"
  },
  "ruleContent": {
    "content": ".box div!-1@html",
    "replaceRegex": "##(\\d+|-|:)"
  },
  "ruleExplore": {
    "author": "a@text",
    "bookList": "ul li h2||ul li a[8:]",
    "bookUrl": "a@href",
    "coverUrl": "@js:'https://z3.ax1x.com/2021/08/22/fzzNBq.png'",
    "name": "a@text"
  },
  "ruleSearch": {
    "bookList": ".r",
    "bookUrl": "a.1@href",
    "checkKeyWord": "蝶恋花",
    "coverUrl": "@js:'https://z3.ax1x.com/2021/08/22/fzzNBq.png'",
    "kind": "a.0@text",
    "name": "a.1@text"
  },
  "ruleToc": {
    "chapterList": "tag.html",
    "chapterName": "h1@text"
  },
  "searchUrl": "/e/search/index.php,{\n  \"body\": \"keyboard={{key}}&show=title&tempid=1\",\n  \"charset\": \"UTF-8\",\n  \"method\": \"POST\"\n}",
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
