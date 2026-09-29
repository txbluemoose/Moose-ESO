# Patch Watch

What to re-verify when an update lands. ZOS renames and relocates skills during class refreshes, so a patch can silently invalidate half a guide.

## Patch timeline — what landed when

You need this to judge a source. **Anything written before the relevant date is describing a different game**, and almost nothing on the web says so up front.

| Patch | Date | What it changed that matters here |
|---|---|---|
| **U49** | **9 March 2026** | **Dragonknight class refresh** — renamed and *relocated* a long list of abilities, and converted the DK's Poison damage to **Flame**. Also **rescaled antiquity lead expiry by lead quality** (see below) and reworked Two-Handed. |
| **U50** | **8 June 2026** | **Class Mastery** system (why both players are pure class), the **Werewolf overhaul** (form timer replaced with an Ultimate upkeep), Challenge Difficulty, PvP Veterancy. **This is the baseline for every guide here.** |
| **U51** | PTS now — **21 September** | Nowhere Vault opens. **Elemental Susceptibility gains a 3240 Magicka cost** (it's free on live), which hits several bars here — especially the stamina builds. |

!!! success "Update 51 is live (28 September 2026, PC) — first pass done 2026-09-29"
    **Done repo-wide, verified against the U51 notes:**

    | Change | What we did |
    |---|---|
    | **Major/Minor Sorcery removed** — Brutality now grants **both** Weapon and Spell Damage | 86 replacements across 29 files; no mention of Sorcery or Prophecy remains |
    | **Major/Minor Prophecy removed** — Savagery now grants **both** Weapon and Spell Critical Chance | as above |
    | **Illuminate** no longer grants Minor Sorcery | now a **2,974 Armor** group buff — fixed on both Templar one-bars |
    | **Alchemy consolidation** — Weapon/Spell Power → **Increase Power**, Weapon/Spell Critical → **Critical** | 33 renames across 25 files |
    | **Core of Flame** restores **12%** of missing Magicka/Stamina, not 15% | corrected on the Stamina DK |
    | **Engulfing Dragonfire** costs 3,510 (was 3,780) and **cuts damage taken 15% while channelling** | added to her DK sheet — a straight buff to her main button |
    | **Colossus** ultimates cost **150** instead of 175 | noted on all four Necromancer sheets, with the U52 revert warning |
    | **Tome-bearer's Inspiration** triggers only from **Arcanist** skill damage | flagged on both Arcanist guides |

    **Still to do — these need a per-guide pass, not a sweep:**

    - **Nightblade** is the most affected class. **Relentless Focus now breaks Stealth/Invisibility.** **Shadowy Disguise's guaranteed crit no longer applies to proc attacks** — which is most of why the guides slot it as a parse gain. Born From Shadow went 10s → 15s. Strife/Swallow Soul were reworked to scale with current Health.
    - **DK PvP bars:** **Shatterspike Mantle now grants damage done *to monsters*** instead of all damage, so it does far less in PvP. **Molten Whip's Seething Fury bonus is halved in PvP.**
    - **Proc rules changed:** proc attacks no longer gain Sneak's bonus damage or guaranteed crits, and **Molten Weapons (Igneous Weapons) and Tome-bearer's Inspiration damage now count as proc events**.
    - **Mundus worth re-evaluating:** **The Warrior now grants both Weapon and Spell Damage**, so it is live for magicka builds for the first time. The Apprentice became an XP/Inspiration stone and is no longer a damage option (we never recommended it).
    - **Sorcerer:** Crystal Weapon has 3 charges; **Conservation of Energy restores 1.5% instead of 2%** (her Stam Sorc mastery pick); Blood Magic heals 3%/6% instead of 5%/10%.
    - **Warden:** Fetcher Infection's second cast +75%; Arctic Blast +20% per tick. **Templar:** Balanced Warrior reworked.

!!! danger "Superseded — kept for the record: the pre-release warning"
    Confirmed 2026-09-19. Console follows roughly two weeks later. U51 **finishes the hybridization project**: it consolidates **Mundus Stones**, the **Major/Minor buff system**, **class passives** and **Alchemy**. That is not a normal balance patch — it touches the layer nearly every guide here is built on.

    **Re-verify after it lands, in this order:**

    | Priority | What to check | Why |
    |---|---|---|
    | 1 | **Mundus Stones** on every guide | They're being consolidated — The Thief / The Lover / The Lady picks may not mean what they did |
    | 2 | **Major/Minor buff sources** | Every "X grants Major Y" line in every guide, and every Oakensoul overlap on the tank sheet |
    | 3 | **Class passives** | Includes the Class Mastery picks on all 14 pure-class builds |
    | 4 | **Elemental Susceptibility** | Gains a **3,240 Magicka cost** — already flagged; it's load-bearing on her Stam Sorc's optional back bar |
    | 5 | **PvP bars and sets** | Constructed against U50; PvP metas rotate on patch boundaries anyway |

## How to spot a stale source

Every one of these bit us, and each cost a real correction:

- **A legacy URL serving a differently-titled page.** `eso-hub.com/.../flames-of-oblivion` renders as **"Incinerate"** — that mismatch *is* the rename, and the **page title is the current name**. Same pattern: `/infectious-claws` → "Rending Claws", `/noxious-breath` → "Disintegrating Dragonfire".
- **Skill-line index pages.** ESO-Hub's per-line listings merge pre- and post-rework skills — they show both `Inhale` *and* `Core of Flame`. Always use the individual skill page.
- **A number everyone repeats.** "Antiquity leads expire in 30 days" was true until U49 rescaled it by lead quality. Ubiquity is not currency.
- **A build page still stamped with an old update number.** Several Hyperioxes one-bar pages are still U44/U45 — the bar may be fine, but the numbers around it have moved.

**When sources disagree, go to the official patch notes.** They list renames and relocations explicitly, and nothing else settles it.

## Known upcoming

- **Update 51 — September 21** — Nowhere Vault opens (Thieves Guild season content). Nowhere Keys have no use before this date; no reason to farm them hard yet.

## Re-verify checklist after any update

1. **Class refresh?** If the patch reworks a class either player uses, assume every skill name in that guide is suspect. Pull the current Hyperioxes build and diff it against the guide rather than spot-checking.
2. **Skill line moves.** The U49 DK rework moved abilities *between lines*, not just renamed them. Check the line attribution on every skill, not just the name.
3. **Class Mastery changes.** Both players are pure class specifically for these passives. If the mastery options change, the pure-vs-subclass decision may flip.
4. **Set changes.** Check Pale Order first — it's load-bearing for the whole design philosophy. Then class sets (Pyrebrand, Aerie's Cry, Beacon of Oblivion) and the crafted fallbacks.
5. **CP tree changes.** Star names and costs shift occasionally. The spend-order tables assume current names.
6. **New scribing grimoires or scripts.** The husband's flex slots are Ulfsild's Contingency and Traveling Knife; a new grimoire could beat them.
7. **Glyph/enchant rebalances.** Prismatic Onslaught was already nerfed once; Absorb glyph potencies have moved before.

## Sources to check, in order

1. Official patch notes (skill renames and relocations are listed explicitly)
2. Hyperioxes build pages — he revises with dates; check the revision date matches the current patch
3. ArzyeL for companions and PvP
4. In-game tooltips — final authority

## Log

| Date | Patch | What changed | Guides updated |
|---|---|---|---|
| 9 Mar 2026 | U49 | DK refresh (renames + line moves + Poison→Flame); lead expiry rescaled by quality | Both DK guides + her DK sheets, corrected 2026-08-16 |
| 8 Jun 2026 | U50 | Class Mastery; Werewolf overhaul (Ultimate upkeep replaces the form timer) | All guides; werewolf pair rebuilt 2026-08-18 |
| — | U51 | *Not live yet.* Elemental Susceptibility gains a Magicka cost — re-check every bar that slots it | — |
