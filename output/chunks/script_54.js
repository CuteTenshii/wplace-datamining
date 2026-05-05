import "./Bzak7iHL.js";
import {
  a as i,
  v as K,
  p as Q,
  k as T,
  f as q,
  i as x,
  b as U,
  u as C,
  d as h,
  aZ as p,
  r as _,
  t as g,
  c as I
} from "./wFsvFKKp.js";
import {
  e as V,
  a as k,
  c as j,
  s as c
} from "./BGMKwhhq.js";
import {
  r as z,
  p as d
} from "./C4jQIU3W.js";
import {
  d as F,
  a as s
} from "./D2UtoGHN.js";
import {
  s as w
} from "./GOMVJoUS.js";
import {
  i as S
} from "./BVciu6sd.js";
import {
  P as G
} from "./BPTGThQS.js";
import {
  u as H
} from "./ClF9qu09.js";
var J = K('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function ca(r, a) {
  let f = z(a, ["$$slots", "$$events", "$$legacy"]);
  var l = J();
  V(l, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...f
  })), i(r, l)
}

function A(r) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(r))}`
}

function W(r) {
  typeof window > "u" || window.open(A(r), "_blank", "noopener,noreferrer")
}
var X = I('<span role="link" tabindex="0"><!></span>'),
  Y = I('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  $ = I("<span><!></span>");

function da(r, a) {
  Q(a, !0);
  let f = d(a, "mode", 3, "anchor"),
    l = d(a, "class", 3, ""),
    b = d(a, "linkClass", 19, l),
    L = d(a, "textClass", 19, l);
  const D = C(() => a.allianceId != null && a.allianceId > 0 && H.hasAnyPermission(G.dashboard.alliances)),
    E = C(() => a.allianceId == null ? "" : A(a.allianceId));

  function m(n) {
    n.stopPropagation()
  }

  function y(n) {
    a.allianceId == null || a.allianceId <= 0 || (n.preventDefault(), n.stopPropagation(), W(a.allianceId))
  }

  function Z(n) {
    n.key !== "Enter" && n.key !== " " || y(n)
  }
  var P = T(),
    M = q(P);
  {
    var N = n => {
        var t = T(),
          u = q(t);
        {
          var R = o => {
              var e = X(),
                v = h(e);
              w(v, () => a.children ?? p), _(e), g(() => {
                k(e, 1, `cursor-pointer hover:underline ${b()}`), c(e, "title", a.title)
              }), s("pointerdown", e, m), s("click", e, y), s("keydown", e, Z), i(o, e)
            },
            B = o => {
              var e = Y(),
                v = h(e);
              w(v, () => a.children ?? p), _(e), g(() => {
                k(e, 1, `cursor-pointer hover:underline ${b()}`), c(e, "href", x(E)), c(e, "title", a.title)
              }), s("pointerdown", e, m), s("click", e, m), i(o, e)
            };
          S(u, o => {
            f() === "inline" ? o(R) : o(B, !1)
          })
        }
        i(n, t)
      },
      O = n => {
        var t = $(),
          u = h(t);
        w(u, () => a.children ?? p), _(t), g(() => {
          k(t, 1, j(L())), c(t, "title", a.title)
        }), i(n, t)
      };
    S(M, n => {
      x(D) ? n(N) : n(O, !1)
    })
  }
  i(r, P), U()
}
F(["pointerdown", "click", "keydown"]);
export {
  ca as L, da as S
};