import {
  Bt as e,
  C as t,
  Ft as n,
  Gt as r,
  Ht as i,
  Lt as a,
  Ut as o,
  Vt as s,
  Wt as c,
  Y as l,
  _t as u,
  en as d,
  et as f,
  jt as p,
  o as m,
  pt as h,
  rt as g,
  tn as _,
  tt as v,
  un as ee,
  wt as te,
  xt as ne
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  r as y
} from "./cwlIGzhM.js";
import {
  t as b
} from "./BwlJHClZ.js";
import {
  gt as x,
  t as re
} from "./Bx5qbGTA.js";
import {
  t as S
} from "./DOhN3kt3.js";
import {
  n as ie
} from "./ki4lqFQx.js";
import {
  t as ae
} from "./DqnWs3dB.js";
import {
  t as oe
} from "./C2gfZ5wq.js";
var se = [`Mod`, `Alt`, `Shift`],
  ce = new Set([`Space`, `Enter`, `Tab`, `Escape`, `Backspace`, `Delete`, `Insert`, `Home`, `End`, `PageUp`, `PageDown`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ContextMenu`, ...Array.from({
    length: 24
  }, (e, t) => `F${t+1}`)]),
  le = [null, `MouseMiddle`, `MouseRight`, `MouseBack`, `MouseForward`],
  ue = [1, 4, 2, 8, 16],
  C = {
    MouseMiddle: () => b.settings_mouse_middle_button(),
    MouseRight: () => b.settings_mouse_right_click(),
    MouseBack: () => b.settings_mouse_back_button(),
    MouseForward: () => b.settings_mouse_forward_button()
  },
  de = {
    Control: `Mod`,
    Meta: `Mod`,
    Alt: `Alt`,
    Option: `Alt`,
    Shift: `Shift`
  },
  fe = {
    ControlLeft: `Mod`,
    ControlRight: `Mod`,
    MetaLeft: `Mod`,
    MetaRight: `Mod`,
    AltLeft: `Alt`,
    AltRight: `Alt`,
    ShiftLeft: `Shift`,
    ShiftRight: `Shift`
  },
  pe = {
    Backquote: "`",
    Quote: `'`,
    BracketLeft: `[`,
    BracketRight: `]`,
    Semicolon: `;`,
    Backslash: `\\`,
    IntlBackslash: `\\`,
    Equal: `=`,
    Minus: `-`,
    Comma: `,`,
    Period: `.`,
    Slash: `/`
  },
  me = {
    ArrowUp: `Up`,
    ArrowDown: `Down`,
    ArrowLeft: `Left`,
    ArrowRight: `Right`,
    PageUp: `Page Up`,
    PageDown: `Page Down`,
    ContextMenu: `Menu`,
    Escape: `Esc`
  };

function w() {
  return typeof navigator < `u` && /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

function T(e) {
  return se.includes(e)
}

function E(e) {
  return e in C
}

function he(e) {
  let t = A(e);
  return !!t && E(t.key)
}

function D(e) {
  return le[e] ?? null
}

function ge(e, t) {
  return (e.buttons & (ue[t] ?? 0)) !== 0
}

function _e(e) {
  return [...e].length === 1
}

function O({
  key: e,
  code: t
}) {
  return e === `AltGraph` ? null : e === ` ` || t === `Space` ? `Space` : (de[e] ?? fe[t]) || (e === `Dead` || _e(e) ? /^[a-z]$/i.test(e) ? e.toUpperCase() : /^Key[A-Z]$/.test(t) ? t.slice(3) : /^Digit\d$/.test(t) ? t.slice(5) : e === `Dead` ? pe[t] ?? null : /[\p{Cc}\p{Z}]/u.test(e) ? null : e : ce.has(e) ? e : null)
}

function k(e) {
  return e.length > 1 || /^[A-Z0-9]$/.test(e)
}

function ve(e) {
  let t = O(e);
  return t ? T(t) ? t : be(e, t) : null
}

function ye(e) {
  let t = D(e.button);
  return t && be(e, t)
}

function be(e, t) {
  var n;
  let r = ((n = e.getModifierState) == null ? void 0 : n.call(e, `AltGraph`)) ?? !1,
    i = [];
  return !r && (e.ctrlKey || e.metaKey) && i.push(`Mod`), !r && e.altKey && i.push(`Alt`), e.shiftKey && k(t) && i.push(`Shift`), [...i, t].join(`+`)
}

function A(e) {
  let t, n;
  if (e === `+` || e.endsWith(`++`)) t = `+`, n = e.slice(0, -2);
  else {
    let r = e.lastIndexOf(`+`);
    t = e.slice(r + 1), n = r < 0 ? `` : e.slice(0, r)
  }
  let r = n ? n.split(`+`) : [],
    i = -1;
  for (let e of r) {
    let t = se.indexOf(e);
    if (t <= i) return null;
    i = t
  }
  let a = r;
  return T(t) ? a.length ? null : {
    modifiers: a,
    key: t
  } : !(ce.has(t) || E(t)) && (!_e(t) || /[a-z\p{Cc}\p{Z}]/u.test(t)) || a.includes(`Shift`) && !k(t) ? null : {
    modifiers: a,
    key: t
  }
}

function xe(e, t) {
  return t === `Mod` ? e.ctrlKey || e.metaKey : t === `Alt` ? e.altKey : e.shiftKey
}

function Se(e) {
  let t = A(e);
  return !t || T(t.key) || t.modifiers.includes(`Shift`) || !k(t.key) ? null : [...t.modifiers, `Shift`, t.key].join(`+`)
}

function Ce(e) {
  return e.replace(/(^|\+)Shift\+(?=.)/, `$1`)
}

function we(e, t = w()) {
  var n;
  let r = A(e);
  if (!r) return [e];
  let i = {
      Mod: t ? `Cmd` : `Ctrl`,
      Alt: t ? `Option` : `Alt`,
      Shift: `Shift`
    },
    a = T(r.key) ? i[r.key] : ((n = C[r.key]) == null ? void 0 : n.call(C)) ?? me[r.key] ?? r.key;
  return [...r.modifiers.map(e => i[e]), a]
}

function Te(e, t = w()) {
  return we(e, t).join(`+`)
}
var Ee = new Set([`$$slots`, `$$events`, `$$legacy`]),
  De = g(`<svg><path d="M4 18C4 2 20 22 20 6"></path><path d="M4 18V4m16 2v14" stroke-dasharray="2 2" stroke-width="1"></path><circle cx="4" cy="4" r="2"></circle><circle cx="20" cy="20" r="2"></circle></svg>`),
  Oe = g(`<svg><path d="M7 22H4v-2h3v2Zm9-10h-2v8h2v2h-4V10h4v2ZM4 20H2v-3h2v3Zm5 0H7v-3h2v3Zm13 0h-6v-2h4v-2h2v4ZM7 17H4v-2h3v2Zm13-1h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM6 13H4V8h2v5Zm14-4h-3V7h3v2ZM8 8H6V6h2v2Zm9-1h-2V4h2v3Zm5 0h-2V4h2v3Zm-9-1H8V4h5v2Zm7-2h-3V2h3v2Z"></path></svg>`);

function ke(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Ee);
  var a = v(),
    o = p(a),
    s = e => {
      var n = De();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = Oe();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), f(e, n)
    };
  l(o, e => {
    r.standard ? e(s) : e(c, -1)
  }), f(e, a), d()
}
var Ae = new Set([`$$slots`, `$$events`, `$$legacy`]),
  je = g(`<svg><ellipse cx="12" cy="12" rx="9" ry="7"></ellipse></svg>`),
  Me = g(`<svg><path d="M6 4h12v2h4v4h2v4h-2v4h-4v2H6v-2H2v-4H0v-4h2V6h4V4Zm0 2v2H4v2H2v4h2v2h2v2h12v-2h2v-2h2v-4h-2V8h-2V6H6Z"></path></svg>`);

