# Patch Watch

What to re-verify when an update lands. ZOS renames and relocates skills during class refreshes, so a patch can silently invalidate half a guide.

## Patch timeline — what landed when

You need this to judge a source. **Anything written before the relevant date is describing a different game**, and almost nothing on the web says so up front.

| Patch | Date | What it changed that matters here |
|---|---|---|
| **U49** | **9 March 2026** | **Dragonknight class refresh** — renamed and *relocated* a long list of abilities, and converted the DK's Poison damage to **Flame**. Also **rescaled antiquity lead expiry by lead quality** (see below) and reworked Two-Handed. |
| **U50** | **8 June 2026** | **Class Mastery** system (why both players are pure class), the **Werewolf overhaul** (form timer replaced with an Ultimate upkeep), Challenge Difficulty, PvP Veterancy. **This is the baseline for every guide here.** |
| **U51** | **28 September 2026** (PC; console ~2 weeks later) | Finished the hybridization project: **Major/Minor Sorcery and Prophecy removed**, Mundus Stones, class passives and Alchemy consolidated. Also **Elemental Susceptibility gained a 3,240 Magicka cost** (it was free), **re-priced the whole Werewolf line upward**, and changed a long list of item sets. Nowhere Vault opened. |

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

    **Second pass done 2026-09-30 — the four patch sections the first pass never read:**

    | Section | What we did |
    |---|---|
    | **Weapons & Guild Skills** | **Elemental Susceptibility's 3,240 Magicka cost swept across 13 bars in 10 guides** that still called it free — it was load-bearing on the stamina builds, and her Stam Sorc's optional back bar was re-assessed around it. Also corrected two errors found on the way: both Arcanists credited it with Minor Magickasteal (that's **Elemental Drain**), and the Stamina Templar called its Breach *Minor* |
    | **Werewolf** | Both guides re-read off the live skill pages. Costs roughly tripled; **all six passive names were pre-rework**; **Blood Hunger buffs Rip and Tear's *healing*, not its damage**; Hircine's Fortitude grants **Major Brutality and Major Vitality** while slotted; Hircine's Rage **does** grant Minor Berserk; Rampage **removes** ability costs for 20s; werewolf is Martial damage so the CP tables want **Mighty**, not War Mage |
    | **Item Sets** | **Pyrebrand** now applies **Landslide** as well as Wildfire Embers — it feeds *both* DK mastery picks, which promotes it on both DK sheets. **Aerie's Cry** procs off Light *or* Heavy Attacks now (4 Warden pages). **Necropotence** is +14% Max Magicka *while a combat pet is up* — flagged on her Magicka Warden PvP row, where a Warden has no pet outside the bear ultimate. **Ansuul's Torment** needs combat to activate. **Dov-rha Sabatons** breaks stealth. **Aetheric Lancer** places its area in front of you. **Death Dealer's Fete** bug fix |
    | **Scribing** | Nothing lands here: the changes are **Traveling Knife + Pull Focus** (target cap 6) and **Vault + Crusader's Defiance** (no longer cleanses), and no bar in this repo uses either script. The old **Class Mastery** script name is now **Class Flourish** — that's the *script*, not the Class Mastery system both players are pure-class for |
    | **PvP** | Recorded below rather than written into bars, because none of it changes a loadout |

    !!! note "U51 PvP changes — context, not build changes"
        - **Battle Spirit now caps damage shields** at 300% of Max Health in groups of 1–4, falling to 220% at 5 players and down to 60% at 12. ZOS says the numbers aren't final. Nothing here stacks shields hard enough to hit it solo or in a 4-man.
        - **Two- and three-team Battlegrounds merged into a "Big Team Battles" queue** (6v6v6 and 9v9). The competitive queue stays 4v4. New medals reward damage shields and long Major/Minor buffs, and the scoreboard now shows damage, healing and objectives.
        - **Vengeance** is queueable from the Group and Activity Finder, its damage ability target caps went 3 → 12 (defensive and CC 3 → 6), and **Vengeance Rapid Maneuver** now grants **Minor Gallop** on top of Major Expedition.
        - **Solo Dungeons** arrived: solo March of Sacrifices and Moon Hunter Keep, with optional **Meted Misfortunes** (0 = overland, 1 = normal arena, 2 = vet arena, 3 = harder than either). They drop **dungeon** sets rather than overland ones and pay Undaunted Crests. Worth knowing — it's new solo content that fits this household exactly, and **Pulled Punches no longer excludes heavy-attack builds** (it's a flat −30% damage now), which matters for her Sorcerer.

    **Third pass done 2026-09-30 — the per-guide class work:**

    | Class | What changed, and what we did |
    |---|---|
    | **Nightblade** | Relentless Focus now breaks Stealth/Invisibility; Shadowy Disguise's guaranteed crit no longer applies to proc attacks; Born From Shadow 10s → 15s; Strife/Swallow Soul rescaled to Health. All four guides updated — **and reading the live pages found a buff no guide knew about: Born From Shadow is +15% damage done to monsters, on *both* cloak morphs, triggered when the cloak starts *or* ends.** Also: Relentless Focus fires at **4** stacks not 5, Merciless Resolve heals **50%** of the arrow against 33% for the other morphs, and Swallow Soul heals **33%**, not the 35% four files claimed |
    | **Dragonknight** | Landslide → 12 stacks, generated every 5s/4s instead of 10s/5s (a straight buff to Inexorable Descent, which both players run). Shatterspike Mantle's bonus damage is **monsters-only** now — no PvE change, but in PvP it's a Major Resolve skill and nothing more. Molten Whip's Seething Fury bonus **halved in PvP** |
    | **Sorcerer** | Conservation of Energy **2% → 1.5%** and Blood Magic 5%/10% → 3%/6% — a ~25% cut to her Stam Sorc's only sustain engine, now stated on both Sorcerer guides that pick it. **Static Reverberation was reworked mostly upward**: proc chance 5% → 20%, cooldown 300ms → 100ms, but Sorcerer-ability damage only — a clear buff on a class-heavy bar |
    | **Warden** | Fetcher Infection's second cast **+75%** (was 60%) — big enough to press on cadence rather than on the blink. Arctic Blast **+20% per tick** |
    | **Templar** | Judgment's Brand **1,400 → 1,600**. **Balanced Warrior reworked**: Armor per Templar ability slotted *and* Weapon/Spell Damage scaled off total Armor plus a flat amount per Templar ability slotted, **no cap** — so a class-heavy bar is now worth damage as well as armour. While checking it, found that **Spear Wall grants Minor Berserk *and* Minor Protection** for 6s on every Aedric Spear activation; all four Templar guides had it down as mitigation only |
    | **Mundus** | The Warrior now grants **both** Weapon and Spell Damage, so it's live on magicka builds for the first time. Written up once in [Gear slot math](../shared/gear-math.md) rather than churning 34 guides, because the difference against The Thief lands inside the 2–5% band this repo calls noise. The Apprentice is now an XP/Inspiration stone |
    | **Proc rules** | Proc attacks lost Sneak's bonus damage and guaranteed crits, and **Molten Weapons and Tome-bearer's Inspiration damage now count as proc events** — noted on the three guides that slot them |

    **U51 is now fully read.** All five patch sections plus the class changes have been walked. What remains is not U51 work:

    - **The Nightblade PvP bars** were built against U50 Alcast pages and still carry the "metas rotate" caveat. Worth a pass against a live U51 PvP build, but that's a source-freshness job, not a patch job.
    - **Two werewolf claims stay flagged as unverified**, not wrong: the "Prowl" stealth opener and whether Rip and Tear taunts while blocking. Neither is on a current tooltip.
    - **Claw Fury's damage is now classed as direct** while Deadly Strike buffs *channelled* abilities. Flagged on both werewolf pages — it needs a parse in-game, not a source.

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

- **Update 52** — no notes yet. One thing is already flagged for it: U51's **Colossus ultimate cost cut (175 → 150) is scheduled to revert**, which affects all four Necromancer sheets.

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
