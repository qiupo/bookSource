// @name 轻之文库（优+）
// @version 2025.09.16
// @author converted
// @url https://www.linovel.net:443/
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "轻之文库（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.linovel.net:443/",
  "customButton": false,
  "customOrder": 113,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "全部小说::https://www.linovel.net/cat/-1.html?sort=hot&sign=-1&page={{page}}\n文库精选::https://www.linovel.net/cat/2000.html?sort=hot&sign=-1&page={{page}}\n超能力::https://www.linovel.net/cat/12.html?sort=hot&sign=-1&page={{page}}\n幻想::/cat/1.html?sort=hot&sign=-1&page={{page}}\n战斗::https://www.linovel.net/cat/2.html?sort=hot&sign=-1&page={{page}}\n后宫::https://www.linovel.net/cat/8.html?sort=hot&sign=-1&page={{page}}\n恋爱::https://www.linovel.net/cat/3.html?sort=hot&sign=-1&page={{page}}\n异界::https://www.linovel.net/cat/4.html?sort=hot&sign=-1&page={{page}}\n搞笑::https://www.linovel.net/cat/5.html?sort=hot&sign=-1&page={{page}}\n日常::https://www.linovel.net/cat/6.html?sort=hot&sign=-1&page={{page}}\n校园::https://www.linovel.net/cat/7.html?sort=hot&sign=-1&page={{page}}\n科幻::https://www.linovel.net/cat/10.html?sort=hot&sign=-1&page={{page}}\n治愈::https://www.linovel.net/cat/11.html?sort=hot&sign=-1&page={{page}}\n节操::https://www.linovel.net/cat/13.html?sort=hot&sign=-1&page={{page}}\n妖怪::https://www.linovel.net/cat/14.html?sort=hot&sign=-1&page={{page}}\n恐怖::https://www.linovel.net/cat/15.html?sort=hot&sign=-1&page={{page}}\n妹控::https://www.linovel.net/cat/16.html?sort=hot&sign=-1&page={{page}}\n伪娘::https://www.linovel.net/cat/17.html?sort=hot&sign=-1&page={{page}}\n乙女::https://www.linovel.net/cat/19.html?sort=hot&sign=-1&page={{page}}\n同人::https://www.linovel.net/cat/20.html?sort=hot&sign=-1&page={{page}}\n百合::https://www.linovel.net/cat/21.html?sort=hot&sign=-1&page={{page}}\n悬疑::https://www.linovel.net/cat/104.html?sort=hot&sign=-1&page={{page}}\n偶像::https://www.linovel.net/cat/22.html?sort=hot&sign=-1&page={{page}}\n魔法少女::https://www.linovel.net/cat/18.html?sort=hot&sign=-1&page={{page}}",
  "lastUpdateTime": 1758062458467,
  "respondTime": 1168,
  "ruleBookInfo": {
    "intro": "class.about-text@html##(^|[。！？]++”?+)##$1<br>"
  },
  "ruleContent": {
    "content": "class.l@textNodes"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "class.book-extra@text##丨.*",
    "bookList": "class.rank-book||class.rank-book-list@tag.a",
    "bookUrl": "tag.a@href||href",
    "coverUrl": "img@src",
    "intro": "class.book-intro@textNodes",
    "kind": "class.book-tags@text",
    "name": "class.book-name@text||class.title@text"
  },
  "ruleToc": {
    "chapterList": "class.chapter",
    "chapterName": "tag.a@text",
    "chapterUrl": "tag.a@href"
  },
  "searchUrl": "https://www.linovel.net:443/search?kw={{key}}",
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
