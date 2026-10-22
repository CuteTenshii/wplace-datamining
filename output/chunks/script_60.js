import {
  B as e,
  Et as t,
  Ft as n,
  G as r,
  O as i,
  Q as a,
  Tt as o,
  X as s,
  Xt as c,
  Yt as l,
  Z as u,
  a as d,
  j as f,
  k as p,
  lt as m,
  nt as h,
  rn as g,
  rt as _,
  sn as v,
  x as y,
  yt as b
} from "./R3px7NU1.js";
import "./B8UK1oE5.js";
import {
  n as x
} from "./D2tGtYvL.js";
import {
  t as S
} from "./fyoYeeTe.js";
import {
  t as C
} from "./DPq9H1d9.js";

function w(e) {
  return `/dashboard/users?id=${encodeURIComponent(String(e))}`
}

function T(e) {
  typeof window > `u` || window.open(w(e), `_blank`, `noopener,noreferrer`)
}
var E = a(`<span role="link" tabindex="0"><!></span>`),
  D = a(`<a target="_blank" rel="noopener noreferrer"><!></a>`),
  O = a(`<span><!></span>`);

function k(a, h) {
  c(h, !0);
  let k = d(h, `mode`, 3, `anchor`),
    A = d(h, `class`, 3, ``),
    j = d(h, `linkClass`, 19, A),
    M = d(h, `textClass`, 19, A),
    N = n(() => h.userId != null && h.userId > 0 && x.hasAnyPermission(S.dashboard.users)),
    P = n(() => h.userId == null ? `` : w(h.userId));

  function F(e) {
    e.stopPropagation()
  }

  function I(e) {
    h.userId == null || h.userId <= 0 || (e.preventDefault(), e.stopPropagation(), T(h.userId))
  }

  function L(e) {
    (e.key === `Enter` || e.key === ` `) && I(e)
  }
  var R = u(),
    z = t(R),
    B = n => {
      var a = u(),
        c = t(a),
        l = t => {
          var n = E(),
            r = o(n);
          e(r, () => h.children ?? v), g(n), f(n, () => C(h.title)), b(() => i(n, 1, `cursor-pointer hover:underline ${j()}`)), _(`pointerdown`, n, F), _(`click`, n, I), _(`keydown`, n, L), s(t, n)
        },
        d = t => {
          var n = D(),
            r = o(n);
          e(r, () => h.children ?? v), g(n), f(n, () => C(h.title)), b(() => {
            i(n, 1, `cursor-pointer hover:underline ${j()}`), y(n, `href`, m(P))
          }), _(`pointerdown`, n, F), _(`click`, n, F), s(t, n)
        };
      r(c, e => {
        k() === `inline` ? e(l) : e(d, -1)
      }), s(n, a)
    },
    V = t => {
      var n = O(),
        r = o(n);
      e(r, () => h.children ?? v), g(n), f(n, () => C(h.title)), b(() => i(n, 1, p(M()))), s(t, n)
    };
  r(z, e => {
    m(N) ? e(B) : e(V, -1)
  }), s(a, R), l()
}
h([`pointerdown`, `click`, `keydown`]);
export {
  w as n, k as t
};