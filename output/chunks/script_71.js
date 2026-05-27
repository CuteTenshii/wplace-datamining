import "./Bzak7iHL.js";
import {
  p as x,
  t as m,
  a as p,
  b as g,
  c,
  d as _,
  s as h,
  r as b
} from "./Cky4CUzE.js";
import {
  i as w
} from "./7HE79MnC.js";
import {
  d as z,
  a as f,
  s as k
} from "./BYB6eTwl.js";
import {
  p as L,
  r as T
} from "./D5qy60-S.js";
import {
  l as y
} from "./B_Oz03f8.js";
var U = c("<span>wplace</span>"),
  W = c('<div><img alt="Wplace logo"/> <!></div>');

function E(n, t) {
  x(t, !0);
  let a = L(t, "size", 3, "default"),
    d = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = W();
  z(s, () => ({
    ...d,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var e = _(s);
  let r;
  var u = h(e, 2);
  {
    var v = l => {
      var o = U();
      let i;
      m(() => i = f(o, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), p(l, o)
    };
    w(u, l => {
      t.hasText && l(v)
    })
  }
  b(s), m(() => {
    r = f(e, 1, "pixelated h-auto shrink-0", null, r, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), k(e, "src", y)
  }), p(n, s), g()
}
export {
  E as L
};