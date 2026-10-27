import {
  $ as e,
  Bt as t,
  Dt as n,
  G as r,
  It as i,
  Lt as a,
  Nt as o,
  Rt as s,
  Vt as c,
  X as l,
  Xt as u,
  Z as d,
  Zt as f,
  _t as ee,
  bt as te,
  jt as p,
  lt as m,
  o as h,
  on as ne,
  pt as re,
  y as g,
  zt as _
} from "./DTpxYwnW.js";
import "./B8UK1oE5.js";
import {
  t as v
} from "./BRG30FOD.js";
import {
  t as y
} from "./D1DrqaMj.js";
import {
  C as ie,
  n as b
} from "./Ds81Tj2i.js";
import {
  t as x
} from "./R9eRdJsI.js";
import {
  t as ae
} from "./WH764HCz.js";
var oe = [`Mod`, `Alt`, `Shift`],
  se = new Set([`Space`, `Enter`, `Tab`, `Escape`, `Backspace`, `Delete`, `Insert`, `Home`, `End`, `PageUp`, `PageDown`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ContextMenu`, ...Array.from({
    length: 24
  }, (e, t) => `F${t+1}`)]),
  ce = [null, `MouseMiddle`, `MouseRight`, `MouseBack`, `MouseForward`],
  le = [1, 4, 2, 8, 16],
  S = {
    MouseMiddle: () => y.settings_mouse_middle_button(),
    MouseRight: () => y.settings_mouse_right_click(),
    MouseBack: () => y.settings_mouse_back_button(),
    MouseForward: () => y.settings_mouse_forward_button()
  },
  ue = {
    Control: `Mod`,
    Meta: `Mod`,
    Alt: `Alt`,
    Option: `Alt`,
    Shift: `Shift`
  },
  de = {
    ControlLeft: `Mod`,
    ControlRight: `Mod`,
    MetaLeft: `Mod`,
    MetaRight: `Mod`,
    AltLeft: `Alt`,
    AltRight: `Alt`,
    ShiftLeft: `Shift`,
    ShiftRight: `Shift`
  },
  fe = {
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
  pe = {
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
  return oe.includes(e)
}

function me(e) {
  return e in S
}

function he(e) {
  let t = O(e);
  return !!t && me(t.key)
}

function T(e) {
  return ce[e] ?? null
}

function ge(e, t) {
  return (e.buttons & (le[t] ?? 0)) !== 0
}

function _e(e) {
  return [...e].length === 1
}

function E({
  key: e,
  code: t
}) {
  return e === `AltGraph` ? null : e === ` ` || t === `Space` ? `Space` : (ue[e] ?? de[t]) || (e === `Dead` || _e(e) ? /^[a-z]$/i.test(e) ? e.toUpperCase() : /^Key[A-Z]$/.test(t) ? t.slice(3) : /^Digit\d$/.test(t) ? t.slice(5) : e === `Dead` ? fe[t] ?? null : /[\p{Cc}\p{Z}]/u.test(e) ? null : e : se.has(e) ? e : null)
}

function D(e) {
  return e.length > 1 || /^[A-Z0-9]$/.test(e)
}

function ve(e) {
  let t = E(e);
  return t ? w(t) ? t : be(e, t) : null
}

function ye(e) {
  let t = T(e.button);
  return t && be(e, t)
}

function be(e, t) {
  var n;
  let r = ((n = e.getModifierState) == null ? void 0 : n.call(e, `AltGraph`)) ?? !1,
    i = [];
  return !r && (e.ctrlKey || e.metaKey) && i.push(`Mod`), !r && e.altKey && i.push(`Alt`), e.shiftKey && D(t) && i.push(`Shift`), [...i, t].join(`+`)
}

function O(e) {
  let t, n;
  if (e === `+` || e.endsWith(`++`)) t = `+`, n = e.slice(0, -2);
  else {
    let r = e.lastIndexOf(`+`);
    t = e.slice(r + 1), n = r < 0 ? `` : e.slice(0, r)
  }
  let r = n ? n.split(`+`) : [],
    i = -1;
  for (let e of r) {
    let t = oe.indexOf(e);
    if (t <= i) return null;
    i = t
  }
  let a = r;
  return w(t) ? a.length ? null : {
    modifiers: a,
    key: t
  } : !(se.has(t) || me(t)) && (!_e(t) || /[a-z\p{Cc}\p{Z}]/u.test(t)) || a.includes(`Shift`) && !D(t) ? null : {
    modifiers: a,
    key: t
  }
}

function xe(e, t) {
  return t === `Mod` ? e.ctrlKey || e.metaKey : t === `Alt` ? e.altKey : e.shiftKey
}

function Se(e) {
  let t = O(e);
  return !t || w(t.key) || t.modifiers.includes(`Shift`) || !D(t.key) ? null : [...t.modifiers, `Shift`, t.key].join(`+`)
}

function Ce(e) {
  return e.replace(/(^|\+)Shift\+(?=.)/, `$1`)
}

function we(e, t = C()) {
  var n;
  let r = O(e);
  if (!r) return [e];
  let i = {
      Mod: t ? `Cmd` : `Ctrl`,
      Alt: t ? `Option` : `Alt`,
      Shift: `Shift`
    },
    a = w(r.key) ? i[r.key] : ((n = S[r.key]) == null ? void 0 : n.call(S)) ?? pe[r.key] ?? r.key;
  return [...r.modifiers.map(e => i[e]), a]
}

function Te(e, t = C()) {
  return we(e, t).join(`+`)
}
var Ee = new Set([`$$slots`, `$$events`, `$$legacy`]),
  De = e(`<svg><path d="M4 18C4 2 20 22 20 6"></path><path d="M4 18V4m16 2v14" stroke-dasharray="2 2" stroke-width="1"></path><circle cx="4" cy="4" r="2"></circle><circle cx="20" cy="20" r="2"></circle></svg>`),
  Oe = e(`<svg><path d="M7 22H4v-2h3v2Zm9-10h-2v8h2v2h-4V10h4v2ZM4 20H2v-3h2v3Zm5 0H7v-3h2v3Zm13 0h-6v-2h4v-2h2v4ZM7 17H4v-2h3v2Zm13-1h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM6 13H4V8h2v5Zm14-4h-3V7h3v2ZM8 8H6V6h2v2Zm9-1h-2V4h2v3Zm5 0h-2V4h2v3Zm-9-1H8V4h5v2Zm7-2h-3V2h3v2Z"></path></svg>`);

function ke(e, t) {
  f(t, !0);
  let i = h(t, Ee);
  var a = d(),
    o = n(a),
    s = e => {
      var t = De();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...i
      })), l(e, t)
    },
    c = e => {
      var t = Oe();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), l(e, t)
    };
  r(o, e => {
    v.standard ? e(s) : e(c, -1)
  }), l(e, a), u()
}
var Ae = new Set([`$$slots`, `$$events`, `$$legacy`]),
  je = e(`<svg><ellipse cx="12" cy="12" rx="9" ry="7"></ellipse></svg>`),
  Me = e(`<svg><path d="M6 4h12v2h4v4h2v4h-2v4h-4v2H6v-2H2v-4H0v-4h2V6h4V4Zm0 2v2H4v2H2v4h2v2h2v2h12v-2h2v-2h2v-4h-2V8h-2V6H6Z"></path></svg>`);

function Ne(e, t) {
  f(t, !0);
  let i = h(t, Ae);
  var a = d(),
    o = n(a),
    s = e => {
      var t = je();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...i
      })), l(e, t)
    },
    c = e => {
      var t = Me();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...i
      })), l(e, t)
    };
  r(o, e => {
    v.standard ? e(s) : e(c, -1)
  }), l(e, a), u()
}
var Pe = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Fe = e(`<svg><rect x="3" y="5" width="18" height="14"></rect></svg>`),
  Ie = e(`<svg><path d="M20 19H4v-2h16v2ZM4 17H2V7h2v10Zm18 0h-2V7h2v10ZM20 7H4V5h16v2Z"></path></svg>`);

function Le(e, t) {
  f(t, !0);
  let i = h(t, Pe);
  var a = d(),
    o = n(a),
    s = e => {
      var t = Fe();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...i
      })), l(e, t)
    },
    c = e => {
      var t = Ie();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), l(e, t)
    };
  r(o, e => {
    v.standard ? e(s) : e(c, -1)
  }), l(e, a), u()
}
var Re = new Set([`$$slots`, `$$events`, `$$legacy`]),
  ze = e(`<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>`),
  Be = e(`<svg><path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-9-5h-2v-2h2v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"></path></svg>`);

function Ve(e, t) {
  f(t, !0);
  let i = h(t, Re);
  var a = d(),
    o = n(a),
    s = e => {
      var t = ze();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        ...i
      })), l(e, t)
    },
    c = e => {
      var t = Be();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), l(e, t)
    };
  r(o, e => {
    v.standard ? e(s) : e(c, -1)
  }), l(e, a), u()
}
var He = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ue = e(`<svg><path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"></path></svg>`),
  We = e(`<svg><path d="M3 21h2v2H1v-4h2v2Zm6 0H5v-2h4v2Zm-4-2H3v-4h2v4Zm6 0H9v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H5v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 13H7v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-10-2H9V9h2v2Zm4 0h-2V9h2v2Zm4 0h-2V9h2v2Zm-6-2h-2V7h2v2Zm8 0h-2V7h2v2ZM11 7H9V5h2v2Zm4 0h-2V5h2v2Zm8 0h-2V5h2v2ZM13 5h-2V3h2v2Zm4 0h-2V3h2v2Zm4 0h-2V3h2v2Zm-2-2h-2V1h2v2Z"></path></svg>`);

