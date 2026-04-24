// @name 爱轻写真（优+）
// @version 2025.12.21
// @author converted
// @url http://www.635k.com/
// @enabled true
// @tags 漫画,书源,图片,converted
// @description 源社区：@Mengteen  2025.11.22原创
// @description 二传二创或者是其它问题请联系我。
// @description 我邮箱:[xxxmgqxxx@vip.qq.com]
// @description 我QQ:99737563(备注来意)
// @description 1.不需要挂🪜子,不排除个别地方网络加载可能有点慢或者是需要挂🪜子才能访问，别急！
// @description 2.发现是按我个人喜欢,你也可以自行创建你个人喜欢的。

const LEGADO_SOURCE = {
  "bookSourceComment": "源社区：@Mengteen  2025.11.22原创\n二传二创或者是其它问题请联系我。\n我邮箱:[xxxmgqxxx@vip.qq.com]\n我QQ:99737563(备注来意)\n1.不需要挂🪜子,不排除个别地方网络加载可能有点慢或者是需要挂🪜子才能访问，别急！\n2.发现是按我个人喜欢,你也可以自行创建你个人喜欢的。",
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "爱轻写真（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "http://www.635k.com/##@Mengteen",
  "customButton": false,
  "customOrder": 232,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\"title\": \"首页\",\"url\": \"http://www.635k.com/\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"绅士摄影\",\"url\": \"/shenshiSHENSHIjinjiqihua_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"SSA丝社\",\"url\": \"/ssasishe_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"Ligui丽柜\",\"url\": \"/liguiligui_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"异思趣向\",\"url\": \"/IESSyisiquxiang_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"丝慕SMOU\",\"url\": \"/simusmou_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"克拉女神\",\"url\": \"/kelanvshenKelagirls_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"丝意SIEE\",\"url\": \"/siyiSIEE_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"丝袜套图\",\"url\": \"/siwataotu_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"慕丝女郎\",\"url\": \"/musinvlang_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}},\n{\"title\": \"梦丝女神\",\"url\": \"/mengsinvshen_{{page}}.html\",\n\"style\": {\"layout_flexGrow\": 1,\n\"layout_flexBasisPercent\": 0.25\n}}\n]",
  "header": "{\"User-Agent\": \"Mozilla/5.0 (Linux; Android 13; 2211133C Build/TKQ1.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1766316449562,
  "respondTime": 3194,
  "ruleBookInfo": {
    "kind": "span@text",
    "tocUrl": ".all-page@a@href"
  },
  "ruleContent": {
    "content": "@js: \nlet pics=java.getString('img@src'); \nlet p=String(pics).split(\"\\n\").map(i=>`<img src=\"${i}\">`).join(\"\\n\");\np;",
    "imageStyle": "FULL"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": ".item-meta@text",
    "bookList": "#post_list_box@li",
    "bookUrl": "h2@a@href",
    "checkKeyWord": "写真",
    "coverUrl": "img@src",
    "intro": "<br>🌟\n<br>📆{{@@.ltim@text}} 发布\n<br>{{\"🏄Mengteen ©2025\"}}",
    "name": "h2@a@text"
  },
  "ruleToc": {
    "chapterList": "ul@li",
    "chapterName": "text",
    "chapterUrl": "href"
  },
  "searchUrl": "/search/{{page}}_2.html",
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
