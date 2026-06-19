import {
  g as C
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  a as o,
  w as z,
  k as G,
  p as K,
  q,
  f as y,
  i as D,
  b as Q,
  u as T,
  d as m,
  aI as v,
  r as x,
  t as h,
  c as w,
  l as c
} from "./CV6xI6o5.js";
import {
  d as U,
  a as g,
  c as V,
  s as u
} from "./rONmwD0j.js";
import {
  r as F,
  p
} from "./BQ880tYw.js";
import {
  s as k
} from "./DWZhoQU0.js";
import {
  i as S
} from "./iywslKou.js";
import {
  P as H
} from "./B8bcn1UK.js";
import {
  u as J
} from "./DbY1VRJD.js";
const W = () => "Description",
  X = () => "Descrição",
  Y = () => "描述",
  $ = () => "Beschreibung",
  ee = () => "Descripción",
  ne = () => "Description",
  te = () => "Descrizione",
  re = () => "説明",
  ie = () => "Opis",
  ae = () => "Описание",
  se = () => "Опис",
  oe = () => "Mô tả",
  Me = (i = {}, n = {}) => {
    const e = n.locale ?? C();
    return e === "en" ? W() : e === "pt" ? X() : e === "ch" ? Y() : e === "de" ? $() : e === "es" ? ee() : e === "fr" ? ne() : e === "it" ? te() : e === "jp" ? re() : e === "pl" ? ie() : e === "ru" ? ae() : e === "uk" ? se() : oe()
  },
  le = () => "Pixels painted",
  ce = () => "Pixels pintados",
  ue = () => "已绘制像素数",
  pe = () => "Gemalte Pixel",
  de = () => "Píxeles pintados",
  fe = () => "Pixels peints",
  _e = () => "Pixel dipinti",
  me = () => "塗られたピクセル数",
  ve = () => "Pomalowane piksele",
  xe = () => "Нарисованные пиксели",
  he = () => "Намальовані пікселі",
  ge = () => "Pixel đã tô",
  Oe = (i = {}, n = {}) => {
    const e = n.locale ?? C();
    return e === "en" ? le() : e === "pt" ? ce() : e === "ch" ? ue() : e === "de" ? pe() : e === "es" ? de() : e === "fr" ? fe() : e === "it" ? _e() : e === "jp" ? me() : e === "pl" ? ve() : e === "ru" ? xe() : e === "uk" ? he() : ge()
  };
var ke = new Set(["$$slots", "$$events", "$$legacy"]),
  we = z('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function Be(i, n) {
  let e = F(n, ke);
  var l = we();
  U(l, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), o(i, l)
}

function L(i) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(i))}`
}

function Pe(i) {
  typeof window > "u" || window.open(L(i), "_blank", "noopener,noreferrer")
}
var Ie = w('<span role="link" tabindex="0"><!></span>'),
  be = w('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  qe = w("<span><!></span>");

function Ne(i, n) {
  K(n, !0);
  let e = p(n, "mode", 3, "anchor"),
    l = p(n, "class", 3, ""),
    P = p(n, "linkClass", 19, l),
    j = p(n, "textClass", 19, l);
  const A = T(() => n.allianceId != null && n.allianceId > 0 && J.hasAnyPermission(H.dashboard.alliances)),
    E = T(() => n.allianceId == null ? "" : L(n.allianceId));

  function d(r) {
    r.stopPropagation()
  }

  function I(r) {
    n.allianceId == null || n.allianceId <= 0 || (r.preventDefault(), r.stopPropagation(), Pe(n.allianceId))
  }

  function M(r) {
    r.key !== "Enter" && r.key !== " " || I(r)
  }
  var b = q(),
    O = y(b);
  {
    var B = r => {
        var a = q(),
          f = y(a);
        {
          var R = s => {
              var t = Ie(),
                _ = m(t);
              k(_, () => n.children ?? v), x(t), h(() => {
                g(t, 1, `cursor-pointer hover:underline ${P()}`), u(t, "title", n.title)
              }), c("pointerdown", t, d), c("click", t, I), c("keydown", t, M), o(s, t)
            },
            Z = s => {
              var t = be(),
                _ = m(t);
              k(_, () => n.children ?? v), x(t), h(() => {
                g(t, 1, `cursor-pointer hover:underline ${P()}`), u(t, "href", D(E)), u(t, "title", n.title)
              }), c("pointerdown", t, d), c("click", t, d), o(s, t)
            };
          S(f, s => {
            e() === "inline" ? s(R) : s(Z, -1)
          })
        }
        o(r, a)
      },
      N = r => {
        var a = qe(),
          f = m(a);
        k(f, () => n.children ?? v), x(a), h(() => {
          g(a, 1, V(j())), u(a, "title", n.title)
        }), o(r, a)
      };
    S(O, r => {
      D(A) ? r(B) : r(N, -1)
    })
  }
  o(i, b), Q()
}
G(["pointerdown", "click", "keydown"]);
export {
  Be as L, Ne as S, Me as d, Oe as p
};