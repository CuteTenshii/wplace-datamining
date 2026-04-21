import "./Bzak7iHL.js";
import {
  k as j,
  p as q,
  l as y,
  f as S,
  i as x,
  a as s,
  b as z,
  u as C,
  d as m,
  aW as h,
  r as v,
  t as _,
  c as g,
  m as i
} from "./B66BVdRM.js";
import {
  s as k
} from "./Dd8KoMQq.js";
import {
  i as U
} from "./BLRpBUXo.js";
import {
  a as p,
  c as B,
  s as l
} from "./D6WlI9xC.js";
import {
  p as d
} from "./DFHlj6pU.js";
import {
  P as F
} from "./BL7VXDoY.js";
import {
  u as G
} from "./BmjhHaPc.js";

function D(o) {
  return `/dashboard/users?id=${encodeURIComponent(String(o))}`
}

function H(o) {
  typeof window > "u" || window.open(D(o), "_blank", "noopener,noreferrer")
}
var J = g('<span role="link" tabindex="0"><!></span>'),
  Q = g('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  T = g("<span><!></span>");

function te(o, e) {
  q(e, !0);
  let E = d(e, "mode", 3, "anchor"),
    I = d(e, "class", 3, ""),
    w = d(e, "linkClass", 19, I),
    L = d(e, "textClass", 19, I);
  const N = C(() => e.userId != null && e.userId > 0 && G.hasAnyPermission(F.dashboard.users)),
    R = C(() => e.userId == null ? "" : D(e.userId));

  function f(n) {
    n.stopPropagation()
  }

  function b(n) {
    e.userId == null || e.userId <= 0 || (n.preventDefault(), n.stopPropagation(), H(e.userId))
  }

  function A(n) {
    n.key !== "Enter" && n.key !== " " || b(n)
  }
  var P = y(),
    K = S(P);
  {
    var M = n => {
        var r = y(),
          u = S(r);
        {
          var V = t => {
              var a = J(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                p(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "title", e.title)
              }), i("pointerdown", a, f), i("click", a, b), i("keydown", a, A), s(t, a)
            },
            W = t => {
              var a = Q(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                p(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "href", x(R)), l(a, "title", e.title)
              }), i("pointerdown", a, f), i("click", a, f), s(t, a)
            };
          U(u, t => {
            E() === "inline" ? t(V) : t(W, !1)
          })
        }
        s(n, r)
      },
      O = n => {
        var r = T(),
          u = m(r);
        k(u, () => e.children ?? h), v(r), _(() => {
          p(r, 1, B(L())), l(r, "title", e.title)
        }), s(n, r)
      };
    U(K, n => {
      x(N) ? n(M) : n(O, !1)
    })
  }
  s(o, P), z()
}
j(["pointerdown", "click", "keydown"]);
export {
  te as S
};