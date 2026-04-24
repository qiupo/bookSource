// @name 狸猫故事（优+）
// @version 2025.09.22
// @author converted
// @url https://m.limaogushi.com/2
// @enabled true
// @tags 小说,书源,converted
// @description //2025.5.10  夜明空 制作
// @description //源社区首发：https://taoba.cf
// @description //感谢等等、辞晨老师的指点
// @description ////必看说明：
// @description 1、关键词@绘本：搜索结果为绘本类书籍，即：有图有文字
// @description 2、关键词@听书：搜索结果为听书类书籍，进入正文页，点击播放按钮即可加载音频

const LEGADO_SOURCE = {
  "bookSourceComment": "//2025.5.10  夜明空 制作\n//源社区首发：https://taoba.cf\n//感谢等等、辞晨老师的指点\n////必看说明：\n1、关键词@绘本：搜索结果为绘本类书籍，即：有图有文字\n2、关键词@听书：搜索结果为听书类书籍，进入正文页，点击播放按钮即可加载音频\n3、关键词：什么后缀都不加，搜索结果为文本类书籍",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "狸猫故事（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.limaogushi.com/2",
  "customButton": false,
  "customOrder": 98,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[{\"title\":\"🔖​儿童故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"睡前小故事\",\"url\":\"/pd/shuiqian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"幼儿故事\",\"url\":\"/pd/youer/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"哲理小故事\",\"url\":\"/pd/zheli/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"益智故事\",\"url\":\"/pd/yizhi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"搞笑故事\",\"url\":\"/pd/gaoxiao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"智慧故事\",\"url\":\"/pd/zhihui/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"成语故事\",\"url\":\"/pd/chengyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"幽默小故事\",\"url\":\"/pd/youmo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖童话故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"安徒生童话\",\"url\":\"/pd/antushengtonghua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"格林童话\",\"url\":\"/pd/gelintonghua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"一千零一夜\",\"url\":\"/pd/yiqianlingyiye/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"童话故事\",\"url\":\"/pd/tonghuadaquan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"英语故事\",\"url\":\"/pd/yingyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖民间故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"民间故事\",\"url\":\"/pd/minjian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鬼怪故事\",\"url\":\"/pd/guiguai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"现代故事\",\"url\":\"/pd/xiandai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"传奇故事\",\"url\":\"/pd/chuanqi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"外国民间故事\",\"url\":\"/pd/waiguominjian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"短篇鬼故事\",\"url\":\"/pd/duanpiangui/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"故事大全\",\"url\":\"/pd/gushidaquan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖绘本故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"社会生活\",\"url\":\"/huiben/shehuishenghuo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"益智游戏\",\"url\":\"/huiben/yizhiyouxi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"认知\",\"url\":\"/huiben/renzhi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"自然\",\"url\":\"/huiben/ziran/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"民间故事\",\"url\":\"/huiben/minjiangushi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"童话\",\"url\":\"/huiben/tonghua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"心理\",\"url\":\"/huiben/xinli/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"情感\",\"url\":\"/huiben/qinggan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"情绪\",\"url\":\"/huiben/qingxu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"健康\",\"url\":\"/huiben/jiankang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"艺术\",\"url\":\"/huiben/yishu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"多元文化\",\"url\":\"/huiben/duoyuanwenhua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"科普\",\"url\":\"/huiben/kepu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"人物\",\"url\":\"/huiben/renwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"经典绘本\",\"url\":\"/huiben/jingdianhuiben/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"历史\",\"url\":\"/huiben/lishi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"获奖\",\"url\":\"/huiben/huojiang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"哲学\",\"url\":\"/huiben/zhexue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖历史故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"中国历史\",\"url\":\"/pd/lishi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"外国历史\",\"url\":\"/pd/waiguolishi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"中华上下五千\",\"url\":\"/pd/wuqiannian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"抗日战争\",\"url\":\"/pd/aiguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"古代历史\",\"url\":\"/pd/gudai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"历代名女名妓\",\"url\":\"/pd/mingnvmingji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"历代皇帝后宫\",\"url\":\"/pd/huangdihougong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖神话故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"中国神话\",\"url\":\"/pd/shenhua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"希腊神话\",\"url\":\"/pd/xila/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"北欧神话\",\"url\":\"/pd/beiou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"印度神话\",\"url\":\"/pd/yindu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"埃及神话\",\"url\":\"/pd/aiji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"罗马神话\",\"url\":\"/pd/luoma/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"印第安神话\",\"url\":\"/pd/yindian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"神话故事\",\"url\":\"/pd/daquan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖简 笔 画🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"童画\",\"url\":\"/jianbihua/tonghua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"动物\",\"url\":\"/jianbihua/dongwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蚂蚁\",\"url\":\"/jianbihua/mayi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蜗牛\",\"url\":\"/jianbihua/woniu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"瓢虫\",\"url\":\"/jianbihua/piaochong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"毛毛虫\",\"url\":\"/jianbihua/maomaochong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蝴蝶\",\"url\":\"/jianbihua/hudie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"企鹅\",\"url\":\"/jianbihua/qie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小猪\",\"url\":\"/jianbihua/xiaozhu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"刺猬\",\"url\":\"/jianbihua/ciwei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小猫\",\"url\":\"/jianbihua/mao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狮子\",\"url\":\"/jianbihua/shizi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"松鼠\",\"url\":\"/jianbihua/songshu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"袋鼠\",\"url\":\"/jianbihua/daishu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小牛\",\"url\":\"/jianbihua/niu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鳄鱼\",\"url\":\"/jianbihua/eyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小熊\",\"url\":\"/jianbihua/xiong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狐狸\",\"url\":\"/jianbihua/huli/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"树袋熊\",\"url\":\"/jianbihua/shudaixiong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"河马\",\"url\":\"/jianbihua/hema/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小鹿\",\"url\":\"/jianbihua/lu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"恐龙\",\"url\":\"/jianbihua/konglong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"长颈鹿\",\"url\":\"/jianbihua/changjinglu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"老虎\",\"url\":\"/jianbihua/laohu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"大象\",\"url\":\"/jianbihua/daxiang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"青蛙\",\"url\":\"/jianbihua/qingwa/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"猴子\",\"url\":\"/jianbihua/houzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"神龙\",\"url\":\"/jianbihua/long/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小马\",\"url\":\"/jianbihua/ma/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鸭子\",\"url\":\"/jianbihua/yazi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小狗\",\"url\":\"/jianbihua/gou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"熊猫\",\"url\":\"/jianbihua/xiongmao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"兔子\",\"url\":\"/jianbihua/tuzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小羊\",\"url\":\"/jianbihua/yang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"老鼠\",\"url\":\"/jianbihua/laoshu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小鸡\",\"url\":\"/jianbihua/ji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小蛇\",\"url\":\"/jianbihua/she/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乌龟\",\"url\":\"/jianbihua/wugui/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"龙虾\",\"url\":\"/jianbihua/longxia/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"螃蟹\",\"url\":\"/jianbihua/pangxie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鲨鱼\",\"url\":\"/jianbihua/shayu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鲸鱼\",\"url\":\"/jianbihua/jingyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"猫头鹰\",\"url\":\"/jianbihua/maotouying/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鸽子\",\"url\":\"/jianbihua/gezi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"昆虫\",\"url\":\"/jianbihua/kunchong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小鸟\",\"url\":\"/jianbihua/niao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小鱼\",\"url\":\"/jianbihua/yu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"野生动物\",\"url\":\"/jianbihua/yeshengdongwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"海洋生物\",\"url\":\"/jianbihua/haiyangshengwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"植物\",\"url\":\"/jianbihua/zhiwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"花朵\",\"url\":\"/jianbihua/hua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"荷花\",\"url\":\"/jianbihua/hehua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小草\",\"url\":\"/jianbihua/cao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"大树\",\"url\":\"/jianbihua/dashu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"玫瑰花\",\"url\":\"/jianbihua/meiguihua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"圣诞树\",\"url\":\"/jianbihua/shengdanshu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"仙人掌\",\"url\":\"/jianbihua/xianrenzhang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"向日葵\",\"url\":\"/jianbihua/xiangrikui/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"人物\",\"url\":\"/jianbihua/renwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"食物\",\"url\":\"/jianbihua/shiwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蔬菜\",\"url\":\"/jianbihua/shucai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"饮料\",\"url\":\"/jianbihua/yinliao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蛋糕\",\"url\":\"/jianbihua/dangao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"西点\",\"url\":\"/jianbihua/xidian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小吃\",\"url\":\"/jianbihua/xiaochi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"零食\",\"url\":\"/jianbihua/lingshi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"肉类\",\"url\":\"/jianbihua/roulei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"冰激凌\",\"url\":\"/jianbihua/bingjiling/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"水果\",\"url\":\"/jianbihua/shuiguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"桃子\",\"url\":\"/jianbihua/taozi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蓝莓\",\"url\":\"/jianbihua/lanmei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"榴莲\",\"url\":\"/jianbihua/liulian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"荔枝\",\"url\":\"/jianbihua/lizhi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"芒果\",\"url\":\"/jianbihua/mangguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"石榴\",\"url\":\"/jianbihua/shiliu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"樱桃\",\"url\":\"/jianbihua/yingtao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"橘子\",\"url\":\"/jianbihua/juzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"柠檬\",\"url\":\"/jianbihua/ningmeng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"菠萝\",\"url\":\"/jianbihua/boluo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"草莓\",\"url\":\"/jianbihua/caomei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"椰子\",\"url\":\"/jianbihua/yezi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"梨子\",\"url\":\"/jianbihua/li\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"西瓜\",\"url\":\"/jianbihua/xigua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"葡萄\",\"url\":\"/jianbihua/putao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"香蕉\",\"url\":\"/jianbihua/xiangjiao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"苹果\",\"url\":\"/jianbihua/pingguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"猕猴桃\",\"url\":\"/jianbihua/mihoutao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"火龙果\",\"url\":\"/jianbihua/huolongguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"热带水果\",\"url\":\"/jianbihua/redaishuiguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"建筑\",\"url\":\"/jianbihua/jianzhu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"风景\",\"url\":\"/jianbihua/fengjing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"卡通\",\"url\":\"/jianbihua/katong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"人物\",\"url\":\"/jianbihua/dongmanrenwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"动物\",\"url\":\"/jianbihua/katongdongwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"柯南\",\"url\":\"/jianbihua/kenan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"海贼王\",\"url\":\"/jianbihua/haizeiwang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"凯蒂猫\",\"url\":\"/jianbihua/kaidimao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"哆啦A梦\",\"url\":\"/jianbihua/duolaameng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小猪佩奇\",\"url\":\"/jianbihua/xiaozhupeiqi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蜡笔小新\",\"url\":\"/jianbihua/labixiaoxin/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"樱桃小丸子\",\"url\":\"/jianbihua/yingtaoxiaowanzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"节日\",\"url\":\"/jianbihua/jieri/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"龙舟\",\"url\":\"/jianbihua/longzhou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"粽子\",\"url\":\"/jianbihua/zongzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"新年\",\"url\":\"/jianbihua/xinnian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"国庆节\",\"url\":\"/jianbihua/guoqingjie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"万圣节\",\"url\":\"/jianbihua/wanshengjie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"圣诞节\",\"url\":\"/jianbihua/shengdanjie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"手账\",\"url\":\"/jianbihua/shouzhang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"电器\",\"url\":\"/jianbihua/dianqi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"文具\",\"url\":\"/jianbihua/wenju/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"玩具\",\"url\":\"/jianbihua/wanju/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"家具\",\"url\":\"/jianbihua/jiaju/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"餐具\",\"url\":\"/jianbihua/canju/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"服装\",\"url\":\"/jianbihua/fuzhuang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"百货\",\"url\":\"/jianbihua/baihuo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乐器\",\"url\":\"/jianbihua/yueqi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"体育用品\",\"url\":\"/jianbihua/tiyuyongpin/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"汽车\",\"url\":\"/jianbihua/qiche/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"飞机\",\"url\":\"/jianbihua/feiji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"轮船\",\"url\":\"/jianbihua/lunchuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"火车\",\"url\":\"/jianbihua/huoche/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"帆船\",\"url\":\"/jianbihua/fanchuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"潜水艇\",\"url\":\"/jianbihua/qianshuiting/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"热气球\",\"url\":\"/jianbihua/reqiqiu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"直升飞机\",\"url\":\"/jianbihua/zhishengji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"宇宙飞船\",\"url\":\"/jianbihua/yuzhoufeichuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖情感故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"爱情故事\",\"url\":\"/pd/aiqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"亲情故事\",\"url\":\"/pd/qinqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"校园故事\",\"url\":\"/pd/xiaoyuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"感人小故事\",\"url\":\"/pd/ganren/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"友情故事\",\"url\":\"/pd/youqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖寓言故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"伊索寓言\",\"url\":\"/pd/yisuoyuyan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"拉封丹寓言\",\"url\":\"/pd/lafengdan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"莱辛寓言\",\"url\":\"/pd/laixin/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"克雷洛夫寓言\",\"url\":\"/pd/keleiluofu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"寓言故事大全\",\"url\":\"/pd/yuyangdaquan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖标签导航🔖\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"名人轶事\",\"url\":\"/l/mingrenyishi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"后宫\",\"url\":\"/l/hougong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"历代皇帝\",\"url\":\"/l/lidaihuangdi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"军史长廊\",\"url\":\"/l/junshichanglang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"经典短篇\",\"url\":\"/l/jingdianduanpianxiaoshuo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"民风民俗\",\"url\":\"/l/minfengminsu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"野史趣闻\",\"url\":\"/l/yeshiquwen/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"悬疑推理\",\"url\":\"/l/xuanyituili/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"恐怖\",\"url\":\"/l/kongbu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"将相传奇\",\"url\":\"/l/jiangxiangchuanqi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诗联趣话\",\"url\":\"/l/shilianquhua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"历代名妓\",\"url\":\"/l/lidaimingji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"历代名女\",\"url\":\"/l/lidaimingnv/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"老师\",\"url\":\"/l/laoshi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"幸福\",\"url\":\"/l/xingfu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"妈妈\",\"url\":\"/l/mama/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"爱\",\"url\":\"/l/ai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"礼物\",\"url\":\"/l/liwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"人生\",\"url\":\"/l/rensheng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小猫\",\"url\":\"/l/xiaomao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小兔\",\"url\":\"/l/xiaotu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"快乐\",\"url\":\"/l/kuaile/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"昙花\",\"url\":\"/l/tanhua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"娃娃\",\"url\":\"/l/wawa/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"太阳\",\"url\":\"/l/taiyang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小松鼠\",\"url\":\"/l/songshu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"萝卜\",\"url\":\"/l/luobu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"曹操\",\"url\":\"/l/caocao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"国庆节\",\"url\":\"/l/guoqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"神枪手\",\"url\":\"/l/shenqiangshou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鹬蚌\",\"url\":\"/l/yubang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"渔翁\",\"url\":\"/l/yuweng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"智者\",\"url\":\"/l/zhizhe/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鹦鹉\",\"url\":\"/l/yingwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小星星\",\"url\":\"/l/xiaoxingxing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小鹿\",\"url\":\"/l/xiaolu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"闺蜜\",\"url\":\"/l/guimi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"传奇\",\"url\":\"/l/chuanqi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"梦想\",\"url\":\"/l/mengxiang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"理想\",\"url\":\"/l/lixiang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"苹果\",\"url\":\"/l/pinguo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"智慧\",\"url\":\"/l/zhihui/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"飞机\",\"url\":\"/l/feiji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鸿门宴\",\"url\":\"/l/hongmenyan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鳄鱼\",\"url\":\"/l/eryu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孔雀\",\"url\":\"/l/kongque/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"刺猬\",\"url\":\"/l/ciwei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"海\",\"url\":\"/l/hai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小鸟\",\"url\":\"/l/xiaoniao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"马\",\"url\":\"/l/ma/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"海螺\",\"url\":\"/l/hailuo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蛇\",\"url\":\"/l/she\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乌龟\",\"url\":\"/l/wugui/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狼\",\"url\":\"/l/lang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"老狼\",\"url\":\"/l/laolang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"豹子\",\"url\":\"/l/baozi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"老虎\",\"url\":\"/l/laohu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狮子\",\"url\":\"/l/shizi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鸽子\",\"url\":\"/l/gezi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"骄傲\",\"url\":\"/l/jiaoao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小猪\",\"url\":\"/l/xiaozhu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"渔民\",\"url\":\"/l/yumin/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"国王\",\"url\":\"/l/guowang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"善良\",\"url\":\"/l/shanliang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"熊\",\"url\":\"/l/xiong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鹰\",\"url\":\"/l/ying/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"妖精\",\"url\":\"/l/yaojing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"抗日\",\"url\":\"/l/kangri/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"英雄\",\"url\":\"/l/yingxiong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"少年\",\"url\":\"/l/shaonian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小狗\",\"url\":\"/l/xiaogou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"公鸡\",\"url\":\"/l/gongji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"河马\",\"url\":\"/l/hema/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小驴\",\"url\":\"/l/xialv/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"蜜蜂\",\"url\":\"/l/mifeng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"成长\",\"url\":\"/l/chengzhang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"萤火虫\",\"url\":\"/l/yinghuochong/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小田鼠\",\"url\":\"/l/tianshu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"礼貌\",\"url\":\"/l/lm/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"鱼\",\"url\":\"/l/xiaoyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狸猫\",\"url\":\"/l/limao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"圣诞节\",\"url\":\"/l/shengdanjie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"仙女\",\"url\":\"/l/xiannv/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"珍珠\",\"url\":\"/l/zhenzhu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"大象\",\"url\":\"/l/daxiang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"青蛙\",\"url\":\"/l/qingwa/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王子\",\"url\":\"/l/wangzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"雅典娜\",\"url\":\"/l/yadianna/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"风水\",\"url\":\"/l/fengshui/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"偷懒\",\"url\":\"/l/toulan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"温暖\",\"url\":\"/l/wennuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小鲤鱼\",\"url\":\"/l/liyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小螃蟹\",\"url\":\"/l/pangxie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"冒险\",\"url\":\"/l/maoxian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小猴\",\"url\":\"/l/xiaohou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"大黄狗\",\"url\":\"/l/dahuanggou/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"牧羊人\",\"url\":\"/l/muyangren/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"农民\",\"url\":\"/l/nongmin/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小蚂蚁\",\"url\":\"/l/mayi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"月亮\",\"url\":\"/l/yueliang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"西王母\",\"url\":\"/l/xwm/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"骗子\",\"url\":\"/l/pianzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"阿里\",\"url\":\"/l/ali/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"聪明\",\"url\":\"/l/congming/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小老鼠\",\"url\":\"/l/shu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"三顾茅庐\",\"url\":\"/l/sangumaolu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孙中山\",\"url\":\"/l/sunzhongshan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"公主\",\"url\":\"/l/gongzhu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"三国演义\",\"url\":\"/l/sanguoyanyi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"塞翁失马\",\"url\":\"/l/saiwongshima/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"闻鸡起舞\",\"url\":\"/l/wenjiqiwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"草船借箭\",\"url\":\"/l/caochuanjiejian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"金鱼\",\"url\":\"/l/jinyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"渔夫\",\"url\":\"/l/yufu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"睡美人\",\"url\":\"/l/shuimeiren/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诸葛亮\",\"url\":\"/l/zhugeliang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"坐井观天\",\"url\":\"/l/zuijingguantian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"忠犬八公\",\"url\":\"/l/zqbg/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"诚信\",\"url\":\"/l/chengxin/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"王二小\",\"url\":\"/l/wangxiaoer/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"赤伶\",\"url\":\"/l/chiling/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"灰姑娘\",\"url\":\"/l/huiguniang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"女娲造人\",\"url\":\"/l/nwzr/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"老鼠嫁女\",\"url\":\"/l/lsjn/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"亡羊补牢\",\"url\":\"/l/wangyangbulao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"愚公移山\",\"url\":\"/l/yugongyushan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"贝多芬\",\"url\":\"/l/beiduofen/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小雨\",\"url\":\"/l/yu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"后羿射日\",\"url\":\"/l/hysr/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"阿凡提\",\"url\":\"/l/afanti/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"钱学森\",\"url\":\"/l/qianxuesen/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小羊\",\"url\":\"/l/xiaoyang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"掩耳盗铃\",\"url\":\"/l/yanerdaoling/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狐假虎威\",\"url\":\"/l/hujiahuwei/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"十二生肖\",\"url\":\"/l/sesx/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"画蛇添足\",\"url\":\"/l/hstz/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"西游记\",\"url\":\"/l/xiyouji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"美人鱼\",\"url\":\"/l/meirenyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"司马光砸缸\",\"url\":\"/l/smgzg/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"春天\",\"url\":\"/l/chuntian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"雷锋\",\"url\":\"/l/leifeng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"爱迪生\",\"url\":\"/l/aidisheng/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"乌鸦\",\"url\":\"/l/wuya/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狐狸\",\"url\":\"/l/huli/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"大灰狼\",\"url\":\"/l/dahuilang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小白兔\",\"url\":\"/l/xiaobaitu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"高考\",\"url\":\"/l/gaokao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"精卫填海\",\"url\":\"/l/jingweitianhai/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"夸父追日\",\"url\":\"/l/kfzr/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"炊事班\",\"url\":\"/l/chuishiban/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孟婆汤\",\"url\":\"/l/mengpotang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"奈何桥\",\"url\":\"/l/naiheqiao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"丑小鸭\",\"url\":\"/l/chouxiaoya/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"叶公好龙\",\"url\":\"/l/yghl/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"牛郎织女\",\"url\":\"/l/niulangzhinv/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孔融让梨\",\"url\":\"/l/krrl/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"光阴\",\"url\":\"/l/guangyin/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"嫦娥奔月\",\"url\":\"/l/ceby/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"女娲补天\",\"url\":\"/l/nvwabutian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"龟兔赛跑\",\"url\":\"/l/guitusaipao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"神笔马良\",\"url\":\"/l/shenbimaliang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"凿壁偷光\",\"url\":\"/l/zbtg/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"三只小猪\",\"url\":\"/l/szxz/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"端午节\",\"url\":\"/l/duanwujie/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小红帽\",\"url\":\"/l/xiaohongmao/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"程门立雪\",\"url\":\"/l/cmlx/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"悬梁刺股\",\"url\":\"/l/xlcg/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"抗击疫情\",\"url\":\"/l/kjyq/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"白雪公主\",\"url\":\"/l/bxgz/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"屈原\",\"url\":\"/l/quyuan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"守株待兔\",\"url\":\"/l/shouzhudaitu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"孟母三迁\",\"url\":\"/l/mpsq/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"狼来了\",\"url\":\"/l/langlaile/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"七个小矮人\",\"url\":\"/l/qigexiaoairen/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"小兔子\",\"url\":\"/l/xiaotuzi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"井底之蛙\",\"url\":\"/l/jingdizhiwa/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"猴子捞月亮\",\"url\":\"/l/houzilaoyue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖​有声故事🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},\n{\"title\":\"儿童睡前故事\",\"url\":\"/yousheng/shuiqian/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"童话故事\",\"url\":\"/yousheng/tonghua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},\n{\"title\":\"🔖​绘本有声🔖​\",\"url\":\"\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}},{\"title\":\"社会生活\",\"url\":\"/huiben/shehuishenghuo/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"益智游戏\",\"url\":\"/huiben/yizhiyouxi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"认知\",\"url\":\"/huiben/renzhi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"自然\",\"url\":\"/huiben/ziran/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"民间故事\",\"url\":\"/huiben/minjiangushi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"童话\",\"url\":\"/huiben/tonghua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"心理\",\"url\":\"/huiben/xinli/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"情感\",\"url\":\"/huiben/qinggan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"情绪\",\"url\":\"/huiben/qingxu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"健康\",\"url\":\"/huiben/jiankang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"艺术\",\"url\":\"/huiben/yishu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"多元文化\",\"url\":\"/huiben/duoyuanwenhua/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"科普\",\"url\":\"/huiben/kepu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"人物\",\"url\":\"/huiben/renwu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"经典绘本\",\"url\":\"/huiben/jingdianhuiben/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"历史\",\"url\":\"/huiben/lishi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"获奖\",\"url\":\"/huiben/huojiang/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"哲学\",\"url\":\"/huiben/zhexue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"文学\",\"url\":\"/huiben/wenxue/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"语言\",\"url\":\"/huiben/yuyan/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"生活故事\",\"url\":\"/huiben/shenghuogushi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"人物传记\",\"url\":\"/huiben/renwuzhuanji/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"寓言故事\",\"url\":\"/huiben/yuyangushi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"自我认知\",\"url\":\"/huiben/ziworenzhi/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"友情\",\"url\":\"/huiben/youqing/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"英语\",\"url\":\"/huiben/yingyu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}},{\"title\":\"教师用书\",\"url\":\"/huiben/jiaoshiyongshu/page/{{page}}\",\"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}}\n]",
  "lastUpdateTime": 1758567826829,
  "respondTime": 1177,
  "ruleBookInfo": {
    "author": "<js>  \nif (baseUrl.match(/huiben/)) {       \t    \n\t  java.getString('//ul[1]/li[3]/text()');\n} else if (baseUrl.match(/ys/)) {  \n    java.getString('');\n} else if (baseUrl.match(/g|sketch/)) {  \n    java.getString('');\n}\n</js>",
    "coverUrl": "[property=\"og:image\"]@content",
    "intro": "<js>  \nif (baseUrl.match(/huiben/)) {       \t    java.getString('.infoText@ul.0@li[1:7]@html&&.infoText@p.-2:-1@html');\n} else if (baseUrl.match(/ys/)) {  \n    java.getString('.infoText@p.-1:-2@html');\n} else if (baseUrl.match(/g|sketch/)) {  \n    java.getString('.infoText@blockquote@html');\n}\n</js>##",
    "name": "[property=\"og:site_name\"]@content"
  },
  "ruleContent": {
    "content": "<js>  \nif (baseUrl.match(/ys/)) {       \t    java.getString('.infoText@audio@source@src');\n} else if (baseUrl.match(/huiben/)) {  \n    java.getString('.infoText@img@html');\n}\n    else if (baseUrl.match(/g|sketch/)) {  \n    java.getString('.infoText@html&&.time@text');\n} \n</js>##<li[^>]*>.*?</li>|<a[^>]*>.*?</a>|<span[^>]*>.*?</span>|<button[^>]*>.*?</button>",
    "imageStyle": "FULL",
    "replaceRegex": "##",
    "sourceRegex": ".*\\.(mp3|m4a).*"
  },
  "ruleExplore": {
    "author": ".author@text||._detail-p2@a.1@text",
    "bookList": "//ul[@class=\"wenList clearfix\"]/li||//div[@class=\"story-today clearfix\"]/ul/li",
    "bookUrl": "a.0@href",
    "coverUrl": "img@data-src",
    "intro": ".t-i@a@text||.story-describe@text||.story-describe@text",
    "kind": "text.时间@text",
    "name": ".t-t@a@text||._detail-p1@text||a@p.0@text"
  },
  "ruleSearch": {
    "author": ".author@a@text||a@div.1@text##\\|.*",
    "bookList": "#ppluck.0@li||.story-today@ul@li",
    "bookUrl": "a.0@href",
    "checkKeyWord": "怪男孩@绘本",
    "coverUrl": "img@data-src",
    "intro": ".t-i@a@text||.story-describe@text",
    "kind": ".time@text||a@div.1@text##(日期:|.*时间:)",
    "name": ".t-t@a@text||a@p@text",
    "wordCount": "超赞：{{@@.love@text}},赞：{{@@.ding@text}},踩：{{@@.cai@text}}"
  },
  "ruleToc": {
    "chapterList": "<js>  \nif (baseUrl.match(/ys/)) {  \n    book.type = 32;  \n    java.toast('听书模式');  \n    java.getElements('html');\n} else if (baseUrl.match(/huiben/)) {  \n    book.type = 64;  \n    java.toast('绘本模式');  \n    java.getElements('html');\n} else if (baseUrl.match(/(sketch|g)/)) {  \n    book.type = 8;  \n    java.toast('小说模式');  \n    java.getElements('html');\n}\n</js>",
    "chapterName": "h1@text||.t-t@h1@text"
  },
  "searchUrl": "@js:(function(){var n=key,t=\"story\";if(n.endsWith(\"@听书\")){t=\"audio\";n=n.slice(0,-3);}else if(n.endsWith(\"@绘本\")){t=\"book\";n=n.slice(0,-3);}else if(n.includes(\"@\")){n=n.replace(/@/g,\"\");}return`http://m.limaogushi.com/search?type=${t}&kw=${encodeURIComponent(n)}&page=${page}`;})()",
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
