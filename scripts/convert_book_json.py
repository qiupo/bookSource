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
