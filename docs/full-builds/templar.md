# Pure Templar Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Stamina Templar, pure class (no subclass), Class Mastery active
**Verified against:** the current U50 Hyperioxes Stamina Templar Solo build (soloed vet HM Cradle of Shadows, ~69.4k CMX). The Magicka Templar alternative below is the same author's U50 MagPlar (soloed vet HM March of Sacrifices, ~67.4k) — a hair less damage, more healing.
**Philosophy:** Kick ass and don't die. Templar is *the* healing class — Puncturing/Jabs heals as it hits, Ritual of Retribution lays a healing zone, Honor the Dead is a full-panel burst heal, and Class Mastery turns your Sacred Ground into a passive heartbeat heal. You lean into all of it. Damage that heals you, layered mitigation, and a build you already own end-to-end.
**Weapon note:** the main build is **melee — dual daggers front bar, inferno staff back bar, medium armor**. It's how you actually play: up close, all content, survivability first. Jabs/Sweeps is a melee cone, so this is the natural way to play a Templar anyway — there's no separate ranged sibling for this one.

> **Confidence key:** Skill and set names are verified against U50 ESO-Hub / UESP / Fextralife tooltips and the live Hyperioxes solo Templar pages (Aug 2026). The **Class Mastery** names are verified against the ESO-Hub / Alcast U50 Class Mastery lists. One scribed skill (**Warding Contingency**) is flagged inline to confirm its scripts in-game. PvP set metas rotate every season — confirm current pieces before spending gold. In-game tooltips override this file.

---

## 0. Class Mastery (pick 2 — stay pure class)

Two Class Mastery Points, not skill points. Subclassing disables this system entirely, so you stay pure class. Templar's five all key off **Sacred Ground** uptime (your Ritual of Retribution / Nova / Spear Shards / Radial Sweep) and **Burning Light** procs (your Jabs/Sweeps). Two of them line up perfectly with kick-ass-don't-die.

| Mode | Mastery 1 | Mastery 2 | Situational swap |
|---|---|---|---|
| Solo PvE / Group | **Judgment's Brand** | **Bastion of Light** | Devout Guardian replaces Bastion of Light if you'd rather have a repeating damage shield than the flat heal |
| PvP | **Judgment's Brand** | Steadfast Candescence or Devout Guardian | Steadfast Candescence if you brawl on block; Devout Guardian for the shield |

- **Judgment's Brand** — when Burning Light procs (it procs off Jabs/Sweeps constantly), your Templar abilities gain a flat chunk of damage done for ~3s. This is *why* Jabs is the strongest solo spammable right now — it's a near-permanent damage buff on your whole kit.
- **Bastion of Light** — your Sacred Ground now also counts while your Nova and Spear Shards are down and while Radial Sweep / Solar Barrage are active, and while Sacred Ground is up you heal ~1498 Health/sec; hit full health in combat and you also bank 2 Ultimate. This is the passive "heartbeat heal" that makes the build unkillable — you'll almost always have Ritual of Retribution on the ground under you.
- *Swaps:* **Devout Guardian** (a repeating ~3.7k damage shield + recovery while on Sacred Ground) and **Steadfast Candescence** (Sacred Ground refreshes while you block, +20% block mitigation) are the block-tank flavors — good in a fight where you eat a big telegraphed hit on block.

---

## 1. SOLO PvE — Skills

This is your bread and butter — the verified U50 solo StamPlar. Melee, up close, dual daggers.

### Skills — Base Setup

