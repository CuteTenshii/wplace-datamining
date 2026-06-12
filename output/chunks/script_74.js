import "./Bzak7iHL.js";
import {
  p as x,
  t as m,
  a as p,
  b as g,
  c as f,
  d as _,
  s as h,
  r as b
} from "./CV6xI6o5.js";
import {
  i as w
} from "./iywslKou.js";
import {
  d as z,
  a as c,
  s as k
} from "./rONmwD0j.js";
import {
  p as L,
  r as T
} from "./BQ880tYw.js";
import {
  l as y
} from "./B_Oz03f8.js";
var S = new Set(["$$slots", "$$events", "$$legacy", "hasText", "size"]),
  U = f("<span>wplace</span>"),
  W = f('<div><img alt="Wplace logo"/> <!></div>');

function E(n, t) {
  x(t, !0);
  let e = L(t, "size", 3, "default"),
    d = T(t, S);
  var a = W();
  z(a, () => ({
    ...d,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var s = _(a);
  let r;
  var u = h(s, 2);
  {
    var v = l => {
      var o = U();
      let i;
      m(() => i = c(o, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": e() === "default",
        "text-5xl": e() === "lg" || e() === "medium"
      })), p(l, o)
    };
    w(u, l => {
      t.hasText && l(v)
    })
  }
  b(a), m(() => {
    r = c(s, 1, "pixelated h-auto shrink-0", null, r, {
      "w-4": e() === "small",
      "w-10": e() === "default",
      "w-16": e() === "medium",
      "w-20": e() === "lg"
    }), k(s, "src", y)
  }), p(n, a), g()
}
export {
  E as L
};