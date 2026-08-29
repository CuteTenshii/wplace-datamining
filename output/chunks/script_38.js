import {
  D as e,
  Et as t,
  Ft as n,
  G as r,
  It as i,
  Jt as a,
  Lt as o,
  O as s,
  Pt as c,
  Rt as l,
  V as u,
  Y as d,
  Yt as f,
  Z as p,
  ct as m,
  in as h,
  k as g,
  nn as _,
  o as v,
  vt as y,
  wt as b,
  x,
  zt as S
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as C
} from "./DxdGK6Xj.js";
var w, T, E, D, O, k, A = 9,
  j = 95,
  M = 45,
  N = 5;

function P(e) {
  return e.split(``).reduce((e, t) => (e ^ t.charCodeAt(0)) * -5, N) >>> 2
}

function F(e = ``, t = j, n = M, r = P) {
  let i = r(e),
    a = i % A * (360 / A);
  return [...Array(e ? 25 : 0)].reduce((e, t, n) => i & 1 << n % 15 ? e + `<rect x="${n>14?7-~~(n/5):~~(n/5)}" y="${n%5}" width="1" height="1"/>` : e, `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${a} ${t}% ${n}%)" shape-rendering="crispEdges">`) + `</svg>`
}(w = globalThis.customElements) != null && w.get(`minidenticon-svg`) || (T = globalThis.customElements) == null || T.define(`minidenticon-svg`, (O = new WeakMap, k = new WeakSet, E = class extends HTMLElement {
  constructor(...e) {
    super(...e), S(this, k), l(this, O, !1)
  }
  connectedCallback() {
    o(k, this, I).call(this), i(O, this, !0)
  }
  attributeChangedCallback() {
    n(O, this) && o(k, this, I).call(this)
  }
}, h(E, `observedAttributes`, [`username`, `saturation`, `lightness`]), D = {
  _: {}
}, E));

function I() {
  var e;
  let t = E.observedAttributes.map(e => this.getAttribute(e) || void 0),
    n = t.join(`,`);
  this.innerHTML = (e = o(E, E, D)._)[n] ?? (e[n] = F(...t))
}
var L = new Set([`$$slots`, `$$events`, `$$legacy`, `userId`, `seed`]),
  R = p(`<div></div>`);

function z(e, t) {
  f(t, !0), v(t, L);
  let n = c(() => t.seed && t.seed.length > 0 ? t.seed : t.userId.toString());
  var r = R();
  u(r, () => F(m(n), 95, 45), !0), _(r), y(() => s(r, 1, `bg-base-200 minidenticon ${t.class??``??``}`)), d(e, r), a()
}
var B = p(`<img class="pixelated bg-base-200 size-full" alt="User profile"/>`),
  V = p(`<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>`),
  H = p(`<div><div><!></div> <!></div>`);

function U(n, i) {
  f(i, !0);
  var o = H(),
    c = b(o);
  e(c, `width: 67.76785714285714%`);
  var l = b(c),
    u = e => {
      z(e, {
        get userId() {
          return i.userId
        },
        get seed() {
          return i.avatarSeed
        }
      })
    },
    p = e => {
      var t = B();
      y(() => x(t, `src`, i.pictureUrl)), d(e, t)
    };
  r(l, e => {
    i.pictureUrl ? e(p, -1) : e(u)
  }), _(c);
  var m = t(c, 2),
    h = t => {
      var n = V();
      e(n, `scale: 114.99999999999999%;`), y(() => x(n, `src`, i.frameUrl)), d(t, n)
    };
  r(m, e => {
    i.frameUrl && e(h)
  }), _(o), y((e, t) => {
    s(o, 1, e), s(c, 1, t)
  }, [() => g(C(`relative inline-grid size-10 place-items-center`, i.class)), () => g(C(`avatar border-base-300 aspect-square overflow-hidden rounded-full border`, i.avatarClass))]), d(n, o), a()
}
export {
  z as n, F as r, U as t
};