import {
  Bt as e,
  D as t,
  Et as n,
  G as r,
  It as i,
  Lt as a,
  O as o,
  Ot as s,
  Q as c,
  Rt as l,
  V as u,
  Vt as d,
  X as f,
  Xt as p,
  Zt as m,
  bt as h,
  in as g,
  k as _,
  o as v,
  on as y,
  ut as b,
  x,
  zt as S
} from "./D2z8HFb7.js";
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
  constructor(...t) {
    super(...t), d(this, k), e(this, O, !1)
  }
  connectedCallback() {
    S(k, this, I).call(this), l(O, this, !0)
  }
  attributeChangedCallback() {
    a(O, this) && S(k, this, I).call(this)
  }
}, y(E, `observedAttributes`, [`username`, `saturation`, `lightness`]), D = {
  _: {}
}, E));

function I() {
  var e;
  let t = E.observedAttributes.map(e => this.getAttribute(e) || void 0),
    n = t.join(`,`);
  this.innerHTML = (e = S(E, E, D)._)[n] ?? (e[n] = F(...t))
}
var L = new Set([`$$slots`, `$$events`, `$$legacy`, `userId`, `seed`]),
  R = c(`<div></div>`);

function z(e, t) {
  m(t, !0), v(t, L);
  let n = i(() => t.seed && t.seed.length > 0 ? t.seed : t.userId.toString());
  var r = R();
  u(r, () => F(b(n), 95, 45), !0), g(r), h(() => o(r, 1, `bg-base-200 minidenticon size-full ${t.class??``??``}`, `svelte-15zr69j`)), f(e, r), p()
}
var B = c(`<img class="pixelated bg-base-200 size-full" alt="User profile"/>`),
  V = c(`<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>`),
  H = c(`<div><div><!></div> <!></div>`);

function U(e, i) {
  m(i, !0);
  var a = H(),
    c = n(a);
  t(c, `width: 67.76785714285714%`);
  var l = n(c),
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
    d = e => {
      var t = B();
      h(() => x(t, `src`, i.pictureUrl)), f(e, t)
    };
  r(l, e => {
    i.pictureUrl ? e(d, -1) : e(u)
  }), g(c);
  var v = s(c, 2),
    y = e => {
      var n = V();
      t(n, `scale: 114.99999999999999%;`), h(() => x(n, `src`, i.frameUrl)), f(e, n)
    };
  r(v, e => {
    i.frameUrl && e(y)
  }), g(a), h((e, t) => {
    o(a, 1, e), o(c, 1, t)
  }, [() => _(C(`relative inline-grid size-10 place-items-center`, i.class)), () => _(C(`avatar border-base-300 aspect-square overflow-hidden rounded-full border`, i.avatarClass))]), f(e, a), p()
}
export {
  z as n, F as r, U as t
};