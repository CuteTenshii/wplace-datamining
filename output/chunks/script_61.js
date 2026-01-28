import "./BmPxkmIj.js";
import {
  p as g,
  f as c,
  t as d,
  b as A,
  c as m,
  s as v,
  d as w,
  r as y
} from "./BBaHVBJx.js";
import {
  i as h
} from "./Bo9Xoflg.js";
import {
  f as _,
  a as r,
  s as x
} from "./YgU2As_C.js";
import {
  p as E,
  r as T
} from "./DntCU8c7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "92fecf6b-355f-4bbb-8d2c-75718e6a4266", e._sentryDebugIdIdentifier = "sentry-dbid-92fecf6b-355f-4bbb-8d2c-75718e6a4266")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  g(t, !0);
  let a = E(t, "size", 3, "default"),
    b = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = w(s);
  let f;
  var p = v(l, 2);
  {
    var u = o => {
      var i = B();
      let n;
      d(() => n = r(i, 1, "text-base-content font-pixel", null, n, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), A(o, i)
    };
    h(p, o => {
      t.hasText && o(u)
    })
  }
  y(s), d(() => {
    f = r(l, 1, "pixelated h-auto shrink-0", null, f, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), x(l, "src", S)
  }), A(e, s), m()
}
export {
  D as L
};