function Ne(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Ae);
  var a = v(),
    o = p(a),
    s = e => {
      var n = je();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = Me();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...i
      })), f(e, n)
    };
  l(o, e => {
    r.standard ? e(s) : e(c, -1)
  }), f(e, a), d()
}
var Pe = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Fe = g(`<svg><rect x="3" y="5" width="18" height="14"></rect></svg>`),
  Ie = g(`<svg><path d="M20 19H4v-2h16v2ZM4 17H2V7h2v10Zm18 0h-2V7h2v10ZM20 7H4V5h16v2Z"></path></svg>`);

function Le(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Pe);
  var a = v(),
    o = p(a),
    s = e => {
      var n = Fe();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = Ie();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), f(e, n)
    };
  l(o, e => {
    r.standard ? e(s) : e(c, -1)
  }), f(e, a), d()
}
var Re = new Set([`$$slots`, `$$events`, `$$legacy`]),
  ze = g(`<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>`),
  Be = g(`<svg><path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-9-5h-2v-2h2v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"></path></svg>`);

function Ve(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Re);
  var a = v(),
    o = p(a),
    s = e => {
      var n = ze();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = Be();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), f(e, n)
    };
  l(o, e => {
    r.standard ? e(s) : e(c, -1)
  }), f(e, a), d()
}
var He = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ue = g(`<svg><path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"></path></svg>`),
  We = g(`<svg><path d="M3 21h2v2H1v-4h2v2Zm6 0H5v-2h4v2Zm-4-2H3v-4h2v4Zm6 0H9v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H5v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 13H7v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-10-2H9V9h2v2Zm4 0h-2V9h2v2Zm4 0h-2V9h2v2Zm-6-2h-2V7h2v2Zm8 0h-2V7h2v2ZM11 7H9V5h2v2Zm4 0h-2V5h2v2Zm8 0h-2V5h2v2ZM13 5h-2V3h2v2Zm4 0h-2V3h2v2Zm4 0h-2V3h2v2Zm-2-2h-2V1h2v2Z"></path></svg>`);

function Ge(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, He);
  var a = v(),
    o = p(a),
    s = e => {
      var n = Ue();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = We();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), f(e, n)
    };
  l(o, e => {
    r.standard ? e(s) : e(c, -1)
  }), f(e, a), d()
}
var Ke = new Set([`$$slots`, `$$events`, `$$legacy`]),
  qe = g(`<svg><path d="M13 2h2v2h2v2h-4v5h5V7h2v2h2v2h2v2h-2v2h-2v2h-2v-4h-5v5h4v2h-2v2h-2v2h-2v-2H9v-2H7v-2h4v-5H6v4H4v-2H2v-2H0v-2h2V9h2V7h2v4h5V6H7V4h2V2h2V0h2v2Z"></path></svg>`);

function Je(e, n) {
  let r = m(n, Ke);
  var i = qe();
  t(i, () => ({
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    ...r
  })), f(e, i)
}
var Ye = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Xe = g(`<svg><path d="M5 19 19 5"></path><path d="M3 17h4v4H3zM17 3h4v4h-4z" fill="currentColor" stroke="none"></path></svg>`);

