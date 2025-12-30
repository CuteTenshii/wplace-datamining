import "./B4ChKoOX.js";
import {
  p as g,
  f as c,
  t as f,
  b as A,
  c as m,
  s as v,
  d as w,
  r as y
} from "./I4j7of_K.js";
import {
  i as h
} from "./DfRO1b1n.js";
import {
  b as _,
  a as r,
  s as x
} from "./BhOu8MeW.js";
import {
  p as E,
  r as T
} from "./GI-gjqpA.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
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
  g(t, !0);
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
    var b = o => {
      var i = B();
      let n;
      f(() => n = r(i, 1, "text-base-content font-pixel", null, n, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), A(o, i)
    };
    h(u, o => {
      t.hasText && o(b)
    })
  }
  y(s), f(() => {
    d = r(l, 1, "pixelated h-auto shrink-0", null, d, {
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