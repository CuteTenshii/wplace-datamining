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
  d = e(`<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>`),
  f = e(`<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>`),
  p = e(`<svg><path d="M15 6h2v2h2v2h2v2h-2v2h-4v-2h-2v2h2v4h6v2H7v-2H5v-2H3v-2h2v-2h2v-2h4v2h2v-2h-2V6h2V4h2v2Z"></path></svg>`),
  m = e(`<svg><path d="M15 18h6v2H7v-2h6v-2h2v2Zm-8 0H5v-2h2v2Zm-2-2H3v-2h2v2Zm12 0h-2v-2h2v2ZM7 14H5v-2h2v2Zm8 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM9 12H7v-2h2v2Zm4 0h-2v-2h2v2Zm8 0h-2v-2h2v2Zm-10-2H9V8h2v2Zm8 0h-2V8h2v2Zm-6-2h-2V6h2v2Zm4 0h-2V6h2v2Zm-2-2h-2V4h2v2Z"></path></svg>`);

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