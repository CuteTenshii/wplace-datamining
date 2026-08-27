import "./Bzak7iHL.js";
import {
  l as h,
  f as g,
  a as o,
  w as e
} from "./D5GL_E7i.js";
import {
  i as n
} from "./unjGrhDm.js";
import {
  e as l
} from "./Ce1mtF2R.js";
import {
  r as w
} from "./LT-XNHCk.js";
var c = new Set(["$$slots", "$$events", "$$legacy", "filled"]),
  _ = e('<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"></path></svg>'),
  d = e('<svg><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"></path></svg>');

function B(i, v) {
  let s = w(v, c);
  var a = h(),
    f = g(a);
  {
    var m = r => {
        var t = _();
        l(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), o(r, t)
      },
      p = r => {
        var t = d();
        l(t, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), o(r, t)
      };
    n(f, r => {
      v.filled ? r(m) : r(p, -1)
    })
  }
  o(i, a)
}
export {
  B as F
};