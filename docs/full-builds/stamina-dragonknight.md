# Stamina Dragonknight Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Stamina Dragonknight, pure class (no subclass), Class Mastery active
**Verified against:** the current U50 [Hyperioxes Solo Stamina Dragonknight](https://hyperioxes.com/eso/solo/stamina-dragonknight-build) (soloed **vet HM Unhallowed Grave**; the group sibling parses 166k). That build's stated core is **Magma Fist building Seething Fury, spent with Molten Whip, carried by Soul of Flame** — the bar below follows it, with the household's survivability swaps layered on. Skill names checked against U50 sources — the DK was heavily reworked in U49/U50, so trust in-game tooltips over any guide.
**Philosophy:** Kick ass and don't die. Build Seething Fury and dump it into an empowered Molten Whip, with flame DoTs ticking the whole time and layered self-healing (Blood of the Elder Dragon burst + Cauterize aura + Soul of Flame sustain + Pale Order), survivability weighted over parse.
**Weapon note:** this is the **melee** build — dual daggers front bar, two-hander back, medium armor. It's how you actually play: up close, all content, survivability first. This is the **stamina sibling** of your [Magicka Dragonknight](magicka-dragonknight.md); if you'd rather cast from range, that guide (and its two-staff ranged variant) is the magicka answer.

> **Confidence key:** Class skills (Magma Fist, Searing Claw, Disintegrating Dragonfire, Igneous Weapons, Blood of the Elder Dragon, Cauterize) are verified against U50 sources. Weapon-line morphs (dual-wield, two-handed) survived the DK rework unchanged but confirm the exact names on your bar. The Group and PvP sections are directional — verify bars against the live build before a progression run or before spending gold on PvP sets.

!!! warning "Rebuilt after the U49 Dragonknight rework — re-check the bar in-game"
    This guide was originally written with **pre-rework skill names** (Venomous Claw, Noxious Breath, Stone Giant, Coagulating Blood). Update 49 renamed them to **Searing Claw**, **Disintegrating Dragonfire** (which also moved to *Draconic Power*), **Magma Fist** (base: Superheated Ward) and **Blood of the Elder Dragon**, and converted the Dragonknight's Poison damage to **Flame**. The names below are corrected and verified against the U49 patch notes, but the rework also changed *mechanics* — notably **Molten Whip is now a spender**, not a spammable (each non-Whip DK cast builds a Seething Fury stack). Treat the bar order and rotation here as directional and confirm against the live [Hyperioxes U50 Stamina Dragonknight build](https://hyperioxes.com/eso/solo/stamina-dragonknight-build) before a hard clear.

---

## 0. Class Mastery (pick 2 — stay pure class)

Subclassing disables the Class Mastery system entirely, and you'd lose both mastery passives — never propose it. You pick **2**.

| Mode | Mastery 1 | Mastery 2 | Situational swap |
|---|---|---|---|
| Solo PvE / Group | **Wildfire Embers** | **Inexorable Descent** | **Resolute Defense** replaces Inexorable Descent in block-heavy fights |
| PvP | Wildfire Embers | Resolute Defense | Lead From the Front if you dump ultimates in a group |

- **Wildfire Embers** — bonus Flame Damage that stacks up to 12×, +25% per stack; the single biggest damage mastery for any DK, and your poison/flame kit keeps it fed. Note: it does **not** scale with Thaumaturge, which is why your CP leads with Wrathful Strikes (see §5).
- **Inexorable Descent** — buffs the Landslide passive: more damage done, healing done, and shield strength. Cheap "everything's a little better" pick that also helps you not die.

---

## 1. SOLO PvE — Skills

Your bread and butter — the verified U50 solo StamDK. Dual daggers front (up-close damage + weaving), two-handed back for the buff/DoT/execute suite.

### Skills — Base Setup

| Front Bar (Dual Daggers) | Back Bar (Two-Handed) |
|---|---|
| 1. **Magma Fist** (morph of Superheated Ward, *Earthen Heart*) — the **builder** | 1. **Igneous Weapons** (morph of Molten Weapons, *Earthen Heart*) |
| 2. **Molten Whip** (morph of Lava Whip, *Ardent Flame*) — the **spender** | 2. **Cauterize** (morph of Inferno, *Ardent Flame*) |
| 3. **Searing Claw** (morph of Searing Strike, *Ardent Flame*) | 3. **Disintegrating Dragonfire** (morph of Dragonfire Breath, *Draconic Power*) |
| 4. **Soul of Flame** (morph of Core of Flame, *Ardent Flame*) | 4. **Shatterspike Mantle** (morph of Earthspike Mantle, *Earthen Heart*) |
| 5. **Blood of the Elder Dragon** (morph of Dragon Blood, *Draconic Power*) | 5. **Carve** (morph of Cleave, *Two-Handed*) |
| **Ult:** Standard of Might (morph of Dragonknight Standard, *Ardent Flame*) | **Ult:** Take Flight (morph of Dragon Leap, *Draconic Power*) |

*Dagger enchants: main-hand **Poison**, off-hand **Absorb Stamina**. That off-hand Absorb Stamina is deliberate — it's the same lever that patched your Mag DK's sustain gap, and stamina builds feel drain harder without Soul of Flame's magicka-return morph doing the work. (Confirm the base-skill names of Stampede/Deadly Cloak on your bar — the weapon lines weren't part of the DK rework, but tooltips override.)*

