# Legado Tauri 书源仓库转换工具

创建日期: 2026-04-24  
最后更新: 2026-04-24

本项目用于把旧版阅读/Legado 的 `book.json` 书源集合转换为 Legado Tauri 社区书源仓库结构。

本仓库只保存转换工具和公开发布产物；原始 `book.json` 与中间目录 `booksources/` 不提交到仓库。

当前公开 raw 前缀：

```text
https://raw.githubusercontent.com/qiupo/bookSource/main
```

生成后的公开仓库目录符合 Legado Tauri 文档约定：根目录只包含 `*.js` 书源文件和 `repository.json` 索引文件。

## 目录结构

```text
bookSource/
├── book.json                         # 原始旧版书源 JSON
├── booksources/                      # 转换后的可编辑 JS 书源
├── repository/                       # 可公开发布的仓库镜像
│   ├── repository.json
│   └── *.js
└── scripts/
    ├── convert_book_json.py          # book.json -> booksources/*.js
    ├── generate_repository.py        # repository/*.js -> repository.json
    ├── prepare_public_repository.py  # booksources -> repository + repository.json
    └── check_outputs.py              # 校验生成结果
```

## 快速开始

### 1. 转换 `book.json`

```bash
python3 scripts/convert_book_json.py --input book.json --output booksources
```

当前 `book.json` 会生成 459 个 JS 书源文件。

### 2. 生成公开仓库目录

把下面的 `--base-url` 替换成你自己的 GitHub raw 地址：

```bash
python3 scripts/prepare_public_repository.py \
  --source-dir booksources \
  --repository-dir repository \
  --base-url https://raw.githubusercontent.com/qiupo/bookSource/main \
  --name "我的社区书源仓库"
```

生成结果：

```text
repository/
├── repository.json
└── *.js
```

### 3. 校验结果

```bash
python3 scripts/check_outputs.py \
  --booksources-dir booksources \
  --repository-dir repository
```

成功时输出类似：

```text
Validated 459 sources
```

## 脚本说明

### `convert_book_json.py`

将旧版 `book.json` 转换为 Legado Tauri 的 JS 书源文件。

它会为每个书源生成头部元数据：

- `@name`
- `@version`
- `@author`
- `@url`
- `@enabled`
- `@tags`
- `@description`

同时会把原始旧版规则完整保存在生成文件的 `LEGADO_SOURCE` 常量中，便于后续人工迁移。

注意：生成的 `search`、`bookInfo`、`chapterList`、`chapterContent`、`explore` 是兼容占位函数，不代表旧版规则已经自动翻译成 Legado Tauri 原生可运行逻辑。

### `generate_repository.py`

读取 `repository/*.js` 前 60 行中的元数据，生成社区仓库索引 `repository.json`。

单独使用示例：

```bash
python3 scripts/generate_repository.py \
  --dir repository \
  --base-url https://raw.githubusercontent.com/qiupo/bookSource/main \
  --output repository/repository.json \
  --name "我的社区书源仓库"
```

### `prepare_public_repository.py`

推荐发布前使用的脚本。它会：

1. 清空并重建 `repository/`
2. 复制 `booksources/*.js` 到 `repository/`
3. 生成 `repository/repository.json`

### `check_outputs.py`

用于检查：

- `booksources/` 和 `repository/` 中的 JS 文件是否一致
- `repository.json` 是否可解析
- `sources` 数量是否匹配 JS 文件数量
- 每个条目是否包含关键字段
- `downloadUrl` 是否指向 URL 编码后的文件名

## 发布到 GitHub

1. 创建或使用当前公开仓库：`https://github.com/qiupo/bookSource`。
2. 仓库提交转换工具、README 和 `repository/` 发布产物。
3. 不提交原始 `book.json` 与中间目录 `booksources/`。
4. 使用真实 raw 地址重新生成索引。

例如当前仓库是：

```text
https://github.com/qiupo/bookSource
```

那么 raw 前缀通常是：

```text
https://raw.githubusercontent.com/qiupo/bookSource/main
```

重新生成：

```bash
python3 scripts/prepare_public_repository.py \
  --base-url https://raw.githubusercontent.com/qiupo/bookSource/main \
  --name "我的社区书源仓库"
```

然后发布 `repository/` 中的全部文件。

## 测试

运行全部脚本测试：

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
PYTHONPATH=scripts python3 scripts/test_generate_repository.py
PYTHONPATH=scripts python3 scripts/test_prepare_public_repository.py
PYTHONPATH=scripts python3 scripts/test_check_outputs.py
```

运行完整产物校验：

```bash
python3 scripts/check_outputs.py --booksources-dir booksources --repository-dir repository
```

## 注意事项

- `repository/` 是发布产物目录，根目录应只保留 `*.js` 和 `repository.json`。
- `book.json` 是原始数据文件，不提交到公开仓库。
- `booksources/` 是中间可编辑目录，默认不提交到公开仓库。
- 每次修改 `booksources/*.js` 后，都应重新运行 `prepare_public_repository.py`。
- 发布前必须确认 `--base-url` 为 `https://raw.githubusercontent.com/qiupo/bookSource/main`。
- 当前转换会保留旧规则，但不会自动保证每个书源在 Legado Tauri 中可直接搜索和阅读。