function Ze(e, n) {
  let r = m(n, Ye);
  var i = Xe();
  t(i, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...r
  })), f(e, i)
}
var Qe = new Set([`$$slots`, `$$events`, `$$legacy`]),
  $e = g(`<svg><path d="M5 6.5 15.5 4 20 12.5 13.5 20 4 15Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><circle cx="5" cy="6.5" r="1.75" fill="currentColor"></circle><circle cx="15.5" cy="4" r="1.75" fill="currentColor"></circle><circle cx="20" cy="12.5" r="1.75" fill="currentColor"></circle><circle cx="13.5" cy="20" r="1.75" fill="currentColor"></circle><circle cx="4" cy="15" r="1.75" fill="currentColor"></circle></svg>`),
  et = g(`<svg><path d="M14 2h4v4h-2v2h2v2h2v2h2v4h-4v2h-2v2h-2v2h-4v-2H8v-2H6v-2H2v-4h2V8H2V4h4v2h4V4h4V2ZM6 8v4h2v4h2v2h4v-2h2v-2h2v-2h-2v-2h-2V6h-4v2H6Z"></path></svg>`);

function tt(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Qe);
  var a = v(),
    o = p(a),
    s = e => {
      var n = $e();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = et();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...i
      })), f(e, n)
    };
  l(o, e => {
    r.standard ? e(s) : e(c, -1)
  }), f(e, a), d()
}
var nt = new Set([`$$slots`, `$$events`, `$$legacy`]),
  rt = g(`<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>`);

function it(e, n) {
  let r = m(n, nt);
  var i = rt();
  t(i, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    ...r
  })), f(e, i)
}
var at = `alliance-asset-editor:brush-size`;

function ot(e, t) {
  return Math.min(t, Math.max(1, Math.trunc(e)))
}
var st = [{
    value: `brush-square`,
    icon: it,
    label: () => b.alliance_asset_tool_square_brush()
  }, {
    value: `brush-circle`,
    icon: Ve,
    label: () => b.alliance_asset_tool_circle_brush()
  }, {
    value: `fill`,
    icon: ae,
    label: () => b.alliance_asset_tool_fill()
  }, {
    value: `polygon`,
    icon: tt,
    label: () => b.alliance_asset_tool_polygon()
  }],
  j = [...st, {
    value: `line`,
    icon: Ze,
    label: () => b.overlay_editor_line()
  }, {
    value: `rectangle`,
    icon: Le,
    label: () => b.overlay_editor_rectangle()
  }, {
    value: `ellipse`,
    icon: Ne,
    label: () => b.overlay_editor_ellipse()
  }, {
    value: `bezier`,
    icon: ke,
    label: () => b.overlay_editor_bezier()
  }, {
    value: `eraser`,
    icon: oe,
    label: () => b.eraser()
  }, {
    value: `pick`,
    icon: Ge,
    label: () => b.color_picker()
  }, {
    value: `move`,
    icon: Je,
    label: () => b.overlay_editor_move()
  }];

function ct(e) {
  var t;
  return ((t = j.find(({
    value: t
  }) => t === e)) == null ? void 0 : t.label()) ?? e
}

function lt(e) {
  return e === `brush-square` || e === `brush-circle` || e === `eraser` || e === `line` || e === `rectangle` || e === `ellipse` || e === `bezier`
}

function ut(e) {
  return e !== `brush-square`
}
var dt = {};

function ft(e, t) {
  let n = Math.max(1, Math.trunc(e)),
    r = dt[t];
  if ((r == null ? void 0 : r.size) === n) return r;
  let i = -Math.floor((n - 1) / 2),
    a = (n - 1) / 2,
    o = n % 2 == 0 ? n / 2 : (n - 1) / 2,
    s = new Int32Array(n * 2);
  for (let e = 0; e < n; e += 1) {
    let r = 0,
      c = n - 1;
    if (t === `circle`) {
      let t = e - a,
        n = Math.sqrt(Math.max(0, o * o - t * t));
      r = Math.ceil(a - n), c = Math.floor(a + n)
    }
    s[e * 2] = r + i, s[e * 2 + 1] = c + i
  }
  let c = {
    size: n,
    minOffset: i,
    spans: s
  };
  return dt[t] = c, c
}

function M(e, t, n, r, i, a) {
  if (n < 0 || n >= t || i < 0 || r >= e) return;
  let o = Math.max(0, r),
    s = Math.min(e - 1, i);
  for (let e = o; e <= s; e += 1) a(e, n)
}

function pt(e, t, n, r, i, a) {
  if (e <= 0 || t <= 0) return;
  let o = ft(r, i);
  for (let r = 0; r < o.size; r += 1) M(e, t, n.y + o.minOffset + r, n.x + o.spans[r * 2], n.x + o.spans[r * 2 + 1], a)
}

function mt(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < o.size; c += 1) {
    let l = a + o.minOffset + c;
    if (l < 0 || l >= t) continue;
    let u = i + o.spans[c * 2],
      d = i + o.spans[c * 2 + 1],
      f = l - r - o.minOffset;
    if (f < 0 || f >= o.size) {
      M(e, t, l, u, d, s);
      continue
    }
    let p = n + o.spans[f * 2],
      m = n + o.spans[f * 2 + 1];
    M(e, t, l, u, Math.min(d, p - 1), s), M(e, t, l, Math.max(u, m + 1), d, s)
  }
}

function ht(e, t, n, r, i, a, o, s = !0) {
  if (e <= 0 || t <= 0) return;
  let c = ft(i, a);
  s && pt(e, t, n, c.size, a, o);
  let l = n.x,
    u = n.y,
    d = !0;
  N(n, r, (n, r) => {
    if (d) {
      d = !1;
      return
    }
    mt(e, t, l, u, n, r, c, o), l = n, u = r
  })
}

