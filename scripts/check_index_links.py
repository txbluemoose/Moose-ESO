#!/usr/bin/env python3
"""Fail the build if any docs page isn't linked from the home page.

Keeps docs/index.md in sync with the rest of the site: every page under
docs/ (except index.md itself) must appear as a link target in index.md.
Run in CI before `mkdocs build`, and locally before pushing.
"""
import pathlib
import sys

docs = pathlib.Path("docs")
index_path = docs / "index.md"

if not index_path.exists():
    sys.exit("docs/index.md not found")

index = index_path.read_text(encoding="utf-8")

missing = []
for md in sorted(docs.rglob("*.md")):
    rel = md.relative_to(docs).as_posix()
    if rel == "index.md":
        continue
    # index.md links pages by their path relative to docs (e.g. werewolf.md,
    # full-builds/magicka-dragonknight.md). Require that path to appear.
    if rel not in index:
        missing.append(rel)

if missing:
    print("Home page (docs/index.md) is missing links to these pages:")
    for m in missing:
        print(f"  - {m}")
    print("\nAdd them to docs/index.md so the landing page stays up to date.")
    sys.exit(1)

print("Home page links every docs page ✓")
