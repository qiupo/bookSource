// @name 立方体儿（优++）
// @version 2026.02.26
// @author converted
// @url 📖Lofter
// @enabled true
// @tags 小说,书源,converted
// @description // Error: org.htmlunit.corejs.javascript.EcmaError: TypeError: 无法读取 null 的属性 “1” (<Unknown source>#1) in <Unknown source> at line number 1
// @description 使用洛雅橙改版阅读Σ最新测试版效果更佳https://github.com/Luoyacheng/legado
// @description 原版阅读可配套LOFTER订阅源使用
// @description http://www.yckceo.com/yuedu/rss/json/id/641.json
// @description ❗️需登录
// @description ◎搜索格式◎

const LEGADO_SOURCE = {
  "bookSourceComment": "// Error: org.htmlunit.corejs.javascript.EcmaError: TypeError: 无法读取 null 的属性 “1” (<Unknown source>#1) in <Unknown source> at line number 1\n\n使用洛雅橙改版阅读Σ最新测试版效果更佳https://github.com/Luoyacheng/legado\n原版阅读可配套LOFTER订阅源使用\nhttp://www.yckceo.com/yuedu/rss/json/id/641.json\n❗️需登录\n◎搜索格式◎\n1、搜索用户<关闭精确搜索>\n@用户名\n2、搜索合集<关闭精确搜索>\n#合集\n3、搜索粮单\n%粮单名<关闭精确搜索>\n4、搜索文章，直接搜索\n◎一些使用指南◎\n仅阅读Σ支持\n1、点击作者名查看合集列表，长按作者名查看作者动态。\n2、点击详情页◎跳转lofter软件\n3、点击正文◎查看评论\n4、源变量填写1，开启查看划线评论\n5、点击正文章节链接跳转lofter软件【原版阅读也支持】\n\n◎发现规则格式◎\n                                    🏷标签\n标签名::https://api.lofter.com/oldapi/tagPosts.api?product=lofter-android-7.4.4&method=newTagSearch&offset={{(page-1) *22}}&limit=22&firstpermalink=null&tag=标签名&type=new,{\"method\": \"POST\",\"body\":\"null\"}\n📃用户（搜索可以得到)\n部分目录章节比较多，加载时间久，出现目录加载失败，请尝试刷新，因为可能是请求失败导致的",
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "立方体儿（优++）",
  "bookSourceType": 0,
  "bookSourceUrl": "📖Lofter",
  "bookUrlPattern": "https?://api\\.lofter\\.com/(?!.*newsearch).*",
  "concurrentRate": "700",
  "customButton": false,
  "customOrder": 29,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "🐾我的足迹::https://api.lofter.com/v2.0/history.api?product=lofter-android-6.16.2,{\"method\":\"POST\",\"body\":\"supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain={{java.ajax(\"https://www.lofter.com/\").match(/class=\"lg2\">([^<]+)</)[1]}}&offset={{(page-1)*18}}&method=getList&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}   \n\n❤️我的喜欢::https://api.lofter.com/v1.1/batchdata.api?product=lofter-android-8.3.20,{\"method\":\"POST\",\"body\":\"supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain={{java.ajax(\"https://www.lofter.com/\").match(/class=\"lg2\">([^<]+)</)[1]}}&offset={{(page-1)*18}}&method=favorites&postdigestnew=1&returnData=1&limit=18\"}   \n\n⭐️我的订阅::https://api.lofter.com/newapi/subscribeCollection/list.json?offset={{(page-1)*10}} \n\n              ----------     🏷标签     ----------               ::\n小说::https://api.lofter.com/oldapi/tagPosts.api?product=lofter-android-7.4.4&method=newTagSearch&offset={{(page-1) *22}}&limit=22&firstpermalink=null&tag=小说&type=new,{\"method\": \"POST\",\"body\":\"null\"}\n\n               ----------     📃用户     ----------               ::\n溏乃言::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-7.4.4,{\"method\":\"POST\",\"body\":\"targetblogid=523035851&supportposttypes=1%2C2%2C3%2C4%2C5%2C6&offset={{(page-1)*18}}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}\n\n砂上雪::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-7.4.4,{\"method\":\"POST\",\"body\":\"supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain=taste-s.lofter.com&offset={{(page-1)*18}}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}",
  "header": "@js:\nid=String(java.androidId());\nJSON.stringify({\n\"Content-Type\": \"application/x-www-form-urlencoded;charset=utf-8\",\n\"deviceid\":id})",
  "jsLib": "function getSvg(comment_total) {\n   const {java} = this;\n   let co;\n   //段评气泡颜色[边框,文字]\n   let color = [\"#B2B2B2\",\"#707070\"];\n   try{\n       co = \"#\" + String(java.getReadBookConfigMap()[\"textColor\"]).match(/.{6}$/)[0];\n         \n    if (String(java.getThemeConfigMap()[\"isNightTheme\"]) === \"true\") {\n        co = \"#\" + String(java.getReadBookConfigMap()[\"textColorNight\"]).match(/.{6}$/)[0];      \n    }\n    color = [co, co];     \n    }catch(e){}\n        \n       \nlet svg = `\n  <svg width=\"1000\" height=\"800\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M865 100 h-600c-60 0-110 50-110 110v150l-120 80 120 80v150c0 60 50 110 110 110h600c60 0 110-50 110-110V210c0-60-50-110-110-110z  \" fill=\"none\" stroke=\"${color[0]}\" stroke-width=\"55\"/>\n    <text x=\"570\" y=\"565\" font-family=\"Roboto Condensed\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-size=\"420\" font-weight=\"bold\" fill=\"${color[1]}\">\n      ${comment_total || \"无\"}\n    </text>\n  </svg>\n`;\n    return \"data:image/svg+xml;base64,\" + java.base64Encode(svg);\n}\n\n\n\nfunction getImage(comment_total,postid, blogid,pid){\n  return `<img src=\"data:image/svg+xml;base64,,{\"style\":\"TEXT\",\"type\":\"lofter\",\"js\":\"getSvg(${comment_total})\",\"click\":\"toReview(${comment_total},${postid}, ${blogid}, '${pid}')\"}\">`;\n}\n\nfunction toReview(comment_total,postid, blogid, pid,t) {\n    const {\n        java\n    } = this;\n  let font_size = 13;\n  let contentapi,ptext;\n  if(t==1){\n     contentapi = `https://api.lofter.com/comment/l1/page.json?postId=${postid}&blogId=${blogid}&offset=0&needGift=1&openFansVipPlan=0&dunType=1`;\n  }else{\n       contentapi = `https://api.lofter.com/comment/pCommentList.json?postId=${postid}&blogId=${blogid}&offset=0&pid=${pid}&imgId=&commentId=`;\n  }\n  let contentJson = java.ajax(contentapi);\n  let jsonData = JSON.parse(contentJson).data.list;\n  let currentUrl = contentapi;\n  \n  if(t!==1){\n  ptext = jsonData[0].quote.replace(/\\s*/g,'').replace(/^(.{40}).*/,'$1.......');\n  let ytext = jsonData[0].quote;\n  ptext = `<div class=\"p\" style=\"font-size:12px;margin-top:2px;margin-left:12px;display:flex;align-items:center;background:#ffffff;overflow:auto;max-height:80px\" onclick=\"\n    const p1 = this.querySelector('.p1');\n    const p2 = this.querySelector('.p2');\n    if (p1.style.display !== 'none') {\n        p1.style.display = 'none';\n        p2.style.display = 'block';\n        this.style.alignItems = 'flex-start'; \n    } else {\n        p1.style.display = 'block';\n        p2.style.display = 'none';\n        this.style.alignItems = 'center'; \n    }\n\">\n    <p class=\"p1\" style=\"margin:0;padding:0;\">\n        <a style=\"color:#4a89dc;font-weight:bold;\">原文：</a>${ptext}\n    </p>\n    <p class=\"p2\" style=\"margin-top:3px;padding:0;display:none;\">\n        <a style=\"color:#4a89dc;font-weight:bold;\">原文：</a>${ytext}\n    </p>\n</div>\n`;\n  }else{\n      ptext = `<div style=\"width:100%;display:flex;align-items:center;justify-content:center\"><p style=\"font-size:14px;\">${pid}</p></div>`\n  }\n  \n let html = `<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\">\n    <style>\n    :root{--primary-color:#5d9cec;--primary-light:#e6f0fa;--primary-dark:#4a89dc;--accent-color:#ff6b6b;--text-dark:#2d3748;--text-light:#718096;--text-lighter:#a0aec0;--bg-color:#f5f7fa;--card-bg:#ffffff;--border-color:#e8e8e8;--shadow-color:rgba(0,0,0,0.05);}*{margin:0;padding:0;box-sizing:border-box;}body{font-family:'Inter','PingFangSC','MicrosoftYaHei',sans-serif;background-color:var(--bg-color);color:var(--text-dark);line-height:1.6;padding-top:50px;padding-bottom:60px;}/*顶部标签栏*/.tab-bar{position:fixed;top:0;left:0;right:0;background-color:var(--card-bg);display:flex;min-height:50px;height:auto;border-bottom:1px solid var(--border-color);z-index:100;}.p{width:88%;font-weight:bold;background:#ffffff}.comment-item{margin-left:10px;margin-right:10px;background-color:var(--card-bg);border-radius:8px;padding:15px;margin-bottom:15px;box-shadow:0 2px 8px var(--shadow-color);}.comment-header{display:flex;align-items:center;margin-bottom:10px;}.username{font-weight:600;font-size:11px;color:var(--primary-dark);margin-right:10px;}.comment-info{display:flex;justify-content:space-between;}.comment-meta{font-size:10px;color:var(--text-light);margin-top:5px;}.comment-content{font-size:${font_size}px;line-height:1.6;color:var(--text-dark);margin-bottom:10px;}.comment-actions{display:flex;justify-content:flex-end;}.action-btn{display:flex;align-items:center;margin-left:20px;font-size:10px;color:var(--text-light);transition:all0.2s;}.action-btn:hover{color:var(--primary-color);}.action-btni{margin-right:5px;}.replies-section{margin-top:15px;padding-left:15px;border-left:2px solid var(--primary-light);}.reply-item{padding:12px 0;border-bottom:1px dashed var(--border-color);}.reply-item:last-of-type{border-bottom:none;}.reply-header{display:flex;align-items:center;margin-bottom:5px;}.load-more-replies,.close-more-replies{font-size:12px;color:var(--primary-color);text-align:center;padding:10px 0;font-weight:500;}/*悬浮评论按钮*/.floating-btn{position:fixed;bottom:30px;right:15px;width:30px;height:60px;display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:20px;z-index:100;}#top,#down{opacity:0.4}#top:hover,#down:hover{opacity:1}.ef{width:24px;display:inline-block;vertical-align:middle;margin-top:-4px;}.comment-item:first-of-type{margin-top:20px}\n    .comment-pic{width:100px;height:auto}\n    .comment-pic img{width:100%}\n    .comment-quote{font-size:10px;margin-top:5px;background:#eee;border-radius:9px;padding:0px 8px}\n    .title{text-align:center;width:100%;font-size:15px;margin:5px;color:#4a89dc}\n    .badge {font-size: 10px;padding: 0px 5px;border-radius: 4px;margin-right: 8px;font-weight: 500;color:#77C377;}.load-more-replies,.close-more-replies {font-size: 12px;color: var(--primary-color);text-align: center;padding: 10px 0;font-weight: 500;}\n    .hide{display:none}\n</style>\n</head>\n\n<body>\n    <!-- 顶部标签栏 -->\n    <div class=\"tab-bar\">\n            ${ptext}\n    </div>\n    \n    \n    <!-- 评论区域 -->\n    <div class=\"comments-container\">\n            <div style=\"text-align: center;\n            \n        padding: 20px;\n        color: #666;\n        font-size: 14px;\" class=\"loading\">加载中......</div>\n    </div>\n    \n    <!-- 悬浮按钮 -->\n    <div class=\"floating-btn\">\n        <div id=\"top\"><i class=\"fa fa-arrow-circle-up\"></i></div>\n        <div id=\"down\"><i class=\"fa fa-arrow-circle-down\"></i></div>\n    </div>\n    \n</body>\n</html>\n`;\n\nlet script = `setTimeout(function() {  \n    let currentUrl = \\`${currentUrl}\\`;\n    let contentJson = ${contentJson};\n    let isLoading = false;\n    let page = 1;\n    let hasMore = true;\n    loadUrl();\n    \n    function loadUrl(){\n        let JsonData = getJson(contentJson);\n        let html = createCommentHtml(JsonData);\n        document.querySelector('.comments-container').innerHTML = html;\n        openReply();\n        window.scrollTo(0, 0);\n    }\n     \nfunction getJson(jsonData,type){\n    try{\n        if(/^http/.test(jsonData)){\n            jsonData = java.ajax(jsonData);\n            jsonData = JSON.parse(jsonData || \"{}\");\n        }\n        JsonData = jsonData;\n         if(type!==0)contentJson = jsonData;\n        let data = JsonData?.data ?? {};\n        let r = {};\n        let commentList = [];\n        let list = data.list;\n        if(data.hotList && data.hotList.length>0){\n            commentList.push({\n                \"title\":\"热门评论\"\n            });\n            data.hotList.push({title:\"最新评论\"});\n            list =  data.hotList.concat(list)\n        }\n        \n        for(i in list){\n            let x = list[i];\n            let comment = {};\n            if(x.title){\n                commentList.push(x);\n                continue;\n            }\n            comment.meta = java.timeFormat(x.publishTime)+\"•\"+(x.ipLocation??\"\");\n            comment.content = x.content;\n            comment.quote = (x.quote??\"\").replace(/^(.{12}).*/,'$1...');\n            comment.quote = \"${t}\"==\"1\"?comment.quote:\"\";\n            comment.authorFeedBack = x.authorFeedBack;\n            comment.author = String(x.publisherBlogInfo.blogId) == \"${blogid}\"?\"作者\":\"\";\n            comment.blogId = x.publisherBlogInfo.blogId;\n            comment.emotes = x.emotes??[];\n            comment.username = x.publisherBlogInfo.blogNickName;\n            comment.l2Count = x.l2Count;\n            comment.id = x.id;\n            comment.agreenum = x.likeCount;\n            comment.pics = x.images?x.images.map(x=>{return \"<img src=\\\\\"\"+x.orign+\"\\\\\">\"}).join(\"\"):\"\";\n        commentList.push(comment)\n    }\n   \n    if(type == 0)return commentList;\n    r.list = commentList;\n    return r\n    }catch(e){\n         return false\n    }\n}\n  \n  function replaceemotes(content,emotes){\n      content = content.replace(/\\\\[图片\\\\]/g,'');\n      emotes.forEach(x=>{\n          let rex = x.name.replace(/([\\\\[\\\\]\\\\?\\\\$\\\\^\\\\(\\\\)])/g,\"\\\\\\\\$1\");\n          let re = new RegExp(rex,'g');\n          let pic = '<img class=\"ef\" src=\"'+x.url+'\">';\n          content = content.replace(re,pic)\n      });\n      return content\n  }\n  \n function createCommentHtml(JsonData){\n     if(JsonData && typeof JsonData!==\"string\"){\n         html=createHtml(JsonData.list,\"comment\");\n         return html;\n     }else{\n        java.longToast(\"错误\");\n        const loader = document.createElement('div');\n        loader.className = 'loading-more';\n        loader.style.cssText = \\`\n        text-align: center;\n        padding: 10px;\n        color: #666;\n        font-size: 14px;\n    \\`;\n    loader.textContent = typeof JsonData===\"string\"?JsonData:\"加载失败，点击重试\"\n    loader.style.color = '#f00';\n    return loader.outerHTML\n    }\n}\ndocument.addEventListener('click', function(e) {\n  if (e.target.classList.contains('username')) {\n    const readerId = e.target.dataset.id;\n    addShelf(readerId);\n  }\n});\n\n\nfunction openReply(){\ndocument.querySelectorAll('.load-more-replies,.close-more-replies').forEach(btn => {\n            btn.addEventListener('click', function(e) {\n                   let className = this.className;\n                   if(/load-more-replies/.test(className)){\n                         const repliesSection = e.target.parentNode;\n                         let content = this.textContent;\n                         let dataid = this.dataset.id;\n                         let totalnum = Number(content.match(/共(\\\\d+)/)[1]);\n                         let datanum = Number(this.dataset.num);\n                         if(datanum<totalnum){\n                             let replyapi = \\`https://api.lofter.com/comment/l2/page/abtest.json?postId=${postid}&blogId=${blogid}&id=$\\{dataid}&offset=$\\{datanum}&fromSrc=&fromId=\\`;\n                             this.insertAdjacentHTML('beforebegin', createHtml(getJson(replyapi,0),\"reply\",1));\n                             this.dataset.num = datanum+5;\n                             let synum = Number(content.match(/还剩(\\\\d+)/)[1])-5;\n                             if(synum>0){\n                                 this.textContent = content.replace(/还剩\\\\d+/,'还剩'+synum)\n                              }else{\n                                  this.classList.add(\"hide\");\n                               }\n                         }\n                   }\n            });\n        });\n    }\n\n\nfunction addShelf(id){\n    try{\n   let authoru = \\`http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-7.4.4,{\"method\": \"POST\",\"body\":\"targetblogid=$\\{id}&method=getBlogInfoDetail&returnData=1&limit=2000&offset=0&&checkpwd=1&needgetpoststat=1\"}\\`;\n   \nlet authorurl= \\`legado://import/addToBookshelf?src=$\\{encodeURIComponent(authoru)},{\"origin\":\"📖Lofter\"}\\`;\nwindow.open(authorurl);\n}catch(e){\n    java.log(e)\n}\n}\n\nfunction createHtml(JsonData,t){\n    let html = \"\";\n    for(i in JsonData){\n        let x = JsonData[i];\n        let replyHtml = \"\";\n        if(x.l2Count && x.l2Count >0){\n            let openReply = \\` <div class=\"load-more-replies\" data-id=\"$\\{x.id}\" data-num=\"0\">≚ 共$\\{x.l2Count}条回复 还剩$\\{x.l2Count}条</div>\\`;\n           \n            replyHtml = \\`<div class=\"replies-section\">\n                $\\{openReply}\n            </div>\\`\n        }\n        \n        if(x.title){\n            html += '<div class=\"title\">'+x.title+'</div>';\n            continue;\n        }\n        let user_badges = \"\";\n        if(x.author || x.authorFeedBack){\n        user_badges = \\`<div class=\"user-badges\">\n                    <div class=\"badge gold\">\n                          $\\{x.author || x.authorFeedBack}\n                    </div>\n                </div>\\`\n        }\n        \n        let quote =  x.quote?\\`<div class=\"comment-quote\">$\\{x.quote}</div>\\`:\"\";\n        let info = \\`<div class=\"comment-info\">\n                            <div class=\"comment-meta\">$\\{x.meta.replace(/•$/,'')}</div>$\\{quote}\n                            <div class=\"comment-actions\">\n                                <div class=\"action-btn\"><i class=\"far fa-thumbs-up\"></i> $\\{x.agreenum}</div>\n                       </div>\n                    </div>\\`;\n        \n        html+=\\`<div class=\"$\\{t}-item\">\n                    <div class=\"$\\{t}-header\">\n                         <div class=\"username\" data-id=\"$\\{x.blogId}\">$\\{x.username}</div>\n                         $\\{user_badges}\n                    </div>\n                    <div class=\"comment-content\">$\\{replaceemotes(x.content,x.emotes)}</div>\n                    <div class=\"comment-pic\">$\\{x.pics}</div>\n                    $\\{info}\n                    $\\{replyHtml}\n                </div>\\`\n    };\n    \n    if(t==\"comment\"){\n        if(html==\"\"){\n            html = \\`<div style=\"text-align: center;\n        padding: 10px;\n        color: #666;\n        font-size: 14px;\">暂无评论</div>\\`\n        }\n    }\n    return html\n}\n  \n\n  function checkScrollBottom() {\n    if (isLoading || !hasMore) return;\n    const lastComment = document.querySelector('.comment-item:last-of-type');\n    if (!lastComment) return;\n    const windowHeight = window.innerHeight;\n    const documentHeight = document.documentElement.scrollHeight;\n    const scrollTop = window.scrollY || document.documentElement.scrollTop;\n    if (documentHeight - (scrollTop + windowHeight) < 100) {\n        loadNextPage();\n    }\n}\n\nfunction loadNextPage() {\n    if (isLoading || !hasMore) return;\n    let offset = contentJson.data.offset;\n    if (offset < 0) { \n                hasMore = false;\n                const noMore = document.createElement('div');\n                noMore.className = 'no-more';\n                noMore.textContent = '没有更多评论了';\n                noMore.style.cssText = \\`\n                    text-align: center;\n                    padding: 10px;\n                    color: #999;\n                    font-size: 14px;\n                \\`;\n                document.querySelector('.comments-container')?.appendChild(noMore);\n                return;\n    }\n    page++;\n    isLoading = true;\n    const loader = document.createElement('div');\n    loader.className = 'loading-more';\n    loader.textContent = '加载 第'+page+'页 中...';\n    loader.style.cssText = \\`\n        text-align: center;\n        padding: 10px;\n        color: #666;\n        font-size: 14px;\n    \\`;\n    \n    const container = document.querySelector('.comments-container') || document.body;\n    container.appendChild(loader);\n    setTimeout(() => {\n        fetchMoreComments()\n            .then(() => {\n                container.removeChild(loader);\n                isLoading = false;\n            })\n            .catch(() => {\n                loader.textContent = '加载失败，点击重试';\n                loader.style.color = '#f00';\n                loader.onclick = () => {\n                    container.removeChild(loader);\n                    isLoading = false;\n                    page--;\n                    loadUrl();\n                };\n            });\n    }, 100);\n}  \n  \n  \n function fetchMoreComments() {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            let offset = contentJson.data.offset;\n            currentUrl = currentUrl.replace(/offset=\\\\d+/,\"offset=\"+offset);\n            var htmlString = createCommentHtml(getJson(currentUrl));\n            const container = document.querySelector('.comments-container') || document.body;\n            const loader = container.querySelector('.loading-more');\n            if (loader) {\n                loader.insertAdjacentHTML('beforebegin', htmlString);\n             } else {\n                 container.insertAdjacentHTML('beforeend', htmlString);\n             }\n             openReply()\n            resolve();\n        }, 1000);\n    });\n} \n  \n  \n  \n let scrollTimer;\nwindow.addEventListener('scroll', function() {\n    clearTimeout(scrollTimer);\n    scrollTimer = setTimeout(checkScrollBottom, 100);\n});\n\n  \n  \n\nconst topBtn = document.querySelector('#top');\ntopBtn.addEventListener('click', function() {\n    window.scrollTo({\n        top: 0,\n        behavior: 'smooth' \n    });\n});\n\nconst bottomBtn = document.querySelector('#down');\nbottomBtn.addEventListener('click', function() {\n    window.scrollTo({\n        top: document.body.scrollHeight,\n        behavior: 'smooth'\n    });\n});\n},200)`;\n\n\n   java.showBrowser(\"\",html,script,`{\n\t\texpandedCornersRadius:10,\n\t\theightPercentage:0.72\n\t\t}`)\n}\n\n",
  "lastUpdateTime": 1772086414378,
  "loginUi": "[\n    {\n        \"name\": \"账号\",\n        \"type\": \"text\"     \n    },\n    {\n        \"name\": \"密码[或短信验证码]\",\n        \"type\": \"password\"\n },{\n        \"name\": \"📱手机号登录\",\n        \"type\": \"button\",\n        \"action\": \"toLogin('phone')\",\n        \"style\": {\n            \"layout_flexGrow\": 1,               \n            \"layout_flexBasisPercent\": 0.4\n        }\n    },\n    {\n        \"name\": \"🆔LOFTER ID登录\",\n        \"type\": \"button\",\n        \"action\": \"toLogin('id')\",\n        \"style\": {\n            \"layout_flexGrow\": 1,               \n            \"layout_flexBasisPercent\": 0.4\n        }\n    },{\n        \"name\": \"🔢获取短信验证码\",\n        \"type\": \"button\",\n        \"action\": \"getCode()\",\n        \"style\": {\n            \"layout_flexGrow\": 1,               \n            \"layout_flexBasisPercent\": 0.4\n        }\n    },{\n        \"name\": \"🔢验证码登录\",\n        \"type\": \"button\",\n        \"action\": \"toLogin('code')\",\n        \"style\": {\n            \"layout_flexGrow\": 1,               \n            \"layout_flexBasisPercent\": 0.4\n        }\n    }, {\n        \"name\": \"账号风险验证码\",\n        \"type\":\"text\"   \n    },{\n        \"name\": \"获取账号风险验证码\",\n        \"type\":\"button\",\n        \"action\": \"toCa()\",\n         \"style\": {\n            \"layout_flexGrow\": 1,               \n            \"layout_flexBasisPercent\": 0.4\n        }    \n    },{\n        \"name\": \"立即验证\",\n        \"type\":\"button\",\n        \"action\": \"cap()\",\n         \"style\": {\n            \"layout_flexGrow\": 1,               \n            \"layout_flexBasisPercent\": 0.4\n        }    \n    }\n ]",
  "loginUrl": "@js:\nfunction login() {}\n\nfunction toCa() {\n    cookie.removeCookie(\"https://www.lofter.com\");\n   cookie.removeCookie(\"📖Lofter\"); java.ajax(\"https://www.lofter.com/front/membership/store-vip/verify-phone\");\n    let token = source.getLoginHeaderMap().get(\"lofter-phone-login-auth\");\n    let co = \"LOFTER-PHONE-LOGIN-AUTH=\\\"\" + token + \"\\\";LofterInnerBrowser=true;\"\n\n    co += cookie.getCookie(\"https://www.lofter.com\");\n    let headers = JSON.stringify({\n        headers: {\n            Cookie: co\n        }\n    });\n    let verifyPhoneCheck = JSON.parse(java.ajax(\"https://www.lofter.com/newweb/phone/verifyPhoneCheck.json?_=\" + Date.now() + \",\" + headers));\n    if (verifyPhoneCheck.code == 200) {\n        let phone = java.base64Decode(verifyPhoneCheck.data.cPhone);\n        java.toast(\"当前验证手机号：\\n\" + phone);\n        source.put(\"phone\",phone);\n        //发送验证码\n        let imgurl = \"https://www.lofter.com/lpt/photoCaptcha/getPhotoCaptcha.do?width=180&height=84&\" + Date.now();\n        let code = java.getVerificationCode(imgurl);\n        let u = \"https://www.lofter.com/lpt/getCaptchaPlus.do?_=\" + Date.now();\n        post = JSON.stringify({\n            method: \"POST\",\n            \"body\": \"phone=\" + phone + \"&imageCode=\" + code + \"&clientType=0&sourceType=1&countryCode=86\",headers: {Cookie: co}\n        });\n   //     java.log(post)\n        let r = java.ajax(u + \",\" + post);\n    //    java.log(r);\n        java.toast(JSON.parse(r).desc)\n    }\n}\n\nfunction cap(){\n    //验证验证码\n         try{\n    let token = source.getLoginHeaderMap().get(\"lofter-phone-login-auth\");\n    let co = \"LOFTER-PHONE-LOGIN-AUTH=\\\"\" + token + \"\\\";LofterInnerBrowser=true;\"\n    co += cookie.getCookie(\"https://www.lofter.com\");\n    \n        let phone = String(source.get(\"phone\"));\n        java.toast(\"当前验证手机号：\\n\" + phone);\n        u = \"https://www.lofter.com/newweb/phone/checkPhoneCaptcha.json?_=\" + Date.now();\n        post = JSON.stringify({\n            method: \"POST\",\n            \"body\": {\n                \"countryCode\": 86,\n                \"phone\": phone,\n                \"captcha\": result.get(\"账号风险验证码\"),\n                \"device\": String(java.androidId())\n            }\n        });\n        //java.log(post)\n         r =\tjava.post(u,JSON.stringify({\n                \"countryCode\": 86,\n                \"phone\": result.get(\"账号\"),\n                \"captcha\": result.get(\"账号风险验证码\"),\n                \"device\": String(java.androidId())\n            }),{Cookie: String(co),\"content-type\":\"application/json;charset=UTF-8\"}).body();\n     //\tjava.log(r);\n        java.toast(JSON.parse(r).msg)\n         }catch(e){\n             java.log(e)\n         }\n}\n\n\nfunction getCode() {\n    try {\n        let imgurl = \"https://www.lofter.com/lpt/photoCaptcha/getPhotoCaptcha.do,\" + JSON.stringify({\n            \"method\": \"POST\",\n            \"body\": \"width=270&height=126\"\n        });\n        //\tjava.log(imgurl)\n        java.toast(\"请输入图片验证码\");\n        let code = java.getVerificationCode(imgurl);\n        let codeurl = \"https://www.lofter.com/lpt/getCaptchaPlus.do,\" + JSON.stringify({\n            \"method\": \"POST\",\n            \"body\": \"clientType=0&phone=\" + result.get(\"账号\") + \"&sourceType=0&imageCode=\" + code\n        });\n        java.toast(JSON.parse(java.ajax(codeurl)).desc)\n        //\tjava.log(java.ajax(codeurl))\n    } catch (e) {\n        java.log(e)\n    }\n}\n\nfunction toLogin(type) {\n    let url = \"https://www.lofter.com/lpt/login.do?product=lofter-android-8.3.20,\";\n    let phone = result ? result.get(\"账号\") : \"\";\n    let pwd = result ? result.get(\"密码[或短信验证码]\") : \"\";\n    let body = \"\";\n    switch (type) {\n        case 'phone':\n            body = `deviceType=0&clientType=0&passport=${java.digestHex(pwd,\"SHA-256\")}&phone=${phone}&sourceType=0&type=0`\n            break;\n\n        case 'code':\n            body = `deviceType=0&clientType=0&phone=${phone}&captcha=${pwd}&sourceType=0&type=1`\n            break;\n\n        case 'id':\n            url = \"https://www.lofter.com/lpt/account/login.do?product=lofter-android-8.3.20,\";\n            body = `password=${java.digestHex(pwd,\"SHA-256\")}&blogName=${phone}`;\n            break;\n    }\n\n    let post = JSON.stringify({\n        \"method\": \"POST\",\n        \"body\": String(body)\n    });\n    //\tjava.log(post)\n    let headers = {}\n    let d = JSON.parse(java.ajax(url + post));\n    java.toast(d.desc);\n\n    if (d.result == 0) {\n        headers[\"lofter-phone-login-auth\"] = d.token;\n        source.putLoginHeader(JSON.stringify(headers));\n    } else if (type == \"id\" && d.status == 200) {\n\n        headers[\"authorization\"] = \"ThirdParty \" + d.token;\n        source.putLoginHeader(JSON.stringify(headers));\n\n    }\n}",
  "respondTime": 183050,
  "ruleBookInfo": {
    "author": "$.response.blogInfo.blogNickName||$.response.posts[0].post.blogInfo.blogNickName||$.data.blogInfo.blogNickName",
    "canReName": "1",
    "coverUrl": "$.response.collection.coverUrl||$..firstImageUrl[0]||$..coverUrl||$..blogInfo.bigAvaImg||$..bigAvaImg@put:{\"page\":\"$.response.blogInfo.blogStat.publicPostCount\"}##(http.*)\\n*##$1###",
    "init": "<js>\n/*\ntry{\ncoo = cookie.getCookie(\"https://www.lofter.com\");\n\nlofter = String(coo).match(/;\\s(LOFTER-[^-]+-LOGIN-AUTH)=(.*?);/);\n\nheader = {};\nheader[lofter[1]] = lofter[2];\n\nsource.putLoginHeader(JSON.stringify(header));\nresult;\n}catch(e){\n\tjava.log(e)\n\tresult = result\n}\n*/\ncookie.removeCookie(\"https://www.lofter.com/\");\ncookie.removeCookie(\"📖Lofter\");\nif(/origin/.test(baseUrl)){\nurl = baseUrl.split(',{\"origin')[0];\njava.put(\"url\",url)\nresult = java.ajax(url);\n}\nresult\n</js>",
    "intro": "@js:\na='{{$.response.collection.description}}';\nb='{{$.response.blogInfo.blogNickName}}';\nc=java.getString('$.response.posts[0].post.digest||$.response.collection.description||$.response.blogInfo.selfIntro');\n\nbook.putCustomVariable(\"h:\"+String(java.getString(\"$..homePageUrl\")).replace(/\\n.*/g,'')+\"\\n\"+\"p:\"+String(java.getString(\"$..blogPageUrl\")).replace(/\\n.*/g,''));\n\nresult =\"&emsp;&emsp;\"+c;\n\ncname=\"{{$.response.posts[0].post.postCollection.name}}\";\n\ncdes=java.getString('$.response.posts[0].post.postCollection.description');\nccount=\"{{$.response.posts[0].post.postCollection.postCount}}\";\nif(cname || a){\nresult=result+\"\\n&lrm;\\n🈴所属合集：\"+cname+\"\\n📜合集介绍：\"+cdes+\"\\n\"+\"🔢合集章节总数：\"+ccount\n+\"\\n🔍搜索合集：#\"+cname+\"<关闭精确搜索>\";\n\nresult = String(result).replace(/📜合集介绍：\\n/,'').replace(/🈴所属合集：\\s+🔢合集章节总数：\\s+🔍搜索合集：#<关闭精确搜索>/g,'')\n}\n\nresult += `<br>&lrm;<br>--复制下面的文字，可将作者添加发现或者订阅--<br>&lrm;<br>${book.author}::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-7.4.4,{\"method\":\"POST\",\"body\":\"supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain=${String(java.getString(\"$..blogInfo.blogName\")).match(/(.*)\\n*/)[1]}.lofter.com&offset={\\{(page-1)*18}}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}`",
    "kind": "$.postCollection\n@js:\nname = String(java.getString(\"$..blogInfo.blogName\")).match(/(.*)\\n*/)[1];\nbook.putVariable(\"name\",name);\nresult",
    "name": "$.response.collection.name||$..post.title||$.data.grainInfo.name||$..post.digest||$.response.blogInfo.blogNickName||$.response.posts[0].post.blogInfo.blogNickName||$.data.blogInfo.blogNickName##</*\\w.*?>",
    "tocUrl": "$.response.blogsetting.blogId\n@js:\nif(result){\nid='{{$.response.blogsetting.blogId}}';\nlink='{{$.response.blogLink}}';\nurl='http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-6.9.2,';\npost={\"method\": \"POST\",\n\"body\": \"targetblogid=\"+id+\"&supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain=\"+link+\"&offset=0&method=getPostLists&postdigestnew=1&returnData=1&limit=500&checkpwd=1&needgetpoststat=1\"}\nresult=url+JSON.stringify(post);\njava.put('url',result)}else if(baseUrl.match(/postCollection/)){\nresult=java.get('url')\n}",
    "wordCount": "{{$.data.grainInfo.postCount}}篇文章##^篇文章$"
  },
  "ruleContent": {
    "content": "<js>\nlet srcall = src;\nif(/\\.mp4/.test(baseUrl)){\n\tjava.startBrowser(baseUrl,\"视频\");\n\tresult = \"请点击章节链接观看视频\\n视频链接：\"+baseUrl\n\t}else{\nlet returnContent = \"\";\t\t\nlet returnimages = [];\nlet content = String(java.getString(\"$..content\"));\nlet pics = JSON.parse(src)?.data?.plan?.images??[];\nlet posts = JSON.parse(src)?.response?.posts??[];\nposts.forEach(x=>{\n\t   let returnContents = x.post?.returnContent??[];\n\t   returnContents.forEach(y=>{\n\t   \t\t   \treturnContent += \"\\n🏷 \"+y.planTypeName+\"\\n\"+y.content+\"\\n\";\n\t   \t\t   \ty.images?returnimages.concat(y.images):null;\n\t   \t})\n\t});\n\t\nif(pics){\n\tpics=pics.map(x=>`<img src=\"${x.raw}\">\\n`).join(\"\");\n\t}\nlet postid = java.getString(\"$..post.id\");\nlet blogid = java.getString(\"$..post.blogId\");\nlet f = 0;\ntry{\n\tbook.getVariable();\n\tf = 1;\n\t}catch(e){\t}\nlet dpcontent = \"\";\nif(/段评|1/.test(source.getVariable()) && f===1){\n    java.log(\"段评\")\nif(!/myReturnGift/.test(baseUrl)){\n\tlet api = `https://api.lofter.com/comment/pCommentCounts.json?postId=${postid}&blogId=${blogid}`;\n  let pidall = JSON.parse(java.ajax(api)).data.list;\n  java.put(\"pidall\",JSON.stringify(pidall));\n  java.put(\"postid\",String(postid));\n  java.put(\"blogid\",String(blogid));\n\tjava.setContent(content);\n\tlet c = \"\";\n\tcontent = java.getElements(\"@@tag.p\").toArray().map((x,i)=>{\n\t\tvar pid = String(x.attr(\"id\"));\n\t\tvar originalText = x.html(); \n   var matchedItem = pidall.find(function(item) {\n       \n       if(/^p_i\\d+$/.test(item.pid)){\n           pid = \"p_i\"+i;\n       }\n       \n        return item.pid === pid && item.count!==0;\n    });\n    if (matchedItem && String(x.text()).trim()!==\"\") {\n        var comment_total = matchedItem.count;                 \n        var pid = matchedItem.pid;                                 \n        var imageOrContent = getImage(comment_total, postid, blogid, pid);\n        return originalText+imageOrContent;      \n    }else{\n    \t return originalText\n    \t}\n\t\t}).join(\"\\n\");\n        if(returnContent.trim()!==\"\"){\n            content = content+returnContent\n        }\n\t}else if(/myReturnGift/.test(baseUrl) && String(content).trim()!==\"\"){\n   pidall = JSON.parse(java.get(\"pidall\"));  \n   content = content.split(\"\\n\").map((x,i)=>{\n\t\t\t   originalText = String(x);\n\t\t\t   matchedItem = pidall.find(function(item,index) {\t\t\t    \n\t\t\t   \n           return (item.pid.match(/r_.*?_i(\\d+)/)?item.pid.match(/r_.*?_i(\\d+)/)[1]:item.pid) == i;\t\t\t\n    });\n\t\t\t\n\t\t\tif (matchedItem) {\n         comment_total = matchedItem.count;                 \n         pid = matchedItem.pid;                               \n         imageOrContent = getImage(comment_total, java.get(\"postid\"), java.get(\"blogid\"), pid);\n        return originalText.replace(/\\s+$/g,'')+imageOrContent;      \n    }else if(originalText.trim()!==\"\"){\n    \t   return originalText\n    \t}\n\t\t\t}).join(\"\\n\");\n}\n\njava.setContent(srcall);\n}else{    \n    if(returnContent.trim()!==\"\"){    \t\n            content = content.match(/<p[^>]*>[\\s\\S]*?<\\/p>/g).join(\"\")+returnContent\n     }\n}\n\nimgs = eval(String(java.getString(\"$..photoLinks\")));\nvideo =/video_down_url\\\\\":\\\\\"(.*?)\\\\\"/.test(result)? \"视频链接：\"+String(result).match(/video_down_url\\\\\":\\\\\"(.*?)\\\\\"/)[1]:\"\";\nimg = \"\";\nimgs?imgs.forEach(x=>{\n\tx?img += \"<img src=\\\"\"+x.orign.replace(/%7C.*/g,'')+\"\\\">\\n\":\"\"\n\t}):\"\";\ng=\t(/myReturnGift/.test(baseUrl)&&(/[\\u4e00-\\u9fa5]/.test(content) || pics))?\"🏷 \"+java.getString(\"$..planType.name\")+\" \"+java.getString(\"$.data.plan.title\")+\"\\n\"+(String(java.getString(\"$..promotion\"))?\"【\"+java.getString(\"$..promotion\")+\"】\\n\":\"\"):\"\";\n\n\nresult = g + content + pics+ \"\\n\"+img+\"\\n\"+video;\n\nif(video && (chapter.index == book.durChapterIndex)){\n \tjava.startBrowser(video.replace(/视频链接：/,''),\"内容\");\n \tresult = \"❗️刷新本章节播放视频❗️\"+result;\n \t\t\t}\n}\nif(result ==\"\\n\\n\")result = String(java.getString(\"$..msg\")).replace(/success/g,'');\nresult = result.replace(/<img[^>]*?src[^>]*?prompt_list_risk[^>]*?>/g,'').replace(/<a[^>]*?store-vip\\/verify-phone\"[^>]*?>/,'当前账号存在风险，需验证。\\n（❗️要看彩蛋请完成验证后刷新正文）\\n1、点击登录。\\n2、点击获取账号风险验证码\\n3、填入验证码\\n4、点击立即验证\\n5、提示成功即可刷新正文获取内容');\nresult\n</js>\n##tbc\\.|没有赠礼记录|【成为我的高级粉丝，解锁我的回礼与海量权益】##<br>",
    "imageStyle": "FULL",
    "nextContentUrl": "<js>\nif(!/myReturnGift/.test(baseUrl)){\ntry{\n\t\tid = java.getString(\"$..post.id\");\n\t\tid2 = java.getString(\"$..post.blogId\");\nurl =\"https://api.lofter.com/v1.1/trade/gift/post/newSupportInfo?postId=\"+id+\"&blogId=\"+id2+\"&openFansVipPlan=0&vipFans=0\";\n\t$  = JSON.parse(String(java.ajax(url)));\n\tl = $.data.gainReturnGifts.length?$.data.gainReturnGifts:$.data.returnGifts;\n\tls = []\n\tl.forEach(x=>{\n\t\turl = \"https://api.lofter.com/v1.1/trade/gift/myReturnGift?id=\"+x.id+\"&postId=\"+id+\"&blogId=\"+id2;\n\t\tls.push(url)\n\t\t})\n\tresult = ls\n\t}catch(e){\n\t\t}\n\t}\n</js>",
    "replaceRegex": "<js>\nresult = result.replace(/src=\"((?:(?!.*;base64,).)*)\"/g,`src=\"$1,{'headers':{'referer':'{{$..blogPageUrl}}'}}\"`)\n.replace(/(🏷 .*\\n)([\\s\\S]+?)\\n*(🏷.*\\n(?:【.*】\\n)*\\2)/g,'$3')\n</js>"
  },
  "ruleExplore": {
    "author": "$.post.blogInfo.blogNickName",
    "bookList": "<js>result.replace(/null/g,'')</js>\n$.response.items[*]||$.response.posts[*]||$.response.collections[*]||$.data.collections[*]",
    "bookUrl": "@js:url='{{$.post.blogId||$.post.blogPageUrl}}';\nid='{{$.post.id||$.id||$.collectionId}}';\nbody=\"targetblogid=\"+url+\"&postid=\"+id;\nresult='https://api.lofter.com/oldapi/post/detail.api?product=lofter-android-8.3.20,{\"method\":\"POST\",\"body\":\"'+String(body)+'\"}';\nif(!url){\n\tblogid = baseUrl.match(/(\\d+)❌/)?.[1]||java.getString(\"$.blogId\");\t result=`https://api.lofter.com/v1.1/postCollection.api?product=lofter-android-8.3.20,{\"method\": \"POST\",\"body\":\"targetblogid=${blogid}&method=getCollectionSimple&offset=0&limit=2000&blogid=${blogid}&collectionid=${id}&order=1\"}`;\n\t}",
    "coverUrl": "$.post||$.coverUrl\n@js:if(result.match(/firstImageUrl=\\[\"\",\"\"\\]/)){\nresult=result.match(/bigAvaImg=(.*?),/)?result.match(/bigAvaImg=(.*?),/)[1]:'';}else if(/^http/.test(result)){\n\tresult = result\n\t}else{\nresult=result.match(/firstImageUrl=\\[\"([^\"]+)\"/)?result.match(/firstImageUrl=\\[\"([^\"]+)\"/)[1]:\"\"\n}",
    "intro": "{{$.post.digest}}\n<br>&lrm;<br>\n--复制下面的文字，粘贴至发现规则添加用户--\n{{$.post.blogInfo.blogNickName}}::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-8.3.20,{\"method\":\"POST\",\"body\":\"targetblogid={{$.post.blogInfo.blogId}}&supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain={{$.post.blogInfo.blogName}}.lofter.com&offset={{'\\{\\{(page-1)*18\\}\\}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}'}}\n@js:\nif(/❌/.test(baseUrl)){\n\tresult = `<br>&lrm;<br>\n--复制下面的文字，粘贴至发现规则添加用户--\n${baseUrl.match(/❌(.*)$/)[1]}::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-8.3.20,{\"method\":\"POST\",\"body\":\"targetblogid=${baseUrl.match(/(\\d+)❌/)[1]}&supportposttypes=1%2C2%2C3%2C4%2C5%2C6&offset={{'\\{\\{(page-1)*18\\}\\}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}'}}`\n\t}\nresult",
    "kind": "$.post.tag||$.tags",
    "lastChapter": "$.post.publishTime||$.postCount||$.unreadCount\n<js>\nif(/\\d{13}/.test(result)){\nresult=java.timeFormat(parseInt(result));\njava.put('time',result)\n}else{\n\tresult = result+\"篇文章\"\n\tif(String(java.getString(\"$.unreadCount\")))result=\"更新\"+result\n\t}\n</js>\n##^篇文章$",
    "name": "$.post.title||$.post.noticeLinkTitle||$.post.digest||$.post.blogInfo.blogId||$.post.blogPageUrl||$.name##</*\\w.*?>"
  },
  "ruleSearch": {
    "author": "$.blogInfo.blogNickName||$.blogName",
    "bookList": "$..postData[*]||$.data.posts[*]||$.data.blogs[*]||$.data.collections[*]||$.data.grainList[*]",
    "bookUrl": "$.postPageUrl\n@js:\nif(!result){\n    if(!'{{$.name}}'){\n        id='{{$.blogId}}';\n        result='http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-8.3.20,{\"method\": \"POST\",\"body\":\"targetblogid='+id+'&method=getBlogInfoDetail&returnData=1&checkpwd=1&needgetpoststat=1\"}'\n    }else if(/grain.json/.test(baseUrl)){\n        result = \"https://api.lofter.com/api-grain/grain/getDetail.json?grainId={{$.id}}&offset=0&grainUserId={{$.userId}}\"\n    }else{\n        blogid='{{$.blogId}}';\n        id='{{$.id}}';\n        name='{{$.blogName}}';\n        java.put('name',name);\n        result='https://api.lofter.com/v1.1/postCollection.api?product=lofter-android-8.3.20,{\"method\": \"POST\",\"body\":\"blogdomain='+name+'.lofter.com&method=getCollectionSimple&offset=0&limit=2000&blogid='+blogid+'&collectionid='+id+'&order=1\"}';\n        java.put('url',result)\n    }\n}else{\n    body=\"blogdomain=_blogid_{{$.blogId}}.lofter.com&postid={{$.id}}\";\n    result='https://api.lofter.com/oldapi/post/detail.api?product=lofter-android-8.3.20,{\"method\":\"POST\",\"body\":\"'+String(body)+'\"}';\n};\n",
    "checkKeyWord": "我们也玩点不一样的",
    "coverUrl": "$.firstImageUrl[0]||$.blogInfo.bigAvaImg||$.bigAvaImg||$.coverUrl",
    "intro": "{{$.digest||$.selfIntro||$.posts[0].digest||$.description}}",
    "kind": "$.tagList||$.tags",
    "lastChapter": "$.publishTime\n<js>\nlet title = java.getString('$.posts[0].title||$.posts[0].digest');\nif(result){\nresult?result=java.timeFormat(parseInt(result)):'';\njava.put('time',result)}else if(title){\n\tresult = title\n\t}else{\n\tresult = \"{{$.postCount}}篇文章\"\n}</js>\n##</*\\w+.*?>|^0*篇文章$|^篇文章$",
    "name": "$.title||$.noticeLinkTitle||$.digest||$.blogInfo.blogNiceName||$.blogNickName||$.name\n<js>\nprefix = java.get(\"prefix\");\nresult = /[@#%＃]/.test(prefix)?prefix+result:result\n</js>\n##</*\\w.*?>"
  },
  "ruleToc": {
    "chapterList": "$..posts[*]||$.response.items[*]@put:{\"blogname\":\"$..blogName\"}\n<js>\n\nif(result.length){\n\t   java.put(\"chapterlength\",result.length);\n   \tresult\n\t}else{\n\t\tjava.put(\"chapterlength\",1);\n\t\t\"[{'title':'暂无目录'}]\"\n\t\t}\n</js>\n$.[*]",
    "chapterName": "$.post.title||$.post.digest||$.post.blogInfo.blogNickName||$..postView.title||$..postView.digest||$.title\n<js>if(result){\nresult=result\n}else{result=book.name}\nString(result).replace(/<\\/*\\w.*?>/g,'')\n</js>\n##(^.{1,25})##$1###",
    "chapterUrl": "<js>\nlet h = String(java.getString(\"$..homePageUrl\")).replace(/\\n.*/g,'');\nlet p = String(java.getString(\"$..blogPageUrl\"));\nlet r = (p || h).replace(/https?/,'lofter').replace(/com$/,'com/');\nlet js = `\"js\":\"if(!book)java.openUrl('${r}')\"`\n\t\nif(/postCollection|blogHomePage|api-grain/.test(baseUrl)){\tbody=\"blogdomain=_blogid_{{$.post.blogId||$..postView.blogId}}.lofter.com&postid={{$.post.id||$..postView.id}}&needgetpoststat=1&supportposttypes=1,2,3,4,5,6&requestType=0\";\nresult=`https://api.lofter.com/oldapi/post/detail.api?product=lofter-android-8.3.20,{\"method\":\"POST\",\"body\":\"${String(body)}\"}`\n\t}else\tif(/video_down_url\":\"(.*?)\"/.test(result)){\n\t\tresult = String(result).match(/video_down_url\":\"(.*?)\"/)[1]\n\t\t}else{\n\t\t\tresult = baseUrl\n\t\t\t}\nresult = /}$/.test(result)?result.replace(/}$/,`,${js}}`):result+`,{${js}}`;\n</js>",
    "nextTocUrl": "<js>\nlist=[];\nif(/limit=500/.test(baseUrl)){\npages=java.get(\"page\");\npage=parseInt(pages/500);\nurl=String(java.get(\"url\"));\nif(page>6){\npage=6\n}else{page=page}\nfor(i=1;i<=page;i++){\nlist.push(url.replace(/offset=\\d+/,'offset='+(parseInt(i)*500)))\n}\n}else if(/api-grain/.test(baseUrl)){\n\toffset = \"{{$.data.offset}}\";\n\tif(offset!=\"-1\"){\n\tlist = baseUrl.replace(/offset=\\d+/,'offset='+offset);\n}\n\t}\nlist\n</js>",
    "updateTime": "$.post.publishTime\n<js>\nif(/api-grain/.test(baseUrl)){\n\tresult = \"所属合集：\"+java.getString(\"$..postCollection.name\");\n\t}else{\n(result?java.timeFormat(parseInt(result)):java.get('time'))+\" \"+\"所属合集：\"+java.getString(\"$..postCollection.name\")\n}\n</js>\n##所属合集：$"
  },
  "searchUrl": "@js:\n\nlet prefix = key.charAt(0);\njava.put(\"prefix\",prefix);\nlet offset = '{\\{(page-1) *' + (prefix === '%' ? '10}' : (prefix === '@' ? '10}' : '20}')) + '}';\nlet baseUrl = \"https://api.lofter.com/newsearch/\"\nswitch(prefix) {\n    case '@':\n        result = baseUrl+'blog.json?key=' + key.slice(1)+ '&limit=10&offset=' + offset;\n        break;\n    case '#':\n    case '＃':\n        result = baseUrl+'collection.json?key=' + key.slice(1) + '&limit=20&offset=' + offset;\n        break;\n    case '%':\n        result = baseUrl+'grain.json?key='+key.slice(1)+'&limit=10&offset=' + offset;\n        break;\n    default:\n        let header = {\n            \"headers\": {\n                \"Content-Type\": \"application/x-www-form-urlencoded;charset=utf-8\",\n                \"deviceid\": java.androidId(),\n                \"if-modified-since\": String(new Date()).replace(/(.*?)\\s(.*?)\\s(.*?)\\s(.*?)GMT.*/,'$1, $3 $2 $4 GMT')\n            }\n        };\n        result = baseUrl+'post.json?key=' + key + '&sortType=0&offset=' + offset + '&limit=20,' + JSON.stringify(header);\n}\n",
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
