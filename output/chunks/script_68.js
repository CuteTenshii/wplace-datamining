import "./Bzak7iHL.js";
import {
  p as u,
  t as i,
  a as m,
  b as v,
  c as p,
  d as x,
  s as B,
  r as h
} from "./C21-Odj5.js";
import {
  i as L
} from "./CHICDTuh.js";
import {
  d as Q,
  a as c,
  s as S
} from "./BO7gtcmY.js";
import {
  p as _,
  r as b
} from "./C7i991D2.js";
const w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var R = p("<span>wplace</span>"),
  k = p('<div><img alt="Wplace logo"/> <!></div>');

function Y(n, t) {
  u(t, !0);
  let a = _(t, "size", 3, "default"),
    f = b(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = k();
  Q(s, () => ({
    ...f,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var e = x(s);
  let l;
  var d = B(e, 2);
  {
    var g = A => {
      var o = R();
      let r;
      i(() => r = c(o, 1, "text-base-content font-pixel", null, r, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), m(A, o)
    };
    L(d, A => {
      t.hasText && A(g)
    })
  }
  h(s), i(() => {
    l = c(e, 1, "pixelated h-auto shrink-0", null, l, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), S(e, "src", w)
  }), m(n, s), v()
}
export {
  Y as L, w as l
};