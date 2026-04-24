// @name 古诗词网（优+）
// @version 2025.12.23
// @author converted
// @url https://m.gushici.net/
// @enabled true
// @tags 小说,书源,converted
// @description // Error: 搜索失效
// @description 2024.6.3
// @description 古诗词鉴赏
// @description by墨殇

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: 搜索失效\n\n2024.6.3\n古诗词鉴赏\nby墨殇",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "古诗词网（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.gushici.net/",
  "bookUrlPattern": "https://m.gushici.net/book/\\d+/",
  "customButton": false,
  "customOrder": 82,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"推荐\",\"url\":\"https://m.gushici.net/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"忧民\",\"url\":\"/chaxun/all/忧民/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"重阳\",\"url\":\"/chaxun/all/重阳/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"怀古\",\"url\":\"/chaxun/all/怀古/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"中秋\",\"url\":\"/chaxun/all/中秋/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乐府\",\"url\":\"/chaxun/all/乐府/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"七夕\",\"url\":\"/chaxun/all/七夕/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"楚辞\",\"url\":\"/chaxun/all/楚辞/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"端午\",\"url\":\"/chaxun/all/端午/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"清明\",\"url\":\"/chaxun/all/清明/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"寒食\",\"url\":\"/chaxun/all/寒食/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诗词\",\"url\":\"/shici/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"类型\",\"url\":\" \",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1.00}},{\"title\":\"写景\",\"url\":\"/t/1/1//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"咏物\",\"url\":\"/t/1/2//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"春天\",\"url\":\"/t/1/3//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"菊花\",\"url\":\"/t/1/4//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"夏天\",\"url\":\"/t/1/5//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"柳树\",\"url\":\"/t/1/6//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写马\",\"url\":\"/t/1/7//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"秋天\",\"url\":\"/t/1/8//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"月亮\",\"url\":\"/t/1/9//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"田园\",\"url\":\"/t/1/10//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"冬天\",\"url\":\"/t/1/11//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"山水\",\"url\":\"/t/1/12//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"边塞\",\"url\":\"/t/1/13//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写雨\",\"url\":\"/t/1/14//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写山\",\"url\":\"/t/1/15//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"地名\",\"url\":\"/t/1/16//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写雪\",\"url\":\"/t/1/17//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写水\",\"url\":\"/t/1/18//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"抒情\",\"url\":\"/t/1/19//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写风\",\"url\":\"/t/1/20//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"长江\",\"url\":\"/t/1/21//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"爱国\",\"url\":\"/t/1/22//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写花\",\"url\":\"/t/1/23//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"黄河\",\"url\":\"/t/1/24//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"离别\",\"url\":\"/t/1/25//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"梅花\",\"url\":\"/t/1/26//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"儿童\",\"url\":\"/t/1/27//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"送别\",\"url\":\"/t/1/28//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"荷花\",\"url\":\"/t/1/29//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写鸟\",\"url\":\"/t/1/30//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"思乡\",\"url\":\"/t/1/31//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"读书\",\"url\":\"/t/1/32//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"爱情\",\"url\":\"/t/1/33//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"思念\",\"url\":\"/t/1/34//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"励志\",\"url\":\"/t/1/35//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"惜时\",\"url\":\"/t/1/36//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"哲理\",\"url\":\"/t/1/37//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"婉约\",\"url\":\"/t/1/38//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"豪放\",\"url\":\"/t/1/39//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"闺怨\",\"url\":\"/t/1/40//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"悼亡\",\"url\":\"/t/1/41//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诗经\",\"url\":\"/t/1/42//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"民谣\",\"url\":\"/t/1/43//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"写人\",\"url\":\"/t/1/44//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"节日\",\"url\":\"/t/1/45//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"老师\",\"url\":\"/t/1/46//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"春节\",\"url\":\"/t/1/47//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"母亲\",\"url\":\"/t/1/48//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"友情\",\"url\":\"/t/1/50//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"战争\",\"url\":\"/t/1/51//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"元宵\",\"url\":\"/t/1/67//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"寒食\",\"url\":\"/t/1/70//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"清明\",\"url\":\"/t/1/71//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"端午\",\"url\":\"/t/1/74//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"楚辞\",\"url\":\"/t/1/77//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"七夕\",\"url\":\"/t/1/79//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乐府\",\"url\":\"/t/1/80//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"中秋\",\"url\":\"/t/1/81//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"怀古\",\"url\":\"/t/1/82//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"重阳\",\"url\":\"/t/1/83//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"忧民\",\"url\":\"/t/1/84//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"元宵节\",\"url\":\"/t/1/49//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"寒食节\",\"url\":\"/t/1/52//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"清明节\",\"url\":\"/t/1/53//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"端午节\",\"url\":\"/t/1/54//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"七夕节\",\"url\":\"/t/1/56//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"中秋节\",\"url\":\"/t/1/59//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"重阳节\",\"url\":\"/t/1/62//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"高中古诗\",\"url\":\"/t/1/55//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小学文言\",\"url\":\"/t/1/58//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"初中文言\",\"url\":\"/t/1/61//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"高中文言\",\"url\":\"/t/1/64//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"忧国忧民\",\"url\":\"/t/1/66//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"咏史怀古\",\"url\":\"/t/1/69//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"宋词精选\",\"url\":\"/t/1/73//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小学古诗\",\"url\":\"/t/1/75//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"初中古诗\",\"url\":\"/t/1/78//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"古文观止\",\"url\":\"/t/1/85//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小学文言文\",\"url\":\"/t/1/57//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"初中文言文\",\"url\":\"/t/1/60//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"高中文言文\",\"url\":\"/t/1/63//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"古诗十九首\",\"url\":\"/t/1/65//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"唐诗三百首\",\"url\":\"/t/1/68//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"古诗三百首\",\"url\":\"/t/1/72//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"宋词三百首\",\"url\":\"/t/1/76//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"作者\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1.00}},{\"title\":\"李白\",\"url\":\"/t/1/86//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"杜甫\",\"url\":\"/t/1/87//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"齐己\",\"url\":\"/t/1/88//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"苏轼\",\"url\":\"/t/1/89//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"贾岛\",\"url\":\"/t/1/90//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"罗隐\",\"url\":\"/t/1/91//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王维\",\"url\":\"/t/1/92//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"柳永\",\"url\":\"/t/1/93//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"贯休\",\"url\":\"/t/1/94//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"杜牧\",\"url\":\"/t/1/95//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"曹操\",\"url\":\"/t/1/96//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韦庄\",\"url\":\"/t/1/97//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"陆游\",\"url\":\"/t/1/98//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"李贺\",\"url\":\"/t/1/99//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"屈原\",\"url\":\"/t/1/100//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"李煜\",\"url\":\"/t/1/101//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"曹植\",\"url\":\"/t/1/102//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王勃\",\"url\":\"/t/1/103//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"元稹\",\"url\":\"/t/1/104//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"张籍\",\"url\":\"/t/1/105//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"张祜\",\"url\":\"/t/1/106//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孟郊\",\"url\":\"/t/1/107//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韩愈\",\"url\":\"/t/1/108//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王建\",\"url\":\"/t/1/109//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"晏殊\",\"url\":\"/t/1/110//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"岑参\",\"url\":\"/t/1/111//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"皎然\",\"url\":\"/t/1/112//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"岳飞\",\"url\":\"/t/1/113//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"许浑\",\"url\":\"/t/1/114//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"卢纶\",\"url\":\"/t/1/115//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"姚合\",\"url\":\"/t/1/116//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"秦观\",\"url\":\"/t/1/117//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"郑谷\",\"url\":\"/t/1/118//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"钱起\",\"url\":\"/t/1/119//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"郑燮\",\"url\":\"/t/1/120//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"张说\",\"url\":\"/t/1/121//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"朱熹\",\"url\":\"/t/1/122//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"张炎\",\"url\":\"/t/1/123//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韩偓\",\"url\":\"/t/1/124//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"高适\",\"url\":\"/t/1/126//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"方干\",\"url\":\"/t/1/128//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"李峤\",\"url\":\"/t/1/130//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"赵嘏\",\"url\":\"/t/1/132//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"贺铸\",\"url\":\"/t/1/133//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"程垓\",\"url\":\"/t/1/168//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"白居易\",\"url\":\"/t/1/125//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"辛弃疾\",\"url\":\"/t/1/127//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"李清照\",\"url\":\"/t/1/129//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"刘禹锡\",\"url\":\"/t/1/131//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"李商隐\",\"url\":\"/t/1/134//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"陶渊明\",\"url\":\"/t/1/135//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孟浩然\",\"url\":\"/t/1/136//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"柳宗元\",\"url\":\"/t/1/137//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"范仲淹\",\"url\":\"/t/1/138//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王安石\",\"url\":\"/t/1/139//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"陆龟蒙\",\"url\":\"/t/1/140//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"权德舆\",\"url\":\"/t/1/141//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"晏几道\",\"url\":\"/t/1/142//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"欧阳修\",\"url\":\"/t/1/143//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"黄庭坚\",\"url\":\"/t/1/144//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"周邦彦\",\"url\":\"/t/1/145//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韦应物\",\"url\":\"/t/1/146//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"司马迁\",\"url\":\"/t/1/147//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"杜荀鹤\",\"url\":\"/t/1/148//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"皇甫冉\",\"url\":\"/t/1/149//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"温庭筠\",\"url\":\"/t/1/150//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"刘长卿\",\"url\":\"/t/1/151//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"卓文君\",\"url\":\"/t/1/152//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"吴文英\",\"url\":\"/t/1/153//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"文天祥\",\"url\":\"/t/1/154//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王昌龄\",\"url\":\"/t/1/155//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"马致远\",\"url\":\"/t/1/156//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"刘辰翁\",\"url\":\"/t/1/157//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"杨万里\",\"url\":\"/t/1/158//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"皮日休\",\"url\":\"/t/1/159//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"左丘明\",\"url\":\"/t/1/160//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诸葛亮\",\"url\":\"/t/1/161//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"朝代\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1.00}},{\"title\":\"先秦\",\"url\":\"/t/1/169//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"两汉\",\"url\":\"/t/1/170//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"魏晋\",\"url\":\"/t/1/171//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"南北朝\",\"url\":\"/t/1/172//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"隋代\",\"url\":\"/t/1/173//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"唐代\",\"url\":\"/t/1/174//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"五代\",\"url\":\"/t/1/175//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"宋代\",\"url\":\"/t/1/176//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"金朝\",\"url\":\"/t/1/177//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"元代\",\"url\":\"/t/1/178//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"明代\",\"url\":\"/t/1/179//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"清代\",\"url\":\"/t/1/180//index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"名句\",\"url\":\"/mingju/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"主题\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1.00}},{\"title\":\"故乡\",\"url\":\"/chaxun/ju/故乡/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"豆蔻\",\"url\":\"/chaxun/ju/豆蔻/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"相思\",\"url\":\"/chaxun/ju/相思/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"秋风\",\"url\":\"/chaxun/ju/秋风/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"九天\",\"url\":\"/chaxun/ju/九天/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"大漠\",\"url\":\"/chaxun/ju/大漠/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"北风\",\"url\":\"/chaxun/ju/北风/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"青山\",\"url\":\"/chaxun/ju/青山/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"尘世\",\"url\":\"/chaxun/ju/尘世/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"明月\",\"url\":\"/chaxun/ju/明月/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"青天\",\"url\":\"/chaxun/ju/青天/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"天山\",\"url\":\"/chaxun/ju/天山/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"天涯\",\"url\":\"/chaxun/ju/天涯/<,{{page}}>\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"作者\",\"url\":\"/zuozhe/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"朝代\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1.00}},{\"title\":\"先秦\",\"url\":\"/zuozhe/xianqin/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"两汉\",\"url\":\"/zuozhe/lianghan/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"魏晋\",\"url\":\"/zuozhe/weijin/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"南北朝\",\"url\":\"/zuozhe/nanbeichao/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"隋代\",\"url\":\"/zuozhe/sui/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"唐代\",\"url\":\"/zuozhe/tang/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"五代\",\"url\":\"/zuozhe/wudai/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"宋代\",\"url\":\"/zuozhe/song/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"金朝\",\"url\":\"/zuozhe/jinchao/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"元代\",\"url\":\"/zuozhe/yuan/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"明代\",\"url\":\"/zuozhe/ming/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"清代\",\"url\":\"/zuozhe/qing/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"古籍\",\"url\":\"/book/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"经部\",\"url\":\"/book/jingbu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"易类\",\"url\":\"/book/yi/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"书类\",\"url\":\"/book/shu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诗类\",\"url\":\"/book/shi/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"礼类\",\"url\":\"/book/li/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"春秋类\",\"url\":\"/book/chunqiu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孝经类\",\"url\":\"/book/xiaojing/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"五经总义类\",\"url\":\"/book/wujingzongyi/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"四书类\",\"url\":\"/book/sishu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乐类\",\"url\":\"/book/le/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小学类\",\"url\":\"/book/xiaoxue/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"史部\",\"url\":\"/book/shibu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"正史类\",\"url\":\"/book/zhengshi/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"编年类\",\"url\":\"/book/biannian/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"纪事本末类\",\"url\":\"/book/jishibenmo/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"杂史类\",\"url\":\"/book/zashi/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"别史类\",\"url\":\"/book/bieshi/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诏令奏议类\",\"url\":\"/book/zuolingzouyi/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"传记类\",\"url\":\"/book/chuanji/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"史钞类\",\"url\":\"/book/shichao/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"载记类\",\"url\":\"/book/zaiji/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"时令类\",\"url\":\"/book/shiling/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"地理类\",\"url\":\"/book/dili/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"职官类\",\"url\":\"/book/zhiguan/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"政书类\",\"url\":\"/book/zhengshu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"目录类\",\"url\":\"/book/mulu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"史评类\",\"url\":\"/book/shiping/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"子部\",\"url\":\"/book/zibu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"儒家类\",\"url\":\"/book/rujia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"兵家类\",\"url\":\"/book/bingjia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"法家类\",\"url\":\"/book/fajia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"农家类\",\"url\":\"/book/nongjia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"医家类\",\"url\":\"/book/yijia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"天文算法类\",\"url\":\"/book/tianwensuanfa/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"术数类\",\"url\":\"/book/shushu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"艺术类\",\"url\":\"/book/yishu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"谱录类\",\"url\":\"/book/pulu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"杂家类\",\"url\":\"/book/zajia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"类书类\",\"url\":\"/book/leishu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小说家类\",\"url\":\"/book/xiaoshuojia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"释家类\",\"url\":\"/book/shijia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"道家类\",\"url\":\"/book/daojia/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"集部\",\"url\":\"/book/jibu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"楚辞类\",\"url\":\"/book/chuci/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"别集类\",\"url\":\"/book/bieji/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"总集类\",\"url\":\"/book/zongji/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诗文评类\",\"url\":\"/book/shiwenping/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"词曲类\",\"url\":\"/book/ciqu/index<,_{{page}}>.html\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "lastUpdateTime": 1766457046959,
  "respondTime": 181389,
  "ruleBookInfo": {
    "author": "p.0@a.1@text",
    "intro": "🐾\n{{@@.tag@text}}{{@@p@text}}",
    "kind": "p.0@a.0@text",
    "name": "h1@text"
  },
  "ruleContent": {
    "content": ".gushici.0@html&&.shici@html",
    "replaceRegex": "##上一章|目录|下一章"
  },
  "ruleExplore": {
    "coverUrl": "@js:'https://s21.ax1x.com/2024/05/29/pk3AYzd.png'"
  },
  "ruleSearch": {
    "author": "p.0@text||.juab@text||p.1@a.1@text",
    "bookList": ".shici-pic||.ju-box||.gushici",
    "bookUrl": "a@href",
    "checkKeyWord": "李白",
    "coverUrl": "@js:'https://s21.ax1x.com/2024/05/29/pk3AYzd.png'",
    "intro": "🐾\n{{@@.tag@text}}{{@@p@text}}",
    "kind": "p.1@a.0@text##>>",
    "name": "b@text||.juaa@text||p.0@text"
  },
  "ruleToc": {
    "chapterList": "dl dd a||tag.html",
    "chapterName": "h1@text||text",
    "chapterUrl": "href"
  },
  "searchUrl": "https://m.gushici.net/chaxun/all/{{key}}",
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
