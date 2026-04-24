// @name 曼哈漫画（优+）
// @version 2025.10.04
// @author converted
// @url https://mangadex.org
// @type comic
// @enabled true
// @tags 漫画,书源,图片,converted
// @description //2025.4.16 ◎夜泽川◎
// @description 纯英文

const LEGADO_SOURCE = {
  "bookSourceComment": "//2025.4.16 ◎夜泽川◎\n纯英文",
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "曼哈漫画（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://mangadex.org",
  "customButton": false,
  "customOrder": 245,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\neval(String(source.loginUrl));\nvar result = [];\npush = (title, url, size) => result.push({\n    title: title,\n    url: url,\n    style: {\n        layout_flexGrow: 1,\n        layout_flexBasisPercent: size\n    }\n});\npush(\"全部\", `https://api.mangadex.org/manga?limit=32&offset={{(page-1)*32}}&includes[]=cover_art&includedTagsMode=AND&excludedTagsMode=OR{{buildQueryParams()}}`, 1);\n\nsorts.map(([title, key, order]) => {\n    push(title, `https://api.mangadex.org/manga?limit=32&offset={{(page-1)*32}}&includes[]=cover_art&includedTagsMode=AND&excludedTagsMode=OR{{buildQueryParams(\"分类\")}}&order[${key}]=${order}`, 0.45);\n}\n);\nJSON.stringify(result);",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 9) Mobile Safari/537.36\"}",
  "jsLib": "function formatDate(dateStr) {\n  const date = new Date(dateStr);\n  const pad = n => String(n).padStart(2, '0');\n  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())} ` +\n         `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;\n}\nvar contentRating = [[\"普通\",\"safe\"],[\"粗略\",\"suggestive\"],[\"限制\",\"erotica\"]];\nvar sorts = [\n    [\"最佳匹配\", \"relevance\", \"desc\"],\n    [\"最新上传\", \"latestUploadedChapter\", \"desc\"],\n    [\"最旧上传\", \"latestUploadedChapter\", \"asc\"],\n    [\"标题升序\", \"title\", \"asc\"],\n    [\"标题降序\", \"title\", \"desc\"],\n    [\"最高评级\", \"rating\", \"desc\"],\n    [\"最低评级\", \"rating\", \"asc\"],\n    [\"最多关注\", \"followedCount\", \"desc\"],\n    [\"最少关注\", \"followedCount\", \"asc\"],\n    [\"最近添加\", \"createdAt\", \"desc\"],\n    [\"最早添加\", \"createdAt\", \"asc\"],\n    [\"年份升序\", \"year\", \"asc\"],\n    [\"年份倒序\", \"year\", \"desc\"]\n];\n\nfunction buildQueryParams(e) {\n\tconst { source } = this\n\tlet selected = JSON.parse(source.getVariable());\n  let query = '';\n  const allRatings = contentRating.map(([Str,tag]) => tag);\n\n  allRatings.forEach((rating, index) => {\n    if (selected.contentRating.includes(rating)) {\n      const encoded = `contentRating[]=${rating}`;\n      \n      query += `&${encoded}`;\n    }\n  });\n  if (selected.Language) {\n    let languages = selected.Language.split(\",\");\n    query += languages.map(item => `&originalLanguage[]=${item}`).join('');\n  }\n  if (selected.sort && e !== \"分类\") {\n  \tlet sort_ = selected.sort.split(\",\");\n    query += `&order[${sort_[0]}]=${sort_[1]}`;\n    }\n  return query;\n}\n\nfunction getLanguage(str) {\n    const languageMap = {\"en\":\"英语\",\"en-us\":\"英语（美国）\",\"en-gb\":\"英语（英国）\",\"en-au\":\"英语（澳大利亚）\",\"en-ca\":\"英语（加拿大）\",\"zh\":\"中文\",\"zh-tw\":\"繁体中文（台湾）\",\"zh-hk\":\"繁体中文（香港）\",\"es\":\"西班牙语\",\"es-mx\":\"西班牙语（墨西哥）\",\"es-ar\":\"西班牙语（阿根廷）\",\"es-es\":\"西班牙语（西班牙）\",\"fr\":\"法语\",\"fr-fr\":\"法语（法国）\",\"fr-ca\":\"法语（加拿大）\",\"de\":\"德语\",\"de-de\":\"德语（德国）\",\"de-at\":\"德语（奥地利）\",\"ja\":\"日语\",\"ja-jp\":\"日语（日本）\",\"ru\":\"俄语\",\"ru-ru\":\"俄语（俄罗斯）\",\"pt\":\"葡萄牙语\",\"pt-br\":\"葡萄牙语（巴西）\",\"pt-pt\":\"葡萄牙语（葡萄牙）\",\"it\":\"意大利语\",\"it-it\":\"意大利语（意大利）\",\"ko\":\"韩语\",\"ko-kr\":\"韩语（韩国）\",\"ar\":\"阿拉伯语\",\"ar-ae\":\"阿拉伯语（阿联酋）\",\"ar-sa\":\"阿拉伯语（沙特）\",\"nl\":\"荷兰语\",\"nl-nl\":\"荷兰语（荷兰）\",\"sv\":\"瑞典语\",\"sv-se\":\"瑞典语（瑞典）\",\"da\":\"丹麦语\",\"da-dk\":\"丹麦语（丹麦）\",\"no\":\"挪威语\",\"no-no\":\"挪威语（挪威）\",\"fi\":\"芬兰语\",\"fi-fi\":\"芬兰语（芬兰）\",\"tr\":\"土耳其语\",\"tr-tr\":\"土耳其语（土耳其）\",\"el\":\"希腊语\",\"el-gr\":\"希腊语（希腊）\",\"he\":\"希伯来语\",\"he-il\":\"希伯来语（以色列）\",\"pl\":\"波兰语\",\"pl-pl\":\"波兰语（波兰）\",\"hu\":\"匈牙利语\",\"hu-hu\":\"匈牙利语（匈牙利）\",\"th\":\"泰语\",\"th-th\":\"泰语（泰国）\",\"vi\":\"越南语\",\"vi-vn\":\"越南语（越南）\",\"id\":\"印尼语\",\"id-id\":\"印尼语（印尼）\",\"ms\":\"马来语\",\"my\":\"马来语（马来西亚）\",\"ro\":\"罗马尼亚语\",\"ro-ro\":\"罗马尼亚语（罗马尼亚）\",\"bg\":\"保加利亚语\",\"bg-bg\":\"保加利亚语（保加利亚）\",\"hr\":\"克罗地亚语\",\"hr-hr\":\"克罗地亚语（克罗地亚）\",\"cs\":\"捷克语\",\"cs-cz\":\"捷克语（捷克）\",\"sk\":\"斯洛伐克语\",\"sk-sk\":\"斯洛伐克语（斯洛伐克）\",\"sl\":\"斯洛文尼亚语\",\"sl-si\":\"斯洛文尼亚语（斯洛文尼亚）\",\"et\":\"爱沙尼亚语\",\"et-ee\":\"爱沙尼亚语（爱沙尼亚）\",\"lv\":\"拉脱维亚语\",\"lv-lv\":\"拉脱维亚语（拉脱维亚）\",\"lt\":\"立陶宛语\",\"lt-lt\":\"立陶宛语（立陶宛）\",\"uk\":\"乌克兰语\",\"uk-ua\":\"乌克兰语（乌克兰）\",\"be\":\"白俄罗斯语\",\"be-by\":\"白俄罗斯语（白俄罗斯）\"};\n    if (languageMap.hasOwnProperty(str)) {\n        return languageMap[str];\n    }\n    const primaryCode = str.split(\"-\")[0];\n    return languageMap[primaryCode] || str;\n}",
  "lastUpdateTime": 1759572813399,
  "loginUi": "[ \n {\n        \"name\": \"登录\",\n        \"type\": \"button\",\n        \"action\": \"Login('登录')\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n       }\n  },\n  {\n        \"name\": \"登出\",\n        \"type\": \"button\",\n        \"action\": \"Login('登出')\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n       }\n  },\n {\n        \"name\": \"展示选择\",\n        \"type\": \"button\",\n        \"action\": \"Show()\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 1\n       }\n  },\n {\n        \"name\": \"级别设置\",\n        \"type\": \"button\",\n        \"action\": \"\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 1\n        }\n   },\n  {\n        \"name\": \"普通\",\n        \"type\": \"button\",\n        \"action\": \"Put_contentRating(0)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.2\n        }\n    },\n    {\n        \"name\": \"粗略\",\n        \"type\": \"button\",\n        \"action\": \"Put_contentRating(1)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.2\n        }\n    },\n    {\n        \"name\": \"限制\",\n        \"type\": \"button\",\n        \"action\": \"Put_contentRating(2)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.2\n        }\n    },\n    {\n        \"name\": \"排序切换\",\n        \"type\": \"button\",\n        \"action\": \"\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 1\n        }\n    },\n    {\n        \"name\": \"默认\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort('默认')\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最佳匹配\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(0)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最新上传\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(1)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最旧上传\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(2)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"标题升序\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(3)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"标题倒序\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(4)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最高评分\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(5)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最低评分\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(6)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最多关注\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(7)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最少关注\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(8)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最近添加\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(9)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"最早添加\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(10)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"年份升序\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(11)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"年份倒序\",\n        \"type\": \"button\",\n        \"action\": \"Put_Sort(12)\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.45\n        }\n    },\n    {\n        \"name\": \"语言/缩写（英文逗号分隔多个语言）\",\n        \"type\": \"text\",\n        \"action\": \"\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 1\n        }\n   }\n]",
  "loginUrl": "if (source.getVariable() == \"\") {\n    java.toast('已初始化');\n    let option = {\n        contentRating: ['safe', 'suggestive', 'erotica'],\n        sort: \"\",\n        Language: \"\"\n    }\n    source.setVariable(JSON.stringify(option, null, \"\\t\"));\n}\nfunction Login(l) {\n\tlet url = source.key;\n\tif ( l === \"登出\") {\n\tjava.toast('请浏览器手动登出');\n}\n\tcookie.removeCookie(url);\n\tsource.removeLoginHeader();\n\tjava.startBrowserAwait(url,\"登录\",false);\n}\nvar svb = JSON.parse(source.getVariable());\nfunction Show() {\n    let text = [];\n    const target = svb.contentRating;\n    const [sortField, sortOrder] = svb.sort.split(\",\");\n    const languages = svb.Language.split(\",\").map(x => getLanguage(x)).join(\" | \");\n    text.push(`\\n语言：${languages ? languages : \"所有语言\"}`);\n    const sortKey = sortField || \"\";\n    const sortStr = sorts.find(([_, or, ord]) =>\n        sortKey.includes(or) && ord === sortOrder)?. [0] || \"默认\";\n    text.push(`排序方式：${sortStr}`);\n\n    const contentStr = contentRating\n        .filter(([_, cr]) => target.includes(cr))\n        .map(([str]) => str)\n        .join(\" | \") || \"未设置\";\n    text.push(`内容等级：${contentStr}`);\n\n    text = text.join(\"\\n\");\n    java.toast(text);\n}\n\nfunction Put_contentRating(e) {\n    let tag = contentRating[e][1];\n    let tagStr = contentRating[e][0];\n    if (svb.contentRating.includes(tag)) {\n        java.toast(`\\n已取消展示【${tagStr}级】作品❌`);\n        svb.contentRating = svb.contentRating.filter(item => item !== tag);\n        java.log(JSON.stringify(svb.contentRating))\n    } else {\n        java.toast(`\\n已添加展示【${tagStr}级】作品✔️`);\n        svb.contentRating.push(tag);\n    }\n    source.setVariable(JSON.stringify(svb, null, \"\\t\"));\n}\n\nfunction Put_Sort(e) {\n    if (e !== \"默认\") {\n        sort_ = sorts[e][1] + \",\" + sorts[e][2];\n        point = sorts[e][0];\n    } else {\n        sort_ = \"\";\n        point = e;\n    }\n    svb.sort = sort_;\n    source.setVariable(JSON.stringify(svb, null, \"\\t\"));\n    java.toast(`\\n已切换排序为【${point}】`);\n}\n\nfunction login() {\n    svb.Language = source.getLoginInfoMap()[\"语言/缩写（英文逗号分隔多个语言）\"].toLowerCase();\n    source.setVariable(JSON.stringify(svb, null, \"\\t\"));\n}",
  "respondTime": 180000,
  "ruleBookInfo": {
    "coverUrl": "https://mangadex.org/covers/{$.id}/{$..fileName}.256.jpg",
    "init": "$.data",
    "intro": "@js:\nconst list = JSON.parse(JSON.stringify(src));\nconst description = list.attributes.description;\nconst originalLang = list.attributes.originalLanguage;\nlet result;\nif (description['zh-hk']) {\n  result = description['zh-hk'];\n} else if (description['en']) {\n  result = description['en'];\n} else if (description[originalLang]) {\n  result = description[originalLang];\n} else {\n  result = list.attributes.title.en;\n}\nresult = result.split('\\n')[0];",
    "kind": "{$.attributes.originalLanguage},{$.type},{$.attributes.tags..en}\n@js:Array.from(result).join('\\n').replace(/\\n/,\"\");",
    "name": "@js:\nconst list = JSON.parse(JSON.stringify(src));\nconst altTitles = list.attributes.altTitles;\nconst originalLang = list.attributes.originalLanguage;\nconst znEntry = altTitles.find(item => 'zn' in item);\nif (znEntry) {\n  result = znEntry.zn;\n} else {\n  const zhHkEntry = altTitles.find(item => 'zh-hk' in item);\n  if (zhHkEntry) {\n    result = zhHkEntry['zh-hk'];\n  } else {\n    const originalEntry = altTitles.find(item => originalLang in item);\n    result = originalEntry?.[originalLang] || list.attributes.title.en;\n  }\n}\nresult.split('\\n')[0];",
    "tocUrl": "https://api.mangadex.org/manga/{$.id}/feed?limit=96&includes[]=scanlation_group&includes[]=user&order[volume]=asc&order[chapter]=asc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic"
  },
  "ruleContent": {
    "content": "@js:\nvar data = JSON.parse(src);\nvar base_url = data.baseUrl;\nvar imglist = data.chapter.data;\nvar hash = data.chapter.hash;\nresult = imglist.map( x => `<img src=\"${base_url}/data/${hash}/${x}\">`);\nresult.join(\"\\n\");",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "bookList": "$.data[*]",
    "bookUrl": "https://api.mangadex.org/manga/{$.id}?includes[]=artist&includes[]=author&includes[]=cover_art",
    "coverUrl": "https://mangadex.org/covers/{$.id}/{$..fileName}.256.jpg",
    "intro": "@js:\nconst list = JSON.parse(JSON.stringify(src));\nconst description = list.attributes.description;\nconst originalLang = list.attributes.originalLanguage;\nlet result;\nif (description['zh-hk']) {\n  result = description['zh-hk'];\n} else if (description['en']) {\n  result = description['en'];\n} else if (description[originalLang]) {\n  result = description[originalLang];\n} else {\n  result = list.attributes.title.en;\n}\nresult = result.split('\\n')[0];",
    "kind": "{$.attributes.originalLanguage},{$.type},{$.attributes.tags..en}\n@js:Array.from(result).join('\\n').replace(/\\n/,\"\");",
    "name": "@js:\nconst list = JSON.parse(JSON.stringify(src));\nconst altTitles = list.attributes.altTitles;\nconst originalLang = list.attributes.originalLanguage;\nconst zhEntry = altTitles.find(item => 'zh' in item);\nif (zhEntry) {\n  result = zhEntry.zh;\n} else {\n  const zhHkEntry = altTitles.find(item => 'zh-hk' in item);\n  if (zhHkEntry) {\n    result = zhHkEntry['zh-hk'];\n  } else {\n    const originalEntry = altTitles.find(item => originalLang in item);\n    result = originalEntry?.[originalLang] || list.attributes.title.en;\n  }\n}\nresult.split(\"\\n\")[0];"
  },
  "ruleToc": {
    "chapterList": "@js:\nvar lists_ = [];\nvar seenChapters = new Set();\nvar volumeCounter = {};\n\nJSON.parse(src).data.forEach(chapter => {\n    const { chapter: chap, updatedAt, translatedLanguage } = chapter.attributes;\n    const url = chapter.id;\n    \n    if (!seenChapters.has(chap)) {\n        seenChapters.add(chap);\n        lists_.push({\n            title: `第${chap}章 分译`, \n            url : \"\",\n            volume: 1\n        });\n        volumeCounter[chap] = 0;\n    }\n    const isChapter = true;\n    if (isChapter) {\n        volumeCounter[chap] += 1;\n    }\n\n    lists_.push({\n        title: `第${chap}章 （译文${volumeCounter[chap]}）`,\n        url: `https://api.mangadex.org/at-home/server/${url}?forcePort443=false`,\n        info: `${formatDate(updatedAt)} | ${getLanguage(translatedLanguage)}`,\n        volume: 0\n    });\n});\n//java.log(JSON.stringify(lists_))\nlists_;",
    "chapterName": "title",
    "chapterUrl": "url",
    "isVolume": "volume",
    "nextTocUrl": "@js: var result = [];\nconst pages = Math.round(JSON.parse(src).total / JSON.parse(src).limit) -1;\n//java.log(pages);\nfor (let i=1;i <= pages;i++) {\nurl = baseUrl.replace(/offset=0/,`offset=${i*96}`)\nresult.push(url);\n}\nresult;",
    "updateTime": "info"
  },
  "searchUrl": "@js:\neval(String(source.loginUrl));\nresult = `https://api.mangadex.org/manga?limit=32&offset={{(page-1)*32}}&title={{key}}&includes[]=cover_art&includedTagsMode=AND&excludedTagsMode=OR{{buildQueryParams()}}`;\nresult;",
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
