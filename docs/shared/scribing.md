# Scribing — grimoires, scripts, and how to pick an affix

### Shared reference. One of us scribes; one of us doesn't.

**He has scribing** (Gold Road) and runs a scribed skill on most bars. **She does not scribe at all** — that's a hard constraint, not a preference. Never put a grimoire on one of her sheets without a non-scribed alternative called out inline on the same line.

---

## How a scribed skill is built

Three script slots, and they do different jobs:

| Slot | What it does | Example |
|---|---|---|
| **Focus** | The core effect — damage type, or heal/shield/pull. **Also sets the skill's name.** | Flame |
| **Signature** | The secondary effect — a DoT, mitigation, a class-specific bonus | Lingering Torment |
| **Affix** | A buff on you or a debuff on the target | Resolve |

A grimoire plus three scripts makes one ability. **Scribed skills have no morphs** — the scripts are the morph.

!!! danger "Your bar will never say the grimoire's name"
    **A scribed ability is renamed after its focus script**, so the grimoire name only exists in the crafting window. He scribed Flame onto Ulfsild's Contingency and what appeared on his bar was **Fiery Contingency** — reported from his own game on 2026-11-15, which is why every guide here now leads with the scribed name and keeps the grimoire in brackets.

    **The map isn't guessable.** Frost gives *Chilling*, not "Frost". Traveling Knife's Magic focus gives plain *Magic Knife*, breaking the pattern every other grimoire follows.

| Focus script | Name prefix |
|---|---|
| Flame | **Fiery** |
| Frost | **Chilling** — *not* "Frost" |
| Shock | **Shocking** |
| Magic | **Magical** — *except* Traveling Knife, which gives plain **Magic Knife** |
| Bleed | **Bloody** |
| Poison | **Venomous** |
| Taunt | **Goading** |
| Immobilize | **Binding** |
| Pull | **Leashing** |
| Damage Shield | **Warding** |

**Signature and affix scripts don't change the name — only the focus does.** That's inferred from the examples rather than stated as a rule anywhere, but it holds across every combination checked here.

---

## Grimoire → skill line

**This is not cosmetic.** The skill line decides which passives the skill feeds, and for six of them, whether you can slot it at all.

| Grimoire | Skill line | Note |
|---|---|---|
| **Ulfsild's Contingency** | **Mages Guild** | *Not Soul Magic* — it was mislabelled in 11 places across 9 files until 2026-10-02. Feeds **Magicka Controller**, so buy the Mages Guild passives |
| **Wield Soul** | Soul Magic | |
| **Soul Burst** | Soul Magic | |
| **Torchbearer** | Fighters Guild | |
| **Trample** | Alliance War → Assault | |
| **Banner Bearer** | Alliance War → Support | |
| **Traveling Knife** | **Dual Wield** | ⚔️ weapon required on that bar |
| **Shield Throw** | **One Hand and Shield** | ⚔️ |
| **Smash** | **Two-Handed** | ⚔️ |
| **Vault** | **Bow** | ⚔️ |
| **Elemental Explosion** | **Destruction Staff** | ⚔️ |
| **Mender's Bond** | **Restoration Staff** | ⚔️ |

⚔️ **The six weapon-line grimoires need that weapon equipped on the bar you slot them on.** A Traveling Knife goes on a dual-wield bar, not a staff back bar.

---

## Picking the affix — three traps

The affix slot is where this household has made every one of its scribing mistakes. All three traps have the same shape: **the affix duplicates something the bar already has, and duplicates don't stack.**

### Trap 1 — a Major buff you already have

**Major buffs of the same name do not stack.** A "+20% Weapon and Spell Damage" affix is **Major Brutality**, and if anything on the bar already grants Major Brutality, that affix slot is doing *nothing*.

Found 2026-11-15 when he scribed exactly that onto Fiery Contingency: **Igneous Weapons** on his back bar already grants Major Brutality, for **60 seconds** against the affix's 10.

**Check the bar for an existing Major source before picking a buff affix:**

