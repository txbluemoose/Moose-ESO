/* Loadout Planner. Reads window.ESO_PLANNER (generated from the guides by
   scripts/build_planner_data.py) and keeps your per-character gear in this
   browser's localStorage. Nothing leaves the page. */
(function () {
  "use strict";

  var DATA = window.ESO_PLANNER;
  var root = document.getElementById("eso-planner");
  if (!root) return;
  if (!DATA || !DATA.builds || !DATA.builds.length) {
    root.innerHTML = '<p class="ep-muted">Planner data failed to load. Try a hard refresh.</p>';
    return;
  }

  var STORE = "eso-planner-v1";
  var TOKEN_KEY = "eso-planner-token";
  var GIST_FILE = "eso-characters.json";
  var WEIGHTS = ["", "Light", "Medium", "Heavy", "—"];
  var state = loadState();
  var syncMsg = null;      // {text, level} shown in the sync card
  var syncBusy = false;

  // ---- storage ------------------------------------------------------------

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORE);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && Array.isArray(s.chars)) return s;
      }
    } catch (e) { /* private mode, cleared storage, blocked cookies */ }
    return { v: 1, activeId: "", chars: [] };
  }

  function saveState() {
    try { window.localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
  }

  function newId() {
    return "c" + Math.random().toString(36).slice(2, 9);
  }

  /* The token lives under its own key so "clear planner data" and "forget
     token" stay independent of each other. */
  function getToken() {
    try { return window.localStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; }
  }

  function setToken(t) {
    try {
      if (t) window.localStorage.setItem(TOKEN_KEY, t);
      else window.localStorage.removeItem(TOKEN_KEY);
    } catch (e) {}
  }

  /* Mark a character as changed so a pull can tell which side is newer. */
  function touch(ch) {
    if (ch) ch.updated = Date.now();
  }

  function gh(path, opts) {
    opts = opts || {};
    opts.headers = Object.assign({
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Authorization": "Bearer " + getToken()
    }, opts.headers || {});
    return fetch("https://api.github.com" + path, opts).then(function (r) {
      return r.json().then(function (body) { return { r: r, body: body }; },
                           function () { return { r: r, body: {} }; });
    }).then(function (out) {
      if (!out.r.ok) {
        var msg = out.body && out.body.message ? out.body.message : "HTTP " + out.r.status;
        if (out.r.status === 401) msg = "GitHub rejected the token (401). Check you pasted it whole and it hasn't expired.";
        if (out.r.status === 404) msg = "Not found (404) — either the Gist ID is wrong, or the token doesn't have the Gists permission.";
        var e = new Error(msg); e.status = out.r.status; throw e;
      }
      return out.body;
    });
  }

  function rosterPayload() {
    return JSON.stringify({ v: 1, savedAt: new Date().toISOString(), chars: state.chars }, null, 1);
  }

  function mergeChars(remote) {
    var byId = {}, added = 0, updated = 0;
    state.chars.forEach(function (c) { byId[c.id] = c; });
    remote.forEach(function (rc) {
      if (!rc || !rc.id) return;
      var lc = byId[rc.id];
      if (!lc) { state.chars.push(rc); added++; return; }
      if ((rc.updated || 0) > (lc.updated || 0)) {
        Object.keys(rc).forEach(function (k) { lc[k] = rc[k]; });
        updated++;
      }
    });
    return { added: added, updated: updated };
  }

  // ---- helpers ------------------------------------------------------------

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cleanSet(s) {
    return String(s || "").replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
  }

  function norm(s) {
    return cleanSet(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  /* Forgiving on purpose: "Crushing Wall" should match the guide's
     "Crushing Wall Ice Staff", and case/punctuation should never matter. */
  function setsMatch(a, b) {
    a = norm(a); b = norm(b);
    if (!a || !b) return false;
    return a === b || a.indexOf(b) === 0 || b.indexOf(a) === 0;
  }

  function isRealWeight(w) {
    return ["light", "medium", "heavy"].indexOf(String(w || "").toLowerCase()) >= 0;
  }

  function activeChar() {
    for (var i = 0; i < state.chars.length; i++) {
      if (state.chars[i].id === state.activeId) return state.chars[i];
    }
    return null;
  }

  function buildById(id) {
    for (var i = 0; i < DATA.builds.length; i++) {
      if (DATA.builds[i].id === id) return DATA.builds[i];
    }
    return null;
  }

  function companionByName(name) {
    for (var i = 0; i < DATA.companions.length; i++) {
      if (DATA.companions[i].name === name) return DATA.companions[i];
    }
    return null;
  }

  function currentSetup(ch, build) {
    if (!build || !build.gear.length) return null;
    return build.gear[Math.min(ch.setup || 0, build.gear.length - 1)];
  }

  function targetSet(row, variant) {
    var v = row.sets[Math.min(variant || 0, row.sets.length - 1)] || row.sets[0] || "";
    // "same" in an alternate column means "unchanged from the first column"
    if (norm(v) === "same") v = row.sets[0] || "";
    return cleanSet(v);
  }

  // ---- set maths ----------------------------------------------------------

  function analyse(setup, variant, gear) {
    var targets = [];   // {name, need, have, missing:[], slots:[]}
    var byKey = {};
    var issues = [];
    var extras = {};

    setup.rows.forEach(function (row) {
      var want = targetSet(row, variant);
      if (!want || want === "—") return;
      var k = norm(want);
      if (!byKey[k]) {
        byKey[k] = { name: want, need: 0, have: 0, missing: [], slots: [] };
        targets.push(byKey[k]);
      }
      byKey[k].need += row.pieces;
      byKey[k].slots.push(row.slot);
    });

    setup.rows.forEach(function (row) {
      var want = targetSet(row, variant);
      var got = gear[row.slot] || {};
      var haveSet = cleanSet(got.set || "");
      var k = norm(want);

      if (!haveSet) {
        if (byKey[k]) byKey[k].missing.push({ slot: row.slot, why: "nothing recorded" });
        issues.push({ slot: row.slot, kind: "empty", want: want, level: "idle" });
        return;
      }

      if (setsMatch(haveSet, want)) {
        if (byKey[k]) byKey[k].have += row.pieces;
        var wrong = [];
        if (isRealWeight(row.weight) && got.weight && got.weight !== "—" &&
            got.weight.toLowerCase() !== row.weight.toLowerCase()) {
          wrong.push({ what: "weight", have: got.weight, want: row.weight });
        }
        if (row.trait && row.trait !== "—" && got.trait &&
            norm(got.trait) !== norm(row.trait)) {
          wrong.push({ what: "trait", have: got.trait, want: row.trait });
        }
        if (wrong.length) {
          issues.push({ slot: row.slot, kind: "attrs", want: want, wrong: wrong, level: "warn" });
        }
        return;
      }

      if (byKey[k]) byKey[k].missing.push({ slot: row.slot, why: "wearing " + haveSet });
      var ek = norm(haveSet);
      extras[ek] = extras[ek] || { name: haveSet, pieces: 0, slots: [] };
      extras[ek].pieces += row.pieces;
      extras[ek].slots.push(row.slot);
      issues.push({ slot: row.slot, kind: "set", want: want, have: haveSet, level: "bad" });
    });

    var extraList = Object.keys(extras).map(function (k) { return extras[k]; });
    return { targets: targets, issues: issues, extras: extraList };
  }

  // ---- rendering ----------------------------------------------------------

  function optionList(items, selected) {
    return items.map(function (o) {
      var v = typeof o === "string" ? o : o.value;
      var l = typeof o === "string" ? o : o.label;
      return '<option value="' + esc(v) + '"' + (String(v) === String(selected) ? " selected" : "") +
        ">" + esc(l) + "</option>";
    }).join("");
  }

  function renderCharacterCard() {
    var ch = activeChar();
    var opts = state.chars.map(function (c) {
      return { value: c.id, label: c.name || "(unnamed)" };
    });
    opts.unshift({ value: "", label: state.chars.length ? "— pick a character —" : "— no characters yet —" });

    return '<div class="ep-card">' +
      "<h3>1 · Character</h3>" +
      '<div class="ep-row">' +
        '<div class="ep-field"><label for="ep-char">Saved characters</label>' +
          '<select id="ep-char" data-act="pickChar">' + optionList(opts, state.activeId) + "</select></div>" +
        (ch ? '<div class="ep-field"><label for="ep-name">Name</label>' +
          '<input type="text" id="ep-name" data-act="rename" value="' + esc(ch.name) + '" placeholder="e.g. Moose"></div>' : "") +
        '<div><button data-act="addChar">＋ New character</button></div>' +
        (ch ? '<div><button class="ep-ghost" data-act="delChar">Delete</button></div>' : "") +
      "</div>" +
      '<p class="ep-muted" style="margin:.6rem 0 0">Saved in this browser only — nothing is uploaded, and it won\'t follow you to another device.</p>' +
      "</div>";
  }

  function renderBuildCard(ch) {
    var groups = {};
    DATA.builds.forEach(function (b) {
      var key = b.player === "Wife" ? "Hers (one-bar)" : "His (full builds)";
      (groups[key] = groups[key] || []).push(b);
    });

    var html = '<option value="">— pick a build —</option>';
    Object.keys(groups).sort().forEach(function (g) {
      html += '<optgroup label="' + esc(g) + '">';
      groups[g].slice().sort(function (a, b) { return a.name.localeCompare(b.name); })
        .forEach(function (b) {
          html += '<option value="' + esc(b.id) + '"' + (b.id === ch.buildId ? " selected" : "") +
            ">" + esc(b.name) + "</option>";
        });
      html += "</optgroup>";
    });

    var build = buildById(ch.buildId);
    var extra = "";
    if (build) {
      if (build.gear.length > 1) {
        extra += '<div class="ep-field"><label for="ep-setup">Gear setup</label><select id="ep-setup" data-act="pickSetup">' +
          optionList(build.gear.map(function (g, i) { return { value: i, label: g.name }; }), ch.setup || 0) +
          "</select></div>";
      }
      var setup = currentSetup(ch, build);
      if (setup && setup.variants.length > 1) {
        extra += '<div class="ep-field"><label for="ep-variant">Which version</label><select id="ep-variant" data-act="pickVariant">' +
          optionList(setup.variants.map(function (v, i) { return { value: i, label: v }; }), ch.variant || 0) +
          "</select></div>";
      }
    }

    return '<div class="ep-card">' +
      "<h3>2 · Build</h3>" +
      '<div class="ep-row">' +
        '<div class="ep-field"><label for="ep-build">Build guide</label><select id="ep-build" data-act="pickBuild">' + html + "</select></div>" +
        extra +
      "</div>" +
      (build ? '<p class="ep-muted" style="margin:.6rem 0 0">' + esc(build.subtitle || "") +
        ' · <a href="../' + esc(build.url) + '">open the full guide ↗</a></p>' : "") +
      "</div>";
  }

  function renderCompanionCard(ch) {
    var yes = ch.useComp === true, no = ch.useComp === false;
    var html = '<div class="ep-card"><h3>3 · Companion</h3>' +
      '<div class="ep-toggle">' +
        '<label><input type="radio" name="ep-usecomp" data-act="useComp" value="yes"' + (yes ? " checked" : "") + "> Yes, running one</label>" +
        '<label><input type="radio" name="ep-usecomp" data-act="useComp" value="no"' + (no ? " checked" : "") + "> No companion</label>" +
      "</div>";

    if (yes) {
      var opts = DATA.companions.map(function (c) {
        return { value: c.name, label: c.name + " — " + c.role };
      });
      opts.unshift({ value: "", label: "— pick a companion —" });
      html += '<div class="ep-row" style="margin-top:.7rem">' +
        '<div class="ep-field"><label for="ep-comp">Companion</label><select id="ep-comp" data-act="pickComp">' +
        optionList(opts, ch.comp || "") + "</select></div></div>";

      var c = companionByName(ch.comp);
      if (c) html += renderCompanionDetail(c);
    } else if (no) {
      html += '<p class="ep-muted" style="margin:.7rem 0 0">Solo it is. ' +
        '<a href="../shared/companions/">The companion page</a> has the tier list if you change your mind.</p>';
    }
    return html + "</div>";
  }

  function renderCompanionDetail(c) {
    var out = "";
    if (c.recruit) {
      out += '<p style="margin:.8rem 0 .3rem"><strong>Not recruited yet?</strong> Pick up <em>' +
        esc(c.recruit.quest) + "</em> — " + esc(c.recruit.where) +
        ' <span class="ep-muted">(' + esc(c.recruit.needs) + ")</span></p>";
    }
    out += '<div class="ep-bars" style="margin-top:.6rem">';
    out += '<div class="ep-bar"><h4>Bar order (cast priority)</h4><ol>' +
      c.bar.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
      (c.ult ? '<p class="ep-ult"><strong>Ult:</strong> ' + esc(c.ult) + "</p>" : "") + "</div>";
    out += '<div class="ep-bar"><h4>Gear</h4><div class="ep-scroll"><table><thead><tr><th>Slot</th><th>Wear</th><th>Trait</th></tr></thead><tbody>' +
      c.gear.map(function (g) {
        return "<tr><td>" + esc(g.slot) + "</td><td>" + esc(g.wear) + "</td><td>" + esc(g.trait) + "</td></tr>";
      }).join("") + "</tbody></table></div></div>";
    out += "</div>";
    if (c.brings && c.brings.length) {
      out += '<p style="margin:.8rem 0 .2rem"><strong>What they bring you</strong></p><ul class="ep-need">' +
        c.brings.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>";
    }
    if (c.perk) out += '<p class="ep-muted" style="margin:.5rem 0 0">' + esc(c.perk) + "</p>";
    if (c.rapport) out += '<p class="ep-muted" style="margin:.2rem 0 0"><strong>Rapport:</strong> ' + esc(c.rapport) + "</p>";
    return out;
  }

  function renderBars(build) {
    if (!build.bars.length) {
      var ref = build.barsRef;
      return '<div class="ep-card"><h3>4 · Skills</h3><p class="ep-muted">This is a gear-only variant — the bars are the same as ' +
        (ref ? '<a href="' + esc(ref.url) + '">' + esc(ref.title) + "</a>" : "the main guide for this class") +
        ".</p></div>";
    }
    var html = '<div class="ep-card"><h3>4 · Skills</h3>';
    build.bars.forEach(function (bar, i) {
      if (build.bars.length > 1) html += "<h4>" + esc(bar.name) + "</h4>";
      html += '<div class="ep-bars">';
      bar.columns.forEach(function (col) {
        if (!col.skills.length) return;
        html += '<div class="ep-bar"><h4>' + esc(col.label) + "</h4><ol>" +
          col.skills.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
          (col.ult ? '<p class="ep-ult"><strong>Ult:</strong> ' + esc(col.ult) + "</p>" : "") + "</div>";
      });
      html += "</div>";
      if (i < build.bars.length - 1) html += "<hr>";
    });
    return html + "</div>";
  }

  function renderTracker(ch, setup) {
    var gear = ch.gear || {};
    var rows = setup.rows.map(function (row) {
      var got = gear[row.slot] || {};
      var want = targetSet(row, ch.variant || 0);
      return "<tr>" +
        '<td class="ep-slot">' + esc(row.slot) +
          (row.pieces > 1 ? ' <span class="ep-muted">(' + row.pieces + " pc)</span>" : "") + "</td>" +
        '<td class="ep-target">' + esc(want) + "<br>" +
          esc([row.weight, row.trait].filter(function (x) { return x && x !== "—"; }).join(" · ")) + "</td>" +
        '<td><input type="text" list="ep-sets" data-slot="' + esc(row.slot) + '" data-f="set" value="' +
          esc(got.set || "") + '" placeholder="set you\'re wearing"></td>' +
        "<td>" + (isRealWeight(row.weight)
          ? '<select data-slot="' + esc(row.slot) + '" data-f="weight">' +
            optionList(WEIGHTS.map(function (w) { return { value: w, label: w || "—" }; }), got.weight || "") + "</select>"
          : '<span class="ep-muted">n/a</span>') + "</td>" +
        '<td><input type="text" list="ep-traits" data-slot="' + esc(row.slot) + '" data-f="trait" value="' +
          esc(got.trait || "") + '" placeholder="trait"></td>' +
        '<td><button class="ep-ghost ep-mini" data-act="matchRow" data-slot="' + esc(row.slot) + '">match</button></td>' +
        "</tr>";
    }).join("");

    return '<div class="ep-card"><h3>5 · What you actually have</h3>' +
      (setup.weightNote ? '<p class="ep-muted">' + esc(setup.weightNote) + "</p>" : "") +
      '<div class="ep-row" style="margin-bottom:.6rem">' +
        '<div><button data-act="fillAll">Fill everything from the guide</button></div>' +
        '<div><button class="ep-ghost" data-act="clearAll">Clear</button></div>' +
      "</div>" +
      '<div class="ep-scroll"><table class="ep-track"><thead><tr>' +
        "<th>Slot</th><th>Guide wants</th><th>Set you have</th><th>Weight</th><th>Trait</th><th></th>" +
      "</tr></thead><tbody>" + rows + "</tbody></table></div></div>";
  }

  function renderNeeds(ch, setup) {
    var res = analyse(setup, ch.variant || 0, ch.gear || {});
    var anyEntry = Object.keys(ch.gear || {}).some(function (k) { return (ch.gear[k] || {}).set; });

    var html = '<div class="ep-card"><h3>6 · What you still need</h3>';
    if (!anyEntry) {
      return html + '<p class="ep-muted">Fill in what you\'re wearing above and this fills itself in — set by set, slot by slot.</p></div>';
    }

    html += "<h4>Set progress</h4><ul class=\"ep-need\">";
    res.targets.forEach(function (t) {
      var done = t.have >= t.need;
      var pill = '<span class="ep-pill ' + (done ? "ep-ok" : t.have ? "ep-warn" : "ep-bad") + '">' +
        t.have + "/" + t.need + "</span>";
      html += "<li>" + pill + " <strong>" + esc(t.name) + "</strong>";
      if (!done) {
        html += " — still need " + t.missing.map(function (m) {
          return "<strong>" + esc(m.slot) + "</strong> <span class=\"ep-muted\">(" + esc(m.why) + ")</span>";
        }).join(", ");
      }
      html += "</li>";
    });
    html += "</ul>";

    var attrs = res.issues.filter(function (i) { return i.kind === "attrs"; });
    if (attrs.length) {
      html += "<h4>Right set, wrong trait or weight</h4><ul class=\"ep-need\">";
      attrs.forEach(function (i) {
        html += "<li><span class=\"ep-pill ep-warn\">fix</span> <strong>" + esc(i.slot) + "</strong> — " +
          i.wrong.map(function (w) {
            return "you have " + esc(w.have) + " " + w.what + ", guide wants <strong>" + esc(w.want) + "</strong>";
          }).join("; ") + "</li>";
      });
      html += "</ul>";
    }

    if (res.extras.length) {
      html += "<h4>Not part of this build</h4><ul class=\"ep-need\">";
      res.extras.forEach(function (e) {
        html += "<li>" + esc(e.name) + " <span class=\"ep-muted\">(" + esc(e.slots.join(", ")) + ")</span></li>";
      });
      html += "</ul>";
    }

    html += '<h4>Shopping list</h4><textarea class="ep-shop" readonly>' + esc(shoppingList(ch, setup, res)) + "</textarea>";
    return html + "</div>";
  }

  function shoppingList(ch, setup, res) {
    var build = buildById(ch.buildId);
    var lines = [(ch.name || "Character") + " — " + (build ? build.name : "") + " — " + setup.name, ""];
    var open = res.targets.filter(function (t) { return t.have < t.need; });
    if (!open.length) {
      lines.push("All target sets complete.");
    } else {
      open.forEach(function (t) {
        lines.push(t.name + "  (" + t.have + "/" + t.need + ")");
        t.missing.forEach(function (m) {
          var row = null;
          setup.rows.forEach(function (r) { if (r.slot === m.slot) row = r; });
          var bits = row ? [row.weight, row.trait].filter(function (x) { return x && x !== "—"; }).join(", ") : "";
          lines.push("   - " + m.slot + (bits ? " [" + bits + "]" : "") + "  — " + m.why);
        });
        lines.push("");
      });
    }
    var attrs = res.issues.filter(function (i) { return i.kind === "attrs"; });
    if (attrs.length) {
      lines.push("Retrait / re-weight:");
      attrs.forEach(function (i) {
        lines.push("   - " + i.slot + ": " + i.wrong.map(function (w) {
          return w.what + " " + w.have + " -> " + w.want;
        }).join("; "));
      });
    }
    return lines.join("\n");
  }

  function renderSyncCard() {
    var tok = getToken();
    var gid = (state.sync && state.sync.gistId) || "";
    var last = state.sync && state.sync.lastSync;

    var status = "";
    if (syncMsg) {
      status = '<p><span class="ep-pill ep-' + esc(syncMsg.level) + '">' +
        (syncMsg.level === "bad" ? "error" : syncMsg.level === "ok" ? "done" : "…") +
        "</span> " + esc(syncMsg.text) + "</p>";
    } else if (last) {
      status = '<p class="ep-muted">Last synced ' + esc(new Date(last).toLocaleString()) + ".</p>";
    }

    return '<div class="ep-card"><h3>7 · Sync across devices</h3>' +
      '<p class="ep-muted">Pushes your characters to a <strong>secret Gist</strong> so they follow you to your phone. ' +
      "Use a GitHub token with the <strong>Gists</strong> permission and nothing else — if it ever leaks, the damage is limited to your gists and can't touch this site.</p>" +
      status +
      '<div class="ep-row">' +
        '<div class="ep-field"><label for="ep-token">GitHub token (gists scope)</label>' +
          '<input type="password" id="ep-token" data-act="token" value="' + esc(tok) + '" placeholder="github_pat_… or ghp_…" autocomplete="off"></div>' +
        '<div class="ep-field"><label for="ep-gist">Gist ID</label>' +
          '<input type="text" id="ep-gist" data-act="gistId" value="' + esc(gid) + '" placeholder="paste the ID from the gist URL"></div>' +
      "</div>" +
      '<div class="ep-row" style="margin-top:.6rem">' +
        '<div><button data-act="push"' + (syncBusy || !tok ? " disabled" : "") + ">Push to Gist</button></div>" +
        '<div><button data-act="pull"' + (syncBusy || !tok || !gid ? " disabled" : "") + ">Pull from Gist</button></div>" +
        '<div><button class="ep-ghost" data-act="createGist"' + (syncBusy || !tok || gid ? " disabled" : "") + ">Create a new Gist</button></div>" +
        (tok ? '<div><button class="ep-ghost" data-act="forgetToken">Forget token</button></div>' : "") +
      "</div>" +
      '<details style="margin-top:.8rem"><summary>How to make the token</summary>' +
      "<ol class=\"ep-need\">" +
        "<li>GitHub → Settings → Developer settings → <strong>Personal access tokens</strong> → <em>Tokens (classic)</em>.</li>" +
        "<li>Generate new token. Tick <strong>gist</strong> — and only <strong>gist</strong>. Leave every other box unchecked.</li>" +
        "<li>Copy it into the box above, then press <strong>Create a new Gist</strong>. That makes the secret gist and remembers its ID.</li>" +
        "<li>On your phone: open this page, paste the same token <em>and</em> the Gist ID, then press <strong>Pull from Gist</strong>.</li>" +
      "</ol>" +
      '<p class="ep-muted">Push overwrites the gist with what\'s in this browser. Pull merges the gist in, keeping whichever copy of each character was edited most recently — so a character deleted on one device comes back on a pull. Delete it on both, or push from the device that\'s right.</p>' +
      "</details></div>";
  }

  function render() {
    var html = renderCharacterCard();
    var ch = activeChar();

    if (!ch) {
      html += '<div class="ep-card"><p class="ep-muted">Add a character to start. Each one remembers its build, its companion, and every piece of gear you record.</p></div>';
    } else {
      html += renderBuildCard(ch);
      var build = buildById(ch.buildId);
      if (!build) {
        html += '<div class="ep-card"><p class="ep-muted">Pick a build and the skills, gear and set tracking appear here.</p></div>';
      } else {
        html += renderCompanionCard(ch);
        html += renderBars(build);
        var setup = currentSetup(ch, build);
        if (setup) {
          html += renderTracker(ch, setup);
          html += renderNeeds(ch, setup);
        }
      }
    }

    html += renderSyncCard();

    html += '<datalist id="ep-sets">' + (DATA.sets || []).map(function (s) {
      return '<option value="' + esc(s) + '">';
    }).join("") + "</datalist>";
    html += '<datalist id="ep-traits">' + (DATA.traits || []).map(function (t) {
      return '<option value="' + esc(t) + '">';
    }).join("") + "</datalist>";

    root.innerHTML = html;
  }

  // ---- events -------------------------------------------------------------

  function setField(ch, slot, field, value) {
    ch.gear = ch.gear || {};
    ch.gear[slot] = ch.gear[slot] || {};
    ch.gear[slot][field] = value;
  }

  function runSync(act) {
    syncBusy = true;
    syncMsg = { text: act === "pull" ? "Pulling…" : "Talking to GitHub…", level: "idle" };
    render();

    var done = function (text, level) {
      syncBusy = false;
      syncMsg = { text: text, level: level };
      saveState();
      render();
    };

    var job;
    if (act === "createGist") {
      var files = {};
      files[GIST_FILE] = { content: rosterPayload() };
      job = gh("/gists", {
        method: "POST",
        body: JSON.stringify({ description: "ESO Loadout Planner — characters", public: false, files: files })
      }).then(function (g) {
        state.sync = state.sync || {};
        state.sync.gistId = g.id;
        state.sync.lastSync = Date.now();
        done("Secret gist created. ID " + g.id + " — copy it to your other devices.", "ok");
      });
    } else if (act === "push") {
      var f2 = {};
      f2[GIST_FILE] = { content: rosterPayload() };
      job = gh("/gists/" + encodeURIComponent(state.sync.gistId), {
        method: "PATCH",
        body: JSON.stringify({ files: f2 })
      }).then(function () {
        state.sync.lastSync = Date.now();
        done("Pushed " + state.chars.length + " character" + (state.chars.length === 1 ? "" : "s") + " to the gist.", "ok");
      });
    } else {
      job = gh("/gists/" + encodeURIComponent(state.sync.gistId), { method: "GET" }).then(function (g) {
        var file = g.files && g.files[GIST_FILE];
        if (!file) throw new Error("That gist has no " + GIST_FILE + " in it.");
        var parsed = JSON.parse(file.content);
        var remote = (parsed && parsed.chars) || [];
        var res = mergeChars(remote);
        if (!state.activeId && state.chars.length) state.activeId = state.chars[0].id;
        state.sync.lastSync = Date.now();
        done("Pulled: " + res.added + " new, " + res.updated + " updated, " +
             (remote.length - res.added - res.updated) + " already current.", "ok");
      });
    }

    job.catch(function (e) {
      syncBusy = false;
      syncMsg = { text: String(e && e.message ? e.message : e), level: "bad" };
      render();
    });
  }

  root.addEventListener("click", function (ev) {
    var btn = ev.target.closest("button");
    if (!btn) return;
    var act = btn.getAttribute("data-act");
    var ch = activeChar();

    if (act === "push" || act === "pull" || act === "createGist") {
      if (!getToken()) { syncMsg = { text: "Paste a token first.", level: "bad" }; render(); return; }
      if (act !== "createGist" && !(state.sync && state.sync.gistId)) {
        syncMsg = { text: "Paste the Gist ID first, or create a new gist.", level: "bad" }; render(); return;
      }
      if (act === "push" && !window.confirm("Overwrite the gist with the " + state.chars.length +
          " character(s) in this browser?")) return;
      runSync(act);
      return;
    }
    if (act === "forgetToken") {
      setToken("");
      syncMsg = { text: "Token removed from this browser.", level: "ok" };
      render();
      return;
    }

    if (act === "addChar") {
      var c = { id: newId(), name: "New character", buildId: "", setup: 0, variant: 0, useComp: null, comp: "", gear: {} };
      touch(c);
      state.chars.push(c);
      state.activeId = c.id;
    } else if (act === "delChar" && ch) {
      if (!window.confirm("Delete " + (ch.name || "this character") + " and everything recorded for it?")) return;
      state.chars = state.chars.filter(function (x) { return x.id !== ch.id; });
      state.activeId = state.chars.length ? state.chars[0].id : "";
    } else if (act === "matchRow" && ch) {
      var build = buildById(ch.buildId), setup = currentSetup(ch, build);
      var slot = btn.getAttribute("data-slot");
      touch(ch);
      setup.rows.forEach(function (r) {
        if (r.slot !== slot) return;
        setField(ch, r.slot, "set", targetSet(r, ch.variant || 0));
        setField(ch, r.slot, "weight", isRealWeight(r.weight) ? r.weight : "");
        setField(ch, r.slot, "trait", r.trait === "—" ? "" : r.trait);
      });
    } else if (act === "fillAll" && ch) {
      touch(ch);
      var b2 = buildById(ch.buildId), s2 = currentSetup(ch, b2);
      s2.rows.forEach(function (r) {
        setField(ch, r.slot, "set", targetSet(r, ch.variant || 0));
        setField(ch, r.slot, "weight", isRealWeight(r.weight) ? r.weight : "");
        setField(ch, r.slot, "trait", r.trait === "—" ? "" : r.trait);
      });
    } else if (act === "clearAll" && ch) {
      if (!window.confirm("Clear every gear entry for this character?")) return;
      touch(ch);
      ch.gear = {};
    } else {
      return;
    }
    saveState();
    render();
  });

  root.addEventListener("change", function (ev) {
    var t = ev.target;
    var act = t.getAttribute("data-act");
    var ch = activeChar();

    if (act === "token") {
      setToken(t.value.trim());
      syncMsg = null;
      render();
      return;
    } else if (act === "gistId") {
      state.sync = state.sync || {};
      state.sync.gistId = t.value.trim();
      syncMsg = null;
    } else if (act === "pickChar") {
      state.activeId = t.value;
    } else if (act === "pickBuild" && ch) {
      touch(ch);
      ch.buildId = t.value;
      ch.setup = 0;
      ch.variant = 0;
    } else if (act === "pickSetup" && ch) {
      ch.setup = parseInt(t.value, 10) || 0;
      ch.variant = 0;
    } else if (act === "pickVariant" && ch) {
      ch.variant = parseInt(t.value, 10) || 0;
    } else if (act === "useComp" && ch) {
      ch.useComp = t.value === "yes";
      if (!ch.useComp) ch.comp = "";
    } else if (act === "pickComp" && ch) {
      ch.comp = t.value;
    } else if (t.getAttribute("data-slot") && ch) {
      setField(ch, t.getAttribute("data-slot"), t.getAttribute("data-f"), t.value);
      touch(ch);
      saveState();
      // Re-render so the needs list tracks typing, but keep focus where it was.
      var slot = t.getAttribute("data-slot"), f = t.getAttribute("data-f");
      render();
      var again = root.querySelector('[data-slot="' + CSS.escape(slot) + '"][data-f="' + f + '"]');
      if (again) { again.focus(); if (again.setSelectionRange) { var n = again.value.length; try { again.setSelectionRange(n, n); } catch (e) {} } }
      return;
    } else {
      return;
    }
    saveState();
    render();
  });

  root.addEventListener("input", function (ev) {
    var t = ev.target;
    var ch = activeChar();
    if (!ch) return;
    if (t.getAttribute("data-act") === "rename") {
      ch.name = t.value;
      touch(ch);
      saveState();
      var sel = root.querySelector("#ep-char");
      if (sel) {
        var opt = sel.querySelector('option[value="' + CSS.escape(ch.id) + '"]');
        if (opt) opt.textContent = ch.name || "(unnamed)";
      }
    }
  });

  render();
})();
