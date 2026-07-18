import "./Bzak7iHL.js";
import {
  l as q,
  p as z,
  w as y,
  f as S,
  i as x,
  a as i,
  b as B,
  u as C,
  d as m,
  m as h,
  r as v,
  t as _,
  c as g,
  o as s
} from "./BKnGt6Ki.js";
import {
  s as k
} from "./BLpt-Kcc.js";
import {
  i as U
} from "./C31cMBCe.js";
import {
  a as p,
  c as F,
  s as l
} from "./Czze0tKx.js";
import {
  p as d
} from "./Bu-IUIdW.js";
import {
  P as G
} from "./641pEIFm.js";
import {
  u as H
} from "./jCg5vVN2.js";

function D(o) {
  return `/dashboard/users?id=${encodeURIComponent(String(o))}`
}

function J(o) {
  typeof window > "u" || window.open(D(o), "_blank", "noopener,noreferrer")
}
var Q = g('<span role="link" tabindex="0"><!></span>'),
  T = g('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  W = g("<span><!></span>");

function te(o, e) {
  z(e, !0);
  let E = d(e, "mode", 3, "anchor"),
    w = d(e, "class", 3, ""),
    I = d(e, "linkClass", 19, w),
    L = d(e, "textClass", 19, w);
  const N = C(() => e.userId != null && e.userId > 0 && H.hasAnyPermission(G.dashboard.users)),
    R = C(() => e.userId == null ? "" : D(e.userId));

  function f(a) {
    a.stopPropagation()
  }

  function b(a) {
    e.userId == null || e.userId <= 0 || (a.preventDefault(), a.stopPropagation(), J(e.userId))
  }

  function A(a) {
    a.key !== "Enter" && a.key !== " " || b(a)
  }
  var P = y(),
    K = S(P);
  {
    var M = a => {
        var r = y(),
          u = S(r);
        {
          var V = t => {
              var n = Q(),
                c = m(n);
              k(c, () => e.children ?? h), v(n), _(() => {
                p(n, 1, `cursor-pointer hover:underline ${I()}`), l(n, "title", e.title)
              }), s("pointerdown", n, f), s("click", n, b), s("keydown", n, A), i(t, n)
            },
            j = t => {
              var n = T(),
                c = m(n);
              k(c, () => e.children ?? h), v(n), _(() => {
                p(n, 1, `cursor-pointer hover:underline ${I()}`), l(n, "href", x(R)), l(n, "title", e.title)
              }), s("pointerdown", n, f), s("click", n, f), i(t, n)
            };
          U(u, t => {
            E() === "inline" ? t(V) : t(j, -1)
          })
        }
        i(a, r)
      },
      O = a => {
        var r = W(),
          u = m(r);
        k(u, () => e.children ?? h), v(r), _(() => {
          p(r, 1, F(L())), l(r, "title", e.title)
        }), i(a, r)
      };
    U(K, a => {
      x(N) ? a(M) : a(O, -1)
    })
  }
  i(o, P), B()
}
q(["pointerdown", "click", "keydown"]);
export {
  te as S
};