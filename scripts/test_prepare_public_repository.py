#!/usr/bin/env python3
import tempfile
from pathlib import Path

from prepare_public_repository import rebuild


def test_rebuild_copies_js_only_and_generates_index():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        source_dir = root / 'booksources'
        repository_dir = root / 'repository'
        source_dir.mkdir()
        (source_dir / '示例.js').write_text('// @name 示例\n// @url https://example.com\n// @tags 示例\n', encoding='utf-8')
        (source_dir / 'note.txt').write_text('ignore me', encoding='utf-8')
        repository_dir.mkdir()
        (repository_dir / 'old.js').write_text('old', encoding='utf-8')

        copied, indexed = rebuild(source_dir, repository_dir, 'https://raw.githubusercontent.com/user/repo/refs/heads/master', '测试仓库', '1.0.0')

        assert copied == 1
        assert indexed == 1
        assert (repository_dir / '示例.js').exists()
        assert (repository_dir / 'repository.json').exists()
        assert not (repository_dir / 'old.js').exists()
        assert not (repository_dir / 'note.txt').exists()
        assert 'refs/heads/master/repository/' in (repository_dir / 'repository.json').read_text(encoding='utf-8')


if __name__ == '__main__':
    test_rebuild_copies_js_only_and_generates_index()
    print('prepare repository tests passed')
