import "./Dzr0zEgr.js";
import {
  p as b,
  f as c,
  t as A,
  b as f,
  c as m,
  s as v,
  d as w,
  r as y
} from "./DcuED2r1.js";
import {
  i as h
} from "./C11X_6e6.js";
import {
  b as _,
  a as r,
  s as x
} from "./DqnGd6Ri.js";
import {
  p as E,
  r as T
} from "./CVvyswV1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "50edf639-0958-4537-a6fb-8aa120ed6ecb", e._sentryDebugIdIdentifier = "sentry-dbid-50edf639-0958-4537-a6fb-8aa120ed6ecb")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  b(a, !0);
  let t = E(a, "size", 3, "default"),
    p = T(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = w(s);
  let i;
  var u = v(l, 2);
  {
    var g = o => {
      var n = B();
      let d;
      A(() => d = r(n, 1, "text-base-content font-pixel", null, d, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), f(o, n)
    };
    h(u, o => {
      a.hasText && o(g)
    })
  }
  y(s), A(() => {
    i = r(l, 1, "pixelated h-auto shrink-0", null, i, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), x(l, "src", S)
  }), f(e, s), m()
}
export {
  D as L
};