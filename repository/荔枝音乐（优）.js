// @name 荔枝音乐（优）
// @version 2025.10.02
// @author converted
// @url https://m.lizhi.fm
// @enabled true
// @tags 音乐,书源,音频,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "音乐 书源",
  "bookSourceName": "荔枝音乐（优）",
  "bookSourceType": 1,
  "bookSourceUrl": "https://m.lizhi.fm",
  "customButton": false,
  "customOrder": 315,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1759439189189,
  "respondTime": 1369,
  "ruleBookInfo": {
    "author": "$..userVoice.name",
    "name": "$..voiceInfo.name"
  },
  "ruleContent": {
    "content": "$..voicePlayProperty.trackUrl",
    "imageStyle": "0"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "$.data.*",
    "bookUrl": "$.voiceInfo.voiceId@js:\"https://m.lizhi.fm/vodapi/voice/info/\"+result",
    "coverUrl": "$.voiceInfo.imageUrl",
    "intro": "$.voiceDetailProperty.text",
    "kind": "$.voiceInfo.lableName",
    "name": "$.voiceInfo.name"
  },
  "ruleToc": {
    "chapterList": "$.data[*]",
    "chapterName": "$..voiceInfo.name",
    "chapterUrl": "-"
  },
  "searchUrl": "https://m.lizhi.fm/vodapi/search/voice?deviceId=h5-f93e74ac-0065-8207-4853-75dec8585db3&keywords={{key}}&page={{page}}&receiptData=CAASJ2g1LWY5M2U3NGFjLTAwNjUtODIwNy00ODUzLTc1ZGVjODU4NWRiMyj%2FhvGLxy0wDDgF",
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
