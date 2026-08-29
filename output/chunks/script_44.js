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
  c = t(`<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>`),
  l = t(`<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>`);

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