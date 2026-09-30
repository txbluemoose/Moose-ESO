# Pure Stamina Necromancer Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Stamina Necromancer, pure class (no subclass), Class Mastery active
**Verified against:** the current U50 Hyperioxes Stamina Necromancer Solo build (soloed vet Dread Cellar on the U50 PTS, ~69k on the 6M dummy), cross-checked against Alcast's U50 Solo StamCro and ESO-Hub skill pages
**Philosophy:** Kick ass and don't die. On a Necromancer that means leaning *hard* into the class's built-in survivability — Spirit Guardian eats 10% of every hit and heals you, Resistant Flesh is an on-demand burst heal, Avid Boneyard's Grave Robber synergy heals you when you press it, and Ring of the Pale Order turns your corpse-explosion damage back into health. That's four independent heal sources layered over one another. Damage is the byproduct; staying up is the plan.
**Weapon note:** this is the **stamina** sibling of the [Magicka Necromancer Master Guide](necromancer.md). It runs the *identical corpse engine* (Corpseburster, Blastbones, Detonating Siphon, Avid Boneyard, Spirit Guardian) on **dual daggers front / bow back** instead of daggers-and-ice-staff — note the bow bar is **our** choice, not the source's (see the divergence callout in Section 1) — and parses a hair higher (~69k vs ~65k) — noise by this repo's rules. Pick whichever stat pool your character already has; don't pay to re-roll for a ~5% swing. If you'd rather fight with a staff or want the magicka version, that's the [magicka guide](necromancer.md).

> **Confidence key:** The Solo PvE section is verified against the current U50 Hyperioxes solo StamCro. The Class Mastery picks are the U50 system — the passive *names* are verified against Alcast/ESO-Hub, but confirm the exact numbers and that both slot together on your bar in-game. The Group and PvP sections are directional adaptations — verify bars against the live source before a progression run. Skill names are current as of Update 50. **Necromancer has *not* been reworked** — U50 shipped Class Mastery, the Werewolf overhaul, Challenge Difficulty and PvP Veterancy, and the class-refresh order runs DK → Warden → Sorcerer → Templar → Nightblade → Necromancer → Arcanist, of which only the DK has happened. The corpse system is the one you already know; trust in-game tooltips over any guide regardless.

---

## 0. Class Mastery (pick 2 — stay pure class)

Subclassing disables this entire system — stay pure class. Each mastery upgrades the *rank-2* version of an existing class passive, so these only work if you've bought those passives (you will — see the passives section). Both key off **Bone Tyrant** passives, which are passive purchases — you don't need a Bone Tyrant skill on your bar for them to fire.

| Pick | Mastery | Keys off | What it does for you |
|---|---|---|---|
| **Main 1** | **Nothing Wasted** | Corpse Consumption (*Bone Tyrant*) | Every corpse you consume stacks **+2% Max Health and +2% Weapon/Spell Damage**, up to 10 stacks. Your whole loop is consuming corpses, so this is free damage *and* free health — the single best pick for a "don't die" corpse build. |
| **Main 2** | **Cycle Unending** | Reusable Parts (*Bone Tyrant*) | **+1% damage done for every 1% Health you have above your target — capped at +25% (12% against players).** Your survivability engine keeps you topped off, so this damage star *pays for itself* on the tanky playstyle; the cap arrives fast on a low-health target, so don't read it as unlimited scaling. |
| **Survival swap** | **Pound of Flesh** | (defensive mastery) | Chance on taking damage to heal and restore missing **Stamina**. Trade Cycle Unending → Pound of Flesh for the nastiest one-shot fights — and note the Stamina return directly answers the household sustain gremlin if it follows you over from the DK. |

*Verify in-game that Nothing Wasted and Cycle Unending both slot at once (they key off different base passives, so they should). Numbers from Alcast/ESO-Hub U50 Class Mastery lists — tooltips override.*

---

## 1. SOLO PvE — Skills (delves, world bosses, vet dungeon soloing, arenas)

This is your bread and butter. The damage engine is the **Corpseburster** set: every corpse you consume detonates **where the corpse is**, hitting everything within 5m *of it*, and the blast grows **+10% for each Grave Lord ability you have slotted** — the **Colossus ultimate counts**, so the front bar below is carrying five of them. You generate corpses and immediately eat them, over and over, and Pale Order heals you off every explosion.

