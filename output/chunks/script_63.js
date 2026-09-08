import {
  J as e,
  Z as t,
  o as n,
  v as r
} from "./DhUcoEdH.js";
import "./B8UK1oE5.js";
import {
  t as i
} from "./C3jr-qFf.js";
import {
  n as a,
  t as o
} from "./CVh2Ql_i.js";
import {
  t as s
} from "./BslbGjGv.js";
import {
  t as c
} from "./BfFyfnyU.js";
import {
  t as l
} from "./Cbdho68-.js";
import {
  t as u
} from "./eFD9sEfy.js";
var d = new Set([`$$slots`, `$$events`, `$$legacy`]),
  f = t(`<svg><path d="M4 18C4 2 20 22 20 6"></path><path d="M4 18V4m16 2v14" stroke-dasharray="2 2" stroke-width="1"></path><circle cx="4" cy="4" r="2"></circle><circle cx="20" cy="20" r="2"></circle></svg>`);

function p(t, i) {
  let a = n(i, d);
  var o = f();
  r(o, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...a
  })), e(t, o)
}
var m = new Set([`$$slots`, `$$events`, `$$legacy`]),
  h = t(`<svg><ellipse cx="12" cy="12" rx="9" ry="7"></ellipse></svg>`);

function g(t, i) {
  let a = n(i, m);
  var o = h();
  r(o, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...a
  })), e(t, o)
}
var _ = new Set([`$$slots`, `$$events`, `$$legacy`]),
  v = t(`<svg><rect x="3" y="5" width="18" height="14"></rect></svg>`);

function y(t, i) {
  let a = n(i, _);
  var o = v();
  r(o, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...a
  })), e(t, o)
}
var b = new Set([`$$slots`, `$$events`, `$$legacy`]),
  x = t(`<svg><path d="M5 19 19 5"></path><path d="M3 17h4v4H3zM17 3h4v4h-4z" fill="currentColor" stroke="none"></path></svg>`);

function S(t, i) {
  let a = n(i, b);
  var o = x();
  r(o, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    "stroke-width": `2`,
    ...a
  })), e(t, o)
}
var C = new Set([`$$slots`, `$$events`, `$$legacy`]),
  w = t(`<svg><path d="M5 6.5 15.5 4 20 12.5 13.5 20 4 15Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><circle cx="5" cy="6.5" r="1.75" fill="currentColor"></circle><circle cx="15.5" cy="4" r="1.75" fill="currentColor"></circle><circle cx="20" cy="12.5" r="1.75" fill="currentColor"></circle><circle cx="13.5" cy="20" r="1.75" fill="currentColor"></circle><circle cx="4" cy="15" r="1.75" fill="currentColor"></circle></svg>`);

function T(t, i) {
  let a = n(i, C);
  var o = w();
  r(o, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    ...a
  })), e(t, o)
}
var E = `alliance-asset-editor:brush-size`;

function D(e, t) {
  return Math.min(t, Math.max(1, Math.trunc(e)))
}
var O = [{
    value: `brush-square`,
    icon: o,
    label: () => i.alliance_asset_tool_square_brush()
  }, {
    value: `brush-circle`,
    icon: a,
    label: () => i.alliance_asset_tool_circle_brush()
  }, {
    value: `fill`,
    icon: l,
    label: () => i.alliance_asset_tool_fill()
  }, {
    value: `polygon`,
    icon: T,
    label: () => i.alliance_asset_tool_polygon()
  }],
  k = [...O, {
    value: `line`,
    icon: S,
    label: () => i.overlay_editor_line()
  }, {
    value: `rectangle`,
    icon: y,
    label: () => i.overlay_editor_rectangle()
  }, {
    value: `ellipse`,
    icon: g,
    label: () => i.overlay_editor_ellipse()
  }, {
    value: `bezier`,
    icon: p,
    label: () => i.overlay_editor_bezier()
  }, {
    value: `eraser`,
    icon: u,
    label: () => i.eraser()
  }, {
    value: `pick`,
    icon: s,
    label: () => i.color_picker()
  }, {
    value: `move`,
    icon: c,
    label: () => i.overlay_editor_move()
  }];

