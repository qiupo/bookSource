// @name 西瓜免费（优+）
// @version 2026.02.26
// @author converted
// @url 🥝西瓜免费小说App🍒
// @enabled true
// @tags 小说,书源,converted

const LEGADO_SOURCE = {
  "bookSourceGroup": "小说 书源",
  "bookSourceName": "西瓜免费（优+）",
  "bookSourceType": 0,
  "bookSourceUrl": "🥝西瓜免费小说App🍒",
  "customButton": false,
  "customOrder": 53,
  "enabled": true,
  "enabledCookieJar": true,
  "enabledExplore": true,
  "eventListener": false,
  "lastUpdateTime": 1772087585689,
  "respondTime": 1044,
  "ruleBookInfo": {
    "author": "data.book.author",
    "coverUrl": "data.book.coverWap",
    "intro": "data.book.introduction",
    "kind": "data.book.tagList",
    "lastChapter": "data.lastChapter.chapterName",
    "name": "data.book.bookName",
    "tocUrl": "<js>\nvar javaImport = new JavaImporter();\njavaImport.importPackage(\n    Packages.java.lang,\n    Packages.javax.crypto,\n    Packages.javax.crypto.spec,\n    Packages.java.security,\n    Packages.java.security.interfaces,\n    Packages.java.security.spec,\n    Packages.java.io,\n    Packages.java.util\n);\nwith(javaImport){\n    function encrypt(str){\n        var bArr = String(str).getBytes(\"UTF-8\");\n        var mac = Mac.getInstance(\"HmacSHA256\");\n        mac .init(SecretKeySpec(String(\"wj3imab73kwceuf51lf01ORHe2cmo8X0YrZwF4p2uv3WEfmqxrT2oIBwRFRNErXW20UKal15ZTDdxPKU43puZFqcuXkvrQmadhp1wn6YPEDO4WRgInp8NNNQo4uNsWF1CELOzx7yPOS4pQbhTRWB4qRm0a4ENIegN0SH7K2STbsyaCuWh7m7s3rTpb5dK3CcDdsT35vo0xNbPZI2dJmKoIeKk9p3YhBLNWp9WoZqn9Qihpvn4nvgJzVSacgy2MTo\").getBytes(\"UTF-8\"),\"HmacSHA256\"));\n        return mac.doFinal(bArr)\n    }\n  function encode(bArr) {\n        if (bArr === null) {\n            return null;\n        }\n        var length = bArr.length * 8;\n        if (length === 0) {\n            return \"\";\n        }\n        var i10 = length % 24;\n        var i11 = parseInt(length / 24);\n        var cArr = new Array((i10 !== 0 ? i11 + 1 : i11) * 4);\n        var i12 = 0;\n        var i13 = 0;\n        var i14 = 0;\n        while (i12 < i11) {\n                var i15 = i13 + 1;\n                var b10 = bArr[i13];\n                var i16 = i15 + 1;\n                var b11 = bArr[i15];\n                var i17 = i16 + 1;\n                var b12 = bArr[i16];\n                var b13 = (b11 & 15)&255;\n                var b14 = (b10 & 3)&255;\n                var i18 = b10 & -128;\n                var i19 = b10 >> 2;\n                if (i18 !== 0) {\n                    i19 ^= 192;\n                }\n                var b15 = i19 & 255;\n                var i20 = b11 & -128;\n                var i21 = b11 >> 4;\n                if (i20 !== 0) {\n                    i21 ^= 240;\n                }\n                var b16 = (i21 & 255);\n                var i22 = (b12 & -128) === 0 ? b12 >> 6 : (b12 >> 6) ^ 252;\n                var i23 = i14 + 1;\n                var cArr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n                cArr[i14] = cArr2[b15];\n                var i24 = i23 + 1;\n                cArr[i23] = cArr2[(b14 << 4) | b16];\n                var i25 = i24 + 1;\n                cArr[i24] = cArr2[(b13 << 2) | (i22&255)];\n                cArr[i25] = cArr2[b12 & 63];\n                i12++;\n                i14 = i25 + 1;\n                i13 = i17;\n\t\t\t\t}\n        if (i10 === 8) {\n            var b17 = bArr[i13];\n            var b18 = b17 & 3;\n            var i26 = b17 & -128;\n            var i27 = b17 >> 2;\n            if (i26 !== 0) {\n                i27 ^= 192;\n            }\n            var i28 = i14 + 1;\n            var cArr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr3[i27];\n            var i29 = i28 + 1;\n            cArr[i28] = cArr3[b18 << 4];\n            cArr[i29] = '=';\n            cArr[i29 + 1] = '=';\n\t\t}else if (i10 === 16) {\n            var b19 = bArr[i13];\n            var b20 = bArr[i13 + 1];\n            var b21 = (b20 & 15)&255;\n            var b22 = (b19 & 3)&255;\n            var i30 = b19 & -128;\n            var i31 = b19 >> 2;\n            if (i30 !== 0) {\n                i31 ^= 192;\n            }\n            var b23 = i31&255;\n            var i32 = b20 & -128;\n            var i33 = b20 >> 4;\n            if (i32 !== 0) {\n                i33 ^= 240;\n            }\n            var i34 = i14 + 1;\n            var cArr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr4[b23];\n            var i35 = i34 + 1;\n            cArr[i34] = cArr4[(i33&255) | (b22 << 4)];\n            cArr[i35] = cArr4[b21 << 2];\n            cArr[i35 + 1] = '=';\n        }\n        return cArr.join('');\n    }\n\n}\n\nvar bookId= java.getString(\"data.book.bookId\");\n\nvar myDate = new Date();\nvar timestamp = myDate.getFullYear() + \n\"0\" + (myDate.getMonth()+1) + \n\"0\" + myDate.getDate() + \n\"0\" + myDate.getDay() + \nmyDate.getMinutes() + \nmyDate.getSeconds();\n\n\n\nvar sign = encode(encrypt(\"appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\"+ timestamp +\"{\\\"chapterId\\\":\\\"\\\",\\\"needBlockList\\\":\\\"1\\\",\\\"chapterOffset\\\":\\\"666666\\\",\\\"bookId\\\":\\\"\" + bookId + \"\\\",\\\"chapterEndId\\\":\\\"\\\"}8cfaaedef7a7e24a716732ff5428958f\"))\n\nurl = \"https://xgmf.zuanqianyi.com/glory/free/111?appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\" + timestamp + \",\";\npost={\n  \"method\": \"POST\",\n  \"headers\": {\n    \"pname\": \"com.dzmf.zmfxsdq\",\n    \"sign\": sign,\n    \"signType\": \"1\"\n  },\n  \"body\":'{\"chapterId\":\"\",\"needBlockList\":\"1\",\"chapterOffset\":\"666666\",\"bookId\":\"'+bookId+'\",\"chapterEndId\":\"\"}'\n}\nurl+JSON.stringify(post)\n</js>",
    "wordCount": "data.book.totalWordSize"
  },
  "ruleContent": {
    "content": "<js>\nvar javaImport = new JavaImporter();\njavaImport.importPackage(\n    Packages.java.lang,\n    Packages.java.io,\n    Packages.java.util,\n    Packages.java.security.spec,\n    Packages.java.security,\n    Packages.javax.crypto,\n    Packages.javax.crypto.spec,\n    Packages.java.security.interfaces,\n    Packages.java.security.spec\n);\nwith(javaImport){\n\tfunction encrypt(str){\n                var bArr = String(str).getBytes(\"UTF-8\");\n\t\tvar pKCS8EncodedKeySpec =PKCS8EncodedKeySpec([48,-126,4,-65,2,1,0,48,13,6,9,42,-122,72,-122,-9,13,1,1,1,5,0,4,-126,4,-87,48,-126,4,-91,2,1,0,2,-126,1,1,0,-118,121,-93,-123,61,113,-87,-20,-33,52,-70,-125,-13,67,-61,92,-49,-41,-14,60,-49,31,-68,-88,-7,-38,-52,-62,-31,-76,-123,90,-28,-70,-23,-106,93,-93,-5,-57,22,62,51,45,-88,80,-38,-55,75,-3,-73,-96,65,-15,-110,11,-121,-91,105,-91,-11,-62,-111,96,17,-68,-82,113,-116,-82,-108,51,-100,31,61,14,-26,-5,-48,14,-36,-110,-90,113,46,-31,-67,-64,95,98,95,-123,2,-83,16,-105,74,-42,-100,3,-125,53,126,-72,-72,-76,79,108,1,-71,-82,-51,0,60,-94,84,-65,73,-44,-88,-107,-81,44,3,40,-33,-87,114,88,21,-53,111,-84,-88,-83,112,41,101,-118,50,22,-74,29,47,-51,-106,-89,-26,55,44,66,118,-7,-45,-72,78,-125,-37,73,72,-80,-11,38,-82,65,54,103,9,43,-106,-88,-81,29,50,56,-127,104,122,56,-38,-93,-76,-12,-99,-17,-87,97,-128,21,118,-78,-13,-67,15,-74,-116,71,63,122,5,-59,120,93,90,-104,116,21,-13,108,10,-50,-103,-33,-21,125,113,86,-73,46,-84,-92,106,-86,8,23,7,95,-65,80,83,6,-85,53,85,-85,43,-73,41,-84,-10,76,106,-36,119,99,-125,121,-92,-122,-94,-73,-15,125,115,120,-63,2,3,1,0,1,2,-126,1,1,0,-121,-55,-103,-48,-55,28,-47,125,102,-81,37,10,-55,28,52,-47,-87,58,95,-34,-61,88,-94,-66,-84,43,-93,72,-94,-35,75,59,-125,57,-54,94,-39,-70,56,-27,-45,-24,-16,116,-96,45,-111,45,125,103,-15,-115,-93,-68,-121,-14,-24,116,10,-14,99,-39,4,-121,73,61,85,110,33,126,-5,-14,-45,-16,74,6,119,-8,-117,-32,86,-23,51,111,-97,-126,91,120,-19,-49,-32,76,-28,-1,-30,90,9,88,3,42,-22,-102,37,-122,108,16,-36,36,-44,88,73,-111,-38,-34,-102,108,50,27,-22,-3,-39,-78,41,-99,123,-110,63,108,85,22,-119,93,-85,-98,-114,70,-31,-120,-122,10,-92,-31,87,117,-119,-49,25,1,20,-42,-61,35,96,-41,-46,-50,-114,-31,-36,-21,95,-70,113,110,62,-28,62,76,36,-57,81,-21,100,36,124,-74,112,-52,-73,109,-117,37,-3,-40,-111,-102,-13,62,118,-93,-119,-118,-33,-82,20,53,64,-57,24,63,-113,-126,-61,-69,90,-72,-56,120,80,-95,-14,124,-2,74,80,53,22,3,57,61,113,-117,-5,-54,61,-1,-105,-96,-68,7,-98,-49,95,-61,-16,51,-65,82,66,-125,-66,-92,115,75,-116,32,14,68,-51,124,-126,32,-63,52,84,117,2,-127,-127,0,-15,-52,16,-109,-8,94,1,-65,14,-119,72,18,115,86,17,19,-68,-19,24,86,12,5,-97,55,-16,-75,84,110,-126,23,-33,-56,120,17,-32,-127,-106,-54,-27,54,20,40,92,70,-18,94,31,-79,-42,69,74,18,85,17,-64,-80,60,4,-102,23,36,-52,-112,124,11,-30,-15,5,-92,125,51,-42,26,109,27,-19,93,10,49,-48,-106,91,-38,12,-45,73,-44,-26,37,114,21,105,36,-38,96,39,-5,-8,-4,-70,-11,106,-107,69,68,14,-43,-123,-127,6,127,65,-25,-49,75,110,99,-50,-32,-33,-54,-26,117,125,-18,24,-89,107,2,-127,-127,0,-110,-101,-24,103,-95,2,-73,-114,-109,-97,107,126,-32,75,-124,-39,-92,-98,-127,-33,2,-65,49,-80,24,118,94,4,-117,122,-70,-41,-42,59,-90,-53,-81,-101,-57,75,-99,-67,-87,-67,-35,40,-66,53,-45,95,79,-10,-120,-111,71,-12,-110,76,-74,82,-79,83,-84,3,43,111,-44,-109,4,61,-22,3,99,113,113,-121,-15,-108,44,-32,-28,46,-83,-115,-99,-86,108,-111,3,-11,-43,121,67,-73,-68,99,107,55,-119,-77,20,-68,-77,98,-113,-21,39,-128,-21,119,113,57,-99,-30,-65,-128,-76,-100,40,8,39,-72,18,9,-17,-99,-89,-125,2,-127,-128,108,110,19,93,23,-70,-88,83,-46,35,-13,-30,-6,63,-75,70,-63,-87,29,9,-79,56,112,46,-8,-51,-120,0,74,108,-124,88,-12,-89,39,-93,85,72,-59,66,-36,5,65,100,57,-114,-111,-18,0,-27,111,-109,10,-4,-4,8,-53,-47,80,124,98,111,45,-73,-62,-24,-47,38,-77,-99,-59,-70,20,125,-85,81,101,48,-90,40,32,-43,45,-46,36,-119,-18,100,10,-108,-65,79,56,76,-119,100,68,-43,98,24,64,-25,-69,-22,-92,-37,118,26,-7,66,61,-99,3,99,-19,50,-94,-91,106,40,81,103,-55,118,96,104,67,-29,2,-127,-127,0,-121,39,-59,-77,-85,34,119,23,-80,-115,-38,42,-120,25,-10,-86,49,-15,-110,102,-122,0,-66,-116,-55,-80,109,114,33,39,-114,-110,37,-60,-82,58,-66,116,-116,-32,-17,-43,-122,99,43,60,65,70,27,-53,-107,75,0,-111,118,85,72,126,1,-30,-17,-24,-29,-3,-76,16,-113,86,-51,37,74,-45,-66,-36,57,62,-118,-3,-1,-11,127,70,108,-26,-51,-1,-21,-64,48,119,116,74,43,-100,121,-58,-23,115,-76,-76,-20,28,29,-1,114,15,-26,70,26,76,-19,-117,-95,59,5,50,96,-50,72,-75,99,-16,116,104,-58,-122,127,-125,2,-127,-127,0,-105,-116,-61,-50,-11,-71,-17,-45,114,88,67,113,51,37,-77,53,82,-22,36,70,-19,34,93,22,-103,-36,28,-47,-113,120,-57,4,-95,11,-82,-62,-127,13,115,93,104,-110,-44,39,42,-125,64,-111,53,-14,82,73,69,0,-66,37,-56,-115,3,-103,5,-69,55,75,-113,7,-18,-32,97,-56,28,85,-48,72,27,-115,119,63,1,41,115,-27,-73,24,-63,57,-72,107,-9,39,13,120,-75,-42,33,9,-39,-93,72,-122,66,33,-36,-1,-18,-102,11,-49,28,-61,-120,6,102,-37,-106,-6,5,-111,107,-76,49,78,-40,19,53,106,-37,-125]);\n\t\tvar signature = Signature.getInstance(\"SHA256WithRSA\");\n\t\tsignature.initSign(KeyFactory.getInstance(\"RSA\").generatePrivate(pKCS8EncodedKeySpec));\n\t\tsignature.update(bArr);\n\t\treturn signature.sign();        \n    }\n\tfunction encode(bArr) {\n        if (bArr === null) {\n            return null;\n        }\n        var length = bArr.length * 8;\n        if (length === 0) {\n            return \"\";\n        }\n        var i10 = length % 24;\n        var i11 = parseInt(length / 24);\n        var cArr = new Array((i10 !== 0 ? i11 + 1 : i11) * 4);\n        var i12 = 0;\n        var i13 = 0;\n        var i14 = 0;\n        while (i12 < i11) {\n                var i15 = i13 + 1;\n                var b10 = bArr[i13];\n                var i16 = i15 + 1;\n                var b11 = bArr[i15];\n                var i17 = i16 + 1;\n                var b12 = bArr[i16];\n                var b13 = (b11 & 15)&255;\n                var b14 = (b10 & 3)&255;\n                var i18 = b10 & -128;\n                var i19 = b10 >> 2;\n                if (i18 !== 0) {\n                    i19 ^= 192;\n                }\n                var b15 = i19 & 255;\n                var i20 = b11 & -128;\n                var i21 = b11 >> 4;\n                if (i20 !== 0) {\n                    i21 ^= 240;\n                }\n                var b16 = (i21 & 255);\n                var i22 = (b12 & -128) === 0 ? b12 >> 6 : (b12 >> 6) ^ 252;\n                var i23 = i14 + 1;\n                var cArr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n                cArr[i14] = cArr2[b15];\n                var i24 = i23 + 1;\n                cArr[i23] = cArr2[(b14 << 4) | b16];\n                var i25 = i24 + 1;\n                cArr[i24] = cArr2[(b13 << 2) | (i22&255)];\n                cArr[i25] = cArr2[b12 & 63];\n                i12++;\n                i14 = i25 + 1;\n                i13 = i17;\n\t\t\t\t}\n        if (i10 === 8) {\n            var b17 = bArr[i13];\n            var b18 = b17 & 3;\n            var i26 = b17 & -128;\n            var i27 = b17 >> 2;\n            if (i26 !== 0) {\n                i27 ^= 192;\n            }\n            var i28 = i14 + 1;\n            var cArr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr3[i27];\n            var i29 = i28 + 1;\n            cArr[i28] = cArr3[b18 << 4];\n            cArr[i29] = '=';\n            cArr[i29 + 1] = '=';\n\t\t}else if (i10 === 16) {\n            var b19 = bArr[i13];\n            var b20 = bArr[i13 + 1];\n            var b21 = (b20 & 15)&255;\n            var b22 = (b19 & 3)&255;\n            var i30 = b19 & -128;\n            var i31 = b19 >> 2;\n            if (i30 !== 0) {\n                i31 ^= 192;\n            }\n            var b23 = i31&255;\n            var i32 = b20 & -128;\n            var i33 = b20 >> 4;\n            if (i32 !== 0) {\n                i33 ^= 240;\n            }\n            var i34 = i14 + 1;\n            var cArr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr4[b23];\n            var i35 = i34 + 1;\n            cArr[i34] = cArr4[(i33&255) | (b22 << 4)];\n            cArr[i35] = cArr4[b21 << 2];\n            cArr[i35 + 1] = '=';\n        }\n        return cArr.join('');\n    }\n\n}\n\tvar bookId = java.get(\"bookId\");\n\tvar str = baseUrl;\n\tvar chapterId = str.match(/\\d+/).toString();\n\n\n\tfunction getTransferRespond(Urltype){\n\t\t\n\t\tvar myDate = new Date();\n\t\tvar timestamp = myDate.getFullYear() + \n\t\t\"0\" + (myDate.getMonth()+1) + \n\t\t\"0\" + myDate.getDate() + \n\t\t\"0\" + myDate.getDay() + \n\t\tmyDate.getMinutes() + \n\t\tmyDate.getSeconds();\n\t\t\n\t\t\n\t\tvar url;\n\t\tvar body;\n\t\tvar body;\n\t\tif(Urltype == 1)\n\t\t{\n\t\n\t\t\tvar url = \"https://xgmf.zuanqianyi.com/glory/free/1152?appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\" + timestamp;\n\n\t\t\tvar sign = encode(encrypt(\"appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\"+ timestamp +\"{\\\"autoPay\\\":\\\"1\\\",\\\"chapterId\\\":\\\"\"+chapterId+\"\\\",\\\"keepShowAd\\\":1,\\\"confirmPay\\\":\\\"1\\\",\\\"bookId\\\":\\\"\"+bookId+\"\\\"}8cfaaedef7a7e24a716732ff5428958f\"))\n\n\t\t\tvar body =\n\t\t\t\"{\\\"autoPay\\\":\\\"1\\\",\\\"chapterId\\\":\\\"\"+chapterId+\"\\\",\\\"keepShowAd\\\":1,\\\"confirmPay\\\":\\\"1\\\",\\\"bookId\\\":\\\"\"+bookId+\"\\\"}\";\n\n\t\t\tvar header = {};\n\n\t\t\theader[\"uid\"]=\"1706970565\";\n\t\t\theader[\"pname\"]=\"com.dzmf.zmfxsdq\";\n\t\t\theader[\"sign\"]=sign;\n\t\t\theader[\"signType\"]=\"2\";\n\t\t\theader[\"Content-Type\"]=\"application/json; charset=UTF-8\";\n\t\t\t//header[\"Content-Length\"]=93;\n\t\t\theader[\"Host\"]=\"xgmf.zuanqianyi.com\";\n\t\t\n\t\t}else\n\t\t{\n\t\t\tvar url = \"https://xgmf.zuanqianyi.com/glory/free/1153?appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\" + timestamp;\n\n\t\t\tvar sign = encode(encrypt(\"appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\"+ timestamp +\"{\\\"autoPay\\\":\\\"1\\\",\\\"keepShowAd\\\":1,\\\"chapterIds\\\":[\\\"\"+chapterId+\"\\\"],\\\"bookId\\\":\\\"\"+bookId+\"\\\"}8cfaaedef7a7e24a716732ff5428958f\"))\n\n\t\t\tvar body =\n\t\t\t\"{\\\"autoPay\\\":\\\"1\\\",\\\"keepShowAd\\\":1,\\\"chapterIds\\\":[\\\"\"+chapterId+\"\\\"],\\\"bookId\\\":\\\"\"+bookId+\"\\\"}\";\n\t\t\t\n\t\t\tvar header = {};\n\n\t\t\theader[\"uid\"]=\"1706970565\";\n\t\t\theader[\"pname\"]=\"com.dzmf.zmfxsdq\";\n\t\t\theader[\"sign\"]=sign;\n\t\t\theader[\"signType\"]=\"2\";\n\t\t\theader[\"Content-Type\"]=\"application/json; charset=UTF-8\";\n\t\t\t//header[\"Content-Length\"]=79;\n\t\t\theader[\"Host\"]=\"xgmf.zuanqianyi.com\";\t\t\n\t\t}\n\t\t\n\t\tvar respond= java.post(url,body,header);\n\t\treturn respond;\n\t}\n\t\n\tvar UrltypeNum = 1;\n\t\n\tvar respond = getTransferRespond(UrltypeNum);\n\n\tvar transferHtml=respond.body();\n\n\tvar is = String(transferHtml).search(/不合法/);\n\n\twhile(is > 0){\n\t\tif(UrltypeNum == 1){UrltypeNum = 2}else{UrltypeNum = 1}\n\t\tvar respond = getTransferRespond(UrltypeNum);\n\t\tvar transferHtml=respond.body();\n\t\tvar is = String(transferHtml).search(/不合法/);\n\t}\n\t//java.log(transferHtml);\n\tvar transferJson=JSON.parse(transferHtml);\n\tvar chapterUrl =transferJson.data.chapterInfo[0].cdnUrls[0];\n\tchapterHtml = java.ajax(chapterUrl);\n\t//java.log(chapterUrl);\n\t//java.log(java.ajax(chapterUrl));\n</js>"
  },
  "ruleExplore": {},
  "ruleSearch": {
    "author": "author",
    "bookList": "data.searchList",
    "bookUrl": "<js>\nvar javaImport = new JavaImporter();\njavaImport.importPackage(\n    Packages.java.lang,\n    Packages.javax.crypto,\n    Packages.javax.crypto.spec,\n    Packages.java.security,\n    Packages.java.security.interfaces,\n    Packages.java.security.spec,\n    Packages.java.io,\n    Packages.java.util\n);\nwith(javaImport){\n    function encrypt(str){\n        var bArr = String(str).getBytes(\"UTF-8\");\n        var mac = Mac.getInstance(\"HmacSHA256\");\n        mac .init(SecretKeySpec(String(\"wj3imab73kwceuf51lf01ORHe2cmo8X0YrZwF4p2uv3WEfmqxrT2oIBwRFRNErXW20UKal15ZTDdxPKU43puZFqcuXkvrQmadhp1wn6YPEDO4WRgInp8NNNQo4uNsWF1CELOzx7yPOS4pQbhTRWB4qRm0a4ENIegN0SH7K2STbsyaCuWh7m7s3rTpb5dK3CcDdsT35vo0xNbPZI2dJmKoIeKk9p3YhBLNWp9WoZqn9Qihpvn4nvgJzVSacgy2MTo\").getBytes(\"UTF-8\"),\"HmacSHA256\"));\n        return mac.doFinal(bArr)\n    }\n  function encode(bArr) {\n        if (bArr === null) {\n            return null;\n        }\n        var length = bArr.length * 8;\n        if (length === 0) {\n            return \"\";\n        }\n        var i10 = length % 24;\n        var i11 = parseInt(length / 24);\n        var cArr = new Array((i10 !== 0 ? i11 + 1 : i11) * 4);\n        var i12 = 0;\n        var i13 = 0;\n        var i14 = 0;\n        while (i12 < i11) {\n                var i15 = i13 + 1;\n                var b10 = bArr[i13];\n                var i16 = i15 + 1;\n                var b11 = bArr[i15];\n                var i17 = i16 + 1;\n                var b12 = bArr[i16];\n                var b13 = (b11 & 15)&255;\n                var b14 = (b10 & 3)&255;\n                var i18 = b10 & -128;\n                var i19 = b10 >> 2;\n                if (i18 !== 0) {\n                    i19 ^= 192;\n                }\n                var b15 = i19 & 255;\n                var i20 = b11 & -128;\n                var i21 = b11 >> 4;\n                if (i20 !== 0) {\n                    i21 ^= 240;\n                }\n                var b16 = (i21 & 255);\n                var i22 = (b12 & -128) === 0 ? b12 >> 6 : (b12 >> 6) ^ 252;\n                var i23 = i14 + 1;\n                var cArr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n                cArr[i14] = cArr2[b15];\n                var i24 = i23 + 1;\n                cArr[i23] = cArr2[(b14 << 4) | b16];\n                var i25 = i24 + 1;\n                cArr[i24] = cArr2[(b13 << 2) | (i22&255)];\n                cArr[i25] = cArr2[b12 & 63];\n                i12++;\n                i14 = i25 + 1;\n                i13 = i17;\n\t\t\t\t}\n        if (i10 === 8) {\n            var b17 = bArr[i13];\n            var b18 = b17 & 3;\n            var i26 = b17 & -128;\n            var i27 = b17 >> 2;\n            if (i26 !== 0) {\n                i27 ^= 192;\n            }\n            var i28 = i14 + 1;\n            var cArr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr3[i27];\n            var i29 = i28 + 1;\n            cArr[i28] = cArr3[b18 << 4];\n            cArr[i29] = '=';\n            cArr[i29 + 1] = '=';\n\t\t}else if (i10 === 16) {\n            var b19 = bArr[i13];\n            var b20 = bArr[i13 + 1];\n            var b21 = (b20 & 15)&255;\n            var b22 = (b19 & 3)&255;\n            var i30 = b19 & -128;\n            var i31 = b19 >> 2;\n            if (i30 !== 0) {\n                i31 ^= 192;\n            }\n            var b23 = i31&255;\n            var i32 = b20 & -128;\n            var i33 = b20 >> 4;\n            if (i32 !== 0) {\n                i33 ^= 240;\n            }\n            var i34 = i14 + 1;\n            var cArr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr4[b23];\n            var i35 = i34 + 1;\n            cArr[i34] = cArr4[(i33&255) | (b22 << 4)];\n            cArr[i35] = cArr4[b21 << 2];\n            cArr[i35 + 1] = '=';\n        }\n        return cArr.join('');\n    }\n\n}\n\nvar bookId= java.getString(\"bookId\");\n\nvar myDate = new Date();\nvar timestamp = myDate.getFullYear() + \n\"0\" + (myDate.getMonth()+1) + \n\"0\" + myDate.getDate() + \n\"0\" + myDate.getDay() + \nmyDate.getMinutes() + \nmyDate.getSeconds();\n\nvar sign = encode(encrypt(\"appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\"+ timestamp +\"{\\\"bookId\\\":\\\"\"+bookId+\"\\\"}8cfaaedef7a7e24a716732ff5428958f\"))\n\nurl = \"https://xgmf.zuanqianyi.com/glory/free/1110?appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\" + timestamp + \",\";\npost={\n  \"method\": \"POST\",\n  \"headers\": {\n    \"pname\": \"com.dzmf.zmfxsdq\",\n    \"sign\": sign,\n    \"signType\": \"1\"\n  },\n  \"body\":'{\"bookId\":\"'+bookId+'\"}'\n}\nurl+JSON.stringify(post)\n</js>",
    "coverUrl": "coverWap",
    "intro": "introduction",
    "kind": "tag",
    "name": "bookName"
  },
  "ruleToc": {
    "chapterList": "<js>\nvar obj = JSON.parse(result); \nvar chapterNameList= obj.data.chapterNameList;\nvar chapterIdList= obj.data.chapterIdList;\nvar bookId = obj.data.bookId;\nvar length = parseInt(obj.data.chapterNameList.length);\nvar list = [];\nvar ret;\nfor(var i = 0; i < length; i++)\n{ \t list.push({\"chapterName\":String(chapterNameList[i]), \"chapterId\":String(chapterIdList[i])});\n}\njava.put(\"bookId\",bookId);\n\nlist\n</js>\n",
    "chapterName": "chapterName",
    "chapterUrl": "chapterId"
  },
  "searchUrl": "<js>\nvar javaImport = new JavaImporter();\njavaImport.importPackage(\n    Packages.java.lang,\n    Packages.javax.crypto,\n    Packages.javax.crypto.spec,\n    Packages.java.security,\n    Packages.java.security.interfaces,\n    Packages.java.security.spec,\n    Packages.java.io,\n    Packages.java.util\n);\nwith(javaImport){\n    function encrypt(str){\n        var bArr = String(str).getBytes(\"UTF-8\");\n        var mac = Mac.getInstance(\"HmacSHA256\");\n        mac .init(SecretKeySpec(String(\"wj3imab73kwceuf51lf01ORHe2cmo8X0YrZwF4p2uv3WEfmqxrT2oIBwRFRNErXW20UKal15ZTDdxPKU43puZFqcuXkvrQmadhp1wn6YPEDO4WRgInp8NNNQo4uNsWF1CELOzx7yPOS4pQbhTRWB4qRm0a4ENIegN0SH7K2STbsyaCuWh7m7s3rTpb5dK3CcDdsT35vo0xNbPZI2dJmKoIeKk9p3YhBLNWp9WoZqn9Qihpvn4nvgJzVSacgy2MTo\").getBytes(\"UTF-8\"),\"HmacSHA256\"));\n        return mac.doFinal(bArr)\n    }\n  function encode(bArr) {\n        if (bArr === null) {\n            return null;\n        }\n        var length = bArr.length * 8;\n        if (length === 0) {\n            return \"\";\n        }\n        var i10 = length % 24;\n        var i11 = parseInt(length / 24);\n        var cArr = new Array((i10 !== 0 ? i11 + 1 : i11) * 4);\n        var i12 = 0;\n        var i13 = 0;\n        var i14 = 0;\n        while (i12 < i11) {\n                var i15 = i13 + 1;\n                var b10 = bArr[i13];\n                var i16 = i15 + 1;\n                var b11 = bArr[i15];\n                var i17 = i16 + 1;\n                var b12 = bArr[i16];\n                var b13 = (b11 & 15)&255;\n                var b14 = (b10 & 3)&255;\n                var i18 = b10 & -128;\n                var i19 = b10 >> 2;\n                if (i18 !== 0) {\n                    i19 ^= 192;\n                }\n                var b15 = i19 & 255;\n                var i20 = b11 & -128;\n                var i21 = b11 >> 4;\n                if (i20 !== 0) {\n                    i21 ^= 240;\n                }\n                var b16 = (i21 & 255);\n                var i22 = (b12 & -128) === 0 ? b12 >> 6 : (b12 >> 6) ^ 252;\n                var i23 = i14 + 1;\n                var cArr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n                cArr[i14] = cArr2[b15];\n                var i24 = i23 + 1;\n                cArr[i23] = cArr2[(b14 << 4) | b16];\n                var i25 = i24 + 1;\n                cArr[i24] = cArr2[(b13 << 2) | (i22&255)];\n                cArr[i25] = cArr2[b12 & 63];\n                i12++;\n                i14 = i25 + 1;\n                i13 = i17;\n\t\t\t\t}\n        if (i10 === 8) {\n            var b17 = bArr[i13];\n            var b18 = b17 & 3;\n            var i26 = b17 & -128;\n            var i27 = b17 >> 2;\n            if (i26 !== 0) {\n                i27 ^= 192;\n            }\n            var i28 = i14 + 1;\n            var cArr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr3[i27];\n            var i29 = i28 + 1;\n            cArr[i28] = cArr3[b18 << 4];\n            cArr[i29] = '=';\n            cArr[i29 + 1] = '=';\n\t\t}else if (i10 === 16) {\n            var b19 = bArr[i13];\n            var b20 = bArr[i13 + 1];\n            var b21 = (b20 & 15)&255;\n            var b22 = (b19 & 3)&255;\n            var i30 = b19 & -128;\n            var i31 = b19 >> 2;\n            if (i30 !== 0) {\n                i31 ^= 192;\n            }\n            var b23 = i31&255;\n            var i32 = b20 & -128;\n            var i33 = b20 >> 4;\n            if (i32 !== 0) {\n                i33 ^= 240;\n            }\n            var i34 = i14 + 1;\n            var cArr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];\n            cArr[i14] = cArr4[b23];\n            var i35 = i34 + 1;\n            cArr[i34] = cArr4[(i33&255) | (b22 << 4)];\n            cArr[i35] = cArr4[b21 << 2];\n            cArr[i35 + 1] = '=';\n        }\n        return cArr.join('');\n    }\n\n}\n\n\nvar myDate = new Date();\nvar timestamp = myDate.getFullYear() + \n\"0\" + (myDate.getMonth()+1) + \n\"0\" + myDate.getDate() + \n\"0\" + myDate.getDay() + \nmyDate.getMinutes() + \nmyDate.getSeconds();\n\nvar sign = encode(encrypt(\"appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\"+ timestamp +\"{\\\"size\\\":15,\\\"searchType\\\":\\\"\\\",\\\"index\\\":\"+page+\",\\\"keyword\\\":\\\"\"+key+\"\\\"}8cfaaedef7a7e24a716732ff5428958f\"))\n\nurl = \"https://xgmf.zuanqianyi.com/glory/free/1141?appId=100398183&country=CN&lang=zh_CN&ver=10009248&appVer=1.0.9.248&timestamp=\" + timestamp + \",\";\npost={\n  \"method\": \"POST\",\n  \"headers\": {\n    \"pname\": \"com.dzmf.zmfxsdq\",\n    \"sign\": sign,\n    \"signType\": \"1\"\n  },\n  \"body\":'{\"size\":15,\"searchType\":\"\",\"index\":'+page+',\"keyword\":\"'+key+'\"}'\n}\nurl+JSON.stringify(post)\n</js>",
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
