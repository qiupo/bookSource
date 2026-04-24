#!/usr/bin/env python3
import json
import tempfile
from pathlib import Path

from convert_book_json import convert, extract_author, safe_filename, version_from_timestamp


def test_safe_filename_removes_invalid_chars_and_deduplicates():
    used = set()
    assert safe_filename('A/B: C', used) == 'A_B_ C.js'
    assert safe_filename('A/B: C', used) == 'A_B_ C-2.js'


def test_metadata_helpers_extract_author_and_version():
    assert extract_author('authors: Alice & Bob\n备注') == 'Alice & Bob'
    assert version_from_timestamp(1759350105029) == '2025.10.01'


def test_convert_writes_js_with_metadata_and_payload():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        input_path = root / 'book.json'
        output_dir = root / 'booksources'
        input_path.write_text(json.dumps([
            {
                'bookSourceName': '测试/书源',
                'bookSourceGroup': '小说 书源',
                'bookSourceType': 0,
                'bookSourceUrl': 'https://example.com#abc',
                'enabled': True,
                'lastUpdateTime': 1759350105029,
                'bookSourceComment': 'authors: Tester\n第二行',
                'ruleSearch': {'bookList': '$.data'},
            }
        ], ensure_ascii=False), encoding='utf-8')

        written = convert(input_path, output_dir)

        assert len(written) == 1
        content = written[0].read_text(encoding='utf-8')
        assert '// @name 测试/书源' in content
        assert '// @version 2025.10.01' in content
        assert '// @author Tester' in content
        assert '// @url https://example.com' in content
        assert '// @enabled true' in content
        assert '// @tags 小说,书源,converted' in content
        assert 'const LEGADO_SOURCE = {' in content
        assert 'async function search(keyword, page)' in content
        assert '"ruleSearch": {' in content


if __name__ == '__main__':
    test_safe_filename_removes_invalid_chars_and_deduplicates()
    test_metadata_helpers_extract_author_and_version()
    test_convert_writes_js_with_metadata_and_payload()
    print('convert tests passed')
