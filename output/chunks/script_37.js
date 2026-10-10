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
} from "./R7y8S9hK.js";
var u = new Set([`$$slots`, `$$events`, `$$legacy`, `filled`]),
  d = e(`<svg><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"></path></svg>`),
  f = e(`<svg><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>`),
  p = e(`<svg><path d="M13 3h2v4h8v4h-2v2h-2v3h2v6h-5v-2h-2v-2h-4v2H8v2H3v-6h2v-3H3v-2H1V7h8V3h2V1h2v2Z"></path></svg>`),
  m = e(`<svg><path d="M5 20h3v2H3v-6h2v4Zm16 2h-5v-2h3v-4h2v6Zm-11-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-2-2h-4v-2h4v2Zm-7-2H5v-3h2v3Zm12 0h-2v-3h2v3ZM5 13H3v-2h2v2Zm16 0h-2v-2h2v2ZM9 9H3v2H1V7h8v2Zm14 2h-2V9h-6V7h8v4ZM11 7H9V3h2v4Zm4 0h-2V3h2v4Zm-2-4h-2V1h2v2Z"></path></svg>`);

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