// @name 番茄短剧（优++）
// @version 2025.12.28
// @author converted
// @url https://www.shanhuzs.com/
// @enabled true
// @tags 影视,书源,类型4,converted
// @description 感谢关耳大大

const LEGADO_SOURCE = {
  "bookSourceComment": "感谢关耳大大",
  "bookSourceGroup": "影视 书源",
  "bookSourceName": "番茄短剧（优++）",
  "bookSourceType": 4,
  "bookSourceUrl": "https://www.shanhuzs.com/",
  "customButton": false,
  "customOrder": 272,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"女频恋爱\",\"url\":\"/fqsansw/5---女频恋爱-----{{page}}---.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"反转爽剧\",\"url\":\"/fqsansw/5---反转爽-----{{page}}---.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"脑洞悬疑\",\"url\":\"/fqsansw/5---脑洞悬疑-----{{page}}---.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"年代穿越\",\"url\":\"/fqsansw/5---年代穿越-----{{page}}---.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"古装仙侠\",\"url\":\"/fqsansw/5---古装仙侠-----{{page}}---.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}},{\"title\":\"现代都市\",\"url\":\"/fqsansw/5---现代都市-----{{page}}---.html\",\"style\":{\"layout_flexBasisPercent\":0.25,\"layout_flexGrow\":1}}]",
  "lastUpdateTime": 1766914826709,
  "respondTime": 3376,
  "ruleBookInfo": {
    "kind": ".tag@a@text"
  },
  "ruleContent": {
    "content": "##\"url\":\"(.*)\",\"url_next\"##$1###@js:\nif(book.durChapterIndex==chapter.index){\n\t\tjava.startBrowser(result.replace(/\\\\/g,''),title)\n\t\tjava.toast('正在加载视频\\n视频加载较慢，请耐心等待')\n\t}\n'【刷新正文】播放\\n✅直链:\\n'+result",
    "replaceRegex": "##\\"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "class.col8",
    "bookUrl": "h4@a@href",
    "checkKeyWord": "断亲后",
    "coverUrl": "img@data-original",
    "kind": ".text@text",
    "name": "h4@a@text"
  },
  "ruleToc": {
    "chapterList": "a[href^=\"/fqsanpy/\"]",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/fqsansc/{{key}}----------{{page}}---.html",
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
