-- Moose Sack Glow
--
-- Puts a glowing marker on heavy sack locations you have already found.
--
-- IMPORTANT, read once: the ESO add-on API is UI-only. There is no way to
-- recolour, outline or light up a world object -- that is what Zerith-Var's
-- rapport perk does, and add-ons cannot reach it. What this file does instead
-- is remember where a sack was and draw its own marker at that spot using the
-- 3D render space API. Consequences:
--   * A sack you have never walked past is invisible to this add-on.
--   * Markers show the remembered spot, not live "is a sack there right now".
--   * ZOS disables the 3D render space inside dungeons and trials, so markers
--     will not draw there. Cities and overworld are fine.
--
-- Everything that could not be verified outside the game is behind a slash
-- command so you can check it in ten seconds in-game. See README.md.

local ADDON_NAME    = "MooseSackGlow"
local SV_NAME       = "MooseSackGlowVars"
local SV_VERSION    = 1
local UPDATE_MS     = 100
local CM_PER_M      = 100

local MSG = {}
_G[ADDON_NAME] = MSG

local sv
local markers      = {}     -- pooled marker windows
local temps        = {}     -- unsaved test markers
local render3D     = true   -- set false if the 3D API is missing
local lastSackNode = nil    -- node the reticle last sat on, for loot tracking
local lastSackAt   = 0      -- when that happened, so a mob's loot bag is not credited to it

local DEFAULTS = {
    enabled       = true,
    -- interactable names that count as a sack. Add your own with /sackglow learn.
    names = {
        ["Heavy Sack"]   = true,
        ["Heavy Crate"]  = true,
        ["Heavy Barrel"] = true,
        ["Heavy Bag"]    = true,
    },
    nodes         = {},     -- [zoneId] = { {x,y,z,name,seen,looted}, ... }  (cm)
    drawDistance  = 60,     -- metres: draw markers closer than this
    mergeDistance = 4,      -- metres: within this of a known node = same node
    markerHeight  = 1.2,    -- metres above the recorded point
    markerSize    = 1.0,    -- metres, edge length of the marker quad
    maxMarkers    = 24,
    orient        = "billboard",  -- billboard | flat | fixed
    mirror        = false,        -- flip the billboard if the label reads backwards
    texture       = "",           -- optional .dds laid over the glow; "" = glow only
    showLabel     = true,
    showDistance  = true,
    pulse         = true,
    announce      = true,
    colour        = { 1.0, 0.78, 0.25 },
    cooldown      = 30,     -- minutes to dim a marker after you loot it
}

-- ---------------------------------------------------------------- utilities

local function Msg(fmt, ...)
    local text = select("#", ...) > 0 and string.format(fmt, ...) or fmt
    text = "|cFFC24D[Sack Glow]|r " .. text
    if CHAT_ROUTER and CHAT_ROUTER.AddSystemMessage then
        CHAT_ROUTER:AddSystemMessage(text)
    elseif CHAT_SYSTEM and CHAT_SYSTEM.AddMessage then
        CHAT_SYSTEM:AddMessage(text)
    else
        d(text)
    end
end

-- zoneId, x, y, z in centimetres. Raw world position is the stable one --
-- normalised map coords are per-map and useless for 3D placement.
local function PlayerPosition()
    if type(GetUnitRawWorldPosition) == "function" then
        return GetUnitRawWorldPosition("player")
    end
    if type(GetUnitWorldPosition) == "function" then
        return GetUnitWorldPosition("player")
    end
    return nil
end

local function Distance3D(ax, ay, az, bx, by, bz)
    local dx, dy, dz = ax - bx, ay - by, az - bz
    return math.sqrt(dx * dx + dy * dy + dz * dz)
end

local function ZoneNodes(zoneId, create)
    local list = sv.nodes[zoneId]
    if not list and create then
        list = {}
        sv.nodes[zoneId] = list
    end
    return list
end

local function ReticleInteractable()
    if type(GetGameCameraInteractableActionInfo) ~= "function" then return nil end
    -- returns action, name, interactBlocked, ... -- only the first two are stable
    -- enough to rely on across patches.
    local action, name = GetGameCameraInteractableActionInfo()
    return name, action
end