function gt(e, t, n, r, i) {
  let a = r.y * t + r.x,
    o = e[a];
  if (o === i) return [];
  let s = new Uint8Array(e.length),
    c = [a];
  s[a] = 1;
  let l = [];
  for (; c.length > 0;) {
    let r = c.pop();
    if (e[r] !== o) continue;
    let i = r % t,
      a = Math.floor(r / t);
    l.push({
      x: i,
      y: a
    });
    let u = [i > 0 ? r - 1 : -1, i + 1 < t ? r + 1 : -1, a > 0 ? r - t : -1, a + 1 < n ? r + t : -1];
    for (let t of u) t < 0 || s[t] || (s[t] = 1, e[t] === o && c.push(t))
  }
  return l
}

function _t(e, t, n, r, i, a = null) {
  let o = r.y * t + r.x,
    s = e[o];
  if (s === i || a && !a[o]) return new Uint32Array;
  let c = new Uint8Array(e.length),
    l = [o],
    u = [];
  c[o] = 1;
  let d = t => {
    c[t] || e[t] !== s || a && !a[t] || (c[t] = 1, l.push(t))
  };
  for (; l.length > 0;) {
    let n = l.pop();
    u.push(n);
    let r = n % t;
    r > 0 && d(n - 1), r + 1 < t && d(n + 1), n >= t && d(n - t), n + t < e.length && d(n + t)
  }
  return new Uint32Array(u)
}

function vt(e, t) {
  let n = [];
  return N(e, t, (e, t) => n.push({
    x: e,
    y: t
  })), n
}

function N(e, t, n) {
  let {
    x: r,
    y: i
  } = e, a = Math.abs(t.x - e.x), o = e.x < t.x ? 1 : -1, s = -Math.abs(t.y - e.y), c = e.y < t.y ? 1 : -1, l = a + s;
  for (; n(r, i), r !== t.x || i !== t.y;) {
    let e = l * 2;
    e >= s && (l += s, r += o), e <= a && (l += a, i += c)
  }
}

function P(e) {
  return e.y * 4294967296 + e.x
}

function yt(e, t, n) {
  let r = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i, i += 1) {
    let o = n[i],
      s = n[a],
      c = o.y + .5,
      l = s.y + .5;
    c > t != l > t && e < (s.x - o.x) * (t - c) / (l - c) + o.x + .5 && (r = !r)
  }
  return r
}

function bt(e, t, n) {
  if (n.length < 3 || new Set(n.map(P)).size < 3) return [];
  let r = Math.max(0, Math.min(...n.map(e => e.x))),
    i = Math.min(e - 1, Math.max(...n.map(e => e.x))),
    a = Math.max(0, Math.min(...n.map(e => e.y))),
    o = Math.min(t - 1, Math.max(...n.map(e => e.y))),
    s = new Map;
  for (let r = 0; r < n.length; r += 1) {
    let i = n[r],
      a = n[(r + 1) % n.length];
    for (let n of vt(i, a)) n.x < 0 || n.y < 0 || n.x >= e || n.y >= t || s.set(P(n), n)
  }
  for (let e = a; e <= o; e += 1)
    for (let t = r; t <= i; t += 1) yt(t + .5, e + .5, n) && s.set(P({
      x: t,
      y: e
    }), {
      x: t,
      y: e
    });
  return [...s.values()].sort((e, t) => e.y - t.y || e.x - t.x)
}
var xt = [{
    id: `general`,
    label: () => b.settings_controls_general(),
    hint: () => b.settings_controls_general_hint()
  }, {
    id: `map`,
    label: () => b.settings_map_controls()
  }, {
    id: `painting`,
    label: () => b.paint()
  }, {
    id: `overlays`,
    label: () => b.settings_controls_overlays()
  }, {
    id: `studio`,
    label: () => b.settings_studio()
  }, {
    id: `headquarters`,
    label: () => b.headquarters()
  }, {
    id: `description`,
    label: () => b.description(),
    hint: () => b.settings_controls_description_hint()
  }, {
    id: `staff`,
    label: () => b.staff()
  }],
  F = [`world`, `studio`, `hq`],
  St = {
    "brush-square": `B`,
    "brush-circle": `C`,
    fill: `F`,
    polygon: `P`,
    line: `L`,
    rectangle: `R`,
    ellipse: `O`,
    bezier: `Q`,
    eraser: `E`,
    pick: `I`,
    move: `M`
  },
  Ct = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => ({
    id: `studio.visibility-${e}`,
    section: `studio`,
    label: () => b.overlay_editor_toggle_numbered_layer({
      number: e
    }),
    defaults: [String(e)],
    surfaces: [`studio`],
    layerIndex: e - 1
  })),
  wt = [...j.map(e => [e.value, e.label, St[e.value]]), [`text`, () => b.overlay_editor_text(), `T`],
    [`gradient`, () => b.gradient(), `G`],
    [`select-box`, () => b.overlay_editor_select_box(), `S`],
    [`select-contiguous`, () => b.overlay_editor_select_contiguous(), `W`],
    [`select-color`, () => b.overlay_editor_select_color(), `K`],
    [`select-lasso`, () => b.overlay_editor_select_lasso(), `A`]
  ].map(([e, t, n]) => ({
    id: `studio.${e}`,
    section: `studio`,
    label: t,
    defaults: [n],
    surfaces: [`studio`],
    tool: e
  }));

function I(e, t, ...n) {
  return {
    id: `studio.${e}`,
    section: `studio`,
    label: t,
    defaults: n,
    surfaces: [`studio`]
  }
}

