import {
  $ as e,
  Dt as t,
  G as n,
  X as r,
  Xt as i,
  Z as a,
  Zt as o,
  o as s,
  y as c
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as l
} from "./d_pK3fN6.js";
var u = new Set([`$$slots`, `$$events`, `$$legacy`]),
  d = e(`<svg><path d="M8 5v14l11-7z"></path></svg>`),
  f = e(`<svg><path d="M9 5h2v2H9v10h2v2H9v2H7V3h2v2Zm4 12h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-2-2h-2V9h2v2Zm-2-2h-2V7h2v2Z"></path></svg>`);

function p(e, p) {
  o(p, !0);
  let m = s(p, u);
  var h = a(),
    g = t(h),
    _ = e => {
      var t = d();
      c(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...m
      })), r(e, t)
    },
    v = e => {
      var t = f();
      c(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...m
      })), r(e, t)
    };
  n(g, e => {
    l.standard ? e(_) : e(v, -1)
  }), r(e, h), i()
}
export {
  p as t
};