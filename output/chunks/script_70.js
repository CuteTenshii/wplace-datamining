import "./Bzak7iHL.js";
import {
  p as l,
  t as u,
  a as d,
  b as y,
  c as f,
  d as p,
  r as _
} from "./D5GL_E7i.js";
import {
  s as T
} from "./BATewRf7.js";
import {
  a as h
} from "./Ce1mtF2R.js";
import {
  p as m
} from "./LT-XNHCk.js";
import {
  m as a
} from "./XL5Wf48w.js";
const R = ["common", "uncommon", "rare", "epic", "legendary", "mythic"],
  v = {
    common: a.rarity_common,
    uncommon: a.rarity_uncommon,
    rare: a.rarity_rare,
    epic: a.rarity_epic,
    legendary: a.rarity_legendary,
    mythic: a.rarity_mythic
  };

function x(r) {
  return R.includes(r)
}

function E(r) {
  return v[r]()
}

function O(r) {
  return `tier--${r}`
}

function Y(r) {
  return r && x(r) ? r : "common"
}
const t = (r, e, n, o, s) => ({
    x: r,
    size: e,
    color: n,
    duration: o,
    delay: s
  }),
  I = {
    common: [],
    uncommon: [],
    rare: [],
    epic: [t("20%", 5, "rgb(168 85 247 / 0.8)", 5, 0), t("55%", 6, "rgb(124 58 237 / 0.7)", 6, 1.8), t("80%", 5, "rgb(196 152 255 / 0.8)", 5.5, 3.2)],
    legendary: [t("15%", 5, "rgb(251 191 36 / 0.85)", 4.8, 0), t("42%", 6, "rgb(245 158 11 / 0.75)", 6, 1.4), t("68%", 4, "rgb(255 223 142 / 0.9)", 5.2, 2.6), t("86%", 5, "rgb(251 191 36 / 0.8)", 5.6, 3.6)],
    mythic: [t("12%", 5, "rgb(255 77 109 / 0.85)", 4.6, 0), t("30%", 4, "rgb(255 159 28 / 0.85)", 5.4, 1.2), t("50%", 6, "rgb(74 222 128 / 0.8)", 5, 2.2), t("68%", 4, "rgb(34 211 238 / 0.85)", 5.8, 3), t("86%", 5, "rgb(168 85 247 / 0.85)", 4.9, 3.8), t("40%", 3, "rgb(255 230 109 / 0.9)", 6.2, 4.4)]
  };

function j(r) {
  return I[r]
}
var L = f("<span> </span>");

function k(r, e) {
  l(e, !0);
  let n = m(e, "variant", 3, "solid"),
    o = m(e, "paused", 3, !1),
    s = m(e, "class", 3, "");
  var i = L();
  let c;
  var b = p(i, !0);
  _(i), u(g => {
    c = h(i, 1, `tier-badge tier-badge--${n()??""} tier--${e.tier??""} ${s()??""}`, null, c, {
      "tier-badge--paused": o()
    }), T(b, g)
  }, [() => e.label ?? E(e.tier)]), d(r, i), y()
}
export {
  R,
  k as T,
  Y as a,
  j as b,
  O as c,
  x as i,
  E as t
};