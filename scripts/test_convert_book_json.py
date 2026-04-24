#!/usr/bin/env python3
import json
import subprocess
import tempfile
from pathlib import Path

from convert_book_json import analyze_compatibility, convert, extract_author, metadata_lines, safe_filename, version_from_timestamp


def test_safe_filename_removes_invalid_chars_and_deduplicates():
    used = set()
    assert safe_filename('A/B: C', used) == 'A_B_ C.js'
    assert safe_filename('A/B: C', used) == 'A_B_ C-2.js'


def test_metadata_helpers_extract_author_and_version():
    assert extract_author('authors: Alice & Bob\n备注') == 'Alice & Bob'
    assert version_from_timestamp(1759350105029) == '2025.10.01'


def test_runtime_template_contains_required_entrypoints():
    runtime = Path(__file__).with_name('legacy_runtime.js').read_text(encoding='utf-8')
    for name in [
        'createLegacyRuntime',
        'search(keyword, page)',
        'bookInfo(bookUrl)',
        'chapterList(tocUrl)',
        'chapterContent(chapterUrl)',
        'explore(page, category)',
        'applyRule',
        'request',
        'evaluateJsonPath',
        'evaluateCss',
        'evaluateXPath',
        'createJavaShim',
        'sourceType',
        'extractImageUrls',
        'extractMediaUrl',
        'formatChapterContent',
    ]:
        assert name in runtime, name
    assert 'return formatChapterContent(applyRule(data, source.ruleContent && source.ruleContent.content), chapterUrl);' in runtime


def run_runtime_assertions(script):
    runtime = Path(__file__).with_name('legacy_runtime.js').read_text(encoding='utf-8')
    subprocess.run(['node', '-e', runtime + '\n' + script], check=True)


def test_runtime_replaces_template_cleaners_and_recursive_paths():
    run_runtime_assertions(r'''
const assert = require('assert');
const runtime = createLegacyRuntime({ bookSourceName: '企鹅阅读', bookSourceUrl: 'https://ubook.reader.qq.com' });
const data = {
  categoryInfoV4: '玄幻 小说',
  nested: { shortName: '短篇小说' },
  chapinfo: { lastChapterUpdateTime: '2026-04-24 10:30:00' }
};
assert.strictEqual(runtime.applyRule(data, '{{$.categoryInfoV4##\\s+##/}}'), '玄幻/小说');
assert.strictEqual(runtime.applyRule(data, '{{$..shortName##小说##}}'), '短篇');
assert.strictEqual(runtime.applyRule(data, '{{$.chapinfo.lastChapterUpdateTime##\\s.*##}}'), '2026-04-24');
''')


def test_runtime_does_not_turn_object_script_results_into_object_url():
    run_runtime_assertions(r'''
const assert = require('assert');
const runtime = createLegacyRuntime({ bookSourceName: '企鹅阅读', bookSourceUrl: 'https://ubook.reader.qq.com/api/book' });
const value = runtime.applyRule({ bid: '12345' }, '<js>result</js>');
const mapped = runtime.mapFields({ bid: '12345' }, { chapterUrl: '<js>result</js>' }, { url: 'chapterUrl' }, 'https://ubook.reader.qq.com/api/book');
const returnedObject = runtime.mapFields({ bid: '12345' }, { chapterUrl: '<js>return result</js>' }, { url: 'chapterUrl' }, 'https://ubook.reader.qq.com/api/book');
assert.strictEqual(value, '');
assert.notStrictEqual(mapped.url, 'https://ubook.reader.qq.com/api/[object Object]');
assert.notStrictEqual(mapped.url, 'https://ubook.reader.qq.com/api/book/[object Object]');
assert.notStrictEqual(returnedObject.url, 'https://ubook.reader.qq.com/api/[object Object]');
assert.notStrictEqual(returnedObject.url, 'https://ubook.reader.qq.com/api/book/[object Object]');
assert.strictEqual(mapped.url, '');
assert.strictEqual(returnedObject.url, '');
''')


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
        assert 'function createLegacyRuntime(source)' in content
        assert 'const legacyRuntime = createLegacyRuntime(LEGADO_SOURCE);' in content
        assert 'return await legacyRuntime.search(keyword, page);' in content
        assert 'return await legacyRuntime.bookInfo(bookUrl);' in content
        assert 'return await legacyRuntime.chapterList(tocUrl);' in content
        assert 'return await legacyRuntime.chapterContent(chapterUrl);' in content
        assert 'return await legacyRuntime.explore(page, category);' in content
        assert 'converted source requires manual migration' not in content


