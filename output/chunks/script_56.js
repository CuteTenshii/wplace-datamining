import "./Bzak7iHL.js";
import {
  k as j,
  p as q,
  l as y,
  f as S,
  i as x,
  a as i,
  b as B,
  u as C,
  d as m,
  z as h,
  r as v,
  t as _,
  c as p,
  m as s
} from "./D5GL_E7i.js";
import {
  s as k
} from "./BMTVjKyu.js";
import {
  i as U
} from "./unjGrhDm.js";
import {
  a as g,
  c as F,
  s as l
} from "./Ce1mtF2R.js";
import {
  p as d
} from "./LT-XNHCk.js";
import {
  P as G
} from "./CrN6bqEV.js";
import {
  u as H
} from "./DH3WiCeb.js";

function D(o) {
  return `/dashboard/users?id=${encodeURIComponent(String(o))}`
}

function J(o) {
  typeof window > "u" || window.open(D(o), "_blank", "noopener,noreferrer")
}
var Q = p('<span role="link" tabindex="0"><!></span>'),
  T = p('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  W = p("<span><!></span>");

function te(o, e) {
  q(e, !0);
  let E = d(e, "mode", 3, "anchor"),
    I = d(e, "class", 3, ""),
    w = d(e, "linkClass", 19, I),
    L = d(e, "textClass", 19, I);
  const N = C(() => e.userId != null && e.userId > 0 && H.hasAnyPermission(G.dashboard.users)),
    R = C(() => e.userId == null ? "" : D(e.userId));

  function f(n) {
    n.stopPropagation()
  }

  function b(n) {
    e.userId == null || e.userId <= 0 || (n.preventDefault(), n.stopPropagation(), J(e.userId))
  }

  function z(n) {
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
                g(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "title", e.title)
              }), s("pointerdown", a, f), s("click", a, b), s("keydown", a, z), i(t, a)
            },
            V = t => {
              var a = T(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                g(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "href", x(R)), l(a, "title", e.title)
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
          g(r, 1, F(L())), l(r, "title", e.title)
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
  te as S, D as g
};