### Skills — Base Setup

| Front Bar (Dual Daggers*) | Back Bar (Bow) |
|---|---|
| 1. Venom Skull (morph of Flame Skull, *Grave Lord*) | 1. Spirit Guardian (morph of Spirit Mender, *Living Death*) |
| 2. Blighted Blastbones (morph of Sacrificial Bones, *Grave Lord*) | 2. Resistant Flesh (morph of Render Flesh, *Living Death*) |
| 3. Detonating Siphon (morph of Shocking Siphon, *Grave Lord*) | 3. Skeletal Archer (morph of Skeletal Mage, *Grave Lord*) |
| 4. Avid Boneyard (morph of Boneyard, *Grave Lord*) | 4. Endless Hail (morph of Volley, *Bow*) |
| 5. Deadly Cloak (morph of Blade Cloak, *Dual Wield*) | 5. Ulfsild's Contingency (scribed grimoire, *Soul Magic*; scripts: Frost / Lingering Torment / Resolve) — the flex slot; see the swaps below for non-scribed options ⚠️ confirm vs the live build in-game |
| **Ult:** Pestilent Colossus (morph of Frozen Colossus, *Grave Lord*) | **Ult:** Ravenous Goliath (morph of Bone Goliath Transformation, *Bone Tyrant*) — survivability transform, heals you per enemy hit; a *different* base skill than Colossus, so it can sit here without conflicting *(confirm morph in-game)* |

*\*Dual daggers are the household default and the up-close playstyle you run — and being in the pack keeps you standing next to the corpses your explosions are centred on (the blast is 5m around the **corpse**, out where the enemy died, not around you). Dagger enchants: main-hand **Poison**, off-hand **Absorb Stamina** (that off-hand Absorb Stamina directly helps the old DK sustain gap). The bow back bar is your ranged-DoT and pre-buff slot — Endless Hail is a hard-hitting ground DoT that Deadly Strike boosts, and both survivability heals live back here. Note on ultimates: you can't run both Colossus morphs at once (they're the same base skill), so the front bar carries Pestilent Colossus — your AoE stun + Major Vulnerability button — and the back bar carries a different-line ultimate (Ravenous Goliath) as the "survive this" transform.*

