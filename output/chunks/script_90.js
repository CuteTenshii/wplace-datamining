import "./Bzak7iHL.js";
import {
  p as y,
  t as f,
  a as l,
  b as h,
  c as p,
  d as g,
  r as b
} from "./m4hpPlb8.js";
import {
  s as d
} from "./riRxs-wl.js";
import {
  a as M
} from "./BbR4hYuM.js";
import {
  p as a
} from "./RFHi9kKd.js";
import {
  g as m
} from "./BhCkpOlh.js";
import {
  r as T,
  a as R,
  b as k,
  c as v
} from "./DkVxYFQc.js";
const j = () => "Mythic",
  I = () => "Mítico",
  x = () => "神话",
  E = () => "Mythisch",
  L = () => "Mítico",
  N = () => "Mythique",
  w = () => "Mitico",
  z = () => "ミシック",
  P = () => "Mityczny",
  S = () => "Мифический",
  U = () => "Міфічний",
  q = () => "Thần thoại",
  A = (t = {}, n = {}) => {
    const r = n.locale ?? m();
    return r === "en" ? j() : r === "pt" ? I() : r === "ch" ? x() : r === "de" ? E() : r === "es" ? L() : r === "fr" ? N() : r === "it" ? w() : r === "jp" ? z() : r === "pl" ? P() : r === "ru" ? S() : r === "uk" ? U() : q()
  },
  B = () => "Uncommon",
  C = () => "Incomum",
  O = () => "少见",
  Y = () => "Ungewöhnlich",
  D = () => "Poco común",
  F = () => "Peu commun",
  G = () => "Non comune",
  H = () => "アンコモン",
  J = () => "Niezwykły",
  K = () => "Необычный",
  Q = () => "Незвичайний",
  V = () => "Ít gặp",
  W = (t = {}, n = {}) => {
    const r = n.locale ?? m();
    return r === "en" ? B() : r === "pt" ? C() : r === "ch" ? O() : r === "de" ? Y() : r === "es" ? D() : r === "fr" ? F() : r === "it" ? G() : r === "jp" ? H() : r === "pl" ? J() : r === "ru" ? K() : r === "uk" ? Q() : V()
  },
  X = ["common", "uncommon", "rare", "epic", "legendary", "mythic"],
  Z = {
    common: v,
    uncommon: W,
    rare: k,
    epic: R,
    legendary: T,
    mythic: A
  };

function $(t) {
  return X.includes(t)
}

function rr(t) {
  return Z[t]()
}

function sr(t) {
  return `tier--${t}`
}

function _r(t) {
  return t && $(t) ? t : "common"
}
const e = (t, n, r, o, c) => ({
    x: t,
    size: n,
    color: r,
    duration: o,
    delay: c
  }),
  tr = {
    common: [],
    uncommon: [],
    rare: [],
    epic: [e("20%", 5, "rgb(168 85 247 / 0.8)", 5, 0), e("55%", 6, "rgb(124 58 237 / 0.7)", 6, 1.8), e("80%", 5, "rgb(196 152 255 / 0.8)", 5.5, 3.2)],
    legendary: [e("15%", 5, "rgb(251 191 36 / 0.85)", 4.8, 0), e("42%", 6, "rgb(245 158 11 / 0.75)", 6, 1.4), e("68%", 4, "rgb(255 223 142 / 0.9)", 5.2, 2.6), e("86%", 5, "rgb(251 191 36 / 0.8)", 5.6, 3.6)],
    mythic: [e("12%", 5, "rgb(255 77 109 / 0.85)", 4.6, 0), e("30%", 4, "rgb(255 159 28 / 0.85)", 5.4, 1.2), e("50%", 6, "rgb(74 222 128 / 0.8)", 5, 2.2), e("68%", 4, "rgb(34 211 238 / 0.85)", 5.8, 3), e("86%", 5, "rgb(168 85 247 / 0.85)", 4.9, 3.8), e("40%", 3, "rgb(255 230 109 / 0.9)", 6.2, 4.4)]
  };

function yr(t) {
  return tr[t]
}
var nr = p("<span> </span>");

function fr(t, n) {
  y(n, !0);
  let r = a(n, "variant", 3, "solid"),
    o = a(n, "paused", 3, !1),
    c = a(n, "class", 3, "");
  var i = nr();
  let u;
  var s = g(i, !0);
  b(i), f(_ => {
    u = M(i, 1, `tier-badge tier-badge--${r()??""} tier--${n.tier??""} ${c()??""}`, null, u, {
      "tier-badge--paused": o()
    }), d(s, _)
  }, [() => n.label ?? rr(n.tier)]), l(t, i), h()
}
export {
  X as R, fr as T, _r as a, yr as b, sr as c, $ as i, rr as t
};