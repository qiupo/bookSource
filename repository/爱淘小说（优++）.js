// @name 爱淘小说（优++）
// @version 2025.12.21
// @author converted
// @url https://tybook.taoyuewenhua.net
// @enabled true
// @tags 小说,书源,converted
// @description 24.12.29 Buding
// @description 修复目录，增加发现页，详情页

const LEGADO_SOURCE = {
  "bookSourceComment": "24.12.29 Buding\n修复目录，增加发现页，详情页",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "爱淘小说（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://tybook.taoyuewenhua.net",
  "customButton": false,
  "customOrder": 42,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\"title\":\"男生分类\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"推荐榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=100&ctype=1&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=110&ctype=1&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"人气榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=10&ctype=1&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"热搜榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=80&ctype=1&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"收藏榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=20&ctype=1&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"阅读榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=30&ctype=1&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"题材\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"都市\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&categoryId=105000&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649399854751&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"玄幻\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&categoryId=101000&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649399854751&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"历史\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&categoryId=106000&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649399854751&uid=52557650&version_code=269\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"系统\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=系统&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"娱乐圈\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=娱乐圈&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"穿越\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=穿越&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"无敌\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=无敌&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"迪化流\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=迪化流&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"签到\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=签到&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"军事\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&categoryId=107000&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649399854751&uid=52557650&version_code=269\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"奇闻怪谈\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&categoryId=108000&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649399854751&uid=52557650&version_code=269\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"N次元\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=N次元&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"角色\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"战神\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=战神&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"赘婿\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=赘婿&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"女总裁\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=女总裁&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"神医\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=神医&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"奶爸\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=奶爸&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"多女主\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=多女主&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"姐姐\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=姐姐&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"女帝\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=女帝&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"皇子\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=皇子&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"神豪\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=神豪&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"兵王\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=兵王&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"搞怪\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=搞怪&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"情节\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"重生\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=重生&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"大唐\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=大唐&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"荒岛\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=荒岛&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=游戏&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"英雄联盟\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=英雄联盟&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"透视\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=透视&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"末世\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=末世&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"三国\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=三国&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"复苏流\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=复苏流&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"盗墓\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=盗墓&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"日常文\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=日常文&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"开局流\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=开局流&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"其他\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"诸天万界\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=诸天万界&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"脑洞\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=脑洞&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"修真\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=修真&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"洪荒\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=洪荒&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"仙帝\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=仙帝&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"火影\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=火影&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"种田\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=种田&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"仙侠\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=仙侠&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"西游\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=西游&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"鉴宝\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=鉴宝&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"武侠\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=武侠&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"传承\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=传承&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"惊悚\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=惊悚&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"复仇\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=复仇&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"战争\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=战争&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"天才\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=天才&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"现实人生\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=现实人生&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"神奇宝贝\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=神奇宝贝&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"爱情\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=爱情&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"高手\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=高手&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"风水\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=风水&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"武道\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=武道&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"网游\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=网游&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"科幻\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=科幻&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"电竞\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=电竞&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"明朝\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=明朝&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"剑道\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=剑道&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"星际\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=星际&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"魔法\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=魔法&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"王者荣耀\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=王者荣耀&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"年代\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=年代&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"无限流\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=无限流&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"悬疑\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=悬疑&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"江湖恩怨\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=江湖恩怨&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"同人\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=同人&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"全球\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=全球&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"美食\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=美食&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"推理\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=推理&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"召唤\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=召唤&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"爽文\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=1&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=爽文&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":0.29}},\n{\"title\":\"女生分类\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"推荐榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=100&ctype=2&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=110&ctype=2&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"人气榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=10&ctype=2&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"热搜榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=80&ctype=2&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"收藏榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=20&ctype=2&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"阅读榜\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/book_mall/book_rank?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&brtype=30&ctype=2&optype=1&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649403462595&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"题材\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"现代言情\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&categoryId=204000&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649399854751&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古代言情\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&categoryId=203000&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649399854751&uid=52557650&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"总裁\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=总裁&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"种田\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=种田&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"重生\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=重生&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"团宠\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=团宠&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"虐文\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=虐文&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"快穿\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=快穿&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"掉马甲\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=掉马甲&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"甜宠\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=甜宠&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"追妻\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=追妻火葬场&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"年代\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=年代&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"角色\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"医妃\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=医妃&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"大叔\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=大叔&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"超A女主\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=超A女主&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"萌宝\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=萌宝&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"皇叔\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=皇叔&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"锦鲤\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=锦鲤&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"女配\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=女配&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"女战神\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=女战神&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"反派\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=反派&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"萌系\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=萌系&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"病娇\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=病娇&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"双男主\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=双男主&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"情节\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"穿越\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=穿越&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"穿书\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=穿书&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"先婚后爱\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=先婚后爱&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"空间\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=空间&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"奇闻怪谈\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=奇闻怪谈&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"女扮男装\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=女扮男装&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"仙侠\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=仙侠&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"虐渣\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=虐渣&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"养娃\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=养娃&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"宫斗文\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=宫斗文&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"兽世\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=兽世&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"末世\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=末世&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"其他\",\"url\":\"\",\n\"style\":{\"layout_flexGrow\":0,\n\"layout_flexBasisPercent\":1}},\n{\"title\":\"师徒\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=师徒&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"娱乐圈\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=娱乐圈&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"婚恋\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=婚恋&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"玄学\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=玄学&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"王妃\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=王妃&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"搞笑欢脱\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=搞笑欢脱&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"系统\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=系统&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"神医\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=神医&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"校园\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=校园&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"浪漫青春\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=浪漫青春&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"嫡女\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=嫡女&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"美食\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=美食&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"农家女\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=农家女&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"女强\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=女强&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"权谋\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=权谋&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"复仇\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=复仇&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"契约结婚\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=契约结婚&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"职场\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=职场&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"暴富\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=暴富&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"皇后\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=皇后&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"庶女\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=庶女&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"前妻\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=前妻&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"悬疑\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=悬疑&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"落魄千金\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=落魄千金&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"电竞\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=电竞&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"逆袭\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=逆袭&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"民国\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=民国&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"影后\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=影后&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"将军\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=将军&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"王爷\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=王爷&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"推理\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=推理&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"惊悚\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=惊悚&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"轻松\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=轻松&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"校草\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=校草&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"宅斗\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=宅斗&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"清穿\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=清穿&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"爱情\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=爱情&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=游戏&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"反套路\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=反套路&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"病娇\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=病娇&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"前世今生\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=前世今生&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"玄幻\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=玄幻&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"脑洞\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=脑洞&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"真假千金\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=真假千金&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"法医\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=法医&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"网游\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=网游&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"爽文\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=爽文&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"打脸\",\"url\":\"@js:q=\\\"https://tybook.taoyuewenhua.net/ty/search_by_category?\\\";n=page-1;w=\\\"&key=mibook_123456\\\";t=\\\"appid=mibook&freeType=2&from=2&optype=1&order=0&ostype=0&osversion=7.1.2&page=\\\"+n+\\\"&pageSize=10&status=0&t=1649400758613&tags=打脸&version_code=269&version_name=8.2.3\\\";i=t+w;y=\\\"&sign=\\\";u=java.md5Encode(i).toUpperCase();q+t+y+String(u)\",\n\"style\":{\"layout_flexGrow\":1,\n\"layout_flexBasisPercent\":0.25}}\n]",
  "header": "{\"User-Agent\":\"okhttp/3.12.1\"}",
  "lastUpdateTime": 1766352677573,
  "respondTime": 17642,
  "ruleBookInfo": {
    "author": "$.authorName",
    "coverUrl": "$.coverUrl",
    "init": "$.data",
    "intro": "<br>\n🎗 标签：{{$.site}}🔸{{$.tagList##\\s##，}}\n👤 主角：{{$.roleList##\\s##，}}\n🕰 更新：{{String(java.timeFormat(java.getString('$.latestChapterUpdateTime'))).replace(/\\//g,\"-\").replace(/\\s/g,\"🔸\")}}\n📂 简介：\n{{$.intro}}",
    "kind": "{{$.categoryName}}\n{{java.getString('$.status')=='50'?'完结':'连载'}}\n{{r=String(Math.round(java.getString('$.score'))/10);r=='0'?'':r+ '分'}}",
    "lastChapter": "$.latestChapter",
    "name": "$.title",
    "tocUrl": "@js:\ntry{\ntime=Date.now();\nsign=java.md5Encode(\"appid=mibook&bid={{$.bid}}&brand=HUAWEI&channel=Tencent&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&key=mibook_123456\").toUpperCase();\n\n\"http://tybook.taoyuewenhua.net/tf/chapter_list?appid=mibook&bid={{$.bid}}&brand=HUAWEI&channel=Tencent&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&sign=\"+sign;\n}\ncatch(e){\n\t\"https://tfbook-1251592799.file.myqcloud.com/chapters/bid={{$.bid}}.json\"\n\t\n}",
    "wordCount": "$.allWords"
  },
  "ruleContent": {
    "content": "$.data.content"
  },
  "ruleExplore": {
    "bookUrl": "sourceId@js:\ntime=Date.now();\nsign=java.md5Encode(\"appid=mibook&bid=\"+result+\"&brand=HUAWEI&channel=Tencent&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&key=mibook_123456\").toUpperCase();\n\n\"/tf/book?appid=mibook&bid=\"+result+\"&brand=HUAWEI&channel=Tencent&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&sign=\"+sign;"
  },
  "ruleSearch": {
    "author": "$.authorName",
    "bookList": "$.data.bookList",
    "bookUrl": "sourceId@js:\ntime=Date.now();\nsign=java.md5Encode(\"appid=mibook&bid=\"+result+\"&brand=HUAWEI&channel=Tencent&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&key=mibook_123456\").toUpperCase();\n\n\"/tf/book?appid=mibook&bid=\"+result+\"&brand=HUAWEI&channel=Tencent&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&sign=\"+sign;",
    "coverUrl": "$.coverUrl",
    "intro": "$.intro",
    "kind": "{{$.categoryName}}\n{{java.getString('$.status')=='50'?'完结':'连载'}}\n{{r=String(Math.round(java.getString('$.score'))/10);r=='0'?'':r+ '分'}}",
    "name": "$.title",
    "wordCount": "$.allWords"
  },
  "ruleToc": {
    "chapterList": "$.data.chapterList",
    "chapterName": "$.title",
    "chapterUrl": "@js:\ntime=Date.now();\nsign=java.md5Encode(\"appid=mibook&bid={{$.bid}}&brand=HUAWEI&channel=Tencent&cid={{$.cid}}&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&key=mibook_123456\").toUpperCase();\n\n\"https://tybook.taoyuewenhua.net/tf/chapter_content?appid=mibook&bid={{$.bid}}&brand=HUAWEI&channel=Tencent&cid={{$.cid}}&device_id=22f71e7a68a04e8a8e6618ace8804404&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&sign=\"+sign;",
    "updateTime": "{{$.words}} 字 发布于  {{java.timeFormat(java.getString('$.modifiedOn'))}}"
  },
  "searchUrl": "@js:\ntime=Date.now();\nsign=java.md5Encode(\"appid=mibook&brand=HUAWEI&channel=Tencent&ctype=1&device_id=22f71e7a68a04e8a8e6618ace8804404&keywords=\"+key+\"&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&page=0&pageSize=10&searchType=1&sourceName=yw&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&key=mibook_123456\").toUpperCase();\n\n\"/authopt/ty/search_books?appid=mibook&brand=HUAWEI&channel=Tencent&ctype=1&device_id=22f71e7a68a04e8a8e6618ace8804404&keywords=\"+key+\"&model=vmos&optype=1&ostype=0&osversion=7.1.2&package_name=com.martian.ttbook&page=0&pageSize=10&searchType=1&sourceName=yw&t=\"+time+\"&token=54338ca6-a8eb-4662-9ae4-ae1f871b0825&uid=45090208&version_code=266&version_name=8.1.9&sign=\"+sign;",
  "weight": 0
};

