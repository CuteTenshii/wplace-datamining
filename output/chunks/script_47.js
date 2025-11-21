import "./-859Ysne.js";
import {
  p as u,
  f as c,
  t as n,
  b as A,
  c as m,
  d as v,
  s as y,
  r as _
} from "./DFT4Ffb_.js";
import {
  i as h
} from "./Bnv7U9XH.js";
import {
  d as w,
  a as r,
  s as x
} from "./BZtYJdDO.js";
import {
  p as E,
  r as T
} from "./CFijfUr5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52f7dd52d370e3cd3a68b7bd4fba1dfc255f8526"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fbde751f-b386-4641-91ee-bd50154486ef", e._sentryDebugIdIdentifier = "sentry-dbid-fbde751f-b386-4641-91ee-bd50154486ef")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function z(e, t) {
  u(t, !0);
  let s = E(t, "size", 3, "default"),
    b = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var a = L();
  w(a, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = v(a);
  let o;
  var p = y(l, 2);
  {
    var g = i => {
      var d = B();
      let f;
      n(() => f = r(d, 1, "text-base-content font-pixel", null, f, {
        "text-4xl": s() === "default",
        "text-5xl": s() === "lg" || s() === "medium"
      })), A(i, d)
    };
    h(p, i => {
      t.hasText && i(g)
    })
  }
  _(a), n(() => {
    o = r(l, 1, "pixelated", null, o, {
      "size-10": s() === "default",
      "size-16": s() === "medium",
      "size-20": s() === "lg"
    }), x(l, "src", S)
  }), A(e, a), m()
}
export {
  z as L
};