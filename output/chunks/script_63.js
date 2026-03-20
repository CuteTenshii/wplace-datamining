import "./B6L2Wv0c.js";
import {
  p as m,
  t as d,
  a as n,
  b as u,
  c as f,
  d as v,
  s as _,
  r as w
} from "./CqOPxJme.js";
import {
  i as h
} from "./Drv-8na6.js";
import {
  d as x,
  a as c,
  s as E
} from "./BxG0geMD.js";
import {
  p as y,
  r as S
} from "./DZyy70sN.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "cacd889a-2fc2-4da8-b582-ba16071aa927", a._sentryDebugIdIdentifier = "sentry-dbid-cacd889a-2fc2-4da8-b582-ba16071aa927")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = f("<span>wplace</span>"),
  R = f('<div><img alt="Wplace logo"/> <!></div>');

function D(a, e) {
  m(e, !0);
  let t = y(e, "size", 3, "default"),
    p = S(e, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${e.class??""}`
  }));
  var l = v(s);
  let o;
  var b = _(l, 2);
  {
    var g = A => {
      var r = L();
      let i;
      d(() => i = c(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), n(A, r)
    };
    h(b, A => {
      e.hasText && A(g)
    })
  }
  w(s), d(() => {
    o = c(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), n(a, s), u()
}
export {
  D as L
};