function L(e, t, n) {
  return {
    id: `description.${e}`,
    section: `description`,
    label: t,
    defaults: [n],
    surfaces: [`description`],
    needsModifier: !0
  }
}
var R = [{
    id: `undo`,
    section: `general`,
    label: () => b.undo(),
    defaults: [`Mod+Z`],
    surfaces: F
  }, {
    id: `redo`,
    section: `general`,
    label: () => b.redo(),
    defaults: [`Mod+Shift+Z`, `Mod+Y`],
    surfaces: F
  }, {
    id: `zoom-in`,
    section: `general`,
    label: () => b.zoom_in(),
    defaults: [`=`, `+`],
    surfaces: F
  }, {
    id: `zoom-out`,
    section: `general`,
    label: () => b.zoom_out(),
    defaults: [`-`, `_`],
    surfaces: F
  }, {
    id: `fit`,
    section: `general`,
    label: () => b.settings_fit_canvas(),
    defaults: [`0`],
    surfaces: [`studio`, `hq`]
  }, ...[`up`, `down`, `left`, `right`].map(e => ({
    id: `move-${e}`,
    section: `general`,
    label: {
      up: () => b.settings_controls_move_up(),
      down: () => b.settings_controls_move_down(),
      left: () => b.settings_controls_move_left(),
      right: () => b.settings_controls_move_right()
    } [e],
    defaults: [`Arrow${e[0].toUpperCase()}${e.slice(1)}`],
    surfaces: F,
    shiftSurfaces: [`studio`, `hq`]
  })), {
    id: `paint-hold`,
    section: `general`,
    label: () => b.settings_controls_paint_hold(),
    defaults: [`Space`],
    surfaces: [`world`, `studio`, `hq`, `avatar`],
    hold: !0
  }, {
    id: `map.rotate-left`,
    section: `map`,
    label: () => b.settings_controls_rotate_left(),
    defaults: [`Shift+ArrowLeft`],
    surfaces: [`world`]
  }, {
    id: `map.rotate-right`,
    section: `map`,
    label: () => b.settings_controls_rotate_right(),
    defaults: [`Shift+ArrowRight`],
    surfaces: [`world`]
  }, {
    id: `map.reset-rotation`,
    section: `map`,
    label: () => b.settings_controls_reset_rotation(),
    defaults: [`N`],
    surfaces: [`world`]
  }, {
    id: `paint.eraser`,
    section: `painting`,
    label: () => b.eraser(),
    defaults: [`E`],
    surfaces: [`world`, `hq`, `avatar`]
  }, {
    id: `paint.eyedropper`,
    section: `painting`,
    label: () => b.color_picker(),
    defaults: [`I`],
    surfaces: [`world`, `hq`]
  }, {
    id: `paint.erase-hold`,
    section: `painting`,
    label: () => b.settings_controls_erase_hold(),
    defaults: [`MouseRight`],
    surfaces: [`world`, `hq`],
    hold: !0,
    mouseOnly: !0
  }, {
    id: `paint.pick-hover`,
    section: `painting`,
    label: () => b.settings_instant_eyedropper(),
    defaults: [`MouseMiddle`],
    surfaces: [`world`, `studio`, `hq`],
    mouseOnly: !0
  }, {
    id: `overlay.next-color`,
    section: `overlays`,
    label: () => b.settings_next_color_pixel(),
    defaults: [`Z`],
    surfaces: [`world`, `hq`]
  }, {
    id: `overlay.peek`,
    section: `overlays`,
    label: () => b.overlay_build_peek(),
    defaults: [`Alt`],
    surfaces: [`world`, `hq`],
    hold: !0
  }, {
    id: `overlay.search`,
    section: `overlays`,
    label: () => b.settings_controls_search_overlays(),
    defaults: [`/`],
    surfaces: [`world`]
  }, ...wt, I(`transform-layer`, () => b.overlay_editor_layer_transform(), `Shift+T`), I(`size-up`, () => b.overlay_editor_size_up(), `]`), I(`size-down`, () => b.overlay_editor_size_down(), `[`), I(`visibility`, () => b.overlay_editor_toggle_layer(), `V`), ...Ct, {
    ...I(`pick-hold`, () => b.settings_controls_eyedropper_hold(), `Alt`),
    hold: !0
  }, I(`save`, () => b.save(), `Mod+S`), I(`cut`, () => b.overlay_editor_cut_selection(), `Mod+X`), I(`copy`, () => b.overlay_editor_copy_selection(), `Mod+C`), I(`paste`, () => b.overlay_editor_paste_selection(), `Mod+V`), I(`duplicate-selection`, () => b.overlay_editor_duplicate_selection(), `Mod+Shift+D`), I(`clear-selection`, () => b.settings_clear_selection(), `Mod+D`), I(`delete-selection`, () => b.overlay_editor_delete_selection(), `Delete`, `Backspace`), I(`duplicate-layer`, () => b.overlay_editor_layer_duplicate(), `Mod+J`), I(`merge-layers`, () => b.overlay_editor_merge_layers(), `Mod+E`), I(`group-layers`, () => b.overlay_editor_group_layers(), `Mod+G`), I(`apply-text`, () => b.settings_controls_apply_text(), `Mod+Enter`), {
    id: `hq.reset-brush`,
    section: `headquarters`,
    label: () => b.settings_controls_reset_brush(),
    defaults: [`Alt+R`],
    surfaces: [`hq`]
  }, L(`bold`, () => b.alliance_markdown_bold(), `Mod+B`), L(`italic`, () => b.alliance_markdown_italic(), `Mod+I`), L(`heading-1`, () => b.alliance_markdown_heading({
    level: 1
  }), `Mod+Shift+1`), L(`heading-2`, () => b.alliance_markdown_heading({
    level: 2
  }), `Mod+Shift+2`), L(`heading-3`, () => b.alliance_markdown_heading({
    level: 3
  }), `Mod+Shift+3`), L(`bulleted-list`, () => b.alliance_markdown_bulleted_list(), `Mod+Shift+8`), L(`numbered-list`, () => b.alliance_markdown_numbered_list(), `Mod+Shift+7`), {
    id: `map.select-area`,
    section: `staff`,
    label: () => b.wayback_select_area(),
    defaults: [`C`],
    surfaces: [`world`],
    visible: () => x.hasAnyPermission(S.tools.selectArea)
  }, {
    id: `staff.dashboard-jump`,
    section: `staff`,
    label: () => b.dashboard_jump(),
    defaults: [`Mod+K`],
    surfaces: [`dashboard`],
    needsModifier: !0,
    visible: () => x.hasAnyPermission(ie.flatMap(e => e.permissions))
  }, {
    id: `staff.reset-brush`,
    section: `staff`,
    label: () => b.settings_controls_reset_brush(),
    defaults: [`Alt+R`],
    surfaces: [`world`, `wayback`],
    visible: () => x.hasAnyPermission([...S.tools.selectArea, S.dashboard.alliances.details])
  }],
  z = new Map(R.map(e => [e.id, e])),
  Tt = [{
    section: `general`,
    label: () => b.overlay_editor_move(),
    keys: () => b.settings_mouse_left_drag()
  }, {
    section: `general`,
    label: () => `${b.zoom_in()} / ${b.zoom_out()}`,
    keys: () => b.settings_mouse_wheel()
  }, {
    section: `general`,
    label: () => b.close(),
    keys: () => `Esc`
  }, {
    section: `painting`,
    label: () => b.settings_use_selected_tool(),
    keys: () => b.settings_mouse_left_click()
  }, {
    section: `studio`,
    label: () => b.overlay_editor_actions(),
    keys: () => `${b.settings_mouse_right_click()} / Shift+F10 / Menu`,
    chords: [`MouseRight`, `Shift+F10`, `ContextMenu`],
    surfaces: [`studio`]
  }, {
    section: `studio`,
    label: () => b.confirm(),
    keys: () => `Enter`,
    chords: [`Enter`],
    surfaces: [`studio`]
  }, {
    section: `studio`,
    label: () => b.cancel(),
    keys: () => `Esc`
  }],
  Et = new Set([`Mod+W`, `Mod+Shift+W`, `Mod+T`, `Mod+Shift+T`, `Mod+N`, `Mod+Shift+N`, `Mod+Q`, `Mod+Shift+Q`, `Mod+Tab`, `Mod+Shift+Tab`, `Mod+PageUp`, `Mod+PageDown`, `Mod+Space`, `Alt+Space`, `Alt+Tab`, `Alt+F4`, ...Array.from({
    length: 9
  }, (e, t) => `Mod+${t+1}`)]),
  Dt = new Set([`Mod+H`, `Mod+M`, `Mod+Alt+H`, `Mod+Alt+M`]),
  Ot = new Set(`Mod+A.Mod+B.Mod+D.Mod+E.Mod+F.Mod+G.Mod+H.Mod+I.Mod+J.Mod+K.Mod+L.Mod+O.Mod+P.Mod+R.Mod+S.Mod+U.Mod+Y.Mod+Shift+A.Mod+Shift+B.Mod+Shift+C.Mod+Shift+D.Mod+Shift+E.Mod+Shift+G.Mod+Shift+I.Mod+Shift+J.Mod+Shift+K.Mod+Shift+M.Mod+Shift+O.Mod+Shift+R.Mod+Shift+Delete.Mod+=.Mod++.Mod+-.Mod+_.Mod+0.Mod+,.Mod+[.Mod+].Mod+ArrowLeft.Mod+ArrowRight.Mod+F5.Alt+D.Alt+E.Alt+F.Alt+Home.Alt+ArrowLeft.Alt+ArrowRight.F1.F3.F5.F6.F7.F10.F11.F12`.split(`.`));

