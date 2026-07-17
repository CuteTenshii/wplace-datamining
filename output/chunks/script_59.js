import "./Bzak7iHL.js";
import {
  k as j,
  p as z,
  q as y,
  f as x,
  i as S,
  a as i,
  b as B,
  u as C,
  d as m,
  x as h,
  r as v,
  t as _,
  c as g,
  l as s
} from "./Dkgr_Dbt.js";
import {
  s as k
} from "./BPhfHpSd.js";
import {
  i as U
} from "./rBVNqKOk.js";
import {
  a as p,
  c as F,
  s as l
} from "./tzSUQnZi.js";
import {
  p as d
} from "./DOQuOeXT.js";
import {
  P as G
} from "./CErsBPAx.js";
import {
  u as H
} from "./DdhD_NEo.js";

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
    I = d(e, "class", 3, ""),
    w = d(e, "linkClass", 19, I),
    L = d(e, "textClass", 19, I);
  const N = C(() => e.userId != null && e.userId > 0 && H.hasAnyPermission(G.dashboard.users)),
    R = C(() => e.userId == null ? "" : D(e.userId));

  function f(a) {
    a.stopPropagation()
  }

  function b(a) {
    e.userId == null || e.userId <= 0 || (a.preventDefault(), a.stopPropagation(), J(e.userId))
  }

  function q(a) {
    a.key !== "Enter" && a.key !== " " || b(a)
  }
  var P = y(),
    A = x(P);
  {
    var K = a => {
        var r = y(),
          u = x(r);
        {
          var O = t => {
              var n = Q(),
                c = m(n);
              k(c, () => e.children ?? h), v(n), _(() => {
                p(n, 1, `cursor-pointer hover:underline ${w()}`), l(n, "title", e.title)
              }), s("pointerdown", n, f), s("click", n, b), s("keydown", n, q), i(t, n)
            },
            V = t => {
              var n = T(),
                c = m(n);
              k(c, () => e.children ?? h), v(n), _(() => {
                p(n, 1, `cursor-pointer hover:underline ${w()}`), l(n, "href", S(R)), l(n, "title", e.title)
              }), s("pointerdown", n, f), s("click", n, f), i(t, n)
            };
          U(u, t => {
            E() === "inline" ? t(O) : t(V, -1)
          })
        }
        i(a, r)
      },
      M = a => {
        var r = W(),
          u = m(r);
        k(u, () => e.children ?? h), v(r), _(() => {
          p(r, 1, F(L())), l(r, "title", e.title)
        }), i(a, r)
      };
    U(A, a => {
      S(N) ? a(K) : a(M, -1)
    })
  }
  i(o, P), B()
}
j(["pointerdown", "click", "keydown"]);
export {
  te as S
};