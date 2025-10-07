import "./De0mwVlw.js";
import {
  p as m,
  f as c,
  t as n,
  b as A,
  c as v,
  d as y,
  s as _,
  r as h
} from "./DPblvP8E.js";
import {
  p as w,
  i as x,
  r as E
} from "./DvauhmJi.js";
import {
  b as T,
  a as r,
  s as S
} from "./B033chXD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cc0c831cfe290b2f9f3fef653d3fc44d780a59c1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "036fd0fb-3680-4bdd-a7a7-7d7d5d4cd2a6", e._sentryDebugIdIdentifier = "sentry-dbid-036fd0fb-3680-4bdd-a7a7-7d7d5d4cd2a6")
  })()
} catch {}
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function z(e, a) {
  m(a, !0);
  let t = w(a, "size", 3, "default"),
    g = E(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var d = R();
  T(d, () => ({
    ...g,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = y(d);
  let i;
  var p = _(l, 2);
  {
    var u = s => {
      var o = L();
      let f;
      n(b => f = r(o, 1, "text-base-content font-pixel", null, f, b), [() => ({
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })]), A(s, o)
    };
    x(p, s => {
      a.hasText && s(u)
    })
  }
  h(d), n(s => {
    i = r(l, 1, "pixelated", null, i, s), S(l, "src", B)
  }, [() => ({
    "size-10": t() === "default",
    "size-16": t() === "medium",
    "size-20": t() === "lg"
  })]), A(e, d), v()
}
export {
  z as L
};