### What each does for your "don't die" goal
- **Magma Fist** — your **builder**, and the button you press most. Each hit applies a **Heat Shock** stack (**+66 damage taken per stack, 7s, 3 stacks**), and hitting an enemy at max stacks empowers your *next* Magma Fist within 6s by **66%**. Every non-Whip Dragonknight cast — this included — also banks a stack of Seething Fury for the Whip.
- **Searing Claw** — scaling flame DoT: the longer it sits on a target, the harder it ticks. Cast, then don't touch it.
- **Disintegrating Dragonfire** — applies **Major Breach** (your solo penetration — you have no group to provide it) plus an AoE flame DoT. This is *why* the solo build takes Disintegrating Dragonfire and not a group morph.
- **Molten Whip** — the **spender**. Seething Fury stacks (from any other Dragonknight cast) give **+5% damage done each, 10s, up to 3** — and crucially that damage buff *survives* the empowered Whip, which itself hits for **+33% per stack**. Never whip twice from empty; land three other DK casts between empowered Whips and it lines up on its own.
- **Soul of Flame** — the sustain engine, and the reason this build can run all-offence gear. It restores **15% of your missing Stamina *and* Magicka every 2s over 4s**. Hyperioxes says the U50 StamDK is *carried* by it — it's the same skill that trivialises sustain on your Mag DK.
- **Blood of the Elder Dragon** — burst self-heal scaling off your **Max Health** (not your damage stats), which also heals nearby allies and grants **Major Fortitude + Minor Courage**. Your panic button.
- **Shatterspike Mantle** — **Major Resolve** (your armour), plus a 20s AoE DoT that adds flat damage to all your ticks. This is the mitigation slot the earlier revision of this guide simply didn't have.
- **Cauterize** — grants **Major Savagery/Prophecy** (weapon/spell crit) while slotted *and* lays a heal-over-time ember aura on you. This is the household pick over its twin **Incinerate** (same crit buff, but fireball *damage* instead of healing) — you keep the crit and gain a heal layer for a small damage trade. Layered healing = Blood of the Elder Dragon (burst) + Cauterize (HoT) + Pale Order (per-damage).
- **Igneous Weapons** — Major Brutality/Sorcery + a weapon/spell-damage empower for the group of one that is you.
- **Carve** — AoE bleed DoT that also feeds ultimate. A DoT, so Deadly Strike (see §2) supercharges it.
- *(**Stampede**, **Executioner** and **Deadly Cloak** moved to the swaps below — the builder/spender core plus Major Resolve and Soul of Flame take priority on a 10-slot bar.)*

