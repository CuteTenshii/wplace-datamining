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
  d = e(`<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>`),
  f = e(`<svg><path d="M19 21H5v-2h14v2ZM5 19H3v-4h2v4Zm16 0h-2v-4h2v4Zm-8-8h4v2h-2v2h-2v2h-2v-2H9v-2H7v-2h4V3h2v8Z"></path></svg>`);

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