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
  t as y
} from "./BPzKxQPM.js";
import {
  t as b
} from "./BLUc1uLr.js";
import {
  C as re,
  n as x
} from "./BiTo61FT.js";
import {
  t as S
} from "./CbKR0not.js";
import {
  t as ie
} from "./D6nBO7wz.js";
var ae = [`Mod`, `Alt`, `Shift`],
  oe = new Set([`Space`, `Enter`, `Tab`, `Escape`, `Backspace`, `Delete`, `Insert`, `Home`, `End`, `PageUp`, `PageDown`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ContextMenu`, ...Array.from({
    length: 24
  }, (e, t) => `F${t+1}`)]),
  se = [null, `MouseMiddle`, `MouseRight`, `MouseBack`, `MouseForward`],
  ce = [1, 4, 2, 8, 16],
  C = {
    MouseMiddle: () => b.settings_mouse_middle_button(),
    MouseRight: () => b.settings_mouse_right_click(),
    MouseBack: () => b.settings_mouse_back_button(),
    MouseForward: () => b.settings_mouse_forward_button()
  },
  le = {
    Control: `Mod`,
    Meta: `Mod`,
    Alt: `Alt`,
    Option: `Alt`,
    Shift: `Shift`
  },
  ue = {
    ControlLeft: `Mod`,
    ControlRight: `Mod`,
    MetaLeft: `Mod`,
    MetaRight: `Mod`,
    AltLeft: `Alt`,
    AltRight: `Alt`,
    ShiftLeft: `Shift`,
    ShiftRight: `Shift`
  },
  de = {
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
  fe = {
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
  return ae.includes(e)
}

function E(e) {
  return e in C
}

function pe(e) {
  let t = k(e);
  return !!t && E(t.key)
}

function D(e) {
  return se[e] ?? null
}

function me(e, t) {
  return (e.buttons & (ce[t] ?? 0)) !== 0
}

function he(e) {
  return [...e].length === 1
}

function O({
  key: e,
  code: t
}) {
  return e === `AltGraph` ? null : e === ` ` || t === `Space` ? `Space` : (le[e] ?? ue[t]) || (e === `Dead` || he(e) ? /^[a-z]$/i.test(e) ? e.toUpperCase() : /^Key[A-Z]$/.test(t) ? t.slice(3) : /^Digit\d$/.test(t) ? t.slice(5) : e === `Dead` ? de[t] ?? null : /[\p{Cc}\p{Z}]/u.test(e) ? null : e : oe.has(e) ? e : null)
}

function ge(e) {
  return e.length > 1 || /^[A-Z0-9]$/.test(e)
}

function _e(e) {
  let t = O(e);
  return t ? T(t) ? t : ye(e, t) : null
}

function ve(e) {
  let t = D(e.button);
  return t && ye(e, t)
}

function ye(e, t) {
  var n;
  let r = ((n = e.getModifierState) == null ? void 0 : n.call(e, `AltGraph`)) ?? !1,
    i = [];
  return !r && (e.ctrlKey || e.metaKey) && i.push(`Mod`), !r && e.altKey && i.push(`Alt`), e.shiftKey && ge(t) && i.push(`Shift`), [...i, t].join(`+`)
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
    let t = ae.indexOf(e);
    if (t <= i) return null;
    i = t
  }
  let a = r;
  return T(t) ? a.length ? null : {
    modifiers: a,
    key: t
  } : !(oe.has(t) || E(t)) && (!he(t) || /[a-z\p{Cc}\p{Z}]/u.test(t)) || a.includes(`Shift`) && !ge(t) ? null : {
    modifiers: a,
    key: t
  }
}

function be(e, t) {
  return t === `Mod` ? e.ctrlKey || e.metaKey : t === `Alt` ? e.altKey : e.shiftKey
}

function xe(e) {
  let t = k(e);
  return !t || T(t.key) || t.modifiers.includes(`Shift`) || !ge(t.key) ? null : [...t.modifiers, `Shift`, t.key].join(`+`)
}

function Se(e) {
  return e.replace(/(^|\+)Shift\+(?=.)/, `$1`)
}

function Ce(e, t = w()) {
  var n;
  let r = k(e);
  if (!r) return [e];
  let i = {
      Mod: t ? `Cmd` : `Ctrl`,
      Alt: t ? `Option` : `Alt`,
      Shift: `Shift`
    },
    a = T(r.key) ? i[r.key] : ((n = C[r.key]) == null ? void 0 : n.call(C)) ?? fe[r.key] ?? r.key;
  return [...r.modifiers.map(e => i[e]), a]
}

function we(e, t = w()) {
  return Ce(e, t).join(`+`)
}
var Te = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ee = g(`<svg><path d="M4 18C4 2 20 22 20 6"></path><path d="M4 18V4m16 2v14" stroke-dasharray="2 2" stroke-width="1"></path><circle cx="4" cy="4" r="2"></circle><circle cx="20" cy="20" r="2"></circle></svg>`),
  De = g(`<svg><path d="M7 22H4v-2h3v2Zm9-10h-2v8h2v2h-4V10h4v2ZM4 20H2v-3h2v3Zm5 0H7v-3h2v3Zm13 0h-6v-2h4v-2h2v4ZM7 17H4v-2h3v2Zm13-1h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM6 13H4V8h2v5Zm14-4h-3V7h3v2ZM8 8H6V6h2v2Zm9-1h-2V4h2v3Zm5 0h-2V4h2v3Zm-9-1H8V4h5v2Zm7-2h-3V2h3v2Z"></path></svg>`);

function Oe(e, n) {
  _(n, !0);
  let r = m(n, Te);
  var i = v(),
    a = p(i),
    o = e => {
      var n = Ee();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...r
      })), f(e, n)
    },
    s = e => {
      var n = De();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...r
      })), f(e, n)
    };
  l(a, e => {
    y.standard ? e(o) : e(s, -1)
  }), f(e, i), d()
}
var ke = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ae = g(`<svg><ellipse cx="12" cy="12" rx="9" ry="7"></ellipse></svg>`),
  je = g(`<svg><path d="M6 4h12v2h4v4h2v4h-2v4h-4v2H6v-2H2v-4H0v-4h2V6h4V4Zm0 2v2H4v2H2v4h2v2h2v2h12v-2h2v-2h2v-4h-2V8h-2V6H6Z"></path></svg>`);

function Me(e, n) {
  _(n, !0);
  let r = m(n, ke);
  var i = v(),
    a = p(i),
    o = e => {
      var n = Ae();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...r
      })), f(e, n)
    },
    s = e => {
      var n = je();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...r
      })), f(e, n)
    };
  l(a, e => {
    y.standard ? e(o) : e(s, -1)
  }), f(e, i), d()
}
var Ne = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Pe = g(`<svg><rect x="3" y="5" width="18" height="14"></rect></svg>`),
  Fe = g(`<svg><path d="M20 19H4v-2h16v2ZM4 17H2V7h2v10Zm18 0h-2V7h2v10ZM20 7H4V5h16v2Z"></path></svg>`);

function Ie(e, n) {
  _(n, !0);
  let r = m(n, Ne);
  var i = v(),
    a = p(i),
    o = e => {
      var n = Pe();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        "stroke-width": `2`,
        ...r
      })), f(e, n)
    },
    s = e => {
      var n = Fe();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...r
      })), f(e, n)
    };
  l(a, e => {
    y.standard ? e(o) : e(s, -1)
  }), f(e, i), d()
}
var Le = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Re = g(`<svg><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>`),
  ze = g(`<svg><path d="M18 22H6v-2h12v2ZM6 20H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 18H2V6h2v12Zm18 0h-2V6h2v12Zm-9-5h-2v-2h2v2ZM6 6H4V4h2v2Zm14 0h-2V4h2v2Zm-2-2H6V2h12v2Z"></path></svg>`);

function Be(e, n) {
  _(n, !0);
  let r = m(n, Le);
  var i = v(),
    a = p(i),
    o = e => {
      var n = Re();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        ...r
      })), f(e, n)
    },
    s = e => {
      var n = ze();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...r
      })), f(e, n)
    };
  l(a, e => {
    y.standard ? e(o) : e(s, -1)
  }), f(e, i), d()
}
var Ve = new Set([`$$slots`, `$$events`, `$$legacy`]),
  He = g(`<svg><path d="M120-120v-190l358-358-58-56 58-56 76 76 124-124q5-5 12.5-8t15.5-3q8 0 15 3t13 8l94 94q5 6 8 13t3 15q0 8-3 15.5t-8 12.5L705-555l76 78-57 57-56-58-358 358H120Zm80-80h78l332-334-76-76-334 332v78Zm447-410 96-96-37-37-96 96 37 37Zm0 0-37-37 37 37Z"></path></svg>`),
  Ue = g(`<svg><path d="M3 21h2v2H1v-4h2v2Zm6 0H5v-2h4v2Zm-4-2H3v-4h2v4Zm6 0H9v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H5v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 13H7v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm-10-2H9V9h2v2Zm4 0h-2V9h2v2Zm4 0h-2V9h2v2Zm-6-2h-2V7h2v2Zm8 0h-2V7h2v2ZM11 7H9V5h2v2Zm4 0h-2V5h2v2Zm8 0h-2V5h2v2ZM13 5h-2V3h2v2Zm4 0h-2V3h2v2Zm4 0h-2V3h2v2Zm-2-2h-2V1h2v2Z"></path></svg>`);

function We(e, n) {
  _(n, !0);
  let r = m(n, Ve);
  var i = v(),
    a = p(i),
    o = e => {
      var n = He();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...r
      })), f(e, n)
    },
    s = e => {
      var n = Ue();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...r
      })), f(e, n)
    };
  l(a, e => {
    y.standard ? e(o) : e(s, -1)
  }), f(e, i), d()
}
var Ge = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ke = g(`<svg><path d="M13 2h2v2h2v2h-4v5h5V7h2v2h2v2h2v2h-2v2h-2v2h-2v-4h-5v5h4v2h-2v2h-2v2h-2v-2H9v-2H7v-2h4v-5H6v4H4v-2H2v-2H0v-2h2V9h2V7h2v4h5V6H7V4h2V2h2V0h2v2Z"></path></svg>`);

function qe(e, n) {
  let r = m(n, Ge);
  var i = Ke();
  t(i, () => ({
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    ...r
  })), f(e, i)
}
var Je = new Set([`$$slots`, `$$events`, `$$legacy`]),
  Ye = g(`<svg><path d="m247-904 57-56 343 343q23 23 23 57t-23 57L457-313q-23 23-57 23t-57-23L153-503q-23-23-23-57t23-57l190-191-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z"></path></svg>`),
  Xe = g(`<svg><path d="M18 22H6v-2h12v2ZM6 20H4V10h2v10Zm14 0h-2V10h2v10ZM8 8h8V4h2v6h-2v2h-2v2h-2v-2h-2v4H8v-6H6V4h2v4Zm8-4H8V2h8v2Z"></path></svg>`);

function Ze(e, n) {
  _(n, !0);
  let r = m(n, Je);
  var i = v(),
    a = p(i),
    o = e => {
      var n = Ye();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...r
      })), f(e, n)
    },
    s = e => {
      var n = Xe();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...r
      })), f(e, n)
    };
  l(a, e => {
    y.standard ? e(o) : e(s, -1)
  }), f(e, i), d()
}
var Qe = new Set([`$$slots`, `$$events`, `$$legacy`]),
  $e = g(`<svg><path d="M5 19 19 5"></path><path d="M3 17h4v4H3zM17 3h4v4h-4z" fill="currentColor" stroke="none"></path></svg>`);

function et(e, n) {
  let r = m(n, Qe);
  var i = $e();
  t(i, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...r
  })), f(e, i)
}
var tt = new Set([`$$slots`, `$$events`, `$$legacy`]),
  nt = g(`<svg><path d="M5 6.5 15.5 4 20 12.5 13.5 20 4 15Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><circle cx="5" cy="6.5" r="1.75" fill="currentColor"></circle><circle cx="15.5" cy="4" r="1.75" fill="currentColor"></circle><circle cx="20" cy="12.5" r="1.75" fill="currentColor"></circle><circle cx="13.5" cy="20" r="1.75" fill="currentColor"></circle><circle cx="4" cy="15" r="1.75" fill="currentColor"></circle></svg>`),
  rt = g(`<svg><path d="M14 2h4v4h-2v2h2v2h2v2h2v4h-4v2h-2v2h-2v2h-4v-2H8v-2H6v-2H2v-4h2V8H2V4h4v2h4V4h4V2ZM6 8v4h2v4h2v2h4v-2h2v-2h2v-2h-2v-2h-2V6h-4v2H6Z"></path></svg>`);

function it(e, n) {
  _(n, !0);
  let r = m(n, tt);
  var i = v(),
    a = p(i),
    o = e => {
      var n = nt();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        ...r
      })), f(e, n)
    },
    s = e => {
      var n = rt();
      t(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        "fill-rule": `evenodd`,
        ...r
      })), f(e, n)
    };
  l(a, e => {
    y.standard ? e(o) : e(s, -1)
  }), f(e, i), d()
}
var at = new Set([`$$slots`, `$$events`, `$$legacy`]),
  ot = g(`<svg><rect x="6" y="6" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" rx="2"></rect><rect x="10" y="10" width="4" height="4" fill="currentColor" rx="1"></rect></svg>`);

