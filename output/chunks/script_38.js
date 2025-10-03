import "./bMPyssaj.js";
import {
  p as m,
  f as c,
  t as A,
  b as f,
  c as v,
  d as y,
  s as _,
  r as h
} from "./ByX6hzNF.js";
import {
  p as w,
  i as x,
  r as E
} from "./DE4J66Ju.js";
import {
  b as T,
  a as r,
  s as S
} from "./BjAsoSK5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "271525ca33b9062741a3aa9359d1b5202c5b5a4b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bfaa257f-561a-4221-9d82-ad8618895a89", e._sentryDebugIdIdentifier = "sentry-dbid-bfaa257f-561a-4221-9d82-ad8618895a89")
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
      let d;
      A(u => d = r(n, 1, "text-base-content font-pixel", null, d, u), [() => ({
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })]), f(s, n)
    };
    x(g, s => {
      a.hasText && s(p)
    })
  }
  h(l), A(s => {
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