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
  d = e(`<svg><path d="M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm230-240L360-470l358-358q11-11 27.5-11.5T774-828l54 54q12 12 12 28t-12 28L470-360Z"></path></svg>`),
  f = e(`<svg><path d="M7 2h10v2H7zM5 4h2v10H5zm12-2h2v12h-2z"></path><path d="M13 2h2v6h-2zM9 2h2v4H9zm-4 8h14v2H5zm2 4h10v2H7zm2 2h2v4H9zm4 0h2v4h-2zm-4 4h6v2H9z"></path></svg>`);

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