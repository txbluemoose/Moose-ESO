# Pure Magicka Nightblade Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Magicka Nightblade, pure class (no subclass), Class Mastery active
**Verified against:** the current U50 Hyperioxes Solo Magicka Nightblade build (a ranged/melee hybrid that soloes vet HM content — Concealed Weapon melee spammable with Swallow Soul as the ranged heal-spammable). Group and PvP sections are directional adaptations — verify bars in-game before a progression run.
**Philosophy:** Kick ass and don't die. Nightblade has the deepest self-healing toolkit of any class — heal-on-spammable (Swallow Soul returns 33% of its damage as healing), heal-on-execute (Killer's Blade), sustain-while-slotted (Siphoning Attacks), heal-per-enemy (Sap Essence), heal-on-ult (Soul Tether). Lean into every one of them. Damage that heals you is the whole point.
**Weapon note:** the main build is **melee — dual daggers front bar, medium/light mix, up close, survivability first** — same relationship the Mag DK guide has with its ice staff. The staff is your *ranged option*, not the default. This is the **Magicka** sibling of your stamina Nightblade: the pool differs, the class heals are identical → [Pure Nightblade (Stamina)](nightblade.md).

> **Confidence key:** The Solo PvE section is built on the verified U50 Hyperioxes Solo Magicka Nightblade build (Concealed Weapon spammable, Swallow Soul heal-spammable, An Eye for Exploitation mastery, Soul Harvest ult). Morphs and skill lines are cross-checked against ESO-Hub / UESP / Fextralife U50. Class Mastery names are verified against ESO-Hub / Alcast U50 lists. The Group section is a self-sufficiency-off adaptation — point to the live group build before raiding. The PvP section is directional (Alcast framework) — PvP set metas rotate every season, so confirm current pieces in-game before spending gold. **In-game tooltips beat this guide** — ZOS renames Nightblade abilities every refresh; trust your bar.

---

## 0. Class Mastery (pick 2 — stay pure class)

Pick 2. Subclassing disables this whole system and costs you both mastery passives — **stay pure class**. The five Nightblade masteries are **An Eye for Exploitation, Above and Beyond, Cutthroat's Focus, Nocturnal Inspiration, and Share the Spoils** — Share the Spoils is a *group* Magicka/Stamina + Ultimate passive, so it's irrelevant to solo and doesn't appear in the table below.

| Mode | Mastery 1 | Mastery 2 | Situational swap |
|---|---|---|---|
| Solo PvE / Group | **An Eye for Exploitation** | **Above and Beyond** | Cutthroat's Focus replaces Above and Beyond when a fight isn't threatening |
| PvP | **An Eye for Exploitation** | Above and Beyond or Cutthroat's Focus | Nocturnal Inspiration if you dump ultimates constantly |

- **An Eye for Exploitation** — up to +1250 Weapon/Spell Damage based on the *target's* missing health, **and reduces your damage taken up to 12% based on your *attacker's* missing health**. The single best "kick ass and not die" mastery in the game: it ramps your damage into execute *and* your mitigation as the fight goes on. Non-negotiable first pick.
- **Above and Beyond** — flat +25% Critical Damage **and Healing** at all times (raises your crit cap too). The healing half multiplies every layered NB heal you run — Swallow Soul, Sap Essence, Killer's Blade, Siphoning Attacks. Pure "don't die" glue that also parses.
- **Cutthroat's Focus** — **verified 2026-09-26:** the **5%** is correct, but the trigger is easy to miss. Activating a Nightblade ability **while bracing** gives you a 0.3s dodge window; **dodging** an attack is what raises that attacker's damage taken by **5% for 5s** (20s against monsters). It is a block-cast passive, not a free damage swap.
- **Nocturnal Inspiration** — upgrades Hemorrhage to generate Ultimate on crit. Feeds Soul Harvest / Soul Tether faster; better in ultimate-hungry PvP than in solo.

---

## 1. SOLO PvE — Skills

Delves, world bosses, vet dungeon soloing, arenas. This is your bread and butter — the verified U50 solo magblade, built melee-forward on dual daggers with an inferno-staff back bar that doubles as your ranged option.

### Skills — Base Setup

