import "./BWhDOONG.js";
import {
  p as m,
  f as c,
  t as d,
  b as r,
  c as v,
  d as y,
  s as _,
  r as h
} from "./o3Mx0h7z.js";
import {
  p as w,
  i as x,
  r as E
} from "./CKJw5tYJ.js";
import {
  b as T,
  a as f,
  s as S
} from "./DzT1gcd7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8664226c36b3dea53924eb4a5f34f4b7e9db6bc7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "32d6135c-3105-4044-9569-1bc076aa3438", e._sentryDebugIdIdentifier = "sentry-dbid-32d6135c-3105-4044-9569-1bc076aa3438")
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
      let A;
      d(u => A = f(n, 1, "text-base-content font-pixel", null, A, u), [() => ({
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })]), r(s, n)
    };
    x(g, s => {
      t.hasText && s(p)
    })
  }
  h(l), d(s => {
    o = f(i, 1, "pixelated", null, o, s), S(i, "src", B)
  }, [() => ({
    "size-10": a() === "default",
    "size-16": a() === "medium",
    "size-20": a() === "lg"
  })]), r(e, l), v()
}
export {
  z as L
};