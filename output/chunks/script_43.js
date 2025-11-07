import "./BecEsbZg.js";
import {
  p as m,
  f as c,
  t as n,
  b as A,
  c as v,
  d as y,
  s as _,
  r as h
} from "./BxgNydnk.js";
import {
  i as w
} from "./vtVB1QN9.js";
import {
  d as x,
  a as r,
  s as E
} from "./B8ikJ4tO.js";
import {
  p as T,
  r as S
} from "./DYVs8bcP.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "593fad81c7773faec9a14f5284420d643abf8801"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cff6ca0f-68d0-469e-af50-e6ab13d98413", e._sentryDebugIdIdentifier = "sentry-dbid-cff6ca0f-68d0-469e-af50-e6ab13d98413")
  })()
} catch {}
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  m(a, !0);
  let t = T(a, "size", 3, "default"),
    p = S(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var l = R();
  x(l, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var i = y(l);
  let o;
  var g = _(i, 2);
  {
    var u = s => {
      var f = L();
      let d;
      n(b => d = r(f, 1, "text-base-content font-pixel", null, d, b), [() => ({
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })]), A(s, f)
    };
    w(g, s => {
      a.hasText && s(u)
    })
  }
  h(l), n(s => {
    o = r(i, 1, "pixelated", null, o, s), E(i, "src", B)
  }, [() => ({
    "size-10": t() === "default",
    "size-16": t() === "medium",
    "size-20": t() === "lg"
  })]), A(e, l), v()
}
export {
  D as L
};