import "./DrXF_xKF.js";
import {
  p as m,
  f as c,
  t as A,
  b as f,
  c as v,
  d as y,
  s as _,
  r as h
} from "./CJ1cckJE.js";
import {
  p as w,
  i as x,
  r as E
} from "./DarOcbRx.js";
import {
  b as T,
  a as r,
  s as S
} from "./CxPvPfNE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e3f70f7829e704b21f2ec68a0bb0b01d91efd9a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e2e3c675-d437-4068-ba86-d4e593f23ae2", e._sentryDebugIdIdentifier = "sentry-dbid-e2e3c675-d437-4068-ba86-d4e593f23ae2")
  })()
} catch {}
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function z(e, t) {
  m(t, !0);
  let a = w(t, "size", 3, "default"),
    b = E(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var l = R();
  T(l, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var i = y(l);
  let o;
  var g = _(i, 2);
  {
    var p = s => {
      var n = L();
      let d;
      A(u => d = r(n, 1, "text-base-content font-pixel", null, d, u), [() => ({
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })]), f(s, n)
    };
    x(g, s => {
      t.hasText && s(p)
    })
  }
  h(l), A(s => {
    o = r(i, 1, "pixelated", null, o, s), S(i, "src", B)
  }, [() => ({
    "size-10": a() === "default",
    "size-16": a() === "medium",
    "size-20": a() === "lg"
  })]), f(e, l), v()
}
export {
  z as L
};