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
} from "./DduSK_CN.js";
import {
  t as b
} from "./Oa2KIPWU.js";
import {
  t as re,
  wt as x
} from "./oPC4dsku.js";
import {
  t as S
} from "./N8CrrYHb.js";
import {
  i as ie,
  n as ae
} from "./C9TtFdrq.js";
import {
  t as oe
} from "./0fy4Pb3y.js";
import {
  t as se
} from "./CTXAjxpK.js";
var ce = [`Mod`, `Alt`, `Shift`],
  le = new Set([`Space`, `Enter`, `Tab`, `Escape`, `Backspace`, `Delete`, `Insert`, `Home`, `End`, `PageUp`, `PageDown`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ContextMenu`, ...Array.from({
    length: 24
  }, (e, t) => `F${t+1}`)]),
  ue = [null, `MouseMiddle`, `MouseRight`, `MouseBack`, `MouseForward`],
  de = [1, 4, 2, 8, 16],
  fe = {
    MouseMiddle: () => b.settings_mouse_middle_button(),
    MouseRight: () => b.settings_mouse_right_click(),
    MouseBack: () => b.settings_mouse_back_button(),
    MouseForward: () => b.settings_mouse_forward_button()
  },
  pe = {
    Control: `Mod`,
    Meta: `Mod`,
    Alt: `Alt`,
    Option: `Alt`,
    Shift: `Shift`
  },
  me = {
    ControlLeft: `Mod`,
    ControlRight: `Mod`,
    MetaLeft: `Mod`,
    MetaRight: `Mod`,
    AltLeft: `Alt`,
    AltRight: `Alt`,
    ShiftLeft: `Shift`,
    ShiftRight: `Shift`
  },
  he = {
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
  ge = {
    ArrowUp: `Up`,
    ArrowDown: `Down`,
    ArrowLeft: `Left`,
    ArrowRight: `Right`,
    PageUp: `Page Up`,
    PageDown: `Page Down`,
    ContextMenu: `Menu`,
    Escape: `Esc`
  };

function C() {
  return typeof navigator < `u` && /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

function w(e) {
  return ce.includes(e)
}

function T(e) {
  return e in fe
}

function _e(e) {
  let t = k(e);
  return !!t && T(t.key)
}

function E(e) {
  return ue[e] ?? null
}

function ve(e, t) {
  return (e.buttons & (de[t] ?? 0)) !== 0
}

function ye(e) {
  return [...e].length === 1
}

function D({
  key: e,
  code: t
}) {
  return e === `AltGraph` ? null : e === ` ` || t === `Space` ? `Space` : (pe[e] ?? me[t]) || (e === `Dead` || ye(e) ? /^[a-z]$/i.test(e) ? e.toUpperCase() : /^Key[A-Z]$/.test(t) ? t.slice(3) : /^Digit\d$/.test(t) ? t.slice(5) : e === `Dead` ? he[t] ?? null : /[\p{Cc}\p{Z}]/u.test(e) ? null : e : le.has(e) ? e : null)
}

function O(e) {
  return e.length > 1 || /^[A-Z0-9]$/.test(e)
}

function be(e) {
  let t = D(e);
  return t ? w(t) ? t : Se(e, t) : null
}

function xe(e) {
  let t = E(e.button);
  return t && Se(e, t)
}

function Se(e, t) {
  var n;
  let r = ((n = e.getModifierState) == null ? void 0 : n.call(e, `AltGraph`)) ?? !1,
    i = [];
  return !r && (e.ctrlKey || e.metaKey) && i.push(`Mod`), !r && e.altKey && i.push(`Alt`), e.shiftKey && O(t) && i.push(`Shift`), [...i, t].join(`+`)
}

function k(e) {
  let t, n;
  if (e === `+` || e.endsWith(`++`)) t = `+`, n = e.slice(0, -2);
  else {
    let r = e.lastIndexOf(`+`);
    t = e.slice(r + 1), n = r < 0 ? `` : e.slice(0, r)
  }
  let r = n ? n.split(`+`) : [],
    i = -1;
  for (let e of r) {
    let t = ce.indexOf(e);
    if (t <= i) return null;
    i = t
  }
  let a = r;
  return w(t) ? a.length ? null : {
    modifiers: a,
    key: t
  } : !(le.has(t) || T(t)) && (!ye(t) || /[a-z\p{Cc}\p{Z}]/u.test(t)) || a.includes(`Shift`) && !O(t) ? null : {
    modifiers: a,
    key: t
  }
}

function Ce(e, t) {
  return t === `Mod` ? e.ctrlKey || e.metaKey : t === `Alt` ? e.altKey : e.shiftKey
}

function we(e) {
  let t = k(e);
  return !t || w(t.key) || t.modifiers.includes(`Shift`) || !O(t.key) ? null : [...t.modifiers, `Shift`, t.key].join(`+`)
}

function Te(e) {
  return e.replace(/(^|\+)Shift\+(?=.)/, `$1`)
}

function Ee(e, t = C()) {
  var n;
  let r = k(e);
  if (!r) return [e];
  let i = {
      Mod: t ? `Cmd` : `Ctrl`,
      Alt: t ? `Option` : `Alt`,
      Shift: `Shift`
    },
    a = w(r.key) ? i[r.key] : ((n = fe[r.key]) == null ? void 0 : n.call(fe)) ?? ge[r.key] ?? r.key;
  return [...r.modifiers.map(e => i[e]), a]
}

function De(e, t = C()) {
  return Ee(e, t).join(`+`)
}
var Oe = new Set([`$$slots`, `$$events`, `$$legacy`]),
  ke = g(`<svg><path d="M4 18C4 2 20 22 20 6"></path><path d="M4 18V4m16 2v14" stroke-dasharray="2 2" stroke-width="1"></path><circle cx="4" cy="4" r="2"></circle><circle cx="20" cy="20" r="2"></circle></svg>`),
  Ae = g(`<svg><path d="M7 22H4v-2h3v2Zm9-10h-2v8h2v2h-4V10h4v2ZM4 20H2v-3h2v3Zm5 0H7v-3h2v3Zm13 0h-6v-2h4v-2h2v4ZM7 17H4v-2h3v2Zm13-1h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM6 13H4V8h2v5Zm14-4h-3V7h3v2ZM8 8H6V6h2v2Zm9-1h-2V4h2v3Zm5 0h-2V4h2v3Zm-9-1H8V4h5v2Zm7-2h-3V2h3v2Z"></path></svg>`);

function je(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Oe);
  var a = v(),
    o = p(a),
    s = e => {
      var n = ke();
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
      var n = Ae();
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
var Me = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ne = g(`<svg><ellipse cx="12" cy="12" rx="9" ry="7"></ellipse></svg>`),
  Pe = g(`<svg><path d="M6 4h12v2h4v4h2v4h-2v4h-4v2H6v-2H2v-4H0v-4h2V6h4V4Zm0 2v2H4v2H2v4h2v2h2v2h12v-2h2v-2h2v-4h-2V8h-2V6H6Z"></path></svg>`);

function Fe(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Me);
  var a = v(),
    o = p(a),
    s = e => {
      var n = Ne();
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
      var n = Pe();
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
var Ie = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Le = g(`<svg><rect x="3" y="5" width="18" height="14"></rect></svg>`),
  Re = g(`<svg><path d="M20 19H4v-2h16v2ZM4 17H2V7h2v10Zm18 0h-2V7h2v10ZM20 7H4V5h16v2Z"></path></svg>`);

function ze(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Ie);
  var a = v(),
    o = p(a),
    s = e => {
      var n = Le();
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
      var n = Re();
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
var Be = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ve = g(`<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>`),
  He = g(`<svg><path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-9-5h-2v-2h2v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"></path></svg>`);

function Ue(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, Be);
  var a = v(),
    o = p(a),
    s = e => {
      var n = Ve();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = He();
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
var We = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ge = g(`<svg><path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"></path></svg>`),
  Ke = g(`<svg><path d="M3 21h2v2H1v-4h2v2Zm6 0H5v-2h4v2Zm-4-2H3v-4h2v4Zm6 0H9v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H5v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 13H7v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-10-2H9V9h2v2Zm4 0h-2V9h2v2Zm4 0h-2V9h2v2Zm-6-2h-2V7h2v2Zm8 0h-2V7h2v2ZM11 7H9V5h2v2Zm4 0h-2V5h2v2Zm8 0h-2V5h2v2ZM13 5h-2V3h2v2Zm4 0h-2V3h2v2Zm4 0h-2V3h2v2Zm-2-2h-2V1h2v2Z"></path></svg>`);

function qe(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, We);
  var a = v(),
    o = p(a),
    s = e => {
      var n = Ge();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = Ke();
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
var Je = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ye = g(`<svg><path d="M13 2h2v2h2v2h-4v5h5V7h2v2h2v2h2v2h-2v2h-2v2h-2v-4h-5v5h4v2h-2v2h-2v2h-2v-2H9v-2H7v-2h4v-5H6v4H4v-2H2v-2H0v-2h2V9h2V7h2v4h5V6H7V4h2V2h2V0h2v2Z"></path></svg>`);

function Xe(e, n) {
  let r = m(n, Je);
  var i = Ye();
  t(i, () => ({
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    ...r
  })), f(e, i)
}
var Ze = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Qe = g(`<svg><path d="M5 19 19 5"></path><path d="M3 17h4v4H3zM17 3h4v4h-4z" fill="currentColor" stroke="none"></path></svg>`);

function $e(e, n) {
  let r = m(n, Ze);
  var i = Qe();
  t(i, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...r
  })), f(e, i)
}
var et = new Set([`$$slots`, `$$events`, `$$legacy`]),
  tt = g(`<svg><path d="M5 6.5 15.5 4 20 12.5 13.5 20 4 15Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><circle cx="5" cy="6.5" r="1.75" fill="currentColor"></circle><circle cx="15.5" cy="4" r="1.75" fill="currentColor"></circle><circle cx="20" cy="12.5" r="1.75" fill="currentColor"></circle><circle cx="13.5" cy="20" r="1.75" fill="currentColor"></circle><circle cx="4" cy="15" r="1.75" fill="currentColor"></circle></svg>`),
  nt = g(`<svg><path d="M14 2h4v4h-2v2h2v2h2v2h2v4h-4v2h-2v2h-2v2h-4v-2H8v-2H6v-2H2v-4h2V8H2V4h4v2h4V4h4V2ZM6 8v4h2v4h2v2h4v-2h2v-2h2v-2h-2v-2h-2V6h-4v2H6Z"></path></svg>`);

function rt(e, n) {
  _(n, !0);
  let r = y(),
    i = m(n, et);
  var a = v(),
    o = p(a),
    s = e => {
      var n = tt();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        ...i
      })), f(e, n)
    },
    c = e => {
      var n = nt();
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
var it = new Set([`$$slots`, `$$events`, `$$legacy`]),
  at = g(`<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>`);

function ot(e, n) {
  let r = m(n, it);
  var i = at();
  t(i, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    ...r
  })), f(e, i)
}

