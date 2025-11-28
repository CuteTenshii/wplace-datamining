import "./JU6aB0Bx.js";
import {
  p as g,
  f as c,
  t as A,
  b as r,
  c as m,
  s as v,
  d as w,
  r as y
} from "./v-HkFxbH.js";
import {
  i as h
} from "./DeuQgwnx.js";
import {
  b as _,
  a as f,
  s as x
} from "./Y9YS3gQ4.js";
import {
  p as E,
  r as T
} from "./CpSk2z-g.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "55a4772558e3c5a852121d5e5bd7314ba7efe155"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "19ccd0ca-bf95-4e01-b240-31c5541d93c2", e._sentryDebugIdIdentifier = "sentry-dbid-19ccd0ca-bf95-4e01-b240-31c5541d93c2")
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
  let i;
  var u = v(l, 2);
  {
    var b = o => {
      var n = B();
      let d;
      A(() => d = f(n, 1, "text-base-content font-pixel", null, d, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), r(o, n)
    };
    h(u, o => {
      t.hasText && o(b)
    })
  }
  y(s), A(() => {
    i = f(l, 1, "pixelated h-auto shrink-0", null, i, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), x(l, "src", S)
  }), r(e, s), m()
}
export {
  D as L
};