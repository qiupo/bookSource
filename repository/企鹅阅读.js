// @name 企鹅阅读
// @version 2025.12.21
// @author converted
// @url https://ubook.reader.qq.com/
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description 24.12.4

const LEGADO_SOURCE = {
  "bookSourceComment": "24.12.4",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "企鹅阅读",
  "bookSourceType": 0,
  "bookSourceUrl": "https://ubook.reader.qq.com/",
  "customButton": false,
  "customOrder": 379,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\n    \"title\":\"༺ˇ»`ʚ排行榜ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\n    \"title\":\"月票榜\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543063&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"畅销榜\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543064&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"潜力榜\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543065&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"完结榜\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543069&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"新书榜\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543072&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"比心榜\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543074&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"免费爆款\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543077&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"免费完结\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543395&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  {\n    \"title\":\"免费飙升\",\n    \"url\":\"https://commontgw6.reader.qq.com/v7_6_6/listDispatch?action=rank&actionTag=boy&actionId=543085&pagestamp={{page}}&plan=1&signal=nextpage\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":0.25\n    }\n  },\n  \n  \n  \n{\n    \"title\":\"༺ˇ»`ʚ情节主题ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\"title\":\"穿越\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000722,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000722\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"东方玄幻\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000724,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000724\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"重生\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000837,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000837\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"现代都市\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000728,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000728\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"修仙\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000817,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000817\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"权谋\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000774,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000774\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"异能\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000823,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000823\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"异界\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000822,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000822\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"娱乐圈\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000828,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000828\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"逆袭\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000775,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000775\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"修真\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000818,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000818\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"种田\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000838,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000838\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"爱情\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000748,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000748\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"游戏异界\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000827,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000827\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"高武\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000739,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000739\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"魔法\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000772,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000772\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"神话\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000793,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000793\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"养成\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000777,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000777\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诡秘\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000744,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000744\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"科举\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000760,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000760\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"末世\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000773,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000773\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"修罗场\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000727,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000727\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"克苏鲁\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001075,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001075\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鉴宝\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000752,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000752\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"黑科技\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000746,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000746\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"抗战\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001010,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001010\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"LOL\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001069,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001069\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"电竞\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000723,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000723\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"寒门子弟\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001015,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001015\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"游戏文\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001070,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001070\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"美食\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000769,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000769\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"朝堂江湖\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001002,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001002\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"萌宠\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000770,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000770\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"巫师流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001027,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001027\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"盛世\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001030,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001030\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"军工\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001011,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001011\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蒸汽朋克\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001076,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001076\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"塔防\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001072,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001072\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"篮球\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000870,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000870\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"第四天灾\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001083,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001083\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"签到\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000875,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000875\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"荒野求生\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001054,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001054\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"高龄\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001044,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001044\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乡村\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001041,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001041\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"聊天群\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000767,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000767\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"战争\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000830,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000830\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小兵\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001012,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001012\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"直播\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000834,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000834\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"气运流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001032,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001032\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"硬科幻\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000992,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000992\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"航空\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001220,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001220\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"赛博朋克\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000993,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000993\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"足球\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000871,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000871\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"探险\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000800,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000800\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"民俗\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000990,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000990\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"人间百态\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001046,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001046\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"军旅\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000756,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000756\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"武侠幻想\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001001,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001001\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"DND\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001071,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001071\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"店主\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000989,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000989\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"玄学\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000819,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000819\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"夺舍\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000984,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000984\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"穿书\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000985,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000985\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"卡牌\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000757,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000757\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"侠客\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001004,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001004\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"科技修真\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001078,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001078\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"机甲\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000742,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000742\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"中年\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001042,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001042\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"丧尸\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001029,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001029\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"山海经\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001040,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001040\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"生存挑战\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000988,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000988\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"考古\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001055,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001055\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"史诗奇幻\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000797,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000797\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"宗门\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001003,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001003\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"主神创世\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001050,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001050\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乱世\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001031,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001031\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"手足情深\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001045,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001045\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"奇妙幻想\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000779,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000779\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"扶贫\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001043,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001043\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"传统武侠\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001000,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001000\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"吃鸡\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001073,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001073\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"家庭伦理\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001033,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001033\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"社会悬疑\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001048,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001048\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"短故事\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000905,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000905\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"女性题材\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001047,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001047\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n  \n  \n  \n  {\n    \"title\":\"༺ˇ»`ʚ行文流派ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\"title\":\"天才流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000802,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000802\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"系统流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000814,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000814\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"无敌流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000809,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000809\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"经营流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000755,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000755\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诸天流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000839,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000839\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"升级流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000795,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000795\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"无限流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000812,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000812\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"争霸\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000833,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000833\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"凡人流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000735,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000735\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"洪荒流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000747,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000747\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"进化流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000754,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000754\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"专业文\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000999,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000999\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"富民\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001006,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001006\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"时空流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000796,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000796\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"开局流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000759,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000759\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"幕后流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000996,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000996\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"职业文\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000835,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000835\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"学院流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000821,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000821\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"召唤流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000832,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000832\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"神医\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000824,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000824\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"技术流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000750,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000750\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"随身流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000799,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000799\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"商战\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001085,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001085\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"废柴流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000737,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000737\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"极道流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000749,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000749\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"家族\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001084,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001084\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"开挂\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000758,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000758\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"悬疑流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000820,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000820\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"互联网\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000997,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000997\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"刑侦\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001079,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001079\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"侦探推理\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001080,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001080\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"御兽流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001082,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001082\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"赘婿流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000840,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000840\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"轮回者\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001049,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001049\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"异兽流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000825,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000825\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"骑士流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000780,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000780\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"掌门流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000831,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000831\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"学术\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001063,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001063\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"原始流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000829,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000829\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"基建流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001007,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001007\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"抽奖\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001013,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001013\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"祖宗流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001005,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001005\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"氪金\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001014,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001014\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"策略流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000998,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000998\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"儒道流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000790,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000790\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"国术\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000745,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000745\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"管理局\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001008,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001008\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n  \n  \n  {\n    \"title\":\"༺ˇ»`ʚ时空背景ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\"title\":\"架空\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000751,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000751\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"年代文\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000776,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000776\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"明朝\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001023,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001023\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"星际\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000816,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000816\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"未来\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000805,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000805\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"贞观\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001021,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001021\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"秦汉三国\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000782,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000782\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"美洲\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001019,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001019\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"秦汉\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001034,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001034\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"两晋隋唐\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000765,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000765\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"宋朝\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001022,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001022\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"元宇宙\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001077,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001077\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"清朝\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001036,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001036\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"欧洲\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001018,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001018\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"非洲\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001020,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001020\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"外国历史\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001016,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001016\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"五代十国\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000808,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000808\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"上古先秦\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000792,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000792\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"清史民国\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000784,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000784\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"民间传说\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001017,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001017\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n  \n  \n  \n  {\n    \"title\":\"༺ˇ»`ʚ角色身份ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\"title\":\"至尊流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000863,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000863\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"明星\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000852,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000852\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"君王\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000851,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000851\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"谍战\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001058,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001058\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"太监\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001074,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001074\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"女神\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000855,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000855\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"农民\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000842,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000842\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"法师\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000844,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000844\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"道门\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001039,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001039\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"谍战特工\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001056,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001056\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"玩家\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000858,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000858\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"NPC\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001064,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001064\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"学霸\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000873,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000873\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"特种兵\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001061,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001061\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"门阀\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001026,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001026\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"盗贼\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001068,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001068\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"战士\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000877,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000877\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写手\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000859,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000859\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"御宅族\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000861,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000861\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"和尚\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000879,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000879\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"保安\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000994,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000994\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"杀手\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001059,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001059\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"锦衣卫\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000849,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000849\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"大师兄\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000878,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000878\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"仙君\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000864,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000864\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"神奇生物\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001028,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001028\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"牧师\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001065,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001065\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"女尊\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000854,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000854\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"世家\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001025,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001025\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"弓箭手\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001066,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001066\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"保镖\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000995,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000995\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"兵王\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001057,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001057\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n  \n  \n  \n  \n  {\n    \"title\":\"༺ˇ»`ʚ角色性格ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\"title\":\"杀伐果断\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000847,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000847\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"成熟\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000843,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000843\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"思路清奇\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000845,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000845\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"腹黑\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000874,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000874\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"扮猪吃虎\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000719,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000719\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"自律\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000866,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000866\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"思想迪化\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001053,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001053\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"嘴炮\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000867,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000867\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"钢铁直男\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000846,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000846\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n  \n  \n  \n  {\n    \"title\":\"༺ˇ»`ʚ内容风格ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\"title\":\"轻松\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000785,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000785\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"热血\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000788,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000788\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"快节奏\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000762,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000762\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"搞笑\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000740,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000740\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"群像\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000787,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000787\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"正能量\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000862,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000862\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"无金手指\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000810,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000810\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"单女主\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000718,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000718\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"校园\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001035,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001035\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"无CP\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000807,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000807\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"反套路\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000736,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000736\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"红包流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001051,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001051\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"治愈\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000836,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000836\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"扮演流\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9001052,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9001052\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"励志\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000764,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000764\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"青春\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000783,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000783\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"多女主\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000729,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000729\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n  \n  \n  \n  {\n    \"title\":\"༺ˇ»`ʚ衍生同人ɞ´«ˇ༻\",\n    \"url\":\"\",\n    \"style\":{\n      \"layout_flexGrow\":1,\n      \"layout_flexBasisPercent\":1\n    }\n  },\n  {\"title\":\"同人衍生\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000781,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000781\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"斗罗\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000732,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000732\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"斗破\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000731,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000731\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"综漫\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000841,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000841\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"红楼\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000726,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000726\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"二次元\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000730,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000730\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"三国\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000791,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000791\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"封神\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000738,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000738\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"水浒\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000987,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000987\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"西游\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000815,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000815\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"武侠衍生\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000811,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000811\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"聊斋\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000986,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000986\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王者荣耀\",\"url\":\"https://commontgw.reader.qq.com/v7_6_6/book/search?action=tagV2&actionTag=9000804,-1,-1,-1,-1,6&actionId=-1&pagestamp={{page}}&categoryFlag=1&signal=nextpage&searchFrom=9000804\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}\n  ]",
  "lastUpdateTime": 1766353023243,
  "respondTime": 4998,
  "ruleBookInfo": {
    "author": "$.introinfo.book.author",
    "coverUrl": "$.introinfo.book.coverUrl",
    "intro": "&nbsp;\n🕰  更新：{{$.chapinfo.lastChapterUpdateTime##\\s.*}}\n🌟  书架：{{$.introinfo..number##\\n.*}}\n🏷️  标签：{{$.bookTags..tagshortname##\\n##·}}\n📜  简介：\n{{$.introinfo.book.intro}}\n🍚  书评：\n👤：{{$..commentlist..content##\\n##<p>👤：}}##\\[emot.*\\]",
    "kind": "{{$.introinfo..scoretext}}\n{{java.getString('$.introinfo.book.finished')==1?'完结':'连载'}}\n{{$.cate2Info.cate2Name}}\n{{$.cate3Info.cate3Name}}\n{{$.chapinfo.lastChapterUpdateTime##\\s.*}}",
    "lastChapter": "{{$.introinfo.book.lastChapterName##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求含理更谢乐发推票盟补加字].*?[】）\\)]}}•{{$.chapinfo.lastChapterUpdateTime##\\s.*}}\n@js:result\n.replace(\"••\",\"\")\n.replace(/^(\\d+).第/,'第')\n.replace(/^(\\d+)[、．]第.+章/,'第$1章')\n.replace(/^(\\d+)、\\d+、/,'第$1章 ')\n.replace(/^(\\d+)、\\d+/,'第$1章')\n.replace(/^(\\d+)、/,'第$1章 ')\n.replace(/^(第.+章)\\s?第.+章/,'$1')\n.replace(/第\\s(.+)\\s章/,'第$1章')\n.replace(/.*(chapter|Chapter)\\s?(\\d+)\\s?/,'$1 $2 ')\n.replace(/\\(.+\\)/,'')\n.replace(/\\[|。/,'')\n.replace(/第([零一二两三四五六七八九十百千]+)章/g,java.toNumChapter(result))\n##(章)([^\\s]+)(\\s·)##$1 $2$3",
    "name": "$.introinfo.book.title",
    "tocUrl": "https://ubook.reader.qq.com/api/book/chapter-list?bid={{$.introinfo.book.id}}",
    "wordCount": "$.introinfo.book.totalwords"
  },
  "ruleContent": {
    "content": "$.data.content"
  },
  "ruleExplore": {
    "author": "$..author",
    "bookList": "$..bookList[*]",
    "bookUrl": "https://detailadr.reader.qq.com/v7_8_7/nativepage/book/detail?bid={{$..bid}}",
    "coverUrl": "$..bid\n@js:\nvar s = result\nfunction gt(s){\n\tlet a = s.slice(-3)\n\tif(a<10){\n\t\t\tn = s.slice(-1)\n\t\t}\n\telse if(a<100){\n\t\t\tn = s.slice(-2)\n\t\t}\n\telse{\n\t\t\tn = a\n\t\t}\n\treturn n\n}\n\"http://wfqqreader-1252317822.image.myqcloud.com/cover/\"+gt(s)+\"/\"+s+\"/b_\"+s+\".jpg\"",
    "intro": "$..intro",
    "kind": "{{$..catScore}}\n{{java.getString('$.finished')==1?'完结':'连载'}}\n{{$..hotnum}}\n{{$..catel2name}}\n{{$..catel3name}}",
    "lastChapter": "$..lastChapterName##正文卷.|正文.|VIP卷.|默认卷.|卷_|VIP章节.|免费章节.|章节目录.|最新章节.|[\\(（【].*?[求含理更谢乐发推票盟补加字].*?[】）\\)]\n@js:result\n.replace(\"••\",\"\")\n.replace(/^(\\d+).第/,'第')\n.replace(/^(\\d+)[、．]第.+章/,'第$1章')\n.replace(/^(\\d+)、\\d+、/,'第$1章 ')\n.replace(/^(\\d+)、\\d+/,'第$1章')\n.replace(/^(第.+章)\\s?\\d+/,'$1')\n.replace(/^(\\d+)、/,'第$1章 ')\n.replace(/^(第.+章)\\s?第.+章/,'$1')\n.replace(/第\\s(.+)\\s章/,'第$1章')\n.replace(/.*(chapter|Chapter)\\s?(\\d+)\\s?/,'$1 $2 ')\n.replace(/\\(.+\\)/,'')\n.replace(/\\[|。/,'')\n.replace(/第([零一二两三四五六七八九十百千]+)章/g,java.toNumChapter(result))\n##(章)([^\\s]+)(\\s·)##$1 $2$3",
    "name": "$..title",
    "wordCount": "$..totalWords"
  },
  "ruleSearch": {
    "author": "$.author",
    "bookList": "$.data.books",
    "bookUrl": "https://detailadr.reader.qq.com/v7_8_7/nativepage/book/detail?bid={{$.id}}",
    "checkKeyWord": "我的模拟长生路",
    "coverUrl": "$.cover",
    "intro": "$.intro",
    "kind": "{{java.getString('$.finished')=='true'?'完结':'连载'}}\n{{$..shortName##小说}}",
    "name": "$.title",
    "wordCount": "$.totalWords"
  },
  "ruleToc": {
    "chapterList": "$.data.chapters",
    "chapterName": "title",
    "chapterUrl": "<js>\nvar bid = baseUrl.match(/\\d+/);\njava.put('bid', bid);\n'https://wxmini.reader.qq.com/api/chapter/content?bid='+bid+'&cid={{$.seq}}'\n</js>",
    "isVip": "{{java.getString('$.free')=='true'?'false':'true'}}",
    "updateTime": "$.publishTime##^##更新时间："
  },
  "searchUrl": "api/search?keywords={{key}}&pageIndex={{page}}&pageSize=20",
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
