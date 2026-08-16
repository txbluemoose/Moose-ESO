# Pure Stamina Sorcerer Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Stamina Sorcerer, pure class (no subclass), Class Mastery active
**Verified against:** Hyperioxes U50 *Solo Stamina Sorcerer* (soloed vet HM Scalecaller Peak, ~69.9k on the 6M dummy) plus Alcast/ESO-Hub/UESP for individual skills and the U50 Class Mastery pass. Hyperioxes and ESO-Hub are egress-blocked from this machine, so morphs were confirmed off search snippets, not the live page — anything I couldn't fully pin is flagged ⚠️. Revision date at the bottom.
**Philosophy:** A crit-fueled self-healing engine. **Critical Surge** heals you every time you crit (once a second), **Hurricane** wraps you in Major Resolve and a growing physical AoE, and **Pale Order** stacks heal-per-damage on top. You crit constantly, so you heal constantly — staying alive is mostly automatic, and Crystal Weapon shreds armor so everything else lands harder.

> **Confidence key:** ✅ verified against a current U50 source · ⚠️ confirm the exact morph/numbers on your own bar (in-game tooltips beat every guide, including this one).

**Weapon note:** this is the **melee** Stam Sorc — dual daggers, medium armor, up close, the household default. It shares its whole skeleton (Hurricane / Critical Surge / Bound Armaments / Greater Storm Atronach) with your [Magicka Sorcerer](magicka-sorcerer.md) — same class, stamina stat. If you want the *magicka* flavor of this class instead, that guide is the sibling.

---

## 0. Class Mastery (pick 2 — stay pure class)

