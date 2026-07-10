import "./Bzak7iHL.js";
import {
  k as j,
  p as z,
  q as y,
  f as x,
  i as S,
  a as l,
  b as B,
  u as C,
  d as u,
  x as h,
  r as v,
  t as _,
  c as g,
  l as o
} from "./Dkgr_Dbt.js";
import {
  s as k
} from "./BPhfHpSd.js";
import {
  i as A
} from "./rBVNqKOk.js";
import {
  a as p,
  c as F,
  s
} from "./CfjQLVhL.js";
import {
  p as d
} from "./DOQuOeXT.js";
import {
  P as G
} from "./BuCmGSK8.js";
import {
  u as H
} from "./CbgV-OBE.js";

function D(r) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(r))}`
}

function J(r) {
  typeof window > "u" || window.open(D(r), "_blank", "noopener,noreferrer")
}
var Q = g('<span role="link" tabindex="0"><!></span>'),
  T = g('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  W = g("<span><!></span>");

function ia(r, a) {
  z(a, !0);
  let E = d(a, "mode", 3, "anchor"),
    I = d(a, "class", 3, ""),
    w = d(a, "linkClass", 19, I),
    L = d(a, "textClass", 19, I);
  const N = C(() => a.allianceId != null && a.allianceId > 0 && H.hasAnyPermission(G.dashboard.alliances)),
    R = C(() => a.allianceId == null ? "" : D(a.allianceId));

  function c(n) {
    n.stopPropagation()
  }

  function b(n) {
    a.allianceId == null || a.allianceId <= 0 || (n.preventDefault(), n.stopPropagation(), J(a.allianceId))
  }

  function q(n) {
    n.key !== "Enter" && n.key !== " " || b(n)
  }
  var P = y(),
    K = x(P);
  {
    var M = n => {
        var t = y(),
          f = x(t);
        {
          var U = i => {
              var e = Q(),
                m = u(e);
              k(m, () => a.children ?? h), v(e), _(() => {
                p(e, 1, `cursor-pointer hover:underline ${w()}`), s(e, "title", a.title)
              }), o("pointerdown", e, c), o("click", e, b), o("keydown", e, q), l(i, e)
            },
            V = i => {
              var e = T(),
                m = u(e);
              k(m, () => a.children ?? h), v(e), _(() => {
                p(e, 1, `cursor-pointer hover:underline ${w()}`), s(e, "href", S(R)), s(e, "title", a.title)
              }), o("pointerdown", e, c), o("click", e, c), l(i, e)
            };
          A(f, i => {
            E() === "inline" ? i(U) : i(V, -1)
          })
        }
        l(n, t)
      },
      O = n => {
        var t = W(),
          f = u(t);
        k(f, () => a.children ?? h), v(t), _(() => {
          p(t, 1, F(L())), s(t, "title", a.title)
        }), l(n, t)
      };
    A(K, n => {
      S(N) ? n(M) : n(O, -1)
    })
  }
  l(r, P), B()
}
j(["pointerdown", "click", "keydown"]);
export {
  ia as S
};