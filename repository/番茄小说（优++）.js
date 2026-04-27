// @name 番茄小说（优++）
// @version 2025.10.01
// @author converted
// @url https://fanqie.hnxianxin.cn/
// @enabled true
// @tags 小说,书源,converted
// @description 支持纯bookid搜书,支持下架,黑屋等小说正文阅读
// @description 附：本书源仅支持小说，仅支持小说，仅支持小说！！！
// @description 部分发现需要登录才能使用
// @description 交流反馈群：1063183421
// @description 修复下架书籍无书名的情况

const LEGADO_SOURCE = {
  "bookSourceComment": "支持纯bookid搜书,支持下架,黑屋等小说正文阅读\n附：本书源仅支持小说，仅支持小说，仅支持小说！！！\n部分发现需要登录才能使用\n交流反馈群：1063183421\n修复下架书籍无书名的情况",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "番茄小说（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://fanqie.hnxianxin.cn/＃妍希",
  "customButton": false,
  "customOrder": 35,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js: \n个人中心 = 1 \n \njs = (cid, genre, gender) => `@js:\nsource.key + \"/reading/bookapi/new_category/landing/v/?\" + [\n    \"category_id=${cid}\",\n    \"limit=50\",\n    \"offset=\" + (page - 1),\n    \"gender=${gender}\",\n    \"genre=${genre}\"\n  ].join(\"&\")`\n\nreadHistory = (path) => `@js:\nlet ck = \"sessionid=\" + (String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) ? String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) : source.getLoginInfoMap()['手动登录Token'])\n\"{{source.key}}/multi-detail?book_id=\" + getBookId(java.ajax('https://reading.snssdk.com/reading/bookapi/read_history/list/v/?aid=1967&version_code=99999,{\"headers\":{\"Cookie\":\"install_id=2531502907244067;' + ck + '\"}}'), page-1)`\n\t\n\t\nobj = (title, url, type, type1) => ({\n  title: title,\n  url: url,\n  style: {\n    layout_flexGrow: 1,\n    layout_flexBasisPercent: type\n  }\n})\n\narr = []\njava.longToast(\"请稍等，发现列表正在热更新！\")\nindex=[0, 1, 2]\nfor (let i of index) {\n  // java.toast(i)\n  let type = i\n  $ = JSON.parse(java.ajax(source.key + \"/reading/bookapi/new_category/front/v/?\" + [\n      \"update_version_code=99999\",\n      \"distinct_style=1\",\n      \"new_category_tab=\" + i\n    ].join(\"&\")\n  )).data.category_tab_data\n  cate = []\n  cate.push(obj(\n    \"====== \" + $.tab_name + \" ======\", \"\", 1\n  ))\n  $.cell_data.forEach((c) => {\n    gender_1 = (type == 0 || type == 1) ? type : 1;\n    genre_1 = type == 3 ? 1 : type == 5 ? 110 : type == 6 ? 130 : 0;\n    cate.push(obj(\n      c.cell_name,\n      js(c.atom_data[0].category_data.category_id, genre_1, gender_1),\n      1\n    ))\n    for (j = 2; j < 5; j++) {\n      c.atom_data.slice(1).forEach((a) => {\n        d = a.category_data\n        if (d.name.length == j) {\n          cate.push(obj(d.name, js(d.category_id, genre_1, gender_1), -1))\n        }\n      })\n    }\n  })\n  arr = cate.concat(arr)\n}\n\nlet book_shelf_url = 'https://fanqienovel.com/reading/bookapi/bookshelf/info/v:version/?aid=1967&iid=0&version_code=99999&update_version_code=57700'\nlet book_shelf_info = JSON.parse(java.ajax(book_shelf_url + ', ' + JSON.stringify({\n  headers: {\n    'Cookie': \"sessionid=\" + (String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) ? String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) : (source.getLoginInfoMap() ? source.getLoginInfoMap() : {})['手动登录Token']),\n  }\n})))\n \njava.log(JSON.stringify(book_shelf_info))\n\nlet username\nif (book_shelf_info.code != 0) {\n  个人中心 = 0\n  // source.setVariable('{}')\n} else {\n  let uinfo = java.ajax(\"https://fanqienovel.com/api/user/info/v2,\" + JSON.stringify({ headers: { Cookie: \"sessionid=\" + (String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) ? String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) : (source.getLoginInfoMap() ? source.getLoginInfoMap() : {})['手动登录Token']) }}))\n  let arrB = []\n  for (let i of book_shelf_info.data.book_shelf_info) {\n    arrB.push(i.book_id)\n  }\n  uinfo = JSON.parse(uinfo)\n  write_config('bookshelf.' + uinfo.data.id, arrB)\n  write_config('userinfo', { name: uinfo.data.name, userid: uinfo.data.id })\n  username = uinfo.data.name\n}\n\nlet gro = []\npush = (title, url, type) => gro.push({\n  title: title,\n  url: url,\n  style: {\n    layout_flexGrow: 1,\n    layout_flexBasisPercent: type\n  }\n});\n\nlet sArr = []\n\nif (个人中心) {\n  let groups_bookids = {\n    \"组外\": []\n  }\n  book_shelf_info.data.book_shelf_info.forEach(i => {\n    if (!groups_bookids[i.group_name ? i.group_name : \"组外\"]) groups_bookids[i.group_name] = []\n    groups_bookids[i.group_name ? i.group_name : \"组外\"].push(i.book_id)\n  })\n\n  Object.keys(groups_bookids).forEach(k => {\n    var multi_detail_post_body = {\n      data: {\n        book_shelf_info: []\n      }\n    }\n    groups_bookids[k].forEach(i => multi_detail_post_body.data.book_shelf_info.push({ book_id: String(i), item_id: '0' }))\n    // var multi_detail_group_url = `https://fanqienovel.com/api/bookshelf/multidetail,${JSON.stringify(multi_detail_post_body)}`\n    // var book_ids = getBookId(JSON.stringify(multi_detail_post_body)).join(\",\")\n    push(k, \"https://fanqienovel.com/fqbookshelf/groupName/\" + k, 0.4)\n  })\n  if (Object.keys(groups_bookids).length % 2 != 0) push(\"占位\", \"\", 0.4)\n  // java.log(JSON.stringify(gro, null, 2))\n  sArr.push(obj(username, '', 1))\n  sArr.push(obj(\"🍅书架🍅\", \"https://fanqienovel.com/fqbookshelf\", 1))\n  sArr = sArr.concat(gro)\n  // java.toast(JSON.stringify(sArr)) \n  sArr.push(obj(\"📔阅读历史📔\", readHistory(), 1))\n   //sArr.push(obj('首页推荐', \"https://fanqienovel.com/tab/0\", 0.4))\n   sArr.push(obj('📚个性推荐📚', \"https://api5-normal-lf.fqnovel.com/reading/bookapi/bookmall/cell/change/v1/?aid=1967&change_type=1&iid=1&app_name=novelapp&version_code=99999&cell_id=7012498777642631182&algo_type=101&category_id=0\", 0.4))\n   sArr.push(obj('🔝巅峰榜单🔝', \"https://fanqienovel.com/api/author/misc/top_book_list/v1/?limit=50&offset=0&version_code=99999\", 0.4))\n   sArr.push(obj('👥男频热搜👥', \"https://novel.snssdk.com/api/novel/channel/homepage/rank/rank_list/v2/?aid=13&app_name=news_article&app_version=9.7.3&channel=tengxun_tt&device_platform=android&os=android&device_type=ProjectTitan&os_api=29&os_version=10&openlive_plugin_status=1&isTTWebViewHeifSupport=0&limit=20&offset={{(page-1)*100}}&side_type=12&type=1\", 0.4))\n   sArr.push(obj('👍男频推荐👍', \"https://novel.snssdk.com/api/novel/channel/homepage/rank/rank_list/v2/?aid=13&app_name=news_article&app_version=9.7.3&channel=tengxun_tt&device_platform=android&os=android&device_type=ProjectTitan&os_api=29&os_version=10&openlive_plugin_status=1&isTTWebViewHeifSupport=0&limit=20&offset={{(page-1)*100}}&side_type=10&type=1\", 0.4))\n  \n  \n  \n}\n\narr = sArr.concat(arr)\nJSON.stringify(arr)\n",
  "header": "@js:\nJSON.stringify({\n\t\"x-sec-token\": \"8f79170487338570cdbb178e4653ed25943a6af05f3c29043782de49fc7a8fbd2446589412f746e396a05744cf546027bc63d7391b0e86ff3551c4d8e52ac1f97a2492bcc15dba6a9e2181084ed6e3f2a4d8a7e5aa419a705c5cffc8a93f5827fce376e3c3df14b8498405ba5f2630c0fa948894f4f7e5e26840f431f50396e9\"\n\t})",
  "jsLib": "function splitArray(input, size) {\n  const output = []\n  for (let i = 0; i < input.length; i += size) {\n    output.push(input.slice(i, i + size))\n  }\n  return output\n}\nfunction write_config(key, value) {\n  if (Packages.android.text.TextUtils.isEmpty(this.source.getVariable())) {\n    this.source.setVariable('{}')\n  }\n  // this.java.log('var:' + this.source.getVariable())\n  let obj = JSON.parse(this.source.getVariable())\n  let arr = key.split('.')\n  let temp = obj\n\n  for (let i = 0; i < arr.length - 1; i++) {\n    let currentKey = arr[i]\n    if (!temp[currentKey]) {\n      temp[currentKey] = {}\n    }\n    temp = temp[currentKey]\n  }\n  temp[arr[arr.length - 1]] = value\n  this.source.setVariable(JSON.stringify(obj))\n}\nfunction read_config(key) {\n  if (Packages.android.text.TextUtils.isEmpty(this.source.getVariable())) {\n    this.source.setVariable('{}')\n  }\n  // this.java.log('var:' + this.source.getVariable())\n  let obj = JSON.parse(this.source.getVariable())\n  let arr = key.split('.')\n  let res = JSON.parse(JSON.stringify(obj))\n  for (let i = 0; i < arr.length; i++) {\n    res = res[arr[i]] || (i < (arr.length - 1) ? {} : undefined)\n    // this.java.log(JSON.stringify(res))\n  }\n  return res\n}\nfunction getBookId(url, page) {\n  const {java} = this\n  let $ = JSON.parse(url).data\n  let list\n  let arr\n  if ($.book_shelf_info != 0 && $.book_shelf_info != undefined) {\n   arr = $.book_shelf_info.map($ => $.book_id)\n  } else if (let (list = $.data_list) list != 0 && $.data_list != undefined)  {\n    arr = $.data_list.map($ => $.book_id_str)\n  } else {\n    java.toast(\"获取 book_id 失败，你可能需要登录！\")\n  }\n  return arr.slice(page*100, (page+1)*100)\n}",
  "lastUpdateTime": 1759350524349,
  "loginUi": "[\n{\n        \"name\": \"手动登录Token\",\n        \"type\": \"password\",\n        \"action\": \"\"\n },\n{\n        \"name\":  \"🍅番茄账号登录🍅\",\n        \"type\": \"button\",\n        \"action\": \"Y(true)\",\n        \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  },{\n        \"name\":  \"🍅退出登录🍅\",\n        \"type\": \"button\",\n        \"action\": \"X()\",\n        \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n  }\n]",
  "loginUrl": "function login(){}\nfunction login_(openBrowser, checkMode) {\n    // java.removeCookie(\"snssdk.com\")\n    var cookie_ = String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) ? String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) : (source.getLoginInfoMap() ? source.getLoginInfoMap() : {})['手动登录Token']\n    // java.toast(cookie_)\n    if (cookie_ && cookie_ != \"\" && !checkMode) {\n        if (!source.variableComment) {\n            java.toast(\"请不要重复登录，请先退出登录！\")\n        } else {\n            java.toast(\"您为填写token登录，请手动移除token后再次登录\")\n        }\n        return false\n    }\n    if (openBrowser) {\n        try {\n            java.startBrowserAwait(\"https://fanqienovel.com/\", \"登录\")\n        } catch (e) {\n            java.toast(e)\n        }\n    }\n    // java.log(\"snssdk cookie: \" + java.getCookie(\"snssdk.com\") + \"will be reomved\")\n    try {\n        cookie.removeCookie(\"snssdk.com\")\n    } catch (e) {}\n    // java.log(cookie)\n    var cookie_ = \"sessionid=\" + String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) ? String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) : (source.getLoginInfoMap())['手动登录Token']\n    let user\n    try {\n      user = JSON.parse(java.ajax(\"https://fanqienovel.com/api/user/info/v2,\" + JSON.stringify({\n        method: \"GET\",\n        headers: {\n          \"Cookie\": cookie_\n        }\n      }))).data.name\n     } catch (e) {java.log(e)}\n    if (!cookie_ || cookie_ == \"sessionid=\" || !user) {\n        java.toast(\"未获取到登录凭据，登录失败\")\n        return false\n    }\n    java.toast(\"欢迎 \" + user + \"\\n登录成功！\")\n    return true\n}\nfunction Y(a, b) {\n  try {\n    login_(a, b)\n  } catch (e) {\n    java.log(e+\"\\n\"+e.stack)\n  }\n}\nfunction X() {\n    cookie.removeCookie(\"fanqienovel.com\");\n    cookie.removeCookie(\"snssdk.com\");\n    if (String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) ? String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) : (source.getLoginInfoMap() ? source.getLoginInfoMap() : {})['手动登录Token']) java.toast(\"请手动移除填写的Token\")\n    else java.toast(\"退出登录成功\");\n}",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "author",
    "coverUrl": "thumb_url",
    "init": "data",
    "intro": "&nbsp;&nbsp;\n📕 源名：{{$.original_book_name}}\n📖 别名：{{$.book_flight_alias_name}}\n✏️ 开坑：{{$.create_time##T|\\+.*## }}\n🏷️ 标签：{{$.tags}}\n👤 主角：{{$.roles##\\[|\\\"|\\]}}\n🗣 音色：{{$.tones}}\n👁️ 在线：{{$.read_count}}人在读{{\"\\n\"+\"​\"}}\n📜 简介：{{$.abstract}}{{\"\\n\"+\"​\"}}\n📍 {{$.copyright_info##，.*##。}}\n书籍状态：__status__\n@js:result.replace(/.+：(人在读)?\\n/g,\"\").replace('__status__', (java.getString('$.book_search_visible') == 'true' ? '正常' : (java.getString('$.tomato_book_status') == '3' ? '下架' : '小黑屋')))",
    "kind": "{{java.getString(\"gender\")==1?\"男生\":\"女生\"}}\n{{$.category}}\n连载{{$.creation_status}}完结\n{{$.score}}分\n{{java.timeFormat(java.getString(\"last_chapter_update_time\")*1000)}}\n{{$.sub_info}}\n@js:result.replace(\"连载0\",\"\").replace(\"1完结\",\"\").replace(\"连载4完结\",\"断更\")",
    "lastChapter": "{{$.last_chapter_title}} • {{java.timeFormat(java.getString(\"last_chapter_update_time\")*1000)}}",
    "name": "book_name",
    "tocUrl": "/chapter?bookid={{$.book_id}}",
    "wordCount": "word_number"
  },
  "ruleContent": {
    "content": "$.content##妍󠇕希󠆖󠅽󠇕󠆨󠅼󠄡󠄩󠄠󠄩󠄣󠄣󠄢󠄨󠄨󠄩"
  },
  "ruleExplore": {
    "author": "$.author",
    "bookList": "<js>\nfunction getBookIdFull(url) {\n\tconst {java} = this\n\t$ = JSON.parse(url).data\n\tif ($.book_shelf_info != 0 && $.book_shelf_info != undefined) {\n\t\tarr = $.book_shelf_info.map($ => $.book_id)\n\t} else if (list = $.data_list != 0 && $.data_list != undefined)  {\n\t\tarr = $.data_list.map($ => $.book_id_str)\n\t} else {\n\t\tjava.toast(\"获取 book_id 失败，你可能需要登录！\")\n\t}\n\treturn arr\n}\nlet ck = \"sessionid=\" + (String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) ? String(cookie.getKey(\"fanqienovel.com\", \"sessionid\")) : (source.getLoginInfoMap() ? source.getLoginInfoMap() : {})['手动登录Token'])\n\ngetShelf = () => {\nlet book_shelf_url = 'https://fanqienovel.com/reading/bookapi/bookshelf/info/v:version/?aid=1967&iid=0&version_code=57700&update_version_code=57700'\nlet book_shelf_info = java.ajax(book_shelf_url + ', ' + JSON.stringify({\n  headers: {\n    'Cookie': ck\n  }\n}))\n\nlet arrB = []\nfor (let i of JSON.parse(book_shelf_info).data.book_shelf_info) {\n  arrB.push(i.book_id)\n}\nwrite_config('bookshelf.' + read_config('userinfo.userid'), arrB)\n\nbid = getBookIdFull(book_shelf_info)\nlet id_list = splitArray(bid, 100)\nlet urls = []\nid_list.forEach(i => {\n    urls.push(source.key + \"/multi-detail?bookid=\" + i.join(\",\"))\n})\n\nres = java.ajaxAll(urls)\nlet resp = {book_info: []}\nres.forEach(r => {\n  resp.book_info = resp.book_info.concat(JSON.parse(r.body()).data)\n})\n\nreturn resp\n}\n\nfunction getByGroupName(name) {\n  let book_shelf_url = 'https://fanqienovel.com/reading/bookapi/bookshelf/info/v:version/?aid=1967&iid=0&version_code=57700&update_version_code=57700'\n\n  let book_shelf_info = JSON.parse(java.ajax(book_shelf_url + ', ' + JSON.stringify({\n    headers: {\n      'Cookie': ck,\n    }\n  })))\n  let group_bookids = {\n    \"组外\": []\n  }\n  book_shelf_info.data.book_shelf_info.forEach(i => {\n    if (!group_bookids[i.group_name ? i.group_name : \"组外\"]) group_bookids[i.group_name] = []\n    group_bookids[i.group_name ? i.group_name : \"组外\"].push(i.book_id)\n  })\n  // java.log(JSON.stringify(group_bookids[\"组外\"]))\n  // java.log(decodeURIComponent(name))\n  if (!group_bookids[decodeURIComponent(name)]) return {data: []}\n  //java.log(\"awa\")\n  let book_ids = splitArray(group_bookids[decodeURIComponent(name)], 100)\n  let urls = []\n\n  book_ids.forEach(i => {\n    urls.push(source.key + \"/multi-detail?bookid=\" + i.join(\",\"))\n  })\n  \n  res = java.ajaxAll(urls)\n\n  let resp = {book_info: []}\n  res.forEach(r => {\n    resp.book_info = resp.book_info.concat(JSON.parse(r.body()).data)\n  })\n\n  return resp\n}\n\nfunction getByTabIndex(index) {\n  let url = _mlsec.requestHeader(\n\t  \"bookmall/tab\",\n    \"version_name=5.8.9.32\",\n\t  null,\n\t  ck\n  )\n  let all = JSON.parse(java.ajax(url))\n  let tab = all.data.tab_item[0].cell_data[index].cell_data\n  if (!tab) tab = []\n  let bookList = []\n  for (let i of tab) {\n    bookList = bookList.concat(i.book_data)\n    // java.log(JSON.stringify(i.book_data))\n  }\n  return { book_info: bookList }\n}\n\nif (baseUrl.endsWith(\"bookshelf\")) result = getShelf(\"bookshelf/info\")\nelse {\n  let w = baseUrl.split(\"/\")\n  if (baseUrl.includes(\"groupName\")) {\n    result = getByGroupName(w[w.length - 1])\n  } else if (baseUrl.includes(\"tab\")) {\n    result = getByTabIndex(parseInt(w[w.length - 1]))\n  } else result = JSON.parse(result)\n}\nJSON.stringify({data: result.book_list || result.book_info || result.data.result || result.data.book_info || result.detail_list || result.data })\n</js>\n$..book_data[*]||$.data[*]",
    "bookUrl": "{{source.key}}detail?bookid={{$.book_id||$.bookId}}",
    "coverUrl": "<js>\nlet replaceCover = (u) => {\n    if (u.startsWith(\"https://\")) u = u.substring(8)\n    else u = u.substring(7)\n    let uArr = u.split(\"/\")\n    uArr[0] = \"https://p6-novel.byteimg.com/origin\"\n    let uArr2 = []\n    uArr.forEach((x) => {\n        if (!x.includes(\"?\") && !x.includes(\"~\")) uArr2.push(x)\n        else uArr2.push(x.split(\"~\")[0])\n    })\n    u = uArr2.join(\"/\")\n    return u\n}\nreplaceCover(java.getString(\"thumb_url\"))\n</js>",
    "intro": "$.abstract##\\n",
    "kind": "男生{{$.gender}}女生\n连载{{$.creation_status}}完结\n{{$.score}}分\n{{$.sub_info||$.category}}\n##连载0|1完结|男生0|1女生|男生女生[\\s\\S]*\n@js:result\n.replace(\"男生2女生\",\"出版\")\n.replace(\"连载4完结\",\"断更\")\n.replace(\"连载-1完结\",\"未知\");",
    "lastChapter": "{{$.last_chapter_title}} • {{java.timeFormat(java.getString(\"last_chapter_update_time\")*1000)}}",
    "name": "$.book_name",
    "wordCount": "$.word_number"
  },
  "ruleSearch": {
    "author": "author##</?em>",
    "bookList": ".book_data[*]||$.data.book_data.*||$..book_info[*]",
    "bookUrl": "/detail?bookid={{$.book_id}}",
    "checkKeyWord": "7268620849496722495",
    "coverUrl": "thumb_url",
    "intro": "abstract",
    "kind": "{{java.getString(\"gender\")==1?\"男生\":\"女生\"}}\n连载{{$.creation_status}}完结\n{{$.score}}分\n{{$..text}}\n{{$.sub_info}}\n@js:result.replace(\"连载0\",\"\").replace(\"1完结\",\"\").replace(\"连载4完结\",\"断更\")",
    "lastChapter": "连载{{$.creation_status}}完结##连载0|1完结",
    "name": "book_name||title##<em>|</em>|《|》",
    "wordCount": "word_number"
  },
  "ruleToc": {
    "chapterList": "data.item_data_list[*]",
    "chapterName": "title",
    "chapterUrl": "/content?item_id={{$.item_id}}",
    "updateTime": "{{$.volume_name}} | {{$.chapter_word_number}}字 | {{java.timeFormatUTC(java.getString(\"first_pass_time\") * 1000, 'yyyy-MM-dd HH:mm:ss', 12)}}##第一卷：默认\n@js:\nif (result.startsWith(\" |\")) result = result.slice(2)\nif (result.startsWith(\"| \")) result = result.slice(2)\nresult"
  },
  "searchUrl": "/search?query={{key}}&page={{(page-1)*10}}&tab_type=3\n@js:if (key.match(/^\\d+$/) && !Number.isNaN(parseInt(key))) {\n  result = source.key + \"detail?bookid=\" + key;\n}\nresult",
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
