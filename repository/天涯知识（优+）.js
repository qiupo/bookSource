// @name 天涯知识（优+）
// @version 2025.12.21
// @author converted
// @url http://3g.sbkk8.com
// @enabled true
// @tags 小说,书源,converted
// @description // Error: 凑合用，搜索资源大概率失效
// @description Sra.ᚿᚫ⸙

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 凑合用，搜索资源大概率失效\n\nSra.ᚿᚫ⸙",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "天涯知识（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://3g.sbkk8.com#",
  "customButton": false,
  "customOrder": 86,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "诸子百家::http://3g.sbkk8.com/gudai/zhuzibaijia/\n古代文学::http://3g.sbkk8.com/gudai/\n古代医书::http://3g.sbkk8.com/gudai/gudaiyishu/\n佛经大全::http://3g.sbkk8.com/gudai/fujingdaquan/\n故事会::http://3g.sbkk8.com/gushihui/\n易经::http://3g.sbkk8.com/gudai/yijingshuji/\n史书::http://3g.sbkk8.com/gudai/shishu/",
  "lastUpdateTime": 1766358970290,
  "respondTime": 180973,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "tag.p@textNodes##2016|- 版权所有|声明 :本网站.*|"
  },
  "ruleExplore": {
    "bookList": "class.booklist@li",
    "bookUrl": "a@href",
    "coverUrl": "img@src",
    "name": "a@text"
  },
  "ruleSearch": {
    "bookList": "class.result",
    "bookUrl": "tag.a@href",
    "checkKeyWord": "的画像",
    "intro": "text",
    "name": "tag.a@text"
  },
  "ruleToc": {
    "chapterList": ":a href=\"(.*?)\"\\s+target=\"_blank\">(.*?)<",
    "chapterName": "$2",
    "chapterUrl": "$1"
  },
  "searchUrl": "http://zhannei.baidu.com/cse/search?s=5140549751047532462&nsid=&q={{key}}&searchtype=title&isNeedCheckDomain=1&jump=1",
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
