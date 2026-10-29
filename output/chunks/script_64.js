import {
  At as e,
  Bt as t,
  Ct as n,
  G as r,
  Gt as i,
  Ht as a,
  M as o,
  Mt as s,
  N as c,
  T as l,
  Ut as u,
  Vt as d,
  Wt as f,
  Y as p,
  cn as m,
  en as h,
  et as g,
  j as _,
  nt as v,
  o as y,
  pt as b,
  tn as x,
  un as S
} from "./DXDHrD2o.js";
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
    super(...e), i(this, k), f(this, O, !1)
  }
  connectedCallback() {
    u(k, this, I).call(this), a(O, this, !0)
  }
  attributeChangedCallback() {
    d(O, this) && u(k, this, I).call(this)
  }
}, S(E, `observedAttributes`, [`username`, `saturation`, `lightness`]), D = {
  _: {}
}, E));

function I() {
  var e;
  let t = E.observedAttributes.map(e => this.getAttribute(e) || void 0),
    n = t.join(`,`);
  this.innerHTML = (e = u(E, E, D)._)[n] ?? (e[n] = F(...t))
}
var L = new Set([`$$slots`, `$$events`, `$$legacy`, `userId`, `seed`]),
  R = v(`<div></div>`);

function z(e, i) {
  x(i, !0), y(i, L);
  let a = t(() => i.seed && i.seed.length > 0 ? i.seed : i.userId.toString());
  var s = R();
  r(s, () => F(b(a), 95, 45), !0), m(s), n(() => o(s, 1, `bg-base-200 minidenticon size-full ${i.class??``??``}`, `svelte-15zr69j`)), g(e, s), h()
}
var B = v(`<img class="pixelated bg-base-200 size-full" alt="User profile"/>`),
  V = v(`<img alt="Profile frame" class="pixelated center-absolute pointer-events-none absolute z-10 aspect-square w-full"/>`),
  H = v(`<div><div><!></div> <!></div>`);

function U(t, r) {
  x(r, !0);
  var i = H(),
    a = e(i);
  _(a, `width: 67.76785714285714%`);
  var u = e(a),
    d = e => {
      z(e, {
        get userId() {
          return r.userId
        },
        get seed() {
          return r.avatarSeed
        }
      })
    },
    f = e => {
      var t = B();
      n(() => l(t, `src`, r.pictureUrl)), g(e, t)
    };
  p(u, e => {
    r.pictureUrl ? e(f, -1) : e(d)
  }), m(a);
  var v = s(a, 2),
    y = e => {
      var t = V();
      _(t, `scale: 114.99999999999999%;`), n(() => l(t, `src`, r.frameUrl)), g(e, t)
    };
  p(v, e => {
    r.frameUrl && e(y)
  }), m(i), n((e, t) => {
    o(i, 1, e), o(a, 1, t)
  }, [() => c(C(`relative isolate inline-grid size-10 place-items-center`, r.class)), () => c(C(`avatar border-base-300 aspect-square overflow-hidden rounded-full border`, r.avatarClass))]), g(t, i), h()
}
export {
  z as n, F as r, U as t
};