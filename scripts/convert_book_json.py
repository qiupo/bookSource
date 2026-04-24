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

TAURI_TYPES = {
    2: "comic",
    4: "video",
}

INVALID_FILENAME = re.compile(r'[\\/:*?"<>|\n\r\t]+')
HTTP_URL = re.compile(r'https?://[^\s#，,]+')

FEATURE_PATTERNS = {
    "js": re.compile(r"@js:|<js>", re.I),
    "java.ajax": re.compile(r"\bjava\.ajax(All)?\b", re.I),
    "java.base64": re.compile(r"\bjava\.base64", re.I),
    "java.md5": re.compile(r"\bjava\.md5", re.I),
    "cache": re.compile(r"\bcache\.", re.I),
    "cookie": re.compile(r"\bcookie\.", re.I),
    "source": re.compile(r"\bsource\.", re.I),
    "jsonpath": re.compile(r"@json:|\$\.", re.I),
    "css": re.compile(r"@css:", re.I),
    "xpath": re.compile(r"@XPath:|//", re.I),
}

UNSUPPORTED_PATTERNS = {
    "webView": re.compile(r"webView|webJs", re.I),
    "Android Java package": re.compile(r"Packages\.|JavaImporter", re.I),
    "crypto/signature": re.compile(r"javax\.crypto|MessageDigest|xGorgon|sign_key|Crypto", re.I),
}


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
    ]
    tauri_type = TAURI_TYPES.get(source.get("bookSourceType"))
    if tauri_type:
        lines.append(f"// @type {tauri_type}")
    lines.extend([
        f"// @enabled {enabled}",
        f"// @tags {','.join(tags)}",
    ])
    for line in description_lines(source.get("bookSourceComment")):
        lines.append(f"// @description {line}")
    return lines


def analyze_compatibility(source, file_name):
    text = json.dumps(source, ensure_ascii=False)
    features = [name for name, pattern in FEATURE_PATTERNS.items() if pattern.search(text)]
    media_feature = {1: "audio", 2: "comic", 4: "video"}.get(source.get("bookSourceType"))
    if media_feature and media_feature not in features:
        features.append(media_feature)
    unsupported = [name for name, pattern in UNSUPPORTED_PATTERNS.items() if pattern.search(text)]
    if unsupported:
        level = "manual"
    elif "js" in features or any(name.startswith("java.") for name in features):
        level = "partial"
    else:
        level = "high"
    return {
        "name": clean_text(source.get("bookSourceName")) or Path(file_name).stem,
        "fileName": file_name,
        "level": level,
        "features": features,
        "unsupported": unsupported,
    }


def runtime_template():
    return Path(__file__).with_name("legacy_runtime.js").read_text(encoding="utf-8")


def render_source(source):
    metadata = "\n".join(metadata_lines(source))
    payload = js_string(source)
    runtime = runtime_template()
    return f"""{metadata}

const LEGADO_SOURCE = {payload};

{runtime}

const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);

async function search(keyword, page) {{
  return await legacyRuntime.search(keyword, page);
}}

async function bookInfo(bookUrl) {{
  return await legacyRuntime.bookInfo(bookUrl);
}}

async function chapterList(tocUrl) {{
  return await legacyRuntime.chapterList(tocUrl);
}}

async function chapterContent(chapterUrl) {{
  return await legacyRuntime.chapterContent(chapterUrl);
}}

async function explore(page, category) {{
  return await legacyRuntime.explore(page, category);
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
    reports = []
    for index, source in enumerate(sources, start=1):
        if not isinstance(source, dict):
            continue
        name = clean_text(source.get("bookSourceName")) or f"source-{index}"
        filename = safe_filename(name, used)
        path = output_dir / filename
        path.write_text(render_source(source), encoding="utf-8")
        written.append(path)
        reports.append(analyze_compatibility(source, filename))
    (output_dir / "compatibility-report.json").write_text(
        json.dumps(reports, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
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
