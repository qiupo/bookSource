// @name 饭角有声（优）
// @version 2025.12.17
// @author converted
// @url https://api.fanjiao.co/
// @enabled true
// @tags 听书,书源,音频,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "听书 书源",
  "bookSourceName": "饭角有声（优）",
  "bookSourceType": 1,
  "bookSourceUrl": "https://api.fanjiao.co/",
  "customButton": false,
  "customOrder": 289,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1765999991682,
  "respondTime": 756,
  "ruleBookInfo": {
    "name": "book.name"
  },
  "ruleContent": {},
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "$.data.list[*]",
    "bookUrl": "<js>\nbody = \"album_id={{$.album_id}}\";\nurl = \"https://api.fanjiao.co/walkman/api/album/audio?\"+body;\nsign = java.md5Encode(body+\"879f30c4b1641142c6192acc23cfb733\")\nheaders = \n\t{\"headers\":{\"signature\":String(sign)}}\nurl+\",\"+JSON.stringify(headers)\n</js>",
    "coverUrl": "$.cover",
    "intro": "$.description",
    "name": "$.name"
  },
  "ruleToc": {
    "chapterList": "$..audios_list[*]",
    "chapterName": "$.name",
    "chapterUrl": "$.src"
  },
  "searchUrl": "<js>\nbody = \"keyword=\"+key+\"&page=\"+page+\"&size=20&type=2\";\nurl = \"https://api.fanjiao.co/walkman/api/search/keyword?\"+body;\nsign = java.md5Encode(body+\"879f30c4b1641142c6192acc23cfb733\")\nheaders = \n\t{\"headers\":{\"signature\":String(sign)}}\nurl+\",\"+JSON.stringify(headers)\n</js>",
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