-- ------------------------------------------------------------------- nodes

-- Records a node at the player's feet. The sack is whatever you are standing
-- next to, so the marker lands within a couple of metres of it.
function MSG.Record(name, quiet)
    local zoneId, x, y, z = PlayerPosition()
    if not zoneId then
        if not quiet then Msg("Could not read your world position.") end
        return nil
    end

    local list  = ZoneNodes(zoneId, true)
    local merge = sv.mergeDistance * CM_PER_M
    for _, node in ipairs(list) do
        if Distance3D(node.x, node.y, node.z, x, y, z) <= merge then
            node.seen = GetTimeStamp()
            node.name = name or node.name
            return node, false
        end
    end

    local node = { x = x, y = y, z = z, name = name or "Heavy Sack", seen = GetTimeStamp() }
    table.insert(list, node)
    if sv.announce and not quiet then
        Msg("New %s recorded (%d in this zone).", node.name, #list)
    end
    return node, true
end

function MSG.NearestNode(maxMetres)
    local zoneId, x, y, z = PlayerPosition()
    if not zoneId then return nil end
    local list = ZoneNodes(zoneId)
    if not list then return nil end

    local best, bestDist, bestIndex
    for i, node in ipairs(list) do
        local dist = Distance3D(node.x, node.y, node.z, x, y, z)
        if not bestDist or dist < bestDist then
            best, bestDist, bestIndex = node, dist, i
        end
    end
    if best and (not maxMetres or bestDist <= maxMetres * CM_PER_M) then
        return best, bestDist / CM_PER_M, bestIndex, list
    end
    return nil
end

function MSG.CountNodes()
    local zoneId = PlayerPosition()
    local here   = zoneId and ZoneNodes(zoneId) and #ZoneNodes(zoneId) or 0
    local total, zones = 0, 0
    for _, list in pairs(sv.nodes) do
        zones = zones + 1
        total = total + #list
    end
    return here, total, zones
end

-- ----------------------------------------------------------------- markers

local function CreateMarker(index)
    local wm  = WINDOW_MANAGER
    local tlw = wm:CreateTopLevelWindow(ADDON_NAME .. "Marker" .. index)
    tlw:SetHidden(true)
    tlw:SetMouseEnabled(false)
    tlw:SetDimensions(128, 128)
    if DL_OVERLAY and tlw.SetDrawLayer then tlw:SetDrawLayer(DL_OVERLAY) end

    if type(tlw.Create3DRenderSpace) ~= "function" then return nil end
    tlw:Create3DRenderSpace()
    if tlw.Set3DRenderSpaceUsesDepthBuffer then
        -- false = draw through walls, which is the point of a farming marker
        tlw:Set3DRenderSpaceUsesDepthBuffer(false)
    end
    if tlw.Set3DLocalDimensions then
        tlw:Set3DLocalDimensions(sv.markerSize, sv.markerSize)
    end

    -- CT_BACKDROP needs no texture file, so the marker is visible even if the
    -- optional .dds path below is wrong for your client.
    local glow = wm:CreateControl(tlw:GetName() .. "Glow", tlw, CT_BACKDROP)
    glow:SetAnchor(TOPLEFT, tlw, TOPLEFT, 0, 24)
    glow:SetAnchor(BOTTOMRIGHT, tlw, BOTTOMRIGHT, 0, 0)
    if glow.SetEdgeTexture then glow:SetEdgeTexture("", 8, 8, 2) end

    local icon = wm:CreateControl(tlw:GetName() .. "Icon", tlw, CT_TEXTURE)
    icon:SetAnchor(TOPLEFT, glow, TOPLEFT, 0, 0)
    icon:SetAnchor(BOTTOMRIGHT, glow, BOTTOMRIGHT, 0, 0)
    icon:SetHidden(true)

    local label = wm:CreateControl(tlw:GetName() .. "Label", tlw, CT_LABEL)
    label:SetAnchor(TOP, tlw, TOP, 0, 0)
    label:SetFont("ZoFontGameLarge")
    label:SetHorizontalAlignment(TEXT_ALIGN_CENTER)

    local marker = { tlw = tlw, glow = glow, icon = icon, label = label }
    markers[index] = marker
    return marker
end

local function Normalise2D(x, z)
    local len = math.sqrt(x * x + z * z)
    if len < 0.0001 then return 0, 1 end
    return x / len, z / len
end

-- Turns the quad to face the player. Yaw only, so markers stay upright.
local function OrientMarker(tlw, mx, my, mz, px, py, pz)
    if sv.orient == "fixed" or type(tlw.Set3DRenderSpaceForward) ~= "function" then
        return
    end

    if sv.orient == "flat" then
        -- lie the quad on the ground
        tlw:Set3DRenderSpaceForward(0, 1, 0)
        tlw:Set3DRenderSpaceUp(0, 0, 1)
        tlw:Set3DRenderSpaceRight(sv.mirror and -1 or 1, 0, 0)
        return
    end

    local fx, fz = Normalise2D(px - mx, pz - mz)
    tlw:Set3DRenderSpaceForward(fx, 0, fz)
    tlw:Set3DRenderSpaceUp(0, 1, 0)
    if sv.mirror then
        tlw:Set3DRenderSpaceRight(-fz, 0, fx)
    else
        tlw:Set3DRenderSpaceRight(fz, 0, -fx)
    end
end

local function HideMarkersFrom(index)
    for i = index, #markers do
        markers[i].tlw:SetHidden(true)
    end
end

local function CollectVisible(zoneId, px, py, pz)
    local visible = {}
    local range   = sv.drawDistance * CM_PER_M

    local function consider(node)
        local dist = Distance3D(node.x, node.y, node.z, px, py, pz)
        if dist <= range then
            table.insert(visible, { node = node, dist = dist })
        end
    end

    local list = ZoneNodes(zoneId)
    if list then
        for _, node in ipairs(list) do consider(node) end
    end
    for i = #temps, 1, -1 do
        local temp = temps[i]
        if temp.zoneId ~= zoneId or GetTimeStamp() - temp.seen > 120 then
            table.remove(temps, i)
        else
            consider(temp)
        end
    end

    table.sort(visible, function(a, b) return a.dist < b.dist end)
    return visible
end

local function UpdateMarkers()
    if not sv.enabled or not render3D then
        HideMarkersFrom(1)
        return
    end

    local zoneId, px, py, pz = PlayerPosition()
    if not zoneId then
        HideMarkersFrom(1)
        return
    end

    local visible = CollectVisible(zoneId, px, py, pz)
    local prx, pry, prz = WorldPositionToGuiRender3DPosition(px, py, pz)

    local pulse = 1.0
    if sv.pulse then
        pulse = 0.62 + 0.38 * math.abs(math.sin(GetGameTimeMilliseconds() / 900))
    end

    local shown = 0
    for _, entry in ipairs(visible) do
        if shown >= sv.maxMarkers then break end
        shown = shown + 1

        local marker = markers[shown] or CreateMarker(shown)
        if not marker then
            render3D = false
            Msg("This client has no 3D render space API -- markers are off. Use /sackglow nearest instead.")
            HideMarkersFrom(1)
            return
        end

        local node = entry.node
        local mx, my, mz = WorldPositionToGuiRender3DPosition(node.x, node.y, node.z)
        marker.tlw:Set3DRenderSpaceOrigin(mx, my + sv.markerHeight, mz)
        OrientMarker(marker.tlw, mx, my, mz, prx, pry, prz)
        if marker.tlw.Set3DLocalDimensions then
            marker.tlw:Set3DLocalDimensions(sv.markerSize, sv.markerSize)
        end

        local r, g, b = sv.colour[1], sv.colour[2], sv.colour[3]
        local alpha   = 0.55 * pulse
        local onCooldown = node.looted and (GetTimeStamp() - node.looted) < sv.cooldown * 60
        if onCooldown then
            alpha = alpha * 0.3
            r, g, b = 0.6, 0.6, 0.6
        end
        marker.glow:SetCenterColor(r, g, b, alpha)
        if marker.glow.SetEdgeColor then marker.glow:SetEdgeColor(r, g, b, alpha) end

        if sv.texture ~= "" then
            marker.icon:SetTexture(sv.texture)
            marker.icon:SetColor(r, g, b, math.min(1, alpha * 1.6))
            marker.icon:SetHidden(false)
        else
            marker.icon:SetHidden(true)
        end

        if sv.showLabel then
            local text = node.name or "Heavy Sack"
            if sv.showDistance then
                text = string.format("%s  %dm", text, math.floor(entry.dist / CM_PER_M + 0.5))
            end
            if onCooldown then
                local minutes = math.floor((sv.cooldown * 60 - (GetTimeStamp() - node.looted)) / 60)
                text = string.format("%s (looted, ~%dm)", text, minutes)
            end
            marker.label:SetText(text)
            marker.label:SetColor(r, g, b, math.min(1, alpha + 0.35))
            marker.label:SetHidden(false)
        else
            marker.label:SetHidden(true)
        end

        marker.tlw:SetHidden(false)
    end

    HideMarkersFrom(shown + 1)
end

-- ------------------------------------------------------------------ events

local function OnReticleTargetChanged()
    if not sv.enabled then return end
    local name = ReticleInteractable()
    if not name then return end
    if sv.names[name] then
        lastSackNode = MSG.Record(name)
        lastSackAt   = GetTimeStamp()
    end
end

-- EVENT_LOOT_CLOSED fires for every loot window, including mobs, so only credit
-- it to a sack we had the reticle on recently and are still standing next to.
local function OnLootClosed()
    if not lastSackNode then return end

    local now = GetTimeStamp()
    if now - lastSackAt > 60 then
        lastSackNode = nil
        return
    end

    local zoneId, x, y, z = PlayerPosition()
    if zoneId and Distance3D(lastSackNode.x, lastSackNode.y, lastSackNode.z, x, y, z) <= 8 * CM_PER_M then
        lastSackNode.looted = now
    end
    lastSackNode = nil
end

-- ---------------------------------------------------------------- commands

local function ParseNumber(value, min, max, fallback)
    local number = tonumber(value)
    if not number then return fallback end
    return math.max(min, math.min(max, number))
end

local HELP = {
    "/sackglow on|off            markers on or off",
    "/sackglow mark              record a sack where you stand",
    "/sackglow learn             teach it the name of whatever you are looking at",
    "/sackglow forget            delete the nearest recorded node",
    "/sackglow names             list the names it treats as sacks",
    "/sackglow test              drop a throwaway marker at your feet (2 min)",
    "/sackglow nearest           print the nearest node and its distance",
    "/sackglow count             how many nodes here and overall",
    "/sackglow billboard|flat|fixed    how the marker is turned",
    "/sackglow mirror            flip the marker if the label reads backwards",
    "/sackglow size|height|range <metres>",
    "/sackglow texture <path|none>",
    "/sackglow clear zone|all",
}

local function HandleCommand(argument)
    -- plain Lua rather than zo_strsplit, so a path argument with spaces survives
    local command, rest = string.match(argument or "", "^%s*(%S*)%s*(.-)%s*$")
    command = string.lower(command or "")
    rest    = rest or ""

    if command == "" or command == "help" then
        Msg("markers %s, %d node(s) in this zone.", sv.enabled and "on" or "off", (MSG.CountNodes()))
        for _, line in ipairs(HELP) do Msg(line) end

    elseif command == "on" or command == "off" then
        sv.enabled = (command == "on")
        Msg("Markers %s.", sv.enabled and "on" or "off")

    elseif command == "mark" then
        local name = ReticleInteractable() or "Heavy Sack"
        local node, isNew = MSG.Record(name, true)
        if node then
            Msg(isNew and "Recorded '%s' here." or "Already had a node here ('%s'), refreshed it.", node.name)
        end

    elseif command == "learn" then
        local name = ReticleInteractable()
        if not name then
            Msg("Look at the container first, then run /sackglow learn.")
        else
            sv.names[name] = true
            MSG.Record(name, true)
            Msg("'%s' now counts as a sack, and this one is recorded.", name)
        end

    elseif command == "forget" then
        local node, distance, index, list = MSG.NearestNode(20)
        if not node then
            Msg("No recorded node within 20m.")
        else
            table.remove(list, index)
            Msg("Forgot '%s' (%.1fm away).", node.name, distance)
        end

    elseif command == "names" then
        local names = {}
        for name in pairs(sv.names) do table.insert(names, name) end
        table.sort(names)
        Msg("Counts as a sack: %s", table.concat(names, ", "))

    elseif command == "test" then
        local zoneId, x, y, z = PlayerPosition()
        if not zoneId then
            Msg("Could not read your world position.")
        else
            table.insert(temps, { zoneId = zoneId, x = x, y = y, z = z,
                                  name = "TEST", seen = GetTimeStamp() })
            Msg("Test marker at your feet for 2 minutes -- back up and look at it.")
        end

    elseif command == "nearest" then
        local node, distance = MSG.NearestNode()
        if not node then
            Msg("Nothing recorded in this zone yet.")
        else
            Msg("Nearest: '%s', %.1fm away.", node.name, distance)
        end

    elseif command == "count" then
        local here, total, zones = MSG.CountNodes()
        Msg("%d here, %d total across %d zone(s).", here, total, zones)

    elseif command == "billboard" or command == "flat" or command == "fixed" then
        sv.orient = command
        Msg("Marker orientation: %s.", command)

    elseif command == "mirror" then
        sv.mirror = not sv.mirror
        Msg("Mirror %s.", sv.mirror and "on" or "off")

    elseif command == "size" then
        sv.markerSize = ParseNumber(rest, 0.2, 10, sv.markerSize)
        Msg("Marker size %.1fm.", sv.markerSize)

    elseif command == "height" then
        sv.markerHeight = ParseNumber(rest, 0, 10, sv.markerHeight)
        Msg("Marker floats %.1fm above the spot.", sv.markerHeight)

    elseif command == "range" then
        sv.drawDistance = ParseNumber(rest, 5, 300, sv.drawDistance)
        Msg("Drawing markers within %dm.", sv.drawDistance)

    elseif command == "texture" then
        if rest == "" or string.lower(rest) == "none" then
            sv.texture = ""
            Msg("Texture overlay off -- plain glow.")
        else
            sv.texture = rest
            Msg("Texture set to %s. If markers vanish, the path is wrong: /sackglow texture none.", rest)
        end

    elseif command == "clear" then
        if string.lower(rest) == "all" then
            sv.nodes = {}
            Msg("Cleared every node in every zone.")
        elseif string.lower(rest) == "zone" then
            local zoneId = PlayerPosition()
            if zoneId then
                sv.nodes[zoneId] = nil
                Msg("Cleared this zone.")
            end
        else
            Msg("/sackglow clear zone   or   /sackglow clear all")
        end

    else
        Msg("Unknown option '%s'. Try /sackglow help.", command)
    end
end

function MSG.Toggle()
    sv.enabled = not sv.enabled
    Msg("Markers %s.", sv.enabled and "on" or "off")
end

function MSG.MarkHere()
    HandleCommand("mark")
end

-- ------------------------------------------------------------------- setup

local function RegisterEventIfPresent(eventName, handler)
    local event = _G[eventName]
    if event then
        EVENT_MANAGER:RegisterForEvent(ADDON_NAME, event, handler)
    end
end

local function OnAddOnLoaded(_, name)
    if name ~= ADDON_NAME then return end
    EVENT_MANAGER:UnregisterForEvent(ADDON_NAME, EVENT_ADD_ON_LOADED)

    sv = ZO_SavedVars:NewAccountWide(SV_NAME, SV_VERSION, nil, DEFAULTS)

    if type(WorldPositionToGuiRender3DPosition) ~= "function" then
        render3D = false
        Msg("This client has no WorldPositionToGuiRender3DPosition -- markers disabled, recording still works.")
    end

    RegisterEventIfPresent("EVENT_RETICLE_TARGET_CHANGED", OnReticleTargetChanged)
    RegisterEventIfPresent("EVENT_LOOT_CLOSED", OnLootClosed)

    SLASH_COMMANDS["/sackglow"] = HandleCommand
    SLASH_COMMANDS["/sackmark"] = function() HandleCommand("mark") end

    EVENT_MANAGER:RegisterForUpdate(ADDON_NAME, UPDATE_MS, UpdateMarkers)
end

EVENT_MANAGER:RegisterForEvent(ADDON_NAME, EVENT_ADD_ON_LOADED, OnAddOnLoaded)
