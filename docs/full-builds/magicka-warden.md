# Pure Magicka Warden Master Guide — Update 50
### Solo PvE • Group Content • PvP • CP Roadmap (1200 → 1800)

**Character:** Magicka Warden, pure class (no subclass), Class Mastery active
**Verified against:** morph names cross-checked against ESO-Hub / UESP / Alcast (U50). **Provenance, honestly:** these bars were **constructed here** from the household's verified [Stamina Warden](stamina-warden.md) chassis rebuilt around magicka — they were not taken from a published build. A real published pure-class U50 Magicka Warden solo build **does** exist at <https://hyperioxes.com/eso/solo/magicka-warden-build> (clears vHM Scalecaller Peak, vHM Falkreath Hold, vCastle Thorn, vFrostvault) — **re-verify this page against it** before committing gold. Frost-themed DPS with class-native heals stacked on Pale Order.
**Philosophy:** Kick ass and don't die. Warden is a *naturally tanky* class — your class heals (**Polar Wind**, **Enchanted Growth**) and Northern Storm's Major Protection are layered on top of Pale Order, so damage that heals you plus real burst heals mean you rarely fall over. Survivability is weighted above raw DPS; a 2–5% parse gap is noise.
**Weapon note:** this is the **melee** Magicka Warden — dual daggers front, ice staff back, up close, all content. The staff is your *ranged option*, not the default (swap the daggers to an inferno/lightning staff and nothing else changes). Want a full stamina Warden instead? → [Stamina Warden](stamina-warden.md).

> **Confidence key:** Skill names and morph sources are verified against current U50 tooltips (ESO-Hub / UESP / Alcast). The Solo PvE bars are **household-constructed** from the Stamina Warden chassis, not lifted from a published build — check them against the live Hyperioxes Magicka Warden solo build linked above. Group and PvP sections are directional. In-game tooltips beat every source, including this file.

---

## 0. Class Mastery (pick 2 — stay pure class)

Subclassing disables this system entirely, and you lose two mastery passives with nothing native to replace them. Stay pure class.

| Mode | Mastery 1 | Mastery 2 | Situational swap |
|---|---|---|---|
| Solo PvE / Group | **Wild Adaptation** (+333 Weapon/Spell Damage per status effect on the target, max 1665 — you stack Burning/Chilled/Concussed constantly, so it caps fast) | **Glacial Obstinance** (Bond with Nature also triggers on Winter's Embrace casts; +15% Weapon/Spell Damage for 10s if you're at full Health after the heal) | **Green-Keeper's Hide** replaces Glacial Obstinance when you want more "don't die" — −3% damage taken per status effect on your attacker (max −15%) |

*Verified vs ESO-Hub/Alcast U50 — confirm the exact numbers on your bar.*

---

## 1. SOLO PvE — Skills

Front bar is where you live (dual daggers, up close). Back bar is "cast the ground stuff and swap forward." Five of your slots are **Animal Companions** abilities — every one slotted adds crit damage via **Advanced Species**, so the bar buffs itself.

### Base Setup