> **Where this diverges from the live build — read before you farm anything.** The cited U50 solo StamCro runs **dual wield front / inferno staff back**, keeps **Elemental Susceptibility** on that staff bar (the source calls it *very strong for solo* — it applies Major Breach, −5948 Armor — the source calls it near-free because it *was* free; **U51 gave it a 3,240 Magicka cost**, which on a stamina build is one deliberate press per boss rather than a pre-buff you spam), and gears **Corpseburster + Perfected Sul-Xan's Torment + Slimecraw + Ring of the Pale Order + a Maelstrom inferno staff**. The **bow back bar above is our household adaptation**, not the source's bar: it buys ranged DoT pressure (Endless Hail, which Deadly Strike loves) and a pre-buff bar you can use from range, and it pays for that by giving up Elemental Susceptibility and the Maelstrom inferno staff, which are staff-only. That's a real penetration and damage trade, not a wash. Both bars work — pick deliberately:
>
> - **Bow back bar (this guide's default):** ranged pressure, Endless Hail, no Major Breach from your own bar — cover penetration with the Lover Mundus, a Crusher enchant, Piercing CP, or a companion who debuffs.
> - **Inferno staff back bar (the source's):** slot **Elemental Susceptibility** in place of Endless Hail and run the Maelstrom **inferno staff** (Crushing Wall). More penetration, more single-target damage, less ranged utility.

**What each does (and why it's here for your "don't die" goal):**
- **Spirit Guardian** — the cornerstone. A summoned ghost transfers **10% of all incoming damage** to itself and heals you on a timer. Keep it up 100% of the time; it's the closest thing this game has to a passive 10% damage reduction with a heal stapled on.
- **Resistant Flesh** — on-demand burst heal that *also* grants you Major Resolve (armor). It lives on the back bar next to Spirit Guardian — bar-swap and press it the instant your health dips.
- **Blighted Blastbones** — your skeleton (the stamina-cost morph; the old "Stalking" morph no longer exists post-U41). Charges the target, explodes for big single-target disease damage, applies **Major Defile** (cuts their healing), and **leaves a corpse** — the fuel for everything else. Recast it on every cooldown; it's a pseudo-spammable as much as a summon.
- **Detonating Siphon** — consumes a corpse to lay a damage tether, gives you **Major Savagery** (crit), and the corpse **explodes when the tether ends**. With the Corpseburster set this is effectively your hardest-hitting button whenever a corpse is up.
- **Avid Boneyard** — AoE ground DoT that consumes a corpse for +30% damage, applies Minor Vulnerability, and spawns the **Grave Robber synergy you can activate yourself** for a chunk of damage *and* a heal. This is the Necromancer heal source that magicka gets from its ice-staff utility — on stamina it lives right here, so keep it slotted.
- **Venom Skull** — your cheap Poison spammable and a corpse generator (every third cast makes a corpse). It's the weakest single button in U50, but its job here is corpse fuel and filler, not raw parse.
- **Deadly Cloak** — a spinning AoE DoT that *also* reduces the AoE damage you take. Pure "kick ass and not die": it feeds Corpseburster, Deadly Strike boosts it, and the mitigation is exactly what a melee character standing in the pile wants. (Swap to Skeletal Archer here if you'd rather run a second pet on the front bar — see swaps.)
- **Skeletal Archer** — a second pet that ticks free damage and, on death, leaves *another* corpse. **Verified 2026-09-26:** it grants you **Major Brutality** (+20% Weapon and Spell Damage) for its 20s, hits for 464 Physical every 2s with **each attack 15% stronger than the last**, and **creates a corpse on death while you are in combat**. It does **not** grant Physical Penetration or Stamina Recovery — that earlier claim was wrong.
- **Pestilent Colossus** — big AoE ultimate that stuns and applies **Major Vulnerability** (enemies take +10% damage). Your "delete the room / survive this" button — and a genuine group buff (see Section 3).

### Situational swaps (with skill line sources)
- **Unnerving Boneyard** (morph of Boneyard, *Grave Lord*) — the other Boneyard morph. It applies **Major Breach** (penetration) instead of letting you self-activate the synergy. Worth taking if you're running the bow back bar and your penetration is short; on the inferno-staff back bar **Elemental Susceptibility** already supplies Major Breach (it's a Destruction Staff skill — available to any stat pool, stamina included), so keep Avid Boneyard and its self-heal synergy there. Household default stays **Avid Boneyard**
- **Barbed Trap** (morph of Trap Beast, *Fighters Guild*) — a bow-bar DoT that grants **Minor Force** (+10% crit damage) while slotted; drop it in for Endless Hail on single-target fights
- **Rending Slashes** (morph of Twin Slashes, *Dual Wield*) — a bleed DoT if you want another Deadly-Strike-boosted tick on the front bar
- **Empowering Grasp / Ghostly Embrace** (*Necromancer > Bone Tyrant*) — pull/immobilize for trash packs; stacks adds into your Corpseburster circle
- **Ulfsild's Contingency** (scribed grimoire, *Soul Magic*; scripts: Frost / Lingering Torment / Resolve) — you have scribing, so this is a legit 5th back-bar slot for a DoT + damage reduction. It is **not** Grave Lord, so it does *not* boost Corpseburster — only slot it on the back bar, never the front
- **Resolving Vigor** (*Alliance War > Assault*) — a stamina burst heal for invulnerability phases where Pale Order can't tick (earn AP in Cyrodiil/BGs)
- **Precognition ult** (*Psijic Order guild line, Summerset*) — mandatory for the handful of solo-impossible stuns

### Rotation (priority sweep — just refresh whatever is highest on this list)
1. **Spirit Guardian** (never let the ghost drop) → 2. **Skeletal Archer** (keep the pet up — free damage and a corpse when it dies) → 3. **Endless Hail** (back bar) → 4. **Blighted Blastbones** (makes a corpse) → 5. **Detonating Siphon** (eats the corpse — your big hit) → 6. **Avid Boneyard** (eats a corpse, grab the Grave Robber synergy) → 7. **Deadly Cloak** → 8. **Pestilent Colossus** when it's up → 9. **Venom Skull** as filler between everything → **Resistant Flesh the instant your health dips.**

The whole thing is a sweep, not a script: keep a corpse on the ground, keep the ghost up, and alternate "make a corpse (Blastbones/Skull) → eat a corpse (Siphon/Boneyard)." Pale Order + Spirit Guardian + the Grave Robber synergy mean you're being healed from three independent sources while you do it.

**Pre-buff before pulls:** Spirit Guardian, Skeletal Archer, Endless Hail, Deadly Cloak. Walk in with the ghost and archer already summoned.

---

## 2. GEAR — Solo

**Armor weight: 5 Medium / 1 Light / 1 Heavy.** Medium's Dexterity and Agility passives suit the dual-dagger, up-close melee you run and feed the stamina pool this build lives on. The single Light and single Heavy piece are deliberate: **Undaunted Mettle** grants a stacking bonus (max Health / Magicka / Stamina) for each *distinct* armor weight you wear, so a 5/1/1 split triggers **all three tiers** — free stats for wearing one odd piece each.

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Light | Divines | Stamina | Slimecraw **(1pc monster — 657 Crit Chance)** — vet Wayrest Sewers I, you own it |
| Shoulders | Medium | Divines | Stamina | Corpseburster |
| Chest | Heavy | Divines | Stamina | Corpseburster |
| Hands | Medium | Divines | Stamina | Corpseburster |
| Belt | Medium | Divines | Stamina | Corpseburster |
| Legs | Medium | Divines | Stamina | Corpseburster |
| Boots | Medium | Divines | Stamina | Deadly Strike |
| Necklace + Ring 1 | — | Bloodthirsty | Weapon Damage | Deadly Strike |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Nirnhoned / Charged | Poison + Absorb Stamina | Deadly Strike |
| Back bar (Bow) | — | Infused | Weapon Damage | Maelstrom Bow — the set is **Thunderous Volley** (vet Maelstrom Arena; the perfected version is the veteran drop). Its bonus buffs **Volley / Endless Hail specifically**, so it's worth nothing if Endless Hail leaves the bar ⚠️ confirm the set name in-game. *The live build's Maelstrom weapon is the **inferno staff** (Crushing Wall), because its back bar is a staff.* |

*Prefer more health? Shift one Medium piece to Light for a 4 Medium / 2 Light / 1 Heavy split — both splits still trigger all three Undaunted Mettle tiers. In-game tooltips override — confirm on your bar. Slimecraw is a 1pc monster helm (657 Critical Chance); Corpseburster is the 5pc corpse-explosion engine. **Deadly Strike is the household weapon/jewelry pick here on purpose** — it boosts DoTs and channels 15%, and half your kit (Detonating Siphon tether, Avid Boneyard, Deadly Cloak, Endless Hail) *is* DoTs, so it punches well above its weight on a Necromancer specifically. It's also already owned (cheap from guild traders — it's a Cyrodiil set, not craftable), so this is buildable today.*

*Why only one monster piece: Ring of the Pale Order takes the mythic slot, and 12 gear slots only stretch to 5 + 5 + 1 monster + 1 mythic. So the helm is a **pure stat line** — Slimecraw's 2-piece Minor Berserk can never fire here. Slimecraw's 657 Critical Chance is the default because you already own it; if your Offensive Penetration is under the 18,200 cap, a penetration helm (Valkyn Skoria's 1-piece is 1,487 Offensive Penetration) is the better stat. Check your character sheet. See [Gear slot math](../shared/gear-math.md).*

**Where it comes from:** Corpseburster = Infinite Archive. Deadly Strike = guild traders / Cyrodiil vendors (you own it — a Cyrodiil set, never craftable). Slimecraw = 1pc monster **helm** from **vet Wayrest Sewers I** (the Undaunted chest gives only the shoulders). Maelstrom Bow (Thunderous Volley) = vet Maelstrom Arena — and if you move to the staff back bar, the equivalent is the Maelstrom inferno staff (Crushing Wall). Perfected Sul-Xan's Torment = Sanity's Edge trial. Valkyn Skoria (vet City of Ash II) is the alternative helm when you want its 1pc penetration instead of Slimecraw's crit chance — note its meteor proc is a 2-piece bonus and can't fire alongside the Pale Order mythic.

**Fallback ladder (you don't need trial gear):**
- Body: Corpseburster → **Order's Wrath (you own it, craftable, ~−4 to −6%)** → Ansuul's Torment / Tzogvin's Warband (trial/dungeon options — see the live source before farming a trial)
- Weapons/jewelry: keep **Deadly Strike** — on a Necro DoT kit it's already near the top; a plain Maelstrom Bow (non-perfected) covers the back-bar slot until you clear vMA on vet
- **What the live build actually pairs with Corpseburster: Perfected Sul-Xan's Torment** (Sanity's Edge) on weapons and jewelry, not Deadly Strike. It's the stronger pairing and it's what the source runs — but it's a trial farm, while Deadly Strike is owned, cheap, and unusually good on this DoT-heavy kit. So the household answer stays Deadly Strike, with Sul-Xan's written down as the upgrade you're deliberately not chasing rather than one you've never heard of
- Monster: Slimecraw 1pc (657 Crit Chance, own) → Valkyn Skoria 1pc (1,487 Offensive Penetration) if you're under the pen cap. Only the 1pc bonus ever applies.

**Mundus:** The Thief (crit) default → The Lover (penetration) if you're under-penetrated in solo (and running Avid Boneyard rather than Unnerving) → The Lady (resistances) only for brutal one-shot content
**Attributes:** 64 Stamina default → 32/32 Health/Stamina when struggling → 64 Health for the nastiest fights (Cycle Unending actually *rewards* the extra health with more damage, so this costs you less than it looks)
**Food:** Bewitched Sugar Skulls (tri-stat) — or Artaeum Takeaway Broth (max Stamina + Health + Stamina recovery) if the old sustain gremlin bites here
**Potions:** Increase Power potions (Blessed Thistle + Dragonthorn + Wormwood) — weapon damage, crit, and stamina in one.
**Race note:** Necromancer's own passives + Pale Order carry your survivability, so race is the smallest dial as always. Khajiit / Orc are the ~3.5% damage picks; **Redguard** is the standout if the old stamina-sustain gremlin ever follows you over from the DK (its Adrenaline Rush passive is the only real stamina-sustain racial in the game); **Argonian** is the survivability answer (its potion-boost passive makes your Weapon Power pots heal and restore more). Default answer stays "whatever the character already is."

---

## 3. GROUP CONTENT — adaptation notes

Same character, different job: the group brings the heals, buffs, and debuffs, so you drop self-sufficiency for damage — and Necromancer earns its raid spot by handing the *whole group* a damage buff.

### Key changes from the solo build

| What changes | Do this | Why |
|---|---|---|
| **Mythic** | Drop **Ring of the Pale Order** → complete your 3rd jewelry piece of the weapon/proc set | Healers exist |
| **Colossus** | Now a **group buff**, not just your panic button — coordinate it with the group's burn phases | Pestilent Colossus applies **Major Vulnerability**: everyone's damage on that target goes up 10%. A well-timed Colossus is why raids invite a Necro DD |
| **Avid Boneyard → Unnerving Boneyard** | Swap if the group needs Major Breach — or drop Boneyard entirely for a slotted DoT | The group's debuffers usually cover penetration, so this frees a slot |
| **Spirit Guardian** | Can stay — drop it only if you need the slot for a group buff | Even in a group its 10% transfer + heal is cheap insurance, and it keeps a Grave Lord / Living Death balance |
| **Body set** | Shifts to a group DPS set — keep **Corpseburster** if the fight has constant adds/corpses, otherwise a trial two-piece + a shared-uptime set | Point at the live source below rather than guessing a trial parse |
| **Skeletal Archer** | Stays | Free damage, and the corpse it leaves on death |

*Reference: adapt the live Hyperioxes group Necromancer DPS build for exact bars and trial sets before a progression run — group set metas shift with each trial and patch.*

---

## 4. PvP (Cyrodiil & Battlegrounds) — directional

Necromancer PvP wants burst, hard CC, and a bigger health pool than PvE. Your Colossus is a genuine teamfight ultimate (AoE stun + Major Vulnerability), and Spirit Guardian's 10% transfer is quietly excellent under focus fire.

### PvP bar

| Front Bar (Dual Wield) | Back Bar (Bow) |
|---|---|
| 1. Venom Skull (morph of Flame Skull, *Grave Lord*) — spammable | 1. Endless Hail (morph of Volley, *Bow*) — ranged ground pressure |
| 2. Rending Slashes (morph of Twin Slashes, *Dual Wield*) — bleed pressure | 2. Unnerving Boneyard (morph of Boneyard, *Grave Lord*) — ground AoE **+ Major Breach** |
| 3. Blighted Blastbones (morph of Sacrificial Bones, *Grave Lord*) — burst **and Major Defile**, brutal against enemy healers | 3. Resolving Vigor (morph of Vigor, *Alliance War → Assault*) — heal-over-time |
| 4. Resistant Flesh (morph of Render Flesh, *Living Death*) — burst heal | 4. Skeletal Archer (morph of Skeletal Mage, *Grave Lord*) — free damage, and a corpse when it dies |
| 5. Spirit Guardian (morph of Spirit Mender, *Living Death*) — **10% of incoming damage transferred** plus a heal | 5. Barbed Trap (morph of Trap Beast, *Fighters Guild*) — immobilize + Minor Force |
| **Ult:** Glacial Colossus (morph of Frozen Colossus, *Grave Lord*) — **AoE stun** + Major Vulnerability | **Ult:** Ravenous Goliath (morph of Bone Goliath Transformation, *Bone Tyrant*) — huge health and heals |

!!! warning "Take Glacial, not Pestilent"
    The solo build runs **Pestilent Colossus** for its damage. In PvP the **stun** is most of the value, and only **Glacial Colossus** stuns.

!!! note "How these bars were built"
    **The arrangement is ours; the skills are verified.** No published PvP bar was copied — these were assembled from skills already verified elsewhere in this guide, using standard PvP structure (pressure, burst, heal and CC on the front; buffs, shield, mobility on the back).

    **Re-checked 2026-09-26** against ESO-Hub's individual skill pages, once network access to the source sites was restored. Every skill's name, skill line and effect is confirmed current; several descriptions were corrected in that pass, and a base skill that had been slotted in place of a morph was fixed.

    **Nearest published reference:** Alcast's U50/U51 Stamina Necromancer PvP build. Compare against it before spending gold, and treat these bars as a tested-by-nobody starting point rather than a parse-proven list. **Update 51 (28 Sept 2026) reworks the Major/Minor buff system, Mundus Stones and class passives** — re-verify after it lands.

| | PvP setup |
|---|---|
| **Carries over** | Spirit Guardian mitigation, Resistant Flesh burst heal, Blighted Blastbones' Major Defile (huge against enemy healers), Colossus for the burst — take the **Glacial** morph if you want its stun, since **Pestilent doesn't stun** |
| **Armour & stats** | Heavier armor or 5-1-1, **Impen** on all armor, ~30k+ health, tri-stat/Health enchants |
| **Kit additions** | A corpse-based burst heal, and a stun-break-friendly kit |
| **Sets** | A proc/damage body set — the usual frame |
| **Mythic** | **Gaze of Sithis** or **Torc of Tonal Constancy** |

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
| 6 | Piercing | buy max (20) | armor penetration — carries more weight on the bow back bar, which has no Elemental Susceptibility on it |
| 7 | **War Mage** *or* **Mighty** | buy max (30) | **+100 Weapon and Spell Damage** — War Mage for **Magical** (Magic/Flame/Frost/Shock), Mighty for **Martial** (Physical/Poison/Disease/Bleed). Same **Extended Might** cluster as Piercing above, so you're already standing there. **Both DKs are Flame → War Mage.** |
| 8 | **Flawless Ritual** *or* **Battle Mastery** | buy max (40) | +30% per stage to apply a status effect — Flawless Ritual for **Magical**, Battle Mastery for **Martial**. Also Extended Might; take the one matching the star above |
| 9 | Tireless Discipline | buy max (20) | max stamina — your primary pool, helps the old sustain gremlin |
| 10 | Eldritch Insight | buy max (20) | max magicka (a few class skills still cost it) |
| 11 | Blessed | buy max (20) | your heals — Resistant Flesh, Grave Robber — hit harder |
| 12 | Quick Recovery | buy max (20) | healing received |
| 13 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 14 | Elemental Aegis | buy max | −elemental damage |
| 15 | Preparation | buy max | −damage, always on |
| 16 | **Reaving Blows** | buy (50), swap option | heals off direct damage — stacks with Pale Order *and* Corpseburster explosions for absurd solo healing |
| 17 | Deadly Aim / Biting Aura | buy (50), swap options | single-target vs AoE tilt for a specific fight |
| 18 | Ironclad | buy (50), swap option | −direct damage; in for a slottable on hard hitters |

*Everything above the swap-option rows is the 1200 budget; the swap rows come online later.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Celerity · Expert Evasion — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health (and Cycle Unending turns that health into damage) |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | Hero's Vigor | buy max | max health |
| 4 | **Tireless Guardian** | buy max (20) | Block costs **20 less Stamina per stage — up to 400 less per block.** A central star, reachable this early, and the best answer to a melee build bleeding Stamina on defence |
| 5 | **Fortification** | buy max (30) | +2% damage blocked per stage — also central. **Savage Defense** (−45 Stamina per stage off Bash, max 30) is the third of this group |
| 6 | Tumbling | buy max | cheaper dodge rolls |
| 7 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 8 | **Celerity** | **SLOT** (50) | movement speed |
| 9 | **Expert Evasion** | **SLOT** (50) | cheaper, stronger dodge rolls |
| 10 | Defiance | buy max | mitigation |
| 11 | Mystic Tenacity | buy max | less stun/fear time |
| 12 | Rejuvenation / Siphoning Spells | buy (50), swap options | recovery if a fight out-drains you — your realistic answer to the stamina gremlin here |
| 13 | Bracing Anchor | buy (50), swap option | block-heavy fights (in for Expert Evasion) |
| 14 | Bloody Renewal | buy (50), swap option | stamina on kills — add-heavy fights, and another sustain lever |
| 15 | Pain's Refuge + Bastion | buy (50), swap options | the PvP defensive pair |

*Everything above the swap-option rows is the 1200 budget; the swap rows come online later.*

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
2. **Maelstrom Bow (Thunderous Volley)** — vet Maelstrom Arena (back bar; only pays out while Endless Hail is slotted). Running the staff back bar instead? Get the Maelstrom **inferno staff** (Crushing Wall)
3. **Deadly Strike** — buy it from a guild trader (you own it); front-bar daggers + jewelry + boots (the back-bar weapon is the Maelstrom bow), unusually strong on this DoT kit
4. **Valkyn Skoria helm** — vet City of Ash II, only if your character sheet says you need its 1pc penetration over Slimecraw's crit chance
5. Keep: Slimecraw, Ring of the Pale Order, Order's Wrath (body fallback)
6. **Scribing** already unlocked (Gold Road) → Ulfsild's Contingency as your flexible back-bar/group slot

---

*Sources: Hyperioxes U50 Stamina Necromancer Solo build (verified for U50; soloed vet Dread Cellar, ~69k on the 6M dummy); skill morphs and Class Mastery names cross-checked against Alcast U50 Solo StamCro and ESO-Hub skill/Class-Mastery pages; Corpseburster confirmed as a set (Infinite Archive), not a skill. Class Mastery is the U50 system — confirm the exact numbers and dual-slot behavior in-game. **Necromancer has not had its class refresh yet** (only the DK has), so U50 changed no Necromancer skills. **The bow back bar is our adaptation — the cited build runs dual wield + inferno staff with Elemental Susceptibility, and gears Perfected Sul-Xan's Torment alongside Corpseburster.** Corpseburster's detonation is centred on the consumed corpse (5m), not on the player. Skeletal Archer's penetration/stamina-recovery claim is flagged unverified. In-game tooltips override any guide. Revised 2026-08-18.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order: Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you — worth more than any companion heal, since Pale Order and Spirit Guardian already blanket you in healing — and her Penetrating Strikes buffs your light-attack weaving between corpse casts.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that lets you keep Avid Boneyard (self-heal synergy) without ever needing the Unnerving Boneyard swap. **Azandar (Tank)** brings Major *and* Minor Vulnerability, best-rated for Infinite Archive — which is exactly where you'll be farming Corpseburster.

**Craft Telvanni Efficiency** (5pc crafted) and wear it in a dedicated Armory loadout when the companion is doing real work — it halves their ability cooldowns. Swap back to Corpseburster when you're carrying.

Full details for all eight companions, including farming perks and gear traits: see `../shared/companions.md`.

!!! info "U51 changed the Colossus ultimates"
    All three Colossus morphs now cost **150 Ultimate instead of 175**, and hit harder — Glacial and Frozen by 12.5%, Pestilent by 12.5% / 18% / 23% across its three hits. **Pestilent now guarantees Diseased only on its final hit**, not every hit.

    ZOS has said the damage increases are **temporary and revert in Update 52** in favour of larger PvE-only bonuses — the cheaper cost is the part to plan around.
