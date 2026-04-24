#!/usr/bin/env python3
import argparse
import json
from pathlib import Path
from urllib.parse import quote


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
        if not str(item.get("downloadUrl", "")).endswith(quote(file_name)):
            raise SystemExit(f"downloadUrl does not reference encoded file name: {file_name}")

    print(f"Validated {len(repository_sources)} sources")
    return len(repository_sources)


def main():
    parser = argparse.ArgumentParser(description="Validate generated Legado Tauri repository outputs.")
    parser.add_argument("--booksources-dir", default="booksources")
    parser.add_argument("--repository-dir", default="repository")
    args = parser.parse_args()
    check(Path(args.booksources_dir), Path(args.repository_dir))


if __name__ == "__main__":
    main()
