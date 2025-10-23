import "./BHw0Tm2U.js";
import {
  p as m,
  f as c,
  t as d,
  b as f,
  c as v,
  d as y,
  s as _,
  r as h
} from "./Vo-uc5TQ.js";
import {
  p as w,
  i as x,
  r as E
} from "./CZ6Bqpor.js";
import {
  d as T,
  a as r,
  s as S
} from "./p0rnLffB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "308c01f8-08ca-4e84-8fe2-d438f57c8ea0", e._sentryDebugIdIdentifier = "sentry-dbid-308c01f8-08ca-4e84-8fe2-d438f57c8ea0")
  })()
} catch {}
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function z(e, a) {
  m(a, !0);
  let t = w(a, "size", 3, "default"),
    b = E(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var l = R();
  T(l, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var i = y(l);
  let o;
  var g = _(i, 2);
  {
    var p = s => {
      var n = L();
      let A;
      d(u => A = r(n, 1, "text-base-content font-pixel", null, A, u), [() => ({
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })]), f(s, n)
    };
    x(g, s => {
      a.hasText && s(p)
    })
  }
  h(l), d(s => {
    o = r(i, 1, "pixelated", null, o, s), S(i, "src", B)
  }, [() => ({
    "size-10": t() === "default",
    "size-16": t() === "medium",
    "size-20": t() === "lg"
  })]), f(e, l), v()
}
export {
  z as L
};