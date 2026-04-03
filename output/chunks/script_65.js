import "./B09UZB6b.js";
import {
  p as m,
  t as f,
  a as d,
  b as u,
  c,
  d as v,
  s as _,
  r as w
} from "./D28CkLTn.js";
import {
  i as h
} from "./BgsVc-HP.js";
import {
  d as x,
  a as n,
  s as E
} from "./D7e8c29C.js";
import {
  p as y,
  r as S
} from "./8KzsfsAH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1d6fac1b-3f1c-4474-9401-ba26ea77b733", e._sentryDebugIdIdentifier = "sentry-dbid-1d6fac1b-3f1c-4474-9401-ba26ea77b733")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  m(a, !0);
  let t = y(a, "size", 3, "default"),
    b = S(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = v(s);
  let o;
  var p = _(l, 2);
  {
    var g = A => {
      var r = L();
      let i;
      f(() => i = n(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), d(A, r)
    };
    h(p, A => {
      a.hasText && A(g)
    })
  }
  w(s), f(() => {
    o = n(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), d(e, s), u()
}
export {
  D as L, B as l
};