function A(e) {
  var t;
  return ((t = k.find(({
    value: t
  }) => t === e)) == null ? void 0 : t.label()) ?? e
}

function j(e) {
  return e === `brush-square` || e === `brush-circle` || e === `eraser` || e === `line` || e === `rectangle` || e === `ellipse` || e === `bezier`
}

function M(e) {
  return e !== `brush-square`
}
var N = {};

function P(e, t) {
  let n = Math.max(1, Math.trunc(e)),
    r = N[t];
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
  return N[t] = c, c
}

function F(e, t, n, r, i, a) {
  if (n < 0 || n >= t || i < 0 || r >= e) return;
  let o = Math.max(0, r),
    s = Math.min(e - 1, i);
  for (let e = o; e <= s; e += 1) a(e, n)
}

function I(e, t, n, r, i, a) {
  if (e <= 0 || t <= 0) return;
  let o = P(r, i);
  for (let r = 0; r < o.size; r += 1) F(e, t, n.y + o.minOffset + r, n.x + o.spans[r * 2], n.x + o.spans[r * 2 + 1], a)
}

function L(e, t, n, r, i, a, o, s) {
  for (let c = 0; c < o.size; c += 1) {
    let l = a + o.minOffset + c;
    if (l < 0 || l >= t) continue;
    let u = i + o.spans[c * 2],
      d = i + o.spans[c * 2 + 1],
      f = l - r - o.minOffset;
    if (f < 0 || f >= o.size) {
      F(e, t, l, u, d, s);
      continue
    }
    let p = n + o.spans[f * 2],
      m = n + o.spans[f * 2 + 1];
    F(e, t, l, u, Math.min(d, p - 1), s), F(e, t, l, Math.max(u, m + 1), d, s)
  }
}

function R(e, t, n, r, i, a, o, s = !0) {
  if (e <= 0 || t <= 0) return;
  let c = P(i, a);
  s && I(e, t, n, c.size, a, o);
  let l = n.x,
    u = n.y,
    d = !0;
  H(n, r, (n, r) => {
    if (d) {
      d = !1;
      return
    }
    L(e, t, l, u, n, r, c, o), l = n, u = r
  })
}

function z(e, t, n, r, i) {
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

function B(e, t, n, r, i, a = null) {
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

function V(e, t) {
  let n = [];
  return H(e, t, (e, t) => n.push({
    x: e,
    y: t
  })), n
}

function H(e, t, n) {
  let {
    x: r,
    y: i
  } = e, a = Math.abs(t.x - e.x), o = e.x < t.x ? 1 : -1, s = -Math.abs(t.y - e.y), c = e.y < t.y ? 1 : -1, l = a + s;
  for (; n(r, i), r !== t.x || i !== t.y;) {
    let e = l * 2;
    e >= s && (l += s, r += o), e <= a && (l += a, i += c)
  }
}

function U(e) {
  return e.y * 4294967296 + e.x
}

function W(e, t, n) {
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

function G(e, t, n) {
  if (n.length < 3 || new Set(n.map(U)).size < 3) return [];
  let r = Math.max(0, Math.min(...n.map(e => e.x))),
    i = Math.min(e - 1, Math.max(...n.map(e => e.x))),
    a = Math.max(0, Math.min(...n.map(e => e.y))),
    o = Math.min(t - 1, Math.max(...n.map(e => e.y))),
    s = new Map;
  for (let r = 0; r < n.length; r += 1) {
    let i = n[r],
      a = n[(r + 1) % n.length];
    for (let n of V(i, a)) n.x < 0 || n.y < 0 || n.x >= e || n.y >= t || s.set(U(n), n)
  }
  for (let e = a; e <= o; e += 1)
    for (let t = r; t <= i; t += 1) W(t + .5, e + .5, n) && s.set(U({
      x: t,
      y: e
    }), {
      x: t,
      y: e
    });
  return [...s.values()].sort((e, t) => e.y - t.y || e.x - t.x)
}
export {
  z as a, R as c, D as d, A as f, B as i, H as l, k as n, G as o, M as p, O as r, I as s, E as t, j as u
};