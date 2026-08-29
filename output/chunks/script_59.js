import {
  Jt as e,
  O as t,
  Y as n,
  Yt as r,
  Z as i,
  a,
  nn as o,
  q as s,
  vt as c,
  wt as l
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as u
} from "./CBvy2Co4.js";
var d = [`common`, `uncommon`, `rare`, `epic`, `legendary`, `mythic`],
  f = {
    common: u.rarity_common,
    uncommon: u.rarity_uncommon,
    rare: u.rarity_rare,
    epic: u.rarity_epic,
    legendary: u.rarity_legendary,
    mythic: u.rarity_mythic
  };

function p(e) {
  return d.includes(e)
}

function m(e) {
  return f[e]()
}

function h(e) {
  return `tier--${e}`
}

function g(e) {
  return e && p(e) ? e : `common`
}
var _ = (e, t, n, r, i) => ({
    x: e,
    size: t,
    color: n,
    duration: r,
    delay: i
  }),
  v = {
    common: [],
    uncommon: [],
    rare: [],
    epic: [_(`20%`, 5, `rgb(168 85 247 / 0.8)`, 5, 0), _(`55%`, 6, `rgb(124 58 237 / 0.7)`, 6, 1.8), _(`80%`, 5, `rgb(196 152 255 / 0.8)`, 5.5, 3.2)],
    legendary: [_(`15%`, 5, `rgb(251 191 36 / 0.85)`, 4.8, 0), _(`42%`, 6, `rgb(245 158 11 / 0.75)`, 6, 1.4), _(`68%`, 4, `rgb(255 223 142 / 0.9)`, 5.2, 2.6), _(`86%`, 5, `rgb(251 191 36 / 0.8)`, 5.6, 3.6)],
    mythic: [_(`12%`, 5, `rgb(255 77 109 / 0.85)`, 4.6, 0), _(`30%`, 4, `rgb(255 159 28 / 0.85)`, 5.4, 1.2), _(`50%`, 6, `rgb(74 222 128 / 0.8)`, 5, 2.2), _(`68%`, 4, `rgb(34 211 238 / 0.85)`, 5.8, 3), _(`86%`, 5, `rgb(168 85 247 / 0.85)`, 4.9, 3.8), _(`40%`, 3, `rgb(255 230 109 / 0.9)`, 6.2, 4.4)]
  };

function y(e) {
  return v[e]
}
var b = i(`<span> </span>`);

function x(i, u) {
  r(u, !0);
  let d = a(u, `variant`, 3, `solid`),
    f = a(u, `paused`, 3, !1),
    p = a(u, `class`, 3, ``);
  var h = b();
  let g;
  var _ = l(h, !0);
  o(h), c(e => {
    g = t(h, 1, `tier-badge tier-badge--${d()??``} tier--${u.tier??``} ${p()??``}`, null, g, {
      "tier-badge--paused": f()
    }), s(_, e)
  }, [() => u.label ?? m(u.tier)]), n(i, h), e()
}
export {
  m as a, h as i, d as n, y as o, p as r, g as s, x as t
};