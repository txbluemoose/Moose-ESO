#!/usr/bin/env python3
"""Generate docs/assets/planner-data.js from the guides themselves.

The Loadout Planner page is data-driven: it reads skill bars, gear tables and
companion builds out of this file. Regenerating from the markdown means the
planner can never drift from the guides — edit a gear table, rerun this, and
the planner follows. CI runs it before `mkdocs build`.
"""
import json
import pathlib
import re
import sys

DOCS = pathlib.Path("docs")
OUT = DOCS / "assets" / "planner-data.js"

# --- helpers ---------------------------------------------------------------

def strip_md(s):
    """Markdown -> plain text, keeping the words and dropping the decoration."""
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)      # links
    s = s.replace("**", "").replace("*", "").replace("`", "")
    return s.strip()


def split_row(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def is_sep(line):
    return bool(re.fullmatch(r"\|[\s:|-]+\|", line.strip()))


def pieces_for_slot(slot):
    """How many set pieces this gear row is worth.

    Two-handed weapons and staves count as two; a 'Necklace + Ring 1' row
    covers two slots; 1H + shield is two. Everything else is one.
    """
    s = slot.lower()
    if "+" in s:
        return max(2, s.count("+") + 1)
    two_handers = ("staff", "bow", "two-handed", "2h", "greatsword", "battle axe", "maul")
    if any(t in s for t in two_handers):
        return 2
    if "2 daggers" in s or "dual" in s or "two 1h" in s:
        return 2
    return 1


def tables(lines, start):
    """Read a pipe table beginning at `start`. Returns (header, rows, next_index)."""
    header = split_row(lines[start])
    i = start + 1
    if i >= len(lines) or not is_sep(lines[i]):
        return None, None, start + 1
    i += 1
    rows = []
    while i < len(lines) and lines[i].strip().startswith("|"):
        rows.append(split_row(lines[i]))
        i += 1
    return header, rows, i


# --- build guides ----------------------------------------------------------

GEAR_HEAD = ("weight", "trait", "enchant")
NOTE_COL = re.compile(r"^\s*(notes?|source|source\s*/\s*notes?|notes?\s*/\s*source)\s*$", re.I)


def parse_guide(path):
    text = path.read_text(encoding="utf-8")
    lines = text.split("\n")
    rel = path.relative_to(DOCS).as_posix()

    title = ""
    subtitle = ""
    for ln in lines[:6]:
        if ln.startswith("# ") and not title:
            title = strip_md(ln[2:])
        elif ln.startswith("### ") and title and not subtitle:
            subtitle = strip_md(ln[4:])

    guide = {
        "id": rel[:-3],
        "title": title,
        "subtitle": subtitle,
        "player": "Wife" if rel.startswith("one-bar-builds/") else "Husband",
        "kind": "One-bar" if rel.startswith("one-bar-builds/") else "Full build",
        "url": rel[:-3] + "/",
        "bars": [],
        "gear": [],
    }

    heading = ""
    weight_note = ""
    i = 0
    while i < len(lines):
        ln = lines[i]

        if ln.startswith("#"):
            heading = strip_md(ln.lstrip("#").strip())
            weight_note = ""
            i += 1
            continue

        if ln.startswith("**Armor weight"):
            weight_note = strip_md(ln)
            i += 1
            continue

        # One-bar guides list skills as a numbered list under "### ... Bar (...)"
        if re.match(r"^\d+\.\s+\*\*", ln) and "bar" in heading.lower():
            skills, ult = [], ""
            while i < len(lines):
                cur = lines[i]
                m = re.match(r"^\d+\.\s+(.*)$", cur)
                if m:
                    skills.append(strip_md(m.group(1)))
                    i += 1
                    continue
                mu = re.match(r"^[-*]\s+\*\*Ult:?\s*(.*)$", cur)
                if mu:
                    ult = strip_md(mu.group(1)).lstrip(":").strip()
                    i += 1
                    continue
                if cur.strip() == "":
                    i += 1
                    if i < len(lines) and re.match(r"^\d+\.\s+\*\*", lines[i]):
                        continue
                    break
                break
            if skills:
                guide["bars"].append({
                    "name": heading,
                    "columns": [{"label": heading, "skills": skills, "ult": ult}],
                })
            continue

        if ln.strip().startswith("|"):
            header, rows, nxt = tables(lines, i)
            if header is None:
                i = nxt
                continue
            low = [h.lower() for h in header]

            # gear table
            if len(low) >= 4 and low[0] == "slot" and tuple(low[1:4]) == GEAR_HEAD:
                # Columns after Enchant are either alternate set loadouts
                # (e.g. "Overland" / "Instanced") or a free-text notes column.
                tail = header[4:]
                variants = [c for c in tail if not NOTE_COL.match(c)]
                note_idx = [k for k, c in enumerate(tail) if NOTE_COL.match(c)]
                setup = {
                    "name": heading or "Gear",
                    "weightNote": weight_note,
                    "variants": [strip_md(v) for v in variants] or ["Set"],
                    "rows": [],
                }
                for r in rows:
                    if len(r) < 5:
                        continue
                    tailvals = r[4:]
                    row_sets = [
                        strip_md(tailvals[k]) for k, c in enumerate(tail)
                        if not NOTE_COL.match(c) and k < len(tailvals)
                    ]
                    note = " ".join(
                        strip_md(tailvals[k]) for k in note_idx if k < len(tailvals)
                    ).strip()
                    setup["rows"].append({
                        "slot": strip_md(r[0]),
                        "weight": strip_md(r[1]),
                        "trait": strip_md(r[2]),
                        "enchant": strip_md(r[3]),
                        "sets": row_sets or [""],
                        "note": note,
                        "pieces": pieces_for_slot(r[0]),
                    })
                if setup["rows"]:
                    guide["gear"].append(setup)
                i = nxt
                continue

            # two-bar skill table
            if len(low) >= 2 and "bar" in low[0] and "bar" in low[1]:
                cols = []
                for c, label in enumerate(header[:2]):
                    skills, ult = [], ""
                    for r in rows:
                        if c >= len(r):
                            continue
                        cell = r[c]
                        mu = re.match(r"^\*\*Ult:?\*\*\s*(.*)$", cell)
                        if mu:
                            ult = strip_md(mu.group(1))
                            continue
                        m = re.match(r"^\d+\.\s+(.*)$", cell)
                        if m:
                            skills.append(strip_md(m.group(1)))
                    cols.append({"label": strip_md(label), "skills": skills, "ult": ult})
                if any(c["skills"] for c in cols):
                    guide["bars"].append({"name": heading, "columns": cols})
                i = nxt
                continue

            i = nxt
            continue

        i += 1

    # Ranged variants are deltas: gear only, with skills deferred to a sibling
    # guide. Record where the planner should send you for the bars.
    if not guide["bars"]:
        m = re.search(r"\[([^\]]*[Gg]uide[^\]]*)\]\(([^)]+\.md)\)", text)
        if m:
            guide["barsRef"] = {
                "title": strip_md(m.group(1)),
                "url": "../" + rel.rsplit("/", 1)[0] + "/" + m.group(2)[:-3] + "/",
            }

    return guide


def index_labels():
    """Pull the curated link labels off the home page.

    index.md already names every build the way we want it named
    ("Dragonknight - Magicka - Melee"), so reuse that instead of the long
    document titles.
    """
    out = {}
    for ln in (DOCS / "index.md").read_text(encoding="utf-8").split("\n"):
        if not ln.startswith("- "):
            continue
        grp = re.match(r"^- \*\*(.+?)\*\*", ln)
        group = grp.group(1) if grp else ""
        for label, target in re.findall(r"\[([^\]]+)\]\(([^)]+\.md)\)", ln):
            out[target] = {"group": group, "label": strip_md(label)}
    return out


def main():
    labels = index_labels()
    guides = []
    for folder in ("full-builds", "one-bar-builds"):
        for md in sorted((DOCS / folder).glob("*.md")):
            g = parse_guide(md)
            if not g["gear"]:
                continue
            meta = labels.get(g["id"] + ".md")
            if meta:
                g["group"] = meta["group"]
                g["label"] = meta["label"]
                g["name"] = f"{meta['group']} — {meta['label']}"
            else:
                g["group"] = ""
                g["label"] = g["title"]
                g["name"] = g["title"]
            guides.append(g)

    from companion_data import parse_companions  # noqa: E402
    companions = parse_companions(DOCS / "shared" / "companions.md")

    sets, traits = set(), set()
    for g in guides:
        for s in g["gear"]:
            for row in s["rows"]:
                for v in row["sets"]:
                    name = v.split("(")[0].strip()
                    if name and name not in ("—", "same"):
                        sets.add(name)
                t = row["trait"].split("(")[0].strip()
                if t and t != "—":
                    traits.update(x.strip() for x in t.split("/") if x.strip())

    payload = {
        "builds": guides,
        "companions": companions,
        "sets": sorted(sets),
        "traits": sorted(traits),
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        "/* Generated by scripts/build_planner_data.py — do not edit by hand. */\n"
        "window.ESO_PLANNER = " + json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )

    barless = [g["id"] for g in guides if not g["bars"]]
    print(f"planner data: {len(guides)} builds, {len(companions)} companions, {len(sets)} sets -> {OUT}")
    if barless:
        print("  note: no skill bars parsed for: " + ", ".join(barless), file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.path.insert(0, str(pathlib.Path(__file__).parent))
    raise SystemExit(main())
