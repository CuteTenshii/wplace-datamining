import {
  Et as e,
  G as t,
  Jt as n,
  O as r,
  Y as i,
  Yt as a,
  Z as o,
  a as s,
  nn as c,
  o as l,
  vt as u,
  wt as d,
  x as f,
  y as p
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  t as m
} from "./Dtz7tqQe.js";
var h = new Set([`$$slots`, `$$events`, `$$legacy`, `hasText`, `size`]),
  g = o(`<span>wplace</span>`),
  _ = o(`<div><img alt="Wplace logo"/> <!></div>`);

function v(o, v) {
  a(v, !0);
  let y = s(v, `size`, 3, `default`),
    b = l(v, h);
  var x = _();
  p(x, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${v.class??``}`
  }));
  var S = d(x);
  let C;
  var w = e(S, 2),
    T = e => {
      var t = g();
      let n;
      u(() => n = r(t, 1, `text-base-content font-pixel`, null, n, {
        "text-4xl": y() === "default",
        "text-5xl": y() === `lg` || y() === `medium`
      })), i(e, t)
    };
  t(w, e => {
    v.hasText && e(T)
  }), c(x), u(() => {
    C = r(S, 1, `pixelated h-auto shrink-0`, null, C, {
      "w-4": y() === `small`,
      "w-10": y() === "default",
      "w-16": y() === `medium`,
      "w-20": y() === `lg`
    }), f(S, `src`, m)
  }), i(o, x), n()
}
export {
  v as t
};