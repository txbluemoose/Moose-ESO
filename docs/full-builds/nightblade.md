# Pure Nightblade Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Stamina Nightblade, pure class (no subclass), Class Mastery active
**Verified against:** the current U50 Hyperioxes Solo Stamina Nightblade build (soloed vet HM The Cauldron / vet Frostvault). Group and PvP sections are directional adaptations — verify bars in-game before a progression run.
**Philosophy:** Kick ass and don't die. Nightblade has the deepest self-healing toolkit of any class — heal-and-resources-while-slotted (Siphoning Attacks), heal-on-spammable (the spectral bow), heal-on-execute (Killer's Blade), heal-on-cast paths. Lean into every one of them. Damage that heals you is the whole point.
**Weapon note:** the main build is **melee — dual daggers front bar, medium armor**. It's how you actually play: up close, all content, survivability first. The **bow is a back bar** you swap to for two seconds to lay DoTs, then swap back to the daggers where you live — same relationship the Mag DK guide has with its ice staff. This is not a "ranged Nightblade"; you fight in melee. The **magicka** sibling — Swallow Soul heal-spammable, staff-friendly — is a separate guide → [Magicka Nightblade](magicka-nightblade.md).

> **Confidence key:** The Solo PvE section is fully verified against the current U50 Hyperioxes Solo Stamina Nightblade build. Class Mastery names are verified against ESO-Hub / Alcast U50 lists. The Group section is a self-sufficiency-off adaptation — point to the live group build before raiding. The PvP section is directional (Alcast framework) — PvP set metas rotate every season, so confirm current pieces in-game before spending gold. **In-game tooltips beat this guide** — ZOS renames Nightblade abilities every refresh; trust your bar.

---

## 0. Class Mastery (pick 2 — stay pure class)

Pick 2. Subclassing disables this whole system and costs you both mastery passives — **stay pure class**. The five Nightblade masteries are **An Eye for Exploitation, Above and Beyond, Cutthroat's Focus, Nocturnal Inspiration, and Share the Spoils** — Share the Spoils is a *group* Magicka/Stamina + Ultimate passive, so it's irrelevant to solo and doesn't appear in the table below.

| Mode | Mastery 1 | Mastery 2 | Situational swap |
|---|---|---|---|
| Solo PvE / Group | **An Eye for Exploitation** | **Above and Beyond** | Cutthroat's Focus replaces Above and Beyond when a fight isn't threatening |
| PvP | **An Eye for Exploitation** | Above and Beyond or Cutthroat's Focus | Nocturnal Inspiration if you dump ultimates constantly |

- **An Eye for Exploitation** — up to +1250 Weapon/Spell Damage based on the *target's* missing health, **and reduces your damage taken up to 12% based on your *attacker's* missing health**. This is the single best "kick ass and not die" mastery in the game: it ramps your damage into execute *and* your mitigation as the fight goes on. Non-negotiable first pick.
- **Above and Beyond** — flat +25% Critical Damage **and Healing** at all times (raises your crit cap by 30% too). The healing half multiplies every layered NB heal you run — Siphoning Attacks, the spectral bow, Killer's Blade. Pure "don't die" glue that also parses.
- **Cutthroat's Focus** — **verified 2026-09-26:** the **5%** is correct, but the trigger is easy to miss. Activating a Nightblade ability **while bracing** gives you a 0.3s dodge window; **dodging** an attack is what raises that attacker's damage taken by **5% for 5s** (20s against monsters). It is a block-cast passive, not a free damage swap.
- **Nocturnal Inspiration** — upgrades Hemorrhage to generate Ultimate on crit. Feeds Soul Harvest faster; better in ultimate-hungry PvP than in solo.

---

## 1. SOLO PvE — Skills

Delves, world bosses, vet dungeon soloing, arenas. This is your bread and butter — the verified U50 solo stamblade.

### Skills — Base Setup

