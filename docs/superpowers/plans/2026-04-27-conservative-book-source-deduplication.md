# Conservative Book Source Deduplication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove clearly duplicated generated Legado Tauri book sources while keeping the best candidate from each duplicate group.

**Architecture:** Add deduplication inside `scripts/convert_book_json.py` before file generation so `booksources/`, `repository/`, and `compatibility-report.json` all derive from the cleaned source list. Duplicates are grouped by exact `bookSourceName` and normalized `bookSourceUrl` without fragment, then resolved by a deterministic quality score: compatibility level, enabled flag, update time, rule completeness, original order.

**Tech Stack:** Python 3 standard library, existing converter/generator scripts, generated JavaScript repository output.

---

## File Structure

- Modify `scripts/convert_book_json.py`: add source scoring, duplicate grouping, deduplication, and apply it in `convert()`.
- Modify `scripts/test_convert_book_json.py`: add tests for name duplicates, URL duplicates, and tie-breakers.
- Generated `booksources/*.js` and `booksources/compatibility-report.json`: regenerated from cleaned input.
- Generated `repository/*.js` and `repository/repository.json`: regenerated public output after deduplication.

## Task 1: Add Source Quality Scoring

**Files:**
- Modify: `scripts/convert_book_json.py`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Write failing tests for scoring tie-breakers**

Add `score_source_for_dedup` to the import list in `scripts/test_convert_book_json.py`:

```python
from convert_book_json import analyze_compatibility, convert, extract_author, metadata_lines, safe_filename, score_source_for_dedup, version_from_timestamp
```

Add this test before the `if __name__ == '__main__'` block:

```python
def test_score_source_for_dedup_prefers_compatibility_enabled_update_and_rules():
    manual = {
        'bookSourceName': '重复源',
        'bookSourceUrl': 'https://example.com',
        'enabled': True,
        'lastUpdateTime': 200,
        'ruleContent': {'content': 'Packages.bad'},
    }
    partial = {
        'bookSourceName': '重复源',
        'bookSourceUrl': 'https://example.com',
        'enabled': False,
        'lastUpdateTime': 100,
        'ruleSearch': {'bookList': '$.data'},
        'ruleContent': {'content': '@js:return result'},
    }
    high_old = {
        'bookSourceName': '重复源',
        'bookSourceUrl': 'https://example.com',
        'enabled': True,
        'lastUpdateTime': 100,
        'ruleSearch': {'bookList': '$.data'},
    }
    high_new = {
        'bookSourceName': '重复源',
        'bookSourceUrl': 'https://example.com',
        'enabled': True,
        'lastUpdateTime': 200,
        'ruleSearch': {'bookList': '$.data'},
        'ruleBookInfo': {'name': '$.name'},
    }

    assert score_source_for_dedup(partial, 1) > score_source_for_dedup(manual, 0)
    assert score_source_for_dedup(high_old, 2) > score_source_for_dedup(partial, 1)
    assert score_source_for_dedup(high_new, 3) > score_source_for_dedup(high_old, 2)
```

Add this call in the `__main__` block before `test_analyze_compatibility_detects_features_and_manual_level()`:

```python
    test_score_source_for_dedup_prefers_compatibility_enabled_update_and_rules()
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL with `ImportError: cannot import name 'score_source_for_dedup'`.

- [ ] **Step 3: Implement source scoring**

In `scripts/convert_book_json.py`, add this constant after `TAURI_TYPES`:

```python
COMPATIBILITY_SCORE = {
    "manual": 0,
    "partial": 1,
    "high": 2,
}
```

Add this helper after `analyze_compatibility(source, file_name)`:

```python
def rule_completeness(source):
    count = 0
    for key in ["ruleSearch", "ruleBookInfo", "ruleToc", "ruleContent", "ruleExplore"]:
        value = source.get(key)
        if isinstance(value, dict) and value:
            count += 1
    return count


def score_source_for_dedup(source, index):
    report = analyze_compatibility(source, f"source-{index}.js")
    try:
        updated_at = int(source.get("lastUpdateTime") or 0)
    except (TypeError, ValueError):
        updated_at = 0
    return (
        COMPATIBILITY_SCORE.get(report["level"], 0),
        1 if source.get("enabled", True) else 0,
        updated_at,
        rule_completeness(source),
        -index,
    )
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 2: Deduplicate by Name and URL

