import {
  g as U
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  l as V,
  p as Z,
  w as B,
  f as S,
  i as x,
  a as l,
  b as q,
  u as A,
  d as _,
  m as b,
  r as h,
  t as p,
  c as g,
  o as s
} from "./BKnGt6Ki.js";
import {
  s as v
} from "./BLpt-Kcc.js";
import {
  i as C
} from "./C31cMBCe.js";
import {
  a as k,
  c as z,
  s as c
} from "./Czze0tKx.js";
import {
  p as d
} from "./Bu-IUIdW.js";
import {
  P as F
} from "./P6BNM-e1.js";
import {
  u as H
} from "./C0zwYEAy.js";
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
    const r = n.locale ?? U();
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
  Z(n, !0);
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
  var P = B(),
    R = S(P);
  {
    var G = a => {
        var t = B(),
          f = S(t);
        {
          var M = o => {
              var e = ln(),
                m = _(e);
              v(m, () => n.children ?? b), h(e), p(() => {
                k(e, 1, `cursor-pointer hover:underline ${I()}`), c(e, "title", n.title)
              }), s("pointerdown", e, u), s("click", e, y), s("keydown", e, j), l(o, e)
            },
            O = o => {
              var e = sn(),
                m = _(e);
              v(m, () => n.children ?? b), h(e), p(() => {
                k(e, 1, `cursor-pointer hover:underline ${I()}`), c(e, "href", x(N)), c(e, "title", n.title)
              }), s("pointerdown", e, u), s("click", e, u), l(o, e)
            };
          C(f, o => {
            r() === "inline" ? o(M) : o(O, -1)
          })
        }
        l(a, t)
      },
      K = a => {
        var t = cn(),
          f = _(t);
        v(f, () => n.children ?? b), h(t), p(() => {
          k(t, 1, z(E())), c(t, "title", n.title)
        }), l(a, t)
      };
    C(R, a => {
      x(L) ? a(G) : a(K, -1)
    })
  }
  l(i, P), q()
}
V(["pointerdown", "click", "keydown"]);
export {
  gn as S, kn as b
};