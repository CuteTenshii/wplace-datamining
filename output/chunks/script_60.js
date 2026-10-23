import {
  B as e,
  Dt as t,
  Et as n,
  G as r,
  It as i,
  O as a,
  Q as o,
  X as s,
  Xt as c,
  Z as l,
  Zt as u,
  a as d,
  cn as f,
  in as p,
  j as m,
  k as h,
  lt as g,
  nt as _,
  rt as v,
  x as y,
  yt as b
} from "./DTpxYwnW.js";
import "./B8UK1oE5.js";
import {
  n as x
} from "./Bt1-y6b9.js";
import {
  t as S
} from "./ylEZdsSd.js";
import {
  t as C
} from "./M0DRtVjM.js";

function w(e) {
  return `/dashboard/users?id=${encodeURIComponent(String(e))}`
}

function T(e) {
  typeof window > `u` || window.open(w(e), `_blank`, `noopener,noreferrer`)
}
var E = o(`<span role="link" tabindex="0"><!></span>`),
  D = o(`<a target="_blank" rel="noopener noreferrer"><!></a>`),
  O = o(`<span><!></span>`);

function k(o, _) {
  u(_, !0);
  let k = d(_, `mode`, 3, `anchor`),
    A = d(_, `class`, 3, ``),
    j = d(_, `linkClass`, 19, A),
    M = d(_, `textClass`, 19, A),
    N = i(() => _.userId != null && _.userId > 0 && x.hasAnyPermission(S.dashboard.users)),
    P = i(() => _.userId == null ? `` : w(_.userId));

  function F(e) {
    e.stopPropagation()
  }

  function I(e) {
    _.userId == null || _.userId <= 0 || (e.preventDefault(), e.stopPropagation(), T(_.userId))
  }

  function L(e) {
    (e.key === `Enter` || e.key === ` `) && I(e)
  }
  var R = l(),
    z = t(R),
    B = i => {
      var o = l(),
        c = t(o),
        u = t => {
          var r = E(),
            i = n(r);
          e(i, () => _.children ?? f), p(r), m(r, () => C(_.title)), b(() => a(r, 1, `cursor-pointer hover:underline ${j()}`)), v(`pointerdown`, r, F), v(`click`, r, I), v(`keydown`, r, L), s(t, r)
        },
        d = t => {
          var r = D(),
            i = n(r);
          e(i, () => _.children ?? f), p(r), m(r, () => C(_.title)), b(() => {
            a(r, 1, `cursor-pointer hover:underline ${j()}`), y(r, `href`, g(P))
          }), v(`pointerdown`, r, F), v(`click`, r, F), s(t, r)
        };
      r(c, e => {
        k() === `inline` ? e(u) : e(d, -1)
      }), s(i, o)
    },
    V = t => {
      var r = O(),
        i = n(r);
      e(i, () => _.children ?? f), p(r), m(r, () => C(_.title)), b(() => a(r, 1, h(M()))), s(t, r)
    };
  r(z, e => {
    g(N) ? e(B) : e(V, -1)
  }), s(o, R), c()
}
_([`pointerdown`, `click`, `keydown`]);
export {
  w as n, k as t
};