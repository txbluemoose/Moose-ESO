# Pure Necromancer Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Magicka Necromancer, pure class (no subclass), Class Mastery active
**Verified against:** the current U50 Hyperioxes Magicka Necromancer Solo build (soloed vet HM Bloodroot Forge / vet Dread Cellar, ~65k on the 6M dummy), cross-checked against Alcast's U50 Solo MagCro and ESO-Hub skill pages
**Philosophy:** Kick ass and don't die. On a Necromancer that means leaning *hard* into the class's built-in survivability — Spirit Guardian eats 10% of every hit and heals you, Resistant Flesh is an on-demand burst heal, and Ring of the Pale Order turns your corpse-explosion damage back into health. Damage is the byproduct; staying up is the plan.
**Weapon note:** the main build is **melee — dual daggers front bar, Ice staff back bar, medium-lean armor**. It's how you actually play: up close, all content, survivability first. Necromancer is a summoner by flavor (you'll have a skeleton and a ghost out at all times), but the strongest solo setup still fights in melee range, because the **Corpseburster** set explodes corpses in a 5m circle around *you*. Prefer to fight from range, or prefer stamina? See the note at the end of Section 1 — a **Stamina Necromancer** sibling exists and parses within noise.

> **Confidence key:** The Solo PvE section is fully verified against the current U50 Hyperioxes solo MagCro. The Class Mastery picks are the new U50 system — the passive *names* are verified against Alcast/ESO-Hub, but confirm the exact numbers and that both slot together on your bar in-game. The Group and PvP sections are directional adaptations — verify bars against the live source before a progression run. Skill names are current as of Update 50; the Necromancer corpse system was adjusted this patch, so trust your in-game tooltips over any guide.

---

## 0. Class Mastery (pick 2 — stay pure class)

Subclassing disables this entire system — stay pure class. Each mastery upgrades the *rank-2* version of an existing class passive, so these only work if you've bought those passives (you will — see the passives section).

| Pick | Mastery | Keys off | What it does for you |
|---|---|---|---|
| **Main 1** | **Nothing Wasted** | Corpse Consumption (*Bone Tyrant*) | Every corpse you consume stacks **+2% Max Health and +2% Weapon/Spell Damage**, up to 10 stacks. Your whole loop is consuming corpses, so this is free damage *and* free health — the single best pick for a "don't die" corpse build. |
| **Main 2** | **Cycle Unending** | Reusable Parts (*Bone Tyrant*) | **+1% damage done for every 1% Health you have above your target.** Your survivability engine keeps you topped off, so this is a damage star the tanky playstyle *pays for itself*. |
| **Survival swap** | **Pound of Flesh** | (defensive mastery) | Chance on taking damage to heal ~2745 and restore missing Stamina. Trade Cycle Unending → Pound of Flesh for the nastiest one-shot fights, or if the DK-style stamina gap ever bites you here. |

*Verify in-game that Nothing Wasted and Cycle Unending both slot at once (they key off different base passives, so they should). Numbers from Alcast/ESO-Hub U50 Class Mastery lists — tooltips override.*

---

## 1. SOLO PvE — Skills (delves, world bosses, vet dungeon soloing, arenas)

This is your bread and butter. The damage engine is the **Corpseburster** set: every corpse you consume detonates for big Disease damage around you, and it hits harder for each Grave Lord ability slotted. So the front bar is **all Grave Lord** — you generate corpses and immediately eat them, over and over, and Pale Order heals you off every explosion.

### Skills — Base Setup

| Front Bar (Dual Daggers*) | Back Bar (Ice Staff) |
|---|---|
| 1. Ricochet Skull (morph of Flame Skull, *Grave Lord*) | 1. Spirit Guardian (morph of Spirit Mender, *Living Death*) |
| 2. Blighted Blastbones (morph of Blastbones, *Grave Lord*) | 2. Resistant Flesh (morph of Render Flesh, *Living Death*) |
| 3. Detonating Siphon (morph of Shocking Siphon, *Grave Lord*) | 3. Elemental Susceptibility (morph of Weakness to Elements, *Destruction Staff*) |
| 4. Avid Boneyard (morph of Boneyard, *Grave Lord*) | 4. Elemental Blockade (morph of Wall of Elements, *Destruction Staff*) |
| 5. Skeletal Archer (morph of Skeletal Mage, *Grave Lord*) | 5. Ulfsild's Contingency (scribed grimoire, *Soul Magic*; scripts: Frost / Lingering Torment / Resolve) — the flex slot; see the swaps below for non-scribed options ⚠️ confirm vs the live build in-game |
| **Ult:** Glacial Colossus (morph of Frozen Colossus, *Grave Lord*) | **Ult:** Ravenous Goliath (morph of Bone Goliath Transformation, *Bone Tyrant*) — survivability transform, heals you per enemy hit; a *different* base skill than Colossus, so it can sit here without conflicting *(confirm morph in-game)* |

