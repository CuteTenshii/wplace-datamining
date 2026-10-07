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
var u = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  d = e(`<svg><path d="M160-160v-100.77l527.23-527.77q6.15-5.48 13.57-8.47 7.43-2.99 15.49-2.99t15.62 2.54q7.55 2.54 13.94 9.15l42.69 42.93q6.61 6.38 9.04 14 2.42 7.63 2.42 15.25 0 8.13-2.74 15.56-2.74 7.42-8.72 13.57L260.77-160H160Zm540.15-496.46L760-715.54 715.54-760l-59.08 59.85 43.69 43.69Z"></path></svg>`),
  f = e(`<svg><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>`),
  p = e(`<svg><path d="M14 10h2v4h-2v2h-2v2h-2v2H8v2H2v-6h2v-2h2v-2h2v-2h2V8h4v2Zm4-6h2v2h2v2h-2v2h-4V8h-2V4h2V2h2v2Z"></path></svg>`),
  m = e(`<svg><path d="M4 20h4v2H2v-6h2v4Zm6 0H8v-2h2v2Zm2-2h-2v-2h2v2Zm-6-2H4v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2H6v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2H8v-2h2v2Zm8 0h-2v-2h2v2Zm-6-2h-2V8h2v2Zm4 0h-2V8h2v2Zm4 0h-2V8h2v2Zm-6-2h-2V6h2v2Zm8 0h-2V6h2v2Zm-6-2h-2V4h2v2Zm4 0h-2V4h2v2Zm-2-2h-2V2h2v2Z"></path></svg>`);

function h(e, h) {
  o(h, !0);
  let g = s(h, u);
  var _ = a(),
    v = t(_),
    y = e => {
      var i = a(),
        o = t(i),
        s = e => {
          var t = d();
          c(t, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...g
          })), r(e, t)
        },
        l = e => {
          var t = f();
          c(t, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...g
          })), r(e, t)
        };
      n(o, e => {
        h.filled ? e(s) : e(l, -1)
      }), r(e, i)
    },
    b = e => {
      var t = p();
      c(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...g
      })), r(e, t)
    },
    x = e => {
      var t = m();
      c(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...g
      })), r(e, t)
    };
  n(v, e => {
    l.standard ? e(y) : h.filled ? e(b, 1) : e(x, -1)
  }), r(e, _), i()
}
export {
  h as t
};