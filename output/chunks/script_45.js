import "./D0khCE9p.js";
import {
  p as m,
  f as c,
  t as f,
  b as A,
  c as v,
  d as y,
  s as _,
  r as h
} from "./DEdiZ67Z.js";
import {
  i as w
} from "./DMpNbPuN.js";
import {
  d as x,
  a as r,
  s as E
} from "./BMo7aRVX.js";
import {
  p as T,
  r as S
} from "./Dm4bzwAH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "469a7b97473ab29d501541611648ac6bd4beba7b"
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
    b = S(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var l = R();
  x(l, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var i = y(l);
  let o;
  var p = _(i, 2);
  {
    var g = s => {
      var d = L();
      let n;
      f(u => n = r(d, 1, "text-base-content font-pixel", null, n, u), [() => ({
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })]), A(s, d)
    };
    w(p, s => {
      a.hasText && s(g)
    })
  }
  h(l), f(s => {
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