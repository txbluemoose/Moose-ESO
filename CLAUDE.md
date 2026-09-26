# CLAUDE.md — ESO Build Guides

Working notes for maintaining this repo. Read this before editing any guide.

## What this is

A set of living build guides for two players (a husband and his wife) in The Elder Scrolls Online. Not a general-purpose wiki — every document is tuned to two specific people's playstyles and owned content.

## The design constraint that governs everything

**"Kick ass and not die."** Survivability is weighted above raw DPS in every build decision. When a choice trades damage for safety, take the safety unless the damage loss is large. Concretely:

- **Ring of the Pale Order** (heal-per-damage mythic) is a fixture across the husband's characters. Do not propose builds that drop it for solo content, even when a damage mythic would parse higher.
- Prefer morphs that heal or mitigate (e.g. Burning Embers over Searing Claw) even at a small damage cost.
- Parse numbers are a tiebreaker, not the objective. A 2–5% damage difference is noise here.
- Layered healing is the goal: multiple heal sources that don't all fail at once (heal-on-damage + heal-on-crit + heal-on-cast).

## The two players

### Husband
- **CP ~1240** and climbing (1039 → 1093 → 1240 over 2026; check before writing CP tables). At 1240 that's ~413 points per tree, which completes rows 1–13 of his Blue table with ~10 spare — the 50-point "swap option" rows stay out of reach until roughly CP 1600. He and his wife (~1250) are now effectively the same budget.
- Main: **Magicka Dragonknight**, pure class (uses Class Mastery, no subclassing)
- Alts in progress: Stamina Warden, Magicka Sorcerer
- **Plays melee — up close, all content, survivability first.** Dual daggers / medium armor is the household default for his characters; staff or bow is the *ranged option*, not the default. Each melee full-build guide has a separate ranged/bow sibling for when he wants range (Mag DK → Ranged, Mag Sorc → Ranged, Stam Warden → Bow). *(This reverses an earlier note that had him "preferring two staves." Determined 2026-08-15 via an explicit playstyle pass — he normally plays up close — and the Full Builds were restructured to melee-main + ranged-variant to match. Don't re-pitch two staves as the default; it's the documented alternative now, not the baseline.)*
- Two-bar rotations are fine. Long priority lists are a barrier — structure rotations as sweeps, not 12-step lists.
- Has scribing (Gold Road), Armory Assistant addon, all eight companions at max rapport
- Owns: Pale Order, Order's Wrath, Deadly Strike, Slimecraw, Prowler's Talisman (partially upgraded)
- Interests beyond combat: resource gathering, treasure/survey maps, thieves troves, chest routes
- **Open issue:** chronic stamina shortfall on the DK. Diagnosed as likely light-attack weaving gaps or late Soul of Flame casts, NOT skill costs. Do not respond to this with generic gear advice — he responds well to root-cause diagnosis.

