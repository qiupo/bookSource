# Legado Repository Converter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Python scripts that convert `book.json` into editable Legado Tauri JS booksource files and a public community repository mirror with `repository.json`.

**Architecture:** Keep conversion, indexing, and publishing as separate scripts under `scripts/`. `convert_book_json.py` creates `booksources/*.js`; `generate_repository.py` indexes JS metadata; `prepare_public_repository.py` copies editable sources into `repository/` and generates the public index.

**Tech Stack:** Python 3 standard library only (`argparse`, `json`, `pathlib`, `datetime`, `urllib.parse`, `shutil`, `re`). Tests use direct Python assertions and command-line verification instead of adding a test framework.

---

## File Structure

- Create `scripts/convert_book_json.py`: parses旧版 `book.json` and writes one metadata-rich JS wrapper per source.
- Create `scripts/generate_repository.py`: parses JS header metadata and writes community `repository.json`.
- Create `scripts/prepare_public_repository.py`: rebuilds `repository/` from `booksources/` and calls repository index generation.
- Create `scripts/check_outputs.py`: validates generated files after conversion.
- Generate `booksources/*.js`: editable converted sources.
- Generate `repository/*.js`: public mirror files.
- Generate `repository/repository.json`: public index.

## Task 1: Create Converter Script

**Files:**
- Create: `scripts/convert_book_json.py`

- [ ] **Step 1: Write `scripts/convert_book_json.py`**

```python
#!/usr/bin/env python3
import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path

TYPE_NAMES = {
    0: "小说",
    1: "音频",
    2: "图片",
    3: "文件",
}

INVALID_FILENAME = re.compile(r'[\\/:*?"<>|\n\r\t]+')
HTTP_URL = re.compile(r'https?://[^\s#，,]+')


def clean_text(value):
    if value is None:
        return ""
    return str(value).replace("\r\n", "\n").replace("\r", "\n").strip()


def safe_filename(name, used):
    base = INVALID_FILENAME.sub("_", clean_text(name))
    base = re.sub(r"\s+", " ", base).strip(" ._")
    if not base:
        base = "source"
    candidate = base
    index = 2
    while candidate in used:
        candidate = f"{base}-{index}"
        index += 1
    used.add(candidate)
    return f"{candidate}.js"


def version_from_timestamp(value):
    try:
        timestamp = int(value) / 1000
    except (TypeError, ValueError):
        return "1.0.0"
    dt = datetime.fromtimestamp(timestamp, tz=timezone.utc)
    return dt.strftime("%Y.%m.%d")


def extract_url(value):
    text = clean_text(value)
    match = HTTP_URL.search(text)
    return match.group(0) if match else text


def extract_author(comment):
    text = clean_text(comment)
    patterns = [
        r"authors?[:：]\s*([^\n]+)",
        r"作者[:：]\s*([^\n]+)",
        r"整理[:：]\s*([^\n]+)",
        r"书源整理[:：]\s*([^\n]+)",
    ]
    for pattern in patterns:
        match = re.search(pattern, text, flags=re.IGNORECASE)
        if match:
            author = match.group(1).strip()
            return author[:80] if author else "converted"
    return "converted"


def description_lines(comment, limit=6):
    lines = []
    for line in clean_text(comment).split("\n"):
        line = line.strip()
        if line:
            lines.append(line)
        if len(lines) >= limit:
            break
    return lines


def tags_for_source(source):
    tags = []
    group = clean_text(source.get("bookSourceGroup"))
    if group:
        tags.extend(part.strip() for part in re.split(r"[,，/ ]+", group) if part.strip())
    source_type = source.get("bookSourceType")
    tags.append(TYPE_NAMES.get(source_type, f"类型{source_type}" if source_type is not None else "未知类型"))
    tags.append("converted")
    unique = []
    for tag in tags:
        if tag and tag not in unique:
            unique.append(tag)
    return unique


def js_string(value):
    return json.dumps(value, ensure_ascii=False, indent=2)


def metadata_lines(source):
    name = clean_text(source.get("bookSourceName")) or "未命名书源"
    version = version_from_timestamp(source.get("lastUpdateTime"))
    author = extract_author(source.get("bookSourceComment"))
    url = extract_url(source.get("bookSourceUrl")) or "about:blank"
    enabled = "true" if source.get("enabled", True) else "false"
    tags = tags_for_source(source)
    lines = [
        f"// @name {name}",
        f"// @version {version}",
        f"// @author {author}",
        f"// @url {url}",
        f"// @enabled {enabled}",
        f"// @tags {','.join(tags)}",
    ]
    for line in description_lines(source.get("bookSourceComment")):
        lines.append(f"// @description {line}")
    return lines


def render_source(source):
    metadata = "\n".join(metadata_lines(source))
    payload = js_string(source)
    return f"""{metadata}

const LEGADO_SOURCE = {payload};

async function search(keyword, page) {{
  legado.log('[search] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return [];
}}

async function bookInfo(bookUrl) {{
  legado.log('[bookInfo] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return {{
    name: LEGADO_SOURCE.bookSourceName || '',
    author: '',
    bookUrl: bookUrl,
    tocUrl: bookUrl,
    coverUrl: '',
    intro: LEGADO_SOURCE.bookSourceComment || ''
  }};
}}

async function chapterList(tocUrl) {{
  legado.log('[chapterList] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return [];
}}

async function chapterContent(chapterUrl) {{
  legado.log('[chapterContent] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return '';
}}

async function explore(page, category) {{
  legado.log('[explore] converted source requires manual migration: ' + LEGADO_SOURCE.bookSourceName);
  return [];
}}
"""


def load_sources(input_path):
    with input_path.open("r", encoding="utf-8-sig") as handle:
        data = json.load(handle)
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        return [data]
    raise ValueError("book source JSON must be an object or array")


def convert(input_path, output_dir):
    sources = load_sources(input_path)
    output_dir.mkdir(parents=True, exist_ok=True)
    used = set()
    written = []
    for index, source in enumerate(sources, start=1):
        if not isinstance(source, dict):
            continue
        name = clean_text(source.get("bookSourceName")) or f"source-{index}"
        filename = safe_filename(name, used)
        path = output_dir / filename
        path.write_text(render_source(source), encoding="utf-8")
        written.append(path)
    return written


def main():
    parser = argparse.ArgumentParser(description="Convert old Legado book.json into Legado Tauri JS sources.")
    parser.add_argument("--input", default="book.json", help="Input book.json path")
    parser.add_argument("--output", default="booksources", help="Output directory for JS sources")
    args = parser.parse_args()

    written = convert(Path(args.input), Path(args.output))
    print(f"Converted {len(written)} sources into {args.output}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run converter**

Run:

```bash
python3 scripts/convert_book_json.py --input book.json --output booksources
```

Expected output:

```text
Converted 459 sources into booksources
```

- [ ] **Step 3: Verify generated source count**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
files = sorted(Path('booksources').glob('*.js'))
print(len(files))
print(files[0].name)
PY
```