function st(e, t) {
  return Math.min(t, Math.max(1, Math.trunc(e)))
}
var ct = [{
    value: `brush-square`,
    icon: ot,
    label: () => b.alliance_asset_tool_square_brush()
  }, {
    value: `brush-circle`,
    icon: Ue,
    label: () => b.alliance_asset_tool_circle_brush()
  }, {
    value: `fill`,
    icon: oe,
    label: () => b.alliance_asset_tool_fill()
  }, {
    value: `polygon`,
    icon: rt,
    label: () => b.alliance_asset_tool_polygon()
  }],
  A = [...ct, {
    value: `line`,
    icon: $e,
    label: () => b.overlay_editor_line()
  }, {
    value: `rectangle`,
    icon: ze,
    label: () => b.overlay_editor_rectangle()
  }, {
    value: `ellipse`,
    icon: Fe,
    label: () => b.overlay_editor_ellipse()
  }, {
    value: `bezier`,
    icon: je,
    label: () => b.overlay_editor_bezier()
  }, {
    value: `eraser`,
    icon: se,
    label: () => b.eraser()
  }, {
    value: `pick`,
    icon: qe,
    label: () => b.color_picker()
  }, {
    value: `move`,
    icon: Xe,
    label: () => b.overlay_editor_move()
  }];

