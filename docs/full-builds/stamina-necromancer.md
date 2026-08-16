# Pure Stamina Necromancer Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Stamina Necromancer, pure class (no subclass), Class Mastery active
**Verified against:** the current U50 Hyperioxes Stamina Necromancer Solo build (soloed vet Dread Cellar on the U50 PTS, ~69k on the 6M dummy), cross-checked against Alcast's U50 Solo StamCro and ESO-Hub skill pages
**Philosophy:** Kick ass and don't die. On a Necromancer that means leaning *hard* into the class's built-in survivability — Spirit Guardian eats 10% of every hit and heals you, Resistant Flesh is an on-demand burst heal, Avid Boneyard's Grave Robber synergy heals you when you press it, and Ring of the Pale Order turns your corpse-explosion damage back into health. That's four independent heal sources layered over one another. Damage is the byproduct; staying up is the plan.
**Weapon note:** this is the **stamina** sibling of the [Magicka Necromancer Master Guide](necromancer.md). It runs the *identical corpse engine* (Corpseburster, Blastbones, Detonating Siphon, Avid Boneyard, Spirit Guardian) on **dual daggers front / bow back** instead of daggers-and-ice-staff, and parses a hair higher (~69k vs ~65k) — noise by this repo's rules. Pick whichever stat pool your character already has; don't pay to re-roll for a ~5% swing. If you'd rather fight with a staff or want the magicka version, that's the [magicka guide](necromancer.md).

> **Confidence key:** The Solo PvE section is verified against the current U50 Hyperioxes solo StamCro. The Class Mastery picks are the U50 system — the passive *names* are verified against Alcast/ESO-Hub, but confirm the exact numbers and that both slot together on your bar in-game. The Group and PvP sections are directional adaptations — verify bars against the live source before a progression run. Skill names are current as of Update 50; the Necromancer corpse system was adjusted this patch, so trust your in-game tooltips over any guide.

---

## 0. Class Mastery (pick 2 — stay pure class)

Subclassing disables this entire system — stay pure class. Each mastery upgrades the *rank-2* version of an existing class passive, so these only work if you've bought those passives (you will — see the passives section). Both key off **Bone Tyrant** passives, which are passive purchases — you don't need a Bone Tyrant skill on your bar for them to fire.

| Pick | Mastery | Keys off | What it does for you |
|---|---|---|---|
| **Main 1** | **Nothing Wasted** | Corpse Consumption (*Bone Tyrant*) | Every corpse you consume stacks **+2% Max Health and +2% Weapon/Spell Damage**, up to 10 stacks. Your whole loop is consuming corpses, so this is free damage *and* free health — the single best pick for a "don't die" corpse build. |
| **Main 2** | **Cycle Unending** | Reusable Parts (*Bone Tyrant*) | **+1% damage done for every 1% Health you have above your target.** Your survivability engine keeps you topped off, so this damage star *pays for itself* on the tanky playstyle. |
| **Survival swap** | **Pound of Flesh** | (defensive mastery) | Chance on taking damage to heal and restore missing **Stamina**. Trade Cycle Unending → Pound of Flesh for the nastiest one-shot fights — and note the Stamina return directly answers the household sustain gremlin if it follows you over from the DK. |

*Verify in-game that Nothing Wasted and Cycle Unending both slot at once (they key off different base passives, so they should). Numbers from Alcast/ESO-Hub U50 Class Mastery lists — tooltips override.*

---

## 1. SOLO PvE — Skills (delves, world bosses, vet dungeon soloing, arenas)

This is your bread and butter. The damage engine is the **Corpseburster** set: every corpse you consume detonates for big Disease damage around you, and it hits harder for each Grave Lord ability slotted. So the front bar is **Grave Lord–heavy** — you generate corpses and immediately eat them, over and over, and Pale Order heals you off every explosion.

### Skills — Base Setup

