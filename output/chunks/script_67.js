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
} from "./njokBD2q.js";
var u = new Set([`$$slots`, `$$events`, `$$legacy`]),
  d = e(`<svg><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"></path></svg>`),
  f = e(`<svg><path d="M18 22H6v-2h12v2ZM6 20H4V4h2v16Zm14 0h-2v-3h2v3ZM16 9h2v2h2v2h-2v2h-2v2h-2v-4H8v-2h6V7h2v2Zm4-2h-2V4h2v3Zm-2-3H6V2h12v2Z"></path></svg>`);

function p(e, p) {
  o(p, !0);
  let m = s(p, u);
  var h = a(),
    g = t(h),
    _ = e => {
      var t = d();
      c(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
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