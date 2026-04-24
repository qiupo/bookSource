// @name 起点中文（优+）
// @version 2026.02.26
// @author converted
// @url https://m.qidian.com
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description // Error: 发现失效
// @description 重要提示！！！！！！！！！！
// @description "
// @description 本书源只支持最新版洛娅橙改版阅读Σ\n请安装后重新导入书源https://loyc.xyz/c/legado.html#download
// @description "
// @description //在小说迷的帮助下完善了Volume规则

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 发现失效\n\n重要提示！！！！！！！！！！\n\"\n本书源只支持最新版洛娅橙改版阅读Σ\\n请安装后重新导入书源https://loyc.xyz/c/legado.html#download\n\"\n//在小说迷的帮助下完善了Volume规则\n//260211小新在竹坞风发的书源基础上添加筛选按钮，不确定这个源是不是竹坞风写的，因为仓库里他发的源都会加个🎃\n还稍微改了一下其他规则和修复无效规则\n在另一个发现规则一样的源看到如下信息:\n\"发现列表规则等代码by：http://sy.legado1.top/sy.php/7b0b4ca64d07750d75e4eff05a28dd40.json\n发现规则by：楠枫\n有3-7个发现本身网站就是空的，我检查的时候没删，如  现实—成功励志\"",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "起点中文（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.qidian.com#按钮筛选",
  "customButton": false,
  "customOrder": 363,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\ntry {\n    // 初始化结果数组，用于存储菜单项数据\n    var result = [];\n\n    //初始化源变量\n    csh();\n\n\n    //辅助函数：向结果数组添加菜单项\n    var push = (title, url, size) => result.push({\n        \"title\": title,\n        \"url\": url,\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": size\n        }\n    });\n\n    push(\"🔥榜单🔥\", null, 1);\n    push(\"月票榜\", `/majax/rank/yuepiaolist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"畅销榜\", `/majax/rank/hotsaleslist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"阅读榜\", `/majax/rank/readindexlist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"书友榜\", `/majax/rank/newfanslist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"推荐榜\", `/majax/rank/reclist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"更新榜\", `/majax/rank/updatelist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"签约榜\", `/majax/rank/signlist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"新书榜\", `/majax/rank/newbooklist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"新人榜\", `/majax/rank/newauthorlist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"三江推荐\", `/majax/recommend/sanjiangList?pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"新书强推\", `/majax/recommend/strongreclist?gender=male&pageNum={{page}}&catId=-1&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"人气免费\", `/majax/recommend/hotFreelist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"新书免费\", `/majax/recommend/freeNewlist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"新书抢先\", `/majax/recommend/newBooklist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n    push(\"畅销完本\", `/majax/recommend/bestSelllist?gender=male&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`, 0.25);\n\n\n\n    push(\"🔥点击筛选🔥\", null, 1);\n\n    result.push(createFilter(\n        \"排序\",\n        [\"人气\", \"时间\", \"字数\", \"收藏\", \"推荐\", \"点击\"],\n        \"人气\",\n        \"orderBy\",\n        0.33\n    ));\n\n    result.push(createFilter(\n        \"字数\",\n        [\"全部\", \"30万以下\", \"30-50万\", \"50-100万\", \"100-200万\", \"200万以上\"],\n        \"全部\",\n        \"size\",\n        0.33\n    ));\n\n    result.push(createFilter(\n        \"状态\",\n        [\"连载\", \"完本\"],\n        \"连载\",\n        \"isfinish\",\n        0.33\n    ));\n    result.push(createFilter(\n        \"分类\",\n        [\"🎆玄幻🎆\", \"🎆奇幻🎆\", \"🎆武侠🎆\", \"🎆仙侠🎆\", \"🎆都市🎆\", \"🎆现实🎆\", \"🎆军事🎆\", \"🎆历史🎆\", \"🎆游戏🎆\", \"🎆体育🎆\", \"🎆科幻🎆\", \"🎆悬疑🎆\", \"🎆诸天无限🎆\", \"🎆轻小说🎆\", \"🎆短篇🎆\"],\n        \"全部\",\n        \"sort\",\n        0.33\n    ));\n\n\n    // 分类参数映射表\n    var orderBy_dic = {\n        \"人气\": \"\",\n        \"时间\": \"4\",\n        \"字数\": \"3\",\n        \"收藏\": \"11\",\n        \"推荐\": \"9\",\n        \"点击\": \"1\"\n\n    };\n\n    var size_dic = {\n        \"全部\": \"\",\n        \"30万以下\": \"1\",\n        \"30-50万\": \"2\",\n        \"50-100万\": \"3\",\n        \"100-200万\": \"4\",\n        \"200万以上\": \"5\"\n    };\n\n    var isfinish_dic = {\n        \"连载\": \"\",\n        \"完本\": \"1\"\n    };\n\n\n    var type_dic = {\n        \"🎆玄幻🎆\": {\n            \"🎆玄幻🎆\": \"catId=21\",\n            \"东方玄幻\": \"catId=21&subCatId=8\",\n            \"异世大陆\": \"catId=21&subCatId=73\",\n            \"王朝争霸\": \"catId=21&subCatId=58\",\n            \"高武世界\": \"catId=21&subCatId=78\"\n        },\n        \"🎆奇幻🎆\": {\n            \"🎆奇幻🎆\": \"catId=1\",\n            \"现代魔法\": \"catId=1&subCatId=38\",\n            \"剑与魔法\": \"catId=1&subCatId=62\",\n            \"史诗奇幻\": \"catId=1&subCatId=201\",\n            \"神秘幻想\": \"catId=1&subCatId=202\",\n            \"历史神话\": \"catId=1&subCatId=20092\",\n            \"另类幻想\": \"catId=1&subCatId=20093\"\n        },\n        \"🎆武侠🎆\": {\n            \"🎆武侠🎆\": \"catId=2\",\n            \"传统武侠\": \"catId=2&subCatId=5\",\n            \"武侠幻想\": \"catId=2&subCatId=30\",\n            \"国士无双\": \"catId=2&subCatId=206\",\n            \"古武未来\": \"catId=2&subCatId=20099\",\n            \"武侠同人\": \"catId=2&subCatId=20100\"\n        },\n        \"🎆仙侠🎆\": {\n            \"🎆仙侠🎆\": \"catId=22\",\n            \"修真文明\": \"catId=22&subCatId=18\",\n            \"幻想修仙\": \"catId=22&subCatId=44\",\n            \"现代修真\": \"catId=22&subCatId=64\",\n            \"神话修真\": \"catId=22&subCatId=207\",\n            \"古典仙侠\": \"catId=22&subCatId=20101\"\n        },\n        \"🎆都市🎆\": {\n            \"🎆都市🎆\": \"catId=4\",\n            \"爱情婚姻\": \"catId=4&subCatId=65535\",\n            \"都市生活\": \"catId=4&subCatId=12\",\n            \"都市异能\": \"catId=4&subCatId=16\",\n            \"异术超能\": \"catId=4&subCatId=74\",\n            \"青春校园\": \"catId=4&subCatId=130\",\n            \"娱乐明星\": \"catId=4&subCatId=151\",\n            \"商战职场\": \"catId=4&subCatId=153\"\n        },\n        \"🎆现实🎆\": {\n            \"🎆现实🎆\": \"catId=15\",\n            \"时代叙事\": \"catId=15&subCatId=20106\",\n            \"家庭伦理\": \"catId=15&subCatId=6\",\n            \"女性题材\": \"catId=15&subCatId=20104\",\n            \"青年故事\": \"catId=15&subCatId=20108\",\n            \"社会悬疑\": \"catId=15&subCatId=20105\",\n            \"人间百态\": \"catId=15&subCatId=209\",\n            \"成功励志\": \"catId=15&subCatId=20107\"\n        },\n        \"🎆军事🎆\": {\n            \"🎆军事🎆\": \"catId=6\",\n            \"军旅生涯\": \"catId=6&subCatId=54\",\n            \"军事战争\": \"catId=6&subCatId=65\",\n            \"战争幻想\": \"catId=6&subCatId=80\",\n            \"抗战烽火\": \"catId=6&subCatId=230\",\n            \"谍战特工\": \"catId=6&subCatId=231\"\n        },\n        \"🎆历史🎆\": {\n            \"🎆历史🎆\": \"catId=5\",\n            \"架空历史\": \"catId=5&subCatId=22\",\n            \"秦汉三国\": \"catId=5&subCatId=48\",\n            \"上古先秦\": \"catId=5&subCatId=220\",\n            \"历史传记\": \"catId=5&subCatId=32\",\n            \"两晋隋唐\": \"catId=5&subCatId=222\",\n            \"五代十国\": \"catId=5&subCatId=223\",\n            \"两宋元明\": \"catId=5&subCatId=224\",\n            \"清史民国\": \"catId=5&subCatId=225\",\n            \"外国历史\": \"catId=5&subCatId=226\",\n            \"民间传说\": \"catId=5&subCatId=20094\"\n        },\n        \"🎆游戏🎆\": {\n            \"🎆游戏🎆\": \"catId=7\",\n            \"电子竞技\": \"catId=7&subCatId=7\",\n            \"虚拟网游\": \"catId=7&subCatId=70\",\n            \"游戏异界\": \"catId=7&subCatId=240\",\n            \"游戏系统\": \"catId=7&subCatId=20102\",\n            \"游戏主播\": \"catId=7&subCatId=20103\"\n        },\n        \"🎆体育🎆\": {\n            \"🎆体育🎆\": \"catId=8\",\n            \"篮球运动\": \"catId=8&subCatId=28\",\n            \"体育赛事\": \"catId=8&subCatId=55\",\n            \"足球运动\": \"catId=8&subCatId=82\"\n        },\n        \"🎆科幻🎆\": {\n            \"🎆科幻🎆\": \"catId=9\",\n            \"古武机甲\": \"catId=9&subCatId=21\",\n            \"未来世界\": \"catId=9&subCatId=25\",\n            \"星际文明\": \"catId=9&subCatId=68\",\n            \"超级科技\": \"catId=9&subCatId=250\",\n            \"时空穿梭\": \"catId=9&subCatId=251\",\n            \"进化变异\": \"catId=9&subCatId=252\",\n            \"末世危机\": \"catId=9&subCatId=253\"\n        },\n        \"🎆悬疑🎆\": {\n            \"🎆悬疑🎆\": \"catId=10\",\n            \"诡秘悬疑\": \"catId=10&subCatId=26\",\n            \"奇妙世界\": \"catId=10&subCatId=35\",\n            \"侦探推理\": \"catId=10&subCatId=57\",\n            \"探险求生\": \"catId=10&subCatId=260\",\n            \"古今传奇\": \"catId=10&subCatId=20095\"\n        },\n        \"🎆诸天无限🎆\": {\n            \"🎆诸天无限🎆\": \"catId=20109\",\n            \"无限\": \"catId=20109&subCatId=20110\",\n            \"诸天\": \"catId=20109&subCatId=20111\",\n            \"综漫\": \"catId=20109&subCatId=20112\"\n        },\n        \"🎆轻小说🎆\": {\n            \"🎆轻小说🎆\": \"catId=12\",\n            \"原生幻想\": \"catId=12&subCatId=60\",\n            \"现代幻想\": \"catId=12&subCatId=10\",\n            \"衍生同人\": \"catId=12&subCatId=281\",\n            \"搞笑吐槽\": \"catId=12&subCatId=282\",\n            \"恋爱日常\": \"catId=12&subCatId=66\"\n        },\n        \"🎆短篇🎆\": {\n            \"🎆短篇🎆\": \"catId=20076\",\n            \"诗歌散文\": \"catId=20076&subCatId=20097\",\n            \"人物传记\": \"catId=20076&subCatId=20098\",\n            \"影视剧本\": \"catId=20076&subCatId=20075\",\n            \"评论文集\": \"catId=20076&subCatId=20077\",\n            \"生活随笔\": \"catId=20076&subCatId=20078\",\n            \"美文游记\": \"catId=20076&subCatId=20079\",\n            \"短篇小说\": \"catId=20076&subCatId=20096\"\n        }\n    };\n\n\n    var sort = Get(\"sort\"); // 例如 \"🎆玄幻🎆\"\n    var size = Get(\"size\");\n    var isfinish = Get(\"isfinish\");\n    var orderBy = Get(\"orderBy\");\n\n    infoMap.save();\n\n    // 遍历选定分类下的所有子分类\n    Object.keys(type_dic[sort]).forEach(title => {\n        const queryParams = type_dic[sort][title]; // 获取查询参数字符串\n        const url = `majax/category/list?${queryParams}&size=${size_dic[size]}&isfinish=${isfinish_dic[isfinish]}&gender=male&orderBy=${orderBy_dic[orderBy]}&pageNum={{page}}&_csrfToken={{cookie.getKey(\"https://qidian.com\",\"_csrfToken\")}}`;\n        var sizeFactor;\n        if (queryParams.includes('subCatId')) {\n            sizeFactor = 0.25;\n        } else {\n            sizeFactor = 1;\n        }\n        push(title, url, sizeFactor);\n    });\n    JSON.stringify(result);\n\n} catch (e) {\n    java.log(e.message);\n    java.longToast(\"本书源只支持最新版洛雅橙改版阅读Σ\\n请安装后重新导入书源\");\n\n    result = `下载阅读Σ::{\\{java.longToast(\"本书源只支持最新版洛娅橙改版阅读Σ\\\\n请安装后重新导入书源\");java.startBrowser(\"https://loyc.xyz/c/legado.html#download\",\"下载阅读Σ最新测试版\");}}`;\n}",
  "header": "{\"User-Agent\":\"Mozilla/5.0 (Linux; U; Android 13; zh-Hans-CN; PFJM10 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/135.0.4896.58 Quark/6.13.6.581 Mobile Safari/537.36\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"}",
  "jsLib": "//初始化源变量\nfunction csh() {\n    const {\n        java,\n        source\n    } = this;\n    var original = {\n        \"orderBy\": \"人气\",\n        \"isfinish\": \"连载\",\n        \"size\": \"全部\",\n        \"sort\": \"🎆玄幻🎆\"\n    };\n    var csh_1;\n    //设置默认的源变量\n    try {\n\n        csh_1 = JSON.parse(source.getVariable());\n        if (csh_1 == null) {\n            error;\n        } else {\n            '';\n        };\n    } catch (e) {\n        csh_1 = original;\n        source.setVariable(JSON.stringify(csh_1, null, 2));\n        java.toast(\"初始化成功\")\n    }\n\n}\n\n\n\n//获取源变量的值\nfunction Get(e) {\n    const {\n        java,\n        source,\n        cookie\n    } = this;\n    var get = JSON.parse(source.getVariable());\n    return get[e];\n}\n\n//按钮切换时改变源变量并刷新发现\nfunction show(m, t) {\n    const {\n        java,\n        source\n    } = this;\n    //源变量为空时刷新发现，重置源变量\n    source.getVariable()==''?java.refreshExplore():'';//\n    var data = JSON.parse(source.getVariable());\n    //java.log(data);\n    data[t] = m;\n    //java.log(JSON.stringify(data));\n    source.setVariable(JSON.stringify(data, null, 2));\n    java.refreshExplore();\n}\n\n/**\n * 创建筛选器配置\n * @param {string} title - 筛选器标题\n * @param {string[]} chars - 选项列表\n * @param {string} defaultVal - 默认值\n * @param {string} paramKey - URL参数名\n * @param {number} size - 布局占比（0-1之间，如0.33表示33%）\n * @returns {Object} 筛选器配置对象\n */\nfunction createFilter(title, chars, defaultVal, paramKey, size) {\n    return {\n        title: title,\n        type: \"select\",\n        chars: chars,\n        default: defaultVal,\n        action: `show(infoMap['${title}'],'${paramKey}')`,\n        style: {\n            layout_flexGrow: 1,\n            layout_flexBasisPercent: size\n        }\n    };\n}\n\n",
  "lastUpdateTime": 1772086511729,
  "respondTime": 186034,
  "ruleBookInfo": {
    "author": ".detail__header-detail__author@a@textNodes",
    "coverUrl": "[property$=image]@content",
    "intro": "\n&nbsp;\n📖 书名：{{@@[property=\"og:title\"]@content}}\n👤 作者：{{@@[property=\"og:novel:author\"]@content}}\n📜 状态：{{@@[property=\"og:novel:status\"]@content}}\n✏  分类：{{@@[class=\"detail__header-detail__line\"].0@text}}\n🔖 标签：{{@@.tags-wrapper@.tag@text##\\n##\\#}}\n🕰 最新：{{@@[property=\"og:novel:latest_chapter_name\"]@content}}\n🗿 更新时间：{{@@[property=\"og:novel:update_time\"]@content}}\n👁 榜单信息：{{@@[class=\"novelbook__honorinfo\"]@text##(\\S+)\\s+(\\S+)\\s+(\\S+)\\s+(\\S+)\\s+(\\S+)\\s+(\\S+)\\s*##\n$2:$1\n$4:$3\n$6:$5}}\n🏷 简介：{{@@[class=\"detail__summary__content\"]@html}}\n",
    "kind": "[property~=category|status|update_time]@content##\\s.*",
    "lastChapter": "[property$=chapter_name]@content",
    "name": "\n\n.detail__header-detail__title@text",
    "tocUrl": "{{baseUrl}}/catalog/",
    "wordCount": ".detail__header-detail__line@text##.*\\/.*|\\|.*|\\n"
  },
  "ruleContent": {
    "content": ".content@p@html",
    "imageStyle": "FULL"
  },
  "ruleExplore": {
    "author": "$.bAuth",
    "bookList": "$.data.records",
    "bookUrl": "https://m.qidian.com/book/{{$.bid}}",
    "coverUrl": "https://bookcover.yuewen.com/qdbimg/349573/{{$.bid}}",
    "intro": "$.desc",
    "kind": "$.cat&&$.state\n",
    "name": "$.bName",
    "wordCount": "$.cnt\n@js:\njava.put(\"count\",result);"
  },
  "ruleSearch": {
    "author": "p.-4@text",
    "bookList": ".y-list__item",
    "bookUrl": "{{@@a.0@href##chapter##book}}##\\/0\\/\n",
    "coverUrl": "img@data-src",
    "intro": "h2+p@html",
    "kind": "p[-3:]@text",
    "name": "h2@text"
  },
  "ruleToc": {
    "chapterList": ".y-list__item@a,._chapterBar_fps9g_592",
    "chapterName": "h2@text||text",
    "chapterUrl": "href",
    "isVip": "span@text\n@js:\nresult=result==\"免费\"?false:true;\nresult;",
    "isVolume": "textNodes\n@js:\nresult=result?true:false;\nresult;",
    "preUpdateJs": "java.refreshTocUrl()",
    "updateTime": "alt\n@js:\nresult=(result.match(/首发时间: (.*)章节字数/) || [\"\",\"\"])[1];\nresult;"
  },
  "searchUrl": "/so/{{key}}.html?pageNum={{page}}",
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