### Situational swaps (with skill line sources)
- **Incinerate** — *Dragonknight > Ardent Flame* (other morph of Inferno) — trade Cauterize's heal aura back for fireball damage when a fight isn't threatening. Same crit buff either way.
- **Resolving Vigor** — *Alliance War > Assault* — a strong HoT for burst-damage windows and invulnerability phases where Pale Order can't heal you (no damage going out = no Pale Order heal).
- **Ulfsild's Contingency** — *scribed grimoire, Soul Magic; scripts: Flame / Lingering Torment / Resolve* — you have scribing (Gold Road), so this is a legitimate slot-5 damage-and-utility option in place of Executioner or Deadly Cloak.
- **Quick Cloak** — *Dual Wield* (other morph of Blade Cloak) — Major Evasion without the bleed if you want a cheaper defensive; Deadly Cloak is the default because it also adds damage.
- **Blood of the Green Dragon** — *Dragonknight > Draconic Power* (other morph of Dragon Blood) — swap in over Blood of the Elder Dragon for Major Endurance + stamina recovery when a long fight out-drains you; trades burst-heal size for sustain.
- **Corrosive Armor** ult — *Dragonknight > Earthen Heart* — caps incoming hits at 6% max HP for 10s; panic ult for one-shot mechanics.
- **Precognition** ult — *Psijic Order guild line (Summerset)* — for the handful of solo-impossible stuns.

### Rotation — priority sweep (refresh whatever is highest and expired; don't run it as a rigid 1-through-9 list)
1. **Buffs first:** Igneous Weapons → Cauterize (back bar), then swap.
2. **DoTs down:** Disintegrating Dragonfire (Major Breach) → Searing Claw → Stampede/Carve on the pull.
3. **Spam Magma Fist** to keep Heat Shock up; weave a light attack before every cast.
4. **Blood of the Elder Dragon** the moment your health dips — it's a GCD well spent, not a panic-only button.
5. **Execute** with Executioner under 50%.
6. **Ultimates:** Take Flight is your DPS/engage ult; **Standard of Might** is your "survive this mechanic" ult (damage done up, damage taken down — stand in it).

**Pre-buff before pulls:** Igneous Weapons, Cauterize, then bar-swap and lay Disintegrating Dragonfire + a DoT before the first Magma Fist.

---

## 2. GEAR

**Armor weight: 5 Medium / 1 Light / 1 Heavy.** Medium is the stamina damage weight (Dexterity crit, Wind Walker recovery) and suits the dual-dagger melee playstyle. The single Light and single Heavy piece are there on purpose: wearing three *distinct* weights triggers all three tiers of **Undaunted Mettle** (max Health / Magicka / Stamina, one tier per distinct weight worn), so a 5/1/1 split is strictly more max-stat than a pure 7-Medium set. Put the Heavy piece in a big slot (chest or legs) for the most armor out of the trade.

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Medium | Divines | Stamina | Slimecraw (1pc monster) |
| Shoulders | Medium | Divines | Stamina | Order's Wrath |
| Chest | **Heavy** | Divines | Stamina | Order's Wrath |
| Hands | Medium | Divines | Stamina | Order's Wrath |
| Belt | **Light** | Divines | Stamina | Order's Wrath |
| Legs | Medium | Divines | Stamina | Order's Wrath |
| Boots | Medium | Divines | Stamina | Deadly Strike |
| Necklace + Ring 1 | — | Bloodthirsty | Weapon Damage | Deadly Strike |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Charged / Nirnhoned | Poison + Absorb Stamina | Deadly Strike |
| Back bar (Two-Hander) | — | Infused | Weapon Damage | Maelstrom Greatsword (Merciless Charge) |

*The split: **Deadly Strike** = 2 daggers + 2 jewelry + boots (5). It boosts **damage-over-time and channeled abilities by 15%** — and this build carries several flame DoTs and bleeds (Searing Claw, Disintegrating Dragonfire, Stampede, Carve, Deadly Cloak), so Deadly Strike is near-BiS **and craftable, and you already own it**. **Order's Wrath** = 5 body (crit + crit damage, also craftable and owned). **Slimecraw** = 1pc monster helm. **Pale Order** = Ring 2, the mythic — a fixture, do not drop it in solo content. The back-bar **Maelstrom Greatsword** carries its own 2pc (Merciless Charge boosts Cleave/Carve) so it doesn't eat a body-set slot; until you farm it, craft the back-bar greatsword as Deadly Strike or Order's Wrath — you're running full 5+5 either way. In-game tooltips override.*

