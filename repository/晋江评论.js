// @name 晋江评论
// @version 2025.10.01
// @author converted
// @url https://m.jjwxc.net
// @enabled true
// @tags 正版小说,书源,小说,converted
// @description 请登录后使用【有晋江书源的，你需要从晋江书源的登录头复制token】
// @description 其他使用请查看【源变量说明】

const LEGADO_SOURCE = {
  "bookSourceComment": "请登录后使用【有晋江书源的，你需要从晋江书源的登录头复制token】\n\n其他使用请查看【源变量说明】",
  "bookSourceGroup": "正版小说 书源",
  "bookSourceName": "晋江评论",
  "bookSourceType": 0,
  "bookSourceUrl": "https://m.jjwxc.net#app",
  "bookUrlPattern": ".*?novel[iI]d=\\d+.*?&page=1",
  "customButton": false,
  "customOrder": 394,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "header": "@js:\nJSON.stringify({\n\t\"User-Agent\":java.getWebViewUA(),\n\t\"versiontype\":\"reading\"\n\t})",
  "jsLib": "function checkToken(t){\n\tconst {java,source} = this;\n\tt = String(t).trim();\n\tif(/^\\d+_[a-zA-Z\\d]{32}$/.test(t)){\n\t\tsource.putLoginHeader(t);\n\t\tjava.longToast(\"✅登录成功\");\n\t\t}else{\n\t\t\tjava.toast(\"❌token输入有误，形如 230484_ahshxbh3oAjjdjxbjsnxxxxxx\");\n\t\t\t\n\t\t\t}\n\t}\n\nfunction getToken(){\n\tconst { source} = this;\n    let infomap = String(source.getLoginHeader());\n    infomap = (infomap!=\"null\"&&infomap!=\"\"&&infomap!=null)?infomap:\"\";\n    return infomap\n\t}\n\nfunction getImage(replyTotal,novelId,chapterId,commentId){\n\tlet {cache} = this;\n\tlet d = String(Date.now()).replace(/^\\d{6}/,'');\n  return `<img src=\"data:image/svg+xml;base64,,{\\\"type\\\":\\\"jjreply\\\",\\\"js\\\":\\\"getSvg(${replyTotal},${novelId},${chapterId}, ${commentId},${d})\\\"}\">`;\n}\n\nfunction getSvg(replyTotal,novelId,chapterId,commentId,date) {\n   let {java,cache,result} = this;\n   let memoryKey = \"jjreply\"+novelId+chapterId+commentId;\n   let Memory = String(cache.getFromMemory(memoryKey)); \n  let re = \"1\"+date;\n  let f = Memory.includes(re);\n  \n    if (f) { \n    \tlet replyList = [];\n    \tlet replyUrl = \"https://android.jjwxc.net/comment/getReplyList\";   \n    let offset = 5;\n    let limit = replyTotal;\n    while(offset < replyTotal) {\n        let replyBody = `versionCode=444&novelId=${novelId}&chapterId=${chapterId}&commentId=${commentId}&offset=${offset}&limit=${limit}&isBackend=2&token=${this.getToken()}`;\n        let replyPost = {\n            \"method\": \"POST\",\n            \"body\": replyBody\n        }\n        let replyAjax = java.ajax(replyUrl+\",\"+JSON.stringify(replyPost));\n        \n        replyList =replyList.concat(JSON.parse(replyAjax).data);     \n        \n        offset += limit;     \n        if(offset >= replyTotal) {\n            break;\n        }\n    }\n    let html = `<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\"><div class='reply-container'>`;\n\nfor (let i = 0; i < replyList.length; i++) {\n    let reply = replyList[i];\n    let authorTag = (reply?.isAuthor === \"1\" ? \"👑\" : \"📜\") +'<span class=\"floor\">'+ (reply.floor || \"\") + \"楼 </span>\";\n    \n    let date = (!reply.comment_date_time ? undefined : java.timeFormat(reply.comment_date_time * 1000)) ?? \n               (reply.replyDate || reply.commentdate);\n   \n    let author = reply.replyAuthor ?? reply.commentauthor;\n    \n  \n    let content = replaceEmoticons(reply.replyBody ?? reply.commentbody).replace(/&lt;/g,'<').replace(/&gt;/g,'>');\n    \n    html += `\n        <div class='reply-item'>\n            <div class='reply-header'>\n                <span class='author-tag'>${authorTag}</span>\n                <span class='author-name'>${author}</span>\n                <span class='reply-date'>(${date})</span>\n            </div>\n            <div class='reply-content'>${content}</div>\n        </div>\n    `;\n}\n\nhtml += \"</div>\";\n\nhtml += `\n<style>\n.reply-container {\n    font-family: Arial, sans-serif;\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid #eee;\n    border-radius: 5px;\n}\n\n.reply-item {\n    margin-bottom: 15px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid #f0f0f0;\n}\n.floor{\n\tcolor:#48829E;\n\t}\n.reply-header {\n    font-weight: bold;\n    color:#1a73e8;\n    margin-bottom: 5px;\n    font-size:12px;\n}\n.author-tag {\n    margin-right: 5px;\n}\n.reply-date {\n    color: #666;\n    font-size: 0.9em;\n    margin-left: 5px;\n}\n.reply-content {\n    margin-top: 5px;\n    white-space: pre-wrap;\n}\n</style>\n`;\n\n    \n    \tjava.longToast(\"数据加载中……请稍候\");   \t   \njava.base64Encode(decodeURIComponent(html)).length()>65364?java.toast(\"数据太大，无法加载，请减少评论数量\"):\n    \tjava.startBrowser(\"data:text/html;base64,\"+java.base64Encode(decodeURIComponent(html)), \"更多回复\");\n}else{\n  cache.putMemory(memoryKey,\"1\"+date)\n }\n     \n    let color = [\"#B2B2B2\",\"#707070\"];\nlet svg = `\n  <svg width=\"1000\" height=\"800\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M865 20 h-600c-60 0-110 50-110 110v200l-160 80 160 80v200c0 60 50 110 110 110h600c60 0 110-50 110-110V130c0-60-50-110-110-110z\" \n          fill=\"none\" \n          stroke=\"${color[0]}\" \n          stroke-width=\"55\"/>\n\n\n\n    <text x=\"570\" y=\"550\" font-family=\"Roboto Condensed\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-size=\"420\" font-weight=\"bold\" fill=\"${color[1]}\">\n      ${(replyTotal-5) || \"回复\"}\n    </text>\n    <text x=\"520\" y=\"700\" font-family=\"Arial\" text-anchor=\"middle\" font-size=\"40\" fill=\"#000000\">\n      刷新图片查看更多回复\n    </text>\n  </svg>\n`;\n    return \"data:image/svg+xml;base64,\" + java.base64Encode(svg);\n}\n\n\nfunction replaceEmoticons(t){const n=t=>`<img src=\"https://i9-static.jjwxc.net/tmp/emoji/${t}\"/>`, o={'化了':n('20240813133734_66baf11eca900_736.png'),'可怜':n('20240813133538_66baf0aa48da0_272.png'),'点赞':n('like.png'),'问号':n('question.png'),'亲亲':n('kiss.png'),'求求你了':n('20250513142416_6822e59075a3b_751.png'),'狗头':n('dog.png'),'星星眼':n('star.png'),'害羞':n('shy.png'),'坏笑':n('bad_smile.png'),'爱心眼':n('love_heart.png'),'让我康康':n('look.png'),'猫头':n('20240813134245_66baf2554d0c0_482.png'),'三花猫头':n('20240813134304_66baf2688507d_882.png'),'垂耳兔头':n('20240813134345_66baf29111f22_694.png'),'竖耳兔头':n('20240813134441_66baf2c986c2b_931.png'),'熊猫头':n('20240813134502_66baf2deb9a59_203.png'),'菜狗':n('20240813134018_66baf1c223617_332.png'),'奶茶':n('milk.png'),'橘糖':n('20240813132714_66baeeb282db3_126.png'),'紫糖':n('20240813132746_66baeed24ae82_531.png'),'药丸':n('20240813132902_66baef1e7590e_674.png'),'柠檬':n('20240813133018_66baef6a49f76_858.png'),'饭饭':n('20250513142708_6822e63c630d3_583.png'),'空碗':n('20250513142731_6822e653b7bac_594.png'),'比心':n('hand_heart.png'),'鼓掌':n('clap.png'),'666':n('666.png'),'摆手':n('wave.png'),'合十':n('20240813132056_66baed38130c1_545.png'),'抱拳':n('20250327163246_67e50d2e50aa5_351.png'),'托腮':n('sigh.png'),'爆哭':n('cry.png'),'笑哭':n('laugh.png'),'彩虹屁':n('rainbow.png'),'撒花':n('flower.png'),'加油':n('go.png'),'闭嘴':n('shut.png'),'白眼':n('eyes.png'),'裂开':n('break.png'),'墨镜':n('20240809171403_66b5dddb9b4a9_201.png'),'吃瓜':n('20240813133503_66baf08792cb4_971.png'),'哦哦哦':n('20250327162901_67e50c4d70e05_616.png'),'抱抱':n('20250327162653_67e50bcdc4107_345.png'),'摸头':n('20250327162816_67e50c2004946_460.png'),'哈哈大笑':n('20250327162728_67e50bf002312_926.png'),'捂脸偷看':n('20240813133808_66baf140db042_203.png'),'摊手':n('20240813133559_66baf0bfe94a8_123.png'),'无奈':n('20250327163425_67e50d916f9f7_934.png'),'捂脸笑哭':n('20250327162314_67e50af266b86_726.png'),'眼镜':n('20250513142108_6822e4d4908c7_855.png'),'好的':n('20250513142306_6822e54a95fec_363.png'),'求你了':n('20250513142345_6822e5719d933_198.png'),'小丑':n('20240813134155_66baf223161c9_172.png'),'害怕':n('fear.png'),'愤怒':n('anger.png'),'狗头叼玫瑰':n('20250513142003_6822e493665f5_485.png'),'鸽子':n('dove.png'),'发财':n('rich.png'),'好运莲莲':n('20240813132511_66baee37a0048_173.png'),'玫瑰':n('20240813132550_66baee5e5f847_433.png'),'猫爪':n('20240813132824_66baeef888f6a_514.png'),'烟花':n('20250513142645_6822e6257d8f0_243.png'),'元宝':n('20250513142558_6822e5f6c2986_398.png'),'裤子':n('20250513142753_6822e669080b5_216.png'),'耳朵':n('20240813133118_66baefa6c51c9_627.png'),'心碎':n('broken_heart.png'),'红心':n('red_heart.png'),'橙心':n('orange_heart.png'),'黄心':n('yellow_heart.png'),'绿心':n('green_heart.png'),'青心':n('cyan_heart.png'),'蓝心':n('blue_heart.png'),'紫心':n('purple_heart.png'),'粉心':n('pink_heart.png'),'加一':n('20250513142841_6822e699f2124_862.png'),'减一':n('20250513142916_6822e6bc011ee_516.png')};return t.replace(/\\[([^\\]]+)\\]/g,(t,r)=>o[r.trim()]||t)\n\t}",
  "lastUpdateTime": 1759350893015,
  "loginUi": "[\n    {\n        \"name\": \"填写token【有晋江书源的，你需要从晋江书源的登录头复制token】\",\n        \"type\": \"text\"\n    },\n       {\"name\": \"👤点击按钮登录\",\n        \"type\": \"button\",\n        \"action\": \"toLongin()\",\n        \"style\": {\n            \"layout_flexGrow\": 1,\n            \"layout_flexBasisPercent\": 0.4\n        }\n    },{\n    \t  name:\"☕️支持源作者\",\n    \t  type: \"button\",\n       action: \"toThank()\",\n       \"style\": {\n      \"layout_flexGrow\": 1,\n      \"layout_flexBasisPercent\": 0.4\n    }\n    \t}\n]",
  "loginUrl": "@js:\nfunction login(){\nlet token = (typeof result !== 'undefined')?result.get(\"填写token【有晋江书源的，你需要从晋江书源的登录头复制token】\"):source.getLoginInfoMap().get(\"填写token【有晋江书源的，你需要从晋江书源的登录头复制token】\");\ncheckToken(token);\n\t}\nfunction toLongin(){\n\tlogin();\n\t}\nfunction toThank(){\n\tjava.startBrowser(\"data:text/html;base64,PGltZyBzdHlsZT0id2lkdGg6MTAwJSIgc3JjPSJhYm91dDpibGFuayIgb25lcnJvcj0idGhpcy5zcmM9YXRvYignYUhSMGNITTZMeTluYVhSbFpTNWpiMjB2WjNWaGJtVnlNREF4TVRJMUwySnZiMnR6YjNWeVkyVXZjbUYzTDIxaGMzUmxjaThsUlRVbE9VSWxRa1VsUlRjbE9Ea2xPRGN2WjNWaGJtVnlMbmRsWW5BPScpIj4KCg==\",\"感谢你的支持\");\t\n\t}",
  "respondTime": 180000,
  "ruleBookInfo": {
    "author": "$.authorName",
    "canReName": "1",
    "coverUrl": "{{$.originalCover||$.novelCover}}\n<js>\nif(/(?:postimg|bmp|alicdn)\\./.test(result)){\n\tjava.setContent(src);\n\tresult = \"https://i9-static.jjwxc.net/novelimage.php?novelid={{$.novelId}}\"\n\t}else{\n\t\tresult = result\n\t\t}\n\t\theader = {\n\t\t\"headers\":{\n\t\t\t\"referer\":result.match(/(^https?:\\/\\/.*?\\/)/)[1]\n\t\t\t}\n\t\t}\nresult = (result +\",\"+ JSON.stringify(header)).replace(/wx\\d+/,'wx2')\n</js>",
    "init": "@js:\nif(/comment.php/.test(baseUrl)){\n\tlet nid = baseUrl.match(/novelid=(\\d+)/)[1];\n\turl = \"http://app-cdn.jjwxc.net/androidapi/novelbasicinfo?novelId=\"+nid;\n\tresult = java.ajax(url)\n\t}\nresult",
    "intro": "<js>\n//请假条\na=JSON.parse(java.ajax('http://app.jjwxc.org/androidapi/getnovelOtherInfo?novelId='+baseUrl.match(/(\\d+)/)[1]+'&type=novelbasicinfo&versionCode=163'));\n$=a.novelLeave;\nn='\\n';\nleave=$.leaveContent?'————————•————————'+n+'​'+n+$.leaveDateBack+n+'​'+'​'+'      '+$.leaveContent+n+$.leaveDate.replace(/请假时间：/,'⌚️')+n+$.leaveIntro:'';\njava.put('leave',leave);\njava.put('intro',JSON.parse(result).novelIntro.replace(/\\#/g,'◆'));\nresult\n\n</js>\n&nbsp;&nbsp;📖{{$.novelIntroShort##。$}}📖{{'\\n&lrm;'}}<br>\n◉ 标签：{{$.novelTags##,|\\s##🏷}}<br>\n◉ {{$.protagonist##,|，|；|;##、}}<br>\n◉ {{$.costar##,|，|；|;##、}}<br>\n◉ {{$.other##,|，|；|;##、}}<br>\n◉ 视角：{{$.mainview}}<br>\n◉ 评分：{{$.novelReviewScore}}<br>\n◉ 收藏：{{$.novelbefavoritedcount}}<br>\n{{String(java.get('intro')).replace(/立意:/,'◎◎ 立意：')}}<br>{{java.get('leave')}}<br>\n{{'\\n'+'​'}}\n◉ 霸王票排行：{{$.ranking}}<br>\n◉ 灌溉：{{$.nutrition_novel}}    ◉ 评论：{{$.comment_count}}<br> \n◉ 风格：{{$.novelStyle}}\n<js>\nresult=String(result);\nli=result.match(/◎ 立意.*/)?'&lrm;\\n'+result.match(/(◎ 立意.*?<br>)/)[1]:'';\nString(result).replace(/📖📖/,'').replace(/(◉ 收藏.*?<br>)/,'$1\\n'+li+'&lrm;\\n'+'————————•————————\\n').replace(/◎◎ 立意.*<br>/,'').replace(/(?:◉ 标签：|◉ 主角：|◉ 配角：|◉ 其它：|◉ 视角：|◉ 评分：)<br>/g,'')</js>",
    "kind": "{{java.getString('$.novelStep')!=\"\"?(step=java.getString('$.novelStep')=='2'?'已完结':'连载中'):\"\"}},{{$.novelClass&&$.novelTags}}##-##,",
    "lastChapter": "<js>\nif(!/comment.php/.test(baseUrl)){\nlast=JSON.parse(java.ajax('http://android.jjwxc.net/androidapi/chapterList?novelId='+baseUrl.match(/(\\d+)/)[1])).chapterlist;\n$=last[last.length-1];\nvip=$.isvip?'🔒':'';\nchapterid=$.chapterid;\nchaptername=$.chaptername;\ndate=$.chapterdate;\nresult = vip+chapterid+'.'+chaptername+'•'+date\n}\n</js>",
    "name": "@js:\nif(/comment.php/.test(baseUrl)){\n\tlet nid = baseUrl.match(/novelid=(\\d+)/)[1];\n\tlet cid = baseUrl.match(/chapterid=(\\d+)/)[1];\n\turl = \"http://app-cdn.jjwxc.net/androidapi/chapterList?novelId=\"+nid+\"&more=0&whole=1\";\n\tlet jsonData = JSON.parse(java.ajax(url)).chapterlist;\n   result = \"【书评】\"+jsonData\n  .filter(item => item.chapterid == cid && item.chaptertype !== 1)\n  .map(item => item.chaptername)+\"《{{$.novelName}}》\";\n\t}else{\n\t\tresult = \"【书评】{{$.novelName}}\"\n\t\t}",
    "tocUrl": "@js:\n/app-cdn/.test(baseUrl)?`http://app-cdn.jjwxc.net/androidapi/chapterList?novelId=${baseUrl.match(/novelId=(\\d+)/)[1]}&more=0&whole=1`:`https://android.jjwxc.net/comment/getCommentList?versionCode=439&limit=500&offset=0&commentSort=2&token=${getToken()}&novelId=${baseUrl.match(/novelid=(\\d+)/)[1]}&chapterId=${baseUrl.match(/chapterid=(\\d+)/)[1]}`;",
    "wordCount": "$.novelSizeformat||novelsizeformat##,"
  },
  "ruleContent": {
    "content": "<js>\nlet d = JSON.parse(result);\nlet limit = Number(baseUrl.match(/limit=(\\d+)/)[1]);\nlet commentTotal  =  Number(java.getString(\"$.data.commentTotal\"));\nlet page = Math.ceil(commentTotal/limit);\nlet p = (Number(baseUrl.match(/offset=(\\d+)/)[1])/limit)+1;\nfunction getPlainText(cl) {\n    let output = \"\";\n    let cllen = cl.length;\n    let sss = String(source.getVariable());\n    let re = /^([\\[\\]橘糖紫糖]|嗑到了|kswl|\\d+\\.\\d+\\.\\d+|[1234567890一二三四五六七八九十]+刷|打卡)+$|为营造更好的评论环境，/;\n    let sre = sss.match(/屏蔽【(.*?)】/)?.[1] ?? null;\n    sre = sre ? new RegExp(sre.replace(/,/g, '|'), 'g') : null;    \n    let plen = 0;\n    let validCount = 0;\n\n    for (let i in cl) {\n        let c = cl[i];\n        let reply = (c?.replyAll ?? c?.reply);\n        let rl = [];\n        if (re.test(c.commentBody ?? c.commentbody) || (sre ? sre.test(c.commentBody ?? c.commentbody) : null)) {\n            cllen--;\n            plen++;\n            continue;\n        }\n        \n        // 处理回复\n        let replyTotal = Number(c.replyTotal);\nif(replyTotal > 5 && /◎缓存回复/.test(sss)) { \t\n\tlet replyUrl = \"https://android.jjwxc.net/comment/getReplyList\";   \n    let offset = 5;\n    let limit = replyTotal; \n    let replyBody = `versionCode=444&novelId=${c.novelId}&chapterId=${c.chapterId}&commentId=${c.commentId}&offset=${offset}&limit=${limit}&isBackend=2&token=${getToken()}`;\n        let replyPost = {\n            \"method\": \"POST\",\n            \"body\": replyBody\n        }\n        let replyList = java.ajax(replyUrl+\",\"+JSON.stringify(replyPost));     \n        replyList = JSON.parse(replyList).data;\n        reply = reply.concat(replyList);                  \n    }\n\n\n        for (let j in reply) {\n            let r = reply[j];\n            if (re.test(r.replyBody ?? r.commentbody) || (sre ? sre.test(r.replyBody ?? r.commentbody) : null)) {\n                continue;\n            }\n            \n            let authorTag = (r?.isAuthor === \"1\" ? \"👑\" : \"📜\")+r.floor+\"楼 \";\n            \n            rl.push({\n                text: `${authorTag} ${r.replyAuthor ?? r.commentauthor} (${(!r.comment_date_time ? undefined : java.timeFormat(r.comment_date_time *1000)) ?? (r.replyDate || r.commentdate)})\\n ${replaceEmoticons(r.replyBody ?? r.commentbody)}`\n            });\n        }\n                               \n        // 构建主评论\n        let authorTag = \"\";\n        if (c?.isAuthor === \"1\") {\n            authorTag = \"👑\";\n        } else if (c?.bulletinComment === \"1\") {\n            authorTag = \"📢\";\n        } else {\n            authorTag = \"👤\";\n        }\n\n        // 主评论头部信息（作者、时间、订阅、互动数据）\n             \n        let header = `${authorTag} ${c.commentAuthor ?? c.commentauthor} `;\n        let time = ` 📆${(!c.comment_date_time ? undefined : java.timeFormat(c.comment_date_time * 1000)) ?? (c.commentDate || c.commentdate || '')}`\n        // 订阅信息     \n        if (c.subscriptionicon) {\n            if (c.subscriptionrate) {\n                header += ` 📖${c.subscriptionrate}`;\n            } else if (c.subscriptionicon.includes(\"rate_novelallbuy\")) {\n                header += ` 📖100%`;\n            }\n        }\n\n        // 互动数据\n        header += ` \\n👍${c.agreenum ?? \"0\"}`;\n        if (c.commentMark) header += ` ⭐️${c.commentMark}`;\n        \n        output += \"\\n\"+header + time+ \"\\n\";\n        output += `${replaceEmoticons(c.commentBody ?? c.commentbody)}`;\n\n\n\n\n        // 回复内容\n        if (rl.length > 0) {\n            output += \"\\n&lrm;\\n🔁 回复内容:\\n\";\n            rl.forEach(reply => {\n                output += `  ${reply.text}\\n`;\n            });\n        }\n        if(replyTotal > 5 && !/◎缓存回复/.test(sss)){\n        output= output.replace(/\\n$/,'')+getImage(replyTotal,c.novelId,c.chapterId,c.commentId)\n        }\n\t\n        output += \"\\n&lrm;\\n\";\n        validCount++;\n    }\n\n    // 添加统计信息\n    let stats = `🏷本章共有${commentTotal}条评论 | 共有${page}页\\n💬当前第${p}页显示 ${validCount} 条评论 | 屏蔽 ${plen} 条评论`;\n      \n    return stats + \"\\n\\n\" + output;\n}\nlet msg = d?.data.commentTotal?null:d.message;\nif(msg){\n\tjava.toast(msg);\n}else{\nresult = getPlainText(d.data.commentList);\nif(/\\d+-\\d+/.test(book.getVariable(\"custom\"))){\n     if(/offset=0/.test(baseUrl)&&!/1-\\d+/.test(book.getVariable(\"custom\"))){\n     \tresult = \"\"\n     \t}\n}\nresult.replace(/&lt;/g,'<')\n.replace(/&gt;/g,'>')\n}\n</js>",
    "imageStyle": "TEXT",
    "nextContentUrl": "<js>\nfunction getPage(allpage,limit){\t\nlist=[];\nlen=allpage>5?5:allpage;\nstart=1;end=len;\nif(book.getVariable(\"custom\")!=\"\"){\nstart=Number(book.getVariable(\"custom\").match(/(\\d+)-\\d+/)[1]);\nend=Number(book.getVariable(\"custom\").match(/\\d+-(\\d+)/)[1]);\nif(end>allpage)end=allpage;\n}\nlet bs = start;\nif(start===1)start=2;\njava.toast(\"共加载\"+(end-bs+1)+\"页，加载较慢...请稍候\")\nfor(i=start;i<=end;i++){\n\tlet offset = (i-1)*limit;\nlist.push(\n\tbaseUrl.replace(/offset=0/,'offset='+offset)\n\t);\n}\nreturn list\n\t}\n\nif(!/comment.php/.test(book.bookUrl)){\n\tlet msg = JSON.parse(result)?.data.commentTotal??false;\n\tif(msg){\nlet limit = Number(baseUrl.match(/limit=(\\d+)/)[1]);\nlet commentTotal  =  Number(java.getString(\"$.data.commentTotal\"));\nlet allpage = Math.ceil(commentTotal/limit);\ngetPage(allpage,limit)\n}\n}\n</js>"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "@JSon:$.authorname",
    "bookList": "$.items",
    "bookUrl": "http://app-cdn.jjwxc.net/androidapi/novelbasicinfo?novelId={{$.novelid||$.novelId}}&page=1",
    "checkKeyWord": "狗血文，但无",
    "coverUrl": "{{$.cover}}\n<js>\nif(/(?:postimg|bmp|alicdn)\\./.test(result)){\n\tjava.setContent(src);\n\tresult = \"https://i9-static.jjwxc.net/novelimage.php?novelid={{$.novelId}}\"\n\t}else{\n\t\tresult = result\n\t\t}\n\t\theader = {\n\t\t\"headers\":{\n\t\t\t\"referer\":result.match(/(^https?:\\/\\/.*?\\/)/)[1]\n\t\t\t}\n\t\t}\nresult = (result +\",\"+ JSON.stringify(header)).replace(/wx\\d+/,'wx2')\n</js>",
    "intro": "$.novelintroshort",
    "kind": "@JSon:$.tags&&$.novelSizeformat##\\s##,",
    "name": "【书评】{{$.novelname}}@put:{\"id\":\"$.novelid||$.novelId\"}",
    "wordCount": "$.novelstep\n@js:result==2?'已完结':'连载中';"
  },
  "ruleToc": {
    "chapterList": "$.chapterlist\n<js>\nif(result == \"[]\"){\n\t let msg = JSON.parse(src).message;\n\t msg?java.toast(msg):null;\n\t let limit = Number(baseUrl.match(/limit=(\\d+)/)[1]);\n  let commentTotal  = Number(java.getString(\"$.data.commentTotal\"));\n  let allpage = Math.ceil(commentTotal/limit);\n  let list = [];\n\t for(let i=0;i<allpage;i++){\n  \t \tlet offset = i*limit;\n\t \t  list.push({\n\t \t  \t  \"chaptername\": \"第\"+(i+1)+\"页\",\n\t \t  \t  \"chapterurl\": \tbaseUrl.replace(/offset=0/,'offset='+offset)\t \t  \t\n\t \t  \t})\n\t \t}\n\t \tresult = JSON.stringify(list)\n\t}\nresult\n</js>\n$.[*]",
    "chapterName": "{{$.chapterid}}丨{{$.chaptername}}##(?<!\\d)丨",
    "chapterUrl": "@js:\nif(/chapterList/.test(baseUrl)){\nlet sss = String(source.getVariable());\nlet limit = sss.match(/◎(\\d+)/)?.[1] ?? 500;\nlet nid = java.getString(\"$.novelid\");\nlet cid = java.getString(\"$.chapterid\");\nlet 点赞url = \n`https://android.jjwxc.net/comment/getCommentList?versionCode=439&limit=${limit}&offset=0&commentSort=2&token=${getToken()}&novelId=${nid}&chapterId=${cid}`;\n\nlet 回复url = `https://android.jjwxc.net/comment/getCommentList?versionCode=439&limit=${limit}&offset=0&commentSort=0&token=${getToken()}&novelId=${nid}&chapterId=${cid}`;\n\nlet 长评url = `https://android.jjwxc.net/comment/getLongCommentList`;\n    let 长评option = {\n\t    \"method\":\"POST\", \t\"body\":`versionCode=439&limit=${limit}&offset=0&token=&novelId=${nid}&chapterId=${cid}`\n\t}\n长评url = 长评url+\",\"+JSON.stringify(长评option);\n\nif(/◎回复/.test(sss)){\n\tresult = 回复url\n\t}else if(/◎长评/.test(sss)){\n\t\tresult = 长评url\n}else{\n\tresult = 点赞url\n\t}\n}else{\n\tresult = java.getString(\"$.chapterurl\")\n\t}",
    "updateTime": "{{$.chaptersize}}字•{{$.chapterdate}}•{{$.chapterintro##^\\s*}}##^•|0000-00-00.*|^0字•|字••"
  },
  "searchUrl": "http://android.jjwxc.net/androidapi/search?keyword={{key}}&type=1&page={{page}}&searchType=1&sortMode=DESC",
  "variableComment": "1、设置书籍变量处可填写（只会应用于当前书籍）\n\n  开始页-结束页  ——   如10-20 \n则评论从第10页开始，第20页结束\n默认最多从第1页至第10页结束\n\n2、设置源变量处可填写（应用于所有书）\n\n屏蔽【屏蔽词,屏蔽词,屏蔽词】 ——  如 屏蔽【磕到了,营养液】只要有屏蔽词就不显示此评论。\n注意用英文逗号【,】分隔屏蔽词，【】符号不能少。\n\n ◎数量  ——  如 ◎1000 则每页显示1000条评论，默认为500，注意数字太大可能会失败。\n \n◎回复 —— 评论按照回复时间排序，默认为点赞数排序\n\n◎长评 —— 只显示长评\n \n ◎缓存回复 —— 更多回复加载到正文（填写后刷新正文，❗️注意：当前页有很多评论有更多回复，会导致正文加载速度非常慢！有500条更多回复就要请求500次！），不填写则是刷新图片可以查看更多回复，正文加载速度较快。\n \n 注意◎符号不能少。\n \n（更改完书籍变量或源变量一定要先刷新详情页，再刷新正文）\n",
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
    if (text.indexOf('$.') === 0) text = text.slice(2);
    if (text.indexOf('$..') === 0) return recursiveFind(context, text.slice(3));
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

  function renderTemplate(template, vars, context) {
    return String(template || '').replace(/\{\{([\s\S]*?)\}\}/g, function (_, expr) {
      var key = expr.trim();
      if (key === 'key') return encodeURIComponent(vars.keyword || '');
      if (key === 'page') return vars.page || 1;
      if (key === 'baseUrl') return vars.baseUrl || '';
      if (key === 'source.key') return baseUrl();
      if (key.indexOf('$.') === 0 || key === '$') return stringify(first(getPathValue(context, key)));
      return '';
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
    var idx = text.indexOf('##');
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
    else if (text.indexOf('@json:') === 0 || text.indexOf('$.') === 0 || text === '$') value = evaluateJsonPath(context, text);
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
      return value === undefined ? result : value;
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
      if ((target === 'bookUrl' || target === 'tocUrl' || target === 'coverUrl' || target === 'url') && value) value = absolutize(value, parentUrl || baseUrl());
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

  return { search: search, bookInfo: bookInfo, chapterList: chapterList, chapterContent: chapterContent, explore: explore, applyRule: applyRule, request: request, evaluateJsonPath: evaluateJsonPath, evaluateCss: evaluateCss, evaluateXPath: evaluateXPath, createJavaShim: createJavaShim };
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
