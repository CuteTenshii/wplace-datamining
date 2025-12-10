import "./DDksRaGi.js";
import {
  p as g,
  f as c,
  t as A,
  b as r,
  c as m,
  s as v,
  d as w,
  r as y
} from "./DpwlbZC_.js";
import {
  i as h
} from "./QzNUKUsX.js";
import {
  b as _,
  a as f,
  s as x
} from "./DrUPYO-B.js";
import {
  p as E,
  r as T
} from "./hE3dN46X.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2d93caab31ad43e5d9e57c08634e0a6280bfa30c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7b56e66e-0dcd-4d0a-a6d5-79840b1778a3", e._sentryDebugIdIdentifier = "sentry-dbid-7b56e66e-0dcd-4d0a-a6d5-79840b1778a3")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  g(a, !0);
  let t = E(a, "size", 3, "default"),
    p = T(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = w(s);
  let d;
  var u = v(l, 2);
  {
    var b = o => {
      var i = B();
      let n;
      A(() => n = f(i, 1, "text-base-content font-pixel", null, n, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), r(o, i)
    };
    h(u, o => {
      a.hasText && o(b)
    })
  }
  y(s), A(() => {
    d = f(l, 1, "pixelated h-auto shrink-0", null, d, {
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