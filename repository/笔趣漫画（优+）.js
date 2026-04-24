// @name 笔趣漫画（优+）
// @version 2025.12.21
// @author converted
// @url https://www.biqug.org/
// @enabled true
// @tags 漫画,书源,图片,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "笔趣漫画（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.biqug.org/",
  "customButton": false,
  "customOrder": 233,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\"title\":\"全部榜单\",\"url\":\"\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}},\n{\"title\":\"年度榜\",\"url\":\"/index.php/custom/hot\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"本月榜\",\"url\":\"/index.php/custom/month\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"本周榜\",\"url\":\"/index.php/custom/week\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"今日榜\",\"url\":\"/index.php/custom/day\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"上升榜\",\"url\":\"/index.php/custom/ascension\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"评分榜\",\"url\":\"/index.php/custom/score\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"收藏榜\",\"url\":\"/index.php/custom/fav\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"打赏榜\",\"url\":\"/index.php/custom/reward\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"月票榜\",\"url\":\"/index.php/custom/ticket\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},\n{\"title\":\"更新\",\"url\":\"/index.php/custom/update\",\"style\":{\"layout_flexBasisPercent\":1,\"layout_flexGrow\":1}}]",
  "lastUpdateTime": 1766317964270,
  "respondTime": 2512,
  "ruleBookInfo": {
    "author": ".name a@text",
    "coverUrl": ".de-info__cover img@src##!cover-400",
    "intro": "{{@@p.intro@text}}\n{{@@span.text:nth-of-type(n+2)@text}}",
    "kind": "b a@text",
    "name": "p.j-comic-title"
  },
  "ruleContent": {
    "content": "img.lazy-read@html##!cover-800"
  },
  "ruleExplore": {
    "author": ".comic-author a@text",
    "bookList": "div.top-list__box-item||.active div.common-comic-item",
    "bookUrl": ".comic__title a@href",
    "coverUrl": "img.lazy@data-original",
    "intro": "p.comic-feature@text",
    "lastChapter": "span.hl@text||a.hl@text",
    "name": ".comic__title a@text",
    "wordCount": "p.comic-count@text"
  },
  "ruleSearch": {},
  "ruleToc": {
    "chapterList": "a.j-chapter-link",
    "chapterName": "text",
    "chapterUrl": "href"
  },
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
