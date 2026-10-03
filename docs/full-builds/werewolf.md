# Werewolf Master Guide — Update 51
### Werewolf Berserker — Solo & Group DPS

!!! warning "Update 51 tripled the cost of nearly every werewolf ability"
    U50 reworked the line; **U51 (28 September 2026) re-priced it.** The headline numbers, straight from the notes: **Pounce 1,071 → 3,213 Stamina**, **Roar 1,071 → 3,443**, **Rip and Tear 765 → 1,800**, **Bloodclaws 995 → 2,340**, **Claw Fury 383 → 420 per tick**. Healing came down too — **Hircine's Bounty −13%, Hircine's Fortitude −10%**. The form did not get weaker so much as it got *expensive*, which changes how you press buttons: see [How to play](#how-to-play) below, and note that **Rampage removes werewolf ability costs entirely for 20 seconds** — that window is now the whole point of Berserker.

    Everything on this page was re-verified against **ESO-Hub's individual Werewolf skill pages on 2026-09-30** (live U51 tooltips), which corrected six passive names, the Blood Hunger interaction on Rip and Tear, and both Hircine morphs. **In-game tooltips still win** — check yours before you commit a morph.

Werewolf isn't a class — it's a transformation you slot on your existing character. Build normally, put the Werewolf Transformation ultimate on a bar, and press it to become a fast, self-healing melee beast with its own skill bar. This is the **damage** setup. For the easy/tanky version, see the [one-bar Werewolf cheat sheet](../one-bar-builds/werewolf.md).

## Morph: Werewolf Berserker

Both morphs are of **Werewolf Transformation** (*World → Werewolf*). You take **Werewolf Berserker**:

- **Major Berserk** (+damage) plus a **Bleed** on your light and heavy attacks — 1,389 over 4 seconds (halved and front-loaded against players)
- It also **upgrades Insatiable Hunger so that devouring a corpse generates Fury** — so snacking feeds Rampage
- **Rampage** — *not* a re-press of the ultimate. Abilities used in form and in combat build **Fury** (15 a cast, +10 from the Blood Rage passive); at **1,000 Fury** the ultimate becomes **Rampage**: **+15% damage done, +20% Movement Speed, and the cost of every werewolf ability removed for 20 seconds.**

!!! tip "Rampage is a free-cast window, not just a damage buff"
    Post-U51 that 20 seconds of **zero ability cost** is worth more than the 15% damage. Build Fury on the cheap presses, then dump Roar and Claw Fury inside the window while they're free.

**Werewolf Transformation also gives +15% Stamina Recovery while merely *slotted*** — you don't have to transform to get it. Worth knowing if you're short on Stamina on your normal bars.

*(**Pack Leader** is the defensive morph: **Major Protection**, **+15% Block Mitigation**, **Minor Courage** for you and your group, and two direwolves that hit for 102 Physical twice or 555 once every 2 seconds. Its **Enduring Rampage** adds **4,000 Health Recovery** on top of the base effects. The wolves also count toward Call of the Hunt, which is what cuts the form's upkeep to **36 per 10s** — see [Staying a werewolf](#staying-a-werewolf-its-an-ultimate-cost-now-not-a-timer). Otherwise Berserker is the DPS pick.)*

## The werewolf form bar

When you transform you get a fixed 5-slot beast bar. Recommended slots:

1. **Feral Pounce** (morph of Pounce, *Werewolf*) — **dynamic**: cast from beyond 7m it's the leaping gap-closer (1,616 Bleed + Hemorrhaging); cast in melee range it becomes **Feral Carnage**, a **12-second** single-target bleed that deals **up to 450% more damage the lower the target's Health**. Either half restores **200 Stamina** on damage and builds Fury. Since you fight up close you'll mostly press the Carnage half — treat it as a DoT you refresh, and note the ramp: on a long boss fight it is doing far more at the end than at the start.
    - **Costs 3,213 Stamina since U51** (was 1,071) for the leap; Carnage is 1,188. The leap is now a genuine expense, so use it to close and then stay closed.
    - **Feral vs Brutal is your choice of morph:** **Feral** (Pounce/Carnage) is the **single-target** version — take it for bosses and the household default. **Brutal** (Brutal Pounce / Brutal Carnage) is the **AoE** version — take it if you mostly grind trash packs and Infinite Archive.
2. **Hircine's Rage** (morph of Hircine's Bounty, *Werewolf*) — heals **3,368 scaling off your offensive stats** (Weapon/Spell Damage), grants **double Fury**, restores **10% Stamina** (up to double, scaled to your current Health), and grants **up to 12% damage done for 20s** — again scaled to how high your Health currently is. ⚠️ The catch: **it raises your damage *taken* by the same amount**, so it's a damage cooldown as much as a heal, and it's weakest exactly when you need a heal most. **While slotted it grants Major Brutality *and* Minor Berserk** — verified 2026-09-30 on ESO-Hub, after this repo briefly recorded the opposite.
    - **Survivability swap: Hircine's Fortitude** (the other morph) heals **5,890 off Max Health** — nearly double Rage's number and it doesn't care about your damage stats — restores **12% Stamina** (up to double), and **while slotted grants Major Brutality *and* Major Vitality** (+12% healing received and damage shield strength) with **no damage-taken penalty**. That is the "kick ass and not die" pick by a wide margin now: a bigger heal, +12% to every *other* heal you take, and no downside. Rage's only edge is the 12% damage and Minor Berserk.
    - Both took a U51 nerf — **Bounty −13%, Fortitude −10%** — and Fortitude costs **4,590 Magicka** (was 4,320). It's your only Magicka cost in form.
3. **Ferocious Roar** (morph of Roar, *Werewolf*) — fears nearby enemies for 4s and sets them **Off Balance for 7s**, grants **two stacks of Blood Hunger**, gives **Major Courage** to you and up to 11 allies for 20s, opens a **Feeding Frenzy synergy** (6% damage done + Minor Force, 30s), and grants **Major Savagery while slotted** — your crit buff, no potion needed for it.
    - **Costs 3,443 Stamina since U51** (was 1,071) — the single biggest price rise in the line. It is no longer an opener you press casually; it's a cooldown. Press it for the Blood Hunger stacks and the Off Balance window, ideally inside Rampage while it's free.
4. **Claw Fury** (morph of Rending Claws, *Werewolf* — the U50 rename of Infectious Claws) — a **channelled** claw attack over **4.7 seconds** hitting up to 6 enemies for 22,226 Physical. Your main sustained damage, and it does four jobs at once: every second it **heals you 1,675 off your Max Health**, generates **15 Fury**, and adds a **Blood Hunger stack**, and it deals **+25% damage per stack**, consuming them all when the channel ends.
    - **It heals you natively now** — you don't need Pale Order or Reaving Blows for that, though both stack on top.
    - ⚠️ **The tooltip says Claw Fury "is considered direct damage."** That's why **Master-at-Arms** (direct damage CP) is in the Blue table and Thaumaturge is not. It does leave a live question about **Deadly Strike**, whose 5-piece buffs *channelled and damage-over-time* abilities: Claw Fury is unambiguously a channel, so it should still qualify, but the damage classification and the buff category no longer obviously agree. **Check your own tooltip damage with and without the 5-piece before you commit gold to it.** Flagged rather than answered — 2026-09-30.
    - Cost is **420 Stamina per tick** (was 383). *(The other morph is **Bloodclaws** — the AoE version: 2,087 Physical plus 4,039 Bleed over 10s to up to 6 enemies, heals 40% of the initial hit plus 1,024 from the bleed, and grants a Blood Hunger stack **per enemy hit**. 2,340 Stamina.)*
5. **Rip and Tear** (morph of **Gnash** — the U50 redesign of Piercing Howl, *Werewolf*) — the household default. The initial rip deals 1,347 Physical, applies **Major Breach for 15 seconds** and the **Sundered** status effect; the tear-out deals 1,347 Bleed, **heals you 3,414 off Max Health**, and deals **125% more damage to targets below 25% Health**. A spammable that debuffs, executes and heals is exactly the trade this repo takes every time. **1,800 Stamina since U51** (was 765).
    - ⚠️ **Blood Hunger works differently on this morph than the guides used to say.** The live tooltip is explicit: Rip and Tear **consumes a stack of Blood Hunger to increase the *healing* done by 25% — "Blood Hunger applies to healing instead of damage."** It is **Bloody Gnash** that spends the stack for **+25% initial damage** (and has a 50% chance to keep the stack). Earlier revisions of this page had that backwards and built the rotation on it. Corrected 2026-09-30.
    - ⚠️ This page has also long claimed Rip and Tear **taunts while you're blocking**. That is **not on the current tooltip** and I could not source it — treat it as unverified and don't rely on it to hold aggro.
    - **Parse option: Bloody Gnash**, the other morph — second hit deals **200% more damage below 25% Health** and applies Hemorrhaging, and it turns Blood Hunger back into damage. Hack the Minotaur runs **Claw Fury as the channelled spammable and Bloody Gnash as the execute**. Take it only if you're chasing a number; Rip and Tear's Breach + heal is worth more in solo content. 1,620 Stamina.

### Three mechanics that change how you press buttons

- **Blood Hunger.** **Claw Fury generates a stack every second while you channel it and deals +25% damage per stack**, consuming all of them when the channel ends — so clipping it early throws the ramp away. **Ferocious Roar hands you two stacks outright.** What the stacks are *worth* depends on which Gnash morph you took: **Rip and Tear spends one to heal 25% harder**, **Bloody Gnash spends one to hit 25% harder** (and keeps it half the time). **Bloodclaws** grants a stack per enemy hit.
- **Sustain is the U51 problem.** Every button except Claw Fury roughly tripled in price. Three things pay for it: **Feral Carnage returns 200 Stamina on every damage tick**, **Master of the Chase gives Heavy Attacks +50% Stamina**, and **Rampage removes ability costs entirely for 20 seconds**. Build Fury on cheap presses, spend inside Rampage.
- ⚠️ **Prowl.** Earlier revisions of this page said werewolf form has its own stealth and that a Pounce out of it deals **+50% damage and stuns**. **I could not source that** — there is no Prowl ability on ESO-Hub's Werewolf line and nothing in the U50 or U51 notes mentions it. Treat it as **unverified**: if you can sneak in form on your own client, great, but don't plan an opener around the number. Flagged 2026-09-30.

## Staying a werewolf — it's an Ultimate cost now, not a timer

U50 deleted the old drain timer. The form runs on **Ultimate**: **100 to transform**, then **100 every 10 seconds to stay in form** — *before* the passive discount.

**The discount is Call of the Hunt**, and it's worth understanding because it's the difference between a burst window and living in the form. It cuts the upkeep by **16%, plus another 16% for every transformed werewolf or direwolf in your group including yourself, capped at 80%**. So:

| Who's transformed | Reduction | Upkeep |
|---|---|---|
| Berserker, alone | 32% | **~68 per 10s** |
| Pack Leader, alone (self + 2 direwolves) | 64% | **~36 per 10s** |
| Both of you as Berserkers | 48% | **~52 per 10s each** |
| **Both of you as Pack Leaders** (2 wolves + 4 direwolves) | **80% — the cap** | **~20 per 10s** |

*That last row is the household finding: if you and your wife both wolf out as Pack Leaders you hit the cap, and the form becomes close to permanent. Figures derived from the passive's own percentages — the 36 matches what this page already said, which is decent corroboration, but **the in-game Ultimate bar is the authority**.*

- **Insatiable Hunger (Devour) restores Ultimate**, not time. Hold interact on a corpse for up to 4 seconds; each second heals you **3,200 off Max Health** and returns **15 Ultimate** — so a full corpse is **60 Ultimate**, roughly 9 more seconds of form at Pack Leader upkeep. Snack between packs; this is your only real in-combat refill. On **Berserker** each tick also generates Fury.
- ⚠️ U51 moved Devour's synergy to the **lowest** player-skill priority, so in a group it'll be the last prompt offered — don't count on grabbing it in a busy fight.
- Generate Ultimate the normal ways before you transform (heavy attacks, taking hits, Ultimate-generation CP/sets) and you'll hold the form far longer.

## Passives — buy all of them

*World → Werewolf.* Rule of thumb: **every werewolf passive, always.**

!!! danger "All six passive names on this page were wrong until 2026-09-30"
    This guide listed *Pursuit, Devour, Savage Strength, Call of the Pack, Bloodmoon* — pre-rework names, five of the six. The live names and effects, read off ESO-Hub's Werewolf line page:

| Passive | *This page used to call it* | What it actually does |
|---|---|---|
| **Insatiable Hunger** | Devour | Devour corpses for up to 4s: each second heals **3,200** off Max Health and restores **15 Ultimate**. On Berserker, each tick also generates Fury |
| **Master of the Chase** | Pursuit | **+30% Movement Speed**, and **Heavy Attacks restore 50% more Stamina** — a real answer to the U51 cost rises |
| **Blood Rage** | *(correct)* | **+10** to the Fury you generate, so Rampage comes sooner |
| **Feral Cruelty** | Savage Strength | **+20% Weapon and Spell Damage** (10% against players) **and Major Resolve** — +5,948 Physical and Spell Resistance. It's a damage *and* defence passive; we had it down as damage only |
| **Call of the Hunt** | Call of the Pack | Cuts the form's upkeep **16%, +16% per transformed werewolf or direwolf in your group including you, max 80%** — the table above |
| **Shadow of the Bloodmoon** | Bloodmoon | Infect another player with Lycanthropy **once per week** at the ritual site — how you'd turn each other |

Buy the Fighters Guild passives too (Slayer especially).

## Gear

Werewolf can't bar-swap, so it's **one loadout**: armor + jewelry + equipped weapons' set bonuses all apply in form. The shape is **5× Deadly Strike + 5× Order's Wrath + one monster helm + Ring of the Pale Order** — the same arrangement as [her Pack Leader sheet](../one-bar-builds/werewolf.md), because it's the only one that fits.

**Deadly Strike must be 5 pieces.** Its 15% channelled/DoT bonus is the *entire* reason it's on a Claw Fury build — Claw Fury is a real channel — and at 4 pieces you get stat lines and none of the point. Earlier versions of this page tabled it at 4; that's fixed below. ⚠️ **One live question:** Claw Fury's U51 tooltip now says its damage "is considered direct damage," which is not obviously the same category Deadly Strike buffs. The ability is still a channel, so it should still count — but **parse it with and without the 5-piece before you spend gold**, because if it doesn't, this set has no reason to be here. Flagged 2026-09-30.

**Balorgh is no longer the default.** It appears in no current U50 werewolf build, and its "scale off the Ultimate you spent" proc is a much worse bet now that Ultimate drains continuously to hold the form rather than being dumped once. Run a **single stat helm** instead (Slimecraw's 657 Crit Chance if you own it, or a penetration helm if you're under the cap).

**Armor weight: 5 Medium / 1 Light (belt) / 1 Heavy (chest)** — the split triggers all three tiers of **Undaunted Mettle** (max Health/Magicka/Stamina per *distinct* weight worn).

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Medium | Divines | Stamina | **Slimecraw** **(1pc monster — 657 Crit Chance)** |
| Shoulders | Medium | Divines | Stamina | **Order's Wrath** |
| Chest | Heavy | Reinforced | Stamina | **Order's Wrath** |
| Hands | Medium | Divines | Stamina | **Order's Wrath** |
| Belt | **Light** | Divines | Stamina | **Order's Wrath** |
| Legs | Medium | Divines | Stamina | **Order's Wrath** |
| Boots | Medium | Divines | Stamina | **Deadly Strike** |
| Necklace | — | Bloodthirsty | Weapon Damage | **Deadly Strike** |
| Ring 1 | — | Bloodthirsty | Weapon Damage | **Deadly Strike** |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Weapons (2H or dual) | — | Nirnhoned / Charged | Weapon Damage / Poison | **Deadly Strike** (a 2H or a dual-wield pair = 2 pieces) |

*Deadly Strike = boots + necklace + ring + both weapon slots (5 — the channel buff is live). Order's Wrath = shoulders/chest/hands/belt/legs (5). Helm + mythic ring fill the last two slots.*

*Why only one monster piece: Ring of the Pale Order takes the mythic slot, and 12 gear slots only stretch to 5 + 5 + 1 monster + 1 mythic. So the helm is a **pure stat line** — Slimecraw's 2-piece Minor Berserk can never fire here. If your Offensive Penetration is under the 18,200 cap, Valkyn Skoria's 1-piece (1,487 Offensive Penetration) is the better stat. See [Gear slot math](../shared/gear-math.md). In-game tooltips override — confirm on the bar.*

**Group content:** in grouped content with a healer, drop **Pale Order** — its heal drops 4% per grouped ally — and use the freed ring to complete a **2-piece monster set** (helm + shoulders), which is the better trade in a group. Same call as every other build in this repo; the math is in [Gear slot math](../shared/gear-math.md).

**Mundus:** The Thief (crit) → The Lover for penetration
**Attributes:** 64 Stamina (shift to Health for the nastiest fights)
**Food:** Max Health + Stamina (Orzorga's Smoked Bear Haunch)
**Race:** whatever the character already is — the spread is ~5%

## Champion Points — Spend Order (1200 → 1800)

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

    Take **whichever of War Mage / Mighty matches your damage type**, plus the matching status-effect star. **For werewolf that's Mighty and Battle Mastery** — every werewolf ability deals Physical or Bleed damage, both Martial. (Compare the Dragonknights, which are Flame/Magical since U49 and want War Mage.)

    Fitness also leaves out **Tireless Guardian** (Block costs 20 less Stamina per stage, max 20), **Savage Defense** (Bash costs 45 less per stage, max 30) and **Fortification** (+2% damage blocked per stage, max 30) — all of which earn their place if you block a lot in melee.

    **The rule that follows: remaining passives outrank every "swap option" row.** A passive works every second of every fight; a fifth slottable does nothing at all unless you un-slot something for it. And because re-slotting is **free** out of combat and a full respec costs only **3,000 gold**, there is no reason to pre-buy a configuration you merely *might* want later — buy it when you need it.

    *Star costs and effects verified 2026-09-26 against esodecoded.com's datamined star pages.*

### 🔵 BLUE (Warfare)

**Slot (4):** Master-at-Arms · Backstabber · Deadly Aim · Wrathful Strikes — the damage slots sit near the center, so they come first.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Master-at-Arms** | **SLOT** (50) | +direct damage |
| 2 | **Backstabber** | **SLOT** (50) | +damage vs Off Balance — Ferocious Roar sets enemies Off Balance |
| 3 | **Deadly Aim** | **SLOT** (50) | +single-target damage |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | **Mighty** | buy max (30) | **+100 Weapon and Spell Damage to Martial attacks** — Physical, Poison, Disease, Bleed. **Werewolf is entirely Physical and Bleed, so Mighty is the werewolf answer, not War Mage.** Same **Extended Might** cluster as Piercing above, so you're already standing there |
| 8 | **Battle Mastery** | buy max (40) | +30% per stage to apply a **Martial** status effect — the match for Mighty above, and the one werewolf wants. Also Extended Might |
| 9 | Eldritch Insight | buy max (20) | max magicka |
| 10 | Tireless Discipline | buy max (20) | max stamina |
| 11 | Blessed | buy max (20) | your heals hit harder |
| 12 | Quick Recovery | buy max (20) | healing received |
| 13 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 14 | Elemental Aegis | buy max | −elemental damage |
| 15 | Preparation | buy max | −damage, always on |
| 16 | **Reaving Blows** | buy (50), swap option | turns the Claw Fury channel into a lifedrain (stacks with Pale Order) |
| 17 | Ironclad | buy (50), swap option | −direct damage; in for Wrathful Strikes on hard hitters |
| 18 | Enduring Resolve | buy (50), swap option | −DoT damage for DoT-heavy fights |

*Everything above the swap-option rows is the 1200 budget; the swap rows come online later.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Rejuvenation · Bloody Renewal — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | **Rejuvenation** | **SLOT** (50) | resource recovery |
| 4 | Hero's Vigor | buy max | max health |
| 5 | **Tireless Guardian** | buy max (20) | Block costs **20 less Stamina per stage — up to 400 less per block.** A central star, reachable this early, and the best answer to a melee build bleeding Stamina on defence |
| 6 | **Fortification** | buy max (30) | +2% damage blocked per stage — also central. **Savage Defense** (−45 Stamina per stage off Bash, max 30) is the third of this group |
| 7 | Tumbling | buy max | cheaper dodge rolls |
| 8 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 9 | **Bloody Renewal** | **SLOT** (50) | stamina on kills — you kill a lot as a wolf |
| 10 | Defiance | buy max | mitigation |
| 11 | Mystic Tenacity | buy max | less stun/fear time |
| 12 | Bracing Anchor | buy (50), swap option | block-heavy fights |
| 13 | Celerity | buy (50), swap option | movement-heavy fights |
| 14 | Pain's Refuge | buy (50), swap option | −damage while debuffed — nasty-boss swap |
| 15 | Siphoning Spells | buy (50), swap option | magicka sustain if a fight demands it |

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

## How to play

The sweep, post-U51 — the change from the old rotation is that **Roar and Pounce are cooldowns now, not fillers**:

1. Pre-buff on your normal bars, build to at least 100 Ultimate, then **press the transformation ultimate**.
2. **Pounce in** to close the gap — once. At 3,213 Stamina it's a commitment, not an opener you repeat. *(This page used to tell you to open out of "Prowl" for +50% damage and a stun; that's unverified — see the flag above.)*
3. **Ferocious Roar** — fear, 7s of Off Balance (which Backstabber in your Blue CP is keyed to), Major Courage, and **two free Blood Hunger stacks**. 3,443 Stamina, so this is one press per pack, not per rotation.
4. **Hold Claw Fury to the end of the channel.** Every second adds a **Blood Hunger** stack worth **+25% damage** and heals you 1,675 — clipping it throws both away. This is where you live: it's the cheapest thing on the bar and it does damage, healing, Fury and stacks at once.
5. **Rip and Tear** to spend the channel — **Major Breach for 15s, Sundered, a 3,414 heal, and 125% more damage if the target is under 25% Health.** The Blood Hunger stack makes the *heal* 25% bigger, not the hit. *(On Bloody Gnash instead, it's the hit.)*
6. **When Fury hits 1,000, Rampage fires** — +15% damage, +20% speed, and **every werewolf ability free for 20 seconds**. That's your window: dump Roar and Pounce in it while they cost nothing.
7. **Hircine's Rage when health dips** — remembering it also raises your damage taken *and* is weakest when your Health is already low, so it's a heal-and-burst, not a panic button. (Running **Hircine's Fortitude** instead? Then it *is* the panic button — a bigger heal, +12% to every other heal you take, no penalty. Given how this repo weights survivability, Fortitude is the better default and Rage is the parse pick.)
8. **Watch your Ultimate, not a timer.** **Devour a corpse** between packs — up to 4 seconds for 60 Ultimate and a big heal.

## Turning each other into werewolves

You catch Lycanthropy from a Werewolf world boss in **Bangkorai / Reaper's March / The Rift** at night, or a bite from another player. Once one of you is a werewolf, the **Shadow of the Bloodmoon** passive lets that person **bite the other** (once per week) at the werewolf ritual site — so you only need to get infected once, then you can turn each other. Do the short Werewolf questline after infection to unlock the skill line.

## Companion

**Default: Isobel (Tank)** to hold aggro while you go in melee, or **Sharp-as-Night (Healer)** as a backstop. See `../shared/companions.md`.

---

*Sources: **every skill and passive on this page was read off ESO-Hub's individual Werewolf skill pages and the Werewolf line page on 2026-09-30** (live U51 tooltips), and the cost and healing changes come from the U51 patch notes. Build shape and gear from the [Hyperioxes U50 solo Werewolf build](https://hyperioxes.com/eso/solo/werewolf-build); also Hack the Minotaur's U50 Werewolf guide, [Alcast Werewolf Build](https://alcasthq.com/eso-werewolf-build-pve/) and [ESO-Hub's Werewolf guide](https://eso-hub.com/en/guides/becoming-a-werewolf). **This page has been wrong before** — about the form timer, the Rampage trigger, two skill names, five of six passive names, and which Gnash morph Blood Hunger buffs — so treat every name here as "checked, not sacred" and let your in-game tooltips decide. Two things remain flagged and unverified: the "Prowl" opener and whether Rip and Tear taunts while blocking. Revised 2026-09-30.*
