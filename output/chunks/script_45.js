import {
  g as S
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  a as o,
  w as z,
  k as G,
  p as J,
  q,
  f as y,
  i as D,
  b as K,
  u as T,
  d as m,
  aJ as v,
  r as h,
  t as x,
  c as w,
  l as c
} from "./Dbe4PVAU.js";
import {
  d as Q,
  a as g,
  c as U,
  s as u
} from "./B7_gUtXa.js";
import {
  r as V,
  p
} from "./K9AHFDoV.js";
import {
  s as k
} from "./2Od2egA-.js";
import {
  i as C
} from "./Icl9dwnj.js";
import {
  P as F
} from "./BHNtn0vm.js";
import {
  u as H
} from "./C_03T-s9.js";
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
  Ee = (i = {}, n = {}) => {
    const e = n.locale ?? S();
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
  he = () => "Нарисованные пиксели",
  xe = () => "Намальовані пікселі",
  ge = () => "Pixel đã tô",
  Me = (i = {}, n = {}) => {
    const e = n.locale ?? S();
    return e === "en" ? le() : e === "pt" ? ce() : e === "ch" ? ue() : e === "de" ? pe() : e === "es" ? de() : e === "fr" ? fe() : e === "it" ? _e() : e === "jp" ? me() : e === "pl" ? ve() : e === "ru" ? he() : e === "uk" ? xe() : ge()
  };
var ke = z('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function Oe(i, n) {
  let e = V(n, ["$$slots", "$$events", "$$legacy"]);
  var l = ke();
  Q(l, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...e
  })), o(i, l)
}

function L(i) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(i))}`
}

function we(i) {
  typeof window > "u" || window.open(L(i), "_blank", "noopener,noreferrer")
}
var Pe = w('<span role="link" tabindex="0"><!></span>'),
  Ie = w('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  be = w("<span><!></span>");

function Be(i, n) {
  J(n, !0);
  let e = p(n, "mode", 3, "anchor"),
    l = p(n, "class", 3, ""),
    P = p(n, "linkClass", 19, l),
    j = p(n, "textClass", 19, l);
  const A = T(() => n.allianceId != null && n.allianceId > 0 && H.hasAnyPermission(F.dashboard.alliances)),
    E = T(() => n.allianceId == null ? "" : L(n.allianceId));

  function d(r) {
    r.stopPropagation()
  }

  function I(r) {
    n.allianceId == null || n.allianceId <= 0 || (r.preventDefault(), r.stopPropagation(), we(n.allianceId))
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
              var t = Pe(),
                _ = m(t);
              k(_, () => n.children ?? v), h(t), x(() => {
                g(t, 1, `cursor-pointer hover:underline ${P()}`), u(t, "title", n.title)
              }), c("pointerdown", t, d), c("click", t, I), c("keydown", t, M), o(s, t)
            },
            Z = s => {
              var t = Ie(),
                _ = m(t);
              k(_, () => n.children ?? v), h(t), x(() => {
                g(t, 1, `cursor-pointer hover:underline ${P()}`), u(t, "href", D(E)), u(t, "title", n.title)
              }), c("pointerdown", t, d), c("click", t, d), o(s, t)
            };
          C(f, s => {
            e() === "inline" ? s(R) : s(Z, !1)
          })
        }
        o(r, a)
      },
      N = r => {
        var a = be(),
          f = m(a);
        k(f, () => n.children ?? v), h(a), x(() => {
          g(a, 1, U(j())), u(a, "title", n.title)
        }), o(r, a)
      };
    C(O, r => {
      D(A) ? r(B) : r(N, !1)
    })
  }
  o(i, b), K()
}
G(["pointerdown", "click", "keydown"]);
export {
  Oe as L, Be as S, Ee as d, Me as p
};