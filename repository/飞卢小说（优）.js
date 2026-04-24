// @name 飞卢小说（优）
// @version 2025.10.04
// @author converted
// @url https://wap.faloo.com
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description 正版小说网站，VIP章节要登录购买

const LEGADO_SOURCE = {
  "bookSourceComment": "正版小说网站，VIP章节要登录购买",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "飞卢小说（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://wap.faloo.com#111",
  "customButton": false,
  "customOrder": 366,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759573343655,
  "loginUrl": "https://u.faloo.com/regist/login.aspx?backUrl=https://wap.faloo.com/",
  "respondTime": 1010,
  "ruleBookInfo": {
    "author": ".color999@tag.a.0@text",
    "coverUrl": "class.cover_box@tag.img@src",
    "intro": "id.novel_intro@tag.p@text",
    "kind": ".color999@tag.a.1@text&&class.tagList clearfix@tag.a.0@text&&class.tagList clearfix@tag.a.1@text&&class.tagList clearfix@tag.a.2@text",
    "lastChapter": ".newNode@text",
    "name": ".name@text",
    "tocUrl": "class.display_flex_between@tag.a.1@href",
    "wordCount": "class.textHide.3@textNodes##\\d+万人"
  },
  "ruleContent": {
    "content": ".nodeContent@p@html",
    "imageStyle": "FULL",
    "replaceRegex": "##本书来自.*|本书由飞卢.*|用飞卢.*"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.nl_r1_author@tag.a.0@text",
    "bookList": "class.novelList@li",
    "bookUrl": "class.bl_r1_tit@tag.a@href",
    "coverUrl": "class.nl_r1@tag.a@tag.img@src",
    "intro": "class.bl_r1_into@tag.a@text",
    "kind": "class.nl_r1_author@tag.a.1@text&&class.nl_tags fr@tag.a.0@text&&class.nl_tags fr@tag.a.1@text",
    "name": "class.bl_r1_tit@tag.a@text",
    "wordCount": "class.nl_r2 clearfix@tag.i@text"
  },
  "ruleToc": {
    "chapterList": ".v_nodeList li",
    "chapterName": "i@html&&a@text##[\\(（【].*?[求更谢乐发订合补].*?[】）\\)]\n<js>result.replace(/\\<i class\\=\\\"icon_close\\\"\\>\\<\\/i\\>/,'✿·')</js>",
    "chapterUrl": "a@href"
  },
  "searchUrl": "https://wap.faloo.com/search_1_{{page}}.html?k={{key}},{\n  \"charset\": \"GB2312\"\n}",
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