function createLegacyRuntime(source) {
  var memoryCache = {};

  function log(message) {
    if (typeof legado !== 'undefined' && legado.log) legado.log(String(message));
  }

  function unsupported(name) {
    log('[legacyRuntime unsupported] ' + source.bookSourceName + ': ' + name);
  }

  function baseUrl() {
    return String(source.bookSourceUrl || '').split('#')[0];
  }

  function sourceType() {
    if (source.bookSourceType === 2) return 'comic';
    if (source.bookSourceType === 4) return 'video';
    if (source.bookSourceType === 1) return 'audio';
    return 'novel';
  }

  function absolutize(url, parentUrl) {
    if (!url) return '';
    var text = String(url).trim();
    if (/^https?:\/\//i.test(text) || text.indexOf('data:') === 0) return text;
    var base = parentUrl || baseUrl();
    if (!base) return text;
    if (text.indexOf('//') === 0) return 'https:' + text;
    if (text[0] === '/') {
      var match = base.match(/^(https?:\/\/[^\/]+)/i);
      return match ? match[1] + text : text;
    }
    return base.replace(/\/[^\/]*$/, '/') + text;
  }

  function first(value) {
    if (Array.isArray(value)) return value.length ? value[0] : '';
    if (value === null || value === undefined) return '';
    return value;
  }

  function stringify(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    return JSON.stringify(value);
  }

  function unique(values) {
    var seen = {};
    var out = [];
    for (var i = 0; i < values.length; i++) {
      var value = String(values[i] || '').trim();
      if (value && !seen[value]) {
        seen[value] = true;
        out.push(value);
      }
    }
    return out;
  }

  function extractImageUrls(value, parentUrl) {
    var text = stringify(value);
    var urls = [];
    try {
      var parsed = JSON.parse(text);
      if (Array.isArray(parsed)) urls = parsed;
    } catch (_) {}
    text.replace(/<img[^>]+(?:src|data-src|data-original)=["']([^"']+)["'][^>]*>/gi, function (_, url) {
      urls.push(url);
      return _;
    });
    text.split(/[\n,]+/).forEach(function (part) {
      if (/\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(part)) urls.push(part.trim());
    });
    return unique(urls.map(function (url) { return absolutize(url, parentUrl || baseUrl()); }));
  }

  function extractMediaUrl(value, parentUrl) {
    var text = stringify(value).replace(/\\\//g, '/');
    var match = text.match(/https?:\/\/[^\s"'<>]+\.(m3u8|mp4|mp3|m4a|flv|avi|mkv)(\?[^\s"'<>]*)?/i);
    if (match) return absolutize(match[0], parentUrl || baseUrl());
    if (/^https?:\/\//i.test(text.trim())) return absolutize(text.trim(), parentUrl || baseUrl());
    return text.trim();
  }

  function formatChapterContent(value, parentUrl) {
    var type = sourceType();
    if (type === 'comic') return JSON.stringify(extractImageUrls(value, parentUrl));
    if (type === 'video' || type === 'audio') return extractMediaUrl(value, parentUrl);
    return stringify(value);
  }

  function getPathValue(context, path) {
    if (!path) return context;
    var text = String(path).replace(/^@json:/, '').trim();
    if (text === '$') return context;
    if (text.indexOf('$..') === 0) return recursiveFind(context, text.slice(3));
    if (text.indexOf('$.') === 0) text = text.slice(2);
    var parts = text.split('.').filter(Boolean);
    var current = context;
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (part.slice(-3) === '[*]') {
        var key = part.slice(0, -3);
        current = key ? current && current[key] : current;
        if (!Array.isArray(current)) return [];
        var rest = parts.slice(i + 1).join('.');
        if (!rest) return current;
        var out = [];
        for (var j = 0; j < current.length; j++) out = out.concat(asArray(getPathValue(current[j], rest)));
        return out;
      }
      var indexMatch = part.match(/^(.+)\[(\d+)\]$/);
      if (indexMatch) {
        current = current && current[indexMatch[1]];
        current = Array.isArray(current) ? current[Number(indexMatch[2])] : undefined;
      } else {
        current = current && current[part];
      }
      if (current === undefined || current === null) return '';
    }
    return current;
  }

  function recursiveFind(context, key) {
    var found = [];
    function walk(value) {
      if (!value || typeof value !== 'object') return;
      if (Object.prototype.hasOwnProperty.call(value, key)) found.push(value[key]);
      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) walk(value[i]);
      } else {
        Object.keys(value).forEach(function (childKey) { walk(value[childKey]); });
      }
    }
    walk(context);
    return found;
  }

  function asArray(value) {
    if (Array.isArray(value)) return value;
    if (value === null || value === undefined || value === '') return [];
    return [value];
  }

  function primitiveForUrl(value) {
    value = first(value);
    if (value === null || value === undefined) return '';
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (typeof value === 'object') {
      var keys = ['url', 'chapterUrl', 'bookUrl', 'tocUrl', 'href'];
      for (var i = 0; i < keys.length; i++) {
        var child = value[keys[i]];
        if (typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean') return String(child);
      }
    }
    return '';
  }

  function applyCleanSuffix(value, clean) {
    var parts = String(clean || '').split('##');
    if (parts.length < 2) return value;
    var pattern = parts[1];
    var replacement = parts.length >= 3 ? parts[2] : '';
    try { return stringify(value).replace(new RegExp(pattern, 'g'), replacement); } catch (_) { return value; }
  }

  function findTemplateCleanIndex(text) {
    var depth = 0;
    for (var i = 0; i < text.length - 1; i++) {
      var pair = text.slice(i, i + 2);
      if (pair === '{{') {
        depth++;
        i++;
      } else if (pair === '}}' && depth > 0) {
        depth--;
        i++;
      } else if (pair === '##' && depth === 0) {
        return i;
      }
    }
    return -1;
  }

  function splitTemplateExpression(expr) {
    var parts = String(expr || '').split('##');
    return { rule: parts[0].trim(), clean: parts.length > 1 ? '##' + parts.slice(1).join('##') : '' };
  }

  function renderTemplate(template, vars, context) {
    return String(template || '').replace(/\{\{([\s\S]*?)\}\}/g, function (_, expr) {
      var parsed = splitTemplateExpression(expr);
      var key = parsed.rule;
      var value = '';
      if (key === 'key') value = encodeURIComponent(vars.keyword || '');
      else if (key === 'page') value = vars.page || 1;
      else if (key === 'baseUrl') value = vars.baseUrl || '';
      else if (key === 'source.key') value = baseUrl();
      else if (key.indexOf('$.') === 0 || key.indexOf('$..') === 0 || key === '$') value = first(getPathValue(context, key));
      return stringify(parsed.clean ? applyCleanSuffix(value, parsed.clean) : value);
    });
  }

  function parseUrlRule(urlRule, vars, context) {
    var rendered = renderTemplate(urlRule, vars, context);
    if (rendered.indexOf('@js:') === 0 || rendered.indexOf('<js>') === 0) return runScriptUrl(rendered, vars, context);
    var comma = rendered.indexOf(',{');
    if (comma === -1) return { url: absolutize(rendered, vars.baseUrl), options: {} };
    var url = rendered.slice(0, comma);
    var optionsText = rendered.slice(comma + 1);
    try {
      return { url: absolutize(url, vars.baseUrl), options: JSON.parse(optionsText) };
    } catch (error) {
      log('[legacyRuntime] failed to parse request options: ' + error.message);
      return { url: absolutize(url, vars.baseUrl), options: {} };
    }
  }

  function runScriptUrl(script, vars, context) {
    var java = createJavaShim(vars);
    var cache = createCacheShim();
    var cookie = createCookieShim();
    var result = vars.result || '';
    var baseUrlValue = vars.baseUrl || baseUrl();
    try {
      var body = String(script).replace(/^@js:/, '').replace(/^<js>|<\/js>$/g, '');
      var fn = new Function('java', 'cache', 'cookie', 'source', 'result', 'baseUrl', 'key', 'page', body);
      var value = fn(java, cache, cookie, source, result, baseUrlValue, vars.keyword || '', vars.page || 1);
      return { url: absolutize(value || result, baseUrlValue), options: {} };
    } catch (error) {
      unsupported('script url failed: ' + error.message);
      return { url: '', options: {} };
    }
  }

  async function request(urlRule, vars, context) {
    var parsed = parseUrlRule(urlRule, vars, context);
    if (!parsed.url) return '';
    var options = parsed.options || {};
    if (options.webView || options.webJs) unsupported('webView');
    if (String(options.method || 'GET').toUpperCase() === 'POST') {
      return await legado.http.post(parsed.url, options.body || '', options.headers || {});
    }
    return await legado.http.get(parsed.url, options.headers || {});
  }

  function parseData(text) {
    if (typeof text !== 'string') return text;
    try { return JSON.parse(text); } catch (_) { return text; }
  }

  function applyRegexClean(value, rule) {
    var parts = String(rule).split('##');
    if (parts.length < 2) return value;
    var pattern = parts[1];
    var replacement = parts.length >= 3 ? parts[2] : '';
    try { return stringify(value).replace(new RegExp(pattern, 'g'), replacement); } catch (_) { return value; }
  }

  function splitRuleAndClean(rule) {
    var text = String(rule || '');
    var idx = findTemplateCleanIndex(text);
    if (idx === -1) return { rule: text, clean: '' };
    return { rule: text.slice(0, idx), clean: text.slice(idx) };
  }

  function evaluateJsonPath(context, rule) {
    return getPathValue(context, String(rule).replace(/^@json:/, ''));
  }

  function evaluateCss(context, rule) {
    if (!legado.dom) return '';
    var text = String(rule).replace(/^@css:/, '');
    var parts = text.split('@');
    var selector = parts[0] || '*';
    var attr = parts[1] || 'text';
    var doc = typeof context === 'string' ? legado.dom.parse(context) : context;
    if (attr === 'text') return legado.dom.selectText(doc, selector);
    if (attr === 'html') return legado.dom.selectHtml ? legado.dom.selectHtml(doc, selector) : legado.dom.selectText(doc, selector);
    if (attr === 'all') return legado.dom.selectText(doc, selector);
    return legado.dom.selectAttr(doc, selector, attr);
  }

  function evaluateXPath(context, rule) {
    if (!legado.dom) return '';
    if (!legado.dom.xpath && !legado.dom.selectText) return '';
    var doc = typeof context === 'string' ? legado.dom.parse(context) : context;
    if (legado.dom.xpath) return legado.dom.xpath(doc, rule);
    if (/\/text\(\)$/.test(rule)) return legado.dom.selectText(doc, rule.replace(/\/text\(\)$/, ''));
    var attr = rule.match(/\/@([\w:-]+)$/);
    if (attr) return legado.dom.selectAttr(doc, rule.replace(/\/@[\w:-]+$/, ''), attr[1]);
    return legado.dom.selectText(doc, rule);
  }

  function evaluateDefault(context, rule) {
    var clean = splitRuleAndClean(rule);
    var text = clean.rule.trim();
    var value;
    if (!text || text === 'all') value = context;
    else if (text.indexOf('@json:') === 0 || text.indexOf('$.') === 0 || text.indexOf('$..') === 0 || text === '$') value = evaluateJsonPath(context, text);
    else if (text.indexOf('@css:') === 0) value = evaluateCss(context, text);
    else if (text.indexOf('@XPath:') === 0) value = evaluateXPath(context, text.replace(/^@XPath:/, ''));
    else if (text.indexOf('//') === 0) value = evaluateXPath(context, text);
    else if (text.indexOf('{{') !== -1) value = renderTemplate(text, {}, context);
    else value = getPathValue(context, text);
    return clean.clean ? applyRegexClean(value, clean.clean) : value;
  }

  function applyRule(context, rule) {
    if (!rule) return '';
    var text = String(rule);
    if (text.indexOf('||') !== -1) {
      var any = text.split('||');
      for (var i = 0; i < any.length; i++) {
        var value = applyRule(context, any[i]);
        if (stringify(value)) return value;
      }
      return '';
    }
    if (text.indexOf('&&') !== -1) return text.split('&&').map(function (part) { return stringify(applyRule(context, part)); }).join('');
    if (text.indexOf('@js:') === 0 || text.indexOf('<js>') === 0) return runRuleScript(text, context);
    return evaluateDefault(context, text);
  }

  function runRuleScript(script, context) {
    var java = createJavaShim({ result: context });
    var cache = createCacheShim();
    var cookie = createCookieShim();
    var result = context;
    try {
      var body = String(script).replace(/^@js:/, '').replace(/^<js>|<\/js>$/g, '');
      var fn = new Function('java', 'cache', 'cookie', 'source', 'result', 'baseUrl', body);
      var value = fn(java, cache, cookie, source, result, baseUrl());
      if (value === undefined) return (typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') ? result : '';
      return value;
    } catch (error) {
      unsupported('rule script failed: ' + error.message);
      return '';
    }
  }

  function mapFields(context, rules, mapping, parentUrl) {
    var item = {};
    Object.keys(mapping).forEach(function (target) {
      var oldKey = mapping[target];
      var value = applyRule(context, rules && rules[oldKey]);
      if (target === 'bookUrl' || target === 'tocUrl' || target === 'coverUrl' || target === 'url') {
        value = primitiveForUrl(value);
        if (value) value = absolutize(value, parentUrl || baseUrl());
      }
      item[target] = stringify(first(value));
    });
    return item;
  }

  function listByRule(data, rule) {
    var value = applyRule(data, rule);
    return asArray(value);
  }

  function createJavaShim(vars) {
    return {
      ajax: function (url) { unsupported('java.ajax sync shim'); return ''; },
      ajaxAll: function () { unsupported('java.ajaxAll sync shim'); return []; },
      base64Encode: function (value) { return btoa(unescape(encodeURIComponent(String(value)))); },
      base64Decode: function (value) { return decodeURIComponent(escape(atob(String(value)))); },
      hexDecodeToString: function (value) {
        var out = '';
        String(value).replace(/../g, function (hex) { out += String.fromCharCode(parseInt(hex, 16)); return hex; });
        return out;
      },
      md5Encode: function () { unsupported('java.md5Encode'); return ''; },
      md5Encode16: function () { unsupported('java.md5Encode16'); return ''; },
      timeFormat: function (value) { return new Date(Number(value)).toISOString(); },
      encodeURI: function (value) { return encodeURIComponent(String(value)); },
      urlEncodeCharset: function (value) { return encodeURIComponent(String(value)); },
      htmlFormat: function (value) { return String(value).replace(/<[^>]+>/g, ''); },
      getString: function (rule) { return stringify(first(applyRule(vars.result || {}, rule))); },
      put: function (key, value) { memoryCache[key] = value; },
      get: function (key) { return memoryCache[key]; },
      log: log,
      toast: log,
      longToast: log
    };
  }

  function createCacheShim() {
    return { get: function (key) { return memoryCache[key]; }, put: function (key, value) { memoryCache[key] = value; } };
  }

  function createCookieShim() {
    return { getKey: function () { unsupported('cookie.getKey'); return ''; } };
  }

  async function search(keyword, page) {
    try {
      var vars = { keyword: keyword, page: page || 1, baseUrl: baseUrl() };
      var response = await request(source.searchUrl, vars, source);
      var data = parseData(response);
      var list = listByRule(data, source.ruleSearch && source.ruleSearch.bookList);
      return list.map(function (node) {
        return mapFields(node, source.ruleSearch, {
          name: 'name', author: 'author', bookUrl: 'bookUrl', coverUrl: 'coverUrl', intro: 'intro', kind: 'kind', latestChapter: 'lastChapter'
        }, vars.baseUrl);
      }).filter(function (book) { return book.name || book.bookUrl; });
    } catch (error) {
      log('[legacyRuntime search failed] ' + error.message);
      return [];
    }
  }

  async function bookInfo(bookUrl) {
    try {
      var response = await request(bookUrl, { baseUrl: bookUrl }, {});
      var data = parseData(response);
      if (source.ruleBookInfo && source.ruleBookInfo.init) data = applyRule(data, source.ruleBookInfo.init) || data;
      var info = mapFields(data, source.ruleBookInfo, {
        name: 'name', author: 'author', bookUrl: 'bookUrl', tocUrl: 'tocUrl', coverUrl: 'coverUrl', intro: 'intro', kind: 'kind', latestChapter: 'lastChapter'
      }, bookUrl);
      info.bookUrl = info.bookUrl || bookUrl;
      info.tocUrl = info.tocUrl || bookUrl;
      return info;
    } catch (error) {
      log('[legacyRuntime bookInfo failed] ' + error.message);
      return { name: '', author: '', bookUrl: bookUrl, tocUrl: bookUrl, coverUrl: '', intro: '' };
    }
  }

  async function chapterList(tocUrl) {
    try {
      var response = await request(tocUrl, { baseUrl: tocUrl }, {});
      var data = parseData(response);
      var list = listByRule(data, source.ruleToc && source.ruleToc.chapterList);
      return list.map(function (node) {
        return mapFields(node, source.ruleToc, { name: 'chapterName', url: 'chapterUrl', group: 'group' }, tocUrl);
      }).filter(function (chapter) { return chapter.name || chapter.url; });
    } catch (error) {
      log('[legacyRuntime chapterList failed] ' + error.message);
      return [];
    }
  }

  async function chapterContent(chapterUrl) {
    try {
      var response = await request(chapterUrl, { baseUrl: chapterUrl }, {});
      var data = parseData(response);
      return formatChapterContent(applyRule(data, source.ruleContent && source.ruleContent.content), chapterUrl);
    } catch (error) {
      log('[legacyRuntime chapterContent failed] ' + error.message);
      return '';
    }
  }

  async function explore(page, category) {
    try {
      var entries = String(source.exploreUrl || '').split(/\n+/).filter(Boolean);
      if (category === 'GETALL') return entries.map(function (line) { return line.split('::')[0]; }).filter(Boolean);
      var matched = entries.filter(function (line) { return line.split('::')[0] === category; })[0];
      if (!matched) return [];
      var urlRule = matched.split('::').slice(1).join('::');
      var response = await request(urlRule, { page: page || 1, baseUrl: baseUrl() }, {});
      var data = parseData(response);
      var list = listByRule(data, source.ruleExplore && source.ruleExplore.bookList);
      return list.map(function (node) {
        var item = mapFields(node, source.ruleExplore, {
          name: 'name', author: 'author', bookUrl: 'bookUrl', coverUrl: 'coverUrl', intro: 'intro', kind: 'kind', latestChapter: 'lastChapter'
        }, baseUrl());
        item.kind = item.kind || category;
        return item;
      }).filter(function (book) { return book.name || book.bookUrl; });
    } catch (error) {
      log('[legacyRuntime explore failed] ' + error.message);
      return [];
    }
  }

  return { search: search, bookInfo: bookInfo, chapterList: chapterList, chapterContent: chapterContent, explore: explore, applyRule: applyRule, request: request, evaluateJsonPath: evaluateJsonPath, evaluateCss: evaluateCss, evaluateXPath: evaluateXPath, createJavaShim: createJavaShim, mapFields: mapFields };
}


const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);

async function search(keyword, page) {
  return await legacyRuntime.search(keyword, page);
}

async function bookInfo(bookUrl) {
  return await legacyRuntime.bookInfo(bookUrl);
}

async function chapterList(tocUrl) {
  return await legacyRuntime.chapterList(tocUrl);
}

async function chapterContent(chapterUrl) {
  return await legacyRuntime.chapterContent(chapterUrl);
}

async function explore(page, category) {
  return await legacyRuntime.explore(page, category);
}