**Files:**
- Modify: `scripts/convert_book_json.py`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Write failing tests for deduplication behavior**

Add `dedupe_sources` to the import list in `scripts/test_convert_book_json.py`:

```python
from convert_book_json import analyze_compatibility, convert, dedupe_sources, extract_author, metadata_lines, safe_filename, score_source_for_dedup, version_from_timestamp
```

Add these tests before the `if __name__ == '__main__'` block:

```python
def test_dedupe_sources_keeps_best_duplicate_name_candidate():
    sources = [
        {
            'bookSourceName': '重复源',
            'bookSourceUrl': 'https://manual.example.com',
            'ruleContent': {'content': 'Packages.bad'},
        },
        {
            'bookSourceName': '重复源',
            'bookSourceUrl': 'https://high.example.com',
            'ruleSearch': {'bookList': '$.data'},
        },
        {
            'bookSourceName': '独立源',
            'bookSourceUrl': 'https://unique.example.com',
            'ruleSearch': {'bookList': '$.data'},
        },
    ]

    cleaned = dedupe_sources(sources)

    assert [item['bookSourceUrl'] for item in cleaned] == [
        'https://high.example.com',
        'https://unique.example.com',
    ]


def test_dedupe_sources_keeps_one_normalized_url_candidate():
    sources = [
        {
            'bookSourceName': '旧源',
            'bookSourceUrl': 'https://same.example.com#old',
            'lastUpdateTime': 100,
            'ruleSearch': {'bookList': '$.data'},
        },
        {
            'bookSourceName': '新源',
            'bookSourceUrl': 'https://same.example.com#new',
            'lastUpdateTime': 200,
            'ruleSearch': {'bookList': '$.data'},
            'ruleBookInfo': {'name': '$.name'},
        },
    ]

    cleaned = dedupe_sources(sources)

    assert len(cleaned) == 1
    assert cleaned[0]['bookSourceName'] == '新源'
```

Add these calls in the `__main__` block after `test_score_source_for_dedup_prefers_compatibility_enabled_update_and_rules()`:

```python
    test_dedupe_sources_keeps_best_duplicate_name_candidate()
    test_dedupe_sources_keeps_one_normalized_url_candidate()
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL with `ImportError: cannot import name 'dedupe_sources'`.

- [ ] **Step 3: Implement duplicate grouping and cleanup**

In `scripts/convert_book_json.py`, add these helpers after `score_source_for_dedup(source, index)`:

```python
def normalized_source_url(source):
    return clean_text(source.get("bookSourceUrl")).split("#")[0]


def duplicate_keys(source):
    keys = []
    name = clean_text(source.get("bookSourceName"))
    url = normalized_source_url(source)
    if name:
        keys.append(("name", name))
    if url:
        keys.append(("url", url))
    return keys


def dedupe_sources(sources):
    candidates = [(index, source) for index, source in enumerate(sources) if isinstance(source, dict)]
    key_to_indices = {}
    for index, source in candidates:
        for key in duplicate_keys(source):
            key_to_indices.setdefault(key, set()).add(index)

    parent = {index: index for index, _ in candidates}

    def find(index):
        while parent[index] != index:
            parent[index] = parent[parent[index]]
            index = parent[index]
        return index

    def union(left, right):
        left_root = find(left)
        right_root = find(right)
        if left_root != right_root:
            parent[right_root] = left_root

    for indices in key_to_indices.values():
        ordered = sorted(indices)
        for index in ordered[1:]:
            union(ordered[0], index)

    groups = {}
    for index, source in candidates:
        groups.setdefault(find(index), []).append((index, source))

    kept = []
    for group in groups.values():
        best_index, best_source = max(group, key=lambda item: score_source_for_dedup(item[1], item[0]))
        kept.append((best_index, best_source))

    return [source for _, source in sorted(kept, key=lambda item: item[0])]
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 3: Apply Deduplication During Conversion

**Files:**
- Modify: `scripts/convert_book_json.py`
- Modify: `scripts/test_convert_book_json.py`

- [ ] **Step 1: Write failing conversion test**

Add this test before the `if __name__ == '__main__'` block:

