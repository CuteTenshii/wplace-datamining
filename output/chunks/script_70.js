import {
  Et as e,
  G as t,
  Jt as n,
  O as r,
  Pt as i,
  Q as a,
  Tt as o,
  V as s,
  X as c,
  Y as l,
  Yt as u,
  Z as d,
  a as f,
  ct as p,
  nn as m,
  o as h,
  vt as g,
  wt as _,
  x as v,
  y
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  n as b
} from "./BTdIvV88.js";
import {
  r as x
} from "./BoG0A1IZ.js";
var S = new Set([`$$slots`, `$$events`, `$$legacy`, `allianceId`, `seed`, `variant`, `imageSrc`]),
  C = d(`<div><img alt="" class="size-full object-cover" style="image-rendering: pixelated" draggable="false"/></div>`),
  w = d(`<div aria-hidden="true"><div class="absolute -top-1/2 -right-4 aspect-square h-[200%] rotate-12 opacity-25 select-none"></div> <div class="absolute -bottom-1/3 left-6 aspect-square h-[110%] -rotate-6 opacity-15 select-none"></div></div>`),
  T = d(`<div></div>`);

function E(a, d) {
  u(d, !0);
  let y = f(d, `variant`, 3, `picture`);
  h(d, S);
  let E = i(() => d.seed && d.seed.length > 0 ? d.seed : `alliance-${d.allianceId}`),
    D = i(() => x(p(E), 95, 45)),
    O = i(() => b(d.allianceId));
  var k = c(),
    A = o(k),
    j = e => {
      var t = C();
      let n;
      var i = _(t);
      m(t), g(() => {
        n = r(t, 1, `overflow-hidden ${d.class??``??``}`, null, n, {
          "bg-white": y() === `banner`
        }), v(i, `src`, d.imageSrc)
      }), l(e, t)
    },
    M = t => {
      var n = w(),
        i = _(n);
      s(i, () => p(D), !0), m(i);
      var a = e(i, 2);
      s(a, () => p(D), !0), m(a), m(n), g(() => r(n, 1, `relative overflow-hidden ${p(O)??``} ${d.class??``??``}`)), l(t, n)
    },
    N = e => {
      var t = T();
      s(t, () => p(D), !0), m(t), g(() => r(t, 1, `overflow-hidden ${p(O)??``} ${d.class??``??``}`)), l(e, t)
    };
  t(A, e => {
    d.imageSrc ? e(j) : y() === `banner` ? e(M, 1) : e(N, -1)
  }), l(a, k), n()
}
var D = new Set([`$$slots`, `$$events`, `$$legacy`]),
  O = a(`<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>`);

function k(e, t) {
  let n = h(t, D);
  var r = O();
  y(r, () => ({
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 -960 960 960`,
    fill: `currentColor`,
    ...n
  })), l(e, r)
}
export {
  E as n, k as t
};