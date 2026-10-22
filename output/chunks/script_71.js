import {
  $ as e,
  Et as t,
  G as n,
  X as r,
  Xt as i,
  Yt as a,
  Z as o,
  o as s,
  y as c
} from "./R3px7NU1.js";
import "./B8UK1oE5.js";
import {
  t as l
} from "./Ur3lDrik.js";
var u = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  d = e(`<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"></path></svg>`),
  f = e(`<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"></path></svg>`),
  p = e(`<svg><path d="M6 4h14v2h-2v2h-2v2h2v2h2v2H6v8H4V2h2v2Z"></path></svg>`),
  m = e(`<svg><path d="M6 4h14v2h-2v2h-2V6H6v6h10v-2h2v2h2v2H6v8H4V2h2v2Zm10 6h-2V8h2v2Z"></path></svg>`);

function h(e, h) {
  i(h, !0);
  let g = s(h, u);
  var _ = o(),
    v = t(_),
    y = e => {
      var i = o(),
        a = t(i),
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
      n(a, e => {
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
  }), r(e, _), a()
}
export {
  h as t
};