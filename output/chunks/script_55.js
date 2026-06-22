import "./Bzak7iHL.js";
import {
  k as j,
  p as z,
  q as y,
  f as S,
  i as x,
  a as i,
  b as B,
  u as C,
  d as m,
  aI as h,
  r as v,
  t as _,
  c as I,
  l as s
} from "./CxLQz1V2.js";
import {
  s as k
} from "./DunY0-6-.js";
import {
  i as U
} from "./DeNk1SQn.js";
import {
  a as p,
  c as F,
  s as l
} from "./0rgL9IxG.js";
import {
  p as d
} from "./C_QAuGIk.js";
import {
  P as G
} from "./CVKx8ZJY.js";
import {
  u as H
} from "./CeGy5Yz4.js";

function D(o) {
  return `/dashboard/users?id=${encodeURIComponent(String(o))}`
}

function J(o) {
  typeof window > "u" || window.open(D(o), "_blank", "noopener,noreferrer")
}
var Q = I('<span role="link" tabindex="0"><!></span>'),
  T = I('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  W = I("<span><!></span>");

function te(o, e) {
  z(e, !0);
  let E = d(e, "mode", 3, "anchor"),
    g = d(e, "class", 3, ""),
    w = d(e, "linkClass", 19, g),
    L = d(e, "textClass", 19, g);
  const N = C(() => e.userId != null && e.userId > 0 && H.hasAnyPermission(G.dashboard.users)),
    R = C(() => e.userId == null ? "" : D(e.userId));

  function f(n) {
    n.stopPropagation()
  }

  function b(n) {
    e.userId == null || e.userId <= 0 || (n.preventDefault(), n.stopPropagation(), J(e.userId))
  }

  function q(n) {
    n.key !== "Enter" && n.key !== " " || b(n)
  }
  var P = y(),
    A = S(P);
  {
    var K = n => {
        var r = y(),
          u = S(r);
        {
          var O = t => {
              var a = Q(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                p(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "title", e.title)
              }), s("pointerdown", a, f), s("click", a, b), s("keydown", a, q), i(t, a)
            },
            V = t => {
              var a = T(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                p(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "href", x(R)), l(a, "title", e.title)
              }), s("pointerdown", a, f), s("click", a, f), i(t, a)
            };
          U(u, t => {
            E() === "inline" ? t(O) : t(V, -1)
          })
        }
        i(n, r)
      },
      M = n => {
        var r = W(),
          u = m(r);
        k(u, () => e.children ?? h), v(r), _(() => {
          p(r, 1, F(L())), l(r, "title", e.title)
        }), i(n, r)
      };
    U(A, n => {
      x(N) ? n(K) : n(M, -1)
    })
  }
  i(o, P), B()
}
j(["pointerdown", "click", "keydown"]);
export {
  te as S
};