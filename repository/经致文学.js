// @name 经致文学
// @version 2025.10.02
// @author converted
// @url http://www.jingzhi5.com
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description // Error: 发现失效
// @description 20230902修复搜索添加校验关键字:上门龙婿（否则无正文）By_zhbyjm7783

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 发现失效\n\n20230902修复搜索添加校验关键字:上门龙婿（否则无正文）By_zhbyjm7783",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "经致文学",
  "bookSourceType": 0,
  "bookSourceUrl": "http://www.jingzhi5.com",
  "customButton": false,
  "customOrder": 437,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"全部小说\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=0&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"热血青春\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1001&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"现代都市\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1002&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"悬疑灵异\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1003&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"军事历史\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1004&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"玄幻奇幻\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1005&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"武侠仙侠\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1006&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"网游竞技\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1007&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"热血言情\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1008&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"古代情缘\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1009&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"现代爱情\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1010&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}},{\"title\":\"幻想世界\",\"url\":\"https://mapi.xiaoshuo7.cn/v2/Library.php?cate=1011&status=0&vip=0&update=0&words=0&page={{page}}\",\"style\":{\"layout_flexGrow\":0.25}}]",
  "lastUpdateTime": 1759383092400,
  "loginUrl": "http://www.jingzhi5.com/?s=login&a=index",
  "respondTime": 180837,
  "ruleBookInfo": {
    "author": "class.author-zone column-2@class.right@a@text",
    "coverUrl": "class.pic@img@src",
    "intro": "class.note@text",
    "kind": "h4@span@text##更新",
    "lastChapter": "h4@tag.a.0@text##>>",
    "name": "h2@text",
    "tocUrl": "class.buttons clearfix@tag.a.0@href",
    "wordCount": "class.words@text##字"
  },
  "ruleContent": {
    "content": "class.page-content@html"
  },
  "ruleExplore": {
    "author": "$.author",
    "bookList": "$..books[*]",
    "bookUrl": "http://www.jingzhi5.com/books/{{$.bookId}}",
    "coverUrl": "$.img",
    "kind": "$.update_time&&\n$.label",
    "name": "$.name"
  },
  "ruleSearch": {
    "author": "class.search-info@text##.*作者：",
    "bookList": "class.works-list.0@li",
    "bookUrl": "class.search-info@tag.a.0@href",
    "coverUrl": "img@src",
    "intro": "class.search-sumary@a@text",
    "kind": "class.times@text##最后更新：",
    "name": "class.search-info@tag.a.0@text"
  },
  "ruleToc": {
    "chapterList": "class.float-list fill-block@li",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href",
    "isVip": "@js:result.select('a').hasClass('isvip')",
    "updateTime": "class.time@text"
  },
  "searchUrl": "http://www.jingzhi5.com/?s=search&a=index&keyword={{key}}&page=0&page={{page}}",
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
