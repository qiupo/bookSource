// @name 鲸云轻说（优+）
// @version 2025.10.02
// @author converted
// @url https://jyapi.jyacg.com
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "鲸云轻说（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://jyapi.jyacg.com#",
  "customButton": false,
  "customOrder": 116,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "最新更新::/web/book_room?channel=0&tag=zxgx&page={{page}}&charge_type=&serial_status=\n人气最高::/web/book_room?channel=0&tag=rqzg&page={{page}}&charge_type=&serial_status=\n人气最高::/web/book_room?channel=0&tag=rqzg&page={{page}}&charge_type=&serial_status=\n收藏最高::/web/book_room?channel=0&tag=sczd&page={{page}}&charge_type=&serial_status=\n收藏最高::/web/book_room?channel=0&tag=ypzg&page={{page}}&charge_type=&serial_status=\n打赏最多::/web/book_room?channel=0&tag=xlzg&page={{page}}&charge_type=&serial_status=",
  "lastUpdateTime": 1759387145094,
  "respondTime": 2836,
  "ruleBookInfo": {
    "author": "author",
    "coverUrl": "cover_image",
    "init": "data",
    "intro": "intro",
    "kind": "book_label##/##,",
    "lastChapter": "new_section&&new_seciton_time##\\n##·",
    "name": "name@put:{bid:id}",
    "tocUrl": "/web/books/directory?books_id={{$.id}}",
    "wordCount": "{{$.total_words}}万字"
  },
  "ruleContent": {
    "content": "data.content##o:"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "author",
    "bookList": "data",
    "bookUrl": "/web/books/detail?id={{$.id}}",
    "coverUrl": "cover_image",
    "intro": "intro",
    "kind": "labels.name&&serial_status",
    "lastChapter": "<js>java.ajax('https://jyapi.jyacg.com/web/books/detail?id={{$.id}}')</js>data.new_section&&data.new_seciton_time##\\n##·",
    "name": "name",
    "wordCount": "{{$.total_words}}万字"
  },
  "ruleToc": {
    "chapterList": "data[*].directory[*]",
    "chapterName": "title",
    "chapterUrl": "/web/books/read?page={{$.page}}&books_id=@get:{bid}"
  },
  "searchUrl": "/web/search?name={{key}}&page={{page}}&type=1",
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
