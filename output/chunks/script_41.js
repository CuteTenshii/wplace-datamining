import "./B5oLh0nu.js";
import {
  p as m,
  f as c,
  t as f,
  b as d,
  c as v,
  d as y,
  s as _,
  r as h
} from "./BDq-HR17.js";
import {
  p as w,
  i as x,
  r as E
} from "./D2wtnjjb.js";
import {
  d as T,
  a as r,
  s as S
} from "./CLb4R4mm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0f5526c28af3fe231e905447f161f05590c76727"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b095bc9c-bb08-432d-9cca-c19674c8a6f5", e._sentryDebugIdIdentifier = "sentry-dbid-b095bc9c-bb08-432d-9cca-c19674c8a6f5")
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
      f(u => A = r(n, 1, "text-base-content font-pixel", null, A, u), [() => ({
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })]), d(s, n)
    };
    x(g, s => {
      t.hasText && s(p)
    })
  }
  h(l), f(s => {
    o = r(i, 1, "pixelated", null, o, s), S(i, "src", B)
  }, [() => ({
    "size-10": a() === "default",
    "size-16": a() === "medium",
    "size-20": a() === "lg"
  })]), d(e, l), v()
}
export {
  z as L
};