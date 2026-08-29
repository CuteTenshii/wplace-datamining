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
  c = t(`<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"></path></svg>`),
  l = t(`<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"></path></svg>`);

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