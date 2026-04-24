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


def source_entry(path, base_url, download_dir=None):
    metadata = parse_metadata(path)
    file_name = path.name
    encoded_name = quote(file_name)
    parts = [base_url.rstrip('/')]
    if download_dir:
        parts.append(quote(download_dir.strip('/')))
    parts.append(encoded_name)
    return {
        **metadata,
        "fileName": file_name,
        "downloadUrl": "/".join(parts),
        "fileSize": path.stat().st_size,
        "updatedAt": file_updated_at(path),
    }


def generate(directory, base_url, output, name, version, download_dir=None):
    files = sorted(path for path in directory.glob("*.js") if path.is_file())
    payload = {
        "name": name,
        "version": version,
        "updatedAt": utc_now(),
        "sources": [source_entry(path, base_url, download_dir) for path in files],
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
    parser.add_argument("--download-dir", default=None, help="Path segment between base URL and JS files")
    args = parser.parse_args()

    directory = Path(args.dir)
    output = Path(args.output) if args.output else directory / "repository.json"
    payload = generate(directory, args.base_url, output, args.name, args.version, args.download_dir)
    print(f"Generated {output} with {len(payload['sources'])} sources")


if __name__ == "__main__":
    main()