| Front Bar (Dual Daggers*) | Back Bar (Ice Staff) |
|---|---|
| 1. Wield Soul (scribed grimoire, *Soul Magic*; scripts: Frost / **Druid's Resurgence** / Resolve) | 1. Blue Betty (morph of Betty Netch, *Animal Companions*) |
| 2. Deep Fissure (morph of Scorch, *Animal Companions*) | 2. Winter's Revenge (morph of Impaling Shards, *Winter's Embrace*) |
| 3. Fetcher Infection (morph of Swarm, *Animal Companions*) | 3. Elemental Susceptibility (morph of Weakness to Elements, *Destruction Staff*) |
| 4. Traveling Knife (scribed grimoire, *Dual Wield*; scripts: Poison / Assassin's Misery / Force) | 4. Elemental Blockade (morph of Wall of Elements, *Destruction Staff*) |
| 5. Polar Wind (morph of Arctic Wind, *Winter's Embrace*) | 5. Enchanted Growth (morph of Fungal Growth, *Green Balance*) |
| **Ult:** Wild Guardian (morph of Feral Guardian, *Animal Companions*) — *slotted **only** for the Advanced Species crit-damage passive, which comes from **slotting** an Animal Companions ability, not from summoning. Don't summon it, don't spend Ultimate on it. ⚠️ Confirm Feral Guardian's Ultimate cost on the tooltip in-game* | **Ult:** Northern Storm (morph of Sleet Storm, *Winter's Embrace*) — AoE damage, **50 Weapon/Spell Damage per tick stacking to 450**, and **Major Protection (−10% damage taken)** |

**What each does:**
- **Wield Soul** — your spammable, and the same one your Stam Warden runs. With the **Druid's Resurgence** script it restores **600 Stamina and Magicka per cast**, so your filler button is also your sustain. (You scribe, so this costs you nothing but a grimoire slot.)
- **Traveling Knife** — the build's only source of **Minor Force (+10% Critical Damage)**, which matters a lot on a crit-stacked Warden. **Deliberately overcast it** — press it more often than its duration needs. It costs *Stamina*, so every extra cast is damage you're paying for out of the resource pool you aren't using, which quietly props up your Magicka sustain. Dual Wield line, so it can only live on the dagger bar.
- **Deep Fissure** — delayed burst that applies **Major AND Minor Breach** (your armor shred, no group needed). Fire it on cooldown; the resurface hit is big.
- **Fetcher Infection** — a DoT that also applies **Minor Vulnerability** (+5% damage taken on the target), and every second cast hits 60% harder. Cheap, long, refresh on the blink.
- **Polar Wind** — burst heal that **scales off your max Health**, not the target's — your panic button, and it gets stronger the tankier you build.
- **Blue Betty** — magicka back over time (your sustain), **Major Sorcery** (spell damage), and every 5s it either purges a debuff off you or buffs your damage. It lives on the back bar because it's a ~20s cast-and-forget, not something you press in the fight.
- **Winter's Revenge** — ground DoT with an elevated status-proc chance; enormous when it's stacking Chilled procs (which feed Wild Adaptation).
- **Elemental Susceptibility** — free to cast; applies Burning + Chilled + Concussed plus **Major Breach**. It does **not** give Minor Magickasteal — that's **Elemental Drain**, the *other* morph of Weakness to Elements. Its real job here is *feeding status effects* to Wild Adaptation and keeping Major Breach at near-100% uptime between Deep Fissure casts.
- **Elemental Blockade** — ice ground DoT; with the ice staff it keeps everything Chilled (Minor Brittle via Glacial Presence passive).
- **Enchanted Growth** — a heal that also grants **Minor Intellect + Minor Endurance** (magicka/stamina recovery) — layered healing plus a sustain top-up in one button.
- **Advanced Species** — +5% crit damage per slotted Animal Companions ability, counted **per bar**. Front bar: Deep Fissure, Fetcher Infection, Wild Guardian (three). Back bar: Blue Betty. That's why Wild Guardian just sits slotted. Adding Wield Soul and Traveling Knife costs you two Animal Companions slots up front — you're trading ~10% crit damage for Minor Force plus a spammable that refunds 600 of each resource, which is the better deal on a build with no other Minor Force and no sustain skill besides Blue Betty.

*\*Dual daggers are the default — best damage and the up-close playstyle you run. Dagger enchants: main-hand **Poison**, off-hand **Absorb Magicka** (feeds sustain alongside Blue Betty). The ice back bar is correct — it powers Elemental Blockade + the Chilled procs that Wild Adaptation eats. Prefer to fight at range? Swap the two daggers for an **inferno or lightning staff** front bar — Traveling Knife comes off (Dual Wield line) and **Screaming Cliff Racer** takes its slot, with its distance bonus and Off Balance now actually online; the rest of the rotation is identical, and you shift toward Light armor. There's no separate ranged guide for Warden.*

### Situational swaps (with skill line sources)
- **Screaming Cliff Racer** (morph of Dive, *Animal Companions*) — the **ranged** spammable, and the reason it isn't the default: it only sets an enemy Off Balance **beyond 7 metres**, and its 100 Weapon/Spell Damage buff **quadruples to 400 only after you damage an Off Balance enemy**. Standing in melee — your normal playstyle — forfeits *both*, leaving a plain spammable with no sustain return. Take it on the ranged staff variant, where it's excellent; on daggers, Wield Soul wins.
- **Ulfsild's Contingency** (scribed grimoire, *Soul Magic*; scripts: Frost / Lingering Torment / Resolve) — a delayed-detonation DoT; comes in for Enchanted Growth or Winter's Revenge when you want more damage than healing. **No scribing on a given character?** **Frozen Armor** (below) is the non-scribed answer, and **Screaming Cliff Racer** replaces Wield Soul as the spammable.
- **Frozen Armor** (morph of Frost Cloak, *Winter's Embrace*) — Major Resolve (armor); the non-scribed answer and a flat survivability gain for hard fights
- **Budding Seeds** (morph of Healing Seed, *Green Balance*) — a HoT field + burst bloom for sustained-pressure fights; replaces Enchanted Growth when you want more raw healing than recovery
- **Arctic Blast** (other morph of Arctic Wind, *Winter's Embrace*) — trades Polar Wind's pure burst heal for a heal-**and**-stun AoE DoT; take it when you need to peel adds
- **Shimmering Shield** (morph of Crystallized Shield, *Winter's Embrace*) — absurd shield vs projectiles only; situational but build-defining where it works
- **Resolving Vigor** (*Alliance War > Assault*) — an off-class HoT for invulnerability phases where Pale Order can't heal you (it only heals when you're dealing damage)
- **Precognition ult** (*Psijic Order guild line, Summerset*) — mandatory for a few solo-impossible stuns (Zaan etc.)

### Rotation — a sweep, not a checklist
Think of it as **"lay the ground, then live on the front bar."**

1. **Back bar, top to bottom:** Blue Betty (only every ~20s) → Winter's Revenge → Elemental Susceptibility → Elemental Blockade → Enchanted Growth. Fire **Northern Storm** here when it's up.
2. **Swap to daggers.** Deep Fissure → Fetcher Infection → Traveling Knife.
3. **Spam Wield Soul**, and re-press **Traveling Knife** whenever there's a spare GCD — overcasting it is intentional, since its Stamina cost is free damage from a pool you aren't spending. That's your filler and light-attack weave.
4. **Getting hurt? Polar Wind.** It heals off your max health — press it and keep going.
5. When the back-bar DoTs blink (~10–20s), swap back, re-sweep 1, swap forward. Repeat.

**Short version:** ice bar once → daggers → Wield Soul to attack, Traveling Knife whenever it's free, Polar Wind to survive, refresh DoTs when they blink.

**Pre-buff before pulls:** Blue Betty, Enchanted Growth, Winter's Revenge, Elemental Susceptibility, Traveling Knife, Deep Fissure.

---

## 2. GEAR

**Armor weight: 1 Light / 6 Medium.** Medium's Dexterity and Agility passives suit the dual-dagger melee setup and the profile is tankier than all-Light — the right call for hard content. The single Light belt still triggers a second **Undaunted Mettle** tier; swap one Medium piece to **Heavy (Reinforced)** if you'd rather have Mettle's third tier and more armor than a sliver of damage. On the **ranged staff variant**, flip to 5 Light / 1 Medium / 1 Heavy for the Light penetration/crit passives.

| Slot | Weight | Trait | Enchant | Set |
|---|---|---|---|---|
| Head | Medium | Divines | Magicka | **Slimecraw** **(1pc monster — 657 Crit Chance)** |
| Shoulders | Medium | Divines | Magicka | Aerie's Cry |
| Chest | Medium | Divines | Magicka | Sul-Xan's Torment |
| Hands | Medium | Divines | Magicka | Aerie's Cry |
| Belt | **Light** | Divines | Magicka | Aerie's Cry |
| Legs | Medium | Divines | Magicka | Aerie's Cry |
| Boots | Medium | Divines | Magicka | Aerie's Cry |
| Necklace + Ring 1 | — | Bloodthirsty | Magical Harm | Sul-Xan's Torment |
| Ring 2 | — | — (mythic) | — | **Ring of the Pale Order** |
| Front (2 daggers) | — | Charged | Poison + Absorb Magicka | Sul-Xan's Torment |
| Back bar (Ice Staff) | — | Infused | Weapon Damage | Crushing Wall **Ice** Staff |

*Aerie's Cry = the Warden class set (Infinite Archive — two-player, farm it alongside your wife's runs). Sul-Xan's Torment = Rockgrove. Crushing Wall = vet Maelstrom Arena. Overland swap: Slimecraw stays; if you can't reach the trial gear yet, see the fallback ladder. *(Don't reach for **Iceheart** here for its damage shield — like every monster set, that's its **2-piece** bonus, and the mythic ring leaves you only one monster slot. At 1 piece you're buying its stat line, nothing more.)* In-game tooltips override — confirm on your bar.*

*Why only one monster piece: Ring of the Pale Order takes the mythic slot, and 12 gear slots only stretch to 5 + 5 + 1 monster + 1 mythic. So the helm is a **pure stat line** — Slimecraw's 2-piece Minor Berserk can never fire here. Slimecraw's 657 Critical Chance is the default because you already own it; if your Offensive Penetration is under the 18,200 cap, a penetration helm (Valkyn Skoria's 1-piece is 1,487 Offensive Penetration) is the better stat. Check your character sheet. See [Gear slot math](../shared/gear-math.md).*

**Note on the ice back bar:** a fully staff-free back bar (S&B/2H) loses Elemental Blockade + the Chilled procs Wild Adaptation feeds on, and isn't worth it on a magicka build. Keep the ice staff.

**Fallback ladders (you don't need trial gear — you own the crafted answers):**
- Body: Aerie's Cry → **Order's Wrath (crafted, you own it, ~−4 to −6%)** → Tide-Born Wildstalker (crafted) → Mother's Sorrow (overland)
- Weapons/jewelry: Sul-Xan → **Ansuul's Torment** (use it in fights where you can interrupt something at least once every 30 seconds — its bonus keys off interrupts, so it's dead weight in fights that never give you one) → Whorl of the Depths → **Deadly Strike (guild traders — you own it)** — this build is DoT/channel-heavy (Fetcher, Winter's Revenge, Blockade), so Deadly Strike's +15% DoT/channel damage lands at only ~−3 to −5% and is usable today

**Mundus:** The Thief (crit) default → The Atronach if a fight out-drains Blue Betty → The Lady for the nastiest content
**Attributes:** 64 Magicka default → 32/32 Health/Magicka when struggling → 64 Health for one-shot fights (only ~−5% damage, and Polar Wind heals harder for it)
**Food:** Witchmother's Potent Brew (Max Magicka + recovery) or Bewitched Sugar Skulls (tri-stat, tankier)
**Potions:** Spell Power potions (Lady's Smock + Corn Flower + Namira's Rot); tri-stat for the safety
**Race:** whatever the character already is — the spread is ~5% and a change costs real money. Nord for the hardest HM soloing (~5–7% mitigation); Dark Elf/High Elf/Khajiit are +3.5% damage if you'd rather kick more ass than not die.

---

## 3. GROUP CONTENT (dungeons/trials) — adaptation notes

The solo build clears normal/vet 4-mans as-is. For optimized group DPS:
- **Drop Ring of the Pale Order** — healers exist; complete your 3rd Sul-Xan jewelry piece instead
- **Drop Elemental Susceptibility and Deep Fissure's breach role** if tanks/debuffers already provide Major Breach and Minor Vulnerability — that frees two slots for more damage
- **Northern Storm stays excellent** (personal damage + Major Protection through trial mechanics)
- The group Mag Warden rotation (heavier on Sub Assault / Cliff Racer weaving and trial buff sets) differs enough that I won't guess it here — check the current Warden DPS build at **hyperioxes.com/eso/dps/magicka-warden-build** before a progression trial

---

## 4. PvP (Cyrodiil & Battlegrounds)

Warden PvP translates well from this chassis. Verified against **Alcast's U50 Magicka Warden PvP build, "Frostcloak"**; season set metas rotate, so confirm current pieces on the live page before spending gold.

**What carries over:** **Polar Wind** becomes your money burst heal (max-health scaling is PvP gold), **Deep Fissure** burst timing, **Shimmering Shield** (projectile-heavy Cyrodiil is its natural habitat), Blue Betty purge, Northern Storm as a brawler ult, Frozen Armor for resolve.

**Setup ("Frostcloak"):** **Light armor** — not Heavy — with **Impen** traits, built around roughly **50k Magicka and 30k Health**. The survivability comes from the enormous magicka pool feeding shields and heals, not from armor weight.

**Sets:** **Necropotence** + **Bright-Throat's Boast** + **Kjalnar's Nightmare** (monster set). Note: builds that *subclass* are **not for you** — subclassing disables Class Mastery. Stick to pure-class-compatible references.

*Source: [Alcast U50 Magicka Warden PvP "Frostcloak"](https://alcasthq.com/eso-magicka-warden-build-pvp/). Season metas rotate — the live page and in-game tooltips override.*

---

## Skill line passives — buy these with skill points

Rule of thumb: **buy every passive in every line you have a skill slotted from.** Priorities if you're short:

- **Animal Companions:** all — **Advanced Species** (+5% crit damage per slotted skill) is why five of your slots live here.
- **Winter's Embrace:** all — Polar Wind, Winter's Revenge, and Northern Storm live here, and **Glacial Presence** feeds the Chilled/Brittle engine.
- **Green Balance:** all — Enchanted Growth lives here.
- **Dual Wield + Destruction Staff:** the flat-damage passives — both weapon lines are on your bars, and Traveling Knife is a Dual Wield grimoire.
- **Soul Magic:** Wield Soul lives here.
- **Medium Armor:** all — the 6-Medium body is this build's chassis. **Light Armor:** Concentration (penetration), for the belt and the ranged staff variant.
- **Undaunted:** Undaunted Mettle — HIGH.
- **Fighters Guild:** Slayer — HIGH.
- **Alchemy:** Medicinal Use (longer potion buffs).
- **Racial:** all.

---

## 5. Champion Points — Spend Order (1200 → 1800)

At CP 1200 you have ~400 points per color; at 1800, ~600. **Each table is in the order you actually unlock it** — the tree opens outward from the center, so buy top to bottom and every row is reachable by the time you get to it (connector stars come before the deeper stars they gate). The **`Slot`** line names the active stars for that tree — buy those as soon as the tree lets you reach them, and fill the passives as you path through. Exact node adjacency shifts a little with which stars you pick, so glance at the in-game tree to confirm.

### 🔵 BLUE (Warfare)

**Slot (4):** Master-at-Arms · Deadly Aim · Fighting Finesse · Wrathful Strikes — the damage slots sit near the center, so they come first.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Master-at-Arms** | **SLOT** (50) | +direct damage — Wield Soul, Deep Fissure, Traveling Knife |
| 2 | **Deadly Aim** | **SLOT** (50) | +single-target damage |
| 3 | **Fighting Finesse** | **SLOT** (50) | bigger crits (Advanced Species crit damage compounds this) |
| 4 | **Wrathful Strikes** | **SLOT** (50) | flat damage on everything |
| 5 | Precision | buy max (20) | crit chance |
| 6 | Piercing | buy max (20) | armor penetration |
| 7 | Eldritch Insight | buy max (20) | max magicka |
| 8 | Tireless Discipline | buy max (20) | max stamina |
| 9 | Blessed | buy max (20) | Polar Wind / Enchanted Growth hit harder |
| 10 | Quick Recovery | buy max (20) | healing received |
| 11 | Hardy | buy max | −direct damage (Staving Death cluster; minimum connectors to path in) |
| 12 | Elemental Aegis | buy max | −elemental damage |
| 13 | Preparation | buy max | −damage, always on |
| 14 | **Thaumaturge** | buy (50), swap option | +DoT/channel damage — this build runs real DoTs (Fetcher, Winter's Revenge, Blockade); in for Wrathful Strikes on DoT-heavy fights |
| 15 | **Force of Nature** | buy (50), instanced swap | penetration per status effect — you stack them constantly, so it caps fast; swap in for groups/instanced |
| 16 | Ironclad / Enduring Resolve / Duelist's Rebuff | buy (50), swap options | direct / DoT / single-target mitigation for specific fights |

*Items 1–13 ≈ your 1200 budget (400/tree). Items 14–16 fill in by 1600–1800, swapped per fight with zero regrinding.*

### 🔴 RED (Fitness)

**Slot (4):** Boundless Vitality · Fortified · Rejuvenation · Expert Evasion — Boundless Vitality and Fortified are central; the deeper slots sit further out, so the connectors below come before them.

| # | Star | Action | What it does for you |
|---|---|---|---|
| 1 | **Boundless Vitality** | **SLOT** (50) | max health (also scales Polar Wind's heal) |
| 2 | **Fortified** | **SLOT** (50) | armor |
| 3 | **Rejuvenation** | **SLOT** (50) | resource recovery (backs up Blue Betty) |
| 4 | Hero's Vigor | buy max | max health |
| 5 | Tumbling | buy max | cheaper dodge rolls |
| 6 | Sprinter + Hasty | minimum points | connectors to reach deeper stars |
| 7 | **Expert Evasion** | **SLOT** (50) | cheaper, stronger dodge rolls |
| 8 | Defiance | buy max | mitigation |
| 9 | Mystic Tenacity | buy max | less stun/fear time |
| 10 | Bracing Anchor | buy (50), swap option | block-heavy fights |
| 11 | Siphoning Spells | buy (50), swap option | magicka sustain in add-heavy fights |
| 12 | Pain's Refuge + Bastion | buy (50), swap options | the PvP defensive pair |

*Items 1–9 ≈ your 1200 budget; 10–12 are fight-specific swaps toward 1800. PvP slot: Boundless Vitality • Fortified • Pain's Refuge • Bastion.*

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

1. **Scribing unlocked** (Gold Road questline) → **Wield Soul** (Druid's Resurgence script) and **Traveling Knife** — two of your five front-bar slots (you already have scribing)
2. **Aerie's Cry** — Infinite Archive (Warden class set; two-player, farm with your wife)
3. **Crushing Wall Ice Staff** — vet Maelstrom Arena
4. **Slimecraw** — vet Wayrest Sewers I (you likely own it; at 1 piece you're only buying the stat line, so don't farm a different helm for its proc — see [Gear slot math](../shared/gear-math.md))
5. **Sul-Xan's Torment** — Rockgrove; until then crafted **Order's Wrath** (body) + **Deadly Strike** (weapons/jewelry), both owned, at a ~4–6% penalty
6. Keep: Ring of the Pale Order, Order's Wrath, Deadly Strike

*Sources: household-constructed bars (Stamina Warden chassis rebuilt around magicka), with every morph name cross-checked against ESO-Hub / UESP / Alcast; re-verify against the live [Hyperioxes Magicka Warden solo build](https://hyperioxes.com/eso/solo/magicka-warden-build). PvP from [Alcast "Frostcloak"](https://alcasthq.com/eso-magicka-warden-build-pvp/). Skill names current as of Update 50 — ZOS renames abilities every class refresh, so trust your in-game tooltips over any guide. Revision date: 2026-08-18.*

---

## COMPANION

**Default pick: Isobel, built Tank.** All Heavy / Bolstered armor, Quickened jewelry + 1H sword + shield. Bar order: Provoke → Solar Ward → Beam of Reproach → Holy Ground → On Guard, Ult Baneslayer. She holds aggro off you (worth more than any companion heal given Pale Order + Polar Wind already keep you topped), and her Penetrating Strikes buffs your light-attack weaving.

**Alternatives worth knowing:** **Zerith-Var (Tank)** applies Major Breach via Sepulchral Chill — free penetration that can free a bar slot. **Azandar (Tank)** brings Major AND Minor Vulnerability, best-rated companion for Infinite Archive.

**Craft Telvanni Efficiency** (5pc crafted) and wear it when the companion is doing real work — it halves their ability cooldowns. Swap back to your damage set when you're carrying.

Full details for all eight companions, including farming perks and gear traits: see `../shared/companions.md`.
