// @name 追光阅读（优）
// @version 2025.12.21
// @author converted
// @url http://touchlife.cootekservice.com
// @enabled true
// @tags 小说,书源,converted
// @description // Error: 搜索失效

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 搜索失效",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "追光阅读（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "http://touchlife.cootekservice.com",
  "customButton": false,
  "customOrder": 132,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "现代都市::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=4\n东方玄幻::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=13\n武侠仙侠::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=12\n历史架空::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=17\n科幻末世::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=16\n游戏竞技::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=18\n西方玄幻::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=9\n豪门总裁::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=2\n古代言情::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=5\n现代言情::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=10\n青春校园::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=6\n仙侠奇缘::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=7\n婚恋情缘::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=8\n玄幻言情::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=3\n穿越重生::http://touchlife.cootekservice.com/doReader/get_books_by_classificationId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&classificationId=1\nnull",
  "lastUpdateTime": 1766349442253,
  "respondTime": 187444,
  "ruleBookInfo": {},
  "ruleContent": {
    "content": "$..chapterContent"
  },
  "ruleExplore": {
    "author": "bookAuthor",
    "bookList": "result.classificationInfoBooks[*]",
    "bookUrl": "http://touchlife.cootekservice.com/doReader/enter_bookinfo_index?_token=e72ca407-9caa-475d-a829-46e15d3d4834&bookId={$.bookId}",
    "coverUrl": "bookCoverImage",
    "intro": "bookDesc",
    "kind": "bookBClassificationName",
    "name": "bookTitle"
  },
  "ruleSearch": {
    "author": "bookAuthor",
    "bookList": "result",
    "bookUrl": "http://touchlife.cootekservice.com/doReader/enter_bookinfo_index?_token=e72ca407-9caa-475d-a829-46e15d3d4834&bookId={$.bookId}",
    "coverUrl": "bookCoverImage",
    "intro": "bookRecommendWords||bookDesc&&copyright_owner",
    "kind": "bookBClassificationName",
    "name": "bookTitle"
  },
  "ruleToc": {
    "chapterList": "result.detailedBookInfo.bookChapterAllInfo",
    "chapterName": "chapterTitle",
    "chapterUrl": "http://touchlife.cootekservice.com/doReader/get_content_by_chapterId?_token=e72ca407-9caa-475d-a829-46e15d3d4834&bookId={$.bookId}&chapterId={$.chapterId}"
  },
  "searchUrl": "http://touchlife.cootekservice.com/doReader/search_book?_token=e72ca407-9caa-475d-a829-46e15d3d4834&action=search_book&search_keyword={{key}}",
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
