// @name 新人漫画
// @version 2025.12.21
// @author converted
// @url https://xapi.xinmanhua.net
// @enabled true
// @tags 正版漫画,书源,图片,converted
// @description // Error: 搜索失效

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 搜索失效",
  "bookSourceGroup": "正版漫画 书源",
  "bookSourceName": "新人漫画",
  "bookSourceType": 2,
  "bookSourceUrl": "https://xapi.xinmanhua.net",
  "customButton": false,
  "customOrder": 458,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "全部::https://xapi.xinmanhua.net/search/catalog?keyword=all&ischarge=2&isfinish=2&order=0&page={{page}}\n治愈::https://xapi.xinmanhua.net/search/catalog?keyword=治愈&page={{page}}\n日常::https://xapi.xinmanhua.net/search/catalog?keyword=日常&page={{page}}\n都市::https://xapi.xinmanhua.net/search/catalog?keyword=都市&page={{page}}\n悬疑::https://xapi.xinmanhua.net/search/catalog?keyword=悬疑&page={{page}}\n科幻::https://xapi.xinmanhua.net/search/catalog?keyword=科幻&page={{page}}\n奇幻::https://xapi.xinmanhua.net/search/catalog?keyword=奇幻&page={{page}}\n热血::https://xapi.xinmanhua.net/search/catalog?keyword=热血&page={{page}}\n武侠::https://xapi.xinmanhua.net/search/catalog?keyword=武侠&page={{page}}\n古风::https://xapi.xinmanhua.net/search/catalog?keyword=古风&page={{page}}\n恋爱::https://xapi.xinmanhua.net/search/catalog?keyword=恋爱&page={{page}}\n少年::https://xapi.xinmanhua.net/search/catalog?keyword=少年&page={{page}}\n日漫::https://xapi.xinmanhua.net/search/catalog?keyword=日漫&page={{page}}\n原创::https://xapi.xinmanhua.net/search/catalog?keyword=原创&page={{page}}",
  "header": "{\n  \"User-Agent\": \"okhttp/3.10.0\"\n}",
  "lastUpdateTime": 1766317820346,
  "respondTime": 180598,
  "ruleBookInfo": {
    "intro": "@JSon:$.data.attributes.intro&&$.data.attributes.description"
  },
  "ruleContent": {
    "content": "$.data[*].attributes.url\n@js:list=result.split('\\n');\nlist.map(x=>'<img src=\"'+x+'\">').join('\\n')",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "@JSon:$.attributes.author",
    "bookList": "@JSon:$.data.*",
    "bookUrl": "https://xapi.xinmanhua.net/worksinfos/{$.attributes.wid}?include=chapters.digests",
    "coverUrl": "@JSon:$.attributes.logo_detail",
    "kind": "@JSon:$.attributes.workscate",
    "lastChapter": "@JSon:$.attributes.lastctitle",
    "name": "@JSon:$.attributes.title"
  },
  "ruleToc": {
    "chapterList": "$.included.*",
    "chapterName": "$.attributes.title&&$.attributes.intro",
    "chapterUrl": "https://xapi.xinmanhua.net/chapters/{$.id}/qualitywebs"
  },
  "searchUrl": "https://xapi.xinmanhua.net/search/selfdefine,{\n  \"method\": \"POST\",\n  \"body\": \"keyword={{key}}&page={{page}}\"\n}",
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
