// @name 起点中文
// @version 2025.10.01
// @author converted
// @url https://www.qidian.com
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description 发现为空，目录加载失败，点击登录验证一下。
// @description 想看订阅章节，点登录，在我的书架那里登录。

const LEGADO_SOURCE = {
  "bookSourceComment": "发现为空，目录加载失败，点击登录验证一下。\n想看订阅章节，点登录，在我的书架那里登录。",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "起点中文",
  "bookSourceType": 0,
  "bookSourceUrl": "https://www.qidian.com",
  "bookUrlPattern": "https://www.qidian.com/book/\\d+",
  "customButton": false,
  "customOrder": 416,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\"title\":\"男频\",\"url\":\"https://www.qidian.com/all/<,-page{{page}}/>##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.4}},\n{\"title\":\"免费小说\",\"url\":\"https://www.qidian.com/all/vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"精品小说\",\"url\":\"https://www.qidian.com/all/sign2<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"限时免费\",\"url\":\"https://www.qidian.com/free/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"月票榜\",\"url\":\"https://www.qidian.com/rank/yuepiao/<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"畅销榜\",\"url\":\"https://www.qidian.com/rank/hotsales/<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"阅读指数榜\",\"url\":\"https://www.qidian.com/rank/readindex/<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"推荐榜\",\"url\":\"https://www.qidian.com/rank/recom/<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"收藏榜\",\"url\":\"https://www.qidian.com/rank/collect/<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"更新榜\",\"url\":\"https://www.qidian.com/rank/vipup/<,-page{{page}}/>##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"玄幻\",\"url\":\"https://www.qidian.com/all/chanId21<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId21-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId21-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId21-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"东方玄幻\",\"url\":\"https://www.qidian.com/all/chanId21-subCateId8<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"异世大陆\",\"url\":\"https://www.qidian.com/all/chanId21-subCateId73<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"王朝争霸\",\"url\":\"https://www.qidian.com/all/chanId21-subCateId58<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"高武世界\",\"url\":\"https://www.qidian.com/all/chanId21-subCateId78<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"奇幻\",\"url\":\"https://www.qidian.com/all/chanId1-<,page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId1-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId1-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId1-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"现代魔法\",\"url\":\"https://www.qidian.com/all/chanId1-subCateId38/<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"剑与魔法\",\"url\":\"https://www.qidian.com/all/chanId1-subCateId62<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"史诗奇幻\",\"url\":\"https://www.qidian.com/all/chanId1-subCateId201<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"神秘幻想\",\"url\":\"https://www.qidian.com/all/chanId1-subCateId202<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"历史神话\",\"url\":\"https://www.qidian.com/all/chanId1-subCateId20092<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"另类幻想\",\"url\":\"https://www.qidian.com/all/chanId1-subCateId20093<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"仙侠\",\"url\":\"https://www.qidian.com/all/chanId22<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId22-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId22-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId22-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"修真文明\",\"url\":\"https://www.qidian.com/all/chanId22-subCateId18<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"幻想修仙\",\"url\":\"https://www.qidian.com/all/chanId22-subCateId44<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"现代修真\",\"url\":\"https://www.qidian.com/all/chanId22-subCateId64<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"神话修真\",\"url\":\"https://www.qidian.com/all/chanId22-subCateId207<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古典仙侠\",\"url\":\"https://www.qidian.com/all/chanId22-subCateId20101<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"都市\",\"url\":\"https://www.qidian.com/all/chanId4<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId4-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId4-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId4-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"都市生活\",\"url\":\"https://www.qidian.com/all/chanId4-subCateId12<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"都市异能\",\"url\":\"https://www.qidian.com/all/chanId4-subCateId16<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"异术超能\",\"url\":\"https://www.qidian.com/all/chanId4-subCateId74<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"青春校园\",\"url\":\"https://www.qidian.com/all/chanId4-subCateId130<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"娱乐明星\",\"url\":\"https://www.qidian.com/all/chanId4-subCateId151<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"商战职场\",\"url\":\"https://www.qidian.com/all/chanId4-subCateId153<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"科幻\",\"url\":\"https://www.qidian.com/all/chanId9<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId9-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId9-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId9-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古武机甲\",\"url\":\"https://www.qidian.com/all/chanId9-subCateId21<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"未来世界\",\"url\":\"https://www.qidian.com/all/chanId9-subCateId25<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"星际文明\",\"url\":\"https://www.qidian.com/all/chanId9-subCateId68<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"超级科技\",\"url\":\"https://www.qidian.com/all/chanId9-subCateId250<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"时空穿梭\",\"url\":\"https://www.qidian.com/all/chanId9-subCateId251<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"进化变异\",\"url\":\"https://www.qidian.com/all/chanId9-subCateId252<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"末世危机\",\"url\":\"https://www.qidian.com/all/chanId9-subCateId253<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏\",\"url\":\"https://www.qidian.com/all/chanId7<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId7-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId7-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId7-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"电子竞技\",\"url\":\"https://www.qidian.com/all/chanId7-subCateId7<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"虚拟网游\",\"url\":\"https://www.qidian.com/all/chanId7-subCateId70<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏异界\",\"url\":\"https://www.qidian.com/all/chanId7-subCateId240<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏系统\",\"url\":\"https://www.qidian.com/all/chanId7-subCateId20102<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"游戏主播\",\"url\":\"https://www.qidian.com/all/chanId7-subCateId20103<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"诸天无限\",\"url\":\"https://www.qidian.com/all/chanId20<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId20109-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId20109-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId20109-action1-<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"无限\",\"url\":\"https://www.qidian.com/all/chanId20109-subCateId20110<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"诸天\",\"url\":\"https://www.qidian.com/all/chanId20109-subCateId20111<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"综漫\",\"url\":\"https://www.qidian.com/all/chanId20109-subCateId20112<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"悬疑\",\"url\":\"https://www.qidian.com/all/chanId10<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId10-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId10-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId10-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"诡秘悬疑\",\"url\":\"https://www.qidian.com/all/chanId10-subCateId26<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"奇妙世界\",\"url\":\"https://www.qidian.com/all/chanId10-subCateId35<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"侦探推理\",\"url\":\"https://www.qidian.com/all/chanId10-subCateId57<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"探险生存\",\"url\":\"https://www.qidian.com/all/chanId10-subCateId260<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古今传奇\",\"url\":\"https://www.qidian.com/all/chanId10-subCateId20095<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"轻小说\",\"url\":\"https://www.qidian.com/all/chanId12<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId12-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId12-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId12-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"原生幻想\",\"url\":\"https://www.qidian.com/all/chanId12-subCateId60<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"恋爱日常\",\"url\":\"https://www.qidian.com/all/chanId12-subCateId66<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"衍生同人\",\"url\":\"https://www.qidian.com/all/chanId12-subCateId281<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"搞笑吐槽\",\"url\":\"https://www.qidian.com/all/chanId12-subCateId282<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"历史\",\"url\":\"https://www.qidian.com/all/chanId5<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId5-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId5-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId5-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"架空历史\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId22<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"秦汉三国\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId48<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"上古先秦\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId220<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"历史传记\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId32<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"两晋隋唐\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId222<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"五代十国\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId223<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"两宋元明\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId224<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"清史民国\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId225<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"外国历史\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId226<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"民间传说\",\"url\":\"https://www.qidian.com/all/chanId5-subCateId20094<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"军事\",\"url\":\"https://www.qidian.com/all/chanId6<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId6-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId6-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId6-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"军旅生涯\",\"url\":\"https://www.qidian.com/all/chanId6-subCateId54<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"军事战争\",\"url\":\"https://www.qidian.com/all/chanId6-subCateId65<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"战争幻想\",\"url\":\"https://www.qidian.com/all/chanId6-subCateId80<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"抗战烽火\",\"url\":\"https://www.qidian.com/all/chanId6-subCateId230<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"谍战特工\",\"url\":\"https://www.qidian.com/all/chanId6-subCateId231<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"体育\",\"url\":\"https://www.qidian.com/all/chanId8<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId8-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId8-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId8-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"篮球运动\",\"url\":\"https://www.qidian.com/all/chanId8-subCateId28<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"体育赛事\",\"url\":\"https://www.qidian.com/all/chanId8-subCateId28<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"足球运动\",\"url\":\"https://www.qidian.com/all/chanId8-subCateId28<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"武侠\",\"url\":\"https://www.qidian.com/all/chanId2<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId2-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId2-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId2-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"传统武侠\",\"url\":\"https://www.qidian.com/all/chanId2-subCateId5<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"武侠幻想\",\"url\":\"https://www.qidian.com/all/chanId2-subCateId30<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"国术无双\",\"url\":\"https://www.qidian.com/all/chanId2-subCateId206<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"古武未来\",\"url\":\"https://www.qidian.com/all/chanId2-subCateId20099<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"武侠同人\",\"url\":\"https://www.qidian.com/all/chanId2-subCateId20100<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"现实\",\"url\":\"https://www.qidian.com/all/chanId15<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId15-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId15-action0<,-page{{page}}>/<,-page{{page}}>##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId15-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"时代叙事\",\"url\":\"https://www.qidian.com/all/chanId15-subCateId20106<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"家庭伦理\",\"url\":\"https://www.qidian.com/all/chanId15-subCateId6<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"女性题材\",\"url\":\"https://www.qidian.com/all/chanId15-subCateId20104<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"青年故事\",\"url\":\"https://www.qidian.com/all/chanId15-subCateId20108<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"社会悬疑\",\"url\":\"https://www.qidian.com/all/chanId15-subCateId20105<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"人间百态\",\"url\":\"https://www.qidian.com/all/chanId15-subCateId209<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"短篇\",\"url\":\"https://www.qidian.com/all/chanId20076<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"新书\",\"url\":\"https://www.qidian.com/all/chanId20076-vip0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"连载\",\"url\":\"https://www.qidian.com/all/chanId20076-action0<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"完本\",\"url\":\"https://www.qidian.com/all/chanId20076-action1<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"诗歌散文\",\"url\":\"https://www.qidian.com/all/chanId20076-subCateId20097<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"人物传记\",\"url\":\"https://www.qidian.com/all/chanId20076-subCateId20098<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"影视剧本\",\"url\":\"https://www.qidian.com/all/chanId20076-subCateId20075<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"评论文集\",\"url\":\"https://www.qidian.com/all/chanId20076-subCateId20077<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"生活随笔\",\"url\":\"https://www.qidian.com/all/chanId20076-subCateId20078<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"美文游记\",\"url\":\"https://www.qidian.com/all/chanId20076-subCateId20079<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"短篇小说\",\"url\":\"https://www.qidian.com/all/chanId20076-subCateId20096<,-page{{page}}>/##$##,{'webView': true}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"————\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}\n]",
  "header": "{\n  \"User-Agent\": \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36\"\n}",
  "lastUpdateTime": 1759350308177,
  "loginUrl": "https://www.qidian.com/all/",
  "respondTime": 10833,
  "ruleBookInfo": {
    "author": "id.bookName@text",
    "coverUrl": "id.bookImg@tag.img@src",
    "intro": "id.book-intro-detail@html",
    "kind": "{{@@class.book-attribute@tag.span.0@text##完本##完结}}\n{{@@class.update-time@text##更新时间:}}\n{{@@class.count@tag.em.0@text}}\n{{@@class.book-attribute@tag.a.0@text}}\n{{@@class.book-attribute@tag.a.1@text}}",
    "lastChapter": "class.latest-chapter@text##最新章节：第\\d+章\\s+",
    "name": "id.bookName@text"
  },
  "ruleContent": {
    "content": "tag.main@class.content-text@html||tag.main@html",
    "imageStyle": "full"
  },
  "ruleExplore": {
    "author": "class.author@tag.a.0@text",
    "bookList": "class.all-img-list@tag.li&&class.book-img-text@tag.li",
    "bookUrl": "class.book-mid-info@h2@tag.a@href##$##,{'webView': true}",
    "coverUrl": "class.book-img-box@tag.a@tag.img@src",
    "intro": "class.intro@textNodes",
    "kind": "{{@@class.author@tag.span@text}}\n{{@@class.author@tag.a.1@text}}\n{{@@class.author@tag.a.2@text}}##连载中##连载",
    "lastChapter": "class.update@tag.a@text||class.update@tag.b.0@text##最新更新\\s",
    "name": "{{@@class.book-mid-info@h2@tag.a@text}}{{@@class.book-info@h2@tag.a@text}}"
  },
  "ruleSearch": {
    "author": "class.author@tag.a.0@text",
    "bookList": "class.book-img-text@tag.li",
    "bookUrl": "class.btn@tag.a@href##$##,{\n  \"webView\": true\n}",
    "coverUrl": "class.book-img-box@tag.a@tag.img@src##150$##600",
    "intro": "class.intro@textNodes",
    "kind": "{{@@class.author@tag.span@text}}\n{{@@class.update@tag.span@text}}\n{{@@class.total@p.0@span.0@text}}\n{{@@class.author@tag.a.1@text}}",
    "lastChapter": "class.update@tag.a@text##最新更新\\s",
    "name": "class.book-info-title@text"
  },
  "ruleToc": {
    "chapterList": ":<li class=\"chapter-item\" data-rid=\"\\d+\"><a class=\"chapter-name\" href=\"(.*?)\" target=\"_blank\" data-eid=\"qd_G55\" data-cid=\".*?\" alt=\".*?\" title=\".*?首发时间：(.*?)\">(.*?)</a>(.*?)</li> |<h3 class=\"volume-name\">(.*?)<span class=\"dot\">(.*?)</span>(.*?)<span class=.*?>(.*?)</span></h3>",
    "chapterName": "$3$5$6$7$8",
    "chapterUrl": "$1<js>if(result==''){result=result}else{result=result+',{'+'\"webView\"'+': true}'}</js>",
    "isVip": "$4",
    "isVolume": "$1@js:if (result == \"\") {\n    true\n} else {\n    false\n}",
    "preUpdateJs": "java.refreshTocUrl()",
    "updateTime": "$2"
  },
  "searchUrl": "https://www.qidian.com/so/{{key}}.html{{page - 1 == 0 ? \"\":\"?page=\"+page}},{\n  \"webView\": true\n}",
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
