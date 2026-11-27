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
  r as u
} from "./DduSK_CN.js";
var d = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  f = s(`<svg><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Z"></path></svg>`),
  p = s(`<svg><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z"></path></svg>`),
  m = s(`<svg><path d="M20 20H4v-2h16v2Zm0-4H4v-2h16v2ZM4 14H2V6h2v8Zm18 0h-2V6h2v8Zm-2-8H4V4h16v2Z"></path></svg>`);

function h(s, h) {
  c(h, !0);
  let g = u(),
    _ = n(h, `filled`, 3, !1),
    v = o(h, d);
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
    };
  t(b, e => {
    g.standard ? e(x) : e(S, -1)
  }), i(s, y), r()
}
export {
  h as t
};