def test_analyze_compatibility_detects_features_and_manual_level():
    source = {
        'bookSourceName': '复杂源',
        'searchUrl': '@js:java.ajax("https://example.com")',
        'ruleBookInfo': {'name': '@css:h1@text'},
        'ruleToc': {'chapterList': '$.data[*]'},
        'ruleExplore': {'bookList': '//div'},
        'ruleSearch': {'bookList': '$.list'},
        'ruleContent': {'webJs': 'click()', 'content': 'Packages.javax.crypto.Cipher'},
    }

    report = analyze_compatibility(source, '复杂源.js')

    assert report['name'] == '复杂源'
    assert report['fileName'] == '复杂源.js'
    assert report['level'] == 'manual'
    assert 'js' in report['features']
    assert 'java.ajax' in report['features']
    assert 'css' in report['features']
    assert 'jsonpath' in report['features']
    assert 'xpath' in report['features']
    assert 'webView' in report['unsupported']
    assert 'Android Java package' in report['unsupported']


def test_convert_writes_compatibility_report():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        input_path = root / 'book.json'
        output_dir = root / 'booksources'
        input_path.write_text(json.dumps([
            {'bookSourceName': '简单源', 'bookSourceUrl': 'https://example.com', 'ruleSearch': {'bookList': '$.data'}}
        ], ensure_ascii=False), encoding='utf-8')

        convert(input_path, output_dir)

        report_path = output_dir / 'compatibility-report.json'
        assert report_path.exists()
        report = json.loads(report_path.read_text(encoding='utf-8'))
        assert report[0]['name'] == '简单源'
        assert report[0]['level'] in {'high', 'partial', 'manual'}


def test_metadata_lines_include_tauri_media_type():
    comic = '\n'.join(metadata_lines({'bookSourceName': '漫画源', 'bookSourceUrl': 'https://example.com', 'bookSourceType': 2}))
    video = '\n'.join(metadata_lines({'bookSourceName': '视频源', 'bookSourceUrl': 'https://example.com', 'bookSourceType': 4}))
    novel = '\n'.join(metadata_lines({'bookSourceName': '小说源', 'bookSourceUrl': 'https://example.com', 'bookSourceType': 0}))

    assert '// @type comic' in comic
    assert '// @type video' in video
    assert '// @type' not in novel


def test_analyze_compatibility_marks_media_types():
    comic = analyze_compatibility({'bookSourceName': '漫画源', 'bookSourceType': 2}, '漫画源.js')
    video = analyze_compatibility({'bookSourceName': '视频源', 'bookSourceType': 4}, '视频源.js')
    audio = analyze_compatibility({'bookSourceName': '音频源', 'bookSourceType': 1}, '音频源.js')

    assert 'comic' in comic['features']
    assert 'video' in video['features']
    assert 'audio' in audio['features']


if __name__ == '__main__':
    test_safe_filename_removes_invalid_chars_and_deduplicates()
    test_metadata_helpers_extract_author_and_version()
    test_runtime_template_contains_required_entrypoints()
    test_runtime_replaces_template_cleaners_and_recursive_paths()
    test_runtime_does_not_turn_object_script_results_into_object_url()
    test_convert_writes_js_with_metadata_and_payload()
    test_analyze_compatibility_detects_features_and_manual_level()
    test_convert_writes_compatibility_report()
    test_metadata_lines_include_tauri_media_type()
    test_analyze_compatibility_marks_media_types()
    print('convert tests passed')
