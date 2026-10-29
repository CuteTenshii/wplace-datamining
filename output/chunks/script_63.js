import {
  At as e,
  Bt as t,
  Ct as n,
  F as r,
  M as i,
  N as a,
  T as o,
  W as s,
  Y as c,
  a as l,
  cn as u,
  en as d,
  et as f,
  fn as p,
  jt as m,
  nt as h,
  ot as g,
  pt as _,
  st as v,
  tn as y,
  tt as b
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  n as x
} from "./BiTo61FT.js";
import {
  t as S
} from "./CbKR0not.js";
import {
  t as C
} from "./CcUhPTWI.js";

function w(e) {
  return `/dashboard/users?id=${encodeURIComponent(String(e))}`
}

function T(e) {
  typeof window > `u` || window.open(w(e), `_blank`, `noopener,noreferrer`)
}
var E = h(`<span role="link" tabindex="0"><!></span>`),
  D = h(`<a target="_blank" rel="noopener noreferrer"><!></a>`),
  O = h(`<span><!></span>`);

function k(h, g) {
  y(g, !0);
  let k = l(g, `mode`, 3, `anchor`),
    A = l(g, `class`, 3, ``),
    j = l(g, `linkClass`, 19, A),
    M = l(g, `textClass`, 19, A),
    N = t(() => g.userId != null && g.userId > 0 && x.hasAnyPermission(S.dashboard.users)),
    P = t(() => g.userId == null ? `` : w(g.userId));

  function F(e) {
    e.stopPropagation()
  }

  function I(e) {
    g.userId == null || g.userId <= 0 || (e.preventDefault(), e.stopPropagation(), T(g.userId))
  }

  function L(e) {
    (e.key === `Enter` || e.key === ` `) && I(e)
  }
  var R = b(),
    z = m(R),
    B = t => {
      var a = b(),
        l = m(a),
        d = t => {
          var a = E(),
            o = e(a);
          s(o, () => g.children ?? p), u(a), r(a, () => C(g.title)), n(() => i(a, 1, `cursor-pointer hover:underline ${j()}`)), v(`pointerdown`, a, F), v(`click`, a, I), v(`keydown`, a, L), f(t, a)
        },
        h = t => {
          var a = D(),
            c = e(a);
          s(c, () => g.children ?? p), u(a), r(a, () => C(g.title)), n(() => {
            i(a, 1, `cursor-pointer hover:underline ${j()}`), o(a, `href`, _(P))
          }), v(`pointerdown`, a, F), v(`click`, a, F), f(t, a)
        };
      c(l, e => {
        k() === `inline` ? e(d) : e(h, -1)
      }), f(t, a)
    },
    V = t => {
      var o = O(),
        c = e(o);
      s(c, () => g.children ?? p), u(o), r(o, () => C(g.title)), n(() => i(o, 1, a(M()))), f(t, o)
    };
  c(z, e => {
    _(N) ? e(B) : e(V, -1)
  }), f(h, R), d()
}
g([`pointerdown`, `click`, `keydown`]);
export {
  w as n, k as t
};