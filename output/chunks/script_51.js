import "./Bzak7iHL.js";
import {
  a as i,
  y as K,
  k as Q,
  p as U,
  l as T,
  f as q,
  i as x,
  b as V,
  u as C,
  d as h,
  aX as _,
  r as p,
  t as g,
  c as I,
  m as s
} from "./BC180BoF.js";
import {
  e as X,
  a as k,
  c as j,
  s as c
} from "./Bbytcfj7.js";
import {
  r as z,
  p as d
} from "./BQ15Turv.js";
import {
  s as w
} from "./CetJgb3j.js";
import {
  i as S
} from "./CYlrjl7C.js";
import {
  P as F
} from "./BjoIPQvC.js";
import {
  u as G
} from "./kJ5XpKZO.js";
var H = K('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function sa(r, a) {
  let f = z(a, ["$$slots", "$$events", "$$legacy"]);
  var l = H();
  X(l, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...f
  })), i(r, l)
}

function A(r) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(r))}`
}

function J(r) {
  typeof window > "u" || window.open(A(r), "_blank", "noopener,noreferrer")
}
var W = I('<span role="link" tabindex="0"><!></span>'),
  Y = I('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  $ = I("<span><!></span>");

function ca(r, a) {
  U(a, !0);
  let f = d(a, "mode", 3, "anchor"),
    l = d(a, "class", 3, ""),
    b = d(a, "linkClass", 19, l),
    L = d(a, "textClass", 19, l);
  const D = C(() => a.allianceId != null && a.allianceId > 0 && G.hasAnyPermission(F.dashboard.alliances)),
    E = C(() => a.allianceId == null ? "" : A(a.allianceId));

  function m(n) {
    n.stopPropagation()
  }

  function y(n) {
    a.allianceId == null || a.allianceId <= 0 || (n.preventDefault(), n.stopPropagation(), J(a.allianceId))
  }

  function M(n) {
    n.key !== "Enter" && n.key !== " " || y(n)
  }
  var P = T(),
    N = q(P);
  {
    var O = n => {
        var t = T(),
          u = q(t);
        {
          var Z = o => {
              var e = W(),
                v = h(e);
              w(v, () => a.children ?? _), p(e), g(() => {
                k(e, 1, `cursor-pointer hover:underline ${b()}`), c(e, "title", a.title)
              }), s("pointerdown", e, m), s("click", e, y), s("keydown", e, M), i(o, e)
            },
            B = o => {
              var e = Y(),
                v = h(e);
              w(v, () => a.children ?? _), p(e), g(() => {
                k(e, 1, `cursor-pointer hover:underline ${b()}`), c(e, "href", x(E)), c(e, "title", a.title)
              }), s("pointerdown", e, m), s("click", e, m), i(o, e)
            };
          S(u, o => {
            f() === "inline" ? o(Z) : o(B, !1)
          })
        }
        i(n, t)
      },
      R = n => {
        var t = $(),
          u = h(t);
        w(u, () => a.children ?? _), p(t), g(() => {
          k(t, 1, j(L())), c(t, "title", a.title)
        }), i(n, t)
      };
    S(N, n => {
      x(D) ? n(O) : n(R, !1)
    })
  }
  i(r, P), V()
}
Q(["pointerdown", "click", "keydown"]);
export {
  sa as L, ca as S
};