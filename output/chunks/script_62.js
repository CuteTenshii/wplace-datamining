import {
  G as e,
  Q as t,
  Tt as n,
  X as r,
  Y as i,
  o as a,
  y as o
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
var s = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  c = t(`<svg><path d="M160-160v-100.77l527.23-527.77q6.15-5.48 13.57-8.47 7.43-2.99 15.49-2.99t15.62 2.54q7.55 2.54 13.94 9.15l42.69 42.93q6.61 6.38 9.04 14 2.42 7.63 2.42 15.25 0 8.13-2.74 15.56-2.74 7.42-8.72 13.57L260.77-160H160Zm540.15-496.46L760-715.54 715.54-760l-59.08 59.85 43.69 43.69Z"></path></svg>`),
  l = t(`<svg><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>`);

function u(t, u) {
  let d = a(u, s);
  var f = r(),
    p = n(f),
    m = e => {
      var t = c();
      o(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...d
      })), i(e, t)
    },
    h = e => {
      var t = l();
      o(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 -960 960 960`,
        fill: `currentColor`,
        ...d
      })), i(e, t)
    };
  e(p, e => {
    u.filled ? e(m) : e(h, -1)
  }), i(t, f)
}
export {
  u as t
};