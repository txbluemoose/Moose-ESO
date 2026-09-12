# Moose Sack Glow

Puts a glowing marker on heavy sack spots you've already found, and remembers them
between sessions.

## Read this first — what it can't do

**No add-on can make the actual sack glow.** ESO modding is UI-only: there is no
hook to recolour, outline, or light up a world object. That's a client-side render
thing, and the only in-game feature that does it is **Zerith-Var's** rapport perk
(see `docs/notes/farming.md`).

What add-ons *can* do is draw their own controls in 3D world space. So this one
remembers where a sack was and floats its own marker there. Three consequences,
all of them unavoidable:

| | |
|---|---|
| **It can't reveal sacks you've never found** | There is no API to enumerate nearby interactables. It only learns a spot when you look at a sack. |
| **A marker means "a sack spawns here", not "a sack is here now"** | The API exposes harvest-node respawn state but not container state — the same limitation `notes/farming.md` records for HarvestMap's chest pins. |
| **Markers don't draw in dungeons or trials** | ZOS disables the 3D render space in group instances on purpose, so nobody can chalk mechanics on the floor. Cities and overworld are fine, which is where sacks are. |

## Install

1. Copy the `MooseSackGlow` folder into
   `Documents\Elder Scrolls Online\live\AddOns\`.
2. Enable it at the character select screen (Add-Ons button).
3. `/sackglow` in chat to check it loaded.

PC only. Consoles don't take add-ons.

## Use

Walk past a heavy sack — looking at it is enough — and it's recorded. From then on
the spot carries a marker whenever you're within range.

```
/sackglow                   status + full command list
/sackglow on | off          markers on/off
/sackmark                   record a sack where you stand (short form)
/sackglow learn             teach it whatever you're looking at
/sackglow forget            delete the nearest node
/sackglow nearest           nearest node + distance, works even if markers don't
/sackglow count             nodes here / everywhere
/sackglow clear zone | all
```

Looks:

```
/sackglow test              throwaway marker at your feet for 2 min
/sackglow billboard         marker turns to face you (default)
/sackglow flat              marker lies on the ground
/sackglow fixed             no orientation applied
/sackglow mirror            flip it if the label reads backwards
/sackglow size <m>          quad size in metres (default 1.0)
/sackglow height <m>        float height above the spot (default 1.2)
/sackglow range <m>         draw distance (default 60)
/sackglow texture <path>    optional .dds over the glow; `none` to clear
```

A looted sack's marker dims for 30 minutes so you can see at a glance what you've
already cleared on a loop.

## If the markers don't show up

Run `/sackglow test` first — that drops a marker at your feet, so you can back up
and confirm the render path works at all, separately from whether any sacks are
recorded.

- **Nothing at all, anywhere** — check `/sackglow nearest`. If that prints a
  distance, recording works and the problem is rendering: you're probably in a
  dungeon or trial, where the API is switched off.
- **A marker is there but edge-on or invisible from some angles** — try
  `/sackglow flat`, then `/sackglow fixed`. The orientation vectors are the one
  part of this that couldn't be verified outside the game.
- **The label reads backwards** — `/sackglow mirror`.
- **Markers vanished after setting a texture** — bad `.dds` path.
  `/sackglow texture none` restores the plain glow.

## Details worth knowing

- Positions come from `GetUnitRawWorldPosition`, which is per-zone and in
  centimetres; the marker is placed via `WorldPositionToGuiRender3DPosition`,
  ZOS's own converter, so no offset maths and no `Lib3D` dependency (that library
  is discontinued).
- Recording happens at **your** position, not the sack's — there's no API for an
  interactable's coordinates. Markers land within a couple of metres.
- Two recordings within 4m are treated as the same node, so re-looting a spot
  doesn't pile up duplicates.
- `Heavy Sack`, `Heavy Crate`, `Heavy Barrel` and `Heavy Bag` are matched out of
  the box. Names are matched as the client reports them, so on a non-English
  client use `/sackglow learn` once per container type.
- Saved to `MooseSackGlowVars.lua`, account-wide.

## Not done yet

- No LibAddonMenu settings panel — slash commands only.
- No map or compass pins; markers are 3D-world only.
- No import from HarvestMap's saved variables. That would be the real upgrade,
  since HarvestMap-Data ships community heavy sack locations and this add-on
  starts empty.