| Class / line | Already grants |
|---|---|
| Dragonknight | **Igneous Weapons** — Major Brutality |
| Warden | **Blue Betty / Bull Netch** — Major Brutality |
| Mages Guild | **Degeneration** — Major Brutality |
| Werewolf | **Hircine's Fortitude / Rage** — Major Brutality |
| Arcanist | **Inspired Scholarship** — Major Brutality |
| Sorcerer | **Bound Armaments** — Major Savagery |
| Nightblade | **Grim Focus** (either morph, either bar) — Major Savagery |
| Dragonknight | **Incinerate** (either bar) — Major Savagery |

### Trap 2 — a debuff your status effects already apply

**Same trap, harder to see, because the source is a status effect rather than a skill.** Found 2026-11-20.

**Elemental Susceptibility** applies **Burning, Chilled and Concussion every 7.5 seconds** — and those carry debuffs of their own:

| Status effect | Carries | Duration |
|---|---|---|
| **Concussion** | **Minor Vulnerability** (+5% damage taken) | 4s |
| **Chilled** | **Minor Maim** (−5% damage dealt) | 4s |

So on any bar running Elemental Susceptibility, **Minor Vulnerability is already up roughly 4 seconds in every 7.5 — about 53% of the time.** A Vulnerability affix doesn't stack with that; it only fills the gap, so it's worth about half what it looks like.

!!! warning "Neither of these is staff-gated — but Minor Brittle is"
    Chilled's Minor Maim and Concussion's Minor Vulnerability fire regardless of which staff you hold. **Minor Brittle does not** — Chilled only grants it if a **frost staff is on your *active* bar** as it lands. On a melee build that casts Susceptibility on the back bar and then fights on daggers, Minor Brittle never fires at all.

### Trap 3 — an absence from someone else's list is not evidence

ArzyeL's per-variant script lists are **suggested combinations, not the set of legal ones.** Proven twice:

- Its Ulfsild's Contingency page omits **Bleed** as a focus. Bleed scribes fine — the result is **Bloody Contingency**, which ESO-Hub lists as its own combination.
- It lists **Gladiator's Tenacity** only under the *Warding* variant, implying it can't pair with Flame. He confirmed from his own crafting window on 2026-11-15 that **Flame + Gladiator's Tenacity works.**

The same page gives **no numbers at all** for signature or affix scripts, so don't cite it for values. **In-game beats every source, including this page.**

---

## The affix picker

The scripts this household actually uses, and when each is the right call. **This is not the full catalogue.**

| Affix | Gives | Take it when |
|---|---|---|
| **Resolve** | **Minor Resolve** — +2,974 Armor | You are **below** the armour cap. Stacks with Major Resolve (different tiers) |
| **Breach** | **Minor Breach** — −2,974 enemy Resistance | You have **no other Minor Breach** and you're under the penetration target. Stacks with Major Breach |
| **Vulnerability** | **Minor Vulnerability** — +5% damage taken | Nothing else applies it — **check for Elemental Susceptibility first** (Trap 2) |
| **Force** | **Minor Force** — +10% Critical Damage | Nothing else applies it |
| **Berserk** | **Minor Berserk** — +5% damage done | Nothing else applies it |
| **Heroism** | **Minor Heroism** — Ultimate generation | Toggle/ultimate-hungry setups |

!!! note "Breach and Vulnerability can't go on every variant"
    UESP lists both as **incompatible with Warding Contingency and Healing Contingency** — the damage-shield and healing focuses. They're fine on the damage focuses (Fiery, Chilling, Shocking, Bloody). *Affix durations are reported inconsistently across sources — 12, 20 and 22 seconds all appear. Read the tooltip in the crafting window.*

### The two numbers that decide Resolve vs Breach

Both are on your character sheet, and each one can make its affix worthless:

| Read this | Compare to | If you're past it |
|---|---|---|
| **Armor** (with buffs up) | The mitigation cap | **Resolve is doing nothing** — take a debuff affix |
| **Offensive Penetration** | **≈18,200** for dungeon/trial bosses, **≈9,100** overland | **Breach is doing nothing** — penetration past the target is wasted |

**Solo players are rarely near the penetration target.** In a group the tank and healer strip 8,000–9,000 of it between Major/Minor Breach, a Crusher glyph and Alkosh; solo, you supply all of it yourself. That makes a Breach affix live value on a solo bar far more often than a Resolve affix is.

!!! tip "But survivability still outranks damage here"
    This repo's governing constraint is *kick ass and don't die.* If your Armor is **below** cap, Resolve is real mitigation and it keeps the slot — the damage affixes only win once Resolve has nothing left to give. **Read the sheet before swapping.**

