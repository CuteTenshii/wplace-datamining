import {
  $ as e,
  Dt as t,
  G as n,
  X as r,
  Xt as i,
  Z as a,
  Zt as o,
  a as s,
  o as c,
  y as l
} from "./D2z8HFb7.js";
import "./B8UK1oE5.js";
import {
  t as u
} from "./Da1b2czT.js";
var d = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  f = e(`<svg><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z"></path></svg>`),
  p = e(`<svg><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"></path></svg>`),
  m = e(`<svg><path d="M9 22H6v-3h3v3Zm11 0h-3v-3h3v3ZM6 6h16v7h-2v3h-2v2H8v-2H6v-3H4V4H2V2h4v4Z"></path></svg>`),
  h = e(`<svg><path d="M9 22H6v-3h3v3Zm11 0h-3v-3h3v3Zm-2-4H8v-2h10v2ZM8 16H6v-4h2v4Zm12 0h-2v-4h2v4ZM6 6h16v6h-2V8H6v4H4V4H2V2h4v4Z"></path></svg>`);

function g(e, g) {
  o(g, !0);
  let _ = s(g, `filled`, 3, !1),
    v = c(g, d);
  var y = a(),
    b = t(y),
    x = e => {
      var i = a(),
        o = t(i),
        s = e => {
          var t = f();
          l(t, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...v
          })), r(e, t)
        },
        c = e => {
          var t = p();
          l(t, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...v
          })), r(e, t)
        };
      n(o, e => {
        _() ? e(s) : e(c, -1)
      }), r(e, i)
    },
    S = e => {
      var t = m();
      l(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...v
      })), r(e, t)
    },
    C = e => {
      var t = h();
      l(t, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...v
      })), r(e, t)
    };
  n(b, e => {
    u.standard ? e(x) : _() ? e(S, 1) : e(C, -1)
  }), r(e, y), i()
}
export {
  g as t
};