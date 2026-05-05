import "./Bzak7iHL.js";
import {
  p as j,
  k as y,
  f as S,
  i as x,
  a as i,
  b as q,
  u as C,
  d as m,
  aZ as h,
  r as v,
  t as _,
  c as g
} from "./wFsvFKKp.js";
import {
  d as z,
  a as s
} from "./D2UtoGHN.js";
import {
  s as k
} from "./GOMVJoUS.js";
import {
  i as U
} from "./BVciu6sd.js";
import {
  a as p,
  c as B,
  s as l
} from "./BGMKwhhq.js";
import {
  p as d
} from "./C4jQIU3W.js";
import {
  P as F
} from "./BPTGThQS.js";
import {
  u as G
} from "./ClF9qu09.js";

function D(o) {
  return `/dashboard/users?id=${encodeURIComponent(String(o))}`
}

function H(o) {
  typeof window > "u" || window.open(D(o), "_blank", "noopener,noreferrer")
}
var J = g('<span role="link" tabindex="0"><!></span>'),
  Q = g('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  T = g("<span><!></span>");

function oe(o, e) {
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
              }), s("pointerdown", a, f), s("click", a, b), s("keydown", a, A), i(t, a)
            },
            Z = t => {
              var a = Q(),
                c = m(a);
              k(c, () => e.children ?? h), v(a), _(() => {
                p(a, 1, `cursor-pointer hover:underline ${w()}`), l(a, "href", x(R)), l(a, "title", e.title)
              }), s("pointerdown", a, f), s("click", a, f), i(t, a)
            };
          U(u, t => {
            E() === "inline" ? t(V) : t(Z, !1)
          })
        }
        i(n, r)
      },
      O = n => {
        var r = T(),
          u = m(r);
        k(u, () => e.children ?? h), v(r), _(() => {
          p(r, 1, B(L())), l(r, "title", e.title)
        }), i(n, r)
      };
    U(K, n => {
      x(N) ? n(M) : n(O, !1)
    })
  }
  i(o, P), q()
}
z(["pointerdown", "click", "keydown"]);
export {
  oe as S
};