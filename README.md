# ESO Build Guides

Living build documents for a husband and his wife, covering two playstyles — full builds and one-bar builds. Current game version: **Update 50**.

📖 Published as a website with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed to GitHub Pages (see `.github/workflows/deploy-docs.yml`). Everything under `docs/` is on the site.

## Structure

```
.
├── mkdocs.yml                        # site config (MkDocs Material)
├── CLAUDE.md                         # conventions, corrections log, build context — maintainers read first
├── README.md
├── templates/
│   └── class-guide-template.md       # skeleton for adding a new class
└── docs/                             # everything here is published to the site
    ├── index.md                      # landing page
    ├── full-builds/
    │   ├── magicka-dragonknight.md   # main — full guide, PvE/trials/PvP, CP 1200–1800
    │   ├── stamina-warden.md         # alt — bow-viable
    │   └── magicka-sorcerer.md       # alt — staff-viable (-1.2%)
    ├── one-bar-builds/
    │   ├── one-bar-dragonknight.md   # pure class, Class Mastery
    │   ├── one-bar-sorcerer.md       # pets + lightning staff + Oakensoul
    │   └── one-bar-arcanist.md       # beam build
    ├── shared/
    │   └── companions.md             # all eight, verified skill bars + gear + farming perks
    └── notes/
        ├── patch-watch.md            # what to re-verify when a patch lands
        └── farming.md                # gathering, chests, troves, surveys
```

## Conventions at a glance

- Full **guides** (full builds) include fallback gear ladders, situational swaps, and CP roadmaps to 1800
- **Cheat sheets** (one-bar builds) are one-answer prescriptive, one-bar only, no scribed skills without alternatives
- Every skill lists base skill + skill line; every gear table lists per-slot armor weight
- CP sections are numbered spend-order tables with `SLOT` marked

## Current CP

| Builds | CP |
|---|---|
| Full builds | ~1093 |
| One-bar builds | ~1250 |

Update these when they change — CP tables are written against them.

## Preview the site locally

```
pip install mkdocs-material
mkdocs serve
```

Then open http://127.0.0.1:8000. The GitHub Action rebuilds and deploys automatically on every push to `main`.

## Adding a class

Copy `templates/class-guide-template.md` into `docs/full-builds/` or `docs/one-bar-builds/`, add it to the `nav` in `mkdocs.yml`, then verify every skill name against a current Hyperioxes build before filling it in. See the corrections log in `CLAUDE.md` for why this matters.
