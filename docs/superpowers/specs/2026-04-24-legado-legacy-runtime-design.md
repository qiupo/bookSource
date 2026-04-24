# Legado 旧规则高覆盖模拟层转换设计

## 目标

把当前转换脚本从“保留旧规则 + 空函数占位”升级为“生成带旧规则运行时的 Legado Tauri JS 书源”。

生成的每个 JS 书源都应包含以下函数：

- `search(keyword, page)`
- `bookInfo(bookUrl)`
- `chapterList(tocUrl)`
- `chapterContent(chapterUrl)`
- `explore(page, category)`

这些函数通过内置 `legacyRuntime` 解释旧版阅读/Legado 规则字段，尽量复用原始 `LEGADO_SOURCE` 中的：

- `searchUrl`
- `exploreUrl`
- `ruleSearch`
- `ruleBookInfo`
- `ruleToc`
- `ruleContent`
- `ruleExplore`
- `jsLib`
- `loginUrl`
- `loginUi`

## 结论

“完全转译”不可可靠承诺。

旧阅读规则不是单纯 JSON 配置，而是依赖 Android/Kotlin 阅读 App 的规则引擎和扩展对象。当前 `book.json` 中大量书源包含：

- `@js:` / `<js>` 任意脚本
- `java.*` 扩展方法
- `cache` / `cookie` / `source` 对象
- WebView 加载与 `webJs`
- 加密、签名、混淆脚本
- XPath / CSS / JSONPath / JSOUP 默认规则混用

因此本设计采用“高覆盖模拟层”：覆盖常见规则路径，复杂 Android/WebView/加密能力以安全 shim 和兼容性报告标记。

## 架构

### 1. Python 转换层

修改 `scripts/convert_book_json.py`：

- 继续读取 `book.json`
- 继续生成 `booksources/*.js`
- 每个 JS 文件保留 `LEGADO_SOURCE`
- 每个 JS 文件追加统一的 `legacyRuntime` 代码
- 五个 Tauri 函数调用 `legacyRuntime`
- 转换时生成兼容性报告：`booksources/compatibility-report.json`

### 2. JS 运行时层

每个生成的 JS 书源内置：

```js
const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);
```

运行时负责：

- 构建请求 URL
- 发起 HTTP 请求
- 解析响应文本或 JSON
- 应用旧规则
- 映射为 Legado Tauri 要求的返回结构
- 捕获不支持能力并记录日志

### 3. 五个函数映射

#### `search(keyword, page)`

数据流：

1. 使用 `searchUrl` 替换 `{{key}}`、`{{page}}`、`{{source.key}}`
2. 请求搜索结果
3. 使用 `ruleSearch.bookList` 提取书籍列表
4. 对每个书籍节点应用 `ruleSearch.name/author/bookUrl/coverUrl/intro/kind/latestChapter`
5. 返回 `BookItem[]`

#### `bookInfo(bookUrl)`

数据流：

1. 请求 `bookUrl`
2. 若有 `ruleBookInfo.init`，先执行初始化规则
3. 应用详情字段规则
4. 返回 `BookItem`
5. `tocUrl` 缺失时回退为 `bookUrl`

#### `chapterList(tocUrl)`

数据流：

1. 请求 `tocUrl`
2. 使用 `ruleToc.chapterList` 提取章节列表
3. 对每个章节节点应用 `chapterName/chapterUrl/group`
4. 返回正序 `ChapterInfo[]`

#### `chapterContent(chapterUrl)`

数据流：

1. 请求 `chapterUrl`
2. 应用 `ruleContent.content`
3. 若存在 `nextContentUrl`，按上限拼接多页正文
4. 小说返回文本；图片/音视频按旧规则结果返回字符串或 JSON 字符串

#### `explore(page, category)`

数据流：

1. `category === 'GETALL'` 时解析 `exploreUrl` 分类列表
2. 指定分类时构建分类 URL
3. 请求分类结果
4. 使用 `ruleExplore.bookList` 和字段映射返回 `BookItem[]`

## 支持范围

### 第一批必须支持

- URL 模板替换：`{{key}}`、`{{page}}`、`{{source.key}}`、`{{baseUrl}}`
- 简单 `{{$.path}}` 模板取值
- GET 请求
- POST 请求常见 JSON 配置：`{"method":"POST","body":"...","headers":{...}}`
- `@json:` / `$.` JSONPath 子集：字段、数组、`[*]`、递归 `..field`
- `@css:` CSS 选择器：`text/html/href/src/content`
- XPath 常见子集：`//tag`、属性、`text()`
- 正则净化：`##regex##replacement`
- 连接符：`||` 优先返回、`&&` 拼接
- 相对 URL 拼接
- 字段映射到 Tauri 返回结构

### 第二批尽量支持

- `@js:` 与 `<js>` 的安全执行
- `java.ajax`
- `java.ajaxAll`
- `java.base64Encode/base64Decode`
- `java.md5Encode`
- `java.timeFormat`
- `java.encodeURI`
- `java.htmlFormat`
- 简单 `cache.get/put`
- 简单 `cookie.getKey`
- `source.getLoginInfoMap`

### 明确不保证

- Android Java 包：`Packages.*`、`JavaImporter`
- WebView 渲染、点击和 DOM 动态执行
- 站点私有加密签名完全还原
- 任意混淆 JS 的跨环境兼容
- 登录态完全迁移
- 阅读 App 全部 Kotlin 扩展方法

## 兼容性报告

新增 `compatibility-report.json`，每个书源包含：

```json
{
  "name": "书源名",
  "fileName": "书源名.js",
  "level": "high | partial | manual",
  "features": ["jsonpath", "css", "js", "java.ajax"],
  "unsupported": ["webView", "Packages.javax.crypto"]
}
```

判定规则：

- `high`：无 WebView、无 Android Java 包、规则主要是 HTTP + JSONPath/CSS/XPath
- `partial`：包含 `@js` 或常见 `java.*`，但无明显 Android 包/WebView 强依赖
- `manual`：包含 WebView、Java 包、复杂加密或混淆脚本

## 错误处理

- 单个字段规则失败时返回空字符串并记录日志。
- 单个书籍/章节节点失败时跳过该节点。
- 整个函数失败时返回对应空值：搜索/目录/发现返回 `[]`，正文返回 `''`，详情返回最小 `BookItem`。
- 不支持能力记录为 `[legacyRuntime unsupported]`，不抛出未捕获异常。

## 测试策略

### Python 测试

- 验证生成 JS 包含五个实际函数而不是空占位。
- 验证生成 JS 包含 `createLegacyRuntime`。
- 验证生成兼容性报告。
- 验证报告能识别 `webView/java.*/@js/jsonpath/css/xpath`。

### JS 片段测试

用小型样例书源验证：

- JSON API 搜索能返回 `BookItem[]`
- CSS 详情能返回 `BookItem`
- JSON 目录能返回 `ChapterInfo[]`
- CSS 正文能返回文本
- `explore(GETALL)` 能返回分类数组

### 产物验证

- 重新生成 459 个 `booksources/*.js`
- 重新生成 `repository/`
- 校验 `repository.json`
- 抽查生成文件中五个函数存在且调用运行时

## 非目标

- 不承诺 459 个书源全部可直接运行。
- 不重写完整阅读 App 规则引擎。
- 不实现真实浏览器 WebView。
- 不绕过站点反爬、登录或加密限制。
