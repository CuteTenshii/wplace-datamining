import "./DjrL1dN2.js";
import {
  p as m,
  f as c,
  t as n,
  b as A,
  c as v,
  d as y,
  s as _,
  r as h
} from "./B2p_ornx.js";
import {
  i as w
} from "./D1SyD4Uo.js";
import {
  d as x,
  a as r,
  s as E
} from "./fcUCCNMH.js";
import {
  p as T,
  r as S
} from "./BJ6BdknY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7467695e43643d993d60a0d9c62083c1cee57cdf"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cff6ca0f-68d0-469e-af50-e6ab13d98413", e._sentryDebugIdIdentifier = "sentry-dbid-cff6ca0f-68d0-469e-af50-e6ab13d98413")
  })()
} catch {}
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  m(t, !0);
  let a = T(t, "size", 3, "default"),
    p = S(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var l = R();
  x(l, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var i = y(l);
  let o;
  var g = _(i, 2);
  {
    var u = s => {
      var d = L();
      let f;
      n(b => f = r(d, 1, "text-base-content font-pixel", null, f, b), [() => ({
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })]), A(s, d)
    };
    w(g, s => {
      t.hasText && s(u)
    })
  }
  h(l), n(s => {
    o = r(i, 1, "pixelated", null, o, s), E(i, "src", B)
  }, [() => ({
    "size-10": a() === "default",
    "size-16": a() === "medium",
    "size-20": a() === "lg"
  })]), A(e, l), v()
}
export {
  D as L
};