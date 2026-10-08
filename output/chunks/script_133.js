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
} from "./njokBD2q.js";
var d = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  f = e(`<svg><path d="M80-120v-480h220v480H80Zm290 0v-720h220v720H370Zm290 0v-400h220v400H660Z"></path></svg>`),
  p = e(`<svg><path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z"></path></svg>`),
  m = e(`<svg><path d="M7 21H2V11H4V9H7V21ZM13 5H15V21H9V5H11V3H13V5ZM20 13H22V21H17V11H20V13Z"></path></svg>`),
  h = e(`<svg><path d="M10 19H14V5H16V11H20V13H16V19H20V13H22V21H2V11H4V19H8V11H4V9H8V5H10V19ZM14 5H10V3H14V5Z"></path></svg>`);

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