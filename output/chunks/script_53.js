import "./DQR1M6Or.js";
import {
  p as g,
  f as b,
  t as n,
  b as A,
  c as m,
  s as v,
  d as w,
  r as y
} from "./BdthSYuV.js";
import {
  i as h
} from "./CqpwyTww.js";
import {
  b as _,
  a as r,
  s as x
} from "./nqTt6Pp1.js";
import {
  p as E,
  r as T
} from "./DJaRQTNf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
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
      var d = B();
      let f;
      n(() => f = r(d, 1, "text-base-content font-pixel", null, f, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), A(o, d)
    };
    h(p, o => {
      t.hasText && o(u)
    })
  }
  y(s), n(() => {
    i = r(l, 1, "pixelated h-auto shrink-0", null, i, {
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