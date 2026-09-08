import {
  t as e
} from "./C3jr-qFf.js";
import {
  n as t
} from "./C-MHHTS9.js";
var n = {
    "brush-square": `b`,
    "brush-circle": `c`,
    fill: `f`,
    polygon: `p`,
    line: `l`,
    rectangle: `r`,
    ellipse: `o`,
    bezier: `q`,
    eraser: `e`,
    pick: `i`,
    move: `m`
  },
  r = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => ({
    id: `visibility-${t}`,
    label: () => e.overlay_editor_toggle_numbered_layer({
      number: t
    }),
    defaultKey: String(t),
    layerIndex: t - 1
  })),
  i = [...t.map(e => ({
    id: e.value,
    label: e.label,
    defaultKey: n[e.value]
  })), {
    id: `text`,
    label: () => e.overlay_editor_text(),
    defaultKey: `t`
  }, {
    id: `gradient`,
    label: () => e.gradient(),
    defaultKey: `g`
  }, {
    id: `select-box`,
    label: () => e.overlay_editor_select_box(),
    defaultKey: `s`
  }, {
    id: `select-contiguous`,
    label: () => e.overlay_editor_select_contiguous(),
    defaultKey: `w`
  }, {
    id: `select-color`,
    label: () => e.overlay_editor_select_color(),
    defaultKey: `k`
  }, {
    id: `select-lasso`,
    label: () => e.overlay_editor_select_lasso(),
    defaultKey: `a`
  }, {
    id: `size-up`,
    label: () => e.overlay_editor_size_up(),
    defaultKey: `]`
  }, {
    id: `size-down`,
    label: () => e.overlay_editor_size_down(),
    defaultKey: `[`
  }, {
    id: `visibility`,
    label: () => e.overlay_editor_toggle_layer(),
    defaultKey: `v`
  }, ...r],
  a = `overlay-studio:hotkey:`;

function o() {
  let e = {};
  for (let t of i) e[t.id] = t.defaultKey;
  return e
}

function s(e) {
  if (e.isComposing || e.altKey || e.getModifierState(`AltGraph`)) return null;
  let t = e.key.toLowerCase();
  return !/^[a-z0-9[\]]$/.test(t) || t === `0` || (e.ctrlKey || e.metaKey) && /^[zysxcvd]$/.test(t) ? null : `${e.ctrlKey?`Ctrl+`:``}${e.metaKey?`Meta+`:``}${e.shiftKey?`Shift+`:``}${t}`
}

function c(e) {
  return /^(Ctrl\+)?(Meta\+)?(Shift\+)?[a-z1-9[\]]$/.test(e) && !(/(?:Ctrl|Meta)\+/.test(e) && /[zysxcvd]$/.test(e))
}

function l() {
  let e = o(),
    t = new Set,
    n = new Set;
  try {
    for (let r of i) {
      let i = window.localStorage.getItem(a + r.id);
      i !== null && (i === `` || c(i)) && (t.add(r.id), e[r.id] = n.has(i) ? `` : i, i && n.add(i))
    }
  } catch {
    return o()
  }
  for (let r of i) {
    if (t.has(r.id)) continue;
    let i = e[r.id];
    i && n.has(i) ? e[r.id] = `` : i && n.add(i)
  }
  return e
}

function u(e) {
  try {
    for (let t of i) window.localStorage.setItem(a + t.id, e[t.id]);
    return !0
  } catch {
    return !1
  }
}
export {
  l as a, s as i, r as n, u as o, o as r, i as t
};