function lt(e) {
  var t;
  return ((t = A.find(({
    value: t
  }) => t === e)) == null ? void 0 : t.label()) ?? e
}

function ut(e) {
  return e === `brush-square` || e === `brush-circle` || e === `eraser` || e === `line` || e === `rectangle` || e === `ellipse` || e === `bezier`
}

function dt(e) {
  return e !== `brush-square`
}
var ft = {};

function pt(e, t) {
  let n = Math.max(1, Math.trunc(e)),
    r = ft[t];
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
  return ft[t] = c, c
}

function j(e, t, n, r, i, a) {
  if (n < 0 || n >= t || i < 0 || r >= e) return;
  let o = Math.max(0, r),
    s = Math.min(e - 1, i);
  for (let e = o; e <= s; e += 1) a(e, n)
}

function mt(e, t, n, r, i, a) {
  if (e <= 0 || t <= 0) return;
  let o = pt(r, i);
  for (let r = 0; r < o.size; r += 1) j(e, t, n.y + o.minOffset + r, n.x + o.spans[r * 2], n.x + o.spans[r * 2 + 1], a)
}

function ht(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < o.size; c += 1) {
    let l = a + o.minOffset + c;
    if (l < 0 || l >= t) continue;
    let u = i + o.spans[c * 2],
      d = i + o.spans[c * 2 + 1],
      f = l - r - o.minOffset;
    if (f < 0 || f >= o.size) {
      j(e, t, l, u, d, s);
      continue
    }
    let p = n + o.spans[f * 2],
      m = n + o.spans[f * 2 + 1];
    j(e, t, l, u, Math.min(d, p - 1), s), j(e, t, l, Math.max(u, m + 1), d, s)
  }
}

