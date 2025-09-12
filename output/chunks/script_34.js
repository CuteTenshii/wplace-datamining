import "./Bt4YEcbz.js";
import {
  p as m,
  f as c,
  t as d,
  b as r,
  c as v,
  d as y,
  s as _,
  r as h
} from "./Cs-U-oV4.js";
import {
  p as w,
  i as x,
  r as E
} from "./CiFFKmG7.js";
import {
  b as T,
  a as f,
  s as S
} from "./DoBrqjM2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aeec6004f37eb410c4fa5f542a20b7bcda513933"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "32d6135c-3105-4044-9569-1bc076aa3438", e._sentryDebugIdIdentifier = "sentry-dbid-32d6135c-3105-4044-9569-1bc076aa3438")
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
      var n = L();
      let A;
      d(b => A = f(n, 1, "text-base-content font-pixel", null, A, b), [() => ({
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })]), r(s, n)
    };
    x(p, s => {
      a.hasText && s(u)
    })
  }
  h(l), d(s => {
    o = f(i, 1, "pixelated", null, o, s), S(i, "src", B)
  }, [() => ({
    "size-10": t() === "default",
    "size-16": t() === "medium",
    "size-20": t() === "lg"
  })]), r(e, l), v()
}
export {
  z as L
};