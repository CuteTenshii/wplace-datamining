import "./TMaGer5U.js";
import {
  p as m,
  f as c,
  t as f,
  b as A,
  c as v,
  d as y,
  s as _,
  r as h
} from "./CYjwBiB9.js";
import {
  p as w,
  i as x,
  r as E
} from "./C81l5NQq.js";
import {
  d as T,
  a as r,
  s as S
} from "./BWQzvvv8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "216ad21ec8568455da3c6d18d6f039f12382ac60"
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
    g = E(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var l = R();
  T(l, () => ({
    ...g,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var i = y(l);
  let o;
  var p = _(i, 2);
  {
    var u = s => {
      var d = L();
      let n;
      f(b => n = r(d, 1, "text-base-content font-pixel", null, n, b), [() => ({
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })]), A(s, d)
    };
    x(p, s => {
      a.hasText && s(u)
    })
  }
  h(l), f(s => {
    o = r(i, 1, "pixelated", null, o, s), S(i, "src", B)
  }, [() => ({
    "size-10": t() === "default",
    "size-16": t() === "medium",
    "size-20": t() === "lg"
  })]), A(e, l), v()
}
export {
  z as L
};