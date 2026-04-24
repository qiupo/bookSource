// @name 酷我音乐（优）
// @version 2025.12.21
// @author converted
// @url https://www.kuwo.cn
// @enabled true
// @tags 音乐,书源,音频,converted
// @description // v 2023-10-13
// @description // by Thomas喲
// @description //支持  搜索分享链接  获取歌单
// @description //例1： https://www.kuwo.cn/playlist_detail/1082685104
// @description //例2： https://m.kuwo.cn/newh5app/playlist_detail/1082685104
// @description [//自定义歌单_开始

const LEGADO_SOURCE = {
  "bookSourceComment": "// v 2023-10-13\n// by Thomas喲\n//支持  搜索分享链接  获取歌单\n//例1： https://www.kuwo.cn/playlist_detail/1082685104\n//例2： https://m.kuwo.cn/newh5app/playlist_detail/1082685104\n[//自定义歌单_开始\n// 歌单示例\n{\n\t// debug1 是歌单标识\n\t// 具有唯一性(不能重复，也不能命名为 \"id\" )\n\t\"debug1\": {\n\t\t\"name\": \"歌单示例1\", // 书籍名称\n\t\t\"uname\": \"Thomas喲\", // 书籍作者\n\t\t\"tag\": [\"本地歌单\",\"测试\",], // 标签\n\t\t\"desc\": \"歌单示例1，测试\", // 简介\n\t\t\"img\": \"\",// 封面链接\n\t\t\"musicList\": [\n\t\t\n\t\t\n\t\t\n\t\t], // 歌曲目录\n\t\t},\n\t\"debug2\": {\n\t\t}\n},\n// txt按照歌单示例的格式填写\n[file]/storage/emulated/0/自定义路径/本地歌单示例.txt[/file]\n]//自定义歌单_结束",
  "bookSourceGroup": "音乐 书源",
  "bookSourceName": "酷我音乐（优）",
  "bookSourceType": 1,
  "bookSourceUrl": "https://www.kuwo.cn",
  "customButton": false,
  "customOrder": 319,
  "enabled": true,
  "enabledCookieJar": false,
  "enabledExplore": true,
  "eventListener": false,
  "exploreUrl": "@js:\neval(String(source.loginUrl));\nsort = [];\npush = (title, url, type) => sort.push({\n    title: title,\n    url: url,\n    style: {\n        layout_flexGrow: 1,\n        layout_flexBasisPercent: type\n    }\n});\n$$ = (ura, urb) => `data:;base64,{{java.base64Encode(\"${ura+type}发现${urb||\"\"}\")}\\},{\"type\":\"${type}\"}`;\n\n\n\nif ($[\"推荐\"]) {\n    push('༺ 推荐 ༻', null, 1);\n    push('每日推荐', $$('rcm/index/playlist?id=rcm'), 0.4)\n    push('自定歌单', $$('', `${type}本地`), 0.4)\n    push('最新精选', $$('classify/playlist/getRcmPlayList?order=new&pn=\"+page+\"'), 0.4)\n    push('热门精选', $$('classify/playlist/getRcmPlayList?order=hot&pn=\"+page+\"'), 0.4);\n}\n\n\n\nif ($[\"排行\"]) {\n    push('༺ 排行 ༻', null, 1);\n    result = java.hexEncodeToString(`bang/bang/bangMenu?${type}加载`);\n    data = eval(String(source.loginUrl));\n    JSON.parse(data).map($ => {\n        list = $.list.map($ => ({\n            name: $.name,\n            desc: $.intro,\n            img: $.pic,\n            sid: $.sourceid\n        }));\n        list = java.base64Encode(JSON.stringify(list));\n        push($.name, $$(list + type + \"加载\" + type + \"排行\"), 0.25);\n    });\n}\n\n\nx = false;\nfor (key of Arr.slice(2)) {\n    if ($[key]) {\n        x = true;\n        break;\n    }\n}\nif (x) {\n    result = java.hexEncodeToString(`playlist/getTagList?${type}加载`);\n    data = eval(String(source.loginUrl));\n    JSON.parse(data).map(data => {\n        if (data.data.length) {\n            name = data.name.replace('流派', '');\n            if ($[name]) {\n                push('༺ ' + name + ' ༻', null, 1, 1);\n                data.data.map(data => {\n                    push(data.name, $$(`classify/playlist/getTagPlayList?id=${data.id}&pn=\"+page+\"`), 0.2);\n                });\n            }\n        }\n    });\n}\n\nif (!sort.length) push(\"所有的分类都关了，登录打开\", null, 1);\nJSON.stringify(sort);",
  "header": "{\"User-Agent\":\"okhttp/3.10.0\"}",
  "jsLib": "// 常量\ntype = \"#kuwo_cn#\";\nhost = \"https://www.kuwo.cn/\";\n\n\n// 请求头：Secret\nSecret = (e,t) => `<script>\nSecret = function(e,t){\nfor (var n = \"\", i = 0; i < e.length; i++)\n        n += e.charCodeAt(i).toString();\n    n = String(n);\n    var r = Math.floor(n.length / 5),\n        o = parseInt(n.charAt(r) + n.charAt(2 * r) + n.charAt(3 * r) + n.charAt(4 * r) + n.charAt(5 * r)),\n        l = Math.ceil(e.length / 2),\n        c = Math.pow(2, 31) - 1;\n    var d = Math.round(1e9 * Math.random()) % 1e8;\n    for (n += d; n.length > 10;)\n        n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();\n    n = (o * n + l) % c;\n    var h = \"\",\n        f = \"\";\n    for (i = 0; i < t.length; i++)\n        f += (h = parseInt(t.charCodeAt(i) ^ Math.floor(n / c * 255))) < 16 ? \"0\" + h.toString(16) : h.toString(16),\n        n = (o * n + l) % c;\n    for (d = d.toString(16); d.length < 8;)\n        d = \"0\" + d;\n        return f+d;\n}(\"${e}\",\"${t}\");\n</script>`;\n\n\n\n/**\n * 酷我直链解析加密算法\n * 不知道能用多久，先用着吧\n */\nscript = rid => `<script>\nconst Buffer = {\n    from: t => {\n        r = t.length;\n        e = new Uint8Array(r);\n        for (n = 0; n < r; n++)\n            e[n] = t.charCodeAt(n);\n        return e\n    }\n}\nrange = t => Array.from(new Array(t).keys());\nLong = t => {\n    const r = BigInt(t);\n    return {\n        toString: () => r.toString(),\n        isNegative: () => r < 0,\n        not: () => Long(~r),\n        low: Number(r),\n        or: t => Long(r | BigInt(t)),\n        xor: t => Long(r ^ BigInt(t)),\n        and: t => Long(r & BigInt(t)),\n        equals: t => r === BigInt(t),\n        shiftLeft: t => Long(r << BigInt(t)),\n        shiftRight: t => Long(r >> BigInt(t))\n    }\n};\nLongArray = t => t.map(t => Long(t));\n\n\narrayE = LongArray([\n    31, 0, 1, 2, 3, 4, -1, -1,\n    3, 4, 5, 6, 7, 8, -1, -1,\n    7, 8, 9, 10, 11, 12, -1, -1,\n    11, 12, 13, 14, 15, 16, -1, -1,\n    15, 16, 17, 18, 19, 20, -1, -1,\n    19, 20, 21, 22, 23, 24, -1, -1,\n    23, 24, 25, 26, 27, 28, -1, -1,\n    27, 28, 29, 30, 31, 30, -1, -1\n])\narrayIP = LongArray([\n    57, 49, 41, 33, 25, 17, 9, 1,\n    59, 51, 43, 35, 27, 19, 11, 3,\n    61, 53, 45, 37, 29, 21, 13, 5,\n    63, 55, 47, 39, 31, 23, 15, 7,\n    56, 48, 40, 32, 24, 16, 8, 0,\n    58, 50, 42, 34, 26, 18, 10, 2,\n    60, 52, 44, 36, 28, 20, 12, 4,\n    62, 54, 46, 38, 30, 22, 14, 6\n])\narrayIP_1 = LongArray([\n    39, 7, 47, 15, 55, 23, 63, 31,\n    38, 6, 46, 14, 54, 22, 62, 30,\n    37, 5, 45, 13, 53, 21, 61, 29,\n    36, 4, 44, 12, 52, 20, 60, 28,\n    35, 3, 43, 11, 51, 19, 59, 27,\n    34, 2, 42, 10, 50, 18, 58, 26,\n    33, 1, 41, 9, 49, 17, 57, 25,\n    32, 0, 40, 8, 48, 16, 56, 24\n])\narrayLs = [\n    1, 1, 2, 2, 2, 2, 2, 2,\n    1, 2, 2, 2, 2, 2, 2, 1\n]\narrayLsMask = LongArray([0, 1048577, 3145731])\narrayMask = range(64).map(t => Math.pow(2, t))\narrayMask[63] *= -1\narrayP = LongArray([\n    15, 6, 19, 20, 28, 11, 27, 16,\n    0, 14, 22, 25, 4, 17, 30, 9,\n    1, 7, 23, 13, 31, 26, 2, 8,\n    18, 12, 29, 5, 21, 10, 3, 24\n])\narrayPC_1 = LongArray([\n    56, 48, 40, 32, 24, 16, 8, 0,\n    57, 49, 41, 33, 25, 17, 9, 1,\n    58, 50, 42, 34, 26, 18, 10, 2,\n    59, 51, 43, 35, 62, 54, 46, 38,\n    30, 22, 14, 6, 61, 53, 45, 37,\n    29, 21, 13, 5, 60, 52, 44, 36,\n    28, 20, 12, 4, 27, 19, 11, 3\n])\narrayPC_2 = LongArray([\n    13, 16, 10, 23, 0, 4, -1, -1,\n    2, 27, 14, 5, 20, 9, -1, -1,\n    22, 18, 11, 3, 25, 7, -1, -1,\n    15, 6, 26, 19, 12, 1, -1, -1,\n    40, 51, 30, 36, 46, 54, -1, -1,\n    29, 39, 50, 44, 32, 47, -1, -1,\n    43, 48, 38, 55, 33, 52, -1, -1,\n    45, 41, 49, 35, 28, 31, -1, -1\n])\nmatrixNSBox = [\n    [\n        14, 4, 3, 15, 2, 13, 5, 3,\n        13, 14, 6, 9, 11, 2, 0, 5,\n        4, 1, 10, 12, 15, 6, 9, 10,\n        1, 8, 12, 7, 8, 11, 7, 0,\n        0, 15, 10, 5, 14, 4, 9, 10,\n        7, 8, 12, 3, 13, 1, 3, 6,\n        15, 12, 6, 11, 2, 9, 5, 0,\n        4, 2, 11, 14, 1, 7, 8, 13\n    ],\n    [\n        15, 0, 9, 5, 6, 10, 12, 9,\n        8, 7, 2, 12, 3, 13, 5, 2,\n        1, 14, 7, 8, 11, 4, 0, 3,\n        14, 11, 13, 6, 4, 1, 10, 15,\n        3, 13, 12, 11, 15, 3, 6, 0,\n        4, 10, 1, 7, 8, 4, 11, 14,\n        13, 8, 0, 6, 2, 15, 9, 5,\n        7, 1, 10, 12, 14, 2, 5, 9\n    ],\n    [\n        10, 13, 1, 11, 6, 8, 11, 5,\n        9, 4, 12, 2, 15, 3, 2, 14,\n        0, 6, 13, 1, 3, 15, 4, 10,\n        14, 9, 7, 12, 5, 0, 8, 7,\n        13, 1, 2, 4, 3, 6, 12, 11,\n        0, 13, 5, 14, 6, 8, 15, 2,\n        7, 10, 8, 15, 4, 9, 11, 5,\n        9, 0, 14, 3, 10, 7, 1, 12\n    ],\n    [\n        7, 10, 1, 15, 0, 12, 11, 5,\n        14, 9, 8, 3, 9, 7, 4, 8,\n        13, 6, 2, 1, 6, 11, 12, 2,\n        3, 0, 5, 14, 10, 13, 15, 4,\n        13, 3, 4, 9, 6, 10, 1, 12,\n        11, 0, 2, 5, 0, 13, 14, 2,\n        8, 15, 7, 4, 15, 1, 10, 7,\n        5, 6, 12, 11, 3, 8, 9, 14\n    ],\n    [\n        2, 4, 8, 15, 7, 10, 13, 6,\n        4, 1, 3, 12, 11, 7, 14, 0,\n        12, 2, 5, 9, 10, 13, 0, 3,\n        1, 11, 15, 5, 6, 8, 9, 14,\n        14, 11, 5, 6, 4, 1, 3, 10,\n        2, 12, 15, 0, 13, 2, 8, 5,\n        11, 8, 0, 15, 7, 14, 9, 4,\n        12, 7, 10, 9, 1, 13, 6, 3\n    ],\n    [\n        12, 9, 0, 7, 9, 2, 14, 1,\n        10, 15, 3, 4, 6, 12, 5, 11,\n        1, 14, 13, 0, 2, 8, 7, 13,\n        15, 5, 4, 10, 8, 3, 11, 6,\n        10, 4, 6, 11, 7, 9, 0, 6,\n        4, 2, 13, 1, 9, 15, 3, 8,\n        15, 3, 1, 14, 12, 5, 11, 0,\n        2, 12, 14, 7, 5, 10, 8, 13\n    ],\n    [\n        4, 1, 3, 10, 15, 12, 5, 0,\n        2, 11, 9, 6, 8, 7, 6, 9,\n        11, 4, 12, 15, 0, 3, 10, 5,\n        14, 13, 7, 8, 13, 14, 1, 2,\n        13, 6, 14, 9, 4, 1, 2, 14,\n        11, 13, 5, 0, 1, 10, 8, 3,\n        0, 11, 3, 5, 9, 4, 15, 2,\n        7, 8, 12, 15, 10, 7, 6, 12\n    ],\n    [\n        13, 7, 10, 0, 6, 9, 5, 15,\n        8, 4, 3, 10, 11, 14, 12, 5,\n        2, 11, 9, 6, 15, 12, 0, 3,\n        4, 1, 14, 13, 1, 2, 7, 8,\n        1, 2, 12, 15, 10, 4, 0, 3,\n        13, 14, 6, 9, 7, 8, 9, 6,\n        15, 1, 5, 12, 3, 10, 14, 5,\n        8, 7, 11, 0, 4, 13, 2, 11\n    ]\n]\nbitTransform = (t, r, e) => {\n    let n = Long(0);\n    return range(r).forEach(r => {\n        t[r].isNegative() || e.and(arrayMask[t[r].low]).equals(0) || (n = n.or(arrayMask[r]))\n    }), n\n}\nDES64 = (t, r) => {\n        e = [],\n        n = [];\n        f = bitTransform(arrayIP, 64, r);\n    return n[0] = f.and(4294967295),\n    n[1] = f.and(-4294967296).shiftRight(32),\n    range(16).forEach(r => {\n        let f = Long(0);\n        i = Long(n[1]),\n        i = bitTransform(arrayE, 64, i).xor(t[r]),\n        range(8).forEach(t => {\n            e[t] = i.shiftRight(8 * t).and(255)\n        }),\n        range(8).reverse().forEach(t => {\n            f = f.shiftLeft(4).or(matrixNSBox[t][e[t]])\n        }),\n        i = bitTransform(arrayP, 32, f),\n        o = Long(n[0]),\n        n[0] = Long(n[1]),\n        n[1] = o.xor(i)\n    }),\n    n.reverse(),\n    f = n[1].shiftLeft(32).and(-4294967296).or(n[0].and(4294967295)),\n    f = bitTransform(arrayIP_1, 64, f)\n}\nsubKeys = (t, r) => {\n    let n = bitTransform(arrayPC_1, 56, t);\n    range(16).forEach(t => {\n        n = n.and(arrayLsMask[arrayLs[t]]).shiftLeft(28 - arrayLs[t]).or(n.and(arrayLsMask[arrayLs[t]].not()).shiftRight(arrayLs[t])),\n        r[t] = bitTransform(arrayPC_2, 64, n)\n    })\n}\nencrypt = t => {\n    const r = Buffer.from(\"ylzsxkwm\");\n    let n = Long(0);\n    range(8).forEach(t => {\n        n = Long(r[t]).shiftLeft(8 * t).or(n)\n    });\n    const o = Math.floor(t.length / 8),\n        i = range(16).map(() => Long(0));\n    subKeys(n, i);\n    const f = range(o).map(() => Long(0));\n    range(o).forEach(r => {\n        range(8).forEach(e => {\n            f[r] = Long(t[e + 8 * r]).shiftLeft(8 * e).or(f[r])\n        })\n    });\n    const s = [];\n    range(o).forEach(t => {\n        s[t] = DES64(i, f[t])\n    });\n    const u = t.slice(8 * o);\n    let h = Long(0);\n    range(t.length % 8).forEach(t => {\n        h = Long(u[t]).shiftLeft(8 * t).or(h)\n    }), s[o] = DES64(i, h);\n    const a = [];\n    let c = 0;\n    return s.forEach(t => {\n        range(8).forEach(r => {\n            a[c] = t.shiftRight(8 * r).and(255).low;\n            c ++\n        })\n    }), a;\n}\n$exports = function(rid) {\n    // flac|mp3|aac\n    t = 'corp=kuwo&p2p=1&type=convert_url2&format=mp3|aac&rid=' + rid;\n    b = encrypt(Buffer.from(t));\n    return window.btoa(String.fromCharCode.apply(null, b));\n}(${rid})\n</script>`",
  "lastUpdateTime": 1766355189055,
  "loginUi": "[{\n    \"name\": \"　　　　　　　　↓发现设置↓　　　　　　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('全部')\"\n}, {\n    \"name\": \"　　　 推荐 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('推荐')\"\n}, {\n    \"name\": \"　　　 排行 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('排行')\"\n}, {\n    \"name\": \"　　　 主题 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('主题')\"\n}, {\n    \"name\": \"　　　 心情 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('心情')\"\n}, {\n    \"name\": \"　　　 场景 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('场景')\"\n}, {\n    \"name\": \"　　　 年代 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('年代')\"\n}, {\n    \"name\": \"　　　 曲风 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('曲风')\"\n}, {\n    \"name\": \"　　　 语言 　　　\",\n    \"type\": \"button\",\n    \"action\": \"$$('语言')\"\n}]",
  "loginUrl": "try {\n    [uri, t1, t2] = String(java.hexDecodeToString(result)).split(type);\n\n    headers = cache.get(type + 'Headers');\n    if (headers == null) {\n        headers = {\n            'Referer': host\n        };\n        C = java.head(host + 'favicon.ico?v=1', headers).cookies();\n        e = Object.keys(C)[0];\n        t = unescape(C[e]);\n        headers.Cookie = e + '=' + C[e];\n        headers.Secret = java.webView(Secret(e, t), null, \"Secret\");\n        headers = JSON.stringify({\n            headers: headers\n        });\n        cache.put(type + 'Headers', headers, 300);\n    }\n\n    durl = uri => `data:;base64,${java.base64Encode(uri)},{\"type\":\"${type}\"}`;\n    jurl = (uri, rn, v1) => `${host}api/${v1||\"\"}www/${uri}&rn=${rn}&httpsStatus=1&reqId=${java.randomUUID()}&plat=web_www&from=,${headers}`;\n    ajax_data = (url, ajaxerr) => {\n        try {\n            return JSON.parse(java.ajax(url)).data;\n        } catch (err) {\n            return ajaxerr < 2 ? ajax_data(url, ajaxerr + 1) : {};\n        }\n    }\n    run = (rn, v1) => data = ajax_data(jurl(uri, rn, v1), 0);\n    file_data = $id => {\n        list = [];\n        flist = eval(String(source.bookSourceComment).replace(/\\[(file|ajax|js)\\]([\\s\\S]+?)\\[\\/\\1\\]/g, ($0, $1, $2) => {\n            try {\n                switch ($1) {\n                    case 'file':\n                        return java.importScript($2);\n                        break;\n                    case 'ajax':\n                        return java.ajax($2.trim());\n                        break;\n                    case 'js':\n                        return eval($2);\n                        break;\n                }\n            } catch (err) {\n                return \"\";\n            }\n        }).replace(/(\\]|})\\s*,\\s*(\\]|})/g, '$1$2').replace(/}\\s*{/g, '},{'));\n        for ($ of flist) {\n            if ($.id) {\n                list.push($);\n            } else {\n                if ($id) {\n                    if (_ = $[$id]) {\n                        _.fid = $id;\n                        _.total = _.musicList.length;\n                        return _;\n                    }\n                } else {\n                    for (fid of Object.keys($)) {\n                        _ = $[fid];\n                        _.fid = fid;\n                        if (_.musicList && _.musicList.length)\n                            _.total = _.musicList.length,\n                            list.push(_);\n                    }\n                }\n            }\n        };\n        if ($id) return java.toast(\"没找到对应资源\"), {};\n        return list;\n    };\n    switch (t1) {\n\n\n        case '搜索':\n            if (t2)\n                data = [run(1)];\n            else\n                data = run(30).list;\n            data = data.map($ => {\n                $.bookUrl = durl(`playlist/playListInfo?pid=${$.id}&pn=1${type}详情`);\n                return $;\n            });\n            break;\n\n\n        case '发现':\n            if (t2)\n                data = file_data();\n            else\n                data = run(30),\n                data = data.data || data.list;\n            data = data.map($ => {\n                $uri = $.fid || `playlist/playListInfo?pid=${$.id}&pn=1`;\n                $.bookUrl = durl(`${$uri+type}详情${$.fid?type+\"本地\":\"\"}`);\n                return $;\n            });\n            break;\n\n\n        case '加载':\n            if (t2)\n                data = JSON.parse(java.base64Decode(uri)).map($ => {\n                    $uri = `bang/bang/musicList?bangId=${$.sid}&pn=1`;\n                    $.bookUrl = durl($uri + type + \"详情\");\n                    return $;\n                });\n            else\n                data = run(1);\n            break;\n\n\n        case '详情':\n            if (t2)\n                data = file_data(uri);\n            else\n                data = run(1);\n            data.tocUrl = durl(uri + type + \"目录\" + (data.fid ? type + \"本地\" : \"\"));\n            break;\n\n\n        case '目录':\n            if (t2)\n                data = file_data(uri);\n            else {\n                data = run(30);\n\n                // 目录下一页\n                p = data.total || data.num;\n                if (p > 30) {\n                    i = +uri.match(/pn=(\\d+)/)[1];\n                    if (p > 30 * i)\n                        java.put(\"nextTocUrl\", durl(uri.replace('pn=' + i, 'pn=' + (i + 1)) + type + \"目录\"));\n                }\n            }\n            data = data.musicList.map($ => {\n                return {\n                    name: $.name,\n                    zyid: durl($.rid + type + \"正文\" + ($.isListenFee ? type + 'vip' : '')),\n                    info: `🔖 ${$.isListenFee?'Paid':'Free'}Music　📼 ${$.songTimeMinutes}　🎻 ` + $.artist,\n                    vip: $.isListenFee\n                };\n            });\n            break;\n\n\n        case '正文':\n            data = {};\n            try {\n                if (t2) throw new Error(\"is vipmusic\");\n                uri = \"music/playUrl?mid=\" + uri + \"&type=music&\";\n                url = run(1, 'v1/').url;\n            } catch (err) {\n                q = java.webView(script(uri), null, \"$exports\");\n                url = 'http://mobi.kuwo.cn/mobi.s?f=kuwo&q=' + q;\n                url = java.get(url, {\n                    \"User-Agent\": \"okhttp/3.10.0\"\n                }).body().match(/url=(\\S+)/)[1];\n            }\n            break;\n\n\n    }\n    JSON.stringify(data);\n} catch (Error) {\n    try {\n        [uri, t1, t2] = String(java.hexDecodeToString(result)).split(type);\n    } catch (Login) {\n\n\n        Arr = [\"推荐\", \"排行\", \"主题\", \"心情\", \"场景\", \"年代\", \"曲风\", \"语言\"];\n\n        function login(t) {\n            if (t === undefined) return true;\n            java.toast(t);\n            java.log(t);\n        }\n        setv = json => source.setVariable(JSON.stringify(json));\n        yn = yn => yn ? '启用' : '禁用';\n        $$ = (type) => {\n            t2 = type;\n            if (type == '全部') {\n                type = \"推荐\"\n                for (key of Arr.slice(1))\n                    $[key] = !$[type];\n            }\n            login('发现设置：\\n【' + t2 + '】 ' + yn($[type]) + ' => ' + yn($[type] = !$[type]));\n            return setv($);\n        }\n        $ = function() {\n            try {\n                return JSON.parse(source.getVariable());\n            } catch (err) {\n                return null;\n            }\n        }();\n        if ($ == null) {\n            $ = {};\n            for (key of Arr)\n                $[key] = true;\n            setv($);\n        }\n    }\n}",
  "respondTime": 9589,
  "ruleBookInfo": {
    "author": "$.userName||$.uname\n@js:String(result)||\"🎶 酷我音乐\"",
    "canReName": "true",
    "coverUrl": "$.img\n@js:book.coverUrl||result",
    "init": "@js:eval(String(source.loginUrl));",
    "intro": "<br>{{$.desc&&$.info}}\n##^\\s*$##{{$.name}}",
    "kind": "{$.listencnt}播放&&$.tag",
    "name": "$.name",
    "tocUrl": "$.tocUrl",
    "wordCount": "$.total||$.num\n@js:if(result)result+=\"首歌\";"
  },
  "ruleContent": {
    "content": "@js:eval(String(source.loginUrl));url"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "$.uname\n@js:String(result)||\"🎶 酷我音乐\"",
    "bookList": "<js>eval(String(source.loginUrl))</js>$.[*]",
    "bookUrl": "$.bookUrl",
    "checkKeyWord": "熊子",
    "coverUrl": "$.img\n@js:String(result)||'https://missuo.ru/file/51e785d34aba81f61994f.jpg'",
    "intro": "$.desc&&$.info\n##^\\s*$##{{$.name}}",
    "kind": "{$.listencnt}播放&&$.tag",
    "name": "$.name",
    "wordCount": "{$.total}首歌"
  },
  "ruleToc": {
    "chapterList": "<js>eval(String(source.loginUrl))</js>$.[*]",
    "chapterName": "$.name",
    "chapterUrl": "$.zyid",
    "nextTocUrl": "@js:java.get(\"nextTocUrl\");",
    "updateTime": "$.info"
  },
  "searchUrl": "@js:\nmat = key.match(/kuwo\\.cn.*\\/playlist(_detail)?\\/(\\d+)/);\nif(mat)\nt2=type+\"详情\",uri = \"playlist/playListInfo?pid=\"+mat[2];\nelse\nt2=\"\",uri = \"search/searchPlayListBykeyWord?key=\" + key;\n\n`data:;base64,${java.base64Encode(uri+\"&pn=\"+page+type+\"搜索\"+t2)},{\"type\":\"${type}\"}`",
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