| Front Bar (Dual Daggers*) | Back Bar (Bow) |
|---|---|
| 1. Venom Skull (morph of Flame Skull, *Grave Lord*) | 1. Spirit Guardian (morph of Spirit Mender, *Living Death*) |
| 2. Blighted Blastbones (morph of Sacrificial Bones, *Grave Lord*) | 2. Resistant Flesh (morph of Render Flesh, *Living Death*) |
| 3. Detonating Siphon (morph of Shocking Siphon, *Grave Lord*) | 3. Skeletal Archer (morph of Skeletal Mage, *Grave Lord*) |
| 4. Avid Boneyard (morph of Boneyard, *Grave Lord*) | 4. Endless Hail (morph of Volley, *Bow*) |
| 5. Deadly Cloak (morph of Blade Cloak, *Dual Wield*) | 5. Ulfsild's Contingency (scribed grimoire, *Soul Magic*; scripts: Frost / Lingering Torment / Resolve) — the flex slot; see the swaps below for non-scribed options ⚠️ confirm vs the live build in-game |
| **Ult:** Pestilent Colossus (morph of Frozen Colossus, *Grave Lord*) | **Ult:** Ravenous Goliath (morph of Bone Goliath Transformation, *Bone Tyrant*) — survivability transform, heals you per enemy hit; a *different* base skill than Colossus, so it can sit here without conflicting *(confirm morph in-game)* |

