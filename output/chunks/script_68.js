import "./DjfvmHUr.js";
import {
  p as u,
  t as n,
  a as d,
  b,
  c,
  d as v,
  s as _,
  r as w
} from "./Nz8BX01A.js";
import {
  i as h
} from "./Ur3q-qHz.js";
import {
  d as x,
  a as f,
  s as E
} from "./yObJGNLL.js";
import {
  p as y,
  r as S
} from "./CMuO2jGN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "03f1e844-e13e-4676-9f5e-0f58ece1e206", e._sentryDebugIdIdentifier = "sentry-dbid-03f1e844-e13e-4676-9f5e-0f58ece1e206")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = c("<span>wplace</span>"),
  R = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  u(t, !0);
  let a = y(t, "size", 3, "default"),
    p = S(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = v(s);
  let o;
  var g = _(l, 2);
  {
    var m = A => {
      var r = L();
      let i;
      n(() => i = f(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), d(A, r)
    };
    h(g, A => {
      t.hasText && A(m)
    })
  }
  w(s), n(() => {
    o = f(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), E(l, "src", B)
  }), d(e, s), b()
}
export {
  D as L, B as l
};