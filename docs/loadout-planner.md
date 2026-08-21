# Loadout Planner

Pick a character, pick a build, say whether you're running a companion — then record what you're **actually** wearing and this works out what's still missing to finish each set.

Everything here is generated from the guides themselves, so it can't drift: change a gear table in a guide and the planner follows on the next deploy.

!!! tip "Where your data lives"
    Characters and gear are saved in **this browser only** (local storage). Nothing is uploaded anywhere, and it won't follow you to your phone or another PC. Clearing site data clears the planner.

<div id="eso-planner">
  <p>Loading the planner…</p>
</div>

<script src="../assets/planner-data.js"></script>
<script src="../assets/planner.js"></script>

---

## How the set maths works

- **A two-handed weapon or staff counts as two set pieces.** So does a `Necklace + Ring 1` row. The planner counts them that way — that's why a staff alone can finish a 5-piece.
- **Set names are matched loosely.** Typing `Crushing Wall` matches the guide's `Crushing Wall Ice Staff`; case and punctuation don't matter.
- **Weight is only checked on armour.** Jewellery and weapons have no weight, so those cells are marked *n/a*.
- **"Not part of this build"** lists sets you've recorded that the guide doesn't ask for — usually what you're wearing while you finish the real one.

The **Fill everything from the guide** button stamps the whole target loadout in at once. Handy as a starting point on a character that's already geared — then correct the two or three slots that differ.

---

*The planner reads the same gear tables and skill bars as the guides. Where a guide flags something "confirm in-game", that flag doesn't travel here — check the guide page itself, linked under the build picker. In-game tooltips override everything.*
