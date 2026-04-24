// @name 乐乎文章（优）
// @version 2025.10.01
// @author converted
// @url https://newsmiss.lofter.com
// @enabled true
// @tags 特殊,书源,小说,converted
// @description 需登录
// @description ◎搜索格式◎
// @description 1、搜索用户<关闭精确搜索>
// @description @用户名
// @description 2、搜索合集<关闭精确搜索>
// @description #合集

const LEGADO_SOURCE = {
  "bookSourceComment": "需登录\n◎搜索格式◎\n1、搜索用户<关闭精确搜索>\n@用户名\n2、搜索合集<关闭精确搜索>\n#合集\n3、搜索粮单\n%粮单名<关闭精确搜索>\n4、搜索文章，直接搜索\n\n发现规则格式\n                                    🏷标签\n标签名::https://api.lofter.com/oldapi/tagPosts.api?product=lofter-android-6.13.0&method=newTagSearch&offset={{(page-1) *22}}&limit=22&firstpermalink=null&tag=标签名&type=new,{\"method\": \"POST\",\"body\":\"null\"}\n📃用户（搜索可以得到)\n部分目录章节比较多，加载时间久，出现目录加载失败，请尝试刷新，因为可能是请求失败导致的",
  "bookSourceGroup": "特殊 书源",
  "bookSourceName": "乐乎文章（优）",
  "bookSourceType": 0,
  "bookSourceUrl": "https://newsmiss.lofter.com",
  "customButton": false,
  "customOrder": 342,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "              ----------     🏷标签     ----------               ::\n金桐::https://api.lofter.com/oldapi/tagPosts.api?product=lofter-android-6.13.0&method=newTagSearch&offset={{(page-1) *22}}&limit=22&firstpermalink=null&tag=金桐&type=new,{\"method\": \"POST\",\"body\":\"null\"}\n\n               ----------     📃用户     ----------               ::\n砂上雪::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-6.13.0,{\"method\":\"POST\",\"body\":\"targetblogid=514131314&supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain=taste-s.lofter.com&offset={{(page-1)*18}}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}\n\n",
  "header": "{\n\"Content-Type\": \"application/x-www-form-urlencoded;charset=utf-8\"}",
  "lastUpdateTime": 1759350668385,
  "loginUrl": "https://www.lofter.com/front/account/login?theme=lofter#login",
  "respondTime": 2608,
  "ruleBookInfo": {
    "author": "$.response.blogInfo.blogNickName||$.response.posts[0].post.blogInfo.blogNickName||$.data.blogInfo.blogNickName",
    "canReName": "1",
    "coverUrl": "$.response.collection.coverUrl@put:{\"page\":\"$.response.blogInfo.blogStat.publicPostCount\"}",
    "init": "<js>\ntry{\ncookie = cookie.getCookie(\"https://newsmiss.lofter.com\");\n\nlofter = String(cookie).match(/;\\s(LOFTER-[^-]+-LOGIN-AUTH)=(.*?);/);\n\nheader = {};\nheader[lofter[1]] = lofter[2];\nsource.putLoginHeader(JSON.stringify(header));\nresult;\n}catch(e){\n\tresult = result\n\t}\n</js>",
    "intro": "@js:\na='{{$.response.collection.description}}';\nb='{{$.response.blogInfo.blogNickName}}';\nc=java.getString('$.response.posts[0].post.digest||$.response.collection.description||$.response.blogInfo.selfIntro');\n\nresult =c;\n\ncname=\"{{$.response.posts[0].post.postCollection.name}}\";\ncdes=java.getString('$.response.posts[0].post.postCollection.description');\nccount=\"{{$.response.posts[0].post.postCollection.postCount}}\";\nif(cname){\nresult=result+\"\\n&lrm;\\n🈴所属合集：\"+cname+\"\\n📜合集介绍：\"+cdes+\"\\n\"+\"🔢合集章节总数：\"+ccount\n+\"\\n🔍搜索合集：#\"+cname+\"<关闭精确搜索>\";\n\nString(result).replace(/📜合集介绍：\\n/,'')+String(book.intro).replace(/([\\s\\S]+?)--复制/,'<br>&lrm;<br>--复制').replace(/.*?::/,book.author+'::')\n}else{\tString(book.intro).replace(/.*?::/,book.author+'::')\n\t}",
    "kind": "$.postCollection",
    "name": "$.response.collection.name",
    "tocUrl": "$.response.blogsetting.blogId\n@js:\nif(result){\nid='{{$.response.blogsetting.blogId}}';\nlink='{{$.response.blogLink}}';\nurl='http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-6.9.2,';\npost={\"method\": \"POST\",\n\"body\": \"targetblogid=\"+id+\"&supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain=\"+link+\"&offset=0&method=getPostLists&postdigestnew=1&returnData=1&limit=500&checkpwd=1&needgetpoststat=1\"}\nresult=url+JSON.stringify(post);\njava.put('url',result)}else if(baseUrl.match(/postCollection/)){\nresult=java.get('url')\n}",
    "wordCount": "{{$.data.grainInfo.postCount}}篇文章##^篇文章$"
  },
  "ruleContent": {
    "content": "<js>\nif(/\\.mp4/.test(baseUrl)){\n\tresult = \"请点击章节链接观看视频\\n视频链接：\"+baseUrl\n\t}else{\ncontent = java.getString(\"$..content\");\nimgs = eval(String(java.getString(\"$..photoLinks\")));\nvideo =/video_down_url\\\\\":\\\\\"(.*?)\\\\\"/.test(result)? \"视频链接：\"+String(result).match(/video_down_url\\\\\":\\\\\"(.*?)\\\\\"/)[1]:\"\";\nimg = \"\";\nimgs?imgs.forEach(x=>{\n\tx?img += \"<img src=\\\"\"+x.orign.replace(/%7C.*/g,'')+\"\\\">\\n\":\"\"\n\t}):\"\";\ng=\t(/myReturnGift/.test(baseUrl)&&/[\\u4e00-\\u9fa5]/.test(content))?\"🏷 彩蛋 \"+java.getString(\"$..promotion\")+\"\\n\":\"\";\n\nresult = g+ content + \"\\n\"+img+\"\\n\"+video;\n\nif(video && (chapter.index == book.durChapterIndex)){\n \tjava.startBrowser(video.replace(/视频链接：/,''),\"内容\");\n \tresult = \"❗️刷新本章节播放视频❗️\"+result;\n \t\t\t}\n}\nif(result ==\"\\n\\n\")result = \"{{$..msg}}\";\nresult\n</js>\n##tbc\\.##<br>&lrm;<br>",
    "imageStyle": "FULL",
    "nextContentUrl": "<js>\nif(!/myReturnGift/.test(baseUrl)){\ntry{\n\t\tid = java.getString(\"$..post.id\");\n\t\tid2 = java.getString(\"$..post.blogId\");\nurl =\"https://api.lofter.com/v1.1/trade/gift/post/newSupportInfo?postId=\"+id+\"&blogId=\"+id2+\"&openFansVipPlan=0&vipFans=0\";\n//java.log(JSON.parse(String(java.ajax(url))).code)\n\t$  = JSON.parse(String(java.ajax(url)));\n//\tjava.log(JSON.stringify($))\n\tl = $.data.gainReturnGifts.length?$.data.gainReturnGifts:$.data.returnGifts;\n\tls = []\n\tl.forEach(x=>{\n\t\turl = \"https://api.lofter.com/v1.1/trade/gift/myReturnGift?id=\"+x.id+\"&postId=\"+id+\"&blogId=\"+id2;\n\t\tls.push(url)\n\t\t})\n\tresult = ls\n\t}catch(e){\n\t\t}\n\t}\n</js>",
    "replaceRegex": "##src=\"(.*?)\"##src=\"$1,{'headers':{'referer':'{{$..blogPageUrl}}'}}\""
  },
  "ruleExplore": {
    "author": "$.post.blogInfo.blogNickName",
    "bookList": "<js>result.replace(/null/g,'')</js>\n$.response.items[*]||$.response.posts[*]",
    "bookUrl": "@js:url='{{$.post.blogId||$.post.blogPageUrl}}';\nid='{{$.post.id}}';\nmain=url.match(/_blogid_\\d+/)?url.match(/_blogid_(\\d+)/)[1]:url;\nbody=\"blogdomain=_blogid_\"+main+\".lofter.com&postid=\"+id;\nresult='https://api.lofter.com/oldapi/post/detail.api?product=lofter-android-7.4.4,{\"method\":\"POST\",\"body\":\"'+String(body)+'\"}';",
    "coverUrl": "$.post\n@js:if(result.match(/firstImageUrl=\\[\"\",\"\"\\]/)){\nresult=result.match(/bigAvaImg=(.*?),/)?result.match(/bigAvaImg=(.*?),/)[1]:'';}else{\nresult=result.match(/firstImageUrl=\\[\"([^\"]+)\"/)?result.match(/firstImageUrl=\\[\"([^\"]+)\"/)[1]:\"\"\n}",
    "intro": "{{$.post.digest}}\n<br>&lrm;<br>\n--复制下面的文字，粘贴至发现规则添加用户--\n{{$.post.blogInfo.blogNickName}}::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-7.4.4,{\"method\":\"POST\",\"body\":\"targetblogid={{$.post.blogInfo.blogId}}&supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain={{$.post.blogInfo.blogName}}.lofter.com&offset={{'\\{\\{(page-1)*18\\}\\}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}'}}",
    "kind": "$.post.tag",
    "lastChapter": "$.post.publishTime\n@js:result=java.timeFormat(parseInt(result));\njava.put('time',result)",
    "name": "$.post.title||$.post.noticeLinkTitle||$.post.digest||$.post.blogInfo.blogId||$.post.blogPageUrl##</*\\w.*?>"
  },
  "ruleSearch": {
    "author": "$.blogInfo.blogNickName||$.blogName",
    "bookList": "$..postData[*]||$.data.posts[*]||$.data.blogs[*]||$.data.collections[*]||$.data.grainList[*]",
    "bookUrl": "$.postPageUrl\n@js:\nif(!result){\n    if(!'{{$.name}}'){\n        id='{{$.blogId}}';\n        result='http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-7.4.4,{\"method\": \"POST\",\"body\":\"targetblogid='+id+'&method=getBlogInfoDetail&returnData=1&checkpwd=1&needgetpoststat=1\"}'\n    }else if(/grain.json/.test(baseUrl)){\n        result = \"https://api.lofter.com/api-grain/grain/getDetail.json?grainId={{$.id}}&offset=0&grainUserId={{$.userId}}\"\n    }else{\n        blogid='{{$.blogId}}';\n        id='{{$.id}}';\n        name='{{$.blogName}}';\n        java.put('name',name);\n        result='https://api.lofter.com/v1.1/postCollection.api?product=lofter-android-7.4.4,{\"method\": \"POST\",\"body\":\"blogdomain='+name+'.lofter.com&method=getCollectionSimple&offset=0&limit=2000&blogid='+blogid+'&collectionid='+id+'&order=1\"}';\n        java.put('url',result)\n    }\n}else{\n    body=\"blogdomain=_blogid_{{$.blogId}}.lofter.com&postid={{$.id}}\";\n    result='https://api.lofter.com/oldapi/post/detail.api?product=lofter-android-7.4.4,{\"method\":\"POST\",\"body\":\"'+String(body)+'\"}';\n};\n",
    "checkKeyWord": "%双女主",
    "coverUrl": "$.firstImageUrl[0]||$.blogInfo.bigAvaImg||$.bigAvaImg||$.coverUrl",
    "intro": "{{$.digest||$.selfIntro||$.posts[0].digest||$.description}}\n<br>&lrm;<br>\n--复制下面的文字，可将用户添加发现或者订阅--\n{{$.blogInfo.blogNickName||$.blogNickName||$.blogName}}::http://api.lofter.com/v2.0/blogHomePage.api?product=lofter-android-6.9.2,{\"method\":\"POST\",\"body\":\"supportposttypes=1%2C2%2C3%2C4%2C5%2C6&blogdomain={{$.blogName||$.blogInfo.blogName}}.lofter.com&offset={{'\\{\\{(page-1)*18\\}\\}&method=getPostLists&postdigestnew=1&returnData=1&limit=18&checkpwd=1&needgetpoststat=1\"}'}}\n<js>\nif(/grain.json/.test(baseUrl)){\nresult =\tresult.replace(/--复制下面[\\s\\S]+/,'')\n\t}\nresult\n</js>",
    "kind": "$.tagList||$.tags",
    "lastChapter": "$.publishTime\n<js>\nif(result){\nresult?result=java.timeFormat(parseInt(result)):'';\njava.put('time',result)}else{\nresult=java.getString('$.posts[0].title||$.posts[0].digest||$.postCount')+\"篇文章\"\n}</js>\n##</*\\w+.*?>|[^\\d]+篇文章|^0*篇文章$",
    "name": "$.title||$.noticeLinkTitle||$.digest||$.blogInfo.blogNiceName||$.blogNickName||$.name\n<js>\nprefix = java.get(\"prefix\");\nresult = /[@#%＃]/.test(prefix)?prefix+result:result\n</js>\n##</*\\w.*?>"
  },
  "ruleToc": {
    "chapterList": "$..posts[*]||$.response.items[*]@put:{\"blogname\":\"$..blogName\"}\n<js>if(result.length){\n\tresult\n\t}else{\n\t\t\"[{'title':'暂无目录'}]\"\n\t\t}\n</js>\n$.[*]",
    "chapterName": "$.post.title||$.post.digest||$.post.blogInfo.blogNickName||$..postView.title||$..postView.digest||$.title\n<js>if(result){\nresult=result\n}else{result=book.name}\nString(result).replace(/<\\/*\\w.*?>/g,'')\n</js>\n##(^.{1,25})##$1###",
    "chapterUrl": "<js>\nif(/postCollection|blogHomePage|api-grain/.test(baseUrl)){\tbody=\"blogdomain=_blogid_{{$.post.blogId||$..postView.blogId}}.lofter.com&postid={{$.post.id||$..postView.id}}\";\nresult='https://api.lofter.com/oldapi/post/detail.api?product=lofter-android-7.4.4,{\"method\":\"POST\",\"body\":\"'+String(body)+'\"}';\n\t}else\tif(/video_down_url\":\"(.*?)\"/.test(result)){\n\t\tresult = String(result).match(/video_down_url\":\"(.*?)\"/)[1];\n\t\t}else{\n\t\t\tresult = baseUrl\n\t\t\t}\n</js>",
    "nextTocUrl": "<js>\nlist=[];\nif(/limit=500/.test(baseUrl)){\npages=java.get(\"page\");\npage=parseInt(pages/500);\nurl=String(java.get(\"url\"));\nif(page>6){\npage=6\n}else{page=page}\nfor(i=1;i<=page;i++){\nlist.push(url.replace(/offset=\\d+/,'offset='+(parseInt(i)*500)))\n}\n}else if(/api-grain/.test(baseUrl)){\n\toffset = \"{{$.data.offset}}\";\n\tif(offset!=\"-1\"){\n\tlist = baseUrl.replace(/offset=\\d+/,'offset='+offset);\n}\n\t}\nlist\n</js>",
    "updateTime": "$.post.publishTime\n<js>\nif(/api-grain/.test(baseUrl)){\n\tresult = \"所属合集：\"+java.getString(\"$..postCollection.name\");\n\t}else{\nresult?java.timeFormat(parseInt(result)):java.get('time')\n}\n</js>\n##所属合集：$"
  },
  "searchUrl": "@js:\nlet prefix = key.charAt(0);\njava.put(\"prefix\",prefix);\nlet offset = '{\\{(page-1) *' + (prefix === '%' ? '10}' : (prefix === '@' ? '10}' : '20}')) + '}';\nlet baseUrl = \"https://api.lofter.com/newsearch/\"\nswitch(prefix) {\n    case '@':\n        result = baseUrl+'blog.json?key=' + key.slice(1)+ '&limit=10&offset=' + offset;\n        break;\n    case '#':\n    case '＃':\n        result = baseUrl+'collection.json?key=' + key.slice(1) + '&limit=20&offset=' + offset;\n        break;\n    case '%':\n        result = baseUrl+'grain.json?key='+key.slice(1)+'&limit=10&offset=' + offset;\n        break;\n    default:\n        let header = {\n            \"headers\": {\n                \"Content-Type\": \"application/x-www-form-urlencoded;charset=utf-8\",\n                \"deviceid\": java.androidId(),\n                \"if-modified-since\": String(new Date()).replace(/(.*?)\\s(.*?)\\s(.*?)\\s(.*?)GMT.*/,'$1, $3 $2 $4 GMT')\n            }\n        };\n        result = baseUrl+'post.json?key=' + key + '&sortType=0&offset=' + offset + '&limit=20,' + JSON.stringify(header);\n}\n",
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