function kt(e, t) {
  return Et.has(e) || t && Dt.has(e)
}
var At = new Set([`MouseBack`, `MouseForward`]);

function jt(e) {
  var t;
  let n = (t = A(e)) == null ? void 0 : t.key;
  return Ot.has(e) || !!n && At.has(n)
}
var Mt = `wplace:controls:v1`,
  Nt = `overlay-studio:hotkey:`,
  Pt = `input:not([type="checkbox"], [type="radio"], [type="button"], [type="submit"], [type="reset"]), textarea, select, [contenteditable]:not([contenteditable="false"])`;

function Ft(e) {
  return e instanceof Element && e.closest(Pt) !== null
}

function It(e) {
  return e instanceof KeyboardEvent && e.repeat
}

function Lt(e, t) {
  return e.surfaces.filter(e => t.surfaces.includes(e))
}

function B(e, t, n) {
  let r = A(t);
  if (!r || r.key === `Escape` || r.key === `Tab` || T(r.key) && !e.hold) return {
    kind: `unsupported`
  };
  let i = E(r.key);
  if (e.mouseOnly && !i) return {
    kind: `mouse-only`
  };
  if (e.needsModifier && i) return {
    kind: `keyboard-only`
  };
  if (kt(t, n)) return {
    kind: `reserved`
  };
  if (e.hold && r.modifiers.length) return {
    kind: `single-key`
  };
  if (e.needsModifier && !r.modifiers.some(e => e === `Mod` || e === `Alt`)) return {
    kind: `needs-modifier`
  };
  let a = Tt.find(n => {
    var r, i;
    return ((r = n.chords) == null ? void 0 : r.includes(t)) && ((i = n.surfaces) == null ? void 0 : i.some(t => e.surfaces.includes(t)))
  });
  return a ? {
    kind: `fixed`,
    control: a
  } : null
}

