# Legado Tauri 社区书源仓库转换设计

## 目标

把当前目录中的旧版 `book.json` 书源集合转换为 Legado Tauri 社区书源仓库发布结构。

发布产物目录为 `repository/`，根目录只包含：

- `repository.json`
- 一个或多个 `*.js` 书源脚本

维护目录为 `booksources/`，保存从 `book.json` 转换出的可编辑 JS 书源文件。

## 目录结构

```text
bookSource/
  book.json
  booksources/
    书源A.js
    书源B.js
  repository/
    repository.json
    书源A.js
    书源B.js
  scripts/
    convert_book_json.py
    generate_repository.py
    prepare_public_repository.py
```

## 脚本职责

### `scripts/convert_book_json.py`

输入旧版阅读/Legado JSON 书源文件，输出 `booksources/*.js`。

默认输入：`book.json`
默认输出：`booksources/`

每个 JSON 条目生成一个 JS 文件。文件名来自 `bookSourceName`，会移除非法字符并自动去重。

JS 文件头部写入 Legado Tauri 可识别的元数据：

- `@name` ← `bookSourceName`
- `@version` ← 基于 `lastUpdateTime` 生成，缺失时为 `1.0.0`
- `@author` ← 从备注中尽量提取，缺失时为 `converted`
- `@url` ← `bookSourceUrl` 中可识别的 HTTP(S) 地址；无法识别时保留原值
- `@enabled` ← `enabled`
- `@tags` ← `bookSourceGroup`、类型名、转换标签
- `@description` ← `bookSourceComment` 的前几行

函数体采用兼容包装：保留旧 JSON 规则为 `LEGADO_SOURCE` 常量，并生成 `search`、`bookInfo`、`chapterList`、`chapterContent`、`explore` 函数占位。这样不丢失旧规则信息，也允许后续人工把单个书源迁移为原生 Tauri 解析逻辑。

### `scripts/generate_repository.py`

读取指定目录的 `*.js` 文件前 60 行元数据，生成 `repository.json`。

参数：

- `--dir`：发布目录，默认 `./repository`
- `--base-url`：公开 raw 下载前缀，必填或使用默认占位
- `--output`：索引输出路径，默认 `<dir>/repository.json`
- `--name`：仓库名称，默认 `Legado Tauri 书源仓库`
- `--version`：仓库版本，默认 `1.0.0`

生成字段遵循社区仓库规范：`name/version/updatedAt/sources[]`，每个 source 包含 `name/version/author/url/group/logo/description/tags/enabled/fileName/downloadUrl/fileSize/updatedAt`。

### `scripts/prepare_public_repository.py`

重建公开发布目录：

1. 清空并创建 `repository/`
2. 复制 `booksources/*.js` 到 `repository/`
3. 调用索引生成逻辑写入 `repository/repository.json`

## 数据流

```text
book.json
  ↓ convert_book_json.py
booksources/*.js
  ↓ prepare_public_repository.py
repository/*.js
repository/repository.json
```

## 错误处理

- `book.json` 不是合法 JSON 时直接失败并输出原因。
- 单个书源缺少名称时使用 `source-序号`。
- 文件名冲突时追加 `-2`、`-3`。
- `repository.json` 生成时跳过非 `.js` 文件。
- `downloadUrl` 使用 URL 编码后的文件名拼接，确保中文文件名可下载。

## 验证方式

实现后至少运行：

1. `python3 scripts/convert_book_json.py --input book.json --output booksources`
2. `python3 scripts/prepare_public_repository.py --base-url <公开 raw 地址>`
3. 用 Python 解析 `repository/repository.json`
4. 检查 `booksources` 与 `repository` 中 JS 数量一致
5. 抽查前几个 JS 文件的元数据和保留的旧规则内容

## 非目标

- 不在本次实现中完整翻译旧版阅读规则为可直接运行的原生 Legado Tauri 解析函数。
- 不自动判断每个旧书源是否仍然可用。
- 不发布或推送到 GitHub。
