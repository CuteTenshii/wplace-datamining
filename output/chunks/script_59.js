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
  bt as f,
  cn as p,
  in as m,
  it as h,
  k as g,
  rt as _,
  ut as v,
  x as y
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  n as b
} from "./CZtdCIYn.js";
import {
  t as x
} from "./DsRJG1f2.js";

function S(e) {
  return `/dashboard/users?id=${encodeURIComponent(String(e))}`
}

function C(e) {
  typeof window > `u` || window.open(S(e), `_blank`, `noopener,noreferrer`)
}
var w = o(`<span role="link" tabindex="0"><!></span>`),
  T = o(`<a target="_blank" rel="noopener noreferrer"><!></a>`),
  E = o(`<span><!></span>`);

function D(o, _) {
  u(_, !0);
  let D = d(_, `mode`, 3, `anchor`),
    O = d(_, `class`, 3, ``),
    k = d(_, `linkClass`, 19, O),
    A = d(_, `textClass`, 19, O),
    j = i(() => _.userId != null && _.userId > 0 && b.hasAnyPermission(x.dashboard.users)),
    M = i(() => _.userId == null ? `` : S(_.userId));

  function N(e) {
    e.stopPropagation()
  }

  function P(e) {
    _.userId == null || _.userId <= 0 || (e.preventDefault(), e.stopPropagation(), C(_.userId))
  }

  function F(e) {
    (e.key === `Enter` || e.key === ` `) && P(e)
  }
  var I = l(),
    L = t(I),
    R = i => {
      var o = l(),
        c = t(o),
        u = t => {
          var r = w(),
            i = n(r);
          e(i, () => _.children ?? p), m(r), f(() => {
            a(r, 1, `cursor-pointer hover:underline ${k()}`), y(r, `title`, _.title)
          }), h(`pointerdown`, r, N), h(`click`, r, P), h(`keydown`, r, F), s(t, r)
        },
        d = t => {
          var r = T(),
            i = n(r);
          e(i, () => _.children ?? p), m(r), f(() => {
            a(r, 1, `cursor-pointer hover:underline ${k()}`), y(r, `href`, v(M)), y(r, `title`, _.title)
          }), h(`pointerdown`, r, N), h(`click`, r, N), s(t, r)
        };
      r(c, e => {
        D() === `inline` ? e(u) : e(d, -1)
      }), s(i, o)
    },
    z = t => {
      var r = E(),
        i = n(r);
      e(i, () => _.children ?? p), m(r), f(() => {
        a(r, 1, g(A())), y(r, `title`, _.title)
      }), s(t, r)
    };
  r(L, e => {
    v(j) ? e(R) : e(z, -1)
  }), s(o, I), c()
}
_([`pointerdown`, `click`, `keydown`]);
export {
  S as n, D as t
};