function V(e, t, n, r) {
  let i = Lt(e, n);
  if (!i.length) return !1;
  if (t === r) return !0;
  let a = e => {
    var t;
    return ((t = e.shiftSurfaces) == null ? void 0 : t.some(e => i.includes(e))) ?? !1
  };
  return a(e) && Se(t) === r || a(n) && Se(r) === t
}

function Rt(e, t = w()) {
  let n = {};
  if (!e || typeof e != `object` || Array.isArray(e)) return n;
  for (let [r, i] of Object.entries(e)) {
    let e = z.get(r);
    if (!e || !Array.isArray(i)) continue;
    let a = i.filter((n, r) => typeof n == `string` && i.indexOf(n) === r && B(e, n, t) === null);
    n[e.id] = a.slice(0, 2)
  }
  return n
}

function zt(e) {
  let t = {};
  for (let n of R) t[n.id] = e[n.id] ?? n.defaults.filter(t => !R.some(r => {
    var i;
    return r.id !== n.id && ((i = e[r.id]) == null ? void 0 : i.some(e => V(n, t, r, e)))
  }));
  return t
}

function Bt(e, t, n) {
  let r = z.get(t);
  return R.flatMap(i => {
    var a;
    return i.id === t || ((a = i.visible) == null ? void 0 : a.call(i)) === !1 ? [] : e[i.id].filter(e => V(r, n, i, e)).map(e => ({
      action: i,
      chord: e
    }))
  })
}

function Vt(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n])
}

function Ht(e, t) {
  let n = {},
    r = new Set;
  for (let i of R) {
    if (i.section !== `studio`) continue;
    let a = i.id.slice(7),
      o = e.getItem(Nt + a);
    if (o === null) continue;
    let s = /^((?:Ctrl\+)?(?:Meta\+)?)(Shift\+)?([a-z1-9[\]])$/.exec(o);
    if (o !== `` && !s) continue;
    let c = (s == null ? void 0 : s[3].toUpperCase()) ?? ``,
      l = s ? [s[1] ? `Mod` : ``, s[2] && /^[A-Z0-9]$/.test(c) ? `Shift` : ``, c].filter(Boolean).join(`+`) : ``,
      u = l && B(i, l, t) === null && !r.has(l);
    u && r.add(l), n[i.id] = u ? [l] : []
  }
  for (let [e, t] of Object.entries(n)) Vt(t, z.get(e).defaults) && delete n[e];
  return n
}
var Ut = 800,
  H = new WeakMap,
  U = new WeakMap,
  Wt = new WeakMap,
  W = new WeakMap,
  Gt = new WeakMap,
  Kt = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Y = new WeakSet,
  qt = class {
    constructor() {
      r(this, Y), ee(this, `apple`, w()), c(this, H, a({})), c(this, U, e(() => zt(h(s(H, this))))), c(this, Wt, e(() => Object.values(h(s(U, this))).flat().filter(he).map(e => A(e).key))), c(this, W, e(() => {
        let e = {};
        for (let t of R) {
          let n = h(s(U, this))[t.id].flatMap(e => Bt(h(s(U, this)), t.id, e));
          n.length && (e[t.id] = n)
        }
        return e
      })), c(this, Gt, a(!1)), c(this, Kt, a(`idle`)), c(this, G, null), c(this, K, !1), c(this, q, 0), c(this, J, void 0)
    }
    get conflicts() {
      return h(s(W, this))
    }
    set conflicts(e) {
      n(s(W, this), e)
    }
    get storageFailed() {
      return h(s(Gt, this))
    }
    set storageFailed(e) {
      n(s(Gt, this), e, !0)
    }
    get sync() {
      return h(s(Kt, this))
    }
    set sync(e) {
      n(s(Kt, this), e, !0)
    }
    get overrides() {
      return h(s(H, this))
    }
    bindings(e) {
      return h(s(U, this))[e]
    }
    label(e) {
      let t = h(s(U, this))[e][0];
      return t ? Te(t, this.apple) : ``
    }
    format(e) {
      return Te(e, this.apple)
    }
    isCustom(e) {
      return e in h(s(H, this))
    }
    matches(e, t, n) {
      let r = e instanceof KeyboardEvent ? e.isComposing ? null : ve(e) : ye(e);
      if (!r) return !1;
      let i = h(s(U, this))[t];
      return i.includes(r) || !!(n != null && n.shift) && i.includes(Ce(r))
    }
    isHoldKey(e, t) {
      let n = e instanceof KeyboardEvent ? O(e) : D(e.button);
      return !!n && h(s(U, this))[t].includes(n)
    }
    isMouseButtonBound(e) {
      let t = D(e);
      return !!t && h(s(Wt, this)).includes(t)
    }
    modifierHeld(e, t) {
      return h(s(U, this))[t].some(t => T(t) && xe(e, t))
    }
    problem(e, t) {
      return B(z.get(e), t, this.apple)
    }
    conflictsFor(e, t) {
      return Bt(h(s(U, this)), e, t)
    }
    isBrowserShortcut(e, t) {
      return jt(t) && !z.get(e).defaults.includes(t)
    }
    assign(e, t, n, r = !1) {
      let i = {
          ...h(s(H, this))
        },
        a = [...h(s(U, this))[e]],
        c = a[t],
        l = this.conflictsFor(e, n);
      for (let [e, {
          action: t,
          chord: n
        }] of l.entries()) {
        let a = (i[t.id] ?? h(s(U, this))[t.id]).filter(e => e !== n);
        r && e === 0 && c && !a.includes(c) && a.splice(h(s(U, this))[t.id].indexOf(n), 0, c), i[t.id] = a
      }
      t < a.length ? a[t] = n : a.push(n), i[e] = a.filter((e, t) => a.indexOf(e) === t).slice(0, 2), o(Y, this, X).call(this, i)
    }
    clear(e, t) {
      o(Y, this, X).call(this, {
        ...h(s(H, this)),
        [e]: h(s(U, this))[e].filter((e, n) => n !== t)
      })
    }
    reset(e) {
      let t = z.get(e),
        n = {
          ...h(s(H, this))
        };
      delete n[e];
      for (let r of R) {
        let i = n[r.id];
        r.id === e || !i || (n[r.id] = i.filter(e => !t.defaults.some(n => V(t, n, r, e))))
      }
      o(Y, this, X).call(this, n)
    }
    resetAll() {
      o(Y, this, X).call(this, {})
    }
    load() {
      let e = o(Y, this, Q).call(this);
      if (e) {
        n(s(H, this), e.bindings), i(K, this, e.dirty);
        return
      }
      try {
        let e = Ht(localStorage, this.apple);
        if (n(s(H, this), e), i(K, this, Object.keys(e).length > 0), o(Y, this, Z).call(this), this.storageFailed) return;
        for (let e of Object.keys(localStorage)) e.startsWith(`overlay-studio:hotkey:`) && localStorage.removeItem(e)
      } catch {
        n(s(H, this), {})
      }
    }
    async useAccount(e) {
      if (clearTimeout(s(J, this)), i(G, this, e), this.sync = `idle`, e === null) return;
      let t = o(Y, this, Q).call(this),
        r = s(q, this),
        a;
      try {
        a = (await re.getControlBindings()).bindings
      } catch {
        s(G, this) === e && (this.sync = `error`);
        return
      }
      if (s(G, this) !== e) return;
      let c = t === null || t.userId === e || t.userId === null;
      s(q, this) !== r || t != null && t.dirty && t.userId === e ? i(K, this, !0) : a ? (n(s(H, this), Rt(a, this.apple)), i(K, this, !1), this.sync = `saved`) : (c || n(s(H, this), {}), i(K, this, Object.keys(h(s(H, this))).length > 0)), o(Y, this, Z).call(this), await o(Y, this, $).call(this)
    }
    retrySync() {
      o(Y, this, $).call(this)
    }
    start() {
      this.load(), window.addEventListener(`storage`, e => {
        if (e.key === `wplace:controls:v1`) {
          let e = o(Y, this, Q).call(this);
          n(s(H, this), (e == null ? void 0 : e.bindings) ?? {}), i(K, this, (e == null ? void 0 : e.dirty) ?? !1)
        }
      }), window.addEventListener(`wplace:online`, () => void o(Y, this, $).call(this)), window.addEventListener(`pagehide`, () => void o(Y, this, $).call(this, !0)), ne(() => {
        let t = e(() => {
          var e;
          return x.loading ? void 0 : ((e = x.data) == null ? void 0 : e.id) ?? null
        });
        te(() => {
          let e = h(t);
          e !== void 0 && u(() => void this.useAccount(e))
        })
      })
    }
  };

