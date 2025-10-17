import "./CIV-60i_.js";
import {
  p as m,
  f as c,
  t as A,
  b as f,
  c as v,
  d as y,
  s as _,
  r as h
} from "./DUWZzbWe.js";
import {
  p as w,
  i as x,
  r as E
} from "./D3IB6IMS.js";
import {
  d as T,
  a as r,
  s as S
} from "./BCmvehz2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ef007964-7d5d-4b3b-9b1c-439c3d4feb0a", e._sentryDebugIdIdentifier = "sentry-dbid-ef007964-7d5d-4b3b-9b1c-439c3d4feb0a")
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
  let d;
  var g = _(i, 2);
  {
    var p = s => {
      var o = L();
      let n;
      A(u => n = r(o, 1, "text-base-content font-pixel", null, n, u), [() => ({
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })]), f(s, o)
    };
    x(g, s => {
      t.hasText && s(p)
    })
  }
  h(l), A(s => {
    d = r(i, 1, "pixelated", null, d, s), S(i, "src", B)
  }, [() => ({
    "size-10": a() === "default",
    "size-16": a() === "medium",
    "size-20": a() === "lg"
  })]), f(e, l), v()
}
export {
  z as L
};