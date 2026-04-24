# Legado Media Type Runtime Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve generated Legado Tauri sources for comic/video media types by writing correct `@type` metadata and returning media-shaped `chapterContent` values.

**Architecture:** Keep conversion in `convert_book_json.py` and runtime behavior in `legacy_runtime.js`. Python maps old `bookSourceType` values into Tauri metadata and compatibility features; JavaScript runtime branches `chapterContent()` by source type to extract image arrays for comics and direct playback URLs for video/audio-like sources.

**Tech Stack:** Python 3 standard library tests; generated JavaScript targets Legado Tauri APIs and conservative Boa-compatible syntax.

---

## File Structure

- Modify `scripts/convert_book_json.py`: add `@type comic/video`, type feature reporting, and tests.
- Modify `scripts/legacy_runtime.js`: media type helpers and `chapterContent()` branch.
- Modify `scripts/test_convert_book_json.py`: metadata/report tests for comic/video.
- Generated `booksources/*.js`, `booksources/compatibility-report.json`, `repository/*.js`, `repository/repository.json`.

## Task 1: Add Tauri @type Metadata Mapping

**Files:**
- Modify: `scripts/convert_book_json.py`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Add failing test for comic/video metadata**

Add this test to `scripts/test_convert_book_json.py` before the `if __name__ == '__main__'` block:

```python
def test_metadata_lines_include_tauri_media_type():
    comic = '\n'.join(metadata_lines({'bookSourceName': '漫画源', 'bookSourceUrl': 'https://example.com', 'bookSourceType': 2}))
    video = '\n'.join(metadata_lines({'bookSourceName': '视频源', 'bookSourceUrl': 'https://example.com', 'bookSourceType': 4}))
    novel = '\n'.join(metadata_lines({'bookSourceName': '小说源', 'bookSourceUrl': 'https://example.com', 'bookSourceType': 0}))

    assert '// @type comic' in comic
    assert '// @type video' in video
    assert '// @type' not in novel
```

Update import line to include `metadata_lines`.

Add this call in the `__main__` block:

```python
    test_metadata_lines_include_tauri_media_type()
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL because `metadata_lines()` does not emit `@type`.

- [ ] **Step 3: Implement type mapping**

In `scripts/convert_book_json.py`, add this constant near `TYPE_NAMES`:

```python
TAURI_TYPES = {
    2: "comic",
    4: "video",
}
```

In `metadata_lines(source)`, after the `@url` line and before `@enabled`, insert:

```python
    tauri_type = TAURI_TYPES.get(source.get("bookSourceType"))
    if tauri_type:
        lines.append(f"// @type {tauri_type}")
```

Because `lines` is currently built as one list literal, change it to:

```python
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
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 2: Add Media Features to Compatibility Report

**Files:**
- Modify: `scripts/convert_book_json.py`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Add failing test for media features**

Add this test to `scripts/test_convert_book_json.py`:

```python
def test_analyze_compatibility_marks_media_types():
    comic = analyze_compatibility({'bookSourceName': '漫画源', 'bookSourceType': 2}, '漫画源.js')
    video = analyze_compatibility({'bookSourceName': '视频源', 'bookSourceType': 4}, '视频源.js')
    audio = analyze_compatibility({'bookSourceName': '音频源', 'bookSourceType': 1}, '音频源.js')

    assert 'comic' in comic['features']
    assert 'video' in video['features']
    assert 'audio' in audio['features']
```

Add this call in the `__main__` block:

```python
    test_analyze_compatibility_marks_media_types()
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL because media features are not reported.

- [ ] **Step 3: Implement media feature reporting**

In `analyze_compatibility(source, file_name)`, after the `features = ...` line, add:

```python
    media_feature = {1: "audio", 2: "comic", 4: "video"}.get(source.get("bookSourceType"))
    if media_feature and media_feature not in features:
        features.append(media_feature)
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 3: Add Comic/Video Content Extraction Helpers

**Files:**
- Modify: `scripts/legacy_runtime.js`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Add failing test for runtime media helpers**

In `test_runtime_template_contains_required_entrypoints()`, add these required names to the list:

```python
        'sourceType',
        'extractImageUrls',
        'extractMediaUrl',
        'formatChapterContent',
```

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL because those helper names do not exist.

- [ ] **Step 2: Add source type helper**

In `scripts/legacy_runtime.js`, after `baseUrl()` add:

```js
  function sourceType() {
    if (source.bookSourceType === 2) return 'comic';
    if (source.bookSourceType === 4) return 'video';
    if (source.bookSourceType === 1) return 'audio';
    return 'novel';
  }
```

- [ ] **Step 3: Add media extraction helpers**

In `scripts/legacy_runtime.js`, after `stringify(value)` add:

