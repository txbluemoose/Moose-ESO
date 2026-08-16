# Gear Slot Math — Mythic vs Monster Set

### Why every build here wears exactly one monster piece, and when that's wrong

This page answers one recurring question: **is the mythic (Ring of the Pale Order) better than a 2-piece monster set?** Short answer: **solo, the mythic wins by a mile. In a group, the 2-piece monster set wins.** The reasoning is below, along with the slot math that forces the choice in the first place.

---

## The 12 slots

You have **12 gear slots that count** at any moment: 7 armor, 3 jewelry, and 2 weapon slots on your active bar. (A two-handed weapon — greatsword, staff, bow — fills both weapon slots and counts as **2 set pieces** on its own.)

Set bonuses cap at 5 pieces, so 12 slots divide into exactly two sensible layouts:

| Layout | Body | Jewelry + weapons | Last 2 slots | Total |
|---|---|---|---|---|
| **A — with a mythic** | 5 | 5 | 1 monster + **1 mythic** | 12 |
| **B — no mythic** | 5 | 5 | **2 monster** | 12 |

That's the whole decision. **You cannot have both a mythic and a 2-piece monster set** — there is no thirteenth slot. Every solo build in these guides runs Layout A, which is why every gear table shows a lone monster helm.

---

## The verdict

| Content | Take | Why |
|---|---|---|
| **Solo** (delves, world bosses, vet soloing, arenas) | **Mythic — Ring of the Pale Order** | Turns ~20% of all damage you deal into healing. Nothing a 2-piece monster set does comes close. |
| **Group** (4-mans, trials) | **2-piece monster set** | Pale Order's heal shrinks with every grouped ally until it's worthless — and you have a healer anyway. |

### Why solo isn't close

**Ring of the Pale Order heals you for 20% of the damage you deal.** On a build doing any real damage, that is an enormous, always-on, self-scaling heal that costs you no bar slot, no cast time, and no global cooldown. It is the single reason the household's builds can be aggressive and still not die.

A 2-piece monster set, by comparison, gives you a **proc worth roughly 3–5% damage** (Valkyn Skoria's meteor, Zaan's beam) or a flat buff like Slimecraw's **Minor Berserk, +5% damage done**.

So the trade is: *roughly 5% more damage* versus *20% of your damage returned as health*. By this household's rule — **a 2–5% parse difference is noise, survivability isn't** — that isn't a close call. Keep the mythic.

### Why groups flip it

Pale Order's heal is **reduced by 4% for every ally you are grouped with**:

| Situation | Heal |
|---|---|
| Solo | **20%** |
| 4-person dungeon (3 allies) | **8%** |
| 12-person trial (11 allies) | **0%** |

In a trial the ring does *literally nothing*, and in a 4-man it's a shadow of itself while a real healer covers you. That's why every group section in these guides says to drop Pale Order — at that point the ring is a dead slot, and a 2-piece monster set (or a third jewelry piece) is strictly better.

!!! warning "Does a Companion count as a grouped ally? — worth testing"
    The set also states you **cannot be healed by anyone except yourself, your pets, or your Companions**. Whether an active Companion counts as a "grouped ally" for the −4% reduction is the one detail worth confirming yourself, because you almost always run Isobel. Easy test: note your Pale Order healing with the Companion summoned, then dismiss her and compare. If Companions do count, you're playing at 16% rather than 20% — still far ahead of any monster set, so **it changes nothing about the verdict**, just the exact number.

---

## The lone monster helm is a pure stat pick

Because Layout A leaves you **one** monster piece, only the set's **1-item** bonus applies. Every monster set's interesting effect — the procs, the buffs — is on the **2-item** bonus, and none of it fires. The helm is a stat line and nothing more.

This is a common trap. Two examples that matter here:

| Set | 1 item (what you actually get) | 2 items (what you never get) |
|---|---|---|
| **Slimecraw** | 657 Critical Chance | +Minor Berserk (+5% damage) |
| **Valkyn Skoria** | 1,487 Offensive Penetration | Meteor proc on damage-over-time |

**Slimecraw's Minor Berserk needs two pieces.** Earlier revisions of these guides credited it as a 1-piece bonus — that was wrong, and it's been corrected everywhere.

**So pick the helm by the stat your build is short on:**

- **Under the penetration cap?** Take the penetration stat (Valkyn Skoria's 1-piece is 1,487). Medium-armor builds especially, since they get no penetration from the armor line.
- **At or over the cap?** Penetration past 18,200 is wasted — take the crit instead (Slimecraw).
- **Check your character sheet** for Offensive Penetration before deciding. Against most enemies the cap you're aiming at is **18,200** resistance.

Honestly: this is a ~1–2% swing either way. Slimecraw is the default in these guides because it's already owned and requires no farming.

---

## Reading your penetration (the number that decides the helm)

**Your character sheet lies to you here — in a good way.** The "Offensive Penetration" figure on your sheet counts only *your own* sources: Champion Points, Divines/Mundus, traits, set bonuses, Light Armor. It does **not** include the Breach debuffs you put on the enemy, because those reduce *their* resistance rather than raising your penetration. So a sheet number that looks alarmingly low usually isn't the whole story.

To get your real figure, add the debuffs you actually keep up:

| Source | Value |
|---|---|
| Your character sheet | *(whatever it reads)* |
| **Major Breach** — from your own debuff skill | +5,948 |
| **Minor Breach** — if something on your bar applies it | +2,974 |
| **Target's resistance (the cap you're aiming at)** | **18,200** |

Anything past 18,200 is wasted. Anything short of it is damage you're simply not doing — and the shortfall converts at roughly **1% damage per 660 penetration**, so a 5,000 gap is around 7–8% damage lost. That is far bigger than any monster-helm choice, so fix this before agonising over the helm.

**Cheapest ways to close a gap, in order:**

1. **The Lover mundus** — +2,744 penetration, and **up to 4,741 with a full set of legendary Divines armor**, which these builds already wear. It's free to switch (ride to the stone), and it is by far the biggest single lever. Every gear table here specifies Divines precisely so this stone hits its ceiling.
2. **Piercing** (Warfare CP) — 350 per stage; make sure it's actually bought out, it's easy to leave half-finished.
3. **Sharpened** on your weapons — a real chunk of penetration, traded against whatever trait you're running (Charged for status effects, Infused for the enchant).
4. **Light Armor pieces** — each grants Concentration penetration. Medium-armour melee builds get almost none, which is the deliberate cost of the tankier setup, not a mistake.

**Then re-check the helm.** The two decisions are linked: while you're under the cap, a penetration helm is fully useful; once The Lover pushes you to the cap, that penetration is wasted and the **crit helm becomes the correct pick**.

---

## If you ever drop Pale Order

Going to Layout B (no mythic) opens the 2-piece monster set, and *then* the proc sets become worth discussing — Valkyn Skoria on a damage-over-time build, Zaan for single-target burn, Slimecraw for the flat +5%. That's a **group** decision. For solo content in this household, the ring stays on.

---

*Sources: [UESP — Ring of the Pale Order](https://en.uesp.net/wiki/Online:Ring_of_the_Pale_Order), [ESO-Hub — Ring of the Pale Order](https://eso-hub.com/en/sets/ring-of-the-pale-order), [UESP — Slimecraw](https://en.uesp.net/wiki/Online:Slimecraw_(set)), [ESO-Hub — Slimecraw](https://eso-hub.com/en/sets/slimecraw). In-game tooltips override every guide here, including this one. Revised 2026-08-16.*
