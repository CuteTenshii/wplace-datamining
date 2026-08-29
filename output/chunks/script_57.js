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
  c = t(`<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Z"></path></svg>`),
  l = t(`<svg><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path></svg>`);

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