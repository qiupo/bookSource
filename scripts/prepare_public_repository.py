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