**Fallback ladders (you don't need trial gear — the crafted setup clears everything):**
- Body: Order's Wrath → Deadly Strike (double up if short) → Briarheart / Ancient Dragonguard (both stamina-friendly overland)
- Weapons/jewelry: Deadly Strike (owned) → Order's Wrath (owned). Trial upgrade later: Aegis Caller or Ansuul's Torment on body if you ever want the last few %; not needed.
- Back-bar weapon: Maelstrom Greatsword → any crafted greatsword of your body set.

**Mundus:** The Thief (crit) default → The Lover for more penetration on the medium setup → The Lady only for the nastiest content.
**Attributes:** 64 Stamina default → 32/32 Health/Stamina when struggling → 64 Health for the brutal fights (~−5% damage, big survivability).
**Food:** Bewitched Sugar Skulls (tri-stat + recovery) — the household default and the most "not die" food. Dubious Camoran Throne (max stam + stam recovery) if a fight out-drains you.
**Potions:** Weapon Crit potions (Bugloss + Dragonthorn + Wormwood) for damage, or tri-stat/armor potions for survivability. Note: with Soul of Flame slotted your sustain is largely handled, so potions are a damage or safety choice rather than a crutch — much as the Mag DK does.
**Race note:** whatever the character already is — race is the smallest dial (~5%). Nord for max vet-HM mitigation; Redguard is the one race with a real stamina-sustain passive if your stamina gap ever bites here too. Don't pay to change it without reason.

---

## 3. GROUP CONTENT — adaptation notes

Same character, different job: the group provides Major Breach, buffs, and heals, so you drop self-sufficiency for damage.

- **Drop Ring of the Pale Order** — healers exist. Complete a third jewelry piece of your damage set in that slot instead.
- **Disintegrating Dragonfire's Major Breach is redundant** if a tank/support provides it — you can keep it for the flame DoT, or swap toward more group-relevant damage.
- **Cauterize → Incinerate** — you're not the healer; take the damage morph back (same crit buff).
- **Blood of the Elder Dragon may come off** for another DoT or a group utility slot — the healer covers you.
- **Standard of Might stays** — in a group it's also a damage-taken debuff zone that pairs with burn phases.

**Point to the live build before a progression run** — the current Hyperioxes group Stamina Dragonknight DPS list (166k parse in U50) is the reference; verify bars in-game rather than trusting a static table here.

---

## 4. PvP (Cyrodiil & Battlegrounds)

DK came out of the U49/U50 rework strong. Your PvE chassis translates, but PvP wants burst, hard CC, and bigger health.

- **Blood of the Green Dragon** over Blood of the Elder Dragon — the recovery and Major Endurance keep you alive under pressure.
- **Petrify** (*Earthen Heart*) for setup CC before a Magma Fist / Executioner burst.
- **Heavier armor or 5/1/1, ~30k+ health, Impen** on all armor, tri-stat/Health enchants.
- **Sets:** a stat/weapon-damage set on the front (**Deadly Strike** is a legitimate option you own) + a survival set (Rallying Cry) + a monster set + a survival mythic. **PvP set metas rotate every season** — confirm current pieces on Alcast's live U50 Stamina Dragonknight PvP page before spending gold.

*Directional only. Metas rotate seasonally — the live page and in-game tooltips override.*

---

## 5. Champion Points — Spend Order (1200 → 1800)

At CP 1200 you have ~400 points per color; at 1800, ~600. **Each table is in the order you actually unlock it** — the tree opens outward from the center, so buy top to bottom and every row is reachable by the time you get to it (connector stars come before the deeper stars they gate). The **`Slot`** line names the active stars for that tree — buy those as soon as the tree lets you reach them, and fill the passives as you path through. Exact node adjacency shifts a little with which stars you pick, so glance at the in-game tree to confirm.

### 🔵 BLUE (Warfare)

**Slot (4):** Wrathful Strikes · Deadly Aim · Fighting Finesse · Master-at-Arms — the damage slots sit near the center, so they come first.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything — leads over Thaumaturge because your Magma Fist hits are direct and Wildfire Embers doesn't scale with Thaumaturge |
| 2 | **Deadly Aim** | **SLOT** (50) | +single-target damage (your DoTs + Executioner) |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits |
| 4 | **Master-at-Arms** | **SLOT** (50) | +direct damage — Magma Fist, Stampede hits |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | Tireless Discipline | buy max (20) | max stamina |
| 8 | Eldritch Insight | buy max (20) | max magicka (Blood of the Elder Dragon/Cauterize cost) |
| 9 | Blessed | buy max (20) | Blood of the Elder Dragon + Cauterize heal harder |
| 10 | Quick Recovery | buy max (20) | healing received |
| 11 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 12 | Elemental Aegis | buy max | −elemental damage |
| 13 | Preparation | buy max | −damage, always on |
| 14 | **Thaumaturge** | buy (50), swap option | +DoT damage — swap in for Master-at-Arms on DoT-heavy fights; your flame kit is DoT-dense enough that this is a real option (just not over Wrathful Strikes) |
| 15 | Ironclad | buy (50), swap option | −direct damage on hard hitters |
| 16 | Duelist's Rebuff / Unassailable | buy (50), swap options | single-target / AoE mitigation for specific fights |

*Items 1–13 ≈ your 1200 budget (400/tree). Items 14–16 come online by 1600–1800 as per-fight swaps.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Rejuvenation · Expert Evasion — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | **Rejuvenation** | **SLOT** (50) | recovery — a comfort pick; with Soul of Flame slotted you can swap this for Bloody Renewal or Celerity once sustain feels solid |
| 4 | Hero's Vigor | buy max | max health |
| 5 | Tumbling | buy max | cheaper dodge rolls |
| 6 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 7 | **Expert Evasion** | **SLOT** (50) | cheaper, stronger dodge rolls |
| 8 | Defiance | buy max | mitigation |
| 9 | Mystic Tenacity | buy max | less stun/fear time |
| 10 | Bloody Renewal | buy (50), swap option | resources on kills — add-heavy fights, helps the stamina gap |
| 11 | Siphoning Spells | buy (50), swap option | recovery if a fight out-drains you |
| 12 | Bracing Anchor | buy (50), swap option | block-heavy fights (in for Expert Evasion) |
| 13 | Pain's Refuge + Bastion | buy (50), swap options | the PvP defensive pair |

*Items 1–9 ≈ your 1200 budget; 10–13 are fight-specific swaps toward 1800. Note: Rejuvenation is slotted as a comfort pick, not a necessity — Soul of Flame carries sustain here exactly as it does on the Mag DK.*

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

## 6. SHOPPING LIST (in priority order)

1. **Deadly Strike** — you own it; buy out the full 5 (2 daggers + 2 jewelry + boots) with Stamina/Weapon Damage.
2. **Order's Wrath** — you own it; craft the 5 body pieces.
3. **Slimecraw** helm (1pc) — overland (Rivenspire) or Undaunted.
4. **Maelstrom Greatsword** (Merciless Charge) — vet Maelstrom Arena; until then any crafted greatsword.
5. Keep: **Ring of the Pale Order**, Slimecraw. (Trial-set body upgrade is optional and not needed.)
6. **Scribing** already unlocked — Ulfsild's Contingency is a ready slot-5 swap.

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order: Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you (worth more than any companion heal given Pale Order already heals you), and her Penetrating Strikes buffs your light-attack weaving — which also helps close your known stamina/weaving gap.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that could free Disintegrating Dragonfire for another slot. **Azandar (Tank)** brings Major and Minor Vulnerability, best-rated companion for Infinite Archive.

Full details for all eight companions, including farming perks and gear traits: see `../shared/companions.md`.

---

*Sources: Hyperioxes U50 Stamina Dragonknight Solo Build, Alcast U50 Solo Stamina Dragonknight, ESO-Hub skill pages (Superheated Ward/Magma Fist, Searing Strike/Searing Claw, Inferno/Cauterize/Incinerate, Dragon Blood/Blood of the Elder Dragon), U49/U50 DK rework notes. Class skills verified against U50; weapon-line morphs are pre-rework-stable but confirm on your bar. In-game tooltips override every source, including this file. Revised 2026-08-16.*
