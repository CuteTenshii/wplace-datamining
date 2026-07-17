import {
  g as O
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  k as U,
  p as V,
  q as x,
  f as B,
  i as S,
  a as l,
  b as Z,
  u as A,
  d as _,
  x as b,
  r as h,
  t as p,
  c as g,
  l as s
} from "./Dkgr_Dbt.js";
import {
  s as v
} from "./BPhfHpSd.js";
import {
  i as C
} from "./rBVNqKOk.js";
import {
  a as k,
  c as z,
  s as c
} from "./tzSUQnZi.js";
import {
  p as d
} from "./DOQuOeXT.js";
import {
  P as F
} from "./CErsBPAx.js";
import {
  u as H
} from "./DdhD_NEo.js";
const J = () => "Banned",
  Q = () => "Banido",
  T = () => "已封禁",
  W = () => "Gebannt",
  X = () => "Baneado",
  Y = () => "Banni",
  $ = () => "Bannato",
  nn = () => "BAN済み",
  en = () => "Zbanowany",
  an = () => "Забанен",
  rn = () => "Заблоковано",
  tn = () => "Đã bị cấm",
  kn = (i = {}, n = {}) => {
    const r = n.locale ?? O();
    return r === "en" ? J() : r === "pt" ? Q() : r === "ch" ? T() : r === "de" ? W() : r === "es" ? X() : r === "fr" ? Y() : r === "it" ? $() : r === "jp" ? nn() : r === "pl" ? en() : r === "ru" ? an() : r === "uk" ? rn() : tn()
  };

function D(i) {
  return `/dashboard/alliances?id=${encodeURIComponent(String(i))}`
}

function on(i) {
  typeof window > "u" || window.open(D(i), "_blank", "noopener,noreferrer")
}
var ln = g('<span role="link" tabindex="0"><!></span>'),
  sn = g('<a target="_blank" rel="noopener noreferrer"><!></a>'),
  cn = g("<span><!></span>");

function gn(i, n) {
  V(n, !0);
  let r = d(n, "mode", 3, "anchor"),
    w = d(n, "class", 3, ""),
    I = d(n, "linkClass", 19, w),
    E = d(n, "textClass", 19, w);
  const L = A(() => n.allianceId != null && n.allianceId > 0 && H.hasAnyPermission(F.dashboard.alliances)),
    N = A(() => n.allianceId == null ? "" : D(n.allianceId));

  function u(a) {
    a.stopPropagation()
  }

  function y(a) {
    n.allianceId == null || n.allianceId <= 0 || (a.preventDefault(), a.stopPropagation(), on(n.allianceId))
  }

  function j(a) {
    a.key !== "Enter" && a.key !== " " || y(a)
  }
  var P = x(),
    R = B(P);
  {
    var q = a => {
        var t = x(),
          f = B(t);
        {
          var K = o => {
              var e = ln(),
                m = _(e);
              v(m, () => n.children ?? b), h(e), p(() => {
                k(e, 1, `cursor-pointer hover:underline ${I()}`), c(e, "title", n.title)
              }), s("pointerdown", e, u), s("click", e, y), s("keydown", e, j), l(o, e)
            },
            M = o => {
              var e = sn(),
                m = _(e);
              v(m, () => n.children ?? b), h(e), p(() => {
                k(e, 1, `cursor-pointer hover:underline ${I()}`), c(e, "href", S(N)), c(e, "title", n.title)
              }), s("pointerdown", e, u), s("click", e, u), l(o, e)
            };
          C(f, o => {
            r() === "inline" ? o(K) : o(M, -1)
          })
        }
        l(a, t)
      },
      G = a => {
        var t = cn(),
          f = _(t);
        v(f, () => n.children ?? b), h(t), p(() => {
          k(t, 1, z(E())), c(t, "title", n.title)
        }), l(a, t)
      };
    C(R, a => {
      S(L) ? a(q) : a(G, -1)
    })
  }
  l(i, P), Z()
}
U(["pointerdown", "click", "keydown"]);
export {
  gn as S, kn as b
};