| Front Bar (Dual Daggers* — melee spammable) | Back Bar (Inferno Staff — heal/DoT/ranged) |
|---|---|
| 1. **Concealed Weapon** (morph of Veiled Strike, *Assassination*) | 1. **Swallow Soul** (morph of Strife, *Siphoning*) |
| 2. **Merciless Resolve** (morph of Grim Focus, *Assassination*) | 2. **Siphoning Attacks** (morph of Siphoning Strikes, *Siphoning*) |
| 3. **Killer's Blade** (morph of Assassin's Blade, *Assassination*) | 3. **Refreshing Path** (morph of Path of Darkness, *Shadow*) |
| 4. **Sap Essence** (morph of Drain Power, *Siphoning*) | 4. **Elemental Susceptibility** (morph of Weakness to Elements, *Destruction Staff*) |
| 5. **Shadowy Disguise** (morph of Shadow Cloak, *Shadow*) | 5. **Ulfsild's Contingency** (scribed grimoire, *Soul Magic*; scripts: Bleed / Lingering Torment / Resolve) |
| **Ult:** Soul Harvest (morph of Death Stroke, *Assassination*) | **Ult:** Soul Tether (morph of Soul Shred, *Siphoning*) |

*\*Dual daggers are the default — best damage and the up-close playstyle you run. Dagger enchants: main-hand **Berserker** (Weapon/Spell Damage), off-hand **Absorb Magicka** (your class heals carry you, so the off-hand backstops magicka rather than stamina here). The inferno-staff back bar is where **Swallow Soul** lives: swap to it to lay Refreshing Path + Elemental Susceptibility and — when you want to fight from range instead — camp there and spam Swallow Soul, which heals you for 33% of the damage it inflicts every 2 seconds. That staff bar **is** your ranged option; you don't need a second guide for it.*

