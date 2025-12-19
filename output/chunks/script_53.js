import "./DOoz6V9P.js";
import {
  p as g,
  f as b,
  t as A,
  b as r,
  c as m,
  s as v,
  d as w,
  r as y
} from "./DAiWoJQM.js";
import {
  i as h
} from "./B4cPJSse.js";
import {
  b as _,
  a as f,
  s as x
} from "./DexA-uuz.js";
import {
  p as E,
  r as T
} from "./BHI_t0iS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "718929eb34b39115ade64201f12b715208957752"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "661e7bf7-715f-4797-919b-d7dba827d8e1", e._sentryDebugIdIdentifier = "sentry-dbid-661e7bf7-715f-4797-919b-d7dba827d8e1")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = b("<span>wplace</span>"),
  L = b('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  g(t, !0);
  let a = E(t, "size", 3, "default"),
    c = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...c,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = w(s);
  let i;
  var p = v(l, 2);
  {
    var u = o => {
      var n = B();
      let d;
      A(() => d = f(n, 1, "text-base-content font-pixel", null, d, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), r(o, n)
    };
    h(p, o => {
      t.hasText && o(u)
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