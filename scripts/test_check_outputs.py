#!/usr/bin/env python3
import json
import tempfile
from pathlib import Path

from check_outputs import check


def test_check_accepts_matching_booksources_repository_and_index():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        booksources = root / 'booksources'
        repository = root / 'repository'
        booksources.mkdir()
        repository.mkdir()
        (booksources / '示例.js').write_text('// @name 示例\n', encoding='utf-8')
        (repository / '示例.js').write_text('// @name 示例\n', encoding='utf-8')
        (repository / 'repository.json').write_text(json.dumps({
            'sources': [{
                'name': '示例',
                'version': '1.0.0',
                'url': 'https://example.com',
                'fileName': '示例.js',
                'downloadUrl': 'https://raw.githubusercontent.com/user/repo/main/repository/%E7%A4%BA%E4%BE%8B.js',
                'fileSize': 12,
                'updatedAt': '2026-04-24T00:00:00Z',
            }]
        }, ensure_ascii=False), encoding='utf-8')

        assert check(booksources, repository) == 1


def test_check_rejects_mismatched_files():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        booksources = root / 'booksources'
        repository = root / 'repository'
        booksources.mkdir()
        repository.mkdir()
        (booksources / 'a.js').write_text('', encoding='utf-8')
        (repository / 'b.js').write_text('', encoding='utf-8')
        (repository / 'repository.json').write_text('{"sources": []}', encoding='utf-8')

        try:
            check(booksources, repository)
        except SystemExit as exc:
            assert 'differ' in str(exc)
        else:
            raise AssertionError('check should fail')


if __name__ == '__main__':
    test_check_accepts_matching_booksources_repository_and_index()
    test_check_rejects_mismatched_files()
    print('output validator tests passed')
