// @name 企鹅音乐（优++）
// @version 2025.10.24
// @author converted
// @url 云智api
// @enabled true
// @tags 音乐,书源,音频,converted
// @description by.QQ用户：2234807128&194898187
// @description 源社区用户：未知&@聆听月与悦

const LEGADO_SOURCE = {
  "bookSourceComment": "by.QQ用户：2234807128&194898187\n     源社区用户：未知&@聆听月与悦\n",
  "bookSourceGroup": "音乐 书源",
  "bookSourceName": "企鹅音乐（优++）",
  "bookSourceType": 1,
  "bookSourceUrl": "云智api",
  "customButton": false,
  "customOrder": 308,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": false,
  "eventListener": false,
  "lastUpdateTime": 1761316459012,
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "$.artist",
    "coverUrl": "$.cover",
    "init": "$.data",
    "intro": "&nbsp;\n📕 专辑：{{$.album}}\n🕰️ 发布日期：{{$.release_date}}",
    "kind": "$.duration",
    "name": "$.title"
  },
  "ruleContent": {},
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.artist",
    "bookList": "$..songs[*]",
    "bookUrl": "{{baseUrl}}&n={{$.number}}",
    "checkKeyWord": "周杰伦",
    "intro": "&lrm;\n📕 专辑：{{$.album}}",
    "name": "$.name"
  },
  "ruleToc": {
    "chapterList": "$..formats[*]",
    "chapterName": "音质：{{$.quality}}",
    "chapterUrl": "$.url",
    "updateTime": "{{$.size}} • {{$.bitrate}}"
  },
  "searchUrl": "https://api.jkyai.top/API/qqmusic.php?msg={{key}}",
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
