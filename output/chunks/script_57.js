import {
  g as B
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  a as s,
  w as G,
  k as K,
  p as Q,
  q,
  f as y,
  i as T,
  b as U,
  u as S,
  d as m,
  aI as v,
  r as x,
  t as h,
  c as w,
  l as c
} from "./CxLQz1V2.js";
import {
  d as V,
  a as g,
  c as z,
  s as d
} from "./0rgL9IxG.js";
import {
  r as F,
  p
} from "./C_QAuGIk.js";
import {
  s as k
} from "./DunY0-6-.js";
import {
  i as C
} from "./DeNk1SQn.js";
import {
  P as H
} from "./pow7a_yp.js";
import {
  u as J
} from "./D7KqenLe.js";
const W = () => "Pixels painted",
  X = () => "Pixels pintados",
  Y = () => "已绘制像素数",
  $ = () => "Gemalte Pixel",
  ee = () => "Píxeles pintados",
  ne = () => "Pixels peints",
  te = () => "Pixel dipinti",
  ae = () => "塗られたピクセル数",
  re = () => "Pomalowane piksele",
  ie = () => "Нарисованные пиксели",
  le = () => "Намальовані пікселі",
  se = () => "Pixel đã tô",
  Ie = (r = {}, e = {}) => {
    const t = e.locale ?? B();
    return t === "en" ? W() : t === "pt" ? X() : t === "ch" ? Y() : t === "de" ? $() : t === "es" ? ee() : t === "fr" ? ne() : t === "it" ? te() : t === "jp" ? ae() : t === "pl" ? re() : t === "ru" ? ie() : t === "uk" ? le() : se()
  };
var oe = new Set(["$$slots", "$$events", "$$legacy"]),
  ce = G('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function be(r, e) {
  let t = F(e, oe);
  var o = ce();
  V(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...t
  })), s(r, o)
}

function L(r) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(r))}`
}

function de(r) {
  typeof window > "u" || window.open(L(r), "_blank", "noopener,noreferrer")
}
var pe = w('<span role="link" tabindex="0"><!></span>'),
  ue = w('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  fe = w("<span><!></span>");

function qe(r, e) {
  Q(e, !0);
  let t = p(e, "mode", 3, "anchor"),
    o = p(e, "class", 3, ""),
    P = p(e, "linkClass", 19, o),
    A = p(e, "textClass", 19, o);
  const D = S(() => e.allianceId != null && e.allianceId > 0 && J.hasAnyPermission(H.dashboard.alliances)),
    E = S(() => e.allianceId == null ? "" : L(e.allianceId));

  function u(a) {
    a.stopPropagation()
  }

  function I(a) {
    e.allianceId == null || e.allianceId <= 0 || (a.preventDefault(), a.stopPropagation(), de(e.allianceId))
  }

  function j(a) {
    a.key !== "Enter" && a.key !== " " || I(a)
  }
  var b = q(),
    M = y(b);
  {
    var N = a => {
        var i = q(),
          f = y(i);
        {
          var R = l => {
              var n = pe(),
                _ = m(n);
              k(_, () => e.children ?? v), x(n), h(() => {
                g(n, 1, `cursor-pointer hover:underline ${P()}`), d(n, "title", e.title)
              }), c("pointerdown", n, u), c("click", n, I), c("keydown", n, j), s(l, n)
            },
            Z = l => {
              var n = ue(),
                _ = m(n);
              k(_, () => e.children ?? v), x(n), h(() => {
                g(n, 1, `cursor-pointer hover:underline ${P()}`), d(n, "href", T(E)), d(n, "title", e.title)
              }), c("pointerdown", n, u), c("click", n, u), s(l, n)
            };
          C(f, l => {
            t() === "inline" ? l(R) : l(Z, -1)
          })
        }
        s(a, i)
      },
      O = a => {
        var i = fe(),
          f = m(i);
        k(f, () => e.children ?? v), x(i), h(() => {
          g(i, 1, z(A())), d(i, "title", e.title)
        }), s(a, i)
      };
    C(M, a => {
      T(D) ? a(N) : a(O, -1)
    })
  }
  s(r, b), U()
}
K(["pointerdown", "click", "keydown"]);
export {
  be as L, qe as S, Ie as p
};