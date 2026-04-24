// @name 美女图站（优++）
// @version 2025.10.05
// @author converted
// @url 这是一个图集
// @type comic
// @enabled true
// @tags 漫画,书源,图片,converted
// @description /*
// @description Dalvik/2.1.0 (Linux; U; Android 11; MI CC9 Pro Build/RKQ1.200826.002
// @description 💠街拍团发布：https://jiepai.in/
// @description 💠极品美女发布
// @description 全秀集：https://www.quanjixiu.top/
// @description 💠图片代理：

const LEGADO_SOURCE = {
  "bookSourceComment": "/*\n\tDalvik/2.1.0 (Linux; U; Android 11; MI CC9 Pro Build/RKQ1.200826.002\n💠街拍团发布：https://jiepai.in/\n💠极品美女发布\n    全秀集：https://www.quanjixiu.top/\n💠图片代理：\nhttps://pic1.xuehuaimg.com/proxy/\nhttps://images.weserv.nl/?url=\nhttps://imageproxy.pimg.tw/resize?url=\nhttps://search.pstatic.net/common?src=\n*/\nproxy1=\"https://pic1.xuehuaimg.com/proxy/\"\nproxy2=\"https://images.weserv.nl/?url=\"\nproxy3=\"https://imageproxy.pimg.tw/resize?url=\"\n//❗️书籍变量优先级＞源变量\n//❗️书籍变量设置为-1，则加载全部目录\n//❗️源变量最好设置10以内\nvar v = source.getVariable();\n\"\" == v || null == v || undefined == v\n  ? ((v = \"加载章节页：5\"), source.setVariable(v))\n  : v\nfunction cmpVariable(){\n\t sv=source.getVariable().match(/\\d+$/);\n\t bv=book.getVariable(\"custom\")\n\t \n\t sv=(sv==\"\"||sv==null)?\"\":parseInt(sv);\n\t bv=(bv==\"\"||bv==null)?\"\":parseInt(bv);\n\t nv=0;\n\t if(bv==-1){return nv}\n\t if(bv!=\"\"){nv=bv}else\n\t if(sv!=\"\"){nv=sv}\n\t return nv;\n}\nfunction getBookList(name,lc,inf,cover,href){\n\tlis=[];\n\tns=(name==\"\")?\"\":java.getStringList(name);\n\tlcs=(lc==\"\")?\"\":java.getStringList(lc);\n\tinfs=(inf==\"\")?\"\":java.getStringList(inf);\n\tcs=(cover==\"\")?\"\":java.getStringList(cover);\n\ths=(href==\"\")?\"\":java.getStringList(href);\n\t//java.log(ns)\n\t\n\tfor(var i=0;i<ns.length;i++){\n\t\t    jon={\"name\":ns[i],\n\t\t     \"href\":hs[i],\"info\":infs[i],\n\t\t     \"auth\":baseUrl.match(/(http[s]*:\\/\\/[^/]+)/)[1],\n\t\t         \"cover\":cs[i],\"lc\":lcs[i]};\n\t\tjava.log(ns[i]+\"||\"+hs[i]+\"||\"+cs[i]+\"||\"+lcs[i]);\n\t\t    lis.push(jon);\n  }\n\treturn lis;\n}\nfunction getChapterList(cn,cu,ci){\n\t   cs=[];\n\t   n=(cn==\"\")?\"\":java.getStringList(cn);\n    u=(cu==\"\")?\"\":java.getStringList(cu);\n    ii=(ci==\"\")?\"\":java.getStringList(ci);\n    \n   for(var i=0;i<n.length;i++){\n   \t   jso={\"cn\":n[i],\"cu\":u[i],\"ci\":ii[i]};\n   \t    \n   \t //java.log(JSON.stringify(jso))\n   \t  cs.push(jso);\n   }\n   return cs;\n\t}\n//参数说明：\n//imgr:图片规则,可为img@src或者@img@html\n//wdr:正文文字规则，没有置\"\"\n//bsurl:图片src属性不含域名，bsurl填域名\n//       否则置\"\"\n//isheads:解决图片防盗链，没有填\"\"，否则置\n//       {\"headers\"{\"Referer\":baseUrl}}\nfunction getContent(imgr,wdr,bsurl,isheads){\n\twds=(wdr==\"\")?\"\":java.getString(wdr);\n\ttus=java.getString(imgr);\n\tvar imgs=\"\";\n heads=(isheads==\"\")?\"\":\",\"+JSON.stringify(isheads)\n\t\n\tif(/@html/.test(imgr)){\n\t\t  \timgs=tus;\n\t\t}else{\n\t\t\timgs=tus.split(\"\\n\");\n\t\t\tfor(var i=0;i<imgs.length;i++){\n\t\t\t\tif(imgs[i]!=\"\"){\n\t\t\t\t  imgs[i]='<img  src=\"'+\n\t\t\t\t        \tbsurl+imgs[i]+heads+'\" />'\n\t\t\t\t   }\n\t\t\t\t   java.log(imgs[i])\n    }\n\t\t\t imgs=imgs.join(\"\\n\")\n\t\t}\n\t\treturn wds+imgs;\n}\n",
  "bookSourceGroup": "漫画 书源",
  "bookSourceName": "美女图站（优++）",
  "bookSourceType": 2,
  "bookSourceUrl": "这是一个图集",
  "customButton": false,
  "customOrder": 228,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "[\n    {\"title\":\"༺ˇ»`ʚ 亿图 站点 ɞ´«ˇ༻\",\n        \"url\":\"\",\n        \"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":1}\n    },\n    {\"title\":\"美女\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":6,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"壁纸\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":66,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\t\"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"动漫\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":47,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"摄影\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":37,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"手机\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":84,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"明星\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":11,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"萌宠\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":34,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"头像\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":57,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.25}\n    },\n    {\"title\":\"表情\",\n        \"url\":\"http://abbr.iqupu.cc/api/list,{\n        \\\"body\\\": {\\\"catid\\\":40,\\\"size\\\":1},\n        \\\"method\\\": \\\"POST\\\"}\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.25}\n    },\n\n\n    {\"title\":\"༺ˇ»`ʚ 摄影 站点ɞ´«ˇ༻\",\n        \"url\":\"\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":1}\n    },\n    {\"title\":\"CNU视觉联盟\",\n        \"url\":\"http://www.cnu.cc\",\n        \"style\":{\n            \"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.3}\n    },\n\n    \n    {\n        \"title\":\"༺ˇ»`ʚ 综合 站点ɞ´«ˇ༻\",\n        \"url\":\"\",\n        \"style\":{\"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":1,\n            \"layout_wrapBefore\":true}\n    },\n    {\"title\":\"Cosplay联盟\",\n        \"url\":\"https://www.pandadiu.com\",\n        \"style\":{\n            \"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.3}\n    },\n    {\"title\":\"7476美女图片\",\n        \"url\":\"https://www.7476.com/meitu/\",\n        \"style\":{\n            \"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.3}\n    },\n    {\"title\":\"唯一图片\",\n        \"url\":\"https://m.mmonly.cc/mmtp/\",\n        \"style\":{\n            \"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.3}\n    },\n    {\"title\":\"Asian Beauty Hub\",\n        \"url\":\"https://www.theasianbeauty.com/\",\n        \"style\":{\n            \"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.3}\n    },\n    {\"title\":\"福利兔🐇\",\n        \"url\":\"https://www.fulitu.cc/\",\n        \"style\":{\n            \"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.3}\n    },\n    {\"title\":\"1Y Beauties\",\n        \"url\":\"https://www.1y.is/\",\n        \"style\":{\n            \"layout_flexGrow\":1,\n            \"layout_flexBasisPercent\":0.3}\n    }\n]",
  "header": "{\"User-Agent\":\"Mozilla/5.0 (Linux; Android 11; MI CC9 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36\"}",
  "lastUpdateTime": 1759653851975,
  "respondTime": 4617,
  "ruleBookInfo": {
    "author": "@js:baseUrl.match(/(http[s]*:\\/\\/[^/]+)/)[1]",
    "intro": "@js:\"\\n💠书籍变量优先级＞源变量\\n💠书籍变量设置为-1，则加载全部目录\\n🌟源变量最好设置10以内\""
  },
  "ruleContent": {
    "content": "<js>\neval(String(source.bookSourceComment));\nbook.setUseReplaceRule(false)\n\n//vmgirls站点正文规则\nif(baseUrl.indexOf(\"vmgirls\")>0){\n\t wdr=\"\";\n\t imgr=\".nc-light-gallery@html\";\n\t getContent(imgr,wdr,\"\");\n}else\n\n\n//iqupu站点正文规则\nif(baseUrl.indexOf(\"iqupu\")>0){\n\t\n\t wdr=\"$.data.description\";\n\t imgr=\"$.data.imgArr[*]\";\n\t getContent(imgr,wdr,\"\",\"\");\n\t \n}\n\n//xgmn站点正文规则\nif(baseUrl.indexOf(\"xgmn02\")>0){\n\t\twdr=\".article-meta@span:not(:last-child)@text\";\n\timgr=\".article-content@img@src\";\n\tburl=\"https://j.20dh.top\";\n\t\n\tws=\"\";\n\t\n\t if(baseUrl.indexOf(\"_\")==-1){\n\t \t vU=java.\n\t \t      getString(\".article-meta@iframe@src\");\n\t \t getN=java.ajax(vU).match(/\\d+/)[0]\n\t \t  ws=java.getString(wdr).\n\t \t       replace(\"阅读：\",\"阅读：\"+getN+\"\\n\");\n\t \t}\n\t \n\t ws+getContent(imgr,\"\",burl,\"\").\n\t   replace(/uploadfile/g,\"Uploadfile\");\n\t \n}else\n\n\n\n//tuaox站点正文规则\nif(baseUrl.indexOf(\"tuaox\")>0){\n\twdr=\".article-meta@span[0,2]@text\";\n\timgr=\".article-content@img@src\";\n\t\n\tws=\"\";\n\t if(baseUrl.indexOf(\"page\")==-1){\n\t \t  ws=\"时间：\"+java.getString(wdr);\n\t \t  //java.log(ws)\n\t \t}\n\t \theads={\"headers\":{\"Referer\":baseUrl}};\n\t \tws+getContent(imgr,\"\",\"\",heads);\n}else\n\n\n\n//cosplay8站点正文规则\nif(baseUrl.indexOf(\"cosplay8\")>0){\n\twdr=\".arc_about@span@text\";\n\timgr=\".pic_info@img@src\";\n\n ws=\"\";\n\tif(baseUrl.indexOf(\"_\")==-1){\n\t \t ws=java.getString(wdr).\n\t \t       replace(\"阅读：\",\"\").replace(\"次\",\"\");\n\t \t meta=java.getString\n\t \t        (\"meta[name='description']@content\")\n\t \t  if(meta!=\"\"){\n\t \t  \t   ws+=meta;\n\t \t  \t}\n\t \t  \n\t \t}\n\t \tws+getContent(imgr,\"\",\n\t \t\t       \"http://www.cosplay8.com\",\"\");\n\t \t\n}else\n\n//pandadiu站点正文规则\nif(baseUrl.indexOf(\"pandadiu\")>0){\n wdr=\".works_view@text&&meta[name='keywords']@content&&.article_ct@text\";\n\timgr=\".article_ct@img@html\";\n\tws=java.getString(wdr).split(\"\\n\")\n\tw=\"时间：\"+ws[0]+\"\\n关键字：\"+ws[1]\n\tif(ws.length==3){w+=\"\\n描述：\"+ws[2]}\n\t\n\tw+getContent(imgr,\"\",\"\",\"\");\n\t\n}else\n\n\n//CNU视觉联盟站点正文规则\nif(baseUrl.indexOf(\"cnu.cc\")>0){\n\twdr=\".container[0,1]@text\";\n\timgr=\"#imgs_json@text\";\n\tjsos=java.getString(imgr);\n\timgs=jsos.match(/img.*?,/g)\n\tbsurl=\"http://imgoss.cnu.cc/\"\n\t\n\tres=\"\"\n\timgs.map((x,i)=>{\n\t\t   t=x.replace('img\":\"','').replace('\",','')\n\t\t   res+='<img src=\"'+bsurl+t+'\"/>'\n\t\t })\n  res=java.getString(wdr)+res;\n}else\n\n//7476站点正文规则\nif(baseUrl.indexOf(\"7476\")>0){\n\twdr=\".Bigimg_style@span!-1@text\";\n\timgr=\".pic-large@img@html\";\n\t\n\tws=\"\";\n\tif(baseUrl.indexOf(\"_\")==-1){\n\t\t ws=java.getString(wdr)\n\t\t}\n\tws+getContent(imgr,\"\",\"\",\"\").\n\t     replace(/http/g,\"https\");\n\t\n}else\n\n\n//mmonly站点正文规则\nif(baseUrl.indexOf(\"mmonly\")>0){\n\twdr=\".Art-desc@text\";\n\timgr=\"#ArticleBox@img@html\";\n \n ws=\"\";\n\tif(baseUrl.indexOf(\"_\")==-1){\n\t\t ws=java.getString(wdr).\n\t\t       replace(\"内容简介\",\"时间：\")\n\t\t}\n\tws+getContent(imgr,\"\",\"\",\"\")\n}else\n\n//jiepaituan站点正文规则\nif(baseUrl.indexOf(\"jiepaituan\")>0){\n\twdr=\".post-meta@text\";\n\timgr=\".post-content@img@src\";\n\theader={\"headers\":{\"Referer\":baseUrl}}\n\tgetContent(imgr,wdr,\"\",header)\n}else\n\n//theasianbeauty站点正文规则\nif(baseUrl.indexOf(\"theasianbeauty\")>0){\n\t  res=\"\"\n\t  scri=java.getString(\"script[id]@all\")\n\t  mat=scri.match(/<[^>]+>/g)\n\t       .forEach(x=>scri=scri.replace(x,\"\"))\n\t  jso=JSON.parse(scri);\n\t  wdr=jso.props.pageProps.\n\t              beautyData.description;\n\t  imgs=jso.props.pageProps.\n\t              beautyData.media.other_media;\n\t  for(var i=0;i<imgs.length;i++){\n\t  \t   res+='<img src=\"'+imgs[i].url+'\" />'\n    }\n\t  \n\t  wdr+res\n}else\n\n\n//ross20站点正文规则\nif(baseUrl.indexOf(\"ross20\")>0){\n\twdr=\".focusbox@.list-meta@text\";\n\timgr=\".post@span@data-src\";\n\t\n\tgetContent(imgr,wdr,\"\",\"\")\n}else\n\n\n//mbyn5.xyz站点正文规则\nif(baseUrl.indexOf(\"mbyn5.xyz\")>0){\n\twdr=\".container@.clearfix@text\";\n\timgr=\".art-content@img@data-original\";\n\t\n\t\"发布时间：\"+getContent(imgr,wdr,\"\",\"\")\n}else\n\n\n//jjgirls站点正文规则\nif(baseUrl.indexOf(\"jjgirls\")>0){\n\timgr=\".p222308@img:not(img[src*=thumbs])@src\";\n\tbsurl=\"https://jjgirls.com\"\n getContent(imgr,\"\",bsurl,\"\").\n          replace(/cute-/g,\"\").\n          replace(/http/g,proxy1+\"http\");\n}else\n\n//1000yishu站点正文规则\nif(baseUrl.indexOf(\"1000yishu\")>0){\n\timgr=\".big_img@img@html\";\n\t\n getContent(imgr,\"\",\"\",\"\")\n}else\n\n//heaven站点正文规则\nif(baseUrl.indexOf(\"heaven.porn\")>0){\n\timgr=\".photosG@a[:-5]@href\";\n\t\n getContent(imgr,\"\",\"\",\"\")\n}else\n\n//ONS站点正文规则\nif(baseUrl.indexOf(\"ons.ooo\")>0){\n\twdr=\".article-tags@text\"\n\timgr=\"article@img@data-original\";\n\t\n getContent(imgr,wdr,\"\",\"\")\n}else\n\n//fulitu.cc站点正文规则\nif(baseUrl.indexOf(\"fulitu.cc\")>0){\n\twdr=\".post-info@.post-info-box@text\"\n\timgr=\"#masonry@img@data-original\";\n\t\n getContent(imgr,wdr,\"\",\"\")\n}else\n\n\n//www.1y.is站点正文规则\nif(baseUrl.indexOf(\"www.1y.is\")>0){\n\timgr=\".entry-content@img@src\";\n\t\n getContent(imgr,\"\",\"\",\"\")\n}else\n\n\n//kanmeitu站点正文规则\nif(baseUrl.indexOf(\"kanmeitu\")>0){\n\twdr=\".neitags@text\"\n\timgr=\".article-content@img[1:-2]@src\";\n\t\n getContent(imgr,wdr,\"\",\"\")\n}else\n\n//kanxiaojiejie站点正文规则\nif(baseUrl.indexOf(\"kanxiaojiejie\")>0){\n\timgr=\".entry-content@img@html\";\n\t\n getContent(imgr,\"\",\"\",\"\")\n}else\n\n//nsfwx.pics站点正文规则\nif(baseUrl.indexOf(\"nsfwx.pics\")>0){\n\timgr=\".entry-content@img@src\";\n\t\n getContent(imgr,\"\",proxy2,\"\")\n}else\n\n\n//asiantolick🚀ˢˢʳ站点正文规则\nif(baseUrl.indexOf(\"asiantolick\")>0){\n\timgr=\"article@div@data-src\";\n\twdr=\"#metadata_qrcode@span!-1:-2:-3@text\"\n\t\n getContent(imgr,wdr,proxy3,\"\").\n             replace(/\\/view/g,\"\").\n             replace(/description/,\"描述\").\n             replace(/Creation date/,\"日期\").\n             replace(/Gallery pictures/,\"数量\")\n}else\n\n//everia.club🚀ˢˢʳ站点正文规则\nif(baseUrl.indexOf(\"everia.club\")>0){\n\timgr=\"figure@img@src\";\n\t\n getContent(imgr,\"\",\"\",\"\")\n}else\n\n//DopaPage站点正文规则\nif(baseUrl.indexOf(\"dopaminegirl\")>0){\n\timgr=\".masonry@img@src\";\n\t\n getContent(imgr,\"\",proxy1,\"\").\n         replace(/https:\\/\\/i\\d+\\.wp\\.com\\//g,\"\")\n}else\n\n\n//app125站点正文规则\nif(baseUrl.indexOf(\"app125\")>0){\n\theader={\"headers\":{\n\t\t          \"X-Requested-With\":\n\t\t          \"com.UCMobile\",\"Referer\":\n\t\t          \"http://m.xiannvku.net/\"}}\n\tif(baseUrl.indexOf(\"motel\")>0){\n\t\tre=\"\"\n\t\ttitle=java.getString(\"$.data[*].text\").\n\t\t                 split(\"\\n\")\n\t dat=java.getString(\"$.data[*]\").split(\"\\n\")\n\t dat.map((x,i)=>{\n\t \t  wdr=\"$.data[\"+i+\"].addtime\"\n\t \t  imgr=\"$.data[\"+i+\"].piclist[*]\";\n\t \t  if(baseUrl.\n\t \t  \t      match(/page=\\d+/)[0]==\"page=0\"){\n\t \t  \t      des=java.get(x[\"motel_name\"])\n\t \t  \t      re+=des\n\t \t  \t }\n\t \t  re+=title[i]+\"\\n\"+getContent\n\t \t             (imgr,wdr,\"\",header);\n\t \t  java.log(title[i])\n\t \t  \n\t \t})\n\t \tre\n\t}else{\n\t\twdr=\"$.addtime\"\n\t imgr=\"$.data[*]\";\n\t des=String(java.getString(\"$.text\")).\n\t         replace(/本.*APP即可下载/,\"\")\n\t tags=java.getString\n\t           (\"$.tags[*].name\").split(\"\\n\").join(\",\")\n  des+\"\\n标签:\"+tags+\"\\n时间:\"+getContent\n        (imgr,wdr,\"\",header);\n\t}\n}else\n//仙女库wap站点正文规则\nif(baseUrl.indexOf(\"xiannvku\")>0){\n\timgr=\"#content@img@src\";\n\twdr=\"#content@p!-1@text&&.biaoqian@text\"\n\topt={\"headers\":{\"Referer\":\n\t\t          \"http://m.xiannvku.cc/\"}}\n\tws=\"\"\n\tif(baseUrl.indexOf(\"-1.html\")>0){\n\t\tws=java.getString(wdr)\n\t\t}\n ws+getContent(imgr,\"\",\"\",opt);\n}else\n\n//jokerlu6站点正文规则\nif(baseUrl.indexOf(\"jokerlu6\")>0){\n\timgr=\".photo_box@img@src\";\n getContent(imgr,\"\",proxy3,\"\");\n}else\n\n\n//美图公社站点正文规则\nif(baseUrl.indexOf(\"tooopen\")>0){\n\timgr=\"#faded@img@src\";\n\theaders={\"headers\":{\"Referer\":\n\t            \"https://desk.tooopen.com/\"}}\n getContent(imgr,\"\",\"\",headers)\n}else\n\n\n//春光图片网站点正文规则\nif(baseUrl.indexOf(\"cgtpw.com\")>0){\n\timgr=\".ArticleImageBox@img@src\";\n getContent(imgr,\"\",\"\",\"\")\n}else\n\n\n//爱死美女站点正文规则\nif(baseUrl.indexOf(\"24tupian\")>0){\n\timgr=\"#imgshow@img@src\";\n\t\n\theaders={\"headers\":{\"Referer\":\n\t            \"https://www.24tupian.org/\"}}\n getContent(imgr,\"\",\"\",headers)\n         \n}else\n\n\n//photos18站点正文规则\nif(baseUrl.indexOf(\"photos18\")>0){\n\timgr=\"#content@img@data-src\";\n\topt={\"headers\":{\"Referer\":baseUrl}}\n getContent(imgr,\"\",\"\",opt)\n         \n}else\n\n//hentai-cosplays站点正文规则\nif(baseUrl.indexOf(\"hentai-cosplays\")>0){\n\t\n\tif(baseUrl.indexOf(\"ranking-images\")>0){\n\t\timgr=\"#container@img@data-original\";\n\t}else{\n\t\timgr=\"#detail_list@img@src\";\n\t}\n\t\n getContent(imgr,\"\",\"\",\"\").replace(/p=[0-9x]*\\//g,\"\")\n         \n}else\n\n\n//推特图站点正文规则\nif(baseUrl.indexOf(\"tuiimg.com\")>0){\n\timgr=\"\";\n\t\n if(baseUrl.indexOf(\"meinv\")>0){\n\t\tnum=parseInt(java.getString\n\t\t\t          (\"#allbtn@text\").match(/\\/(\\d+)/)[1])\n\t eval(src.match(/var _pd[^;]*/)[0])\n\t\timgs=[]\n\t\timgurl=\"https://i.tuiimg.net/\"\n\t for(var i=1;i<=_pd[3];i++){\n\t \t  img='<img src=\"'+imgurl+_pd[1]+i+'.jpg\">'\n\t \t  imgs.push(img)\n  }\n  imgs.join(\"\\n\")\n\t}else{\n\t\timgr=\".main@img@html\";\n\t\twdr=\".date@text&&.down@html&&.godown@a@href\"\n\t\tgetContent(imgr,wdr,\"\",\"\").replace(/(下载原图)/,\"\\n$1\")\n\t}\n         \n}else\n\n//爱美女站点正文规则\nif(baseUrl.indexOf(\"2meinv.com\")>0){\n\timgr=\".arcmain@img@src\";\n getContent(imgr,\"\",\"\",\"\")\n         \n}else\n\n//推次元站点正文规则\nif(baseUrl.indexOf(\"t2cy.com\")>0){\n\timgr=\"#Gallery@img.0@src&&#Gallery@img@data-loadsrc\";\n\twdr=\".check_box@p@html&&.check_box@.mt5@html\"\n getContent(imgr,wdr,\"\",\"\")\n         \n}\n\n</js>",
    "imageStyle": "FULL",
    "nextContentUrl": "<js>\nt=\"\"\n\n//xgmn站点正文下一页规则\nif(baseUrl.indexOf(\"xgmn02\")>0){\n t=java.getString(\"a:contains(下一页)@href\");\n}else\n\n//tuaox站点正文下一页规则\nif(baseUrl.indexOf(\"tuaox\")>0){\n t=java.getString(\"a:contains(下一页)@href\");\n //java.log(t)\n}else\n\n//cosplay8站点正文下一页规则\nif(baseUrl.indexOf(\"cosplay8\")>0){\n t=java.getString(\"a:contains(下一页)@href\");\n if(t==\"#\"){t=\"\"};\n}else\n\n\n//7476站点正文下一页规则\nif(baseUrl.indexOf(\"7476.com\")>0){\n\tt=\"\";\n allN=parseInt(java.getString\n \t              (\".ptitle@em@text\"));\n thisNS=baseUrl.match(/_\\d+/);\n\n thisN=(thisNS==null)?0:\n            parseInt(thisNS[0].replace(\"_\",\"\"));\n java.log(thisN)\n if(thisN<allN-1){\n \t    t=(thisN==0)?baseUrl.\n \t        replace(/\\.h/,\"_\"+1+\".h\"):baseUrl.\n \t        replace(/\\d+\\.h/,(++thisN)+\".h\");\n \t   t=t.replace(/meitu/,\"retu\");\n \t\t};\n \t\tt;\n}else\n\n\n//mmonly站点正文下一页规则\nif(baseUrl.indexOf(\"mmonly\")>0){\n t=java.getString(\"a:contains(下一页)@href\");\n}else\n\n//1000yishu站点正文下一页规则\nif(baseUrl.indexOf(\"1000yishu\")>0){\n t=java.getString(\"a:contains(下一页)@href\");\n}else\n\n\n//www.1y.is站点正文下一页规则\nif(baseUrl.indexOf(\"www.1y.is\")>0){\n t=java.getStringList(\".page-links@a!0@href\");\n}else\n\n//app125站点正文下一页规则\nif(baseUrl.indexOf(\"app125\")>0&&baseUrl.indexOf(\"motel\")>0){\n\tthispage=parseInt(baseUrl.\tmatch\n\t\t         (/page=\\d+/)[0].replace(\"page=\",\"\"));\n\tallP=parseInt(java.getString(\"$.totalpage\"));\n\tcp=parseInt(java.get(\"cmpnum\"))\n\tsetp=cp==0?20:cp\n \tif(thispage<allP&&thispage<setp){\n\t\t   ne=baseUrl.replace\n\t\t        (/page=\\d+/,\"page=\"+(++thispage))\n }\n}else\n//仙女库wap站点正文下一页规则\nif(baseUrl.indexOf(\"m.xiannvku\")>0){\n  t=java.getString(\"a:contains(下一页)@href\");\n}else\n\n\n//春光图片网站点正文下一页规则\nif(baseUrl.indexOf(\"cgtpw.com\")>0){\n  t=java.getString(\"a:contains(下一页)@href\");\n}else\n\n\n//爱死美女网站点正文下一页规则\nif(baseUrl.indexOf(\"24tupian\")>0){\n  t=java.getString(\"#imgshow@a[href$=html]@href\");\n  t=t.indexOf(\"java\")>0?\"\":t\n}else\n\n\n//爱美女网站点正文下一页规则\nif(baseUrl.indexOf(\"2meinv.com\")>0){\n  t=java.getString(\"text.下一页@href\");\n  t=t.indexOf(\"java\")>0?\"\":t\n}\n\n</js>"
  },
  "ruleExplore": {
    "author": "auth",
    "bookList": "<js>\neval(String(source.bookSourceComment));\n\nvar nr=\"\";\nvar hr=\"\";\nvar ls=[];\n\n//vmgirls站点规则\nif(baseUrl.indexOf(\"vmgirls\")>0){\n\t\n\tnr= \".aside-menu@a[2:]@text\";\t\n\thr=\".aside-menu@a[2:]@href\";\n\tcr=\".container:last-of-type@.media-content@style\"\n\t\n\t\tls=getBookList(nr,\"\",\"\",cr,hr);\n\t\t\n\tls.forEach(x=>{\n\t\t\tx.cover=x.cover.match(/'(.*)'/)[1];\n\t\t\t})\n\t\t\t\n\t}else \n\t\n\t\n\t\n//iqupu站点目录规则\nif(baseUrl.indexOf(\"iqupu\")>0){\n\t\t\n\t\tnr= \"$.data[*].title\";\n\t\thr=\"$.data[*].id\";\n\t\tcr=\"$.data[*].data[0].thumb\";\n\t\tlr=\"$.data[*].data[0].title\";\n\t\t\n\t\tls=getBookList(nr,lr,\"\",cr,hr);\n\t\t\n\t\tls.forEach(x=>{\n\t\t\theaders={\n      \"body\": \"{\\\"catid\\\": \"+x.href+\",\\\"limit\\\": 20,\\\"page\\\": 1}\",\"method\": \"POST\"}\n\t\t\nx.href=baseUrl+\"Content,\"+JSON.stringify(headers)\n  })\n  \n  ls\n}else\n\n\n//xgmn站点规则\nif(baseUrl.indexOf(\"xgmn02\")>0){\n\t nr= \".title-h2l@a@text\";\n\t\tcr=\".related_box@img@src\"\n\t\thr=\".title-h2l@a@href\";\n\t\n\t ls=getBookList(nr,\"\",\"\",cr,hr);\n\t \n\t ls.forEach(x=>{\n\t \t  x.href=x.href.replace(\"siwame\",\"Siwamei\");\n\t \t  //java.log(JSON.stringify(x))\n\t \t})\n}else\n\n\n//tuaox站点规则\nif(baseUrl.indexOf(\"tuaox\")>0){\n\tnr= \".nav@li[2:6]@a@text\";\n\thr=\".nav@li[2:6]@a@href\";\tcr=\".content@.item:nth-child(3n-2)@img@src\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n\t\n}else\n\n\n//cosplay8站点规则\nif(baseUrl.indexOf(\"cosplay8\")>0){\n\tnr= \".navbar-nav@.nav-link[1:4]@text\";\n\thr=\".navbar-nav@.nav-link[1:4]@href\";\n\tcr=\".container-fluid@img@src\";\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n\t//ls.forEach(x=>{\n   // x.cover=\"http://www.cosplay8.com\"+\n  //  \t         x.cover\n // })\n}else\n\n\n\n//pandadiu站点规则\nif(baseUrl.indexOf(\"pandadiu\")>0){\n\tnr= \"#nav@a[4,5,7,8]@ownText\";\n\thr=\"#nav@a[4,5,7,8]@href\";\n\tcr=\".photo@img[:4]@src\";\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n\t\n\tls.forEach((x,i)=>{\n\t\tjava.log(JSON.stringify(x))\n\t\t if(i<2){x.name=\"COS\"+x.name}else{\n\t\t \t   x.name+=\"写真\";\n\t\t \t}\n  })\n}else\n\n\n\n//cnu.cc站点规则\nif(baseUrl.indexOf(\"cnu.cc\")>0){\n\tnr= \"#navbar@a[1:2]@text\";\n\thr=\"#navbar@a[1:2]@href\";\n\tcr=\".thumbnail@img[:2]@src\";\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n\t\n}else\n\n\n//7476站点规则\nif(baseUrl.indexOf(\"7476.com\")>0){\n\tnr= \".main_cont@.tit[1:]@h2@text\";\n\thr=\".main_cont@.tit@a@href\";\n\tcr=\".main@.list_cont[1:]@li:first-child@img@data-original\";\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n\t\n\tls.forEach(x=>baseUrl+\n\t\t   x.href.match(/\\d+\\//)[0])\n\t\n}else\n\n\n//mmonly站点规则\nif(baseUrl.indexOf(\"mmonly\")>0){\n\tnr=\n\t\t\"街拍,内衣,性感,丝袜,清纯,长腿,比基尼\".split(\",\");\n\thr=\"jp,ny,xg,sw,qc,ct,bjn\".split(\",\");\n\tls=[]\n\tfor(var i=0;i<nr.length;i++){\n\t\t n=nr[i]+\"美女\"\n\t\t h=baseUrl+hr[i]+\"mn/\"\n\t\t jon={\"name\":n,\"href\":h,\"cover\":\"https://t1.mmonly.cc/uploads/tu/202106/9999/4035e2dd2b.jpg\",\"lc\":\"\"};\n\t\t ls.push(jon)\n  }\n\tls;\n}else\n\n//jiepaituan站点规则\nif(baseUrl.indexOf(\"jiepaituan\")>0){\n\tnr= \".nav-menu@li[1,3]@a@text\";\n\thr=\".nav-menu@li[1,3]@a@href\";\n\tcr=\".post-content@img@src\"\n\theader={\"headers\":{\"Referer\":baseUrl}}\n\t\n\t\tls=getBookList(nr,\"\",\"\",cr,hr);\n\t\tls.forEach(x=>{x.cover=\n\t\t   x.cover+\",\"+JSON.stringify(header)\n\t\t  // java.log(\"=====\")\n\t\t   java.log(x.cover)\n\t\t})\n}else\n\n//theasianbeauty站点规则\nif(baseUrl.indexOf(\"theasianbeauty\")>0){\n\tnr= \".uppercase@text\";\n\thr=\".uppercase@href\";\n\tcr=\"picture@img@src\"\n\tls=[{\"name\":\"Asian\",\"href\":baseUrl}]\n\tls=ls.concat(getBookList(nr,\"\",\"\",cr,hr));\n\t\n}else\n\n//ross20站点规则\nif(baseUrl.indexOf(\"ross20\")>0){\n\tnr= \".sidebar@li!0@a@text\";\n\thr=\".sidebar@li!0@a@href\";\n\tcr=\".topsige@img@src\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n//mbyn5.xyz站点规则\nif(baseUrl.indexOf(\"mbyn5.xyz\")>0){\n\tnr= \"#menu@li!0:-1@a@text\";\n\thr=\"#menu@li!0:-1@a@href\";\n\tcr=\"#posts@img@data-original\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n\n//jjgirls站点规则\nif(baseUrl.indexOf(\"jjgirls\")>0){\n\tnr= \"#nav@.boxa.0@text\";\n\thr=\"#nav@.boxa.0@href\";\n\tcr=\"div[class]@img.0@src\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n\n//1000yishu站点规则\nif(baseUrl.indexOf(\"1000yishu\")>0){\n\tnr= \".hd_nav@a!0@text\";\n\thr=\".hd_nav@a!0@href\";\n\tcr=\".product01@li:first-child@img@src\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n\n//heaven站点规则\nif(baseUrl.indexOf(\"heaven\")>0){\n\tnr= \".hideMENU@a[3:]@text\";\n\thr=\".hideMENU@a[3:]@href\";\n\tcr=\".photos@img@src\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n\n//ONS站点规则\nif(baseUrl.indexOf(\"ons.ooo\")>0){\n\tnr= \".sitenav@a@text\";\n\thr=\".sitenav@a@href\";\n\tcr=\"article@div@style\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n\tls.forEach(x=>{\n\t\tx.cover=x.cover.match(/http.*/)[0].\n\t\t           replace(\");\",\"\")\n\t\t})\n}else\n\n//fulitu.cc站点规则\nif(baseUrl.indexOf(\"fulitu.cc\")>0){\n\tnr= \".nav.0@a[1:22]@text\";\n\thr=\".nav.0@a[1:22]@href\";\n\tcr=\"#masonry@img!0@data-original\"\n tls=getBookList(nr,\"\",\"\",cr,hr);\n \n tls.forEach(x=>{\n \t  if(x.name!=\"默认分类\"){\n \t  \t  if(x.name!=\"美女\"){\n \t  \t  \t         x.name=\"Cos \"+x.name}\n \t \t   ls.push(x)\n \t \t }\n \t})\n}else\n\n//1Y Beauties站点规则\nif(baseUrl.indexOf(\"www.1y.is\")>0){\n\tnr= \".primary-menu@a!-1@text\";\n\thr=\".primary-menu@a!-1@href\";\n\tcr=\".entry-card@img@data-src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n//kanmeitu1站点规则\nif(baseUrl.indexOf(\"kanmeitu1\")>0){\n\tnr= \".hot-tags.0@a@text\";\n\thr=\".hot-tags.0@a@href\"\n\t\n ls=getBookList(nr,\"\",\"\",\"\",hr);\n}else\n\n\n//kanxiaojiejie站点规则\nif(baseUrl.indexOf(\"kanxiaojiejie\")>0){\n\tnr= \".menu-item[2,3]@a@text\";\n\thr=\".menu-item[2,3]@a@href\"\n\tcr=\".gridsoul-posts@img@src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n//nsfwx.pics站点规则\nif(baseUrl.indexOf(\"nsfwx\")>0){\n\tnr= \"#primary-menu@a[0,1]@text\";\n\thr=\"#primary-menu@a[0,1]@href\"\n\tcr=\"#main@a@style\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n ls.forEach(x=>{\n \t  x.cover=x.cover.match(/url\\(.*\\)/)[0].\n \t              replace(/url\\(/,\"\").replace(/\\)/,\"\");\n \t              \n \t})\n}else\n\n\n//asiantolick站点规则\nif(baseUrl.indexOf(\"asiantolick\")>0){\n\tnr= \"#menu@a[0:6]@text\";\n\thr=\"#menu@a[0:6]@href\"\n\tcr=\"#wrap@img@data-src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n \n}else\n\n//everia.club站点规则\nif(baseUrl.indexOf(\"everia.club\")>0){\n\tnr= \".nav-menu-primary.0@a@text\";\n\thr=\".nav-menu-primary.0@a@href\"\n\tcr=\".posts-wrapper@img@src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n \n}else\n\n\n//DopamineGirl站点规则\nif(baseUrl.indexOf(\"dopaminegirl\")>0){\n\t\n ls.push({\"name\":\"DopamineGirl\",\n \t          \"href\":baseUrl,\n \t          \"cover\":java.getString\n \t             (\".navbar-brand@img@src\")})\n \n}\n\n//app125站点目录规则\nif(baseUrl.indexOf(\"app125\")>0){\n\theaders={\"method\":\"POST\",\"headers\":{\n\t             \"user-agent\":\"Dart/2.12 (dart:io)\"}};\n\tif(baseUrl.indexOf(\"motel\")>0){\n\t\t pic=java.getString(\"$.data[*].pic[0]\")\n\t\t bdy=\"page=1&pagesize=30\";\n   \theaders[\"body\"]=bdy\n\t\t   ls.push({\"name\":\"模特\",\"href\":baseUrl+\",\"+\n\t\t   \t JSON.stringify(headers),\"cover\":pic})\n\t\t}else{\n\t\t\tbsurl=\"http://apis.app125.com/api/lists/\"\n  \t\tnr= \"$.data[*].name\";\n\t  \thr=\"$.data[*].id\";\n\t \t cr=\"$.data[*].pic\";\n \t  \tir=\"$.data[*].text\";\n\t  \tls=getBookList(nr,\"\",ir,cr,hr);\n\t  \t\n\t  \tpages=parseInt\n\t\t          (java.getString(\"$.totalpage\"))\n\t  h={\"method\":\"POST\",\n\t             \t\"user-agent\":\"Dart/2.12 (dart:io)\"};\n\t\t\n\t\tfor(var i=2;i<=pages;i++){\n\t\t\t body=\"page=\"+i+\"&pagesize=30\"\n\t\t\t resp=java.post(baseUrl,body,h)\n\t\t\t ns=java.getStringList(nr,resp.body());\n\t\t\t hs=java.getStringList(hr,resp.body());\n\t\t\t cs=java.getStringList(cr,resp.body());\n\t\t\t is=java.getStringList(ir,resp.body());\n\t\t\t for(var j=0;j<ns.length;j++){\n\t\t\t \t  ls.push({\"name\":ns[j],\"href\":hs[j],\n\t\t\t \t          \"cover\":cs[j],\"info\":is[j]})\n     }\n\t\t}\n\t\tls.forEach(x=>{\n   \t    bdy=\"id=\"+x.href+\"&page=1\";\n   \t    headers[\"body\"]=bdy\n\t\t     //java.log(JSON.stringify(headers))\n\t\t  \t   x.href=baseUrl+\"_type,\"+\n\t\t  \t           \tJSON.stringify(headers)\n     \t})\n  }\n}else\n//仙女库wap站\nif(baseUrl.indexOf(\"xiannvku\")>0){\n\tnr= \"#nav@a@text\";\n\thr=\"#nav@a@href\"\n\tcr=\".img@img@src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n \n}else\n\n//jokerlu6站点规则\nif(baseUrl.indexOf(\"jokerlu6\")>0){\n\tnr= \"ul.cl-effect-70@a@text\";\n\thr=\"ul.cl-effect-70@a@href\"\n\tcr=\".recommended-grids.-2@img@src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n getBookList(nr.replace(\"70\",\"119\"),\"\",\"\",\n      \tcr,\n \t      hr.replace(\"70\",\"119\")).forEach(x=>{\n \t        \tls.push(x)\n \t     \t})\n}else\n\n\n//美图公社站点规则\nif(baseUrl.indexOf(\"tooopen\")>0){\n\tnr= \".nav@a@text\";\n\thr=\".nav@a@href\"\n\tcr=\".img-list@img@src\"\n\t\n\theaders=',{\"headers\":{\"Referer\":\"'+\n\t\t                baseUrl+'\"}}'\n ls=getBookList(nr,\"\",\"\",cr,hr);\n ls.forEach(x=>{\n \t  x.cover+=headers\n \t})\n \n}else\n\n\n//春光图片网站点规则\nif(baseUrl.indexOf(\"cgtpw.com\")>0){\n\tnr= \".g-header-nav@a!5@text\";\n\thr=\".g-header-nav@a!5@href\"\n\tcr=\".module@li.0@img@src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n\n//爱死美女网站点规则\nif(baseUrl.indexOf(\"24tupian\")>0){\n\tnr= \".head2@a!-1:-2@text\";\n\thr=\".head2@a!-1:-2@href\"\n\tcr=\".tpg@img@src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n//photos18网站点规则\nif(baseUrl.indexOf(\"photos18\")>0){\n\tnr= \"#w3@a@text\";\n\thr=\"#w3@a@href\"\n\tcr=\"#videos@img@data-src\"\n\t\n ls=getBookList(nr,\"\",\"\",cr,hr)\n ls.forEach(x=>{\n \t  opt={\"headers\":{\"Referer\":baseUrl}}\n \t  x.cover=x.cover+\",\"+JSON.stringify(opt)\n \t});\n}else\n\n//hentai-cosplays网站点规则\nif(baseUrl.indexOf(\"hentai-cosplays\")>0){\n\tnr=\"#sidr-right@a[0:2]@text\"\n\tcr=\"#entry_list@img@data-original\"\n\tnrr=\"Hot作品,New作品,Hot图片\".split(\",\");\n\thrr=\"ranking/,search/,ranking-images/page/1/\".split(\",\");\n\tls=getBookList(nr,\"\",\"\",cr,\"\");\n\tls.forEach((x,i)=>{\n\t\t  x.name=nrr[i]\n\t\t  x.href=baseUrl+hrr[i]\n\t\t})\n}else\n\n//推特图网站点规则\nif(baseUrl.indexOf(\"tuiimg.com\")>0){\n\tnr=\"#nav@a[0:3]@text\"\n\thr=\"#nav@a[0:3]@href\"\n\tcr=\"#main@img@realsrc\"\n\t\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n}else\n\n//爱美女网站点规则\nif(baseUrl.indexOf(\"2meinv.com\")>0){\n\tls.push({\"name\":\"爱美女\",\n \t \"href\":\"https://wap.2meinv.com/index-1.html\",\n \t \"cover\":java.getString(\".logo@img@src\"),\n \t \"auth\":baseUrl.match(/(http[s]*:\\/\\/[^/]+)/)[1]})\n}else\n\n//推次元站点规则\nif(baseUrl.indexOf(\"t2cy.com\")>0){\n\tnr=\".home_nav@a[1,3]@title\"\n\thr=\".home_nav@a[1,3]@href\"\n\tcr=\".swiper-wrapper@img@src\"\n\tls=getBookList(nr,\"\",\"\",cr,hr);\n}\n\n\n\nls;\n</js>$.[*]",
    "bookUrl": "href",
    "coverUrl": "cover",
    "intro": "info",
    "lastChapter": "lc",
    "name": "name"
  },
  "ruleSearch": {},
  "ruleToc": {
    "chapterList": "<js>\neval(String(source.bookSourceComment));\n\n//目录列表\nlis=[]\n\t\n//vmgirls站点目录规则\nif(baseUrl.indexOf(\"vmgirls\")>0){\n\t\tn=\".container@.list-item@.list-title@text\";\n\t\tu=\".container@.list-item@.list-title@href\";\ti=\".list-footer@div.0@text&&.list-featured-tag@text\";\n\t\t\n\t\tlis=getChapterList(n,u,i);\n\t\t\n}else\n\t\n\n//iqupu站点目录规则\nif(baseUrl.indexOf(\"iqupu\")>0){\n\t\tn=\"$.data.list[*].title\";\n\t\tu=\"$.data.list[*].id\";\n\t\ti=\"$.data.list[*].keywords\";\n\t\tcatid=java.getString(\"$.data.list[0].catid\");\n\t//\tjava.log(java.get(catid))\n\t\t//java.put(catid,catid)\n\t\t\n\t\tlis=getChapterList(n,u,i);\n\t\t\n\t\tlis.forEach(x=>{\n\t\t\theaders={\n      \"body\": \"{\\\"catid\\\": \"+catid+\",\\\"id\\\": \"+x.cu+\"}\",\"method\": \"POST\"};\n\t\t\n     x.cu=\"http://abbr.iqupu.cc/api/info,\"+\n\t            JSON.stringify(headers);\n    //java.log(x.cu)\n\t\t\t})\n\t\t\n}else\n\n\n//xgmn站点目录规则\nif(baseUrl.indexOf(\"xgmn02\")>0){\n\t n=\".related_box@.r_title@text\";\n\t\tu=\".related_box@a@href\";\n\t  \ti=\".related_box@footer@text\";\n\t\t\n\t\tlis=getChapterList(n,u,i);\n\n}else\n\n\n//tuaox站点目录规则\nif(baseUrl.indexOf(\"tuaox\")>0){\n\t n=\"article@h2@a@text\";\n\t\tu=\"article@h2@a@href\";\n\t\ti=\"article@.text-muted@text\";\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n\n//cosplay8站点目录规则\nif(baseUrl.indexOf(\"cosplay8\")>0){\n\t n=\".container@p@a@text\";\n\t\tu=\".container@p@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n}else\n\n\n//pandadiu站点目录规则\nif(baseUrl.indexOf(\"pandadiu\")>0){\n\t n=\".mt2@span.ellipsis1@text\";\n\t\tu=\".mt2@span.ellipsis1@href\";\n\t\ti=\".mt2@li@a.0@text\"\n\t\tia=java.getStringList\n\t\t  (\".mt2@.spanview@text||.mt2@li@a.1@text\")\n   lis=getChapterList(n,u,i);\n   lis.forEach((x,i)=>{\n   \t  x.ci=\"👁️访问量:\"+ia[i]+\"   🏷️标签:\"+x.ci\n   \t})\n}else\n\n\n\n//cnu.cc站点目录规则\nif(baseUrl.indexOf(\"cnu.cc\")>0){\n\t n=\".thumbnail@.title@text\";\n\t\tu=\".thumbnail@href\";\n\t\ti=\".thumbnail@.author@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n\n//7476站点目录规则\nif(baseUrl.indexOf(\"7476.com\")>0){\n\t n=\".Left_bar@li@text\";\n\t\tu=\".Left_bar@li@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n   \n  // lis.forEach(x=>\"https://www.7476.com\"+\n\t\t//   x.cu)\n}else\n\n//mmonly站点目录规则\nif(baseUrl.indexOf(\"mmonly\")>0){\n\t n=\".PictureList.1@li@text\";\n\t\tu=\".PictureList.1@li@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n   \n}else\n\n//jiepaituan站点目录规则\nif(baseUrl.indexOf(\"jiepaituan\")>0){\n\t n=\"#main@.post-title@a.1@text\";\n\t\tu=\"#main@.post-title@a.1@href\";\n\t\ti=\"#main@.post-meta@text\"\n\n   lis=getChapterList(n,u,i);\n   \n}else\n\n\n//theasianbeauty站点目录规则\nif(baseUrl.indexOf(\"theasianbeauty\")>0){\n\tif(baseUrl.indexOf(\"api.\")==-1){\n\t  \tscri=java.getString(\"script[id]@all\")\n\t  mat=scri.match(/<[^>]+>/g)\n\t       .forEach(x=>scri=scri.replace(x,\"\"));\n\t  jso=JSON.parse(scri);\n\t  res=jso.props.pageProps.beauties;\n\t  \n\t  for(var i=0;i<res.length;i++){\n\t  \t   java.log(res[i].eng_name)\n\t  \t   t={\"cn\":res[i].eng_name,\"cu\":\n\t  \t   baseUrl.match(/.*\\.com/)[0]+\"/beauties/\"\n\t  \t   +\tres[i].slug,\"ci\":\"✈️:\"+res[i].country+\n\t  \t   \t\"   📝:\"+res[i].beauty_title}\n\t  \t   lis.push(t)\n    }\n\t\t java.put(\"asianPage\",\"1\")\n  }else{\n  \t n=\"$.data.beauties[*].eng_name\";\n  \t u=\"$.data.beauties[*].slug\";\n  \t i=\"$.data.beauties[*].beauty_title\"\n  \t ia=java.getString\n  \t        (\"$.data.beauties[*].country\").\n  \t        split(\"\\n\");\n  \n  \t \t lis=getChapterList(n,u,i);\n  \t \t lis.forEach((x,i)=>{\n  \t \t \t  x.cu=\"https://www.theasianbeauty\"+\n  \t \t \t         \t\".com/beauties/\"+x.cu;\n  \t \t \t  x.ci=\"✈️:\"+ia[i]+\t\"   📝:\"+x.ci\n  \t \t \t});\n  \t}\n}else\n\n//ross20站点目录规则\nif(baseUrl.indexOf(\"ross20\")>0){\n\t n=\"#post_list_box@h2@text\";\n  u=\"#post_list_box@h2@a@href\";\n   i=\"#post_list_box@.list-meta@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n   lis.forEach(x=>{\n   \t  x.cu +=\"?page=all\"\n   \t})\n}else\n\n//mbyn5.xyz站点目录规则\nif(baseUrl.indexOf(\"mbyn5.xyz\")>0){\n\t n=\"#posts@h3@text\";\n  u=\"#posts@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n  \n}else\n\n//jjgirls站点目录规则\nif(baseUrl.indexOf(\"jjgirls\")>0){\n\t n=\".p302302@img@alt\";\n  u=\".p302302@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n  \n}else\n\n\n//1000yishu站点目录规则\nif(baseUrl.indexOf(\"1000yishu\")>0){\n\t n=\".product01@a@text\";\n  u=\".product01@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n  \n}else\n\n//heaven站点目录规则\nif(baseUrl.indexOf(\"heaven\")>0){\n\t n=\".photosTOP@img@title\";\n  u=\".photosTOP@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n}else\n\n\n//ONS站点目录规则\nif(baseUrl.indexOf(\"ons.ooo\")>0){\n\t n=\"article@h2@a@text\";\n  u=\"article@h2@a@href\";\n  i=\"article@time@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n//fulitu.cc站点目录规则\nif(baseUrl.indexOf(\"fulitu.cc\")>0){\n\t n=\"#masonry@.item-link@text\";\n  u=\"#masonry@.item-title@a@href\";\n  i=\"#masonry@.item-num@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n//www.1y.is站点目录规则\nif(baseUrl.indexOf(\"www.1y.is\")>0){\n\t n=\".entry-card@.np-entry-title@text\";\n  u=\".entry-card@.np-entry-title@a@href\";\n  i=\".entry-card@time@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n//kanmeitu站点目录规则\nif(baseUrl.indexOf(\"kanmeitu\")>0){\n\t n=\".sou-con-list@li@a.1@text\";\n  u=\".sou-con-list@li@a.1@href\";\n  i=\".sou-con-list@.date@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n//kanxiaojiejie站点目录规则\nif(baseUrl.indexOf(\"kanxiaojiejie\")>0){\n\t n=\".gridsoul-posts@.gridsoul-grid-post-title@text\";\n  u=\".gridsoul-posts@.gridsoul-grid-post-title@a@href\";\n  i=\".gridsoul-posts@.gridsoul-grid-post-date@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n\n//nsfwx.pics站点目录规则\nif(baseUrl.indexOf(\"nsfwx.pics\")>0){\n\t n=\"main@h2@text\";\n  u=\"main@a@href\";\n  i=\"main@.entry-date@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n//asiantolick站点目录规则\nif(baseUrl.indexOf(\"asiantolick\")>0){\n\t n=\"a[mob]@.titulo_video@ownText\";\n  u=\"a[mob]@href\";\n  ia=\"a[mob]@.titulo_video@span@text\"\n  i=\"a[mob]@.contar_imagens@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n   lis.forEach((x,i)=>{\n   \t    nude=\"a[mob].\"+i+\n   \t    \t         \"@span[class^=tt_tag]@text\";\n   \t    \t         \n   \t    x.ci+=\"P   \"+java.getString(nude)\n   \t})\n}else\n\n\n//everia.club站点目录规则\nif(baseUrl.indexOf(\"everia.club\")>0){\n\t n=\".posts-wrapper@h2@text\";\n  u=\".posts-wrapper@h2@a@href\";\n  i=\"main@.entry-date@text\"\n\t\t\n   lis=getChapterList(n,u,i);\n}else\n\n\n//DopamineGirl站点目录规则\nif(baseUrl.indexOf(\"dopaminegirl\")>0){\n\t\n  if(baseUrl.indexOf(\"/api\")==-1){\n\t  \tn=\".masonry@img@alt\";\n   u=\".masonry@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n\t\t java.put(\"DopaPage\",\"1\")\n  }else{\n  \t n=\"$.[*].title\";\n  \t u=\"$.[*].id\";\n  \n  \t \tlis=getChapterList(n,u,\"\");\n  \t \tlis.forEach(x=>{\n  \t \t \t  x.cu=\"https://dopaminegirl.com/post/\"+\n  \t \t \t         x.cu\t+\"/view/\";\n  \t \t \t});\n  \t}\n}else\n\n//app125站点目录规则\nif(baseUrl.indexOf(\"app125\")>0){\n\tn=\"$.data[*].name\";\n u=\"$.data[*].id\";\n i=\"$.data[*].addtime\";\n \n\theaders={\"method\":\"POST\",\"headers\":{\n\t\t          \"user-agent\":\"Dart/2.12 (dart:io)\"}};\n lis=getChapterList(n,u,i);\n \n\tif(baseUrl.indexOf(\"motel\")>0){\n\t\tdes=java.getStringList(\"$.data[*].text\")\n\t \t\n\t\tlis.map((x,i)=>{\n  \t    headers[\"body\"]=\"id=\"+x.cu+\"&page=1\";\n  \t    java.put(x.cn,des[i])\n  \t    x.ci=\"最后更新：\"+x.ci;\n  \t \t \t  x.cu=baseUrl.match(/.*lists/)[0]+\n  \t \t \t  \t      \"/motel_type,\"+\n  \t \t \t  \t      \tJSON.stringify(headers);\n  \t \t \t});\n\t}else{\n    lis.forEach(x=>{\n  \t    headers[\"body\"]=\"id=\"+x.cu;\n  \t \t \t  x.cu=baseUrl.match(/.*lists/)[0]+\n  \t \t \t  \t       \"/show,\"+JSON.stringify(headers);\n  \t \t \t});\n  \t}\n}else\n//仙女库wap站点目录规则\nif(baseUrl.indexOf(\"xiannvku\")>0){\n\t n=\".img@.p_title@text\";\n  u=\".img@.p_title@a@href\";\n  i=\".img@li@p.3@text\"\n\t\t\n  lis=getChapterList(n,u,i);\n  \n}else\n\n\n//jokerlu6站点目录规则\nif(baseUrl.indexOf(\"jokerlu6\")>0){\n\t n=\".recommended-grids@h5@text\";\n  u=\".recommended-grids@h5@a@href\";\n  i=\".recommended-grids@.time@text\"\n\t\t\n  lis=getChapterList(n,u,i);\n  lis.forEach(x=>{\n  \t x.cn=String(x.cn).replace(/-.*-/g,\"\").\n  \t        replace(/\\[.*]/,\"\")\n  \t         \n  \t})\n}else\n\n\n//美图公社站点目录规则\nif(baseUrl.indexOf(\"tooopen\")>0){\n\t n=\"#container@span@text\";\n  u=\"#container@a@href\";\n\t\tjava.log(\"-----_\")\n\t\n\tjava.log(chapter.start)\n   lis=getChapterList(n,u,\"\");\n}else\n\n//春光图片网站点目录规则\nif(baseUrl.indexOf(\"cgtpw.com\")>0){\n\t n=\".listpic2@li@text\";\n  u=\".listpic2@p@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n}else\n\n//爱死美女网站点目录规则\nif(baseUrl.indexOf(\"24tupian\")>0){\n\t n=\".lbleft@strong@a@text\";\n  u=\".lbleft@strong@a@href\";\n  i=\".lbleft@.lr@p.3@span@text\"\n  lis=getChapterList(n,u,i);\n\t\tpages=java.\n\t\t        getStringList(\".lbleft@.lr@p.2@text\")\n  \n  lis.map((x,i)=>{\n  \t  ti=String(x.ci).match(/\\d+/g);\n  \t  ts=ti[0]+\"/\"+ti[1]+\"-\"+parseInt(ti[2]);\n  \t  x.cu=String(x.cu).replace(/hd2/,ts).\n  \t               replace(/\\.html/,\"_1.html\");\n  \t  x.ci+=\"   \"+pages[i].match(/\\d+/)[0]+\"P\"\n  \t})\n}else\n\n//photos18站点目录规则\nif(baseUrl.indexOf(\"photos18\")>0){\n\t n=\"#videos@.card-body@a@text\";\n  u=\"#videos@.card-body@a@href\";\n\t\t\n   lis=getChapterList(n,u,\"\");\n}else\n\n//hentai-cosplays站点目录规则\nif(baseUrl.indexOf(\"hentai-cosplays\")>0){\n\t\tif(baseUrl.indexOf(\"ranking-images\")>0){\n\t\t\tpg=parseInt(java.getString\n\t\t\t\t  (\".nextpostslink@a@href\").\n\t\t\t\t  match(/\\d+/)[0])-1\n\t\t  jso={\"cn\":\"第 \"+pg+\" 篇\",\n\t\t        \"cu\":baseUrl.replace(/\\d+/,pg)}\n\t\t        java.log(JSON.stringify(jso));\n\t\t  lis.push(jso)\n\t\t}else{\n\t\t  n=\"#entry_list@li@span.1@text\";\n    u=\"#entry_list@li@a@href\";\n\t\t  i=\"#entry_list@.posted@text\"\n    lis=getChapterList(n,u,i);\n\t\t}\n\t \n}else\n\n//推特图站点目录规则\nif(baseUrl.indexOf(\"tuiimg.com\")>0){\n\t\tn=\"#main@li@a.0@text\";\n  u=\"#main@li@a.0@href\";\n\t\ti=\"#main@li@p@span.0@text\"\n   lis=getChapterList(n,u,i);\n}else\n\n//爱美女站点目录规则\nif(baseUrl.indexOf(\"2meinv.com\")>0){\n\t\tn=\".container@li@a.0@text\";\n  u=\".container@li@a.0@href\";\n\t\ti=\".container@.liboxtxt@span.0@text\"\n\t\tai=java.getString(i.replace(\"0\",\"1\")).split(\"\\n\")\n   lis=getChapterList(n,u,i);\n   lis.forEach((x,i)=>{\n   \t  x.ci=\"时间:\"+x.ci+\"    访问量:\"+ai[i]\n   \t})\n}else\n\n//推次元站点目录规则\nif(baseUrl.indexOf(\"t2cy.com\")>0){\n\t\tn=\".list_box@li@h2@a@text\";\n  u=\".list_box@li@h2@a@href\";\n\t\ti=\".list_box@li@.tab@text\"\n\t\tai=java.getString(\".list_box@li@.discuss@text\").split(\"\\n\")\n   lis=getChapterList(n,u,i);\n   lis.forEach((x,i)=>{\n   \t  x.ci=ai[i]+\"    标签:\"+x.ci\n   \t})\n}\n\n\nlis.forEach(x=>{\n\tx.cn=String(x.cn).replace(/[【(（\\[《].*?[》\\]）)】]/g,\"\").trim()\n\t})\nlis\n</js>$.[*]",
    "chapterName": "cn",
    "chapterUrl": "cu",
    "nextTocUrl": "<js>\neval(String(source.bookSourceComment));\n\n//下一页列表\nt=[];\n//下一页url形成值\nne=\"\";\n//变量比较值\ncmpnum=cmpVariable();\n\n//iqupu站点目录下一页规则\nif(baseUrl.indexOf(\"iqupu\")>0){\n\t\n\t\tallNum=parseInt(java.\n\t\t\t          getString(\"$.data.count\"));\n\t\tnowNum=parseInt(baseUrl.\n     \t      match(/\\d*}/)[0].replace(\"}\",\"\"));\n\t\tif(nowNum*20<allNum){\n\t\t\t  if(nowNum<=cmpnum||cmpnum==0){\n\t\t\t  \t  ne=baseUrl.\n\t\t\t  \t     replace(/\\d*}/,String(++nowNum)+'}');\n \t       t.push(ne)\n \t    }\n\t\t\t}\n}else\n\n\n//vmgirls站点目录下一页规则\nif(baseUrl.indexOf(\"vmgirls\")>0){\n ne=java.getString(\".nav-links@.next@href\");\n \n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/page\\/\\d+/)[0].\n \t             replace(\"page/\",\"\"))\n \t             \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n \t    }\n  }\n}else\n\n\n//xgmn站点目录下一页规则\nif(baseUrl.indexOf(\"xgmn02\")>0){\n ne=java.getString(\"a:contains(下一页)@href\")\n \n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/page_\\d+/)[0].\n \t             replace(\"page_\",\"\"))\n \t             \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n\n//tuaox站点目录下一页规则\nif(baseUrl.indexOf(\"tuaox\")>0){\n ne=java.getString(\"a:contains(下一页)@href\");\n \n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/_\\d+/)[0].\n \t             replace(\"_\",\"\"));\n \t  //java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n java.log(t)\n \n}else\n\n\n//cosplay8站点目录下一页规则\nif(baseUrl.indexOf(\"cosplay8\")>0){\n ne=java.getString(\"a:contains(下一页)@href\");\n \n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+\\./)[0].\n \t             replace(\".\",\"\"));\n \t  //java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n java.log(t)\n}else\n\n\n//pandadiu站点目录下一页规则\nif(baseUrl.indexOf(\"pandadiu\")>0){\n ne=java.getString(\"a:contains(下一页)@href\");\n \n allNum=parseInt(java.\n\t\t\t     getString(\"#pages@a.0@text\").\n\t\t\t     replace(\"条\",\"\"));\n\t\tnowNum=parseInt(baseUrl.\n     \t      match(/\\d+\\./)[0].replace(\".\",\"\"));\n\t\tif(nowNum*32<allNum){\n\t\t\t  if(nowNum<=cmpnum||cmpnum==0){\n \t       t.push(ne)\n \t    }\n\t\t\t}\n}else\n\n\n//7476站点目录下一页规则\nif(baseUrl.indexOf(\"7476.com\")>0){\n ne=java.getString(\"a:contains(下一页)@href\");\n \n if(ne!=\"\"){\n \t  thispage=(ne.\n \t          match(/_\\d+/)[0]).replace(\"_\",\"\");\n   thispage=parseInt(thispage)-1;\n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    ne=\"https://www.7476.com\"+ne;\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//mmonly站点目录下一页规则\nif(baseUrl.indexOf(\"mmonly\")>0){\n\tjava.put(\"cmpnum\",cmpnum)\n ne=java.getString(\"a:contains(下一页)@href\");\n ner=ne.match(/\\d+\\./);\n \n if(ner!=null){\n \t  thispage=(ner[0]).replace(\".\",\"\");\n   thispage=parseInt(thispage)-1;\n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//jiepaituan站点目录下一页规则\nif(baseUrl.indexOf(\"jiepaituan\")>0){\n ne=java.getString(\"a:contains(下一页)@href\");\n \n if(ne!=\"\"){\n \t  thispage=ne.match(/\\d+/)[0];\n   thispage=parseInt(thispage)-1;\n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//theasianbeauty站点目录下一页规则\nif(baseUrl.indexOf(\"theasianbeauty\")>0){\n\t\n ne=java.getString\n          (\"div:contains(Load More)@text\");\n npu=\"https://api.theasianbeauty\"+\n \t      \".com/v1/generatebeauties/\";\n java.log(\"=====\");\n java.log(baseUrl)\n java.log(java.get(\"asianPage\"))\n\n if(ne!=\"\"||baseUrl.indexOf(\"api.\")>0){\n \t  thispage=parseInt(java.get(\"asianPage\"));\n \t   java.log(thispage)\n \t  if(thispage<=cmpnum||cmpnum==0){\n \t  \t  java.put(\"asianPage\",++thispage);\n \t  \t  \n \t    t.push(npu)\n   \t}\n \t}\n}else\n\n//ross20站点目录下一页规则\nif(baseUrl.indexOf(\"ross20\")>0){\n\tne=java.getString(\"a:contains(下一页)@href\");\n java.log(ne)\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+\\.h/)[0].\n \t             replace(\".h\",\"\"));\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//mbyn5.xyz站点目录下一页规则\nif(baseUrl.indexOf(\"mbyn5.xyz\")>0){\n\tne=java.getString\n\t          (\".pagination@li.-2@a@href\");\n\tpt=java.getString(\".pagination@li.-1@class\")\n java.log(ne)\n if(pt!=\"disabled\"){\n \t thispage=parseInt(ne.match(/\\d+\\.h/)[0].\n \t             replace(\".h\",\"\"));\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//jjgirls站点目录下一页规则\nif(baseUrl.indexOf(\"jjgirls\")>0){\n\tne=java.getString(\"#footer@a.-1@href\");\n\t\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+/)[0]);\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//1000yishu站点目录下一页规则\nif(baseUrl.indexOf(\"1000yishu\")>0){\n\tne=java.getString(\"a:contains(下一页)@href\");\n\t\n\turl=baseUrl.indexOf(\"html\")!=-1?baseUrl.\n\t          match(/(?=list.*)/)[0]:(baseUrl+\"/\").\n\t          match(/.*\\/$/)[0]\n\tjava.log(url)\n if(ne!=\"\"){\n \t thispage=parseInt(ne.\n \t \t             match(/\\d+\\./)[0].replace(\".\",\"\"));     \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(url+ne)\n   \t}\n \t}\n}else\n\n\n//ONS站点目录下一页规则\nif(baseUrl.indexOf(\"ons.ooo\")>0){\n\tne=java.getString(\"a:contains(next)@href\");\n\t\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+/)[0]);\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//fulitu.cc站点目录下一页规则\nif(baseUrl.indexOf(\"fulitu.cc\")>0){\n\tne=java.getString(\"a:contains(»)@href\");\n\t\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+/)[0]);\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//www.1y.is站点目录下一页规则\nif(baseUrl.indexOf(\"www.1y.is\")>0){\n\tne=java.getString\n\t        (\"a:contains(Older posts)@href\");\n if(ne!=\"\"){\n \t thispage=parseInt(ne.\n \t \t           match(/\\/\\d+/)[0].replace(\"/\",\"\"));\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n\n//kanmeitu站点目录下一页规则\nif(baseUrl.indexOf(\"kanmeitu\")>0){\n\tne=java.getString(\"a:contains(下页)@href\");\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/page=\\d+/)[0].\n \t \t             replace(\"page=\",\"\"));\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n\n//kanxiaojiejie站点目录下一页规则\nif(baseUrl.indexOf(\"kanxiaojiejie\")>0){\n\tne=java.getString\n\t        (\".pagination span+a.0@href\");\n\t java.log(ne)\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+/)[0])-1\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n\n//nsfwx.pics站点目录下一页规则\nif(baseUrl.indexOf(\"nsfwx.pics\")>0){\n\tne=java.getString(\"a:contains(Next)@href\");\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+/)[0])\n \t  \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//asiantolick站点目录下一页规则\nif(baseUrl.indexOf(\"asiantolick\")>0){\n\tne=\"https://asiantolick.com/ajax/buscar_posts.php?post=&cat=&tag=&search=&page=&index=2&ver=46\";\n\tcat=baseUrl.match(/category-\\d+/);\n\taj=baseUrl.match(/ajax/);\n\tnews=baseUrl.match(/news/);\n\tif(cat!=null){\n\t  java.log(cat)\n\t\t ne=ne.replace(/cat=\\d/,cat[0].\n\t\t\t        replace(/category-/,\"\"));\n\t\t\t   java.log(ne)\n\t\t\t   t.push(ne)\n\t\t}else if(aj!=null){\n\t\t\t thispage=parseInt\n\t\t\t           (baseUrl.replace(/.*index=(\\d+).*/,\"$1\"))\n\t\t\t \tif(thispage<=cmpnum||cmpnum==0){\n\t\t\t \t\t ne=ne.replace(/index=\\d+/,\n\t\t\t \t           \"index=\"+(++thispage));\n \t      t.push(ne)\n \t    }\n \t    \n   }else if(news!=null){\n    \t   ne=ne.replace(/page=/,\"page=news\")\n    \t   t.push(ne)\n   }\n    t.push(ne)\n}else\n\n\n//everia.club站点目录下一页规则\nif(baseUrl.indexOf(\"everia.club\")>0){\n\tne=java.getString(\"a.next@href\");\n if(ne!=\"\"){\n \t thispage=parseInt(ne.\n \t \t       match(/paged=\\d+/)[0].\n \t \t       replace(\"paged=\",\"\"))\n \t  java.log(thispage)           \n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n \t}\n}else\n\n//DopamineGirl站点目录下一页规则\nif(baseUrl.indexOf(\"dopaminegirl\")>0){\n\tnurl=\"https://dopaminegirl.com\"+\n\t\t         \"/api/posts/random/?p=\";\n thispage=parseInt(java.get(\"DopaPage\"));\n \tjava.log(thispage)\n \twhile(thispage<=cmpnum){\n \t  \t  java.put(\"DopaPage\",++thispage);\n \t  \t  java.log(thispage)\n \t    t.push(nurl+thispage)\n \t}\n}else\n\n//app125站点目录下一页规则\nif(baseUrl.indexOf(\"app125\")>0){\n\tjava.put(\"cmpnum\",cmpnum)\n\tthispage=parseInt(baseUrl.\tmatch\n\t\t         (/page=\\d+/)[0].replace(\"page=\",\"\"));\n\t\n\tallP=parseInt(java.getString(\"$.totalpage\"))\n\tif(thispage<allP){\n\t\tif(thispage<=cmpnum||cmpnum==0){\n\t\t   ne=baseUrl.replace\n\t\t        (/page=\\d+/,\"page=\"+(++thispage))\n \t    t.push(ne)\n   \t}\n\t}\n}else\n//仙女库wap站目录下一页规则\nif(baseUrl.indexOf(\"m.xiannvku\")>0){\n\tne=java.getString(\"a:contains(下一页)@href\");\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+\\./)[0].\n \t \t              replace(\".\",\"\"))\n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n\n\n//jokerlu6站点目录下一页规则\nif(baseUrl.indexOf(\"jokerlu6\")>0){\n\tne=java.getString(\"a:contains(下一页)@href\");\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/-\\d+/)[0].\n \t \t              replace(\"-\",\"\"))\n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n\n//美图公社站点目录下一页规则\nif(baseUrl.indexOf(\"tooopen\")>0){\n\t\n\tne=java.getString\n\t      (\".loadmore-page@a.1@href\");\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+\\./)[0].\n \t \t              replace(\".\",\"\"))\n \t  if(thispage<=cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n//春光图片网站点目录下一页规则\nif(baseUrl.indexOf(\"cgtpw.com\")>0){\n\tne=java.getString(\"a:contains(下一页)@href\");\n\tjava.log(ne)\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+\\./)[0].\n \t \t              replace(\".\",\"\"))\n \t \t              java.log(thispage)\n \t  if(thispage<cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n//爱死美女站点目录下一页规则\nif(baseUrl.indexOf(\"24tupian\")>0){\n\tne=java.getString(\"a:contains(下一页)@href\");\n\t\n if(ne!=\"\"&&ne.indexOf(\"java\")==-1){\n \t thispage=parseInt(ne.match(/\\d+\\./)[0].\n \t \t              replace(\".\",\"\"))\n \t \t              java.log(thispage)\n \t  if(thispage<cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n\n//photos18站点目录下一页规则\nif(baseUrl.indexOf(\"photos18\")>0){\n\tne=java.getString\n\t          (\".pagination@.next@a@href\");\n\t\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/page=\\d+/)[0].\n \t \t              replace(\"page=\",\"\"))\n \t \t              java.log(thispage)\n \t  if(thispage<cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n\n//hentai-cosplays站点目录下一页规则\nif(baseUrl.indexOf(\"hentai-cosplays\")>0){\n\tif(baseUrl.indexOf(\"ranking-images\")>0){\n\t\tne=java.getString(\".nextpostslink@a@href\");\n\t}else{\n\t\tne=java.getString(\"a[rel=next]@href\");\n\t}\n\t\n if(ne!=\"\"){\n \t thispage=parseInt(ne.match(/\\d+/)[0])\n \t \t              java.log(thispage)\n \t  if(thispage<cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n//推特图站点目录下一页规则\nif(baseUrl.indexOf(\"tuiimg.com\")>0){\n\tne=java.getString(\".page .now~a.0@href\");\n\t\n if(ne!=\"\"){\n \t thispage=parseInt(java.getString(\n \t \t           \".page@.now@text\"))\n \t \t     java.log(thispage)\n \t  if(thispage<cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n//爱美女站点目录下一页规则\nif(baseUrl.indexOf(\"2meinv.com\")>0){\n\tne=java.getString(\"text.下一页@href\");\n\t\n if(ne!=\"\"&&ne!=\"javascript:void(0)\"){\n \t thispage=parseInt(java.getString(\n \t \t           \".active@text\"))\n \t \t     java.log(thispage)\n \t  if(thispage<cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}else\n\n//推次元站点目录下一页规则\nif(baseUrl.indexOf(\"t2cy.com\")>0){\n\tne=java.getString(\"text.下一页@href\");\n\t\n if(ne!=\"\"&&ne!=\"javascript:void(0)\"){\n \t thispage=parseInt(java.getString(\n \t \t           \".list_page@b@text\"))\n \t \t     java.log(thispage)\n \t  if(thispage<cmpnum||cmpnum==0){\n \t    t.push(ne)\n   \t}\n }\n}\n\n\n\nt;\n</js>",
    "updateTime": "ci"
  },
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