function Ge(e, t) {
  f(t, !0);
  let i = h(t, He);
  var a = d(),
    o = n(a),
    s = e => {
      var t = Ue();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...i
      })), l(e, t)
    },
    c = e => {
      var t = We();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), l(e, t)
    };
  r(o, e => {
    v.standard ? e(s) : e(c, -1)
  }), l(e, a), u()
}
var Ke = new Set([`$$slots`, `$$events`, `$$legacy`]),
  qe = e(`<svg><path d="M13 2h2v2h2v2h-4v5h5V7h2v2h2v2h2v2h-2v2h-2v2h-2v-4h-5v5h4v2h-2v2h-2v2h-2v-2H9v-2H7v-2h4v-5H6v4H4v-2H2v-2H0v-2h2V9h2V7h2v4h5V6H7V4h2V2h2V0h2v2Z"></path></svg>`);

function Je(e, t) {
  let n = h(t, Ke);
  var r = qe();
  g(r, () => ({
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    ...n
  })), l(e, r)
}
var Ye = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Xe = e(`<svg><path d="m247-904 57-56 343 343q23 23 23 57t-23 57L457-313q-23 23-57 23t-57-23L153-503q-23-23-23-57t23-57l190-191-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z"></path></svg>`),
  Ze = e(`<svg><path d="M18 22H6v-2h12v2ZM6 20H4V10h2v10Zm14 0h-2V10h2v10ZM8 8h8V4h2v6h-2v2h-2v2h-2v-2h-2v4H8v-6H6V4h2v4Zm8-4H8V2h8v2Z"></path></svg>`);

