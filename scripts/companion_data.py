#!/usr/bin/env python3
"""Parse docs/shared/companions.md into structured companion data.

Used by build_planner_data.py. Reads the recruitment table, the tier-list
ratings, and each companion's bar order / gear / buffs / housekeeping block.
"""
import re


def strip_md(s):
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)
    s = s.replace("**", "").replace("*", "").replace("`", "")
    return s.strip()


def split_row(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def is_sep(line):
    return bool(re.fullmatch(r"\|[\s:|-]+\|", line.strip()))


def read_table(lines, i):
    header = split_row(lines[i])
    if i + 1 >= len(lines) or not is_sep(lines[i + 1]):
        return None, None, i + 1
    j = i + 2
    rows = []
    while j < len(lines) and lines[j].strip().startswith("|"):
        rows.append(split_row(lines[j]))
        j += 1
    return header, rows, j


def _key(name):
    """Match 'Sharp' to 'Sharp-as-Night' and 'Zerith-Var' to 'Zerith-var'."""
    return name.split()[0].lower()


def _lookup(table, name):
    k = _key(name)
    if k in table:
        return table[k]
    for tk, v in table.items():
        if k.startswith(tk) or tk.startswith(k):
            return v
    return None


def parse_companions(path):
    lines = path.read_text(encoding="utf-8").split("\n")

    recruit = {}
    ratings = {}
    comps = []
    cur = None
    block = None
    in_builds = False
    i = 0

    while i < len(lines):
        ln = lines[i]

        # Only the BUILDS section holds companion blocks; earlier "### " headings
        # (the Telvanni Efficiency loadout) are not companions.
        if ln.startswith("## "):
            in_builds = "BUILDS" in ln

        if ln.strip().startswith("|"):
            header, rows, nxt = read_table(lines, i)
            if header:
                low = [h.lower() for h in header]
                if low[:1] == ["companion"] and "quest to pick up" in low[1]:
                    for r in rows:
                        if len(r) >= 4:
                            full = strip_md(r[0])
                            recruit[_key(full)] = {
                                "name": full,
                                "quest": strip_md(r[1]),
                                "where": strip_md(r[2]),
                                "needs": strip_md(r[3]),
                            }
                    i = nxt
                    continue
                if low[:1] == ["companion"] and "mag dps" in low[1]:
                    for r in rows:
                        if len(r) >= 5:
                            ratings[_key(strip_md(r[0]))] = {
                                "Mag DPS": strip_md(r[1]),
                                "Stam DPS": strip_md(r[2]),
                                "Tank": strip_md(r[3]),
                                "Healer": strip_md(r[4]),
                            }
                    i = nxt
                    continue
                if cur is not None and low[:1] == ["#"]:
                    for r in rows:
                        if len(r) >= 2:
                            n, skill = strip_md(r[0]), strip_md(r[1])
                            if n.lower() == "ult":
                                cur["ult"] = skill
                            elif skill:
                                cur["bar"].append(skill)
                    i = nxt
                    continue
                if cur is not None and low[:1] == ["slot"]:
                    for r in rows:
                        if len(r) >= 3:
                            cur["gear"].append({
                                "slot": strip_md(r[0]),
                                "wear": strip_md(r[1]),
                                "trait": strip_md(r[2]),
                            })
                    i = nxt
                    continue
            i = nxt
            continue

        m = re.match(r"^###\s+(.+?)\s+—\s+(.+)$", ln) if in_builds else None
        if m:
            cur = {
                "name": strip_md(m.group(1)),
                "role": strip_md(m.group(2)),
                "blurb": "",
                "bar": [],
                "ult": "",
                "gear": [],
                "brings": [],
                "racial": "",
                "perk": "",
                "rapport": "",
                "notes": [],
            }
            comps.append(cur)
            block = None
            i += 1
            if i < len(lines) and lines[i].strip().startswith("*") and not lines[i].startswith("**"):
                cur["blurb"] = strip_md(lines[i])
                i += 1
            continue

        if cur is not None:
            if ln.startswith("**What"):
                block = "brings"
            elif ln.startswith("**Housekeeping"):
                block = "house"
            elif ln.startswith("**Bar order") or ln.startswith("**Gear"):
                block = None
            elif ln.startswith("- "):
                item = ln[2:]
                if block == "brings":
                    cur["brings"].append(strip_md(item))
                elif block == "house":
                    plain = strip_md(item)
                    if plain.startswith("Racial"):
                        cur["racial"] = plain
                    elif plain.startswith("Perk"):
                        cur["perk"] = plain
                    elif plain.startswith("Rapport"):
                        cur["rapport"] = plain.split(":", 1)[-1].strip()
            elif ln.startswith("    ") and ln.strip():
                cur["notes"].append(strip_md(ln))
        i += 1

    for c in comps:
        c["recruit"] = _lookup(recruit, c["name"])
        c["ratings"] = _lookup(ratings, c["name"]) or {}
    return comps
