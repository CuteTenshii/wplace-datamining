import "./BHORAsI-.js";
import {
  p as m,
  t as f,
  a as n,
  b as u,
  c,
  d as v,
  s as _,
  r as w
} from "./Dcbzw1se.js";
import {
  i as h
} from "./EkgfBfpq.js";
import {
  d as x,
  a as d,
  s as E
} from "./DeKgkIEE.js";
import {
  p as y,
  r as S
} from "./B5GV16O5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "03f1e844-e13e-4676-9f5e-0f58ece1e206", e._sentryDebugIdIdentifier = "sentry-dbid-03f1e844-e13e-4676-9f5e-0f58ece1e206")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  m(t, !0);
  let a = y(t, "size", 3, "default"),
    b = S(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = v(s);
  let o;
  var p = _(l, 2);
  {
    var g = A => {
      var r = L();
      let i;
      f(() => i = d(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), n(A, r)
    };
    h(p, A => {
      t.hasText && A(g)
    })
  }
  w(s), f(() => {
    o = d(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), E(l, "src", B)
  }), n(e, s), u()
}
export {
  D as L, B as l
};