function Qe(e, t) {
  f(t, !0);
  let i = h(t, Ye);
  var a = d(),
    o = n(a),
    s = e => {
      var t = Xe();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...i
      })), l(e, t)
    },
    c = e => {
      var t = Ze();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...i
      })), l(e, t)
    };
  r(o, e => {
    v.standard ? e(s) : e(c, -1)
  }), l(e, a), u()
}
var $e = new Set([`$$slots`, `$$events`, `$$legacy`]),
  et = e(`<svg><path d="M5 19 19 5"></path><path d="M3 17h4v4H3zM17 3h4v4h-4z" fill="currentColor" stroke="none"></path></svg>`);

function tt(e, t) {
  let n = h(t, $e);
  var r = et();
  g(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...n
  })), l(e, r)
}
var nt = new Set([`$$slots`, `$$events`, `$$legacy`]),
  rt = e(`<svg><path d="M5 6.5 15.5 4 20 12.5 13.5 20 4 15Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><circle cx="5" cy="6.5" r="1.75" fill="currentColor"></circle><circle cx="15.5" cy="4" r="1.75" fill="currentColor"></circle><circle cx="20" cy="12.5" r="1.75" fill="currentColor"></circle><circle cx="13.5" cy="20" r="1.75" fill="currentColor"></circle><circle cx="4" cy="15" r="1.75" fill="currentColor"></circle></svg>`),
  it = e(`<svg><path d="M14 2h4v4h-2v2h2v2h2v2h2v4h-4v2h-2v2h-2v2h-4v-2H8v-2H6v-2H2v-4h2V8H2V4h4v2h4V4h4V2ZM6 8v4h2v4h2v2h4v-2h2v-2h2v-2h-2v-2h-2V6h-4v2H6Z"></path></svg>`);

function at(e, t) {
  f(t, !0);
  let i = h(t, nt);
  var a = d(),
    o = n(a),
    s = e => {
      var t = rt();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        ...i
      })), l(e, t)
    },
    c = e => {
      var t = it();
      g(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...i
      })), l(e, t)
    };
  r(o, e => {
    v.standard ? e(s) : e(c, -1)
  }), l(e, a), u()
}
var ot = new Set([`$$slots`, `$$events`, `$$legacy`]),
  st = e(`<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>`);

function ct(e, t) {
  let n = h(t, ot);
  var r = st();
  g(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    ...n
  })), l(e, r)
}
var lt = `alliance-asset-editor:brush-size`;

function ut(e, t) {
  return Math.min(t, Math.max(1, Math.trunc(e)))
}
var dt = [{
    value: `brush-square`,
    icon: ct,
    label: () => y.alliance_asset_tool_square_brush()
  }, {
    value: `brush-circle`,
    icon: Ve,
    label: () => y.alliance_asset_tool_circle_brush()
  }, {
    value: `fill`,
    icon: Qe,
    label: () => y.alliance_asset_tool_fill()
  }, {
    value: `polygon`,
    icon: at,
    label: () => y.alliance_asset_tool_polygon()
  }],
  k = [...dt, {
    value: `line`,
    icon: tt,
    label: () => y.overlay_editor_line()
  }, {
    value: `rectangle`,
    icon: Le,
    label: () => y.overlay_editor_rectangle()
  }, {
    value: `ellipse`,
    icon: Ne,
    label: () => y.overlay_editor_ellipse()
  }, {
    value: `bezier`,
    icon: ke,
    label: () => y.overlay_editor_bezier()
  }, {
    value: `eraser`,
    icon: ae,
    label: () => y.eraser()
  }, {
    value: `pick`,
    icon: Ge,
    label: () => y.color_picker()
  }, {
    value: `move`,
    icon: Je,
    label: () => y.overlay_editor_move()
  }];

function ft(e) {
  var t;
  return ((t = k.find(({
    value: t
  }) => t === e)) == null ? void 0 : t.label()) ?? e
}

function pt(e) {
  return e === `brush-square` || e === `brush-circle` || e === `eraser` || e === `line` || e === `rectangle` || e === `ellipse` || e === `bezier`
}

function mt(e) {
  return e !== `brush-square`
}
var ht = {};

function gt(e, t) {
  let n = Math.max(1, Math.trunc(e)),
    r = ht[t];
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
  return ht[t] = c, c
}

function A(e, t, n, r, i, a) {
  if (n < 0 || n >= t || i < 0 || r >= e) return;
  let o = Math.max(0, r),
    s = Math.min(e - 1, i);
  for (let e = o; e <= s; e += 1) a(e, n)
}

function _t(e, t, n, r, i, a) {
  if (e <= 0 || t <= 0) return;
  let o = gt(r, i);
  for (let r = 0; r < o.size; r += 1) A(e, t, n.y + o.minOffset + r, n.x + o.spans[r * 2], n.x + o.spans[r * 2 + 1], a)
}

