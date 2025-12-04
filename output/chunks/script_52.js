import "./CAirFcp8.js";
import {
  p as b,
  f as c,
  t as A,
  b as r,
  c as m,
  s as v,
  d as w,
  r as y
} from "./BW4WXvX9.js";
import {
  i as h
} from "./C6ZS2tVt.js";
import {
  b as _,
  a as f,
  s as x
} from "./Dx8K2xEf.js";
import {
  p as E,
  r as T
} from "./YRRwmdc-.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ada152f6c93ea91d04a55442a56d263a5f091eaf"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "19ccd0ca-bf95-4e01-b240-31c5541d93c2", e._sentryDebugIdIdentifier = "sentry-dbid-19ccd0ca-bf95-4e01-b240-31c5541d93c2")
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
      A(() => d = f(n, 1, "text-base-content font-pixel", null, d, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), r(o, n)
    };
    h(u, o => {
      a.hasText && o(g)
    })
  }
  y(s), A(() => {
    i = f(l, 1, "pixelated h-auto shrink-0", null, i, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), x(l, "src", S)
  }), r(e, s), m()
}
export {
  D as L
};