| Front Bar (Dual Daggers*) | Back Bar (Inferno Staff) |
|---|---|
| 1. Biting Jabs (morph of Puncturing Strikes, *Aedric Spear*) | 1. Channeled Focus (morph of Restoring Focus, *Restoring Light*) |
| 2. Radiant Glory (morph of Radiant Destruction, *Dawn's Wrath*) | 2. Vampire's Bane (morph of Sun Fire, *Dawn's Wrath*) |
| 3. Ritual of Retribution (morph of Cleansing Ritual, *Restoring Light*) | 3. Blockade of Fire (morph of Wall of Elements, *Destruction Staff*) |
| 4. Barbed Trap (morph of Trap Beast, *Fighters Guild*) | 4. Warding Contingency (scribed Contingency grimoire, *Soul Magic* — *confirm scripts in-game*) |
| 5. Quick Cloak (morph of Blade Cloak, *Dual Wield*) | 5. Honor the Dead (morph of Rushed Ceremony, *Restoring Light*) |
| **Ult:** Everlasting Sweep (morph of Radial Sweep, *Aedric Spear*) | **Ult:** Solar Prison (morph of Nova, *Dawn's Wrath*) |

*\*Dual daggers are the household default — best damage and the up-close playstyle you run. Dagger enchants: main-hand **Poison**, off-hand **Absorb Stamina** (that off-hand Absorb Stamina goes straight at your one known sustain gap — see the CP note). Inferno back bar powers Blockade of Fire and pairs its flame damage with Vampire's Bane; a bow back bar is a fine swap (Endless Hail + Razor Caltrops) if you'd rather, but the staff keeps Blockade rolling with less GCD cost.*

**What each does (and why it fits "don't die"):**
- **Biting Jabs** — your spammable, a melee cone that hits up to 6. It's the strongest solo Templar spammable in U50 *because* it feeds Judgment's Brand. The other morph, **Puncturing Sweep**, heals you for 25% of the damage instead of Jabs' buff package (Major Brutality & Sorcery — confirm the exact buffs in-game) — that's the healing-over-damage swap (see the Magicka alternative below).
- **Radiant Glory** — execute; its bonus damage scales as the target drops below 50% health, and it hits hardest under ~30%. Cheap, and it **heals you** for a slice of the damage. A Templar's execute is also a heal.
- **Ritual of Retribution** — your Sacred Ground. It's a ground DoT, it **cleanses up to 2 harmful effects on cast**, and it's the tile that keeps **Bastion of Light** healing you every second. Stand in it.
- **Barbed Trap** — DoT plus **Minor Force** (+10% crit damage) while slotted; a permanent damage amp for one button.
- **Quick Cloak** — Major Evasion (−20% AoE damage taken) for the whole medium-armor melee profile. Requires two one-handers, which you have.
- **Channeled Focus** — Major Resolve (armor) *and* Magicka recovery — it powers your magicka-cost skills (Ritual, Vampire's Bane, Honor the Dead) without a sustain skill.
- **Vampire's Bane** — a long-duration flame DoT that also gives you **Major Savagery + Major Prophecy** (Weapon and Spell crit) just for casting it. Free crit.
- **Blockade of Fire** — ground DoT; refreshes status effects and holds enemies in your damage zones.
- **Warding Contingency** — the scribed Contingency grimoire scripted to throw up a **damage shield when you take a hit**. You have scribing (Gold Road), so this is free value. *No scribing, or unsure of the script? Use **Living Dark** (morph of Eclipse, Dawn's Wrath) — it heals you and snares attackers when you're struck, same "don't die" job from a class line.*
- **Honor the Dead** — full-panel **burst heal** that partially refunds its magicka when you cast it below ~half health. Your panic button.
- **Everlasting Sweep** (front ult) — spinning AoE that **heals you** and lengthens itself per enemy hit; also a Radial Sweep, so it keeps Bastion of Light's Sacred Ground alive. Your damage-and-heal ultimate.
- **Solar Prison** (back ult) — drops a **Major Maim** zone (enemies deal ~10% less) plus a stun. Your "survive this pull" button.

### Situational swaps (with skill line sources)
- **Living Dark** — *Templar > Dawn's Wrath* (morph of Eclipse) — the non-scribed replacement for Warding Contingency; heals-and-snares when hit
- **Blazing Spear** — *Templar > Aedric Spear* (morph of Spear Shards) — a second Sacred Ground tile (more Bastion of Light uptime) that also drops a synergy for grouped play; great on trash packs
- **Puncturing Sweep** — *Templar > Aedric Spear* (the other Jabs morph) — trade Jabs' Major Brutality/Sorcery for a 25%-of-damage heal when a fight is trying to kill you (this is the Magicka alternative's spammable)
- **Elemental Susceptibility** — *Destruction Staff* (morph of Weakness to Elements) — Minor Breach/Brittle for a tanky boss with no group to debuff it
- **Resolving Vigor** — *Alliance War > Assault* — a stamina-cost burst-heal-over-time for invulnerability phases where Pale Order can't heal you (earn AP in Battlegrounds/Cyrodiil)
- **Precognition** ult — *Psijic Order guild line (Summerset)* — mandatory for a few solo-impossible stuns
- **Remembrance** ult — *Templar > Restoring Light* (morph of Rite of Passage) — a channeled group heal + big personal mitigation; a panic ultimate for one-shot mechanics

### Rotation (priority sweep — refresh whatever is highest, then Jabs as filler)
1. **Ritual of Retribution** (stand in it — it's your heal engine) → 2. **Channeled Focus** (Major Resolve up) → 3. **Blockade of Fire** → 4. **Vampire's Bane** → 5. **Barbed Trap** → 6. **Warding Contingency** → 7. **Everlasting Sweep** when it's up → 8. **Biting Jabs** as filler forever → 9. **Radiant Glory** below ~30% (it starts scaling at 50%) → 10. **Honor the Dead** only when health dips.

The whole game is: keep the four DoTs/buffs (Ritual, Blockade, Vampire's Bane, Barbed Trap) rolling, then hold Biting Jabs. Because Jabs feeds Judgment's Brand and Ritual feeds Bastion of Light, doing damage *is* your buff uptime and your healing.

**Pre-buff before pulls:** Channeled Focus, Vampire's Bane, Barbed Trap, Warding Contingency, then drop Ritual of Retribution as you engage. Solar Prison is your "survive this mechanic" ult; Everlasting Sweep is your DPS-and-heal ult.

---

## 2. GEAR

**Armor weight: 5 Medium / 1 Light / 1 Heavy.** Medium's Dexterity and Agility passives drive the dual-dagger stamina damage; the single Light and single Heavy piece exist to trigger the second and third tiers of **Undaunted Mettle**, which grants max Health/Magicka/Stamina for *each distinct weight worn* — a 5/1/1 split fires all three tiers, worth more than a seventh medium piece. The Heavy piece also nudges the profile tankier for hard content.

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Medium | Divines | Stamina | **Slimecraw** (1pc monster — Minor Berserk) |
| Shoulders | Medium | Divines | Stamina | Order's Wrath |
| Chest | Medium | Divines | Stamina | Deadly Strike |
| Hands | Medium | Divines | Stamina | Order's Wrath |
| Belt | **Light** | Divines | Stamina | Order's Wrath |
| Legs | Medium | Divines | Stamina | Order's Wrath |
| Boots | **Heavy** | Reinforced | Stamina | Order's Wrath |
| Necklace + Ring 1 | — | Bloodthirsty | Weapon Damage | Deadly Strike |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Charged / Nirnhoned | Poison + Absorb Stamina | Deadly Strike |
| Back bar (Inferno Staff) | — | Infused | Weapon Damage | *(Maelstrom / standalone)* |

*Deadly Strike is doing real work here, not filling space: its 5-piece boosts **channeled, DoT, and AoE damage by ~15%**, and Biting Jabs is a channel while Ritual / Vampire's Bane / Blockade are DoTs — the set is built for exactly this kit. Order's Wrath is flat crit chance + crit damage. Both are **craftable and you already own them**, so this whole build is buildable at your own station today — no trial grind. In-game tooltips override — confirm on your bar.*

**Where it comes from:** Deadly Strike and Order's Wrath = crafted (you own both). Slimecraw = 1pc monster helm (overland/Wayrest Sewers I). Ring of the Pale Order = Antiquities. Maelstrom inferno staff (Crushing Wall) = vet Maelstrom Arena — the only piece worth chasing, and even that's optional.

**Fallback ladder (you don't need trial gear — you own your endgame):**
- Body: Order's Wrath → **you own it, it's the endgame body set here.** Cheaper crit alt: Mother's Sorrow (overland, dirt cheap on traders).
- Weapons/jewelry: **Deadly Strike — you own it and it's the best-in-slot for a channel/DoT Templar.** Marginal trial upgrade later: Ansuul's Torment (Sanity's Edge) in interrupt-heavy fights, ~a few %.
- Back staff: any inferno staff until you earn Crushing Wall; the Maelstrom staff only buffs Blockade of Fire, so it's a small gain.

**Mundus:** The Thief default → The Lover if your penetration is short → The Lady for the nastiest content
**Attributes:** 64 Stamina default → 32/32 Health/Stamina when struggling → 64 Health for one-shot fights (only ~−5% damage)
**Food:** Braised Rabbit with Spring Vegetables (max Stamina + recovery), or Bewitched Sugar Skulls for the tri-stat health buffer on hard content
**Potions:** Weapon Power potions (Blessed Thistle + Dragonthorn + Wormwood) — Weapon Damage + crit + stamina return
**Race note:** Race is the smallest dial in the build (~5% spread) and costs real money to change — default to whatever the character already is. If you ever *do* re-roll and want to lean into the documented stamina gap, **Redguard** is the only race with a real stamina-sustain passive.

### The Magicka Templar alternative (survivability-leaning)

**The full write-up is its own guide → [Magicka Templar](magicka-templar.md).** The short version below covers the Armory-loadout flip:

Same class, same masteries, same melee cone — but built around **Puncturing Sweep** (the Jabs morph that **heals you for 25% of the damage done**) instead of Biting Jabs, on a magicka stat spread. It parses a hair lower (~67.4k vs ~69.4k — noise by this repo's standard) and heals noticeably more, so it's the pick when a fight is out-damaging your Pale Order + Bastion healing. The changes are small: swap Biting Jabs → **Puncturing Sweep**, run magicka enchants and food, and you can play it dual-wield *or* two-staff since Sweep is still a cone. Everything else — masteries, DoTs, Ritual/Bastion heal engine, CP — is identical. Treat it as a loadout you flip to in the Armory Assistant when you want to trade a sliver of damage for a lot of healing.

---

## 3. GROUP CONTENT — adaptation notes

Same character, different job: the group brings buffs, debuffs, and a healer, so you drop self-sufficiency for damage.

- **Drop Ring of the Pale Order** — a healer exists; complete a third jewelry piece of your damage set instead (a full Deadly Strike / trial-set jewelry line).
- **Drop Honor the Dead and Warding Contingency** — the healer covers you. Slot **Blazing Spear** (a second Sacred Ground tile + group synergy) and a group utility skill in their place.
- **Ritual of Retribution stays** — it's now a group heal *and* your Bastion of Light engine; Blazing Spear stacks more Sacred Ground on top.
- **Everlasting Sweep** stays as your spammed ult; **Solar Prison / Solar Disturbance** is a group Major Maim zone for burn phases.
- Deadly Strike remains strong for grouped Templar (channel + DoT), but a trial weapon/jewelry set (Ansuul's Torment, Sanity's Edge, in fights where you interrupt something every ~30s) edges it.

This is a directional adaptation, not a tested raid parse — for a progression trial, verify bars against the **live Hyperioxes group Templar DPS build** before the run rather than trusting this section.

---

## 4. PvP

Templar came through the U49/U50 rework as a premier brawler — Jabs pressure, layered self-healing, and Purifying Light burst. Your PvE chassis translates, but PvP wants burst, hard CC, and bigger health.

**What carries over:** Biting Jabs pressure (Judgment's Brand still fires), Honor the Dead burst heal, Channeled Focus resolve, Everlasting Sweep for AoE heal-and-damage.

**What changes:**
- **Purifying Light** (the other Backlash morph, *Dawn's Wrath*) becomes your burst — it heals you when the delayed blast lands, so your combo is also a heal
- **Living Dark** (Eclipse morph, *Dawn's Wrath*) for the passive heal-and-snare when attacked
- **Ritual of Rebirth / Breath of Life** as an extra burst heal in the healer role
- Heavier armor or a 5/1/1 split, ~30k+ health, **Impen** on all armor, Health/tri-stat enchants

**Sets:** metas rotate every season — treat this as directional. A damage set you own (**Deadly Strike** is a legitimate stat option) or a proc set on the front bar, **Rallying Cry** on the back bar (the PvP survival staple), a monster set (Balorgh for ultimate-scaling burst), and a survival mythic (Gaze of Sithis for a max-tank no-block build, or keep Pale Order for the raw self-heal).

*Source: cross-check the current Alcast U50 Templar PvP build before spending gold — season metas rotate, and the live page plus in-game tooltips override.*

---

## 5. Champion Points — Spend Order (1200 → 1800)

At CP 1200 you have ~400 points per color; at 1800, ~600. **Each table is in the order you actually unlock it** — the tree opens outward from the center, so buy top to bottom and every row is reachable by the time you get to it (connector stars come before the deeper stars they gate). The **`Slot`** line names the active stars for that tree — buy those as soon as the tree lets you reach them, and fill the passives as you path through. Exact node adjacency shifts a little with which stars you pick, so glance at the in-game tree to confirm.

### 🔵 BLUE (Warfare)

**Slot (4):** Master-at-Arms · Deadly Aim · Fighting Finesse · Wrathful Strikes — the damage slots sit near the center, so they come first.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Master-at-Arms** | **SLOT** (50) | +direct damage — Jabs and Radiant Glory are direct |
| 2 | **Deadly Aim** | **SLOT** (50) | +single-target damage — your Jabs channel on a boss |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits (Vampire's Bane already hands you Major crit buffs) |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | Eldritch Insight | buy max (20) | max magicka (fuels Ritual/Vampire's Bane/Honor the Dead) |
| 8 | Tireless Discipline | buy max (20) | max stamina |
| 9 | **Blessed** | buy max (20) | **your heals hit harder — huge on a Templar** (Jabs/Sweep, Ritual, Honor the Dead, Everlasting Sweep, Pale Order) |
| 10 | Quick Recovery | buy max (20) | healing received |
| 11 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 12 | Elemental Aegis | buy max | −elemental damage |
| 13 | Preparation | buy max | −damage, always on |
| 14 | **Reaving Blows** | buy (50), swap option | heals off direct damage; stacks with Pale Order + Bastion for absurd solo healing |
| 15 | Thaumaturge | buy (50), swap option | boosts your DoTs (Ritual, Vampire's Bane, Blockade) on DoT-heavy fights |
| 16 | Ironclad / Duelist's Rebuff | buy (50), swap options | −direct / −single-target damage for a boss that hits like a truck |

*Items 1–13 ≈ your 1200 budget (400/tree). Items 14–16 come online by 1600–1800 as per-fight slottable swaps — no regrinding.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Rejuvenation · Expert Evasion — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | **Rejuvenation** | **SLOT** (50) | **resource recovery — this is the answer to your chronic stamina shortfall** (unlike your DK, this build has no Soul-of-Flame free sustain) |
| 4 | Hero's Vigor | buy max | max health |
| 5 | Tumbling | buy max | cheaper dodge rolls |
| 6 | Sprinter + Hasty | minimum points | connectors to deeper stars |
| 7 | **Expert Evasion** | **SLOT** (50) | cheaper, stronger dodge rolls |
| 8 | Defiance | buy max | mitigation |
| 9 | Mystic Tenacity | buy max | less stun/fear time |
| 10 | Bloody Renewal | buy (50), swap option | resources on kills — add-heavy fights (a second sustain lever) |
| 11 | Siphoning Spells | buy (50), swap option | magicka back on kills if Channeled Focus isn't enough |
| 12 | Bracing Anchor | buy (50), swap option | block-heavy fights (in for Expert Evasion) |
| 13 | Pain's Refuge + Bastion | buy (50), swap options | the PvP defensive pair |

*Items 1–9 ≈ your 1200 budget; 10–13 fill toward 1800. Note on your **open stamina issue:** the diagnosis stands — it's light-attack weaving gaps and late casts, not gear. Jabs is a channel, which *widens* the weave window and eats stamina fast, so the fix is discipline (a light attack between every cast) plus the off-hand Absorb Stamina enchant and Rejuvenation slotted — not a bigger recovery set.*

### 🟢 GREEN (Craft)

**Slot:** Steed's Blessing.

| # | Star | Action |
|---|---|---|
| 1 | **Steed's Blessing** | **SLOT** (50) — out-of-combat speed |
| 2 | Treasure Hunter | buy (needs ~35 connector points) — better chest loot |
| 3 | Gilded Fingers | buy — more gold |
| 4 | Liquid Efficiency | buy — potions sometimes not consumed |
| 5 | Meticulous Disassembly | buy — better refining |
| 6 | Anything else | taste — nothing here affects combat |

---

## Skill line passives

Rule of thumb: **buy every passive in every line you have a skill slotted from.** Skill points are abundant. Priority order if you're short:

- **Aedric Spear** (Biting Jabs, Everlasting Sweep) — all 4; **Piercing Spear** (crit damage) and **Spear Wall** (mitigation on Jabs) are the standouts — HIGH
- **Dawn's Wrath** (Radiant Glory, Vampire's Bane) — all 4; **Illuminate** and **Enduring Rays** (longer DoTs) matter, and **Restoring Spirit** cuts ability costs (helps sustain) — HIGH
- **Restoring Light** (Channeled Focus, Ritual of Retribution, Honor the Dead) — all 4; **Master Ritualist**, **Light Weaver**, and **Sacred Ground** feed your heal engine directly — HIGH
- **Dual Wield** — the flat damage passives — HIGH
- **Destruction Staff** (back bar) — Tri Focus, Penetrating Magic, Ancient Knowledge, Elemental Force
- **Fighters Guild** (Barbed Trap) — **Slayer** (flat Weapon/Spell Damage, always on) — HIGH
- **Medium Armor** — Dexterity, Agility — HIGH; **Light/Heavy Armor** — stat passives for your single pieces
- **Soul Magic** (Warding Contingency) — the line passives
- **Undaunted** — **Undaunted Mettle** (your 5/1/1 pays out fully) — HIGH
- **Alchemy** — Medicinal Use — HIGH; **Racial** — all

---

## 6. SHOPPING LIST (in priority order)

1. **Craft Deadly Strike + Order's Wrath** — you own both traits; this is your entire endgame body/weapon/jewelry, no grind
2. **Slimecraw** 1pc helm — Wayrest Sewers I / overland
3. **Ring of the Pale Order** — Antiquities (keep it; it's the fixture)
4. **Scribing unlocked** (Gold Road) → Warding Contingency (or skip it and run Living Dark)
5. **Crushing Wall inferno staff** — vet Maelstrom Arena (optional, small Blockade gain)
6. **Ansuul's Torment** — Sanity's Edge, only for grouped/interrupt fights later
7. Keep: Slimecraw, Ring of the Pale Order, Order's Wrath, Deadly Strike

---

*Sources: Hyperioxes U50 Stamina Templar Solo build (soloed vet HM Cradle of Shadows, ~69.4k) and U50 Magicka Templar Solo build (soloed vet HM March of Sacrifices, ~67.4k). Skill morphs and lines verified vs ESO-Hub / UESP / Fextralife U50 tooltips; Class Mastery names verified vs ESO-Hub / Alcast U50 Class Mastery lists. Warding Contingency scripts flagged to confirm in-game. PvP is directional — cross-check the current Alcast U50 Templar PvP page, metas rotate seasonally. In-game tooltips override any guide. Revision date: 2026-08-15.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword & shield. Bar order: Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you (worth more than any companion heal, since Pale Order + Bastion of Light already heal you), and her Penetrating Strikes buffs your light-attack weaving — which is exactly the discipline your stamina fix depends on.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach — free penetration that can free a bar slot. **Azandar (Tank)** brings Major and Minor Vulnerability, best-rated for Infinite Archive.

Full details for all eight companions, including farming perks and gear traits: see `../shared/companions.md`.
