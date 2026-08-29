import {
  B as e,
  G as t,
  Jt as n,
  O as r,
  Pt as i,
  Tt as a,
  X as o,
  Y as s,
  Yt as c,
  Z as l,
  a as u,
  ct as d,
  k as f,
  nn as p,
  nt as m,
  on as h,
  tt as g,
  vt as _,
  wt as v,
  x as y
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  n as b
} from "./BHDig7Ul.js";
import {
  t as x
} from "./KnqTMKlG.js";

function S(e) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(e))}`
}

function C(e) {
  typeof window > `u` || window.open(S(e), `_blank`, `noopener,noreferrer`)
}
var w = l(`<span role="link" tabindex="0"><!></span>`),
  T = l(`<a target="_blank" rel="noopener noreferrer"><!></a>`),
  E = l(`<span><!></span>`);

function D(l, g) {
  c(g, !0);
  let D = u(g, `mode`, 3, `anchor`),
    O = u(g, `class`, 3, ``),
    k = u(g, `linkClass`, 19, O),
    A = u(g, `textClass`, 19, O),
    j = i(() => g.allianceId != null && g.allianceId > 0 && b.hasAnyPermission(x.dashboard.alliances)),
    M = i(() => g.allianceId == null ? `` : S(g.allianceId));

  function N(e) {
    e.stopPropagation()
  }

  function P(e) {
    g.allianceId == null || g.allianceId <= 0 || (e.preventDefault(), e.stopPropagation(), C(g.allianceId))
  }

  function F(e) {
    (e.key === `Enter` || e.key === ` `) && P(e)
  }
  var I = o(),
    L = a(I),
    R = n => {
      var i = o(),
        c = a(i),
        l = t => {
          var n = w(),
            i = v(n);
          e(i, () => g.children ?? h), p(n), _(() => {
            r(n, 1, `cursor-pointer hover:underline ${k()}`), y(n, `title`, g.title)
          }), m(`pointerdown`, n, N), m(`click`, n, P), m(`keydown`, n, F), s(t, n)
        },
        u = t => {
          var n = T(),
            i = v(n);
          e(i, () => g.children ?? h), p(n), _(() => {
            r(n, 1, `cursor-pointer hover:underline ${k()}`), y(n, `href`, d(M)), y(n, `title`, g.title)
          }), m(`pointerdown`, n, N), m(`click`, n, N), s(t, n)
        };
      t(c, e => {
        D() === `inline` ? e(l) : e(u, -1)
      }), s(n, i)
    },
    z = t => {
      var n = E(),
        i = v(n);
      e(i, () => g.children ?? h), p(n), _(() => {
        r(n, 1, f(A())), y(n, `title`, g.title)
      }), s(t, n)
    };
  t(L, e => {
    d(j) ? e(R) : e(z, -1)
  }), s(l, I), n()
}
g([`pointerdown`, `click`, `keydown`]);
export {
  D as t
};