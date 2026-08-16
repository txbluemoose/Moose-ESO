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
| "Incinerate" as a morph of Inferno | No such morph — Inferno's morphs are **Flames of Oblivion** / **Cauterize** (was on the Mag DK guide *and* her DK sheet for weeks) |
| "Stalking Blastbones" on Necro builds | Removed from the game in U41 — the charging skeleton is **Blighted Blastbones**, morph of **Sacrificial Bones** |
| Pestilent Colossus used as a stun | It doesn't stun — only **Glacial Colossus** stuns (final smash) |
| "Deadly Strike is craftable / husband crafts it" | It's a **Cyrodiil vendor / guild-trader set** — owned, cheap, but never craftable (was wrong on 7 sheets) |
| Endless Hail "morph of Arrow Barrage" | Morph of **Volley**; Arrow Barrage is the *other* morph. Same pattern: Leeching Strikes is a morph of **Siphoning Strikes** (not Siphoning Attacks), Enchanted Growth of **Fungal Growth** (not Nature's Grasp) — always check which sibling is base vs morph |
| Thaumaturge slotted "because Fatecarver is a channel" | Channel ticks are **direct damage** → Master-at-Arms. Thaumaturge is also a 50-pt slottable, never a "buy max" passive |
| Parking a skill on her unused back bar for its passive | Double-wrong: violates her one-bar rule AND while-slotted bonuses only work on the *active* bar |

**Also worth remembering:** subclassing disables Class Mastery entirely. Both players are pure class for this reason. Any proposal to subclass must account for losing two mastery passives.

## Open items

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
- **HarvestMap + HarvestRoute + Lost Treasure** are the farming addons (PC only). CP green tree + Keen Eye passives are the console-safe equivalent.
