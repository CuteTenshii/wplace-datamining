import "./DWiaIDSa.js";
import {
  p as m,
  t as d,
  a as n,
  b as u,
  c,
  d as v,
  s as _,
  r as w
} from "./C6Ld_Ouf.js";
import {
  i as h
} from "./DqvAWVT4.js";
import {
  d as x,
  a as f,
  s as E
} from "./ozaL_Q3i.js";
import {
  p as y,
  r as S
} from "./CtRVT2QZ.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "524c6de5688559bfa8d287b7b1a6e5caba19cb91"
    };
    var e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "1d6fac1b-3f1c-4474-9401-ba26ea77b733", a._sentryDebugIdIdentifier = "sentry-dbid-1d6fac1b-3f1c-4474-9401-ba26ea77b733")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function D(a, e) {
  m(e, !0);
  let t = y(e, "size", 3, "default"),
    b = S(e, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${e.class??""}`
  }));
  var l = v(s);
  let o;
  var p = _(l, 2);
  {
    var g = A => {
      var r = L();
      let i;
      d(() => i = f(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), n(A, r)
    };
    h(p, A => {
      e.hasText && A(g)
    })
  }
  w(s), d(() => {
    o = f(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), n(a, s), u()
}
export {
  D as L, B as l
};