function gt(e, t, n, r, i, a, o, s = !0) {
  if (e <= 0 || t <= 0) return;
  let c = pt(i, a);
  s && mt(e, t, n, c.size, a, o);
  let l = n.x,
    u = n.y,
    d = !0;
  M(n, r, (n, r) => {
    if (d) {
      d = !1;
      return
    }
    ht(e, t, l, u, n, r, c, o), l = n, u = r
  })
}

function _t(e, t, n, r, i) {
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

function vt(e, t, n, r, i, a = null) {
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

function yt(e, t) {
  let n = [];
  return M(e, t, (e, t) => n.push({
    x: e,
    y: t
  })), n
}

function M(e, t, n) {
  let {
    x: r,
    y: i
  } = e, a = Math.abs(t.x - e.x), o = e.x < t.x ? 1 : -1, s = -Math.abs(t.y - e.y), c = e.y < t.y ? 1 : -1, l = a + s;
  for (; n(r, i), r !== t.x || i !== t.y;) {
    let e = l * 2;
    e >= s && (l += s, r += o), e <= a && (l += a, i += c)
  }
}

function N(e) {
  return e.y * 4294967296 + e.x
}

function bt(e, t, n) {
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

function xt(e, t, n) {
  if (n.length < 3 || new Set(n.map(N)).size < 3) return [];
  let r = Math.max(0, Math.min(...n.map(e => e.x))),
    i = Math.min(e - 1, Math.max(...n.map(e => e.x))),
    a = Math.max(0, Math.min(...n.map(e => e.y))),
    o = Math.min(t - 1, Math.max(...n.map(e => e.y))),
    s = new Map;
  for (let r = 0; r < n.length; r += 1) {
    let i = n[r],
      a = n[(r + 1) % n.length];
    for (let n of yt(i, a)) n.x < 0 || n.y < 0 || n.x >= e || n.y >= t || s.set(N(n), n)
  }
  for (let e = a; e <= o; e += 1)
    for (let t = r; t <= i; t += 1) bt(t + .5, e + .5, n) && s.set(N({
      x: t,
      y: e
    }), {
      x: t,
      y: e
    });
  return [...s.values()].sort((e, t) => e.y - t.y || e.x - t.x)
}
var St = [{
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
  P = [`world`, `studio`, `hq`],
  Ct = {
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
  wt = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => ({
    id: `studio.visibility-${e}`,
    section: `studio`,
    label: () => b.overlay_editor_toggle_numbered_layer({
      number: e
    }),
    defaults: [String(e)],
    surfaces: [`studio`],
    layerIndex: e - 1
  })),
  Tt = [...A.map(e => [e.value, e.label, Ct[e.value]]), [`text`, () => b.overlay_editor_text(), `T`],
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

function F(e, t, ...n) {
  return {
    id: `studio.${e}`,
    section: `studio`,
    label: t,
    defaults: n,
    surfaces: [`studio`]
  }
}

function I(e, t, n) {
  return {
    id: `description.${e}`,
    section: `description`,
    label: t,
    defaults: [n],
    surfaces: [`description`],
    needsModifier: !0
  }
}
var L = [{
    id: `undo`,
    section: `general`,
    label: () => b.undo(),
    defaults: [`Mod+Z`],
    surfaces: P
  }, {
    id: `redo`,
    section: `general`,
    label: () => b.redo(),
    defaults: [`Mod+Shift+Z`, `Mod+Y`],
    surfaces: P
  }, {
    id: `zoom-in`,
    section: `general`,
    label: () => b.zoom_in(),
    defaults: [`=`, `+`],
    surfaces: P
  }, {
    id: `zoom-out`,
    section: `general`,
    label: () => b.zoom_out(),
    defaults: [`-`, `_`],
    surfaces: P
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
    surfaces: P,
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
  }, ...Tt, F(`transform-layer`, () => b.overlay_editor_layer_transform(), `Shift+T`), F(`size-up`, () => b.overlay_editor_size_up(), `]`), F(`size-down`, () => b.overlay_editor_size_down(), `[`), F(`visibility`, () => b.overlay_editor_toggle_layer(), `V`), ...wt, {
    ...F(`pick-hold`, () => b.settings_controls_eyedropper_hold(), `Alt`),
    hold: !0
  }, F(`save`, () => b.save(), `Mod+S`), F(`cut`, () => b.overlay_editor_cut_selection(), `Mod+X`), F(`copy`, () => b.overlay_editor_copy_selection(), `Mod+C`), F(`paste`, () => b.overlay_editor_paste_selection(), `Mod+V`), F(`duplicate-selection`, () => b.overlay_editor_duplicate_selection(), `Mod+Shift+D`), F(`clear-selection`, () => b.settings_clear_selection(), `Mod+D`), F(`delete-selection`, () => b.overlay_editor_delete_selection(), `Delete`, `Backspace`), F(`duplicate-layer`, () => b.overlay_editor_layer_duplicate(), `Mod+J`), F(`merge-layers`, () => b.overlay_editor_merge_layers(), `Mod+E`), F(`group-layers`, () => b.overlay_editor_group_layers(), `Mod+G`), F(`apply-text`, () => b.settings_controls_apply_text(), `Mod+Enter`), {
    id: `hq.reset-brush`,
    section: `headquarters`,
    label: () => b.settings_controls_reset_brush(),
    defaults: [`Alt+R`],
    surfaces: [`hq`]
  }, I(`bold`, () => b.alliance_markdown_bold(), `Mod+B`), I(`italic`, () => b.alliance_markdown_italic(), `Mod+I`), I(`heading-1`, () => b.alliance_markdown_heading({
    level: 1
  }), `Mod+Shift+1`), I(`heading-2`, () => b.alliance_markdown_heading({
    level: 2
  }), `Mod+Shift+2`), I(`heading-3`, () => b.alliance_markdown_heading({
    level: 3
  }), `Mod+Shift+3`), I(`bulleted-list`, () => b.alliance_markdown_bulleted_list(), `Mod+Shift+8`), I(`numbered-list`, () => b.alliance_markdown_numbered_list(), `Mod+Shift+7`), {
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
    visible: () => x.hasAnyPermission(ae.flatMap(e => e.permissions))
  }, {
    id: `staff.dashboard-privacy`,
    section: `staff`,
    label: () => b.dashboard_privacy_mode(),
    defaults: [`Alt+P`],
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
  }, {
    id: `staff.screenshot-pan`,
    section: `staff`,
    label: () => b.settings_controls_screenshot_pan(),
    defaults: [`MouseMiddle`],
    surfaces: [`dashboard`],
    hold: !0,
    mouseOnly: !0,
    visible: () => x.hasAnyPermission(S.dashboard.viewLogs)
  }],
  R = new Map(L.map(e => [e.id, e])),
  Et = [{
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
  Dt = new Set([`Mod+W`, `Mod+Shift+W`, `Mod+T`, `Mod+Shift+T`, `Mod+N`, `Mod+Shift+N`, `Mod+Q`, `Mod+Shift+Q`, `Mod+Tab`, `Mod+Shift+Tab`, `Mod+PageUp`, `Mod+PageDown`, `Mod+Space`, `Alt+Space`, `Alt+Tab`, `Alt+F4`, ...Array.from({
    length: 9
  }, (e, t) => `Mod+${t+1}`)]),
  Ot = new Set([`Mod+H`, `Mod+M`, `Mod+Alt+H`, `Mod+Alt+M`]),
  kt = new Set(`Mod+A.Mod+B.Mod+D.Mod+E.Mod+F.Mod+G.Mod+H.Mod+I.Mod+J.Mod+K.Mod+L.Mod+O.Mod+P.Mod+R.Mod+S.Mod+U.Mod+Y.Mod+Shift+A.Mod+Shift+B.Mod+Shift+C.Mod+Shift+D.Mod+Shift+E.Mod+Shift+G.Mod+Shift+I.Mod+Shift+J.Mod+Shift+K.Mod+Shift+M.Mod+Shift+O.Mod+Shift+R.Mod+Shift+Delete.Mod+=.Mod++.Mod+-.Mod+_.Mod+0.Mod+,.Mod+[.Mod+].Mod+ArrowLeft.Mod+ArrowRight.Mod+F5.Alt+D.Alt+E.Alt+F.Alt+Home.Alt+ArrowLeft.Alt+ArrowRight.F1.F3.F5.F6.F7.F10.F11.F12`.split(`.`));

function At(e, t) {
  return Dt.has(e) || t && Ot.has(e)
}
var jt = new Set([`MouseBack`, `MouseForward`]);

function Mt(e) {
  var t;
  let n = (t = k(e)) == null ? void 0 : t.key;
  return kt.has(e) || !!n && jt.has(n)
}
var Nt = `wplace:controls:v1`,
  Pt = `overlay-studio:hotkey:`,
  Ft = `input:not([type="checkbox"], [type="radio"], [type="button"], [type="submit"], [type="reset"]), textarea, select, [contenteditable]:not([contenteditable="false"])`;

function It(e) {
  return e instanceof Element && e.closest(Ft) !== null
}

function Lt(e) {
  return e instanceof KeyboardEvent && e.repeat
}

function Rt(e, t) {
  return e.surfaces.filter(e => t.surfaces.includes(e))
}

function z(e, t, n) {
  let r = k(t);
  if (!r || r.key === `Escape` || r.key === `Tab` || w(r.key) && !e.hold) return {
    kind: `unsupported`
  };
  let i = T(r.key);
  if (e.mouseOnly && !i) return {
    kind: `mouse-only`
  };
  if (e.needsModifier && i) return {
    kind: `keyboard-only`
  };
  if (At(t, n)) return {
    kind: `reserved`
  };
  if (e.hold && r.modifiers.length) return {
    kind: `single-key`
  };
  if (e.needsModifier && !r.modifiers.some(e => e === `Mod` || e === `Alt`)) return {
    kind: `needs-modifier`
  };
  let a = Et.find(n => {
    var r, i;
    return ((r = n.chords) == null ? void 0 : r.includes(t)) && ((i = n.surfaces) == null ? void 0 : i.some(t => e.surfaces.includes(t)))
  });
  return a ? {
    kind: `fixed`,
    control: a
  } : null
}

function B(e, t, n, r) {
  let i = Rt(e, n);
  if (!i.length) return !1;
  if (t === r) return !0;
  let a = e => {
    var t;
    return ((t = e.shiftSurfaces) == null ? void 0 : t.some(e => i.includes(e))) ?? !1
  };
  return a(e) && we(t) === r || a(n) && we(r) === t
}

function zt(e, t = C()) {
  let n = {};
  if (!e || typeof e != `object` || Array.isArray(e)) return n;
  for (let [r, i] of Object.entries(e)) {
    let e = R.get(r);
    if (!e || !Array.isArray(i)) continue;
    let a = i.filter((n, r) => typeof n == `string` && i.indexOf(n) === r && z(e, n, t) === null);
    n[e.id] = a.slice(0, 2)
  }
  return n
}

function Bt(e) {
  let t = {};
  for (let n of L) t[n.id] = e[n.id] ?? n.defaults.filter(t => !L.some(r => {
    var i;
    return r.id !== n.id && ((i = e[r.id]) == null ? void 0 : i.some(e => B(n, t, r, e)))
  }));
  return t
}

function Vt(e, t, n) {
  let r = R.get(t);
  return L.flatMap(i => {
    var a;
    return i.id === t || ((a = i.visible) == null ? void 0 : a.call(i)) === !1 ? [] : e[i.id].filter(e => B(r, n, i, e)).map(e => ({
      action: i,
      chord: e
    }))
  })
}

function Ht(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n])
}

function Ut(e, t) {
  let n = {},
    r = new Set;
  for (let i of L) {
    if (i.section !== `studio`) continue;
    let a = i.id.slice(7),
      o = e.getItem(Pt + a);
    if (o === null) continue;
    let s = /^((?:Ctrl\+)?(?:Meta\+)?)(Shift\+)?([a-z1-9[\]])$/.exec(o);
    if (o !== `` && !s) continue;
    let c = (s == null ? void 0 : s[3].toUpperCase()) ?? ``,
      l = s ? [s[1] ? `Mod` : ``, s[2] && /^[A-Z0-9]$/.test(c) ? `Shift` : ``, c].filter(Boolean).join(`+`) : ``,
      u = l && z(i, l, t) === null && !r.has(l);
    u && r.add(l), n[i.id] = u ? [l] : []
  }
  for (let [e, t] of Object.entries(n)) Ht(t, R.get(e).defaults) && delete n[e];
  return n
}
var Wt = 800,
  V = new WeakMap,
  H = new WeakMap,
  Gt = new WeakMap,
  U = new WeakMap,
  W = new WeakMap,
  Kt = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Y = new WeakSet,
  qt = class {
    constructor() {
      r(this, Y), ee(this, `apple`, C()), c(this, V, a({})), c(this, H, e(() => Bt(h(s(V, this))))), c(this, Gt, e(() => Object.values(h(s(H, this))).flat().filter(_e).map(e => k(e).key))), c(this, U, e(() => {
        let e = {};
        for (let t of L) {
          let n = h(s(H, this))[t.id].flatMap(e => Vt(h(s(H, this)), t.id, e));
          n.length && (e[t.id] = n)
        }
        return e
      })), c(this, W, a(!1)), c(this, Kt, a(`idle`)), c(this, G, null), c(this, K, !1), c(this, q, 0), c(this, J, void 0)
    }
    get conflicts() {
      return h(s(U, this))
    }
    set conflicts(e) {
      n(s(U, this), e)
    }
    get storageFailed() {
      return h(s(W, this))
    }
    set storageFailed(e) {
      n(s(W, this), e, !0)
    }
    get sync() {
      return h(s(Kt, this))
    }
    set sync(e) {
      n(s(Kt, this), e, !0)
    }
    get overrides() {
      return h(s(V, this))
    }
    bindings(e) {
      return h(s(H, this))[e]
    }
    label(e) {
      let t = h(s(H, this))[e][0];
      return t ? De(t, this.apple) : ``
    }
    format(e) {
      return De(e, this.apple)
    }
    isCustom(e) {
      return e in h(s(V, this))
    }
    matches(e, t, n) {
      let r = e instanceof KeyboardEvent ? e.isComposing ? null : be(e) : xe(e);
      if (!r) return !1;
      let i = h(s(H, this))[t];
      return i.includes(r) || !!(n != null && n.shift) && i.includes(Te(r))
    }
    isHoldKey(e, t) {
      let n = e instanceof KeyboardEvent ? D(e) : E(e.button);
      return !!n && h(s(H, this))[t].includes(n)
    }
    isMouseButtonBound(e) {
      let t = E(e);
      return !!t && h(s(Gt, this)).includes(t)
    }
    modifierHeld(e, t) {
      return h(s(H, this))[t].some(t => w(t) && Ce(e, t))
    }
    problem(e, t) {
      return z(R.get(e), t, this.apple)
    }
    conflictsFor(e, t) {
      return Vt(h(s(H, this)), e, t)
    }
    isBrowserShortcut(e, t) {
      return Mt(t) && !R.get(e).defaults.includes(t)
    }
    assign(e, t, n, r = !1) {
      let i = {
          ...h(s(V, this))
        },
        a = [...h(s(H, this))[e]],
        c = a[t],
        l = this.conflictsFor(e, n);
      for (let [e, {
          action: t,
          chord: n
        }] of l.entries()) {
        let a = (i[t.id] ?? h(s(H, this))[t.id]).filter(e => e !== n);
        r && e === 0 && c && !a.includes(c) && a.splice(h(s(H, this))[t.id].indexOf(n), 0, c), i[t.id] = a
      }
      t < a.length ? a[t] = n : a.push(n), i[e] = a.filter((e, t) => a.indexOf(e) === t).slice(0, 2), o(Y, this, X).call(this, i)
    }
    clear(e, t) {
      o(Y, this, X).call(this, {
        ...h(s(V, this)),
        [e]: h(s(H, this))[e].filter((e, n) => n !== t)
      })
    }
    reset(e) {
      let t = R.get(e),
        n = {
          ...h(s(V, this))
        };
      delete n[e];
      for (let r of L) {
        let i = n[r.id];
        r.id === e || !i || (n[r.id] = i.filter(e => !t.defaults.some(n => B(t, n, r, e))))
      }
      o(Y, this, X).call(this, n)
    }
    resetAll() {
      o(Y, this, X).call(this, {})
    }
    load() {
      let e = o(Y, this, Q).call(this);
      if (e) {
        n(s(V, this), e.bindings), i(K, this, e.dirty);
        return
      }
      try {
        let e = Ut(localStorage, this.apple);
        if (n(s(V, this), e), i(K, this, Object.keys(e).length > 0), o(Y, this, Z).call(this), this.storageFailed) return;
        for (let e of Object.keys(localStorage)) e.startsWith(`overlay-studio:hotkey:`) && localStorage.removeItem(e)
      } catch {
        n(s(V, this), {})
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
      s(q, this) !== r || t != null && t.dirty && t.userId === e ? i(K, this, !0) : a ? (n(s(V, this), zt(a, this.apple)), i(K, this, !1), this.sync = `saved`) : (c || n(s(V, this), {}), i(K, this, Object.keys(h(s(V, this))).length > 0)), o(Y, this, Z).call(this), await o(Y, this, $).call(this)
    }
    retrySync() {
      o(Y, this, $).call(this)
    }
    start() {
      this.load(), window.addEventListener(`storage`, e => {
        if (e.key === `wplace:controls:v1`) {
          let e = o(Y, this, Q).call(this);
          n(s(V, this), (e == null ? void 0 : e.bindings) ?? {}), i(K, this, (e == null ? void 0 : e.dirty) ?? !1)
        }
      }), window.addEventListener(`wplace:online`, () => void o(Y, this, $).call(this)), window.addEventListener(`pagehide`, () => void o(Y, this, $).call(this, !0)), ne(() => {
        let t = e(() => {
          var e;
          return ((e = x.data) == null ? void 0 : e.id) ?? (x.loading ? void 0 : null)
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
  for (let [t, n] of Object.entries(e)) n && !Ht(n, R.get(t).defaults) && (r[t] = n);
  n(s(V, this), r), i(q, this, (t = s(q, this), t++, t)), i(K, this, !0), o(Y, this, Z).call(this), s(G, this) !== null && (clearTimeout(s(J, this)), i(J, this, setTimeout(() => void o(Y, this, $).call(this), Wt)))
}

function Z() {
  try {
    let e = {
      userId: s(G, this),
      dirty: s(K, this),
      bindings: h(s(V, this))
    };
    localStorage.setItem(Nt, JSON.stringify(e)), this.storageFailed = !1
  } catch {
    this.storageFailed = !0
  }
}

function Q() {
  try {
    let e = localStorage.getItem(Nt);
    if (e === null) return null;
    let t = JSON.parse(e);
    return {
      userId: Number.isSafeInteger(t == null ? void 0 : t.userId) ? t.userId : null,
      dirty: (t == null ? void 0 : t.dirty) === !0,
      bindings: zt(t == null ? void 0 : t.bindings, this.apple)
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
    if (await re.saveControlBindings(h(s(V, this)), e), s(G, this) !== t || s(q, this) !== n) return;
    i(K, this, !1), o(Y, this, Z).call(this), this.sync = `saved`
  } catch {
    s(G, this) === t && (this.sync = `error`)
  }
}
var Jt = new qt;
Jt.start();
export {
  ve as A, qe as C, w as D, be as E, E as M, D as O, ot as S, Ee as T, M as _, R as a, lt as b, wt as c, ct as d, vt as f, gt as g, mt as h, L as i, xe as j, Ce as k, Tt as l, xt as m, Lt as n, St as o, _t as p, It as r, Et as s, Jt as t, A as u, ut as v, Ue as w, dt as x, st as y
};