function X(e) {
  var t;
  let r = {};
  for (let [t, n] of Object.entries(e)) n && !Vt(n, z.get(t).defaults) && (r[t] = n);
  n(s(H, this), r), i(q, this, (t = s(q, this), t++, t)), i(K, this, !0), o(Y, this, Z).call(this), s(G, this) !== null && (clearTimeout(s(J, this)), i(J, this, setTimeout(() => void o(Y, this, $).call(this), Ut)))
}

function Z() {
  try {
    let e = {
      userId: s(G, this),
      dirty: s(K, this),
      bindings: h(s(H, this))
    };
    localStorage.setItem(Mt, JSON.stringify(e)), this.storageFailed = !1
  } catch {
    this.storageFailed = !0
  }
}

function Q() {
  try {
    let e = localStorage.getItem(Mt);
    if (e === null) return null;
    let t = JSON.parse(e);
    return {
      userId: Number.isSafeInteger(t == null ? void 0 : t.userId) ? t.userId : null,
      dirty: (t == null ? void 0 : t.dirty) === !0,
      bindings: Rt(t == null ? void 0 : t.bindings, this.apple)
    }
  } catch {
    return null
  }
}
async function $(e = !1) {
  clearTimeout(s(J, this));
  let t = s(G, this);
  if (t === null || !s(K, this)) return;
  let n = s(q, this);
  this.sync = `saving`;
  try {
    if (await re.saveControlBindings(h(s(H, this)), e), s(G, this) !== t || s(q, this) !== n) return;
    i(K, this, !1), o(Y, this, Z).call(this), this.sync = `saved`
  } catch {
    s(G, this) === t && (this.sync = `error`)
  }
}
var Jt = new qt;
Jt.start();
export {
  xe as A, it as C, ve as D, we as E, ye as M, D as N, T as O, ut as S, Ve as T, ht as _, z as a, ot as b, Ct as c, j as d, st as f, pt as g, bt as h, R as i, ge as j, O as k, wt as l, gt as m, It as n, xt as o, _t as p, Ft as r, Tt as s, Jt as t, at as u, N as v, Ge as w, ct as x, lt as y
};