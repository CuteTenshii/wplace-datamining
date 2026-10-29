import {
  C as e,
  Y as t,
  a as n,
  en as r,
  et as i,
  jt as a,
  o,
  rt as s,
  tn as c,
  tt as l
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  t as u
} from "./BPzKxQPM.js";
var d = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  f = s(`<svg><path d="M80-120v-480h220v480H80Zm290 0v-720h220v720H370Zm290 0v-400h220v400H660Z"></path></svg>`),
  p = s(`<svg><path d="M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z"></path></svg>`),
  m = s(`<svg><path d="M7 21H2V11H4V9H7V21ZM13 5H15V21H9V5H11V3H13V5ZM20 13H22V21H17V11H20V13Z"></path></svg>`),
  h = s(`<svg><path d="M10 19H14V5H16V11H20V13H16V19H20V13H22V21H2V11H4V19H8V11H4V9H8V5H10V19ZM14 5H10V3H14V5Z"></path></svg>`);

function g(s, g) {
  c(g, !0);
  let _ = n(g, `filled`, 3, !1),
    v = o(g, d);
  var y = l(),
    b = a(y),
    x = n => {
      var r = l(),
        o = a(r),
        s = t => {
          var n = f();
          e(n, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...v
          })), i(t, n)
        },
        c = t => {
          var n = p();
          e(n, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...v
          })), i(t, n)
        };
      t(o, e => {
        _() ? e(s) : e(c, -1)
      }), i(n, r)
    },
    S = t => {
      var n = m();
      e(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...v
      })), i(t, n)
    },
    C = t => {
      var n = h();
      e(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...v
      })), i(t, n)
    };
  t(b, e => {
    u.standard ? e(x) : _() ? e(S, 1) : e(C, -1)
  }), i(s, y), r()
}
export {
  g as t
};