| Front Bar (Dual Daggers*) | Back Bar (Bow — DoT/buff bar) |
|---|---|
| 1. **Surprise Attack** (morph of Veiled Strike, *Assassination*) | 1. **Endless Hail** (morph of Volley, *Bow*) |
| 2. **Relentless Focus** (morph of Grim Focus, *Assassination*) | 2. **Barbed Trap** (morph of Trap Beast, *Fighters Guild*) |
| 3. **Killer's Blade** (morph of Assassin's Blade, *Assassination*) | 3. **Refreshing Path** (morph of Path of Darkness, *Shadow*) |
| 4. **Siphoning Attacks** (morph of Siphoning Strikes, *Siphoning*) | 4. **Dark Shade** (morph of Summon Shade, *Shadow*) |
| 5. **Shadowy Disguise** (morph of Shadow Cloak, *Shadow*) | 5. **Ulfsild's Contingency** (scribed grimoire, *Soul Magic*; scripts: Bleed / Lingering Torment / Resolve) |
| **Ult:** Soul Harvest (morph of Death Stroke, *Assassination*) | **Ult:** Soul Tether (morph of Soul Shred, *Siphoning*) |

*\*Dual daggers are the default — best damage and the up-close playstyle you run. Dagger enchants: main-hand **Poison**, off-hand **Absorb Stamina** (that off-hand Absorb Stamina is part of the answer to your documented stamina gap — see the sustain note below). The bow back bar exists only to lay Endless Hail + Barbed Trap + Refreshing Path; you swap back to daggers immediately. You spend the fight in melee.*

