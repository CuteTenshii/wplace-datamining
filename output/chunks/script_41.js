import "./CkQARuc4.js";
import {
  p as m,
  f as c,
  t as f,
  b as A,
  c as v,
  d as y,
  s as _,
  r as h
} from "./Ho0vwyOn.js";
import {
  p as w,
  i as x,
  r as E
} from "./Bay5xsAq.js";
import {
  d as T,
  a as r,
  s as S
} from "./CzhSNNLq.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a99f5b701b35c58895f1634e6901454a76d81d81"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "308c01f8-08ca-4e84-8fe2-d438f57c8ea0", e._sentryDebugIdIdentifier = "sentry-dbid-308c01f8-08ca-4e84-8fe2-d438f57c8ea0")
  })()
} catch {}
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function z(e, t) {
  m(t, !0);
  let a = w(t, "size", 3, "default"),
    g = E(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var l = R();
  T(l, () => ({
    ...g,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var i = y(l);
  let o;
  var p = _(i, 2);
  {
    var u = s => {
      var n = L();
      let d;
      f(b => d = r(n, 1, "text-base-content font-pixel", null, d, b), [() => ({
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })]), A(s, n)
    };
    x(p, s => {
      t.hasText && s(u)
    })
  }
  h(l), f(s => {
    o = r(i, 1, "pixelated", null, o, s), S(i, "src", B)
  }, [() => ({
    "size-10": a() === "default",
    "size-16": a() === "medium",
    "size-20": a() === "lg"
  })]), A(e, l), v()
}
export {
  z as L
};