```js
  function unique(values) {
    var seen = {};
    var out = [];
    for (var i = 0; i < values.length; i++) {
      var value = String(values[i] || '').trim();
      if (value && !seen[value]) {
        seen[value] = true;
        out.push(value);
      }
    }
    return out;
  }

  function extractImageUrls(value, parentUrl) {
    var text = stringify(value);
    var urls = [];
    try {
      var parsed = JSON.parse(text);
      if (Array.isArray(parsed)) urls = parsed;
    } catch (_) {}
    text.replace(/<img[^>]+(?:src|data-src|data-original)=["']([^"']+)["'][^>]*>/gi, function (_, url) {
      urls.push(url);
      return _;
    });
    text.split(/[\n,]+/).forEach(function (part) {
      if (/\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(part)) urls.push(part.trim());
    });
    return unique(urls.map(function (url) { return absolutize(url, parentUrl || baseUrl()); }));
  }

  function extractMediaUrl(value, parentUrl) {
    var text = stringify(value).replace(/\\\//g, '/');
    var match = text.match(/https?:\/\/[^\s"'<>]+\.(m3u8|mp4|mp3|m4a|flv|avi|mkv)(\?[^\s"'<>]*)?/i);
    if (match) return absolutize(match[0], parentUrl || baseUrl());
    if (/^https?:\/\//i.test(text.trim())) return absolutize(text.trim(), parentUrl || baseUrl());
    return text.trim();
  }

  function formatChapterContent(value, parentUrl) {
    var type = sourceType();
    if (type === 'comic') return JSON.stringify(extractImageUrls(value, parentUrl));
    if (type === 'video' || type === 'audio') return extractMediaUrl(value, parentUrl);
    return stringify(value);
  }
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 4: Use Media Formatting in chapterContent

**Files:**
- Modify: `scripts/legacy_runtime.js`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Add failing test for chapterContent using formatter**

Add this assertion to `test_runtime_template_contains_required_entrypoints()`:

```python
    assert 'return formatChapterContent(applyRule(data, source.ruleContent && source.ruleContent.content), chapterUrl);' in runtime
```

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL because `chapterContent()` still returns `stringify(...)`.

- [ ] **Step 2: Change chapterContent return**

In `scripts/legacy_runtime.js`, replace:

```js
      return stringify(applyRule(data, source.ruleContent && source.ruleContent.content));
```

with:

```js
      return formatChapterContent(applyRule(data, source.ruleContent && source.ruleContent.content), chapterUrl);
```

- [ ] **Step 3: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 5: Regenerate Outputs and Verify Media Metadata

**Files:**
- Generated: `booksources/*.js`
- Generated: `booksources/compatibility-report.json`
- Generated: `repository/*.js`
- Generated: `repository/repository.json`

- [ ] **Step 1: Regenerate all outputs**

Run:

```bash
python3 scripts/convert_book_json.py --input book.json --output booksources && \
python3 scripts/prepare_public_repository.py \
  --source-dir booksources \
  --repository-dir repository \
  --base-url https://raw.githubusercontent.com/qiupo/bookSource/refs/heads/master \
  --name "我的社区书源仓库"
```

Expected output contains:

```text
Converted 459 sources into booksources
Prepared repository: copied 459 sources, indexed 459 sources
```

Absolute output paths are acceptable if counts match.

- [ ] **Step 2: Validate repository outputs**

Run:

```bash
python3 scripts/check_outputs.py --booksources-dir booksources --repository-dir repository
```

Expected:

```text
Validated 459 sources
```

- [ ] **Step 3: Verify media metadata and report features**

Run:

```bash
python3 - <<'PY'
import json
from pathlib import Path
repo = Path('repository')
report = json.loads(Path('booksources/compatibility-report.json').read_text(encoding='utf-8'))
features = {item['name']: item['features'] for item in report}
comic_files = [p for p in repo.glob('*.js') if '// @type comic' in p.read_text(encoding='utf-8')]
video_files = [p for p in repo.glob('*.js') if '// @type video' in p.read_text(encoding='utf-8')]
assert comic_files, 'no comic files have @type comic'
assert video_files, 'no video files have @type video'
assert any('comic' in value for value in features.values())
assert any('video' in value for value in features.values())
print('comic files', len(comic_files))
print('video files', len(video_files))
print('media metadata ok')
PY
```

Expected output includes:

```text
media metadata ok
```

## Task 6: Final Verification

**Files:**
- Verify scripts and outputs only.

- [ ] **Step 1: Run all tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py && \
PYTHONPATH=scripts python3 scripts/test_generate_repository.py && \
PYTHONPATH=scripts python3 scripts/test_prepare_public_repository.py && \
PYTHONPATH=scripts python3 scripts/test_check_outputs.py
```

Expected output contains:

```text
convert tests passed
repository generator tests passed
prepare repository tests passed
output validator tests passed
```

- [ ] **Step 2: Verify generated repository URL and runtime content**

Run:

```bash
python3 - <<'PY'
import json
from pathlib import Path
payload = json.loads(Path('repository/repository.json').read_text(encoding='utf-8'))
assert len(payload['sources']) == 459
assert all(item['downloadUrl'].startswith('https://raw.githubusercontent.com/qiupo/bookSource/refs/heads/master/repository/') for item in payload['sources'])
for path in sorted(Path('repository').glob('*.js'))[:10]:
    text = path.read_text(encoding='utf-8')
    assert 'function createLegacyRuntime(source)' in text
    assert 'formatChapterContent' in text
print('final media runtime verification ok')
PY
```

Expected:

```text
final media runtime verification ok
```
