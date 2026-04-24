// @name 开心漫画（优+）
// @version 2025.12.05
// @author converted
// @url https://www.kaixinman.com
// @type comic
// @enabled true
// @tags 漫画,书源,图片,converted
// @description //2025.10.6  夜明空
// @description //源社区：https://ycoo.net

const LEGADO_SOURCE = {
  "bookSourceComment": "//2025.10.6  夜明空\n//源社区：https://ycoo.net",
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "开心漫画（优+）",
  "bookSourceType": 2,
  "bookSourceUrl": "https://www.kaixinman.com",
  "customButton": false,
  "customOrder": 241,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n{\"title\":\"🔖​地区🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"国内漫画\",\"url\":\"/category/area/guonei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"日本漫画\",\"url\":\"/category/area/riben/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"韩国漫画\",\"url\":\"/category/area/hanguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"欧美漫画\",\"url\":\"/category/area/oumei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"最近更新\",\"url\":\"/update\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖​题材🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全部\",\"url\":\"/category/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"热血\",\"url\":\"/category/theme/rexue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"仙侠\",\"url\":\"/category/theme/xianxia/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"玄幻\",\"url\":\"/category/theme/xuanhuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"都市\",\"url\":\"/category/theme/dushi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"冒险\",\"url\":\"/category/theme/maoxian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"武侠\",\"url\":\"/category/theme/wuxia/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"格斗\",\"url\":\"/category/theme/gedou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"科幻\",\"url\":\"/category/theme/kehuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"异能\",\"url\":\"/category/theme/yineng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"重生\",\"url\":\"/category/theme/chongsheng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"推理\",\"url\":\"/category/theme/tuili/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"悬疑\",\"url\":\"/category/theme/xuanyi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"竞技\",\"url\":\"/category/theme/jingji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"搞笑\",\"url\":\"/category/theme/gaoxiao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"恐怖\",\"url\":\"/category/theme/kongbu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"生活\",\"url\":\"/category/theme/shenghuo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"校园\",\"url\":\"/category/theme/xiaoyuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"恋爱\",\"url\":\"/category/theme/lianai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"百合\",\"url\":\"/category/theme/baihe/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"耽美\",\"url\":\"/category/theme/danmei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"二次元\",\"url\":\"/category/theme/erciyuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"萌系\",\"url\":\"/category/theme/mengxi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"伪娘\",\"url\":\"/category/theme/weiniang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"历史\",\"url\":\"/category/theme/lishi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"战争\",\"url\":\"/category/theme/zhanzheng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"剧情\",\"url\":\"/category/theme/juqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"唯美\",\"url\":\"/category/theme/weimei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"奇幻\",\"url\":\"/category/theme/qihuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"治愈\",\"url\":\"/category/theme/zhiyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"少女\",\"url\":\"/category/theme/shaonv/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"古风\",\"url\":\"/category/theme/gufeng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"高甜\",\"url\":\"/category/theme/gaotian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"动作\",\"url\":\"/category/theme/dongzuo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"穿越\",\"url\":\"/category/theme/chuanyue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"复仇\",\"url\":\"/category/theme/fuchou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"魔幻\",\"url\":\"/category/theme/mohuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"励志\",\"url\":\"/category/theme/lizhi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"后宫\",\"url\":\"/category/theme/hougong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"爱情\",\"url\":\"/category/theme/aiqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"青春\",\"url\":\"/category/theme/qingchun/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"机甲\",\"url\":\"/category/theme/jijia/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"战斗\",\"url\":\"/category/theme/zhandou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"灵异\",\"url\":\"/category/theme/lingyi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"运动\",\"url\":\"/category/theme/yundong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"职场\",\"url\":\"/category/theme/zhichang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"总裁\",\"url\":\"/category/theme/zongcai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"宫斗\",\"url\":\"/category/theme/gongdou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"科技\",\"url\":\"/category/theme/keji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"浪漫\",\"url\":\"/category/theme/langman/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"末日\",\"url\":\"/category/theme/mori/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"大女主\",\"url\":\"/category/theme/danvzhu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"系统\",\"url\":\"/category/theme/xitong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"暗黑\",\"url\":\"/category/theme/anhei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"正能量\",\"url\":\"/category/theme/zhengnengliang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"魔法\",\"url\":\"/category/theme/mofa/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"脑洞\",\"url\":\"/category/theme/naodong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"少年\",\"url\":\"/category/theme/shaonian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"幻想\",\"url\":\"/category/theme/huanxiang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"宫廷\",\"url\":\"/category/theme/gongting/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"侦探\",\"url\":\"/category/theme/zhentan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"萝莉\",\"url\":\"/category/theme/luoli/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"霸总\",\"url\":\"/category/theme/bazong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"神话\",\"url\":\"/category/theme/shenhua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"明星\",\"url\":\"/category/theme/mingxing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"游戏\",\"url\":\"/category/theme/youxi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"修真\",\"url\":\"/category/theme/xiuzhen/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"女神\",\"url\":\"/category/theme/nvshen/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"御姐\",\"url\":\"/category/theme/yujie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"电竞\",\"url\":\"/category/theme/dianjing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"体育\",\"url\":\"/category/theme/tiyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"男神\",\"url\":\"/category/theme/nanshen/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"武侠仙侠\",\"url\":\"/category/theme/wuxiaxianxia/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"治癒\",\"url\":\"/category/theme/279/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"日常\",\"url\":\"/category/theme/richang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.治愈\",\"url\":\"/category/theme/typeszhiyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.搞笑\",\"url\":\"/category/theme/typesgaoxiao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.恋爱\",\"url\":\"/category/theme/typeslianai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.萌系\",\"url\":\"/category/theme/typesmengxi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.穿越\",\"url\":\"/category/theme/typeschuanyue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.纯爱\",\"url\":\"/category/theme/typeschunai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.都市\",\"url\":\"/category/theme/typesdushi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"纯爱\",\"url\":\"/category/theme/chunai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"校园日常\",\"url\":\"/category/theme/xiaoyuanrichang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.奇幻\",\"url\":\"/category/theme/typesqihuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.校园\",\"url\":\"/category/theme/typesxiaoyuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.剧情\",\"url\":\"/category/theme/typesjuqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.重生\",\"url\":\"/category/theme/typeszhongsheng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.热血\",\"url\":\"/category/theme/typesrexue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.异能\",\"url\":\"/category/theme/typesyineng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.悬疑\",\"url\":\"/category/theme/typesxuanyi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"强剧情\",\"url\":\"/category/theme/qiangjuqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.冒险\",\"url\":\"/category/theme/typesmaoxian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.日常\",\"url\":\"/category/theme/typesrichang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.唯美\",\"url\":\"/category/theme/typesweimei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.少年\",\"url\":\"/category/theme/typesshaonian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.少女\",\"url\":\"/category/theme/typesshaonv/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.灵异\",\"url\":\"/category/theme/typeslingyi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.脑洞\",\"url\":\"/category/theme/typesnaodong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.美食\",\"url\":\"/category/theme/typesmeishi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.推理\",\"url\":\"/category/theme/typestuili/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"架空\",\"url\":\"/category/theme/jiakong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.大女主\",\"url\":\"/category/theme/typesdanvzhu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.百合\",\"url\":\"/category/theme/typesbaihe/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.爆笑\",\"url\":\"/category/theme/typesbaoxiao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"惊悚\",\"url\":\"/category/theme/jingsong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"综合\",\"url\":\"/category/theme/zonghe/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.古风\",\"url\":\"/category/theme/typesgufeng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"types.玄幻\",\"url\":\"/category/theme/typesxuanhuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},{\"title\":\"神魔\",\"url\":\"/category/theme/shenmo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.2}},\n{\"title\":\"🔖​进度🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"全部\",\"url\":\"/category/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"连载\",\"url\":\"/category/state/lianzai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"完结\",\"url\":\"/category/state/wanjie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖​排序🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"热门人气\",\"url\":\"/category/order/views/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"更新时间\",\"url\":\"/category/order/update/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}]",
  "header": "{\"User-Agent\":\"Mozilla/5.0 (Linux; U; Android 13; zh-Hans-CN; PFJM10 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/135.0.4896.58 Quark/6.13.6.581 Mobile Safari/537.36\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"}",
  "lastUpdateTime": 1764967786397,
  "loginUrl": "/",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "class.comic-detail@class.data.1@text##作者[：:]",
    "coverUrl": ".lazy.0@data-original",
    "intro": "[class=\"desc hidden-xs\"]@text##简介[：:]|\\[-折叠\\]|\\[\\+展开\\]",
    "kind": "{{@@[class=\"data hidden-sm\"]@text##更新[：:]}},{{@@class.comic-detail@class.data.0@span.0@a@text}}",
    "name": "h1@span@text"
  },
  "ruleContent": {
    "content": "<js>\nvar step1 = java.base64Decode('PGpzPgp2YXIgYT1zb3VyY2UuYm9va1NvdXJjZUNvbW1lbnQ7CnZhciBiPWphdmEuYmFzZTY0RGVjb2RlKCdMeTh5TURJMUxqRXdMallnSU9Xa25PYVlqdWVwdWdvdkwrYTZrT2VrdnVXTXV1KzhtbWgwZEhCek9pOHZlV052Ynk1dVpYUT0nKTsKaWYgKGEuaW5jbHVkZXMoYikpIHsKY29uPWphdmEuYmFzZTY0RGVjb2RlKCdQR3B6UGdwaFBXcGhkbUV1WjJWMFUzUnlhVzVuS0NjdVkyaGhjSFJsY2kxcGJXRm5aVUJrWVhSaExXOXlhV2RwYm1Gc0p5azdDbUV1YzNCc2FYUW9JbHh1SWlrdWJXRndLR2s5UG1BOGFXMW5JSE55WXowaUpIdHBmU0krWUNrdWFtOXBiaWdpWEc0aUtRbzhMMnB6UGc9PScpOwpyZXN1bHQ9amF2YS5nZXRTdHJpbmcoY29uKTsKfSBlbHNlIHsKZXJyb3I9amF2YS5iYXNlNjREZWNvZGUoJzRwcWc3N2lQSU9hamdPYTFpK1dJc09TNXB1YTZrT2lpcSthQnR1YUVqK2V2b2VhVXVRcmlyWkFnNksrMzVZbU41YjZBNUwyYzZJQ0Y1TGk3NmFHMTVwdTA1cGF3NUxtbTVycVFLT1dGcyttWHJlV0hnT1dNbHVhWXZ1ZWt1dW1UdnVhT3BTbnZ2Sm9LYUhSMGNITTZMeTk1WTI5dkxtNWxkQXJpclpBZzVwQ2M1N1NpNTVTbzVvaTM1WkNONzd5YTVhU2M1cGlPNTZtNicpOwpyZXN1bHQ9amF2YS50b2FzdCgnXG4nK2Vycm9yKTsKcmVzdWx0PSdcbiZscm07XG4nK2Vycm9yOwp9CnJlc3VsdAo8L2pzPg==');\nvar step2 = java.getString(step1);\nresult = step2\n</js>"
  },
  "ruleExplore": {
    "bookList": "[class=\"col-md-6 col-sm-4 col-xs-3\"]",
    "bookUrl": "a.0@href",
    "coverUrl": "[class=\"comic-cover lazy\"]@data-original",
    "kind": "[class=\"name text-right\"]@text",
    "name": "h4@text"
  },
  "ruleSearch": {
    "bookList": "[class=\"col-md-6 col-sm-4 col-xs-3\"]",
    "bookUrl": "a.0@href",
    "checkKeyWord": "狐妖小红娘",
    "coverUrl": "[class=\"comic-cover lazy\"]@data-original",
    "kind": "[class=\"name text-right\"]@text",
    "name": "h4@text"
  },
  "ruleToc": {
    "chapterList": "[class=\"chapter-list clearfix column6 overflow\"]@li@a\n<js>\nif (result.length==0){\njava.toast('\\n🔍 该漫画已下架');\nresult;\n}\nresult\t\n</js>",
    "chapterName": "text",
    "chapterUrl": "href##$##,{\"webView\": true}"
  },
  "searchUrl": "{{cookie.removeCookie(source.getKey())}}/search?q={{key}}&page={{page}}",
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