function st(e, n) {
  let r = m(n, at);
  var i = ot();
  t(i, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    ...r
  })), f(e, i)
}
var ct = `alliance-asset-editor:brush-size`;

function lt(e, t) {
  return Math.min(t, Math.max(1, Math.trunc(e)))
}
var ut = [{
    value: `brush-square`,
    icon: st,
    label: () => b.alliance_asset_tool_square_brush()
  }, {
    value: `brush-circle`,
    icon: Be,
    label: () => b.alliance_asset_tool_circle_brush()
  }, {
    value: `fill`,
    icon: Ze,
    label: () => b.alliance_asset_tool_fill()
  }, {
    value: `polygon`,
    icon: it,
    label: () => b.alliance_asset_tool_polygon()
  }],
  A = [...ut, {
    value: `line`,
    icon: et,
    label: () => b.overlay_editor_line()
  }, {
    value: `rectangle`,
    icon: Ie,
    label: () => b.overlay_editor_rectangle()
  }, {
    value: `ellipse`,
    icon: Me,
    label: () => b.overlay_editor_ellipse()
  }, {
    value: `bezier`,
    icon: Oe,
    label: () => b.overlay_editor_bezier()
  }, {
    value: `eraser`,
    icon: ie,
    label: () => b.eraser()
  }, {
    value: `pick`,
    icon: We,
    label: () => b.color_picker()
  }, {
    value: `move`,
    icon: qe,
    label: () => b.overlay_editor_move()
  }];

