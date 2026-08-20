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
- CP ~1093 and climbing (was 1039 earlier; check before writing CP tables)
- Main: **Magicka Dragonknight**, pure class (uses Class Mastery, no subclassing)
- Alts in progress: Stamina Warden, Magicka Sorcerer
- **Plays melee — up close, all content, survivability first.** Dual daggers / medium armor is the household default for his characters; staff or bow is the *ranged option*, not the default. Each melee full-build guide has a separate ranged/bow sibling for when he wants range (Mag DK → Ranged, Mag Sorc → Ranged, Stam Warden → Bow). *(This reverses an earlier note that had him "preferring two staves." Determined 2026-08-15 via an explicit playstyle pass — he normally plays up close — and the Full Builds were restructured to melee-main + ranged-variant to match. Don't re-pitch two staves as the default; it's the documented alternative now, not the baseline.)*
- Two-bar rotations are fine. Long priority lists are a barrier — structure rotations as sweeps, not 12-step lists.
- Has scribing (Gold Road), Armory Assistant addon, all eight companions at max rapport
- Owns: Pale Order, Order's Wrath, Deadly Strike, Slimecraw, Prowler's Talisman (partially upgraded)
- Interests beyond combat: resource gathering, treasure/survey maps, thieves troves, chest routes
- **Open issue:** chronic stamina shortfall on the DK. Diagnosed as likely light-attack weaving gaps or late Soul of Flame casts, NOT skill costs. Do not respond to this with generic gear advice — he responds well to root-cause diagnosis.

### Wife
- CP ~1250
- **One-bar builds only.** This is a hard constraint, not a preference to optimize away. *One sanctioned exception exists:* a deliberately-simple two-bar Bow Warden (bow front / ice staff back), added by explicit request 2026-08-12 — see `one-bar-builds/warden-bow-two-bar.md`. It's the only two-bar build for her; don't generalize it to her other sheets, and don't "correct" it back to one-bar.
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
7. **Adding a page = update the home page too.** Every new guide must be linked from `docs/index.md` (the landing page) *and* the `mkdocs.yml` nav. CI enforces the home-page link (`scripts/check_index_links.py`) — the build fails if any docs page isn't on the home page, so it can't silently go stale.

## Verification rules

**Do not write skill names from memory.** The U49/U50 Dragonknight rework renamed and relocated a large number of abilities, and pre-rework names are still all over the web. Verify against a current source or have the player check in-game.

**Trusted sources, by use:**
- **Hyperioxes** (hyperioxes.com) — solo PvE. Builds are tested by actually soloing vet hard-mode dungeons and include sim comparisons for gear/skill alternatives. Primary source for everything in `docs/full-builds/` and `docs/one-bar-builds/`.
- **ArzyeL** (arzyelbuilds.com) — companions (verified June 2026) and PvP.
- **Alcast** (alcasthq.com) — PvP and set/skill lookup. Broader but shallower per build.
- **UESP / ESO Hub** — glyph, set, and item mechanics.

**In-game tooltips beat every source, including this file.** Say so in guides.

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
| **Slimecraw 1pc grants Minor Berserk** | **1 item = 657 Crit Chance. Minor Berserk is the 2-item bonus** — and since every build runs Pale Order in the mythic slot, only 1 monster piece ever fits, so it *never fires*. Was wrong in 15 files (incl. the glossary) until 2026-08-16. The lone monster helm is a **pure stat pick** — see `shared/gear-math.md`. Real Minor Berserk sources here: Camouflaged Hunter, Ferocious Roar |
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
| ⚠️ Ferocious Roar as a Minor Berserk source (row above) | **Now doubtful post-U50** — sources put Minor Berserk on **Hircine's Rage**, and Ferocious Roar on Major Courage + Major Savagery/Prophecy. Confirm in-game before relying on either |
| "Antiquity leads expire in 30 days" | **Stale — U49 (March 2026) rescaled expiry by lead quality and ESO+ doubles it:** white 30/60, green 60/120, blue 90/180, purple 120/240, **gold 180/360**. Mythic fragment leads are the high-rarity ones, so it's months, not weeks. Expiry also only applies to leads you've **never successfully excavated** — after the first dig, every future copy is permanent. Caught by the player, 2026-08-18 |
| Assuming a monster set's marquee effect applies at 1 piece | **Every** monster set puts its proc/buff on the **2-item** bonus. With a mythic equipped you only get the 1-item stat line. Check which tier a bonus sits on before crediting it |

**Also worth remembering:** subclassing disables Class Mastery entirely. Both players are pure class for this reason. Any proposal to subclass must account for losing two mastery passives.

## Open items

- [x] **Full build audit — done 2026-08-18.** All 33 guides with bars were checked against the live published build each cites. Findings: no fabricated sources (every parse and clear traced to a real page), but ~1/3 had **overstated provenance**, and there were real mechanical errors across every class (see the corrections log). All fixed. **Two things to carry forward:** (1) the audit itself was wrong once — it claimed Biting Jabs lacks Major Brutality/Sorcery; always verify an audit's headline claim before acting on it. (2) **Update 51 is already on PTS**, and it gives **Elemental Susceptibility a 3240 Magicka cost** (it's free on live U50) — that will hit several builds here, especially the stamina ones, when U51 lands.


- [ ] The husband's DK stamina issue unresolved — awaiting his stamina recovery stat and whether he's weaving
- [x] Wife's DK sheet: Pyrebrand added to the upgrade path (verified vs ESO-Hub/ArzyeL, U50) — done 2026-08-12
- [x] PvP sections in all three full-build guides rewritten and verified against Alcast U50 builds (Mag DK "Blaze", Stam Warden "Assault", Mag Sorc PvP) — done 2026-08-12. Note: they still carry a "metas rotate seasonally" caveat, which is correct, not a hedge.
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
