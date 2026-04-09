import "./Bw2t7C85.js";
import {
  p as m,
  t as d,
  a as f,
  b as u,
  c,
  d as v,
  s as _,
  r as w
} from "./Cu0FD5l7.js";
import {
  i as h
} from "./B6XsWLho.js";
import {
  d as x,
  a as n,
  s as E
} from "./CjbocO6j.js";
import {
  p as y,
  r as S
} from "./BGoOJG7D.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
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
      d(() => i = n(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), f(A, r)
    };
    h(p, A => {
      e.hasText && A(g)
    })
  }
  w(s), d(() => {
    o = n(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), f(a, s), u()
}
export {
  D as L, B as l
};