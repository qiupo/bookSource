// @name 刺猬猫吧
// @version 2025.10.02
// @author converted
// @url https://wap.ciweimao.com1
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description "error:Timed out waiting for 180000 ms
// @description "error:failed to connect to wap.ciweimao.com/122.112.187.184 (port 443) from /192.168.0.100 (port 41852) after 15000ms
// @description "error:Timed out waiting for 180000 ms
// @description """

const LEGADO_SOURCE = {
  "bookSourceComment": "                    \"error:Timed out waiting for 180000 ms\n                                        \"error:failed to connect to wap.ciweimao.com/122.112.187.184 (port 443) from /192.168.0.100 (port 41852) after 15000ms\n                    \"error:Timed out waiting for 180000 ms\n\"\"\"",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "刺猬猫吧",
  "bookSourceType": 0,
  "bookSourceUrl": "https://wap.ciweimao.com1",
  "customButton": false,
  "customOrder": 435,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "全部::https://wap.ciweimao.com/book_list/0/{{page}}&&玄幻奇幻::https://wap.ciweimao.com/book_list/yijiehuanxiang/{{page}}&&都市青春::https://wap.ciweimao.com/book_list/qingchunrichang/{{page}}&&灵异未知::https://wap.ciweimao.com/book_list/shenmiweizhi/{{page}}&&历史军事::https://wap.ciweimao.com/book_list/zhanzhenglishi/{{page}}&&科幻无限::https://wap.ciweimao.com/book_list/weilaihuanxiang/{{page}}&&游戏竞技::https://wap.ciweimao.com/book_list/youxishijie/{{page}}&&仙侠武侠::https://wap.ciweimao.com/book_list/rexuejingji/{{page}}&&免费同人::https://wap.ciweimao.com/book_list/tongrenfenlei/{{page}}&&女频::https://wap.ciweimao.com/book_list/nvpinfenlei/{{page}}&&\n",
  "lastUpdateTime": 1759387280814,
  "respondTime": 7399,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": ".chapter@textNodes"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".author@text##\\/.*",
    "bookList": ".book-item",
    "bookUrl": "a@href",
    "coverUrl": "img@data-original",
    "intro": ".desc@textNodes",
    "kind": ".author@text##.*?\\/",
    "lastChapter": ".new@text",
    "name": "h3@text"
  },
  "ruleToc": {
    "chapterList": "class.catalogue-list less@li@a",
    "chapterName": "text",
    "chapterUrl": "href@js:result+',{webView:\"true\"}'"
  },
  "searchUrl": "https://wap.ciweimao.com:443/book_list?keyword={{key}}",
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