### Wife
- **CP ~1382** and climbing (was ~1250; updated 2026-09-26 — check before writing CP tables). All 15 of her sheets are framed **1250 → 1600**, so at ~461 points per tree she's roughly 44 past the 1250 anchor: the first 50-point swap-option row comes online around **CP 1400**, very soon. Her swap options are overwhelmingly **mitigation** (Pain's Refuge, Ironclad, Duelist's Rebuff, Bracing Anchor) plus **Reaving Blows**, which suits a one-bar player with fewer defensive tools — and Reaving Blows stacks with the Pale Order she runs on everything but the Sorc. She is currently **ahead of him** (he's ~1240).
- **One-bar builds only.** This is a hard constraint, not a preference to optimize away. *Two sanctioned exceptions exist, both added by explicit request:* (1) a deliberately-simple two-bar Bow Warden (bow front / ice staff back), 2026-08-12 — see `one-bar-builds/warden-bow-two-bar.md`; (2) an **optional** back bar on the Stamina Sorcerer, 2026-08-21 — the sheet stays a one-bar cheat sheet and the back bar is an opt-in add-on that exists solely to supply **Major Breach** via Elemental Susceptibility, which a bow can't reach. Don't generalize either to her other sheets, don't "correct" them back to one-bar, and don't promote the Sorc's optional bar into a required two-bar rebuild — he chose "one bar default + optional back bar" explicitly.
- **Does not scribe.** Never put a scribed grimoire (Wield Soul, Ulfsild's Contingency, Banner Bearer) in her bars without a non-scribed alternative called out inline.
- **Likes pets and staves.** Her Sorcerer is the pet/heavy-attack build for this reason.
- Characters: pure-class Dragonknight (converted from subclassed → pure for Class Mastery), pet Sorcerer, Arcanist, and a two-bar Bow Warden (the sanctioned exception above)
- Her builds are a **separate design problem** from the husband's. Don't copy his CP pages to her sheets — notably, he runs Soul of Flame so sustain CP stars are wasted on him, while she has no sustain skill and genuinely needs them.

## Document conventions

Follow these when editing or adding guides.

1. **Every skill gets its base skill and skill line.** Format: `**Molten Whip** (morph of Lava Whip, *Ardent Flame*)`. Scribed skills have no morphs — label them `(scribed grimoire, *Soul Magic*; scripts: X / Y / Z)`.
2. **Gear tables include a per-slot Weight column** plus a sentence explaining the weight split and why (usually Undaunted Mettle).
3. **CP sections are numbered tables read top-to-bottom**, with `**SLOT**` marked on active stars and "buy max" on passives. Include what each star does *for that specific build*, not a generic description.
4. **Skill line passives get their own section** above CP. Rule of thumb stated in each: buy every passive in every line you have a skill slotted from.
5. **Flag confidence.** If something wasn't verified against a current source, say so in the text. Guides carry a source line at the bottom with the revision date.
6. Cheat sheets (wife) are shorter and more prescriptive than guides (husband). Guides include fallback ladders and situational swaps; cheat sheets give one answer.
7. **Group-content and PvP sections are tables, not prose** (his preference, 2026-09-19). Group content uses a three-column delta table — `| What changes | Do this | Why |` — because the section is a diff against the solo build. PvP uses a two-column setup table with labelled rows: *Carries over*, one row per skill swap, then *Armour & stats*, *Sets*, *Monster set*, *Mythic*, *CP — Blue*, *CP — Red*. Anything that isn't tabular (the intro paragraph, "check the live build before a progression run", the source line) stays as prose around the table. Don't convert these back to bullet lists.
8. **CP tables are a priority list, not the whole tree** (established 2026-09-26 after he questioned it, correctly). **Warfare: 48 stars — 35 slottable, 13 passive, 320 points to max the passives. Fitness: 41 stars — 28 slottable, 13 passive, 342 points.** Our tables named 9 of 13 Warfare passives and 6 of 13 Fitness ones. **The omissions are now real rows in every Blue and Red table** (added 2026-09-26, positioned above the swap-option rows and renumbered), not just prose in the admonition — a buy-order table that leaves out a +100 Weapon/Spell Damage passive is still giving the wrong answer. Two of the four Warfare omissions are large: **War Mage** (+100 Weapon/Spell Damage to Magical — Magic/Flame/Frost/Shock, max 30) and **Mighty** (the same for Martial — Physical/Poison/Disease/Bleed, max 30), plus **Flawless Ritual** / **Battle Mastery** (status-effect chance, max 40 each). **Pick by damage type, not resource pool — both DKs are Flame/Magical post-U49, so both want War Mage.** Fitness omissions worth knowing: Tireless Guardian (block cost), Savage Defense (bash cost), Fortification (block mitigation). The rule that follows: **remaining passives outrank every "swap option" row**, because a passive is always on while a fifth slottable is inert, re-slotting is free out of combat, and a full respec is only 3,000 gold. Don't add swap-option rows above passives, and don't imply a table is exhaustive. Values verified 2026-09-26 vs esodecoded.com datamined star pages.
9. **Adding a page = update the home page too.** Every new guide must be linked from `docs/index.md` (the landing page) *and* the `mkdocs.yml` nav. CI enforces the home-page link (`scripts/check_index_links.py`) — the build fails if any docs page isn't on the home page, so it can't silently go stale.

## Verification rules

**Do not write skill names from memory.** The U49/U50 Dragonknight rework renamed and relocated a large number of abilities, and pre-rework names are still all over the web. Verify against a current source or have the player check in-game.

**Network access (as of 2026-09-26):** the environment previously blocked every trusted source, which is why much of this repo was verified from search snippets only. `curl` now reaches **hyperioxes.com, alcasthq.com, arzyelbuilds.com, eso-hub.com, esodecoded.com, eso-skillbook.com** and the published site. Note **WebFetch can still report EGRESS_BLOCKED for hosts curl retrieves fine — try `curl` before concluding a source is unreachable.** Still blocked: uesp.net and the official forums (403), youtube.com, thetankclub.com.

**Trusted sources, by use:**
- **Hyperioxes** (hyperioxes.com) — solo PvE. Builds are tested by actually soloing vet hard-mode dungeons and include sim comparisons for gear/skill alternatives. Primary source for everything in `docs/full-builds/` and `docs/one-bar-builds/`.
- **ArzyeL** (arzyelbuilds.com) — companions (verified June 2026) and PvP.
- **Alcast** (alcasthq.com) — PvP and set/skill lookup. Broader but shallower per build.
- **UESP / ESO Hub** — glyph, set, and item mechanics.

**In-game tooltips beat every source, including this file.** Say so in guides.

### The staleness rule — read this before "correcting" anything

**Most ESO content on the web was written before the current patch, and none of it announces that.** Search snippets carry no dates. Three separate mistakes in this repo trace to exactly that, and two of them *introduced* errors into guides that had been right (see the corrections log: Incinerate, and the 30-day lead timer).

**Before you write or change a skill name, morph, set bonus, or system rule:**

1. **Know which patch is current and when it landed.** See the timeline in `docs/notes/patch-watch.md`. Anything published before that date is a claim about a *previous* version of the game until proven otherwise.
2. **Patch notes outrank everything.** For a rename, a moved skill, or a changed number, the official notes are the only source that settles it. Build sites and wikis lag; forums repeat old numbers for years.
3. **An undated source is not evidence about the current patch.** It may still be right — but it can't be the reason you change something.
4. **When two sources disagree, don't split the difference — go to the patch notes.**

**Tell-tales that you're reading pre-patch content:**

- **A legacy URL serving a differently-titled page.** `eso-hub.com/.../flames-of-oblivion` renders as "Incinerate" — that mismatch *is* the rename, and the **title** is the current name. Same for `/infectious-claws` → "Rending Claws", `/noxious-breath` → "Disintegrating Dragonfire".
- **Skill-line index / aggregate pages**, which merge pre- and post-rework skills and list both `Inhale` and `Core of Flame`. Use the individual skill page instead.
- **A number everyone repeats.** "Leads expire in 30 days" was true, then U49 rescaled it by lead quality. Widely-repeated ≠ current.

**The rule that would have prevented the worst of it:** if a guide here already says X and a source says Y, **the burden of proof is on Y.** These guides were verified once against a live build. Do not overwrite one with an older name on the strength of a single undated search result — find the patch note, or leave it alone and flag it.

**When you do verify something, record it:** "verified <date> vs <source>" in the guide's source line. A wrong date is worse than no date, and an unsourced confident claim is worse than a flagged uncertainty.

## Corrections log — mistakes already made, don't repeat

These were all gotten wrong in the original session. They are the highest-value content in this file.

| Wrong | Right |
|---|---|
| Engulfing Flames is in Ardent Flame | It's **Engulfing Dragonfire**, in **Draconic Power** (morph of Dragonfire Breath) |
| Inhale is in Draconic Power | Renamed **Core of Flame**, moved to **Ardent Flame**. Morph = Soul of Flame |
| Ash Cloud is in Earthen Heart | Renamed **Hearthfire**, moved to **Ardent Flame**. Morph = Hearth and Home |
| Warmth / Searing Heat / Burning Heart passives | Renamed **Traumatic Burns** / **Fan the Flames** / **A Soul Ablaze** |
| Solo DK uses Engulfing Dragonfire | Solo uses **Disintegrating Dragonfire** (applies Major Breach, which solo play has no group to provide). Engulfing is the *group* morph. Wife's one-bar build correctly uses Engulfing because she has no other spammable. |
| Thaumaturge for DK CP | **Wrathful Strikes** — post-rework DK is majority direct damage, and the Wildfire Embers mastery doesn't scale with Thaumaturge |
| Wife's DK could use Shatterspike Mantle while subclassed | She lost Earthen Heart to the subclass. Shatterspike was only restored after converting her to pure class. |
| Camouflaged Hunter / Hearth and Home on solo DK bars | Not in the verified solo build; slots 5 are Ulfsild's Contingency and Elemental Susceptibility |
| Belt is Medium on magicka builds | **Light** |
| ~~"Incinerate" is not a morph of Inferno~~ **(this entry was itself wrong — 2026-08-16)** | **Incinerate IS correct.** U49 renamed **Flames of Oblivion → Incinerate**; the patch notes read "Incinerate (originally Flames of Oblivion)". Inferno's U50 morphs are **Incinerate** / **Cauterize**. A search briefly "corrected" the guides the wrong way and this log endorsed it — always check the *patch notes* for a renamed skill, not a skill-line index page |
| Pre-rework Dragonknight names on the **stamina** DK sheets | U49 renamed a whole cluster and the guides were written on the old ones: **Venomous Claw → Searing Claw**, **Noxious Breath → Disintegrating Dragonfire** (*and it moved to Draconic Power*), **Stonefist → Superheated Ward** with **Stone Giant → Magma Fist**, **Obsidian Shard → Volcanic Ward**, **Coagulating Blood → Blood of the Elder Dragon**, **Green Dragon Blood → Blood of the Green Dragon**, and the **Stagger** debuff → **Heat Shock**. U49 also converted the DK class kit from **Poison to Flame** damage — so "stamina DK = poison build" is dead as a heuristic. Fixed 2026-08-16 |
| Assuming a stamina morph is the *poison* morph | Post-U49 the DK is mono-element flame; the stamina/magicka split no longer tracks poison/flame. Check the element on the tooltip |
| Trusting ESO-Hub's **skill-line index** pages for DK/Necro | Those aggregate pages list **pre- and post-rework skills merged together** (both `Inhale` and `Core of Flame`, both `Ash Cloud` and `Hearthfire`). Use the **individual skill page** or the patch notes instead |
| "Stalking Blastbones" on Necro builds | Removed from the game in U41 — the charging skeleton is **Blighted Blastbones**, morph of **Sacrificial Bones** |
| Pestilent Colossus used as a stun | It doesn't stun — only **Glacial Colossus** stuns (final smash) |
| "Deadly Strike is craftable / husband crafts it" | It's a **Cyrodiil vendor / guild-trader set** — owned, cheap, but never craftable (was wrong on 7 sheets) |
| Endless Hail "morph of Arrow Barrage" | Morph of **Volley**; Arrow Barrage is the *other* morph. Same pattern: Leeching Strikes is a morph of **Siphoning Strikes** (not Siphoning Attacks), Enchanted Growth of **Fungal Growth** (not Nature's Grasp) — always check which sibling is base vs morph |
| Thaumaturge slotted "because Fatecarver is a channel" | Channel ticks are **direct damage** → Master-at-Arms. Thaumaturge is also a 50-pt slottable, never a "buy max" passive |
| Parking a skill on her unused back bar for its passive | Double-wrong: violates her one-bar rule AND while-slotted bonuses only work on the *active* bar |
| **Slimecraw 1pc grants Minor Berserk** | **1 item = 657 Crit Chance. Minor Berserk is the 2-item bonus** — and since every build runs Pale Order in the mythic slot, only 1 monster piece ever fits, so it *never fires*. Was wrong in 15 files (incl. the glossary) until 2026-08-16. The lone monster helm is a **pure stat pick** — see `shared/gear-math.md`. Real Minor Berserk sources here: Camouflaged Hunter. (**Not** Ferocious Roar — see below) |
| **Grim Focus grants Minor Berserk** | No — both morphs (Merciless/Relentless Focus) grant **Major Savagery & Prophecy** while slotted. Was wrong in 3 files *and* used to justify double-slotting it on both bars — which is also pointless, because "while slotted on **either bar**" means one slot already covers both. Fixed 2026-08-18 |
| Killer's Blade executes "under 25%" | **50%** (up to 400% more damage, Disease). The 25% figure belongs to the *base* skill Assassin's Blade. This is a rotation error, not cosmetic — the execute opens twice as early |
| **Leeching Strikes returns stamina/magicka** | It does **not** — it heals 1800/sec and returns nothing. **Siphoning Attacks** is the morph that heals 1250 **and restores 200 Mag + 200 Stam per second**. Our text was Siphoning Attacks' tooltip pasted onto Leeching's name, and it underpinned a whole "this fixes your stamina gap" section. Also: both are **while-slotted passives** now — there is nothing to "re-cast before it lapses" |
| **Deadly Strike body pieces are Medium-only** | Alliance-style Medium from the Bruma vendor. Several gear tables had it on Light or Heavy slots — physically unwearable. Check the weight before placing it |
| Shadowy Disguise lasts 10–15s | **3 seconds** (guaranteed crit on the next direct-damage attack, Minor Protection while slotted). There is no "+15% damage for 10s" on it — that's Concealed Weapon's +10%/15s out of invisibility |
| Veiled Strike morphs are in *Shadow* | Moved to **Assassination** in Update 43 (Surprise Attack / Concealed Weapon). Blur went the other way |
| Corpseburster detonates "around you" | It detonates **the corpse**, which spawns at the enemy — 5m around *it*. Melee positioning may still be right, but not for that reason |
| Werewolf form has a drain timer | U50 replaced it with an **Ultimate upkeep**: 100 to transform, then **100 per 10s** to stay (36/10s with Pack Leader's direwolves). **Devour restores Ultimate**, not time. Also **Piercing Howl → Gnash** (morphs Bloody Gnash / Rip and Tear) — that's the 5th form-bar slot we'd left open |
| "Verified against <build>" on a guide we constructed | **Provenance discipline.** ~1/3 of the guides cited builds that don't exist (no Hyperioxes one-bar Stam Sorc, one-bar MagDen, one-bar StamPlar or bow StamBlade). If a bar is our own adaptation, say so and name the nearest real build. A wrong citation is worse than none |
| ⚠️ Biting Jabs' buff — **settled, don't re-litigate** | Biting Jabs **does** grant **Major Brutality & Sorcery** (+20%, 10s) — verified 2026-08-18 after an audit wrongly claimed otherwise. It's **Puncturing Sweep** (the 25%-lifesteal morph) that lacks it, and those builds need **Degeneration** (*Mages Guild*) for the buff |
| ⚠️ ~~Ferocious Roar as a Minor Berserk source~~ — **settled 2026-09-26** | **Neither werewolf skill grants Minor Berserk.** **Ferocious Roar** = fear 4s, Off Balance 7s, two stacks of Blood Hunger, **Major Courage** to you and 11 allies, and a **Feeding Frenzy synergy** worth 6% damage done + Minor Force. **Hircine's Rage** = heals 3,371, double Fury, and **up to 12% damage done *and damage taken*** scaled to current Health, plus a Stamina return. Verified vs ESO-Hub skill pages |
| "Antiquity leads expire in 30 days" | **Stale — U49 (March 2026) rescaled expiry by lead quality and ESO+ doubles it:** white 30/60, green 60/120, blue 90/180, purple 120/240, **gold 180/360**. Mythic fragment leads are the high-rarity ones, so it's months, not weeks. Expiry also only applies to leads you've **never successfully excavated** — after the first dig, every future copy is permanent. Caught by the player, 2026-08-18 |
| **Slotting a base skill where a morph belongs** | **Petrify** (*Earthen Heart*) is the **base**; its morphs are **Fossilize** (adds a 4s immobilise after the stun) and **Shattering Rocks** (1,379 Flame Damage + a **2,760 heal** after the stun). The PvP bars named the base skill. Caught 2026-09-26 — when a skill's name appears with no "morph of", check whether it's actually a base |
| **Skeletal Archer grants Physical Penetration / Stamina Recovery** | It doesn't. It grants **Major Brutality and Sorcery** (+20% Weapon and Spell Damage) for 20s, hits for 464 Physical every 2s with each attack **15% stronger than the last**, and leaves a corpse on death if you're in combat. Flagged as unconfirmed since August; disproved 2026-09-26 |
| **Cutthroat's Focus is a free damage-taken debuff** | The **5%** is right, but it only applies when you **dodge**, and the dodge window comes from casting a Nightblade ability **while bracing**. It's a block-cast passive, so it does not belong in a "max damage when you're safe" swap |
| Assuming a monster set's marquee effect applies at 1 piece | **Every** monster set puts its proc/buff on the **2-item** bonus. With a mythic equipped you only get the 1-item stat line. Check which tier a bonus sits on before crediting it |

**Also worth remembering:** subclassing disables Class Mastery entirely. Both players are pure class for this reason. Any proposal to subclass must account for losing two mastery passives.

## Open items

- [x] **Full build audit — done 2026-08-18.** All 33 guides with bars were checked against the live published build each cites. Findings: no fabricated sources (every parse and clear traced to a real page), but ~1/3 had **overstated provenance**, and there were real mechanical errors across every class (see the corrections log). All fixed. **Two things to carry forward:** (1) the audit itself was wrong once — it claimed Biting Jabs lacks Major Brutality/Sorcery; always verify an audit's headline claim before acting on it. (2) **Update 51 goes live 28 September 2026 on PC** (confirmed 2026-09-19; console ~2 weeks later). It finishes the hybridization project and **consolidates Mundus Stones, the Major/Minor buff system, class passives and Alchemy** — which is the layer nearly every guide here is built on, not a normal balance patch. It also gives **Elemental Susceptibility a 3240 Magicka cost** (free on live U50). See `docs/notes/patch-watch.md` for the ordered re-verification list.


- [ ] The husband's DK stamina issue unresolved — awaiting his stamina recovery stat and whether he's weaving. **New candidate found 2026-09-26:** on a Magicka DK nothing he casts costs Stamina, so the whole pool goes to blocking, dodging, bashing and breaking free — and melee means more of all four. **Tireless Guardian** (Fitness passive, −20 Stamina per stage off Block, max 20 = **−400 Stamina per block**) and **Savage Defense** (−45 per stage off Bash, max 30) attack the drain at its actual source and were missing from every CP table. Worth trying before any gear change.
- [x] Wife's DK sheet: Pyrebrand added to the upgrade path (verified vs ESO-Hub/ArzyeL, U50) — done 2026-08-12
- [x] PvP sections in all three full-build guides rewritten and verified against Alcast U50 builds (Mag DK "Blaze", Stam Warden "Assault", Mag Sorc PvP) — done 2026-08-12. Note: they still carry a "metas rotate seasonally" caveat, which is correct, not a hedge.
- [x] **Blind-period re-review — done 2026-09-26.** Most of this session's additions were written while every trusted source was egress-blocked, so the seven ⚠️ skill attributions in the PvP bars were re-checked against ESO-Hub's individual skill pages once access returned. **Result: no fabrications** — every skill exists with the name and line claimed. Three descriptions were wrong or thin and are fixed (Fleetstep Wings also knocks back and stuns; Dark Cloak is a heal-over-time scaling off Max Health and boosted 150% while Bracing, not a burst; Petrify was the base skill, now Shattering Rocks). Purifying Light ← Backlash and Living Dark ← Eclipse both confirmed. **Second pass, same day, cleared the rest:** Goading Throw is the **Taunt** focus script on Shield Throw; the ultimate-refund passive is **The Storm Voice** (16 Health/Magicka/Stamina per Ultimate spent, +6 per DK ability slotted — the transcript was right); **Advanced Species** confirmed at +5% Critical Damage per slotted Animal Companions ability; **Guardian's Wrath / Guardian's Savagery** cost **75 Ultimate** (and Feral deals Magic, Wild deals Bleed — relevant to the War Mage / Mighty choice); **Skeletal Archer** and **Cutthroat's Focus** both corrected into the log above; **Ferocious Roar / Hircine's Rage** settled. Flag count across the repo fell from 110 to 76 — the remainder are mythic drop-source and set-availability flags, not skill claims.
- [ ] Warden and Sorc trials sections deliberately point to live group builds rather than guessing rotations
- [x] Arcanist Class Mastery picks locked in — Unbound Potential + Erudite's Rigor (verified vs ESO-Hub/Alcast, U50) — done 2026-08-12
- [x] Werewolf guides added for both players — split into two: `full-builds/werewolf.md` (Werewolf Berserker, him) and `one-bar-builds/werewolf.md` (Pack Leader, her) — done 2026-08-12. NOTE: the werewolf line was reworked in U50; skills are flagged "confirm morphs in-game," and the 5th form-bar slot is intentionally left to the live Hyperioxes build rather than guessed. Don't "fix" that flag — it's correct caution, not laziness.
- [x] Nightblade, Templar, Necromancer added (husband full + wife one-bar for each) plus a husband full Arcanist — done 2026-08-15. **All seven classes are now covered for both players.** Specs: NB Stam melee (his) / Mag staff one-bar (hers); Templar Stam Jabs melee w/ Mag Sweep alt (his) / Mag Sweep one-bar (hers); Necro Mag Corpseburster (his, Stam sibling noted) / Mag staff pets one-bar (hers); Arcanist Stam melee full (his). A handful of morphs carry "confirm in-game" flags where sources couldn't be fully pinned.
- [ ] Considered and rejected: a thieving-optimized loadout doc (Night's Silence + Legerdemain passives + green CP). Revisit if he asks.

## Things that have come up and been settled

- **Telvanni Efficiency** (halves companion cooldowns) is not worth a body set slot for combat. Correct answer is a dedicated armory loadout for farming/companion-carried content.
- **Prowler's Talisman** is crime jewelry, not combat jewelry — it competes with Pale Order for the mythic slot.
- **Prismatic Onslaught glyph** is a nerfed sidegrade requiring rare Hakeijo runes. Not worth it. Absorb Stamina front bar is the better answer to his sustain issue.
- **Race** is the smallest dial in any build (~5% spread) and costs real money to change. Default answer is "whatever the character already is." Redguard is the only race with a real stamina-sustain passive if it ever comes up.
- **Set piece slots don't matter mechanically** — 5 pieces is 5 pieces. But the 5-armor / 5-jewelry-and-weapon split is the only arrangement that fits a monster helm and mythic into 12 slots.
- **Mythic vs 2-piece monster set** is an either/or — there's no 13th slot. **Solo: the mythic (Pale Order) wins decisively** (20% of damage as healing vs ~5% more damage from a monster 2pc). **Group: the 2pc wins**, because Pale Order drops 4% per grouped ally (8% in a 4-man, 0% in a trial). Written up in `shared/gear-math.md`; don't re-derive it per guide.
- **HarvestMap + HarvestRoute + Lost Treasure** are the farming addons (PC only). CP green tree + Keen Eye passives are the console-safe equivalent.
