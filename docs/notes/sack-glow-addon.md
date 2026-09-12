# Heavy Sack Glow — the add-on

*"Can we make heavy bags glow?"* — mostly yes, with one honest caveat up front.

## The short answer

**The sack itself can't be made to glow.** ESO add-ons are UI-only. There is no hook
to recolour, outline, or light up a world object — that's the renderer, and Lua never
touches it. The only thing in the game that genuinely highlights sacks in the world is
**Zerith-Var's** rapport perk (see [Farming](farming.md)).

**A marker floating on the spot can be done**, and that's what
`addons/MooseSackGlow/` in this repo does. Add-ons can draw their own controls in 3D
world space, so it remembers where a sack was and glows *there*.

In practice the difference barely matters at range — you see a light on the spot either
way. It matters in two places: a sack you've never found has no marker, and the marker
is a spawn point, not a live "there's one there right now."

## What the API allows, and what it doesn't

| Want | Possible? | Why |
|---|---|---|
| Outline / recolour the sack model | **No** | Modding is UI-only. No shader or material access. |
| Draw a glowing marker at a remembered spot | **Yes** | `Create3DRenderSpace` + `Set3DRenderSpaceOrigin` |
| Reveal sacks you've never walked past | **No** | Nothing enumerates nearby interactables. You learn a spot by looking at one. |
| Know whether a sack is *currently* spawned | **No** | The API exposes harvest-node respawn state but **not container state** — the same wall that makes HarvestMap's chest pins show every known spot regardless. |
| Markers inside dungeons and trials | **No** | ZOS disables the 3D render space in group instances deliberately, so add-ons can't chalk mechanics on the floor. Sacks are in cities and overworld, so this costs nothing here. |

## What it does

- Records a sack spot the moment you look at one — no button to press
- Floats a pulsing glow with a `Heavy Sack 14m` label on every recorded spot within 60m
- **Dims a marker for 30 minutes after you loot it**, so on a city loop you can see what
  you've already cleared
- Merges anything recorded within 4m of a known spot, so re-looting doesn't stack duplicates
- `/sackglow learn` teaches it any other container — troves, safeboxes, whatever you're
  looking at
- Saves account-wide, so both of you build one shared map of a city over time

Install and command list: `addons/MooseSackGlow/README.md`. PC only — consoles take no
add-ons, and there the green CP stars and Keen Eye passives remain the whole toolkit.

## Confidence

Written against the **U50** add-on API (`APIVersion 101050`). Three things are flagged
rather than claimed:

1. **Marker orientation.** The forward/right/up vectors that turn the quad toward the
   camera couldn't be verified outside the game. If a marker looks edge-on, `/sackglow flat`
   and `/sackglow fixed` are the other two modes; `/sackglow mirror` fixes a backwards label.
   `/sackglow test` drops a throwaway marker at your feet so you can check in ten seconds.
2. **Container names.** `Heavy Sack`, `Heavy Crate`, `Heavy Barrel`, `Heavy Bag` are
   matched by default. Whichever of those the client actually uses will record; the rest are
   harmless. `/sackglow learn` covers anything missed.
3. **Texture overlay.** Off by default and the glow is drawn with a backdrop that needs no
   texture file, precisely so a wrong `.dds` path can't make markers invisible.

The 3D API being live in the overworld and disabled in group instances is verified —
that restriction is why *More Markers* works in zones but not in dungeons.

## The obvious next step

The add-on starts empty and learns only what you walk past. **HarvestMap already tracks
heavy sacks**, and HarvestMap-Data ships community locations for them. Importing that
saved-variable file would populate every city at once instead of one sack at a time. Not
built — the format needs reading against a live install first.

---

*Source: ESO add-on API, Update 50 (`APIVersion 101050`); 3D render space behaviour cross-checked against More Markers and the discontinued Lib3D. Written 2026-09-12. In-game behaviour beats this page — verify with `/sackglow test`.*