function dt(e) {
  var t;
  return ((t = A.find(({
    value: t
  }) => t === e)) == null ? void 0 : t.label()) ?? e
}

function ft(e) {
  return e === `brush-square` || e === `brush-circle` || e === `eraser` || e === `line` || e === `rectangle` || e === `ellipse` || e === `bezier`
}

function pt(e) {
  return e !== `brush-square`
}
var mt = {};

function ht(e, t) {
  let n = Math.max(1, Math.trunc(e)),
    r = mt[t];
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
  return mt[t] = c, c
}

function j(e, t, n, r, i, a) {
  if (n < 0 || n >= t || i < 0 || r >= e) return;
  let o = Math.max(0, r),
    s = Math.min(e - 1, i);
  for (let e = o; e <= s; e += 1) a(e, n)
}

function gt(e, t, n, r, i, a) {
  if (e <= 0 || t <= 0) return;
  let o = ht(r, i);
  for (let r = 0; r < o.size; r += 1) j(e, t, n.y + o.minOffset + r, n.x + o.spans[r * 2], n.x + o.spans[r * 2 + 1], a)
}

function _t(e, t, n, r, i, a, o, s) {
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

function vt(e, t, n, r, i, a, o, s = !0) {
  if (e <= 0 || t <= 0) return;
  let c = ht(i, a);
  s && gt(e, t, n, c.size, a, o);
  let l = n.x,
    u = n.y,
    d = !0;
  M(n, r, (n, r) => {
    if (d) {
      d = !1;
      return
    }
    _t(e, t, l, u, n, r, c, o), l = n, u = r
  })
}

function yt(e, t, n, r, i) {
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

function bt(e, t, n, r, i, a = null) {
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

function xt(e, t) {
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

function St(e, t, n) {
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

function Ct(e, t, n) {
  if (n.length < 3 || new Set(n.map(N)).size < 3) return [];
  let r = Math.max(0, Math.min(...n.map(e => e.x))),
    i = Math.min(e - 1, Math.max(...n.map(e => e.x))),
    a = Math.max(0, Math.min(...n.map(e => e.y))),
    o = Math.min(t - 1, Math.max(...n.map(e => e.y))),
    s = new Map;
  for (let r = 0; r < n.length; r += 1) {
    let i = n[r],
      a = n[(r + 1) % n.length];
    for (let n of xt(i, a)) n.x < 0 || n.y < 0 || n.x >= e || n.y >= t || s.set(N(n), n)
  }
  for (let e = a; e <= o; e += 1)
    for (let t = r; t <= i; t += 1) St(t + .5, e + .5, n) && s.set(N({
      x: t,
      y: e
    }), {
      x: t,
      y: e
    });
  return [...s.values()].sort((e, t) => e.y - t.y || e.x - t.x)
}
var wt = [{
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
  Tt = {
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
  Et = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => ({
    id: `studio.visibility-${e}`,
    section: `studio`,
    label: () => b.overlay_editor_toggle_numbered_layer({
      number: e
    }),
    defaults: [String(e)],
    surfaces: [`studio`],
    layerIndex: e - 1
  })),
  Dt = [...A.map(e => [e.value, e.label, Tt[e.value]]), [`text`, () => b.overlay_editor_text(), `T`],
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
  }, ...Dt, F(`transform-layer`, () => b.overlay_editor_layer_transform(), `Shift+T`), F(`size-up`, () => b.overlay_editor_size_up(), `]`), F(`size-down`, () => b.overlay_editor_size_down(), `[`), F(`visibility`, () => b.overlay_editor_toggle_layer(), `V`), ...Et, {
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
    id: `staff.reset-brush`,
    section: `staff`,
    label: () => b.settings_controls_reset_brush(),
    defaults: [`Alt+R`],
    surfaces: [`world`, `wayback`],
    visible: () => x.hasAnyPermission([...S.tools.selectArea, S.dashboard.alliances.details])
  }],
  R = new Map(L.map(e => [e.id, e])),
  Ot = [{
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
  kt = new Set([`Mod+W`, `Mod+Shift+W`, `Mod+T`, `Mod+Shift+T`, `Mod+N`, `Mod+Shift+N`, `Mod+Q`, `Mod+Shift+Q`, `Mod+Tab`, `Mod+Shift+Tab`, `Mod+PageUp`, `Mod+PageDown`, `Mod+Space`, `Alt+Space`, `Alt+Tab`, `Alt+F4`, ...Array.from({
    length: 9
  }, (e, t) => `Mod+${t+1}`)]),
  At = new Set([`Mod+H`, `Mod+M`, `Mod+Alt+H`, `Mod+Alt+M`]),
  jt = new Set(`Mod+A.Mod+B.Mod+D.Mod+E.Mod+F.Mod+G.Mod+H.Mod+I.Mod+J.Mod+K.Mod+L.Mod+O.Mod+P.Mod+R.Mod+S.Mod+U.Mod+Y.Mod+Shift+A.Mod+Shift+B.Mod+Shift+C.Mod+Shift+D.Mod+Shift+E.Mod+Shift+G.Mod+Shift+I.Mod+Shift+J.Mod+Shift+K.Mod+Shift+M.Mod+Shift+O.Mod+Shift+R.Mod+Shift+Delete.Mod+=.Mod++.Mod+-.Mod+_.Mod+0.Mod+,.Mod+[.Mod+].Mod+ArrowLeft.Mod+ArrowRight.Mod+F5.Alt+D.Alt+E.Alt+F.Alt+Home.Alt+ArrowLeft.Alt+ArrowRight.F1.F3.F5.F6.F7.F10.F11.F12`.split(`.`));

function Mt(e, t) {
  return kt.has(e) || t && At.has(e)
}
var Nt = new Set([`MouseBack`, `MouseForward`]);

function Pt(e) {
  var t;
  let n = (t = k(e)) == null ? void 0 : t.key;
  return jt.has(e) || !!n && Nt.has(n)
}
var Ft = `wplace:controls:v1`,
  It = `overlay-studio:hotkey:`,
  Lt = `input:not([type="checkbox"], [type="radio"], [type="button"], [type="submit"], [type="reset"]), textarea, select, [contenteditable]:not([contenteditable="false"])`;

function Rt(e) {
  return e instanceof Element && e.closest(Lt) !== null
}

function zt(e) {
  return e instanceof KeyboardEvent && e.repeat
}

function Bt(e, t) {
  return e.surfaces.filter(e => t.surfaces.includes(e))
}

function z(e, t, n) {
  let r = k(t);
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
  if (Mt(t, n)) return {
    kind: `reserved`
  };
  if (e.hold && r.modifiers.length) return {
    kind: `single-key`
  };
  if (e.needsModifier && !r.modifiers.some(e => e === `Mod` || e === `Alt`)) return {
    kind: `needs-modifier`
  };
  let a = Ot.find(n => {
    var r, i;
    return ((r = n.chords) == null ? void 0 : r.includes(t)) && ((i = n.surfaces) == null ? void 0 : i.some(t => e.surfaces.includes(t)))
  });
  return a ? {
    kind: `fixed`,
    control: a
  } : null
}

function B(e, t, n, r) {
  let i = Bt(e, n);
  if (!i.length) return !1;
  if (t === r) return !0;
  let a = e => {
    var t;
    return ((t = e.shiftSurfaces) == null ? void 0 : t.some(e => i.includes(e))) ?? !1
  };
  return a(e) && xe(t) === r || a(n) && xe(r) === t
}

function Vt(e, t = w()) {
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

function Ht(e) {
  let t = {};
  for (let n of L) t[n.id] = e[n.id] ?? n.defaults.filter(t => !L.some(r => {
    var i;
    return r.id !== n.id && ((i = e[r.id]) == null ? void 0 : i.some(e => B(n, t, r, e)))
  }));
  return t
}

function Ut(e, t, n) {
  let r = R.get(t);
  return L.flatMap(i => {
    var a;
    return i.id === t || ((a = i.visible) == null ? void 0 : a.call(i)) === !1 ? [] : e[i.id].filter(e => B(r, n, i, e)).map(e => ({
      action: i,
      chord: e
    }))
  })
}

function Wt(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n])
}

function Gt(e, t) {
  let n = {},
    r = new Set;
  for (let i of L) {
    if (i.section !== `studio`) continue;
    let a = i.id.slice(7),
      o = e.getItem(It + a);
    if (o === null) continue;
    let s = /^((?:Ctrl\+)?(?:Meta\+)?)(Shift\+)?([a-z1-9[\]])$/.exec(o);
    if (o !== `` && !s) continue;
    let c = (s == null ? void 0 : s[3].toUpperCase()) ?? ``,
      l = s ? [s[1] ? `Mod` : ``, s[2] && /^[A-Z0-9]$/.test(c) ? `Shift` : ``, c].filter(Boolean).join(`+`) : ``,
      u = l && z(i, l, t) === null && !r.has(l);
    u && r.add(l), n[i.id] = u ? [l] : []
  }
  for (let [e, t] of Object.entries(n)) Wt(t, R.get(e).defaults) && delete n[e];
  return n
}
var Kt = 800,
  V = new WeakMap,
  H = new WeakMap,
  qt = new WeakMap,
  U = new WeakMap,
  W = new WeakMap,
  G = new WeakMap,
  K = new WeakMap,
  q = new WeakMap,
  J = new WeakMap,
  Y = new WeakMap,
  X = new WeakSet,
  Jt = class {
    constructor() {
      r(this, X), ee(this, `apple`, w()), c(this, V, a({})), c(this, H, e(() => Ht(h(s(V, this))))), c(this, qt, e(() => Object.values(h(s(H, this))).flat().filter(pe).map(e => k(e).key))), c(this, U, e(() => {
        let e = {};
        for (let t of L) {
          let n = h(s(H, this))[t.id].flatMap(e => Ut(h(s(H, this)), t.id, e));
          n.length && (e[t.id] = n)
        }
        return e
      })), c(this, W, a(!1)), c(this, G, a(`idle`)), c(this, K, null), c(this, q, !1), c(this, J, 0), c(this, Y, void 0)
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
      return h(s(G, this))
    }
    set sync(e) {
      n(s(G, this), e, !0)
    }
    get overrides() {
      return h(s(V, this))
    }
    bindings(e) {
      return h(s(H, this))[e]
    }
    label(e) {
      let t = h(s(H, this))[e][0];
      return t ? we(t, this.apple) : ``
    }
    format(e) {
      return we(e, this.apple)
    }
    isCustom(e) {
      return e in h(s(V, this))
    }
    matches(e, t, n) {
      let r = e instanceof KeyboardEvent ? e.isComposing ? null : _e(e) : ve(e);
      if (!r) return !1;
      let i = h(s(H, this))[t];
      return i.includes(r) || !!(n != null && n.shift) && i.includes(Se(r))
    }
    isHoldKey(e, t) {
      let n = e instanceof KeyboardEvent ? O(e) : D(e.button);
      return !!n && h(s(H, this))[t].includes(n)
    }
    isMouseButtonBound(e) {
      let t = D(e);
      return !!t && h(s(qt, this)).includes(t)
    }
    modifierHeld(e, t) {
      return h(s(H, this))[t].some(t => T(t) && be(e, t))
    }
    problem(e, t) {
      return z(R.get(e), t, this.apple)
    }
    conflictsFor(e, t) {
      return Ut(h(s(H, this)), e, t)
    }
    isBrowserShortcut(e, t) {
      return Pt(t) && !R.get(e).defaults.includes(t)
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
      t < a.length ? a[t] = n : a.push(n), i[e] = a.filter((e, t) => a.indexOf(e) === t).slice(0, 2), o(X, this, Z).call(this, i)
    }
    clear(e, t) {
      o(X, this, Z).call(this, {
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
      o(X, this, Z).call(this, n)
    }
    resetAll() {
      o(X, this, Z).call(this, {})
    }
    load() {
      let e = o(X, this, Yt).call(this);
      if (e) {
        n(s(V, this), e.bindings), i(q, this, e.dirty);
        return
      }
      try {
        let e = Gt(localStorage, this.apple);
        if (n(s(V, this), e), i(q, this, Object.keys(e).length > 0), o(X, this, Q).call(this), this.storageFailed) return;
        for (let e of Object.keys(localStorage)) e.startsWith(`overlay-studio:hotkey:`) && localStorage.removeItem(e)
      } catch {
        n(s(V, this), {})
      }
    }
    async useAccount(e) {
      if (clearTimeout(s(Y, this)), i(K, this, e), this.sync = `idle`, e === null) return;
      let t = o(X, this, Yt).call(this),
        r = s(J, this),
        a;
      try {
        a = (await re.getControlBindings()).bindings
      } catch {
        s(K, this) === e && (this.sync = `error`);
        return
      }
      if (s(K, this) !== e) return;
      let c = t === null || t.userId === e || t.userId === null;
      s(J, this) !== r || t != null && t.dirty && t.userId === e ? i(q, this, !0) : a ? (n(s(V, this), Vt(a, this.apple)), i(q, this, !1), this.sync = `saved`) : (c || n(s(V, this), {}), i(q, this, Object.keys(h(s(V, this))).length > 0)), o(X, this, Q).call(this), await o(X, this, $).call(this)
    }
    retrySync() {
      o(X, this, $).call(this)
    }
    start() {
      this.load(), window.addEventListener(`storage`, e => {
        if (e.key === `wplace:controls:v1`) {
          let e = o(X, this, Yt).call(this);
          n(s(V, this), (e == null ? void 0 : e.bindings) ?? {}), i(q, this, (e == null ? void 0 : e.dirty) ?? !1)
        }
      }), window.addEventListener(`wplace:online`, () => void o(X, this, $).call(this)), window.addEventListener(`pagehide`, () => void o(X, this, $).call(this, !0)), ne(() => {
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

function Z(e) {
  var t;
  let r = {};
  for (let [t, n] of Object.entries(e)) n && !Wt(n, R.get(t).defaults) && (r[t] = n);
  n(s(V, this), r), i(J, this, (t = s(J, this), t++, t)), i(q, this, !0), o(X, this, Q).call(this), s(K, this) !== null && (clearTimeout(s(Y, this)), i(Y, this, setTimeout(() => void o(X, this, $).call(this), Kt)))
}

function Q() {
  try {
    let e = {
      userId: s(K, this),
      dirty: s(q, this),
      bindings: h(s(V, this))
    };
    localStorage.setItem(Ft, JSON.stringify(e)), this.storageFailed = !1
  } catch {
    this.storageFailed = !0
  }
}

function Yt() {
  try {
    let e = localStorage.getItem(Ft);
    if (e === null) return null;
    let t = JSON.parse(e);
    return {
      userId: Number.isSafeInteger(t == null ? void 0 : t.userId) ? t.userId : null,
      dirty: (t == null ? void 0 : t.dirty) === !0,
      bindings: Vt(t == null ? void 0 : t.bindings, this.apple)
    }
  } catch {
    return null
  }
}
async function $(e = !1) {
  clearTimeout(s(Y, this));
  let t = s(K, this);
  if (t === null || !s(q, this)) return;
  let n = s(J, this);
  this.sync = `saving`;
  try {
    if (await re.saveControlBindings(h(s(V, this)), e), s(K, this) !== t || s(J, this) !== n) return;
    i(q, this, !1), o(X, this, Q).call(this), this.sync = `saved`
  } catch {
    s(K, this) === t && (this.sync = `error`)
  }
}
var Xt = new Jt;
Xt.start();
export {
  O as A, st as C, Ce as D, Be as E, me as M, ve as N, _e as O, D as P, pt as S, We as T, vt as _, R as a, lt as b, Et as c, A as d, ut as f, gt as g, Ct as h, L as i, be as j, T as k, Dt as l, yt as m, zt as n, wt as o, bt as p, Rt as r, Ot as s, Xt as t, ct as u, M as v, Ze as w, dt as x, ft as y
};