```python
def test_convert_deduplicates_sources_before_writing_outputs():
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        input_path = root / 'book.json'
        output_dir = root / 'booksources'
        input_path.write_text(json.dumps([
            {
                'bookSourceName': '重复源',
                'bookSourceUrl': 'https://old.example.com',
                'ruleContent': {'content': 'Packages.bad'},
            },
            {
                'bookSourceName': '重复源',
                'bookSourceUrl': 'https://new.example.com',
                'ruleSearch': {'bookList': '$.data'},
            },
        ], ensure_ascii=False), encoding='utf-8')

        written = convert(input_path, output_dir)

        assert len(written) == 1
        assert written[0].name == '重复源.js'
        content = written[0].read_text(encoding='utf-8')
        assert '// @url https://new.example.com' in content
        report = json.loads((output_dir / 'compatibility-report.json').read_text(encoding='utf-8'))
        assert len(report) == 1
        assert report[0]['level'] == 'high'
```

Add this call in the `__main__` block after URL dedupe test:

```python
    test_convert_deduplicates_sources_before_writing_outputs()
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: FAIL because `convert()` still writes both duplicate sources.

- [ ] **Step 3: Use deduped sources in `convert()`**

In `scripts/convert_book_json.py`, replace the first line inside `convert(input_path, output_dir)`:

```python
    sources = load_sources(input_path)
```

with:

```python
    sources = dedupe_sources(load_sources(input_path))
```

- [ ] **Step 4: Run converter tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py
```

Expected: PASS.

## Task 4: Regenerate Cleaned Outputs and Verify

**Files:**
- Generated: `booksources/*.js`
- Generated: `booksources/compatibility-report.json`
- Generated: `repository/*.js`
- Generated: `repository/repository.json`

- [ ] **Step 1: Regenerate outputs**

Run:

```bash
python3 scripts/convert_book_json.py --input book.json --output booksources && \
python3 scripts/prepare_public_repository.py \
  --source-dir booksources \
  --repository-dir repository \
  --base-url https://raw.githubusercontent.com/qiupo/bookSource/refs/heads/master \
  --name "我的社区书源仓库"
```

Expected: the converted and indexed source count is lower than 459 because duplicates are removed.

- [ ] **Step 2: Validate generated repository output**

Run:

```bash
python3 scripts/check_outputs.py --booksources-dir booksources --repository-dir repository
```

Expected: `Validated N sources`, where `N` equals the regenerated source count.

- [ ] **Step 3: Verify no duplicate names or URLs remain in repository index**

Run:

```bash
python3 - <<'PY'
import json
from collections import Counter
from pathlib import Path
payload = json.loads(Path('repository/repository.json').read_text(encoding='utf-8'))
sources = payload['sources']
names = Counter(item['name'] for item in sources if item.get('name'))
urls = Counter(str(item.get('url', '')).split('#')[0] for item in sources if item.get('url'))
dup_names = [name for name, count in names.items() if count > 1]
dup_urls = [url for url, count in urls.items() if count > 1]
assert not dup_names, dup_names[:10]
assert not dup_urls, dup_urls[:10]
assert all(item['downloadUrl'].startswith('https://raw.githubusercontent.com/qiupo/bookSource/refs/heads/master/repository/') for item in sources)
print('deduplicated repository sources', len(sources))
PY
```

Expected: prints `deduplicated repository sources N`.

## Task 5: Final Verification

**Files:**
- Verify scripts and generated outputs only.

- [ ] **Step 1: Run all tests**

Run:

```bash
PYTHONPATH=scripts python3 scripts/test_convert_book_json.py && \
PYTHONPATH=scripts python3 scripts/test_generate_repository.py && \
PYTHONPATH=scripts python3 scripts/test_prepare_public_repository.py && \
PYTHONPATH=scripts python3 scripts/test_check_outputs.py
```

Expected output includes:

```text
convert tests passed
repository generator tests passed
prepare repository tests passed
output validator tests passed
```

- [ ] **Step 2: Verify cleaned compatibility report count matches repository count**

Run:

```bash
python3 - <<'PY'
import json
from collections import Counter
from pathlib import Path
report = json.loads(Path('booksources/compatibility-report.json').read_text(encoding='utf-8'))
repo = json.loads(Path('repository/repository.json').read_text(encoding='utf-8'))['sources']
assert len(report) == len(repo)
levels = Counter(item['level'] for item in report)
print('cleaned source count', len(repo))
print('compatibility levels', dict(levels))
PY
```

Expected: prints cleaned source count and compatibility level distribution.