**Why every one of these keeps you alive:**
- **Concealed Weapon** — your melee spammable, dealing Magic Damage. Strike an enemy **from their flank** and you set them **Off Balance**; when you leave Sneak or invisibility **in combat you gain +10% damage with this ability for 15 seconds**; and while it's slotted you gain **Minor Expedition**. It does **not** stun. Cheap, hits hard, and the out-of-cloak window is what pairs it with your burst.
- **Swallow Soul** — the ranged heal-spammable: it **heals you for 33% of the damage inflicted, every 2 seconds for 10 seconds** (you only — it doesn't heal allies), and you keep it rolling by recasting. ⚠️ **U51 gave it Health scaling: it deals 1% more damage for every 2% Health you have** (so ~+50% at full Health, and correspondingly less when you're hurt). Because the heal is a share of the damage, **the heal shrinks as your Health drops** — it's a maintenance heal, not a comeback button. Earlier revisions of this page said 35%; the live tooltip reads 33%. This is your survival engine when you'd rather kite than knife-fight — and the reason the staff bar is a full ranged loadout, not a swap-and-back.
- **Merciless Resolve** — light and heavy attacks build stacks (up to 10; a **fully-charged heavy gives two**), and at 5 you spend 5 to fire the spectral bow for **4,752 Magic Damage**, **healing you 50% of that** in melee range. That 50% is the best heal of the three Grim Focus morphs and this page never said so. While slotted it grants **Major Savagery** (+12% Critical Chance), and that buff works **while slotted on either bar** — one front-bar slot covers both, so there's no reason to duplicate it on the back bar. This skill *rewards* the exact weaving discipline your DK was struggling with.
- **Killer's Blade** — Disease-damage execute that deals up to **400% more damage to enemies under 50% health** and **heals you for 2399 if the enemy dies within 2 seconds**. Free layered heal on every trash mob, and it opens far earlier than you'd think. (The 25% figure belongs to the *base* skill, Assassin's Blade.)
- **Sap Essence** — AoE hit that **heals you and nearby allies per enemy struck** and grants **Major Brutality** (weapon *and* spell damage — your damage buff, no potion needed). Crowd control button and a second heal layer in one.
- **Shadowy Disguise** — **3 seconds of invisibility**, and your next direct-damage attack within those 3s is a **guaranteed critical**; while slotted (**on either bar**) you also gain **Minor Protection** (−5% damage taken), and **Major Resolve** via the Shadow Barrier passive. Your burst-and-brace button; leaving it in combat also arms Concealed Weapon's +10% damage window. **U51/live tooltip adds something this page never mentioned: Born From Shadow.** Cloaking — *or* the cloak ending — grants **+15% damage done to monsters for 15 seconds**, and **U51 raised that from 10s to 15s.** That makes this a damage cooldown you press on cooldown in PvE, not only a burst-window button. (It says *monsters*, so it does nothing in PvP.) ⚠️ **U51 narrowed the guaranteed crit: it no longer applies to proc attacks** — set procs and proc-style abilities don't get it (and proc attacks also lost Sneak's bonus damage). Opening out of cloak with a real ability still crits; opening with a set proc doesn't.
- **Siphoning Attacks** — while slotted on either bar, **heals you 1250 Health and restores 200 Magicka and 200 Stamina, once per second**. It's a while-slotted passive — nothing to cast, nothing to refresh — and it's the sustain skill this build was previously missing entirely.
- **Refreshing Path** — a heal-over-time you stand in, plus **Major Expedition** to reposition. Pure layered survivability on the ranged bar.
- **Soul Tether** (back-bar ult) is your "survive this" button — AoE damage that **heals you** and stuns; Soul Harvest (front) is your DPS/execute ult with big ultimate return on kills and a Major Defile debuff on the target.

**Morph / scribing notes:**
- **Swallow Soul** is the *magicka* morph of Strife (**heals you 33% of the damage inflicted, every 2 seconds for 10 seconds** — self only, and it now scales off your Health); **Merciless Resolve** is the *magicka* morph of Grim Focus (Relentless Focus is the stamina morph you'd run on the stamblade). Both Grim Focus morphs grant Major Savagery while slotted on either bar — neither grants Minor Berserk. Note also that **Strife and Funnel Health break Invisibility when cast since U51, but Swallow Soul does not** — the morph you run is the safe one.
- **Siphoning Attacks** vs **Leeching Strikes** (the two morphs of Siphoning Strikes): only Siphoning Attacks returns resources. Leeching Strikes heals more — 1800 Health per second — but returns **no** Magicka or Stamina, so on a magicka build that wants sustain, take Siphoning Attacks.
- **Ulfsild's Contingency** needs Scribing (Gold Road), which you have. If you ever want that slot non-scribed, use **Sap Essence** off the back bar too, or **Barbed Trap** (morph of Trap Beast, *Fighters Guild*) for Minor Force — both drop into that slot cleanly.

### Situational swaps (with skill line sources)
- **Dark Cloak** — *Nightblade > Shadow* (other morph of Shadow Cloak) — trades the invisibility for a **heal-over-time**: 853 Health a second for 3 seconds off your **Max Health**, and **+150% while you're Bracing**, which can't be broken by AoE or detection. **It still grants Born From Shadow** (+15% damage done to monsters for 15s) and **Minor Protection**, so swapping to it costs you the invisibility and the guaranteed crit — *not* the damage buff. Given how this repo weights survivability, that makes Dark Cloak a much stronger default than earlier revisions implied
- **Refreshing Path** — *Nightblade > Shadow* (morph of Path of Darkness) — already on the back bar; move it to the front for a stand-in-it HoT if a melee fight is out-damaging your heals
- **Dark Shade** — *Nightblade > Shadow* (morph of Summon Shade) — applies **Minor Maim** to enemies near it (they hit softer) and adds free damage; mitigation that also parses
- **Mass Hysteria** (morph of Aspect of Terror, *Shadow*) — AoE fear to peel a pack off you while you reset
- **Resolving Vigor** — *Alliance War > Assault* — burst-heal for invulnerability phases where Pale Order can't proc (nothing to hit). Grind a few Battlegrounds for the Alliance Points
- **Precognition ult** — *Psijic Order (Summerset)* — mandatory for the handful of solo-impossible stun mechanics (e.g. Zaan)
- **Bolstering Darkness** (morph of Consuming Darkness, *Shadow*) — panic ultimate: damage-reduction bubble for one-shot mechanics

### Rotation (priority sweep — refresh whatever is highest that's about to fall off)
Don't read this as a 12-step list — it's a **sweep**. Top to bottom, then back to the top:

1. **Keep Merciless Resolve stacks building** — weave a light attack before every skill; fire the spectral bow the instant it hits 5 stacks (the crit buff runs off the front-bar slot alone, so it never drops)
2. Back bar for two seconds → **Elemental Susceptibility → Refreshing Path → Ulfsild's**, then swap to daggers (or *stay* on the staff and spam **Swallow Soul** if you want to fight ranged). **Siphoning Attacks** needs no press — it ticks while slotted
3. **Shadowy Disguise** for the burst/brace window — then strike out of it, where the next direct-damage hit is a guaranteed crit and Concealed Weapon picks up its +10% damage window
4. **Concealed Weapon** as your melee spammable filler (hit the **flank** to set Off Balance); **Swallow Soul** as the ranged spammable filler when you kite
5. **Sap Essence** whenever 2+ enemies are on you (AoE heal + Major Brutality refresh)
6. **Killer's Blade** the moment anything drops under 50%
7. **Soul Harvest** as your damage ultimate; **Soul Tether** when you need the heal-and-stun

**Pre-buff before a pull:** Refreshing Path → Elemental Susceptibility → Ulfsild's on the staff bar, swap to daggers, open with Shadowy Disguise → Concealed Weapon (guaranteed crit out of the cloak, plus its +10% damage window). Sap Essence for Major Brutality if you didn't get it from a potion.

### Sustain note — this build funds your weaving problem
Your documented DK stamina shortfall was diagnosed as **light-attack weaving gaps**, not skill costs. This is a *magicka* Nightblade, so stamina isn't the drain here — but the same discipline pays off: **Merciless Resolve turns your light attacks into a healing burst**, **Swallow Soul** returns 35% of its damage as healing, and **Siphoning Attacks** hands you 200 Magicka and 200 Stamina every second just for being slotted. If sustain ever dips, the cause is the same one — you're skipping light attacks between skills — not gear. A **heavy attack on the staff bar** refills magicka in a pinch; the off-hand **Absorb Magicka** dagger enchant is the backstop.

---

## 2. GEAR — Solo

**Armor weight: 5 Light / 1 Medium / 1 Heavy.** Light carries the magicka spell-damage and spell-cost passives (Evocation, Spell Warding) that a magicka NB lives on; the single Medium and single Heavy exist to trigger **all three tiers of Undaunted Mettle** — that passive grants max health / magicka / stamina per *distinct* armor weight worn, so a 5/1/1 split banks every tier instead of just one. This is a survivability-positive split, not a damage sacrifice. (You fight in melee on daggers, but the *pool* is magicka, so the weight follows the pool, not the weapon — that's the magicka-DK pattern.)

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Light | Divines | Magicka | **Slimecraw** (1pc monster) |
| Shoulders | Light | Divines | Magicka | Order's Wrath |
| Chest | Heavy | Reinforced | Magicka | Order's Wrath |
| Hands | Light | Divines | Magicka | Order's Wrath |
| Belt | Light | Divines | Magicka | Order's Wrath |
| Legs | Medium | Divines | Magicka | Order's Wrath |
| Boots | Light | Divines | Magicka | Deadly Strike |
| Necklace + Ring 1 | — | Bloodthirsty | Spell Damage | Deadly Strike |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Nirnhoned / Charged | Berserker + Absorb Magicka | Deadly Strike |
| Back bar (Inferno Staff) | — | Infused | Spell Damage | Deadly Strike |

*Deadly Strike counts 3 always-on pieces (boots + neck + ring 1) plus the active bar's weapon(s): 2 daggers front, or the inferno staff (a two-hander = 2 set pieces) on the back bar — so you get the full 5-piece Deadly Strike bonus on **both** bars. Deadly Strike boosts DoT and channeled damage 15%, and Swallow Soul's heal-over-time qualifies, so it's near-BiS and craftable. In-game tooltips override — confirm on your bar.*

**Where it comes from — and the good news:** this is a **build-it-today** setup. **Order's Wrath** is craftable and **Deadly Strike** is cheap from guild traders (Cyrodiil set) — both buildable at your own station (you own both). **Slimecraw** is a 1-piece overland monster helm. **Ring of the Pale Order** you already run. No trial gear required to be strong here.

**Fallback / upgrade ladders (you already own the base — these are sidegrades, not requirements):**
- Body: Order's Wrath is a keeper (crit chance + crit damage suit the class). Push-the-parse swap → **Tide-Born Wildstalker** (Gold Road overland — the Hyperioxes magicka NB body pick) for +a few %. Not worth chasing over "don't die."
- Weapons/jewelry: **Deadly Strike** (you own it) is near-BiS on a heal-over-time build; **Ansuul's Torment** (Sanity's Edge) is the trial-set push if you ever want it.

**Mundus:** The Thief default (crit) → The Lover for penetration in the medium/light mix → The Lady only for brutal content.
**Attributes:** 64 Magicka default → shift toward Health when a fight is out-damaging your heals (only ~5% damage lost per big shift).
**Food:** Bewitched Sugar Skulls (tri-stat — max survivability). Clockwork Citrus Filet if you want more magicka recovery on top.
**Potions:** Increase Power potions (Cornflower + Lady's Smock + Water Hyacinth). Between Swallow Soul, Sap Essence, and the Absorb Magicka enchant you rarely need Tri-Restoration potions — if you do, it's a weaving problem, not a potion problem.
**Race note:** Race is the smallest dial in any build (~5% spread) and costs money to change — run whatever the character already is. If it ever genuinely comes up, **High Elf** is the magicka-damage pick and **Breton** the magicka-sustain/cost-reduction one; Khajiit is the crit-damage pick if you'd rather kick more ass than not die.

---

## 3. GROUP CONTENT — adaptation notes

Same character, different job: the group hands you buffs, debuffs, and dedicated heals, so you trade self-sufficiency for damage.

### Key changes from the solo build

| What changes | Do this | Why |
|---|---|---|
| **Mythic** | Drop **Ring of the Pale Order** → a real 5-piece damage set (a trial set) in its place, or a second body set | Healers exist |
| **Spammable** | **Swallow Soul → Concealed Weapon-only**, or a pure DoT | The group heals you, and Merciless + Killer's Blade still cover you. Keep Swallow Soul if the fight is chaotic |
| **Sap Essence** | Stays | Major Brutality is a personal damage buff even in a group, and the heal-per-enemy (which also lands on allies) is free |
| **Shadowy Disguise / Refreshing Path** | Stay | Minor Protection and the HoT are still free personal mitigation, and Shadowy Disguise is **+15% damage done to monsters for 15s** (Born From Shadow) on top of the guaranteed crit — in group PvE that's a damage slot, not a defensive one. Note the crit no longer applies to **proc** attacks since U51 |
| **Siphoning Attacks** | Can come off for a pure DoT | Once the group is feeding you sustain |
| **Elemental Susceptibility** | Comes off → **Barbed Trap** (Minor Force crit-damage buff), a scribed **Banner Bearer**, or a pure DoT | If a group debuffer already applies Major Breach. Keep a Breach source if nobody brings it |
| **Soul Harvest** | Stays as the execute ult | Its Major Defile helps the group's burn |

!!! warning "Do not guess a raid rotation from this page"
    Point yourself at the live **Hyperioxes group Magicka Nightblade DPS build** and copy its bar and set list before a progression run — that's the authoritative source, and it changes between updates.

---

## 4. PvP (Cyrodiil & Battlegrounds) — directional

Nightblade is a perennial PvP powerhouse — cloak, burst, and mobility are exactly what small-scale and solo PvP want. Your PvE chassis translates, but PvP wants burst, hard CC, and a bigger health pool. This section is **directional** — verify against Alcast's current U50 Magicka Nightblade PvP build, and remember **PvP set metas rotate every season**, so confirm current pieces on the live page before spending gold.

### PvP bar

| Front Bar (Dual Wield or Inferno Staff) | Back Bar (Inferno Staff) |
|---|---|
| 1. Concealed Weapon (morph of Veiled Strike, *Assassination*) — the out-of-cloak burst spammable | 1. Merciless Resolve (morph of Grim Focus, *Assassination*) — Major Savagery while slotted, and the charged proc |
| 2. Swallow Soul (morph of Strife, *Siphoning*) — damage that heals you | 2. Refreshing Path (morph of Path of Darkness, *Shadow*) — heal-over-time + Major Expedition |
| 3. Killer's Blade (morph of Assassin's Blade, *Assassination*) — execute, opens at **50%** | 3. Sap Essence (morph of Drain Power, *Siphoning*) — Major Brutality + AoE heal |
| 4. Dark Cloak (morph of Shadow Cloak, *Shadow*) — heals **853/sec over 3s, scaling off Max Health** and **+150% while Bracing**; can't be broken by AoE or detection | 4. Siphoning Attacks (morph of Siphoning Strikes, *Siphoning*) — sustain while slotted |
| 5. Mass Hysteria (morph of Aspect of Terror, *Shadow*) — reliable AoE fear | 5. Elemental Susceptibility (morph of Weakness to Elements, *Destruction Staff*) — Major Breach |
| **Ult:** Soul Harvest (morph of Death Stroke, *Assassination*) — execute ult + Major Defile | **Ult:** Bolstering Darkness (morph of Consuming Darkness, *Shadow*) — the escape/mitigation ult |

*Take **Shadowy Disguise** over Dark Cloak if you want the invisibility and its guaranteed crit instead of the heal — that's the campaign-by-campaign call the section above describes.*

!!! note "How these bars were built"
    **The arrangement is ours; the skills are verified.** No published PvP bar was copied — these were assembled from skills already verified elsewhere in this guide, using standard PvP structure (pressure, burst, heal and CC on the front; buffs, shield, mobility on the back).

    **Re-checked 2026-09-26** against ESO-Hub's individual skill pages, once network access to the source sites was restored. Every skill's name, skill line and effect is confirmed current; several descriptions were corrected in that pass, and a base skill that had been slotted in place of a morph was fixed.

    **Nearest published reference:** Alcast's U50/U51 Magicka Nightblade PvP build. Compare against it before spending gold, and treat these bars as a tested-by-nobody starting point rather than a parse-proven list. **Update 51 (28 Sept 2026) reworks the Major/Minor buff system, Mundus Stones and class passives** — re-verify after it lands.

| | PvP setup |
|---|---|
| **Carries over** | Concealed Weapon burst (the out-of-cloak damage window, plus Off Balance on a flank hit — note it does *not* stun), Killer's Blade execute (it opens under 50%), Shadowy Disguise (the cloak *is* the class), Swallow Soul / Sap Essence / Siphoning Attacks sustain, Soul Harvest / Soul Tether burst ultimates |
| **Swap — Shadowy Disguise → Dark Cloak** *(the other Shadow Cloak morph)* | Often the PvP pick: a **heal-over-time** rather than an invisibility — 853 a second for 3 seconds off your Max Health, **+150% while Bracing**, and it can't be broken by AoE or detection. Both morphs grant **Minor Protection**, and **Born From Shadow's +15% is damage done *to monsters***, so in PvP neither cloak gives you damage and this really is cloak vs. heal. Weigh it for the campaign you're in |
| **Swap in — Mass Hysteria** *(Shadow)* | Reliable AoE fear/CC |
| **Armour & stats** | Heavier armor, or a 5/1/1 pushed toward Heavy; ~30k+ health, **Impen** on all armor, Health/tri-stat enchants |
| **Front bar set** | A proc or spell-damage set you own — **Deadly Strike** is a legitimate stat option already in your bags |
| **Back bar set** | **Rallying Cry** — the PvP survival staple |
| **Monster set** | **Balorgh** for ultimate-scaling burst |
| **Mythic** | **Ring of the Pale Order** still works, or a no-block tank mythic like **Gaze of Sithis** for a heavier setup |

*Season metas rotate — the live Alcast page and your in-game tooltips override this section.*

---

## Skill Line Passives

Rule of thumb: **buy every passive in every line you have a skill slotted from.** Priorities if points are short:

- **Assassination:** all 4 — **Hemorrhage** (crit damage) and **Master Assassin** are the stars. **U50 note: Pressure Points now grants 1|2% Critical Chance per *Nightblade* ability slotted** (it used to be 1.25|2.5% per *Assassination* ability), so Shadow and Siphoning abilities count toward it too — this bar feeds it from all three lines
- **Shadow:** all 4 — **Shadow Barrier** (Major Resolve after cloak/stealth) is free armor on every Concealed Weapon opener
- **Siphoning:** all 4 — **Magicka Flood** and the heal boosts feed Swallow Soul's whole engine
- **Dual Wield:** all — flat damage for the front bar
- **Destruction Staff:** all — the inferno back bar's Blockade and Elemental Susceptibility lean on them
- **Light Armor** (pieces worn): Concentration + Prodigy — HIGH
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
| 1 | **Master-at-Arms** | **SLOT** (50) | +direct damage — Concealed Weapon, the spectral bow, Killer's Blade are all direct |
| 2 | **Deadly Aim** | **SLOT** (50) | +single-target damage — your whole solo game |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits (you crit constantly with Major Savagery up) |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything — safe, no-think pick |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | **War Mage** *or* **Mighty** | buy max (30) | **+100 Weapon and Spell Damage** — War Mage for **Magical** (Magic/Flame/Frost/Shock), Mighty for **Martial** (Physical/Poison/Disease/Bleed). Same **Extended Might** cluster as Piercing above, so you're already standing there. **Both DKs are Flame → War Mage.** |
| 8 | **Flawless Ritual** *or* **Battle Mastery** | buy max (40) | +30% per stage to apply a status effect — Flawless Ritual for **Magical**, Battle Mastery for **Martial**. Also Extended Might; take the one matching the star above |
| 9 | Eldritch Insight | buy max (20) | max magicka (your whole pool) |
| 10 | Tireless Discipline | buy max (20) | max stamina (dodge/block/break-free) |
| 11 | Blessed | buy max (20) | your heals hit harder — everything you cast heals you |
| 12 | Quick Recovery | buy max (20) | healing received |
| 13 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 14 | Elemental Aegis | buy max | −elemental damage |
| 15 | Preparation | buy max | −damage, always on |
| 16 | **Reaving Blows** | buy (50), swap option | heals off direct damage — stacks with Pale Order *and* Swallow Soul for absurd solo healing |
| 17 | Thaumaturge | buy (50), swap option | in for Wrathful Strikes on DoT/HoT-heavy fights (Swallow Soul HoT, Refreshing Path) |
| 18 | Ironclad / Duelist's Rebuff | buy (50), swap options | mitigation swaps for specific hard hitters |

*Everything above the swap-option rows is the 1200 budget; the swap rows come online later.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Rejuvenation · Expert Evasion — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | **Rejuvenation** | **SLOT** (50) | recovery — kept slotted for *you specifically*: unlike your DK (Soul of Flame solved sustain), this build leans on recovery between Swallow Soul casts |
| 4 | Hero's Vigor | buy max | max health |
| 5 | **Tireless Guardian** | buy max (20) | Block costs **20 less Stamina per stage — up to 400 less per block.** A central star, reachable this early, and the best answer to a melee build bleeding Stamina on defence |
| 6 | **Fortification** | buy max (30) | +2% damage blocked per stage — also central. **Savage Defense** (−45 Stamina per stage off Bash, max 30) is the third of this group |
| 7 | Tumbling | buy max | cheaper dodge rolls |
| 8 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 9 | **Expert Evasion** | **SLOT** (50) | cheaper, stronger dodge rolls — your melee panic button |
| 10 | Defiance | buy max | mitigation |
| 11 | Mystic Tenacity | buy max | less stun/fear time |
| 12 | Bloody Renewal | buy (50), swap option | resources on kills — add-heavy farming |
| 13 | Siphoning Spells | buy (50), swap option | extra magicka return if a fight out-drains your heals |
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
5. **Tide-Born Wildstalker** — Gold Road overland, only if you decide to chase the last few % of damage; Order's Wrath is fine to keep forever.
6. **Ansuul's Torment** — Sanity's Edge, the trial-set weapon/jewelry push over Deadly Strike if you ever want it.

---

*Sources: Hyperioxes U50 Solo Magicka Nightblade build (Concealed Weapon spammable, Swallow Soul heal-spammable, An Eye for Exploitation, Soul Harvest ult). Morphs and skill lines cross-checked vs ESO-Hub / UESP / Fextralife U50. Class Mastery names verified vs ESO-Hub / Alcast U50 lists. Group and PvP sections are directional adaptations — point to the live Hyperioxes group build and current Alcast PvP page respectively before committing gold. Skill names current as of Update 50; ZOS renames Nightblade abilities every class refresh, so trust your in-game tooltips over any guide. Skill tooltips (Grim Focus, Killer's Blade, Concealed Weapon, Swallow Soul, Sap Essence, Shadowy Disguise, Siphoning Strikes morphs, Pressure Points) and the full Class Mastery list re-verified against current ESO-Hub tooltips 2026-08-18. Revision: 2026-08-18.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order (they cast top-to-bottom as cooldowns finish): Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you — worth more than any companion heal, since Pale Order + Swallow Soul already keep you topped — and her Penetrating Strikes supports your light-attack weaving.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that can free your Elemental Susceptibility slot. **Azandar (Tank)** brings Major and Minor Vulnerability, best-rated for Infinite Archive.

**Craft Telvanni Efficiency** and wear it when the companion is carrying (halves their ability cooldowns); swap back to your damage set when you're the one doing the work.

Full details for all eight companions, including farming perks and gear traits: see `../shared/companions.md`.
