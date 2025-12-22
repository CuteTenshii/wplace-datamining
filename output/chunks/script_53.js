import "./DyTAnIvR.js";
import {
  p as b,
  f as c,
  t as A,
  b as f,
  c as m,
  s as v,
  d as w,
  r as y
} from "./DuPBYAm5.js";
import {
  i as h
} from "./P7-7hVJ2.js";
import {
  b as _,
  a as r,
  s as x
} from "./DWTMwUVX.js";
import {
  p as E,
  r as T
} from "./BKq0MFT9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f4e63ff6847082fed878819138982e523bd7482d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "913d6b3c-dc14-4dc9-9c25-a61edbc3f3e8", e._sentryDebugIdIdentifier = "sentry-dbid-913d6b3c-dc14-4dc9-9c25-a61edbc3f3e8")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  b(t, !0);
  let a = E(t, "size", 3, "default"),
    p = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = w(s);
  let d;
  var u = v(l, 2);
  {
    var g = o => {
      var i = B();
      let n;
      A(() => n = r(i, 1, "text-base-content font-pixel", null, n, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), f(o, i)
    };
    h(u, o => {
      t.hasText && o(g)
    })
  }
  y(s), A(() => {
    d = r(l, 1, "pixelated h-auto shrink-0", null, d, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), x(l, "src", S)
  }), f(e, s), m()
}
export {
  D as L
};