function vt(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < o.size; c += 1) {
    let l = a + o.minOffset + c;
    if (l < 0 || l >= t) continue;
    let u = i + o.spans[c * 2],
      d = i + o.spans[c * 2 + 1],
      f = l - r - o.minOffset;
    if (f < 0 || f >= o.size) {
      A(e, t, l, u, d, s);
      continue
    }
    let ee = n + o.spans[f * 2],
      te = n + o.spans[f * 2 + 1];
    A(e, t, l, u, Math.min(d, ee - 1), s), A(e, t, l, Math.max(u, te + 1), d, s)
  }
}

function yt(e, t, n, r, i, a, o, s = !0) {
  if (e <= 0 || t <= 0) return;
  let c = gt(i, a);
  s && _t(e, t, n, c.size, a, o);
  let l = n.x,
    u = n.y,
    d = !0;
  j(n, r, (n, r) => {
    if (d) {
      d = !1;
      return
    }
    vt(e, t, l, u, n, r, c, o), l = n, u = r
  })
}

function bt(e, t, n, r, i) {
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

function xt(e, t, n, r, i, a = null) {
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

function St(e, t) {
  let n = [];
  return j(e, t, (e, t) => n.push({
    x: e,
    y: t
  })), n
}

function j(e, t, n) {
  let {
    x: r,
    y: i
  } = e, a = Math.abs(t.x - e.x), o = e.x < t.x ? 1 : -1, s = -Math.abs(t.y - e.y), c = e.y < t.y ? 1 : -1, l = a + s;
  for (; n(r, i), r !== t.x || i !== t.y;) {
    let e = l * 2;
    e >= s && (l += s, r += o), e <= a && (l += a, i += c)
  }
}

function M(e) {
  return e.y * 4294967296 + e.x
}

function Ct(e, t, n) {
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

function wt(e, t, n) {
  if (n.length < 3 || new Set(n.map(M)).size < 3) return [];
  let r = Math.max(0, Math.min(...n.map(e => e.x))),
    i = Math.min(e - 1, Math.max(...n.map(e => e.x))),
    a = Math.max(0, Math.min(...n.map(e => e.y))),
    o = Math.min(t - 1, Math.max(...n.map(e => e.y))),
    s = new Map;
  for (let r = 0; r < n.length; r += 1) {
    let i = n[r],
      a = n[(r + 1) % n.length];
    for (let n of St(i, a)) n.x < 0 || n.y < 0 || n.x >= e || n.y >= t || s.set(M(n), n)
  }
  for (let e = a; e <= o; e += 1)
    for (let t = r; t <= i; t += 1) Ct(t + .5, e + .5, n) && s.set(M({
      x: t,
      y: e
    }), {
      x: t,
      y: e
    });
  return [...s.values()].sort((e, t) => e.y - t.y || e.x - t.x)
}
var Tt = [{
    id: `general`,
    label: () => y.settings_controls_general(),
    hint: () => y.settings_controls_general_hint()
  }, {
    id: `map`,
    label: () => y.settings_map_controls()
  }, {
    id: `painting`,
    label: () => y.paint()
  }, {
    id: `overlays`,
    label: () => y.settings_controls_overlays()
  }, {
    id: `studio`,
    label: () => y.settings_studio()
  }, {
    id: `headquarters`,
    label: () => y.headquarters()
  }, {
    id: `description`,
    label: () => y.description(),
    hint: () => y.settings_controls_description_hint()
  }, {
    id: `staff`,
    label: () => y.staff()
  }],
  N = [`world`, `studio`, `hq`],
  Et = {
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
  Dt = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => ({
    id: `studio.visibility-${e}`,
    section: `studio`,
    label: () => y.overlay_editor_toggle_numbered_layer({
      number: e
    }),
    defaults: [String(e)],
    surfaces: [`studio`],
    layerIndex: e - 1
  })),
  Ot = [...k.map(e => [e.value, e.label, Et[e.value]]), [`text`, () => y.overlay_editor_text(), `T`],
    [`gradient`, () => y.gradient(), `G`],
    [`select-box`, () => y.overlay_editor_select_box(), `S`],
    [`select-contiguous`, () => y.overlay_editor_select_contiguous(), `W`],
    [`select-color`, () => y.overlay_editor_select_color(), `K`],
    [`select-lasso`, () => y.overlay_editor_select_lasso(), `A`]
  ].map(([e, t, n]) => ({
    id: `studio.${e}`,
    section: `studio`,
    label: t,
    defaults: [n],
    surfaces: [`studio`],
    tool: e
  }));

function P(e, t, ...n) {
  return {
    id: `studio.${e}`,
    section: `studio`,
    label: t,
    defaults: n,
    surfaces: [`studio`]
  }
}

function F(e, t, n) {
  return {
    id: `description.${e}`,
    section: `description`,
    label: t,
    defaults: [n],
    surfaces: [`description`],
    needsModifier: !0
  }
}
var I = [{
    id: `undo`,
    section: `general`,
    label: () => y.undo(),
    defaults: [`Mod+Z`],
    surfaces: N
  }, {
    id: `redo`,
    section: `general`,
    label: () => y.redo(),
    defaults: [`Mod+Shift+Z`, `Mod+Y`],
    surfaces: N
  }, {
    id: `zoom-in`,
    section: `general`,
    label: () => y.zoom_in(),
    defaults: [`=`, `+`],
    surfaces: N
  }, {
    id: `zoom-out`,
    section: `general`,
    label: () => y.zoom_out(),
    defaults: [`-`, `_`],
    surfaces: N
  }, {
    id: `fit`,
    section: `general`,
    label: () => y.settings_fit_canvas(),
    defaults: [`0`],
    surfaces: [`studio`, `hq`]
  }, ...[`up`, `down`, `left`, `right`].map(e => ({
    id: `move-${e}`,
    section: `general`,
    label: {
      up: () => y.settings_controls_move_up(),
      down: () => y.settings_controls_move_down(),
      left: () => y.settings_controls_move_left(),
      right: () => y.settings_controls_move_right()
    } [e],
    defaults: [`Arrow${e[0].toUpperCase()}${e.slice(1)}`],
    surfaces: N,
    shiftSurfaces: [`studio`, `hq`]
  })), {
    id: `paint-hold`,
    section: `general`,
    label: () => y.settings_controls_paint_hold(),
    defaults: [`Space`],
    surfaces: [`world`, `studio`, `hq`, `avatar`],
    hold: !0
  }, {
    id: `map.rotate-left`,
    section: `map`,
    label: () => y.settings_controls_rotate_left(),
    defaults: [`Shift+ArrowLeft`],
    surfaces: [`world`]
  }, {
    id: `map.rotate-right`,
    section: `map`,
    label: () => y.settings_controls_rotate_right(),
    defaults: [`Shift+ArrowRight`],
    surfaces: [`world`]
  }, {
    id: `map.reset-rotation`,
    section: `map`,
    label: () => y.settings_controls_reset_rotation(),
    defaults: [`N`],
    surfaces: [`world`]
  }, {
    id: `paint.eraser`,
    section: `painting`,
    label: () => y.eraser(),
    defaults: [`E`],
    surfaces: [`world`, `hq`, `avatar`]
  }, {
    id: `paint.eyedropper`,
    section: `painting`,
    label: () => y.color_picker(),
    defaults: [`I`],
    surfaces: [`world`, `hq`]
  }, {
    id: `paint.erase-hold`,
    section: `painting`,
    label: () => y.settings_controls_erase_hold(),
    defaults: [`MouseRight`],
    surfaces: [`world`, `hq`],
    hold: !0,
    mouseOnly: !0
  }, {
    id: `paint.pick-hover`,
    section: `painting`,
    label: () => y.settings_instant_eyedropper(),
    defaults: [`MouseMiddle`],
    surfaces: [`world`, `studio`, `hq`],
    mouseOnly: !0
  }, {
    id: `overlay.next-color`,
    section: `overlays`,
    label: () => y.settings_next_color_pixel(),
    defaults: [`Z`],
    surfaces: [`world`, `hq`]
  }, {
    id: `overlay.peek`,
    section: `overlays`,
    label: () => y.overlay_build_peek(),
    defaults: [`Alt`],
    surfaces: [`world`, `hq`],
    hold: !0
  }, {
    id: `overlay.search`,
    section: `overlays`,
    label: () => y.settings_controls_search_overlays(),
    defaults: [`/`],
    surfaces: [`world`]
  }, ...Ot, P(`transform-layer`, () => y.overlay_editor_layer_transform(), `Shift+T`), P(`size-up`, () => y.overlay_editor_size_up(), `]`), P(`size-down`, () => y.overlay_editor_size_down(), `[`), P(`visibility`, () => y.overlay_editor_toggle_layer(), `V`), ...Dt, {
    ...P(`pick-hold`, () => y.settings_controls_eyedropper_hold(), `Alt`),
    hold: !0
  }, P(`save`, () => y.save(), `Mod+S`), P(`cut`, () => y.overlay_editor_cut_selection(), `Mod+X`), P(`copy`, () => y.overlay_editor_copy_selection(), `Mod+C`), P(`paste`, () => y.overlay_editor_paste_selection(), `Mod+V`), P(`duplicate-selection`, () => y.overlay_editor_duplicate_selection(), `Mod+Shift+D`), P(`clear-selection`, () => y.settings_clear_selection(), `Mod+D`), P(`delete-selection`, () => y.overlay_editor_delete_selection(), `Delete`, `Backspace`), P(`duplicate-layer`, () => y.overlay_editor_layer_duplicate(), `Mod+J`), P(`merge-layers`, () => y.overlay_editor_merge_layers(), `Mod+E`), P(`group-layers`, () => y.overlay_editor_group_layers(), `Mod+G`), P(`apply-text`, () => y.settings_controls_apply_text(), `Mod+Enter`), {
    id: `hq.reset-brush`,
    section: `headquarters`,
    label: () => y.settings_controls_reset_brush(),
    defaults: [`Alt+R`],
    surfaces: [`hq`]
  }, F(`bold`, () => y.alliance_markdown_bold(), `Mod+B`), F(`italic`, () => y.alliance_markdown_italic(), `Mod+I`), F(`heading-1`, () => y.alliance_markdown_heading({
    level: 1
  }), `Mod+Shift+1`), F(`heading-2`, () => y.alliance_markdown_heading({
    level: 2
  }), `Mod+Shift+2`), F(`heading-3`, () => y.alliance_markdown_heading({
    level: 3
  }), `Mod+Shift+3`), F(`bulleted-list`, () => y.alliance_markdown_bulleted_list(), `Mod+Shift+8`), F(`numbered-list`, () => y.alliance_markdown_numbered_list(), `Mod+Shift+7`), {
    id: `map.select-area`,
    section: `staff`,
    label: () => y.wayback_select_area(),
    defaults: [`C`],
    surfaces: [`world`],
    visible: () => b.hasAnyPermission(x.tools.selectArea)
  }, {
    id: `staff.reset-brush`,
    section: `staff`,
    label: () => y.settings_controls_reset_brush(),
    defaults: [`Alt+R`],
    surfaces: [`world`, `wayback`],
    visible: () => b.hasAnyPermission([...x.tools.selectArea, x.dashboard.alliances.details])
  }],
  L = new Map(I.map(e => [e.id, e])),
  kt = [{
    section: `general`,
    label: () => y.overlay_editor_move(),
    keys: () => y.settings_mouse_left_drag()
  }, {
    section: `general`,
    label: () => `${y.zoom_in()} / ${y.zoom_out()}`,
    keys: () => y.settings_mouse_wheel()
  }, {
    section: `general`,
    label: () => y.close(),
    keys: () => `Esc`
  }, {
    section: `painting`,
    label: () => y.settings_use_selected_tool(),
    keys: () => y.settings_mouse_left_click()
  }, {
    section: `studio`,
    label: () => y.overlay_editor_actions(),
    keys: () => `${y.settings_mouse_right_click()} / Shift+F10 / Menu`,
    chords: [`MouseRight`, `Shift+F10`, `ContextMenu`],
    surfaces: [`studio`]
  }, {
    section: `studio`,
    label: () => y.confirm(),
    keys: () => `Enter`,
    chords: [`Enter`],
    surfaces: [`studio`]
  }, {
    section: `studio`,
    label: () => y.cancel(),
    keys: () => `Esc`
  }],
  At = new Set([`Mod+W`, `Mod+Shift+W`, `Mod+T`, `Mod+Shift+T`, `Mod+N`, `Mod+Shift+N`, `Mod+Q`, `Mod+Shift+Q`, `Mod+Tab`, `Mod+Shift+Tab`, `Mod+PageUp`, `Mod+PageDown`, `Mod+Space`, `Alt+Space`, `Alt+Tab`, `Alt+F4`, ...Array.from({
    length: 9
  }, (e, t) => `Mod+${t+1}`)]),
  jt = new Set([`Mod+H`, `Mod+M`, `Mod+Alt+H`, `Mod+Alt+M`]),
  Mt = new Set(`Mod+A.Mod+B.Mod+D.Mod+E.Mod+F.Mod+G.Mod+H.Mod+I.Mod+J.Mod+K.Mod+L.Mod+O.Mod+P.Mod+R.Mod+S.Mod+U.Mod+Y.Mod+Shift+A.Mod+Shift+B.Mod+Shift+C.Mod+Shift+D.Mod+Shift+E.Mod+Shift+G.Mod+Shift+I.Mod+Shift+J.Mod+Shift+K.Mod+Shift+M.Mod+Shift+O.Mod+Shift+R.Mod+Shift+Delete.Mod+=.Mod++.Mod+-.Mod+_.Mod+0.Mod+,.Mod+[.Mod+].Mod+ArrowLeft.Mod+ArrowRight.Mod+F5.Alt+D.Alt+E.Alt+F.Alt+Home.Alt+ArrowLeft.Alt+ArrowRight.F1.F3.F5.F6.F7.F10.F11.F12`.split(`.`));

function Nt(e, t) {
  return At.has(e) || t && jt.has(e)
}
var Pt = new Set([`MouseBack`, `MouseForward`]);

function Ft(e) {
  var t;
  let n = (t = O(e)) == null ? void 0 : t.key;
  return Mt.has(e) || !!n && Pt.has(n)
}
var It = `wplace:controls:v1`,
  Lt = `overlay-studio:hotkey:`,
  Rt = `input:not([type="checkbox"], [type="radio"], [type="button"], [type="submit"], [type="reset"]), textarea, select, [contenteditable]:not([contenteditable="false"])`;

function zt(e) {
  return e instanceof Element && e.closest(Rt) !== null
}

function Bt(e) {
  return e instanceof KeyboardEvent && e.repeat
}

function Vt(e, t) {
  return e.surfaces.filter(e => t.surfaces.includes(e))
}

function R(e, t, n) {
  let r = O(t);
  if (!r || r.key === `Escape` || r.key === `Tab` || w(r.key) && !e.hold) return {
    kind: `unsupported`
  };
  let i = me(r.key);
  if (e.mouseOnly && !i) return {
    kind: `mouse-only`
  };
  if (e.needsModifier && i) return {
    kind: `keyboard-only`
  };
  if (Nt(t, n)) return {
    kind: `reserved`
  };
  if (e.hold && r.modifiers.length) return {
    kind: `single-key`
  };
  if (e.needsModifier && !r.modifiers.some(e => e === `Mod` || e === `Alt`)) return {
    kind: `needs-modifier`
  };
  let a = kt.find(n => {
    var r, i;
    return ((r = n.chords) == null ? void 0 : r.includes(t)) && ((i = n.surfaces) == null ? void 0 : i.some(t => e.surfaces.includes(t)))
  });
  return a ? {
    kind: `fixed`,
    control: a
  } : null
}

function z(e, t, n, r) {
  let i = Vt(e, n);
  if (!i.length) return !1;
  if (t === r) return !0;
  let a = e => {
    var t;
    return ((t = e.shiftSurfaces) == null ? void 0 : t.some(e => i.includes(e))) ?? !1
  };
  return a(e) && Se(t) === r || a(n) && Se(r) === t
}

function Ht(e, t = C()) {
  let n = {};
  if (!e || typeof e != `object` || Array.isArray(e)) return n;
  for (let [r, i] of Object.entries(e)) {
    let e = L.get(r);
    if (!e || !Array.isArray(i)) continue;
    let a = i.filter((n, r) => typeof n == `string` && i.indexOf(n) === r && R(e, n, t) === null);
    n[e.id] = a.slice(0, 2)
  }
  return n
}

function Ut(e) {
  let t = {};
  for (let n of I) t[n.id] = e[n.id] ?? n.defaults.filter(t => !I.some(r => {
    var i;
    return r.id !== n.id && ((i = e[r.id]) == null ? void 0 : i.some(e => z(n, t, r, e)))
  }));
  return t
}

function Wt(e, t, n) {
  let r = L.get(t);
  return I.flatMap(i => {
    var a;
    return i.id === t || ((a = i.visible) == null ? void 0 : a.call(i)) === !1 ? [] : e[i.id].filter(e => z(r, n, i, e)).map(e => ({
      action: i,
      chord: e
    }))
  })
}

function Gt(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n])
}

function Kt(e, t) {
  let n = {},
    r = new Set;
  for (let i of I) {
    if (i.section !== `studio`) continue;
    let a = i.id.slice(7),
      o = e.getItem(Lt + a);
    if (o === null) continue;
    let s = /^((?:Ctrl\+)?(?:Meta\+)?)(Shift\+)?([a-z1-9[\]])$/.exec(o);
    if (o !== `` && !s) continue;
    let c = (s == null ? void 0 : s[3].toUpperCase()) ?? ``,
      l = s ? [s[1] ? `Mod` : ``, s[2] && /^[A-Z0-9]$/.test(c) ? `Shift` : ``, c].filter(Boolean).join(`+`) : ``,
      u = l && R(i, l, t) === null && !r.has(l);
    u && r.add(l), n[i.id] = u ? [l] : []
  }
  for (let [e, t] of Object.entries(n)) Gt(t, L.get(e).defaults) && delete n[e];
  return n
}
var qt = 800,
  B = new WeakMap,
  V = new WeakMap,
  Jt = new WeakMap,
  H = new WeakMap,
  U = new WeakMap,
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Y = new WeakSet,
  Yt = class {
    constructor() {
      c(this, Y), ne(this, `apple`, C()), t(this, B, o({})), t(this, V, i(() => Ut(m(a(B, this))))), t(this, Jt, i(() => Object.values(m(a(V, this))).flat().filter(he).map(e => O(e).key))), t(this, H, i(() => {
        let e = {};
        for (let t of I) {
          let n = m(a(V, this))[t.id].flatMap(e => Wt(m(a(V, this)), t.id, e));
          n.length && (e[t.id] = n)
        }
        return e
      })), t(this, U, o(!1)), t(this, W, o(`idle`)), t(this, G, null), t(this, K, !1), t(this, q, 0), t(this, J, void 0)
    }
    get conflicts() {
      return m(a(H, this))
    }
    set conflicts(e) {
      p(a(H, this), e)
    }
    get storageFailed() {
      return m(a(U, this))
    }
    set storageFailed(e) {
      p(a(U, this), e, !0)
    }
    get sync() {
      return m(a(W, this))
    }
    set sync(e) {
      p(a(W, this), e, !0)
    }
    get overrides() {
      return m(a(B, this))
    }
    bindings(e) {
      return m(a(V, this))[e]
    }
    label(e) {
      let t = m(a(V, this))[e][0];
      return t ? Te(t, this.apple) : ``
    }
    format(e) {
      return Te(e, this.apple)
    }
    isCustom(e) {
      return e in m(a(B, this))
    }
    matches(e, t, n) {
      let r = e instanceof KeyboardEvent ? e.isComposing ? null : ve(e) : ye(e);
      if (!r) return !1;
      let i = m(a(V, this))[t];
      return i.includes(r) || !!(n != null && n.shift) && i.includes(Ce(r))
    }
    isHoldKey(e, t) {
      let n = e instanceof KeyboardEvent ? E(e) : T(e.button);
      return !!n && m(a(V, this))[t].includes(n)
    }
    isMouseButtonBound(e) {
      let t = T(e);
      return !!t && m(a(Jt, this)).includes(t)
    }
    modifierHeld(e, t) {
      return m(a(V, this))[t].some(t => w(t) && xe(e, t))
    }
    problem(e, t) {
      return R(L.get(e), t, this.apple)
    }
    conflictsFor(e, t) {
      return Wt(m(a(V, this)), e, t)
    }
    isBrowserShortcut(e, t) {
      return Ft(t) && !L.get(e).defaults.includes(t)
    }
    assign(e, t, n, r = !1) {
      let i = {
          ...m(a(B, this))
        },
        o = [...m(a(V, this))[e]],
        s = o[t],
        c = this.conflictsFor(e, n);
      for (let [e, {
          action: t,
          chord: n
        }] of c.entries()) {
        let o = (i[t.id] ?? m(a(V, this))[t.id]).filter(e => e !== n);
        r && e === 0 && s && !o.includes(s) && o.splice(m(a(V, this))[t.id].indexOf(n), 0, s), i[t.id] = o
      }
      t < o.length ? o[t] = n : o.push(n), i[e] = o.filter((e, t) => o.indexOf(e) === t).slice(0, 2), _(Y, this, X).call(this, i)
    }
    clear(e, t) {
      _(Y, this, X).call(this, {
        ...m(a(B, this)),
        [e]: m(a(V, this))[e].filter((e, n) => n !== t)
      })
    }
    reset(e) {
      let t = L.get(e),
        n = {
          ...m(a(B, this))
        };
      delete n[e];
      for (let r of I) {
        let i = n[r.id];
        r.id === e || !i || (n[r.id] = i.filter(e => !t.defaults.some(n => z(t, n, r, e))))
      }
      _(Y, this, X).call(this, n)
    }
    resetAll() {
      _(Y, this, X).call(this, {})
    }
    load() {
      let e = _(Y, this, Q).call(this);
      if (e) {
        p(a(B, this), e.bindings), s(K, this, e.dirty);
        return
      }
      try {
        let e = Kt(localStorage, this.apple);
        if (p(a(B, this), e), s(K, this, Object.keys(e).length > 0), _(Y, this, Z).call(this), this.storageFailed) return;
        for (let e of Object.keys(localStorage)) e.startsWith(`overlay-studio:hotkey:`) && localStorage.removeItem(e)
      } catch {
        p(a(B, this), {})
      }
    }
    async useAccount(e) {
      if (clearTimeout(a(J, this)), s(G, this, e), this.sync = `idle`, e === null) return;
      let t = _(Y, this, Q).call(this),
        n = a(q, this),
        r;
      try {
        r = (await ie.getControlBindings()).bindings
      } catch {
        a(G, this) === e && (this.sync = `error`);
        return
      }
      if (a(G, this) !== e) return;
      let i = t === null || t.userId === e || t.userId === null;
      a(q, this) !== n || t != null && t.dirty && t.userId === e ? s(K, this, !0) : r ? (p(a(B, this), Ht(r, this.apple)), s(K, this, !1), this.sync = `saved`) : (i || p(a(B, this), {}), s(K, this, Object.keys(m(a(B, this))).length > 0)), _(Y, this, Z).call(this), await _(Y, this, $).call(this)
    }
    retrySync() {
      _(Y, this, $).call(this)
    }
    start() {
      this.load(), window.addEventListener(`storage`, e => {
        if (e.key === `wplace:controls:v1`) {
          let e = _(Y, this, Q).call(this);
          p(a(B, this), (e == null ? void 0 : e.bindings) ?? {}), s(K, this, (e == null ? void 0 : e.dirty) ?? !1)
        }
      }), window.addEventListener(`wplace:online`, () => void _(Y, this, $).call(this)), window.addEventListener(`pagehide`, () => void _(Y, this, $).call(this, !0)), ee(() => {
        let e = i(() => {
          var e;
          return b.loading ? void 0 : ((e = b.data) == null ? void 0 : e.id) ?? null
        });
        te(() => {
          let t = m(e);
          t !== void 0 && re(() => void this.useAccount(t))
        })
      })
    }
  };

function X(e) {
  var t;
  let n = {};
  for (let [t, r] of Object.entries(e)) r && !Gt(r, L.get(t).defaults) && (n[t] = r);
  p(a(B, this), n), s(q, this, (t = a(q, this), t++, t)), s(K, this, !0), _(Y, this, Z).call(this), a(G, this) !== null && (clearTimeout(a(J, this)), s(J, this, setTimeout(() => void _(Y, this, $).call(this), qt)))
}

function Z() {
  try {
    let e = {
      userId: a(G, this),
      dirty: a(K, this),
      bindings: m(a(B, this))
    };
    localStorage.setItem(It, JSON.stringify(e)), this.storageFailed = !1
  } catch {
    this.storageFailed = !0
  }
}

function Q() {
  try {
    let e = localStorage.getItem(It);
    if (e === null) return null;
    let t = JSON.parse(e);
    return {
      userId: Number.isSafeInteger(t == null ? void 0 : t.userId) ? t.userId : null,
      dirty: (t == null ? void 0 : t.dirty) === !0,
      bindings: Ht(t == null ? void 0 : t.bindings, this.apple)
    }
  } catch {
    return null
  }
}
async function $(e = !1) {
  clearTimeout(a(J, this));
  let t = a(G, this);
  if (t === null || !a(K, this)) return;
  let n = a(q, this);
  this.sync = `saving`;
  try {
    if (await ie.saveControlBindings(m(a(B, this)), e), a(G, this) !== t || a(q, this) !== n) return;
    s(K, this, !1), _(Y, this, Z).call(this), this.sync = `saved`
  } catch {
    a(G, this) === t && (this.sync = `error`)
  }
}
var Xt = new Yt;
Xt.start();
export {
  E as A, ct as C, we as D, Ve as E, ge as M, ye as N, ve as O, T as P, mt as S, Ge as T, yt as _, L as a, ut as b, Dt as c, k as d, dt as f, _t as g, wt as h, I as i, xe as j, w as k, Ot as l, bt as m, Bt as n, Tt as o, xt as p, zt as r, kt as s, Xt as t, lt as u, j as v, Qe as w, ft as x, pt as y
};