*\*Dual daggers are the household default and the up-close playstyle you run — and they suit this build, because Corpseburster's corpse explosions go off around you in a 5m circle. Dagger enchants: main-hand **Poison**, off-hand **Absorb Magicka** (or Absorb Stamina if you're feeling the old DK sustain gap). Ice back bar is correct — Ice Blockade + Elemental Susceptibility's Chilled procs apply Minor Brittle, and the back bar is where your two survivability heals live. Note on ultimates: you can't run both Colossus morphs at once (they're the same base skill), so the front bar carries Glacial Colossus — your AoE stun + Major Vulnerability button — and the back bar carries a different-line ultimate (Ravenous Goliath) as the "survive this" transform.*

**What each does (and why it's here for your "don't die" goal):**
- **Spirit Guardian** — the cornerstone. A summoned ghost transfers **10% of all incoming damage** to itself and heals you on a timer. Keep it up 100% of the time; it's the closest thing this game has to a passive 10% damage reduction with a heal stapled on.
- **Resistant Flesh** — on-demand burst heal that *also* grants you Major Resolve (armor). It lives on the back bar next to Spirit Guardian — bar-swap and press it the instant your health dips.
- **Blighted Blastbones** — your skeleton. Runs at the target, explodes for Disease damage, applies **Major Defile** (cuts their healing), and **leaves a corpse** — the fuel for everything else.
- **Detonating Siphon** — consumes a corpse to lay a damage tether, gives you **Major Savagery/Prophecy** (crit), and **+3% damage while slotted**. With the Corpseburster set this is effectively your hardest-hitting button whenever a corpse is up.
- **Avid Boneyard** — AoE ground DoT that consumes a corpse for +30% damage, applies Minor Vulnerability, and spawns the **Grave Robber synergy** you can activate yourself for a chunk of damage *and* a heal. Another layer in the heal stack.
- **Ricochet Skull** — your cheap spammable and a corpse generator (every third cast makes a corpse). It's the weakest single button in U50, but its job here is corpse fuel and filler, not raw parse.
- **Skeletal Archer** — a second pet that ticks free damage and, on death, leaves *another* corpse. Fits the summoner fantasy and feeds the machine.
- **Glacial Colossus** — big AoE ultimate that stuns and applies **Major Vulnerability** (enemies take +10% damage). Your "delete the room / survive this" button.

### Situational swaps (with skill line sources)
- **Empowering Grasp / Ghostly Embrace** — *Necromancer > Bone Tyrant* — pull/immobilize for trash packs; stacks adds into your Corpseburster circle
- **Bone Armor / Beckoning Armor** — *Necromancer > Bone Tyrant* — Major Resolve + a taunt-adjacent tool; slot when a fight punishes you for being in melee
- **Ulfsild's Contingency** (scribed grimoire, *Soul Magic*; scripts: Frost / Lingering Torment / Resolve) — you have scribing, so this is a legit 5th back-bar slot for a DoT + damage reduction. It is **not** Grave Lord, so it does *not* boost Corpseburster — only slot it on the back bar, never the front
- **Braided Tether** (morph of Restoring Tether, *Necromancer > Living Death*) — a heal-over-time tether if you ever duo with your wife and want to top her off
- **Resolving Vigor** — *Alliance War > Assault* — a stamina-based burst heal for invulnerability phases where Pale Order can't tick (earn AP in Cyrodiil/BGs)
- **Precognition ult** — *Psijic Order guild line (Summerset)* — mandatory for the handful of solo-impossible stuns

### Rotation (priority sweep — just refresh whatever is highest on this list)
1. **Spirit Guardian** (never let the ghost drop) → 2. **Elemental Susceptibility** → 3. **Elemental Blockade** (back bar) → 4. **Blighted Blastbones** (makes a corpse) → 5. **Detonating Siphon** (eats the corpse — your big hit) → 6. **Avid Boneyard** (eats a corpse, grab the Grave Robber synergy) → 7. **Skeletal Archer** → 8. **Glacial Colossus** when it's up → 9. **Ricochet Skull** as filler between everything → **Resistant Flesh the instant your health dips.**

The whole thing is a sweep, not a script: keep a corpse on the ground, keep the ghost up, and alternate "make a corpse (Blastbones/Skull) → eat a corpse (Siphon/Boneyard)." Pale Order + Spirit Guardian + the Grave Robber synergy mean you're being healed from three independent sources while you do it.

**Pre-buff before pulls:** Spirit Guardian, Skeletal Archer, Elemental Susceptibility, Elemental Blockade. Walk in with the ghost and archer already summoned.

### Prefer range, or prefer stamina? → the Stamina Necromancer sibling
Everything above is magicka. The **[Stamina Necromancer](stamina-necromancer.md)** sibling runs the *identical* corpse engine (Corpseburster, Blastbones, Detonating Siphon, Avid Boneyard, Spirit Guardian) on **dual daggers front / bow back**, and actually parses a hair higher (~69k vs ~65k) — which is noise by this repo's rules. It's just as melee-forward. Pick whichever stat pool your character already has; don't pay to re-roll for a ~5% swing. The Ice back bar (magicka) gives you Elemental Blockade + block utility; the bow back bar (stamina) trades that for Endless Hail and ranged DoT pressure. *Source: Hyperioxes U50 Stamina Necromancer Solo build.*

---

## 2. GEAR — Solo

**Armor weight: 5 Medium / 1 Light / 1 Heavy.** Medium's Dexterity and Agility passives suit the dual-dagger, up-close melee you run, and keep you tankier than an all-light caster. The single Light and single Heavy piece are deliberate: **Undaunted Mettle** grants a stacking bonus (max Health / Magicka / Stamina) for each *distinct* armor weight you wear, so a 5/1/1 split triggers **all three tiers** — free stats for wearing one odd piece each. Put the Light on the belt (the household belt rule — belt is Light on magicka builds) and the Heavy on the chest.

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Medium | Divines | Magicka | Slimecraw (1pc monster — overland, you own it) |
| Shoulders | Medium | Divines | Magicka | Corpseburster |
| Chest | Heavy | Divines | Magicka | Corpseburster |
| Hands | Medium | Divines | Magicka | Corpseburster |
| Belt | Light | Divines | Magicka | Corpseburster |
| Legs | Medium | Divines | Magicka | Corpseburster |
| Boots | Medium | Divines | Magicka | Whorl of the Depths |
| Necklace + Ring 1 | — | Bloodthirsty | Magical Harm | Whorl of the Depths |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Charged | Poison + Absorb Magicka | Whorl of the Depths |
| Back bar (Ice Staff) | — | Infused | Weapon Damage | Crushing Wall **Ice** Staff (Maelstrom) |

*Prefer more health? Shift one Medium piece to Light for a 4 Medium / 2 Light / 1 Heavy split — both splits still trigger all three Undaunted Mettle tiers. In-game tooltips override — confirm on your bar. Slimecraw is a 1pc monster helm (Minor Berserk); Corpseburster is the 5pc corpse-explosion engine.*

**Where it comes from:** Corpseburster = Infinite Archive. Whorl of the Depths = vet Dreadsail Reef / trader (Frost proc that syncs with your Ice bar). Slimecraw = overland (you own it). Crushing Wall = vet Maelstrom Arena. Valkyn Skoria (vet City of Ash II) is the instanced-content upgrade over Slimecraw when you want a proc'ing monster set.

**Fallback ladder (you don't need trial gear):**
- Body: Corpseburster → Aegis Caller (Depths of Malatar) → **Order's Wrath (you own it, craftable, ~−4 to −6%)** → Tzogvin's Warband
- Weapons/jewelry: Whorl of the Depths → **Deadly Strike (you own it, craftable)** — and note this: Deadly Strike boosts **DoTs and channels**, and half your kit (Detonating Siphon tether, Avid Boneyard, Elemental Blockade) *is* DoTs, so Deadly Strike punches above its weight on a Necromancer specifically — it's a better stopgap here than it was on your DK
- Monster: Slimecraw (1pc, own) → Valkyn Skoria (vet CoA II) for instanced content

**Mundus:** The Thief (crit) default → The Lover (penetration) if you're under-penetrated in solo → The Lady (resistances) only for brutal one-shot content
**Attributes:** 64 Magicka default → 32/32 Health/Magicka when struggling → 64 Health for the nastiest fights (Cycle Unending actually *rewards* the extra health with more damage, so this costs you less than it looks)
**Food:** Bewitched Sugar Skulls (tri-stat). **Potions:** Spell Power potions (Lady's Smock + Corn Flower + Namira's Rot) — spell damage, crit, and magicka in one.
**Race note:** Necromancer's own passives + Pale Order carry your survivability, so race is the smallest dial as always. High Elf / Dark Elf are the ~3.5% damage picks; **Argonian** is the standout survivability race here (its potion-boost passive makes your Spell Power pots heal and restore more) if the old stamina/sustain gremlin ever follows you over from the DK. Default answer stays "whatever the character already is."

---

## 3. GROUP CONTENT — adaptation notes

Same character, different job: the group brings the heals, buffs, and debuffs, so you drop self-sufficiency for damage — and Necromancer earns its raid spot by handing the *whole group* a damage buff.

### Key changes from the solo build
- **Drop Ring of the Pale Order** — healers exist; complete your 3rd jewelry piece of the weapon/proc set instead
- **Colossus is now a group buff, not just your panic button** — Glacial/Pestilent Colossus applies **Major Vulnerability** (everyone's damage on that target goes up 10%). Coordinate it with the group's burn phases; a well-timed Colossus is why raids invite a Necro DD
- **Elemental Susceptibility comes off** — group debuffers cover Major Breach; slot more damage or a scribed grimoire (**Ulfsild's Contingency**, scripts Frost / Lingering Torment / Force) in its place
- **Spirit Guardian can stay** — even in a group its 10% transfer + heal is cheap insurance, and it keeps a Grave Lord/Living Death balance; drop it only if you need the slot for a group buff
- **Body set shifts to a group DPS set** — keep Corpseburster if the fight has constant adds/corpses; otherwise a trial two-piece + a shared-uptime set. Point to the live source below rather than guessing a trial parse
- Searing/Resistant Flesh over the survival morphs where the healer has you covered

*Reference: adapt the live Hyperioxes group Necromancer DPS build for exact bars and trial sets before a progression run — group set metas shift with each trial and patch.*

---

## 4. PvP (Cyrodiil & Battlegrounds) — directional

Necromancer PvP wants burst, hard CC, and a bigger health pool than PvE. Your Colossus is a genuine teamfight ultimate (AoE stun + Major Vulnerability), and Spirit Guardian's 10% transfer is quietly excellent under focus fire.

**What carries over:** Spirit Guardian mitigation, Resistant Flesh burst heal, Blighted Blastbones' Major Defile (huge against enemy healers), Colossus for the stun.
**What changes:** heavier armor or 5-1-1, **Impen** on all armor, ~30k+ health, tri-stat/Health enchants; add a corpse-based burst heal and a stun-break-friendly kit. Sets rotate every season — a survival mythic (Gaze of Sithis or Torc of Tonal Constancy) plus a proc/damage body set is the usual frame.

*Season metas rotate — verify current pieces against Alcast's live U50 Necromancer PvP page and your in-game tooltips before spending gold.*

---

## Skill Line Passives — buy these with skill points

Rule of thumb: **buy every passive in every line you have a skill slotted from.** Priorities if you're short:

- **Grave Lord:** all — the whole front bar lives here; **Death Gleaning** (resources when a damaged enemy dies) is the sustain standout, and the corpse passives feed the entire engine — HIGH
- **Bone Tyrant:** all — **Corpse Consumption** and **Reusable Parts** are the rank-2 passives your Class Mastery picks (Nothing Wasted, Cycle Unending) key off, so they're mandatory even though only the Goliath ultimate is slotted — HIGH
- **Living Death:** all — Spirit Guardian and Resistant Flesh live here, and this line's passives are your healing and mitigation
- **Dual Wield:** the flat damage and crit passives (Twin Blade and Blunt is why daggers) — HIGH
- **Destruction Staff:** Tri Focus / Penetrating Magic / Ancient Knowledge for the ice back bar — HIGH
- **Medium Armor:** Dexterity, Agility — your 5-piece weight; plus the Light/Heavy stat passives for the two odd pieces
- **Undaunted:** Undaunted Mettle (the whole reason for the 5/1/1 split) — HIGH
- **Fighters Guild:** Slayer — flat Weapon/Spell Damage, always on — HIGH
- **Alchemy:** Medicinal Use (longer potion buffs) — HIGH
- **Racial:** all

---

## 5. Champion Points — Spend Order (1200 → 1800)

At CP 1200 you have ~400 points per color; at 1800, ~600. **Each table is in the order you actually unlock it** — the tree opens outward from the center, so buy top to bottom and every row is reachable by the time you get to it (connector stars come before the deeper stars they gate). The **`Slot`** line names the active stars for that tree — buy those as soon as the tree lets you reach them, and fill the passives as you path through. Exact node adjacency shifts a little with which stars you pick, so glance at the in-game tree to confirm.

*Necromancer note: unlike your DK, this build is a genuine **half-DoT** kit (Detonating Siphon tether, Avid Boneyard, Elemental Blockade), so **Thaumaturge earns its slot here** — don't copy the DK's "skip Thaumaturge" ruling.*

### 🔵 BLUE (Warfare)

**Slot (4):** Master-at-Arms · Thaumaturge · Fighting Finesse · Wrathful Strikes — the damage slots sit near the center, so they come first.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Master-at-Arms** | **SLOT** (50) | +direct damage — corpse explosions, Blastbones, Skull |
| 2 | **Thaumaturge** | **SLOT** (50) | +DoT damage — the Siphon tether, Boneyard, Blockade |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits (Detonating Siphon feeds you crit rating) |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | Eldritch Insight | buy max (20) | max magicka |
| 8 | Tireless Discipline | buy max (20) | max stamina (helps the old sustain gremlin) |
| 9 | Blessed | buy max (20) | your heals — Resistant Flesh, Grave Robber — hit harder |
| 10 | Quick Recovery | buy max (20) | healing received |
| 11 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 12 | Elemental Aegis | buy max | −elemental damage |
| 13 | Preparation | buy max | −damage, always on |
| 14 | **Reaving Blows** | buy (50), swap option | heals off direct damage — stacks with Pale Order *and* Corpseburster explosions for absurd solo healing |
| 15 | Deadly Aim / Biting Aura | buy (50), swap options | single-target vs AoE tilt for a specific fight |
| 16 | Ironclad | buy (50), swap option | −direct damage; in for a slottable on hard hitters |

*Items 1–13 ≈ your 1200 budget (400/tree). Items 14–16 come online by 1600–1800, swapped per fight with zero regrinding.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Celerity · Expert Evasion — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health (and Cycle Unending turns that health into damage) |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | Hero's Vigor | buy max | max health |
| 4 | Tumbling | buy max | cheaper dodge rolls |
| 5 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 6 | **Celerity** | **SLOT** (50) | movement speed |
| 7 | **Expert Evasion** | **SLOT** (50) | cheaper, stronger dodge rolls |
| 8 | Defiance | buy max | mitigation |
| 9 | Mystic Tenacity | buy max | less stun/fear time |
| 10 | Rejuvenation / Siphoning Spells | buy (50), swap options | recovery if a fight out-drains you — your realistic answer to the stamina gremlin here |
| 11 | Bracing Anchor | buy (50), swap option | block-heavy fights (in for Expert Evasion) |
| 12 | Bloody Renewal | buy (50), swap option | resources on kills — add-heavy fights |
| 13 | Pain's Refuge + Bastion | buy (50), swap options | the PvP defensive pair |

*Items 1–9 ≈ your 1200 budget; 10–13 are fight-specific swaps you fill toward 1800.*

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

1. **Corpseburster** — run Infinite Archive; it's the whole build's damage engine and hits harder for every Grave Lord skill you slot
2. **Crushing Wall Ice staff** — vet Maelstrom Arena (back bar)
3. **Whorl of the Depths** — vet Dreadsail Reef or a guild trader (weapons/jewelry/boots; its Frost proc syncs with your Ice bar)
4. **Valkyn Skoria helm** — vet City of Ash II, the instanced upgrade over Slimecraw
5. Keep: Slimecraw, Ring of the Pale Order, Order's Wrath, **Deadly Strike** (unusually good on Necro DoTs — see the fallback ladder)
6. **Scribing** already unlocked (Gold Road) → Ulfsild's Contingency as your flexible back-bar/group slot

---

*Sources: Hyperioxes U50 Magicka Necromancer Solo build (verified for U50; soloed vet HM Bloodroot Forge / vet Dread Cellar) and U50 Stamina Necromancer Solo build; skill morphs and Class Mastery names cross-checked against Alcast U50 Solo MagCro and ESO-Hub skill/Class-Mastery pages; Corpseburster confirmed as a set (Infinite Archive), not a skill. Class Mastery is the new U50 system — confirm the exact numbers and dual-slot behavior in-game. ZOS renames Necromancer abilities on class refreshes, so your in-game tooltips override any guide. Revised 2026-08-15.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order: Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you — worth more than any companion heal, since Pale Order and Spirit Guardian already blanket you in healing — and her Penetrating Strikes buffs your light-attack weaving between corpse casts.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that can free your Elemental Susceptibility slot for a scribed grimoire. **Azandar (Tank)** brings Major *and* Minor Vulnerability, best-rated for Infinite Archive — which is exactly where you'll be farming Corpseburster.

**Craft Telvanni Efficiency** (5pc crafted) and wear it in a dedicated Armory loadout when the companion is doing real work — it halves their ability cooldowns. Swap back to Corpseburster when you're carrying.

Full details for all eight companions, including farming perks and gear traits: see `shared/companions.md`.
