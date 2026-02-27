import "./DfSPqPjB.js";
import {
  p as g,
  f as c,
  t as f,
  b as A,
  c as m,
  s as v,
  d as w,
  r as y
} from "./BX08WKHH.js";
import {
  i as h
} from "./WtIPnxxX.js";
import {
  f as _,
  a as r,
  s as x
} from "./D1NSdIK5.js";
import {
  p as E,
  r as T
} from "./BdjyGa6-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6b2be768-6bb3-4341-98a5-f94cdfa9eca1", e._sentryDebugIdIdentifier = "sentry-dbid-6b2be768-6bb3-4341-98a5-f94cdfa9eca1")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  g(a, !0);
  let t = E(a, "size", 3, "default"),
    b = T(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = w(s);
  let i;
  var p = v(l, 2);
  {
    var u = o => {
      var n = B();
      let d;
      f(() => d = r(n, 1, "text-base-content font-pixel", null, d, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), A(o, n)
    };
    h(p, o => {
      a.hasText && o(u)
    })
  }
  y(s), f(() => {
    i = r(l, 1, "pixelated h-auto shrink-0", null, i, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), x(l, "src", S)
  }), A(e, s), m()
}
export {
  D as L
};