**Why every one of these keeps you alive:**
- **Relentless Focus** — light-attack weaving builds 5 stacks, then fires the Assassin's Scourge spectral bow, which **heals you when the target is in melee range** (it is — you're on daggers). While slotted it grants **Major Savagery and Major Prophecy** (+2629 Weapon and Spell Critical). That buff works **while slotted on either bar**, so one front-bar slot covers both bars — don't waste a back-bar slot duplicating it. This skill *rewards* the exact weaving discipline your DK was struggling with.
- **Siphoning Attacks** — while slotted on either bar, **heals you 1250 Health and restores 200 Magicka and 200 Stamina, once per second**. It's a while-slotted passive — there is nothing to cast and nothing to refresh. This is the class-level fix for your chronic stamina shortfall (see below).
- **Killer's Blade** — Disease-damage execute that deals up to **400% more damage to enemies under 50% health** and **heals you for 2399 if the enemy dies within 2 seconds**. Free layered heal on every trash mob, and it opens far earlier than you'd think. (The 25% figure belongs to the *base* skill, Assassin's Blade.)
- **Shadowy Disguise** — **3 seconds of invisibility**, and your next direct-damage attack within those 3s is a **guaranteed critical**; while slotted you also gain **Minor Protection** (−5% damage taken), and **Major Resolve** via the Shadow Barrier passive. Your burst-and-brace button.
- **Refreshing Path** — a heal-over-time you stand in, plus **Major Expedition** to reposition. Pure layered survivability in the freed back-bar slot.
- **Dark Shade** — the shade applies **Minor Maim** to enemies near it (they hit softer) and adds free damage. Mitigation that also parses.
- **Soul Tether** (back-bar ult) is your "survive this" button — AoE damage that **heals you** and stuns; Soul Harvest (front) is your DPS/execute ult with big ultimate return on kills.

**Morph / scribing notes:**
- **Merciless Resolve** is the *magicka* morph of Grim Focus; **Relentless Focus** is the *stamina* morph (Physical damage bow) — you want Relentless on a stamblade. Both grant Major Savagery and Major Prophecy while slotted on either bar (neither grants Minor Berserk).
- **Siphoning Attacks** vs **Leeching Strikes**: they are the two morphs of Siphoning Strikes, and only Siphoning Attacks returns resources (1250 Health + 200 Magicka + 200 Stamina per second while slotted). Leeching Strikes heals more — 1800 Health per second — but returns **no** Magicka or Stamina, so it does nothing for your sustain problem. Take Siphoning Attacks.
- **Ulfsild's Contingency** needs Scribing (Gold Road), which you have. If you ever want that slot non-scribed, **Poison Injection** (morph of Poison Arrow, *Bow*) drops in cleanly — a ranged DoT that ramps hard as the target's health falls.

### Situational swaps (with skill line sources)
- **Leeching Strikes** — *Nightblade > Siphoning* (the other morph of Siphoning Strikes) — 1800 Health per second while slotted instead of 1250 + resources; take it only if sustain is genuinely solved and you want the bigger heal
- **Carve** (morph of Cleave, *Dual Wield*) — trash packs; AoE bleed that also feeds ultimate, all on your melee bar
- **Resolving Vigor** — *Alliance War > Assault* — burst-heal for invulnerability phases where Pale Order can't proc (nothing to hit). Grind a few Battlegrounds for the Alliance Points
- **Mass Hysteria** (morph of Aspect of Terror, *Shadow*) — AoE fear to peel a pack off you while you reset
- **Precognition ult** — *Psijic Order (Summerset)* — mandatory for the handful of solo-impossible stun mechanics (e.g. Zaan)
- **Bolstering Darkness** (morph of Consuming Darkness, *Shadow*) — panic ultimate: damage reduction bubble for one-shot mechanics

### Rotation (priority sweep — refresh whatever is highest that's about to fall off)
Don't read this as a 12-step list — it's a **sweep**. Top to bottom, then back to the top:

1. **Keep Relentless Focus stacks building** — weave a light attack before every skill; fire the spectral bow the instant it hits 5 stacks
2. **Siphoning Attacks** is a while-slotted passive — it ticks on its own, so there is nothing to press or refresh
3. Back bar for two seconds → **Barbed Trap → Endless Hail → Dark Shade → Refreshing Path → Ulfsild's**, then swap back to daggers
4. **Shadowy Disguise** for the burst/brace window — the next hit out of it is a guaranteed crit
5. **Surprise Attack** as your spammable filler
6. **Killer's Blade** the moment anything drops under 50%
7. **Soul Harvest** as your damage ultimate; **Soul Tether** when you need the heal-and-stun

**Pre-buff before a pull:** Barbed Trap → Endless Hail → Dark Shade → Refreshing Path → Ulfsild's on the back bar, swap to daggers, open with Shadowy Disguise.

### The stamina gap — this build fixes it, and here's the mechanism
Your documented DK stamina shortfall was diagnosed as **light-attack weaving gaps**, not skill costs. On this Nightblade the sustain fix is free: **Siphoning Attacks restores 200 Stamina and 200 Magicka every second just for sitting on your bar**, no casting and no upkeep, and **Relentless Focus turns your light attacks into a healing burst** on top. So the discipline that was *costing* you on the DK is what *funds* this build. If stamina still dips, the cause is the same one — you're skipping light attacks between skills — not gear. The off-hand **Absorb Stamina** dagger enchant is the backstop.

---

## 2. GEAR — Solo

**Armor weight: 5 Medium / 1 Light / 1 Heavy.** Medium carries the stamina damage passives (Dexterity, Agility) and suits the dual-dagger melee profile; the single Light (your Slimecraw head) and single Heavy (chest) exist to trigger **all three tiers of Undaunted Mettle** — that passive grants max health / magicka / stamina per *distinct* armor weight worn, so a 5/1/1 split banks every tier instead of just one. This is a survivability-positive split, not a damage sacrifice.

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Light | Divines | Stamina | **Slimecraw** (1pc monster) |
| Shoulders | Medium | Divines | Stamina | Order's Wrath |
| Chest | Heavy | Reinforced | Stamina | Order's Wrath |
| Hands | Medium | Divines | Stamina | Order's Wrath |
| Belt | Medium | Divines | Stamina | Order's Wrath |
| Legs | Medium | Divines | Stamina | Order's Wrath |
| Boots | Medium | Divines | Stamina | Deadly Strike |
| Necklace + Ring 1 | — | Bloodthirsty | Weapon Damage | Deadly Strike |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Nirnhoned / Charged | Poison + Absorb Stamina | Deadly Strike |
| Back bar (Bow) | — | Infused | Weapon Damage | Deadly Strike |

*Deadly Strike counts 3 always-on pieces (boots + neck + ring 1) plus the active bar's weapon(s): 2 daggers front, or the bow (a two-hander = 2 set pieces) on the back bar — so you get the full 5-piece Deadly Strike bonus on **both** bars. That's the whole reason to run it on the weapons. In-game tooltips override — confirm on your bar.*

**Where it comes from — and the good news:** this is a **build-it-today** setup. **Order's Wrath** is craftable and **Deadly Strike** is cheap from guild traders (Cyrodiil set) — both buildable at your own station (you own both). **Slimecraw** is a 1-piece overland monster helm. **Ring of the Pale Order** you already run. No trial gear required to be strong here.

**Fallback / upgrade ladders (you already own the base — these are sidegrades, not requirements):**
- Body: Order's Wrath is a keeper (crit chance + crit damage suit the class). Push-the-parse swap → **Tide-Born Wildstalker** (Gold Road overland) or **Ansuul's Torment** (Sanity's Edge) for +a few %. Not worth chasing over "don't die."
- Weapons/jewelry: **Deadly Strike** (you own it) → **Cruel Flurry** (Maelstrom daggers, an arena weapon that supercharges your DoTs — *confirm the exact arena-weapon name in-game*) for the front bar if you want a real upgrade.

**Mundus:** The Thief default (crit) → The Lover for the medium setup's penetration → The Lady only for brutal content.
**Attributes:** 64 Stamina default → shift toward Health when a fight is out-damaging your heals (only ~5% damage lost per big shift).
**Food:** Bewitched Sugar Skulls (tri-stat — max survivability). Artaeum Takeaway Broth if you want more recovery on top.
**Potions:** Weapon Power potions (Blessed Thistle + Dragonthorn + Wormwood). Between Siphoning Attacks and the Absorb Stamina enchant you should not need Tri-Restoration potions — if you do, it's a weaving problem, not a potion problem.
**Race note:** Race is the smallest dial in any build (~5% spread) and costs money to change — run whatever the character already is. If it ever genuinely comes up, **Redguard** is the only race with a real stamina-sustain passive; Khajiit is the crit-damage pick if you'd rather kick more ass than not die.

---

## 3. GROUP CONTENT — adaptation notes

Same character, different job: the group hands you buffs, debuffs, and dedicated heals, so you trade self-sufficiency for damage.

### Key changes from the solo build

| What changes | Do this | Why |
|---|---|---|
| **Mythic** | Drop **Ring of the Pale Order** → a real 5-piece damage set (a trial set) in its place, or a second body set | Healers exist |
| **Siphoning Attacks** | Can come off for a pure DoT or buff skill | The group heals you and hands you sustain, and Relentless Focus + Killer's Blade still cover you. Keep it if the fight is chaotic |
| **Dark Shade / Shadowy Disguise** | Stay | Minor Maim and Minor Protection are still free personal mitigation, and Shadowy Disguise's guaranteed crit is a parse gain, not just a defensive |
| **Barbed Trap** | Stays — drop it only if someone else brings Minor Force | Minor Force is a group crit-damage buff if no one else supplies it |
| **Soul Harvest** | Stays as the execute ult | It also applies a debuff that helps the group's burn |

!!! warning "Do not guess a raid rotation from this page"
    Point yourself at the live **Hyperioxes group Stamina Nightblade DPS build** and copy its bar and set list before a progression run — that's the authoritative source, and it changes between updates.

---

## 4. PvP (Cyrodiil & Battlegrounds) — directional

Nightblade is a perennial PvP powerhouse — cloak, burst, and mobility are exactly what small-scale and solo PvP want. Your PvE chassis translates, but PvP wants burst, hard CC, and a bigger health pool. This section is **directional** — verify against Alcast's current U50 Stamina Nightblade PvP build, and remember **PvP set metas rotate every season**, so confirm current pieces on the live page before spending gold.

### PvP bar

| Front Bar (Dual Wield) | Back Bar (Bow) |
|---|---|
| 1. Surprise Attack (morph of Veiled Strike, *Assassination*) — the burst spammable, applies Major Fracture | 1. Relentless Focus (morph of Grim Focus, *Assassination*) — Major Savagery & Prophecy while slotted |
| 2. Rending Slashes (morph of Twin Slashes, *Dual Wield*) — bleed pressure | 2. Poison Injection (morph of Poison Arrow, *Bow*) — the execute DoT |
| 3. Killer's Blade (morph of Assassin's Blade, *Assassination*) — execute, opens at **50%** | 3. Refreshing Path (morph of Path of Darkness, *Shadow*) — heal-over-time + Major Expedition |
| 4. Dark Cloak (morph of Shadow Cloak, *Shadow*) — heals **853/sec over 3s, scaling off Max Health** and **+150% while Bracing** | 4. Resolving Vigor (morph of Vigor, *Alliance War → Assault*) — heal-over-time |
| 5. Mass Hysteria (morph of Aspect of Terror, *Shadow*) — reliable AoE fear | 5. Siphoning Attacks (morph of Siphoning Strikes, *Siphoning*) — sustain while slotted |
| **Ult:** Soul Harvest (morph of Death Stroke, *Assassination*) — execute ult + Major Defile | **Ult:** Bolstering Darkness (morph of Consuming Darkness, *Shadow*) — the escape/mitigation ult |

*Take **Shadowy Disguise** over Dark Cloak if you want the invisibility and its guaranteed crit instead of the heal. **Carve** (morph of Cleave, *Dual Wield*) can replace Rending Slashes for Ultimate generation.*

!!! note "How these bars were built"
    **The arrangement is ours; the skills are verified.** No published PvP bar was copied — these were assembled from skills already verified elsewhere in this guide, using standard PvP structure (pressure, burst, heal and CC on the front; buffs, shield, mobility on the back).

    **Re-checked 2026-09-26** against ESO-Hub's individual skill pages, once network access to the source sites was restored. Every skill's name, skill line and effect is confirmed current; several descriptions were corrected in that pass, and a base skill that had been slotted in place of a morph was fixed.

    **Nearest published reference:** Alcast's U50/U51 Stamina Nightblade PvP build. Compare against it before spending gold, and treat these bars as a tested-by-nobody starting point rather than a parse-proven list. **Update 51 (28 Sept 2026) reworks the Major/Minor buff system, Mundus Stones and class passives** — re-verify after it lands.

| | PvP setup |
|---|---|
| **Carries over** | Surprise Attack burst, Killer's Blade execute (deadly in PvP — it opens under 50%), Shadowy Disguise (the cloak *is* the class), Siphoning Attacks sustain, Soul Harvest / Soul Tether burst ultimates |
| **Swap — Shadowy Disguise → Dark Cloak** *(the other Shadow Cloak morph)* | Often the PvP pick: a burst **heal** on cast rather than an invisibility, and it can't be broken by AoE/detection. Weigh cloak vs. heal for the campaign you're in |
| **Swap in — Mass Hysteria** *(Shadow)* | Reliable AoE fear/CC |
| **Armour & stats** | Heavier armor, or a 5/1/1 pushed toward Heavy; ~30k+ health, **Impen** on all armor, Health/tri-stat enchants |
| **Front bar set** | A proc or weapon-damage set you own — **Deadly Strike** is a legitimate stat option already in your bags |
| **Back bar set** | **Rallying Cry** — the PvP survival staple |
| **Monster set** | **Balorgh** for ultimate-scaling burst |
| **Mythic** | **Ring of the Pale Order** still works, or a no-block tank mythic like **Gaze of Sithis** for a heavier setup |

*Season metas rotate — the live Alcast page and your in-game tooltips override this section.*

---

## Skill Line Passives

Rule of thumb: **buy every passive in every line you have a skill slotted from.** Priorities if points are short:

- **Assassination:** all 4 — **Hemorrhage** (crit damage + group Minor Savagery) and **Master Assassin** are the stars; Executioner refunds resources on execute kills. **U50 note: Pressure Points now grants 1|2% Critical Chance per *Nightblade* ability slotted** (it used to be 1.25|2.5% per *Assassination* ability), so abilities from Shadow and Siphoning count toward it too — this bar feeds it from all three lines
- **Shadow:** all 4 — **Shadow Barrier** (Major Resolve after leaving stealth/cloak) is free armor every Shadowy Disguise
- **Siphoning:** all 4 — **Catalyst** (potion ult), **Magicka Flood**, and the heal boosts power the whole "damage that heals" plan
- **Dual Wield:** all — the flat damage passives carry the front bar
- **Bow:** all — the back bar's DoTs scale with them
- **Medium Armor:** Dexterity + Agility — HIGH
- **Undaunted:** Undaunted Mettle — HIGH
- **Fighters Guild:** Slayer — HIGH
- **Alchemy:** Medicinal Use — HIGH
- **Racial:** all

---

## 5. Champion Points — Spend Order (1200 → 1800)

At CP 1200 you have ~400 points per color; at 1800, ~600. **Each table is in the order you actually unlock it** — the tree opens outward from the center, so buy top to bottom and every row is reachable by the time you get to it (connector stars come before the deeper stars they gate). The **`Slot`** line names the active stars for that tree — buy those as soon as the tree lets you reach them, and fill the passives as you path through. Exact node adjacency shifts a little with which stars you pick, so glance at the in-game tree to confirm.

!!! tip "This table is a priority list, not the whole tree"
    **Warfare has 48 stars — 35 slottable, 13 passive.** Maxing all 13 Warfare passives costs **320 points**; four slottables cost 200. **Fitness has 41 stars — 28 slottable, 13 passive**, totalling **342 points** of passives. The table below names what matters most *for this build*, in the order you reach them. It is not the whole tree.

    **These Warfare passives are not in the table below, and two of them are large:**

    | Passive | Max | What it does |
    |---|---|---|
    | **War Mage** | 30 | **+100 Weapon and Spell Damage to Magical attacks** — Magic, Flame, Frost, Shock |
    | **Mighty** | 30 | **+100 Weapon and Spell Damage to Martial attacks** — Physical, Poison, Disease, Bleed |
    | **Flawless Ritual** | 40 | +30% per stage chance to apply a **Magical** status effect |
    | **Battle Mastery** | 40 | +30% per stage chance to apply a **Martial** status effect |

    Take **whichever of War Mage / Mighty matches your damage type**, plus the matching status-effect star. Check your own tooltips — the damage type is not always what the resource pool implies. **Both Dragonknights deal Flame (Magical) since U49**, the stamina one included.

    Fitness also leaves out **Tireless Guardian** (Block costs 20 less Stamina per stage, max 20), **Savage Defense** (Bash costs 45 less per stage, max 30) and **Fortification** (+2% damage blocked per stage, max 30) — all of which earn their place if you block a lot in melee.

    **The rule that follows: remaining passives outrank every "swap option" row.** A passive works every second of every fight; a fifth slottable does nothing at all unless you un-slot something for it. And because re-slotting is **free** out of combat and a full respec costs only **3,000 gold**, there is no reason to pre-buy a configuration you merely *might* want later — buy it when you need it.

    *Star costs and effects verified 2026-09-26 against esodecoded.com's datamined star pages.*

### 🔵 BLUE (Warfare)

**Slot (4):** Master-at-Arms · Deadly Aim · Fighting Finesse · Wrathful Strikes — the damage slots sit near the center, so they come first.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Master-at-Arms** | **SLOT** (50) | +direct damage — Surprise Attack, Killer's Blade, the spectral bow are all direct |
| 2 | **Deadly Aim** | **SLOT** (50) | +single-target damage — your whole solo game |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits (you crit constantly with Major Savagery up) |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything — safe, no-think pick |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | Eldritch Insight | buy max (20) | max magicka (Siphoning Attacks feeds it) |
| 8 | Tireless Discipline | buy max (20) | max stamina |
| 9 | Blessed | buy max (20) | your heals hit harder — everything you cast heals you |
| 10 | Quick Recovery | buy max (20) | healing received |
| 11 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 12 | Elemental Aegis | buy max | −elemental damage |
| 13 | Preparation | buy max | −damage, always on |
| 14 | **War Mage** *or* **Mighty** | buy max (30) | **+100 Weapon and Spell Damage.** War Mage covers **Magical** damage (Magic/Flame/Frost/Shock); Mighty covers **Martial** (Physical/Poison/Disease/Bleed). Take the one matching your damage type — check tooltips, not the resource pool. **Both DKs are Flame → War Mage.** |
| 15 | **Flawless Ritual** *or* **Battle Mastery** | buy max (40) | +30% per stage chance to apply a status effect — Flawless Ritual for **Magical**, Battle Mastery for **Martial**. Pair it with whichever you took above |
| 16 | **Reaving Blows** | buy (50), swap option | heals off direct damage — stacks with Pale Order *and* Siphoning Attacks for absurd solo healing |
| 17 | Thaumaturge | buy (50), swap option | in for Wrathful Strikes on DoT/AoE-heavy fights (Endless Hail, Barbed Trap, bleeds) |
| 18 | Ironclad / Duelist's Rebuff | buy (50), swap options | mitigation swaps for specific hard hitters |

*Everything above the swap-option rows is the 1200 budget; the swap rows come online later.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Rejuvenation · Expert Evasion — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | **Rejuvenation** | **SLOT** (50) | recovery — kept slotted for *you specifically*: unlike your DK (Soul of Flame solved sustain), your history says keep a recovery star even though Siphoning Attacks does the heavy lifting |
| 4 | Hero's Vigor | buy max | max health |
| 5 | Tumbling | buy max | cheaper dodge rolls |
| 6 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 7 | **Expert Evasion** | **SLOT** (50) | cheaper, stronger dodge rolls — your melee panic button |
| 8 | Defiance | buy max | mitigation |
| 9 | Mystic Tenacity | buy max | less stun/fear time |
| 10 | **Tireless Guardian** | buy max (20) | Block costs **20 less Stamina per stage — up to 400 less per block.** The best single answer to a melee build bleeding Stamina on defence |
| 11 | **Fortification** | buy max (30) | +2% damage blocked per stage. **Savage Defense** (−45 Stamina per stage off Bash, max 30) is the third of this cluster if you bash often |
| 12 | Bloody Renewal | buy (50), swap option | resources on kills — add-heavy farming |
| 13 | Siphoning Spells | buy (50), swap option | extra magicka return if a fight out-drains Siphoning Attacks |
| 14 | Bracing Anchor | buy (50), swap option | block-heavy fights (in for Expert Evasion) |
| 15 | Pain's Refuge + Bastion | buy (50), swap options | the PvP defensive pair |

*Everything above the swap-option rows is the 1200 budget; the swap rows come online later.*

### 🟢 GREEN (Craft)

**Slot:** Steed's Blessing.

| # | Star | Action |
|---|---|---|
| 1 | **Steed's Blessing** | **SLOT** (50) — out-of-combat speed |
| 2 | Treasure Hunter | buy (needs ~35 connector points) — better chest loot (your survey/chest routes) |
| 3 | Gilded Fingers | buy — more gold |
| 4 | Liquid Efficiency | buy — potions sometimes not consumed |
| 5 | Meticulous Disassembly | buy — better refining/harvest returns |
| 6 | Anything else | taste — nothing here affects combat |

---

## 6. SHOPPING LIST (in priority order)

1. **Craft Order's Wrath; buy Deadly Strike from a guild trader** — you own both; this is the whole body/weapon/jewelry setup. Do this first, you can wear it tonight.
2. **Slimecraw helm** — overland monster set (1pc).
3. **Keep:** Ring of the Pale Order.
4. **Scribing** (you have it) → Ulfsild's Contingency for the back-bar slot.
5. **Cruel Flurry daggers** — Maelstrom Arena, the real front-bar weapon upgrade when you want to push parse (*confirm the arena-weapon name in-game*).
6. **Tide-Born Wildstalker or Ansuul's Torment** — only if you decide to chase the last few % of damage; Order's Wrath is fine to keep forever.

---

*Sources: Hyperioxes U50 Solo Stamina Nightblade build (verified vs the live page, August 2026). Class Mastery names verified vs ESO-Hub / Alcast U50 lists. Group and PvP sections are directional adaptations — point to the live Hyperioxes group build and current Alcast PvP page respectively before committing gold. Skill names current as of Update 50; ZOS renames Nightblade abilities every class refresh, so trust your in-game tooltips over any guide. Skill tooltips (Grim Focus, Killer's Blade, Siphoning Strikes morphs, Shadowy Disguise, Veiled Strike's skill line, Pressure Points) and the full Class Mastery list re-verified against current ESO-Hub tooltips 2026-08-18. Revision: 2026-08-18.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order (they cast top-to-bottom as cooldowns finish): Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you — worth more than any companion heal, since Pale Order + Siphoning Attacks already keep you topped — and her Penetrating Strikes supports your light-attack weaving.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that can free a bar slot. **Azandar (Tank)** brings Major and Minor Vulnerability, best-rated for Infinite Archive.

**Craft Telvanni Efficiency** and wear it when the companion is carrying (halves their ability cooldowns); swap back to your damage set when you're the one doing the work.

Full details for all eight companions, including farming perks and gear traits: see `../shared/companions.md`.