---

## Class Flourish — the signature script worth chasing

**Renamed from "Class Mastery" in U51** — and not to be confused with the **Class Mastery system** both players are pure-class for. They're unrelated.

The effect is per class. On a **Dragonknight**: *for each enemy within 8 metres, up to 6, gain **50 Weapon and Spell Damage** and **reduce damage taken by 2% +1% per enemy** for 5 seconds.* In a six-pack that's **+300 Weapon and Spell Damage and −8% damage taken** — damage and mitigation both scaled to how many things are hitting you, which suits a melee build better than almost anything else in the slot.

!!! warning "It scales with enemy count — and a boss is one enemy"
    **+300 Weapon and Spell Damage is the six-enemy figure.** Against a single target it is **+50 and −3% damage taken**, which a damage-over-time signature beats comfortably. Class Flourish is a **trash, overland and Infinite Archive** script; for single-target boss fights, **Lingering Torment** is the stronger signature. *(Arithmetic from the tooltip formula, not from a source.)*

**He unlocked it 2026-11-20**, so his Mag DK runs **Flame / Class Flourish / Breach** by default.

**The cost:** 50 **Class Script Scraps**, from Trials (1 normal / 2 vet), trial weekly coffers (up to 4), leaderboards (5), and **Arenas at 1 normal / 3 veteran per day per account.** For a mostly-solo player that's veteran arenas at 3/day — roughly a two-and-a-half week habit. **Once per account**, then buyable from **Chronicler Firandil** for every alt.

---

## What this household runs

| Skill on the bar | Grimoire (line) | Scripts | Where |
|---|---|---|---|
| **Fiery Contingency** | Ulfsild's Contingency (*Mages Guild*) | Flame / **Class Flourish** / **Breach** | His Mag DK |
| **Chilling Contingency** | Ulfsild's Contingency (*Mages Guild*) | Frost / Lingering Torment / Resolve | Sorc, Warden sheets |
| **Bloody Contingency** | Ulfsild's Contingency (*Mages Guild*) | Bleed / Lingering Torment / Resolve | Both Nightblades |
| **Shocking Contingency** | Ulfsild's Contingency (*Mages Guild*) | Shock / Lingering Torment / Resolve | Sorc |
| **Fiery Soul** | Wield Soul (*Soul Magic*) | Flame / Lingering Torment / Breach | Necro sheets |
| **Bloody Burst** | Soul Burst (*Soul Magic*) | Bleed / Lingering Torment / Resolve | — |
| **Magic Knife** | Traveling Knife (*Dual Wield*) | Magic / Assassin's Misery / Berserk | Mag Sorc |
| **Venomous Knife** | Traveling Knife (*Dual Wield*) | Poison / Assassin's Misery / Force | — |
| **Goading Throw** | Shield Throw (*One Hand and Shield*) | Taunt focus | Accolade tank |

**Every one of these is on one of his characters.** None are on her sheets — see the constraint at the top.

!!! question "Still open: what is Banner Bearer's Magic-focus version called?"
    Alcast's group Mag DK calls it **"Magical Banner"**. ArzyeL's Banner Bearer page names only Fiery, Shocking, Fortifying, Restorative and Shattering Banner, with no name for the Magic focus. The focus exists; the resulting name has only one source, so the guides leave it flagged rather than stating it.

---

*Sources: grimoire skill lines and the focus-name map verified against ESO-Hub and the live crafting window (2026-10-02 and 2026-11-15, the latter reported in-game by him). Elemental Susceptibility's Major Breach (5,948 / 30s) and its 7.5-second Burning/Chilled/Concussion cycle read off eso-skillbook 2026-11-20. Concussion → Minor Vulnerability and Chilled → Minor Maim, both 4 seconds at 5%, from UESP 2026-11-20. Major Breach 5,948 / Minor Breach 2,974 and the ≈18,200 boss penetration target from ESO Decoded's stat-caps page, 2026-11-20 — its own budget adds the two tiers together, which is what confirms they stack. Affix durations conflict across sources and are deliberately not stated here. The armour mitigation cap is referenced but **not** verified against patch notes — read your character sheet. **In-game tooltips override everything above.***
