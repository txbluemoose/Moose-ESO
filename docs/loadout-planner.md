# Loadout Planner

Pick a character, pick a build, say whether you're running a companion — then record what you're **actually** wearing and this works out what's still missing to finish each set.

Everything here is generated from the guides themselves, so it can't drift: change a gear table in a guide and the planner follows on the next deploy.

!!! tip "Where your data lives"
    Characters and gear are saved in **this browser** by default — nothing leaves the page. To carry them to your phone or the other PC, use **§7 Sync** at the bottom: it pushes your roster to a private GitHub Gist with a token that can *only* touch gists.

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

## Syncing to another device

The sync panel at the bottom of the planner writes your characters to a **secret Gist** — a private scratch file on GitHub, separate from this repo.

1. Make a GitHub token with the **gist** scope ticked and nothing else (*Settings → Developer settings → Personal access tokens → Tokens (classic)*).
2. Paste it into the planner and press **Create a new Gist**. Copy the Gist ID it gives you.
3. On the other device, paste the same token **and** the Gist ID, then press **Pull from Gist**.

**Why gist-only scope matters:** the token is stored in your browser, on a page whose source is public. A token limited to gists can, at worst, read and write your gists. A token with repo access could rewrite this site — don't use one.

**Push overwrites the gist. Pull merges**, keeping whichever copy of each character was edited most recently. A character you delete on one device will reappear on the next pull — delete it on both, or push from whichever device is correct.

---

*The planner reads the same gear tables and skill bars as the guides. Where a guide flags something "confirm in-game", that flag doesn't travel here — check the guide page itself, linked under the build picker. In-game tooltips override everything.*