Subclassing disables Class Mastery entirely (you'd lose both picks). You are pure class for exactly this reason — never subclass this character. All four Sorcerer masteries scale off your **higher** of Max Magicka/Stamina, so they work fully on a stamina build. ✅

| Situation | Mastery 1 | Mastery 2 |
|---|---|---|
| **Default (daggers)** | **Conservation of Energy** — upgrades Blood Magic to refund on *any* costed ability and restores ~400 Magicka **+389 Stamina** per proc. This is your sustain engine, and it directly answers the stamina-shortfall problem that plagues your DK. | **Font of Power** — upgrades Exploitation to work on any Sorc ability and grants **+11% Weapon/Spell Damage** for 10s (scales off your Max Stamina). Your biggest single damage pick, costs nothing defensive. |
| **Need survivability** | Conservation of Energy | **Calculated Defense** replaces Font of Power — a Max-Health damage shield every time you start a cast, plus 3% Weapon/Spell Damage to you and nearby group if it holds. |
| **Execute-heavy / add packs** | Conservation of Energy | **Static Reverberation** replaces Font of Power — chance-on-damage Shock proc that scales with the target's missing health (the old Implosion, tuned down). Big in the last 30%. |

*Masteries verified vs Alcast's U50 Class Mastery breakdown — ⚠️ confirm the live numbers on your bar; ZOS tunes these between seasons.*

---

## 1. SOLO PvE — Skills

### Base Setup

| Front Bar (Dual Daggers*) | Back Bar (Bow) |
|---|---|
| 1. **Crystal Weapon** (morph of Crystal Shard, *Dark Magic*) — stamina spammable; second hit **shreds the target's armor** ✅ | 1. **Hurricane** (morph of Lightning Form, *Storm Calling*) — **Major Resolve** + Minor Expedition + a physical AoE that ramps up to +120% damage the longer it's up ✅ |
| 2. **Rending Slashes** (morph of Twin Slashes, *Dual Wield*) — physical bleed DoT + Minor Maim on the target (they hit *you* softer) ✅ | 2. **Endless Hail** (morph of Volley, *Bow*) — ground physical DoT; carries your back-bar weapon enchant ✅ |
| 3. **Deadly Cloak** (morph of Blade Cloak, *Dual Wield*) — AoE physical DoT **+ Minor Protection (−5% damage taken while slotted)** ✅ | 3. **Poison Injection** (morph of Poison Arrow, *Bow*) — poison DoT that deals **up to +120% more to enemies under 50% health** — your execute ✅ |
| 4. **Bound Armaments** (morph of Bound Armor, *Daedric Summoning*) — **Major Savagery/Prophecy** (crit) passively; light/heavy attacks build stacks, **fire at 4** ✅ | 4. **Barbed Trap** (morph of Trap Beast, *Fighters Guild*) — **Minor Force** (+10% crit damage) + DoT ✅ |
| 5. **Critical Surge** (morph of Surge, *Storm Calling*) — **Major Brutality/Sorcery** + **heals you ~3300 on any crit, once per second** — the survivability core ✅ | 5. **Resolving Vigor** (morph of Vigor, *Assault*) — burst self-heal; Minor Resolve. *Scribed alt if you'd rather: a self-heal grimoire — you have scribing.* ⚠️ |
| **Ult: Greater Storm Atronach** (morph of Summon Storm Atronach, *Daedric Summoning*) — big Shock hit + stun; ally can pop **Charged Lightning** for Major Berserk | **Ult: Greater Storm Atronach** — same ult both bars so it's always ready |

*\*Dual daggers are the household default — best damage, up close, where you like to play. The **bow lives on the back bar** purely to load DoTs (Endless Hail, Poison Injection) and hold your buffs; you spend the fight on the front daggers bar. Prefer to fight at range full-time? The class also runs as a two-staff/bow-front magicka build — see the [Magicka Sorcerer](magicka-sorcerer.md) sibling.*

### Situational swaps (line sources called out)
- **Razor Caltrops** (*Alliance War > Assault*) — AoE DoT **+ Major Breach** on trash; in for Barbed Trap when you want the group-style penetration
- **Hardened Ward** (morph of Conjured Ward, *Daedric Summoning*) — a big 6s shield; in for Deadly Cloak on a scary boss (shield + Pale Order + Critical Surge = very hard to kill)
- **Streak / Bolt Escape** (*Storm Calling*) — the class teleport; mobility fights or cheesing mechanics (Storm Calling's escape is the best in the game)
- **Camouflaged Hunter** (*Fighters Guild*) — Minor Berserk + a burst, if you drop Slimecraw
- **Precognition ult** (*Psijic Order*) — the solo-impossible-stun breaker (Zaan, etc.)

### Rotation (priority sweep — not a step counter)
Play it as **two sweeps**, not a 12-step list:

- **Back-bar sweep (every ~10s, or when a DoT drops):** Greater Storm Atronach when ready → Hurricane → Endless Hail → Poison Injection → Barbed Trap → swap.
- **Front-bar sweep (where you live):** light-attack-weave **Crystal Weapon** as your spammable, refresh **Rending Slashes** and **Deadly Cloak** when they expire, **fire Bound Armaments at 4 stacks**, and **keep Critical Surge up** (recast ~1s early — it's your heartbeat heal). Vigor whenever you dip.

**Pre-buff (before the pull):** Critical Surge → Hurricane → Bound Armaments (start stacking) → Deadly Cloak.

**Your stamina note:** Conservation of Energy + Bound Armaments both reward clean **light-attack weaving** — the same weave gap that starves your DK will starve this character too. If sustain feels tight, the fix is the weave and casting Critical Surge on time, **not** more recovery gear. Absorb Stamina glyph on the back-bar bow is the gear-side backstop if you still need it.

---

## 2. GEAR

**Armor weight: 5 Medium / 1 Light / 1 Heavy** — Medium for the stamina damage passives (Dexterity crit, Wind Walker stamina recovery — useful since blocking/rolling drains stamina), one Light and one Heavy so all three tiers of **Undaunted Mettle** fire (max Health/Magicka/Stamina per *distinct* weight worn). This is the melee/medium household default.

| Slot | Weight | Trait | Enchant | Set | Notes |
|---|---|---|---|---|---|
| Head | Medium | Divines | Stamina | Slimecraw (1pc monster) | you own it — Minor Berserk |
| Shoulders | Light | Divines | Stamina | Order's Wrath | your husband crafts it |
| Chest | **Heavy** | Divines | Stamina | Order's Wrath | the Heavy Mettle tier |
| Hands | Medium | Divines | Stamina | Order's Wrath | |
| Belt | Medium | Divines | Stamina | Order's Wrath | |
| Legs | Medium | Divines | Stamina | Order's Wrath | |
| Boots | Medium | Divines | Stamina | Deadly Strike | |
| Necklace + Ring 1 | — | Bloodthirsty | Weapon Damage | Deadly Strike | |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** | heal-per-damage — a fixture, never dropped for solo |
| Front daggers | — | Nirnhoned / Sharpened | Poison + Weapon Damage | Deadly Strike (2 pieces) | melee default |
| Back bow | — | Infused | Weapon Damage (or Absorb Stamina) | Deadly Strike (2 pieces) | keeps Deadly Strike at 5pc on **both** bars |

*Because **both** weapon sets are Deadly Strike, you keep the full 5-piece on the front daggers bar AND the back bow bar — no dead-bar problem. **Deadly Strike boosts DoT/channeled/ultimate damage by 15%**, and this build is a pile of DoTs (Hurricane, Endless Hail, Poison Injection, Rending Slashes, Deadly Cloak) — so it's near-BiS *and* craftable. **Order's Wrath** (5 body) is crit damage + crit chance, also craftable. Slimecraw 1pc + Pale Order finish it. Everything here is owned or your husband makes it — buildable today. In-game tooltips override.*

**Fallback ladders (owned first):**
- Body: Order's Wrath → **Ansuul's Torment** (Sanity's Edge, ~+3–4% single target) → the Sorc class set for a class-set build (Infinite Archive) → any crafted crit set while you farm
- Weapons/jewelry: Deadly Strike (craftable, near-BiS for DoTs) → **Aegis Caller** / **Sul-Xan's Torment** trial swaps → **Master's Bow** on the back bar to super-charge Endless Hail
- For a pushed parse, check the live [Hyperioxes Stamina Sorcerer solo build](https://hyperioxes.com/eso/solo/stamina-sorcerer-build) — it's the primary source and gets re-tuned each season; the Order's Wrath + Deadly Strike core above is the "buildable today, clears everything" answer.

**Mundus:** The Thief (crit) → **The Lady** for brutal content (more resistances alongside Hurricane)
**Attributes:** 64 Stamina → shift toward Health (only ~−6%) as fights demand
**Food:** a Stamina + recovery dish (e.g. Lava Foot Soup-and-Saltrice, or Artaeum Takeaway Broth for tri-stat) — Conservation of Energy covers most of your sustain
**Potions:** Weapon Power potions default (Dragonthorn + Blessed Thistle + Wormwood → Weapon Crit + Weapon Power + stamina return); Immovability pots for stun-heavy fights
**Race:** whatever the character already is — the spread is ~5%. **Redguard** is the only race with a real stamina-sustain passive if you're ever rerolling and the shortfall persists; otherwise leave it.

---

## 3. GROUP CONTENT — adaptation notes

Works as-is in normal/vet 4-mans. To optimize for a real group: **drop Pale Order** for the 3rd Deadly Strike / trial-set jewelry (a group healer covers the heal), **drop Poison Injection or Barbed Trap** for whatever penetration the tanks *don't* already provide, and lean **Font of Power** over Calculated Defense on the Class Mastery (its group Weapon/Spell Damage matters less when you're already stacking raid buffs). Swap the Heavy piece back to Medium for the 6 Medium / 1 Light instanced split once you don't need the survivability. For current trial parses, use the live group Stam Sorc builds at hyperioxes.com/eso/sorcerer-builds rather than this solo sheet.

---

## 4. PvP (Cyrodiil & Battlegrounds)

Stam Sorc is a strong bursty duelist — Streak mobility, Crystal Weapon burst, and Critical Surge self-healing all carry straight from PvE. Verified directionally against **Alcast's U50 Stamina Sorcerer PvP** build; **metas rotate seasonally**, so confirm current pieces before spending gold — this is directional, not a copy-paste.

**What carries over:** **Streak / Bolt Escape** (best escape in the game), **Crystal Weapon → Dizzying/Executioner** burst combos, **Hurricane** for the passive AoE + Major Resolve, **Critical Surge** healing, and **Hardened Ward** shield stacking off the Daedric Summoning line.

**Setup (directional):** ~30k health, **Impen** traits, a burst proc set + a defensive/recovery set, and a survival mythic if you want to lean tanky.

**PvP CP:** Blue — swap toward Ironclad + Duelist's Rebuff. Red — Boundless Vitality, Fortified, **Bastion** (for Ward), Pain's Refuge.

*Source: Alcast U50 Stamina Sorcerer PvP build — season metas rotate; the live page and in-game tooltips override. (Alcast is WebFetch-blocked here; search-snippet-level only — treat as directional.)*

---

## 5. Champion Points — Spend Order (1200 → 1800)

At CP 1200 you have ~400 points per color; at 1800, ~600. Follow each table **top to bottom** — trust the order, not the math. Stars marked **SLOT** go in your 4 active slots per tree; everything else is passive once purchased.

### 🔵 BLUE (Warfare)

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Deadly Aim** | **SLOT** (50) | +single-target damage — your DoTs and Crystal Weapon |
| 2 | **Master-at-Arms** | **SLOT** (50) | +direct damage (Crystal Weapon, Bound Armaments, light attacks) |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits — and you crit nonstop (Critical Surge + Bound Armaments) |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | Tireless Discipline | buy max (20) | max stamina |
| 8 | Eldritch Insight | buy max (20) | max magicka (feeds Conservation of Energy) |
| 9 | Blessed | buy max (20) | your heals hit harder |
| 10 | Quick Recovery | buy max (20) | healing received |
| 11 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 12 | Elemental Aegis | buy max | −elemental damage |
| 13 | Preparation | buy max | −damage, always on |
| 14 | **Reaving Blows** | buy (50), swap option | heals off direct damage — the HPS swap for scary fights |
| 15 | Thaumaturge | buy (50), swap option | +DoT damage — in for Master-at-Arms on DoT-heavy trash |
| 16 | Ironclad / Duelist's Rebuff | buy (50), swap options | mitigation for specific hard hitters |

*Items 1–13 ≈ your 1200 budget (400/tree). Items 14–16 fill in by 1600–1800.*

### 🔴 RED (Fitness)

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | **Rejuvenation** | **SLOT** (50) | resource recovery |
| 4 | **Bloody Renewal** | **SLOT** (50) | **stamina back on kills** — add-heavy sustain, targets your shortfall |
| 5 | Hero's Vigor | buy max | max health |
| 6 | Tumbling | buy max | cheaper dodge rolls (you dodge on stamina) |
| 7 | Defiance | buy max | mitigation |
| 8 | Mystic Tenacity | buy max | less stun/fear time |
| 9 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 10 | Siphoning Spells | buy (50), swap option | resources on kills |
| 11 | Bracing Anchor | buy (50), swap option | block-heavy fights |
| 12 | Celerity | buy (50), swap option | movement-heavy fights |
| 13 | Pain's Refuge | buy (50), swap option | −damage while debuffed — nasty-boss swap |

*Items 1–9 ≈ your 1200 budget; 10–13 are fight-specific swaps toward 1800. PvP: slot Bastion for the Ward.*

### 🟢 GREEN (Craft)

| # | Star | Action |
|---|---|---|
| 1 | **Steed's Blessing** | **SLOT** (50) — out-of-combat speed |
| 2 | Treasure Hunter | buy (needs ~35 connector points) — better chest loot |
| 3 | Gilded Fingers | buy — more gold |
| 4 | Liquid Efficiency | buy — potions/poisons sometimes not consumed |
| 5 | Meticulous Disassembly | buy — better refining |
| 6 | Anything else | taste — nothing here affects combat |

---

## 6. SHOPPING LIST
1. **Deadly Strike** (craftable — 8 traits, at a Malacath/Wrothgar station) — daggers + bow + 2 jewelry + boots; your husband makes it, near-BiS for this DoT build
2. **Order's Wrath** (craftable — Clockwork City station) — 5 body; also already yours
3. **Slimecraw** 1pc helm — account-wide, already yours
4. **Ring of the Pale Order** — account-wide, already yours
5. **Master's Bow** (vet Dragonstar Arena) — optional back-bar upgrade for Endless Hail once you want to push
6. **Scribing** (you have it from the DK) — covers the flexible slot-5 self-heal option

**Efficiency note:** this build is fully craftable from sets you already own — no farm required to reach "clears everything." The trial-set upgrades (Ansuul's, Aegis Caller) are strictly optional polish.

*Source: Hyperioxes U50 Solo Stamina Sorcerer (primary, verified via search snippets — the live page is egress-blocked here), Alcast U50 Class Mastery + Stam Sorc pages, ESO-Hub/UESP for individual morphs. Skills marked ⚠️ need an in-game tooltip check. Trust in-game tooltips over any guide. Revised 2026-08-16.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order: Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you (worth more than any companion heal given Pale Order already heals you), and her Penetrating Strikes buffs your light-attack weaving — the same weaving that fixes your sustain.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that can free a bar slot. **Azandar (Tank)** brings Major AND Minor Vulnerability, best-rated for Infinite Archive.

**Craft Telvanni Efficiency** (5pc crafted) and wear it as a dedicated farming loadout when the companion is doing the real work — it halves their ability cooldowns. Swap back to Deadly Strike when you're carrying.

Full details for all eight companions, including farming perks and gear traits: see `shared/companions.md`.
