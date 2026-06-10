import "./Bzak7iHL.js";
import {
  k as V,
  p as j,
  q as y,
  f as S,
  i as x,
  a as s,
  b as z,
  u as C,
  d as m,
  aJ as h,
  r as v,
  t as _,
  c as g,
  l as i
} from "./Dbe4PVAU.js";
import {
  s as k
} from "./2Od2egA-.js";
import {
  i as U
} from "./Icl9dwnj.js";
import {
  a as p,
  c as B,
  s as l
} from "./B7_gUtXa.js";
import {
  p as d
} from "./K9AHFDoV.js";
import {
  P as F
} from "./BHNtn0vm.js";
import {
  u as G
} from "./C_03T-s9.js";

function D(o) {
  return `/dashboard/users?id=${encodeURIComponent(String(o))}`
}

function H(o) {
  typeof window > "u" || window.open(D(o), "_blank", "noopener,noreferrer")
}
var Q = g('<span role="link" tabindex="0"><!></span>'),
  T = g('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  W = g("<span><!></span>");

function te(o, e) {
  j(e, !0);
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

  function q(n) {
    n.key !== "Enter" && n.key !== " " || b(n)
  }
  var P = y(),
    A = S(P);
  {
    var J = n => {
        var r = y(),
          u = S(r);
        {
          var M = t => {
              var a = Q(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                p(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "title", e.title)
              }), i("pointerdown", a, f), i("click", a, b), i("keydown", a, q), s(t, a)
            },
            O = t => {
              var a = T(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                p(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "href", x(R)), l(a, "title", e.title)
              }), i("pointerdown", a, f), i("click", a, f), s(t, a)
            };
          U(u, t => {
            E() === "inline" ? t(M) : t(O, !1)
          })
        }
        s(n, r)
      },
      K = n => {
        var r = W(),
          u = m(r);
        k(u, () => e.children ?? h), v(r), _(() => {
          p(r, 1, B(L())), l(r, "title", e.title)
        }), s(n, r)
      };
    U(A, n => {
      x(N) ? n(J) : n(K, !1)
    })
  }
  s(o, P), z()
}
V(["pointerdown", "click", "keydown"]);
export {
  te as S
};