*\*Dual daggers are the household default and the up-close playstyle you run — and they suit this build, because Corpseburster's corpse explosions go off around you in a 5m circle. Dagger enchants: main-hand **Poison**, off-hand **Absorb Stamina** (that off-hand Absorb Stamina directly helps the old DK sustain gap). The bow back bar is your ranged-DoT and pre-buff slot — Endless Hail is a hard-hitting ground DoT that Deadly Strike boosts, and both survivability heals live back here. Note on ultimates: you can't run both Colossus morphs at once (they're the same base skill), so the front bar carries Pestilent Colossus — your AoE stun + Major Vulnerability button — and the back bar carries a different-line ultimate (Ravenous Goliath) as the "survive this" transform.*

**What each does (and why it's here for your "don't die" goal):**
- **Spirit Guardian** — the cornerstone. A summoned ghost transfers **10% of all incoming damage** to itself and heals you on a timer. Keep it up 100% of the time; it's the closest thing this game has to a passive 10% damage reduction with a heal stapled on.
- **Resistant Flesh** — on-demand burst heal that *also* grants you Major Resolve (armor). It lives on the back bar next to Spirit Guardian — bar-swap and press it the instant your health dips.
- **Blighted Blastbones** — your skeleton (the stamina-cost morph; the old "Stalking" morph no longer exists post-U41). Charges the target, explodes for big single-target disease damage, applies **Major Defile** (cuts their healing), and **leaves a corpse** — the fuel for everything else. Recast it on every cooldown; it's a pseudo-spammable as much as a summon.
- **Detonating Siphon** — consumes a corpse to lay a damage tether, gives you **Major Savagery/Prophecy** (crit), and the corpse **explodes when the tether ends**. With the Corpseburster set this is effectively your hardest-hitting button whenever a corpse is up.
- **Avid Boneyard** — AoE ground DoT that consumes a corpse for +30% damage, applies Minor Vulnerability, and spawns the **Grave Robber synergy you can activate yourself** for a chunk of damage *and* a heal. This is the Necromancer heal source that magicka gets from its ice-staff utility — on stamina it lives right here, so keep it slotted.
- **Venom Skull** — your cheap Poison spammable and a corpse generator (every third cast makes a corpse). It's the weakest single button in U50, but its job here is corpse fuel and filler, not raw parse.
- **Deadly Cloak** — a spinning AoE DoT that *also* reduces the AoE damage you take. Pure "kick ass and not die": it feeds Corpseburster, Deadly Strike boosts it, and the mitigation is exactly what a melee character standing in the pile wants. (Swap to Skeletal Archer here if you'd rather run a second pet on the front bar — see swaps.)
- **Skeletal Archer** — a second pet that ticks free damage, hands you **extra Physical Penetration and Stamina Recovery** while slotted, and on death leaves *another* corpse. On this build it earns its slot for the sustain and pen alone.
- **Pestilent Colossus** — big AoE ultimate that stuns and applies **Major Vulnerability** (enemies take +10% damage). Your "delete the room / survive this" button — and a genuine group buff (see Section 3).

### Situational swaps (with skill line sources)
- **Unnerving Boneyard** (morph of Boneyard, *Grave Lord*) — the other Boneyard morph. It applies **Major Breach** (penetration) instead of letting you self-activate the synergy. Stamina has no Elemental Susceptibility (that's a staff skill on the magicka sibling), so if you want a class-based Major Breach source, swap Avid → Unnerving — but you give up the self-heal synergy, so the household default stays Avid Boneyard + a **Crusher** enchant / Lover Mundus / Piercing CP for penetration
- **Barbed Trap** (morph of Trap Beast, *Fighters Guild*) — a bow-bar DoT that grants **Minor Force** (+10% crit damage) while slotted; drop it in for Endless Hail on single-target fights
- **Rending Slashes** (morph of Twin Slashes, *Dual Wield*) — a bleed DoT if you want another Deadly-Strike-boosted tick on the front bar
- **Empowering Grasp / Ghostly Embrace** (*Necromancer > Bone Tyrant*) — pull/immobilize for trash packs; stacks adds into your Corpseburster circle
- **Ulfsild's Contingency** (scribed grimoire, *Soul Magic*; scripts: Frost / Lingering Torment / Resolve) — you have scribing, so this is a legit 5th back-bar slot for a DoT + damage reduction. It is **not** Grave Lord, so it does *not* boost Corpseburster — only slot it on the back bar, never the front
- **Resolving Vigor** (*Alliance War > Assault*) — a stamina burst heal for invulnerability phases where Pale Order can't tick (earn AP in Cyrodiil/BGs)
- **Precognition ult** (*Psijic Order guild line, Summerset*) — mandatory for the handful of solo-impossible stuns

### Rotation (priority sweep — just refresh whatever is highest on this list)
1. **Spirit Guardian** (never let the ghost drop) → 2. **Skeletal Archer** (keep the pet up for pen + sustain) → 3. **Endless Hail** (back bar) → 4. **Blighted Blastbones** (makes a corpse) → 5. **Detonating Siphon** (eats the corpse — your big hit) → 6. **Avid Boneyard** (eats a corpse, grab the Grave Robber synergy) → 7. **Deadly Cloak** → 8. **Pestilent Colossus** when it's up → 9. **Venom Skull** as filler between everything → **Resistant Flesh the instant your health dips.**

The whole thing is a sweep, not a script: keep a corpse on the ground, keep the ghost up, and alternate "make a corpse (Blastbones/Skull) → eat a corpse (Siphon/Boneyard)." Pale Order + Spirit Guardian + the Grave Robber synergy mean you're being healed from three independent sources while you do it.

**Pre-buff before pulls:** Spirit Guardian, Skeletal Archer, Endless Hail, Deadly Cloak. Walk in with the ghost and archer already summoned.

---

## 2. GEAR — Solo

**Armor weight: 5 Medium / 1 Light / 1 Heavy.** Medium's Dexterity and Agility passives suit the dual-dagger, up-close melee you run and feed the stamina pool this build lives on. The single Light and single Heavy piece are deliberate: **Undaunted Mettle** grants a stacking bonus (max Health / Magicka / Stamina) for each *distinct* armor weight you wear, so a 5/1/1 split triggers **all three tiers** — free stats for wearing one odd piece each.

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Light | Divines | Stamina | Slimecraw **(1pc monster — 657 Crit Chance)** — overland, you own it |
| Shoulders | Medium | Divines | Stamina | Corpseburster |
| Chest | Heavy | Divines | Stamina | Corpseburster |
| Hands | Medium | Divines | Stamina | Corpseburster |
| Belt | Medium | Divines | Stamina | Corpseburster |
| Legs | Medium | Divines | Stamina | Corpseburster |
| Boots | Medium | Divines | Stamina | Deadly Strike |
| Necklace + Ring 1 | — | Bloodthirsty | Weapon Damage | Deadly Strike |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Nirnhoned / Charged | Poison + Absorb Stamina | Deadly Strike |
| Back bar (Bow) | — | Infused | Weapon Damage | Perfected Maelstrom Bow (vMA) — its bonus boosts your bow DoT *(confirm the exact line in-game)* |

*Prefer more health? Shift one Medium piece to Light for a 4 Medium / 2 Light / 1 Heavy split — both splits still trigger all three Undaunted Mettle tiers. In-game tooltips override — confirm on your bar. Slimecraw is a 1pc monster helm (657 Critical Chance); Corpseburster is the 5pc corpse-explosion engine. **Deadly Strike is the household weapon/jewelry pick here on purpose** — it boosts DoTs and channels 15%, and half your kit (Detonating Siphon tether, Avid Boneyard, Deadly Cloak, Endless Hail) *is* DoTs, so it punches well above its weight on a Necromancer specifically. It's also already owned (cheap from guild traders — it's a Cyrodiil set, not craftable), so this is buildable today.*

*Why only one monster piece: Ring of the Pale Order takes the mythic slot, and 12 gear slots only stretch to 5 + 5 + 1 monster + 1 mythic. So the helm is a **pure stat line** — Slimecraw's 2-piece Minor Berserk can never fire here. Slimecraw's 657 Critical Chance is the default because you already own it; if your Offensive Penetration is under the 18,200 cap, a penetration helm (Valkyn Skoria's 1-piece is 1,487 Offensive Penetration) is the better stat. Check your character sheet. See [Gear slot math](../shared/gear-math.md).*

**Where it comes from:** Corpseburster = Infinite Archive. Deadly Strike = guild traders / Cyrodiil vendors (you own it). Slimecraw = overland (you own it). Perfected Maelstrom Bow = vet Maelstrom Arena. Valkyn Skoria (vet City of Ash II) is the alternative helm when you want its 1pc penetration instead of Slimecraw's crit chance — note its meteor proc is a 2-piece bonus and can't fire alongside the Pale Order mythic.

**Fallback ladder (you don't need trial gear):**
- Body: Corpseburster → **Order's Wrath (you own it, craftable, ~−4 to −6%)** → Ansuul's Torment / Tzogvin's Warband (trial/dungeon options — see the live source before farming a trial)
- Weapons/jewelry: keep **Deadly Strike** — on a Necro DoT kit it's already near the top; a plain Maelstrom Bow (non-perfected) covers the back-bar slot until you clear vMA on vet
- Monster: Slimecraw 1pc (657 Crit Chance, own) → Valkyn Skoria 1pc (1,487 Offensive Penetration) if you're under the pen cap. Only the 1pc bonus ever applies.

**Mundus:** The Thief (crit) default → The Lover (penetration) if you're under-penetrated in solo (and running Avid Boneyard rather than Unnerving) → The Lady (resistances) only for brutal one-shot content
**Attributes:** 64 Stamina default → 32/32 Health/Stamina when struggling → 64 Health for the nastiest fights (Cycle Unending actually *rewards* the extra health with more damage, so this costs you less than it looks)
**Food:** Bewitched Sugar Skulls (tri-stat) — or Artaeum Takeaway Broth (max Stamina + Health + Stamina recovery) if the old sustain gremlin bites here
**Potions:** Weapon Power potions (Blessed Thistle + Dragonthorn + Wormwood) — weapon damage, crit, and stamina in one.
**Race note:** Necromancer's own passives + Pale Order carry your survivability, so race is the smallest dial as always. Khajiit / Orc are the ~3.5% damage picks; **Redguard** is the standout if the old stamina-sustain gremlin ever follows you over from the DK (its Adrenaline Rush passive is the only real stamina-sustain racial in the game); **Argonian** is the survivability answer (its potion-boost passive makes your Weapon Power pots heal and restore more). Default answer stays "whatever the character already is."

---

## 3. GROUP CONTENT — adaptation notes

Same character, different job: the group brings the heals, buffs, and debuffs, so you drop self-sufficiency for damage — and Necromancer earns its raid spot by handing the *whole group* a damage buff.

### Key changes from the solo build
- **Drop Ring of the Pale Order** — healers exist; complete your 3rd jewelry piece of the weapon/proc set instead
- **Colossus is now a group buff, not just your panic button** — Pestilent Colossus applies **Major Vulnerability** (everyone's damage on that target goes up 10%). Coordinate it with the group's burn phases; a well-timed Colossus is why raids invite a Necro DD
- **Swap Avid Boneyard → Unnerving Boneyard** if the group needs the Major Breach, or drop Boneyard entirely for a slotted DoT — the group's debuffers usually cover penetration, so this frees a slot
- **Spirit Guardian can stay** — even in a group its 10% transfer + heal is cheap insurance, and it keeps a Grave Lord/Living Death balance; drop it only if you need the slot for a group buff
- **Body set shifts to a group DPS set** — keep Corpseburster if the fight has constant adds/corpses; otherwise a trial two-piece + a shared-uptime set. Point to the live source below rather than guessing a trial parse
- Skeletal Archer stays for the free penetration and the corpse it leaves on death

*Reference: adapt the live Hyperioxes group Necromancer DPS build for exact bars and trial sets before a progression run — group set metas shift with each trial and patch.*

---

## 4. PvP (Cyrodiil & Battlegrounds) — directional

Necromancer PvP wants burst, hard CC, and a bigger health pool than PvE. Your Colossus is a genuine teamfight ultimate (AoE stun + Major Vulnerability), and Spirit Guardian's 10% transfer is quietly excellent under focus fire.

**What carries over:** Spirit Guardian mitigation, Resistant Flesh burst heal, Blighted Blastbones' Major Defile (huge against enemy healers), Colossus for the burst (take the **Glacial** morph if you want its stun — Pestilent doesn't stun).
**What changes:** heavier armor or 5-1-1, **Impen** on all armor, ~30k+ health, tri-stat/Health enchants; add a corpse-based burst heal and a stun-break-friendly kit. Sets rotate every season — a survival mythic (Gaze of Sithis or Torc of Tonal Constancy) plus a proc/damage body set is the usual frame.

*Season metas rotate — verify current pieces against Alcast's live U50 Stamina Necromancer PvP page and your in-game tooltips before spending gold.*

---

## Skill Line Passives — buy these with skill points

Rule of thumb: **buy every passive in every line you have a skill slotted from.** Priorities if you're short:

- **Grave Lord:** all — most of the kit lives here; **Death Gleaning** (resources when a damaged enemy dies) is the sustain standout (it feeds the stamina pool directly), and the corpse passives feed the entire engine — HIGH
- **Bone Tyrant:** all — **Corpse Consumption** and **Reusable Parts** are the rank-2 passives your Class Mastery picks (Nothing Wasted, Cycle Unending) key off, so they're mandatory even though only the Goliath ultimate is slotted — HIGH
- **Living Death:** all — Spirit Guardian and Resistant Flesh live here, and this line's passives are your healing and mitigation
- **Dual Wield:** the flat damage and crit passives (Twin Blade and Blunt is why daggers), plus Deadly Cloak lives here — HIGH
- **Bow:** Hawk Eye, Ranger, Accuracy, Long Shots — they boost Endless Hail and everything cast off the back bar — HIGH
- **Medium Armor:** Dexterity, Agility, Wind Walker (stamina sustain) — your 5-piece weight; plus the Light/Heavy stat passives for the two odd pieces
- **Undaunted:** Undaunted Mettle (the whole reason for the 5/1/1 split) — HIGH
- **Fighters Guild:** Slayer — flat Weapon/Spell Damage, always on — HIGH
- **Alchemy:** Medicinal Use (longer potion buffs) — HIGH
- **Racial:** all

---

## 5. Champion Points — Spend Order (1200 → 1800)

At CP 1200 you have ~400 points per color; at 1800, ~600. **Each table is in the order you actually unlock it** — the tree opens outward from the center, so buy top to bottom and every row is reachable by the time you get to it (connector stars come before the deeper stars they gate). The **`Slot`** line names the 4 active stars for that tree — buy those as soon as the tree lets you reach them, and fill the passives as you path through. Exact node adjacency shifts a little with which stars you pick, so glance at the in-game tree to confirm.

*Necromancer note: unlike your DK, this build is a genuine **half-DoT** kit (Detonating Siphon tether, Avid Boneyard, Deadly Cloak, Endless Hail), so **Thaumaturge earns its slot here** — don't copy the DK's "skip Thaumaturge" ruling.*

### 🔵 BLUE (Warfare)

**Slot (4):** Master-at-Arms · Thaumaturge · Fighting Finesse · Wrathful Strikes — the damage slots sit near the center, so they come first.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Master-at-Arms** | **SLOT** (50) | +direct damage — corpse explosions, Blastbones, Skull |
| 2 | **Thaumaturge** | **SLOT** (50) | +DoT damage — the Siphon tether, Boneyard, Deadly Cloak, Endless Hail |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits (Detonating Siphon feeds you crit rating) |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration (your realistic solo pen with Avid Boneyard slotted) |
| 7 | Tireless Discipline | buy max (20) | max stamina — your primary pool, helps the old sustain gremlin |
| 8 | Eldritch Insight | buy max (20) | max magicka (a few class skills still cost it) |
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
| 12 | Bloody Renewal | buy (50), swap option | stamina on kills — add-heavy fights, and another sustain lever |
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
2. **Perfected Maelstrom Bow** — vet Maelstrom Arena (back bar)
3. **Deadly Strike** — craft it (you own it); front-bar daggers + jewelry + boots (the back-bar weapon is the Maelstrom bow), unusually strong on this DoT kit
4. **Valkyn Skoria helm** — vet City of Ash II, only if your character sheet says you need its 1pc penetration over Slimecraw's crit chance
5. Keep: Slimecraw, Ring of the Pale Order, Order's Wrath (body fallback)
6. **Scribing** already unlocked (Gold Road) → Ulfsild's Contingency as your flexible back-bar/group slot

---

*Sources: Hyperioxes U50 Stamina Necromancer Solo build (verified for U50; soloed vet Dread Cellar, ~69k on the 6M dummy); skill morphs and Class Mastery names cross-checked against Alcast U50 Solo StamCro and ESO-Hub skill/Class-Mastery pages; Corpseburster confirmed as a set (Infinite Archive), not a skill. Class Mastery is the U50 system — confirm the exact numbers and dual-slot behavior in-game. ZOS renames Necromancer abilities on class refreshes, so your in-game tooltips override any guide. Revised 2026-08-16.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order: Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you — worth more than any companion heal, since Pale Order and Spirit Guardian already blanket you in healing — and her Penetrating Strikes buffs your light-attack weaving between corpse casts.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that lets you keep Avid Boneyard (self-heal synergy) without ever needing the Unnerving Boneyard swap. **Azandar (Tank)** brings Major *and* Minor Vulnerability, best-rated for Infinite Archive — which is exactly where you'll be farming Corpseburster.

**Craft Telvanni Efficiency** (5pc crafted) and wear it in a dedicated Armory loadout when the companion is doing real work — it halves their ability cooldowns. Swap back to Corpseburster when you're carrying.

Full details for all eight companions, including farming perks and gear traits: see `../shared/companions.md`.
