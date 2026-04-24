// @name 霸王街机（优）
// @version 2025.10.04
// @author converted
// @url https://www.yikm.net/
// @enabled true
// @tags 游戏,书源,小说,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "游戏 书源",
  "bookSourceName": "霸王街机（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.yikm.net/",
  "customButton": false,
  "customOrder": 359,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\"title\":\"🎮游戏分类\",\n\"url\":\"\",\n\"style\":{\n\t\"layout_flexGrow\":1,\n\t\"layout_flexBasisPercent\":1\n\t}},\n{\"title\":\"FC\",\n\"url\":\"/nes?page={{page}}&tag=0&e=0\",\n\"style\":{\n\t\"layout_flexGrow\":1,\n\t\"layout_flexBasisPercent\":0.25\n\t}},\n\t{\"title\":\"SFC\",\n\"url\":\"/nes?page={{page}}&tag=&e=5\",\n\"style\":{\n\t\"layout_flexGrow\":1,\n\t\"layout_flexBasisPercent\":0.25\n\t}},\n\t{\"title\":\"街机\",\n\"url\":\"/nes?page={{page}}&tag=9&e=\",\n\"style\":{\n\t\"layout_flexGrow\":1,\n\t\"layout_flexBasisPercent\":0.25\n\t}},\n\t{\"title\":\"GBA\",\n\"url\":\"/nes?page={{page}}&tag=&e=2\",\n\"style\":{\n\t\"layout_flexGrow\":1,\n\t\"layout_flexBasisPercent\":0.25\n\t}},\n\t{\"title\":\"MG\",\n\"url\":\"/nes?page={{page}}&tag=&e=3\",\n\"style\":{\n\t\"layout_flexGrow\":1,\n\t\"layout_flexBasisPercent\":0.25\n\t}},\n\t{\"title\":\"H5\",\n\"url\":\"/nes?tag=1\",\n\"style\":{\n\t\"layout_flexGrow\":1,\n\t\"layout_flexBasisPercent\":0.25\n\t}}\n\t]",
  "header": "{\n\t\"User-Agent\":\"Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/100.0.4896.127 Mobile Safari/537.36\"\n\t}",
  "lastUpdateTime": 1759580676206,
  "respondTime": 4236,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "@js:\nif(book.durChapterIndex==chapter.index){\n\t\tjava.startBrowser(baseUrl,title)\n\t\tjava.toast('正在加载视频\\n视频加载较慢，请耐心等待')\n\t}\n'<p>【刷新正文】播放<br>或者【点击章节链接】跳转到浏览器播放</p>'"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.card",
    "bookUrl": "a.0@href",
    "coverUrl": "img@src",
    "kind": "class.label@text",
    "name": "class.card-caption@text"
  },
  "ruleToc": {
    "chapterList": "title",
    "chapterName": "text"
  },
  "searchUrl": "/search?name={{key}},{\"webView\": true}",
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
