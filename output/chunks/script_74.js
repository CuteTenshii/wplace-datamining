import {
  C as e,
  Y as t,
  en as n,
  et as r,
  jt as i,
  o as a,
  rt as o,
  tn as s,
  tt as c
} from "./DXDHrD2o.js";
import "./B8UK1oE5.js";
import {
  t as l
} from "./BPzKxQPM.js";
var u = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  d = o(`<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"></path></svg>`),
  f = o(`<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"></path></svg>`),
  p = o(`<svg><path d="M6 4h14v2h-2v2h-2v2h2v2h2v2H6v8H4V2h2v2Z"></path></svg>`),
  m = o(`<svg><path d="M6 4h14v2h-2v2h-2V6H6v6h10v-2h2v2h2v2H6v8H4V2h2v2Zm10 6h-2V8h2v2Z"></path></svg>`);

function h(o, h) {
  s(h, !0);
  let g = a(h, u);
  var _ = c(),
    v = i(_),
    y = n => {
      var a = c(),
        o = i(a),
        s = t => {
          var n = d();
          e(n, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...g
          })), r(t, n)
        },
        l = t => {
          var n = f();
          e(n, () => ({
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 -960 960 960`,
            fill: `currentColor`,
            ...g
          })), r(t, n)
        };
      t(o, e => {
        h.filled ? e(s) : e(l, -1)
      }), r(n, a)
    },
    b = t => {
      var n = p();
      e(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...g
      })), r(t, n)
    },
    x = t => {
      var n = m();
      e(n, () => ({
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 24 24`,
        fill: `currentColor`,
        ...g
      })), r(t, n)
    };
  t(v, e => {
    l.standard ? e(y) : h.filled ? e(b, 1) : e(x, -1)
  }), r(o, _), n()
}
export {
  h as t
};