Expected output first line:

```text
459
```

## Task 2: Create Repository Index Generator

**Files:**
- Create: `scripts/generate_repository.py`

- [ ] **Step 1: Write `scripts/generate_repository.py`**

```python
#!/usr/bin/env python3
import argparse
import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import quote

META_PREFIX = "// @"


def utc_now():
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def file_updated_at(path):
    return datetime.fromtimestamp(path.stat().st_mtime, tz=timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def parse_bool(value):
    return str(value).strip().lower() not in {"false", "0", "no", "off"}


def parse_metadata(path):
    values = {}
    descriptions = []
    urls = []
    with path.open("r", encoding="utf-8") as handle:
        for index, line in enumerate(handle):
            if index >= 60:
                break
            stripped = line.strip()
            if not stripped.startswith(META_PREFIX):
                continue
            body = stripped[len(META_PREFIX):]
            if " " in body:
                key, value = body.split(" ", 1)
            else:
                key, value = body, ""
            key = key.strip()
            value = value.strip()
            if key == "description":
                descriptions.append(value)
            elif key == "url":
                urls.append(value)
            else:
                values[key] = value
    tags = [tag.strip() for tag in values.get("tags", "").split(",") if tag.strip()]
    return {
        "name": values.get("name", path.stem),
        "version": values.get("version", "1.0.0"),
        "author": values.get("author", ""),
        "url": urls[0] if urls else values.get("url", ""),
        "group": tags[0] if tags else "",
        "logo": values.get("logo", ""),
        "description": "\n".join(descriptions),
        "tags": tags,
        "enabled": parse_bool(values.get("enabled", "true")),
    }


def source_entry(path, base_url):
    metadata = parse_metadata(path)
    file_name = path.name
    encoded_name = quote(file_name)
    return {
        **metadata,
        "fileName": file_name,
        "downloadUrl": f"{base_url.rstrip('/')}/{encoded_name}",
        "fileSize": path.stat().st_size,
        "updatedAt": file_updated_at(path),
    }


def generate(directory, base_url, output, name, version):
    files = sorted(path for path in directory.glob("*.js") if path.is_file())
    payload = {
        "name": name,
        "version": version,
        "updatedAt": utc_now(),
        "sources": [source_entry(path, base_url) for path in files],
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return payload


def main():
    parser = argparse.ArgumentParser(description="Generate Legado Tauri community repository.json.")
    parser.add_argument("--dir", default="repository", help="Directory containing public JS sources")
    parser.add_argument("--base-url", required=True, help="Public raw URL prefix")
    parser.add_argument("--output", default=None, help="Output repository.json path")
    parser.add_argument("--name", default="Legado Tauri 书源仓库", help="Repository display name")
    parser.add_argument("--version", default="1.0.0", help="Repository version")
    args = parser.parse_args()

    directory = Path(args.dir)
    output = Path(args.output) if args.output else directory / "repository.json"
    payload = generate(directory, args.base_url, output, args.name, args.version)
    print(f"Generated {output} with {len(payload['sources'])} sources")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Create a temporary repository directory for the index test**

Run:

```bash
rm -rf repository && mkdir repository && cp booksources/*.js repository/
```

Expected: command exits with status 0.

- [ ] **Step 3: Run index generator**

Run:

```bash
python3 scripts/generate_repository.py --dir repository --base-url https://raw.githubusercontent.com/your/repo/main --output repository/repository.json --name "我的社区书源仓库"
```

Expected output:

```text
Generated repository/repository.json with 459 sources
```

- [ ] **Step 4: Validate index shape**

Run:

```bash
python3 - <<'PY'
import json
from pathlib import Path
payload = json.loads(Path('repository/repository.json').read_text(encoding='utf-8'))
assert payload['name'] == '我的社区书源仓库'
assert isinstance(payload['sources'], list)
assert len(payload['sources']) == 459
first = payload['sources'][0]
for key in ['name','version','author','url','group','logo','description','tags','enabled','fileName','downloadUrl','fileSize','updatedAt']:
    assert key in first, key
print('repository.json ok')
PY
```

Expected output:

```text
repository.json ok
```

## Task 3: Create Public Repository Preparer

**Files:**
- Create: `scripts/prepare_public_repository.py`

- [ ] **Step 1: Write `scripts/prepare_public_repository.py`**

```python
#!/usr/bin/env python3
import argparse
import shutil
from pathlib import Path

from generate_repository import generate


def rebuild(source_dir, repository_dir, base_url, name, version):
    if repository_dir.exists():
        shutil.rmtree(repository_dir)
    repository_dir.mkdir(parents=True)

    files = sorted(path for path in source_dir.glob("*.js") if path.is_file())
    for path in files:
        shutil.copy2(path, repository_dir / path.name)

    payload = generate(
        directory=repository_dir,
        base_url=base_url,
        output=repository_dir / "repository.json",
        name=name,
        version=version,
    )
    return len(files), len(payload["sources"])


def main():
    parser = argparse.ArgumentParser(description="Prepare public Legado Tauri repository mirror.")
    parser.add_argument("--source-dir", default="booksources", help="Editable JS source directory")
    parser.add_argument("--repository-dir", default="repository", help="Public repository output directory")
    parser.add_argument("--base-url", required=True, help="Public raw URL prefix")
    parser.add_argument("--name", default="Legado Tauri 书源仓库", help="Repository display name")
    parser.add_argument("--version", default="1.0.0", help="Repository version")
    args = parser.parse_args()

    copied, indexed = rebuild(
        source_dir=Path(args.source_dir),
        repository_dir=Path(args.repository_dir),
        base_url=args.base_url,
        name=args.name,
        version=args.version,
    )
    print(f"Prepared {args.repository_dir}: copied {copied} sources, indexed {indexed} sources")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run public repository preparer**

Run:

```bash
python3 scripts/prepare_public_repository.py --base-url https://raw.githubusercontent.com/your/repo/main --name "我的社区书源仓库"
```

Expected output:

```text
Prepared repository: copied 459 sources, indexed 459 sources
```

- [ ] **Step 3: Verify repository root contents**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
entries = sorted(Path('repository').iterdir())
assert entries, 'repository is empty'
assert all(path.is_file() for path in entries), 'repository contains non-file entry'
assert all(path.suffix == '.js' or path.name == 'repository.json' for path in entries), 'unexpected file in repository'
print(len([p for p in entries if p.suffix == '.js']))
print('repository root ok')
PY
```

Expected output:

```text
459
repository root ok
```

## Task 4: Create Output Validator

**Files:**
- Create: `scripts/check_outputs.py`

- [ ] **Step 1: Write `scripts/check_outputs.py`**

```python
#!/usr/bin/env python3
import argparse
import json
from pathlib import Path


def check(booksources_dir, repository_dir):
    booksources = sorted(path.name for path in booksources_dir.glob("*.js"))
    repository_sources = sorted(path.name for path in repository_dir.glob("*.js"))
    if not booksources:
        raise SystemExit("booksources contains no JS files")
    if booksources != repository_sources:
        raise SystemExit("booksources and repository JS files differ")

    index_path = repository_dir / "repository.json"
    payload = json.loads(index_path.read_text(encoding="utf-8"))
    sources = payload.get("sources")
    if not isinstance(sources, list):
        raise SystemExit("repository.json sources must be a list")
    if len(sources) != len(repository_sources):
        raise SystemExit("repository.json source count does not match JS files")

    filenames = set(repository_sources)
    for item in sources:
        file_name = item.get("fileName")
        if file_name not in filenames:
            raise SystemExit(f"indexed file does not exist: {file_name}")
        for key in ["name", "version", "url", "fileName", "downloadUrl", "fileSize", "updatedAt"]:
            if key not in item:
                raise SystemExit(f"missing key {key} in {file_name}")
        if not str(item.get("downloadUrl", "")).endswith(file_name.replace(' ', '%20')) and "%" not in str(item.get("downloadUrl", "")):
            raise SystemExit(f"downloadUrl may not reference encoded file name: {file_name}")

    print(f"Validated {len(repository_sources)} sources")


def main():
    parser = argparse.ArgumentParser(description="Validate generated Legado Tauri repository outputs.")
    parser.add_argument("--booksources-dir", default="booksources")
    parser.add_argument("--repository-dir", default="repository")
    args = parser.parse_args()
    check(Path(args.booksources_dir), Path(args.repository_dir))


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run validator**

Run:

```bash
python3 scripts/check_outputs.py --booksources-dir booksources --repository-dir repository
```

Expected output:

```text
Validated 459 sources
```

## Task 5: Final Verification

**Files:**
- Verify generated files only.

- [ ] **Step 1: Rebuild from scratch**

Run:

```bash
rm -rf booksources repository && python3 scripts/convert_book_json.py --input book.json --output booksources && python3 scripts/prepare_public_repository.py --base-url https://raw.githubusercontent.com/your/repo/main --name "我的社区书源仓库"
```

Expected output contains:

```text
Converted 459 sources into booksources
Prepared repository: copied 459 sources, indexed 459 sources
```

- [ ] **Step 2: Validate final output**

Run:

```bash
python3 scripts/check_outputs.py --booksources-dir booksources --repository-dir repository
```

Expected output:

```text
Validated 459 sources
```

- [ ] **Step 3: Inspect a generated JS file header**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
first = sorted(Path('repository').glob('*.js'))[0]
print(first.name)
print('\n'.join(first.read_text(encoding='utf-8').splitlines()[:12]))
PY
```

Expected output includes metadata lines like:

```text
// @name
// @version
// @author
// @url
// @enabled
// @tags
```

- [ ] **Step 4: Inspect repository index sample**

Run:

```bash
python3 - <<'PY'
import json
from pathlib import Path
payload = json.loads(Path('repository/repository.json').read_text(encoding='utf-8'))
print(payload['name'])
print(payload['sources'][0]['fileName'])
print(payload['sources'][0]['downloadUrl'])
PY
```

Expected output: repository name, a `.js` filename, and a raw GitHub URL ending in an encoded `.js` file name.
