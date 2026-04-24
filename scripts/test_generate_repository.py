#!/usr/bin/env python3
import json
import tempfile
from pathlib import Path

from generate_repository import generate, parse_metadata


def test_parse_metadata_reads_header_fields():
    with tempfile.TemporaryDirectory() as tmp:
        path = Path(tmp) / '示例.js'
        path.write_text('\n'.join([
            '// @name 示例书源',
            '// @version 1.2.3',
            '// @author Tester',
            '// @url https://example.com',
            '// @logo https://example.com/favicon.ico',
            '// @enabled false',
            '// @tags 示例,小说',
            '// @description 第一行',
            '// @description 第二行',
            'async function search() { return []; }',
        ]), encoding='utf-8')

        metadata = parse_metadata(path)

        assert metadata['name'] == '示例书源'
        assert metadata['version'] == '1.2.3'
        assert metadata['author'] == 'Tester'
        assert metadata['url'] == 'https://example.com'
        assert metadata['group'] == '示例'
        assert metadata['logo'] == 'https://example.com/favicon.ico'
        assert metadata['enabled'] is False
        assert metadata['tags'] == ['示例', '小说']
        assert metadata['description'] == '第一行\n第二行'


def test_generate_writes_repository_json_with_encoded_download_url():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        source = root / '示例 书源.js'
        output = root / 'repository.json'
        source.write_text('// @name 示例\n// @url https://example.com\n// @tags 示例,小说\n', encoding='utf-8')

        payload = generate(root, 'https://raw.githubusercontent.com/user/repo/main', output, '测试仓库', '1.0.0')

        saved = json.loads(output.read_text(encoding='utf-8'))
        assert saved == payload
        assert saved['name'] == '测试仓库'
        assert saved['version'] == '1.0.0'
        assert len(saved['sources']) == 1
        item = saved['sources'][0]
        assert item['fileName'] == '示例 书源.js'
        assert item['downloadUrl'].endswith('/%E7%A4%BA%E4%BE%8B%20%E4%B9%A6%E6%BA%90.js')
        assert item['fileSize'] == source.stat().st_size


if __name__ == '__main__':
    test_parse_metadata_reads_header_fields()
    test_generate_writes_repository_json_with_encoded_download_url()
    print('repository generator tests passed')
