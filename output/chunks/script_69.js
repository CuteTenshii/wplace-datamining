import "./0aBKUdfq.js";
import {
  p as u,
  t as c,
  a as d,
  b,
  c as f,
  d as v,
  s as _,
  r as w
} from "./DK4l5t5k.js";
import {
  i as h
} from "./PP1qTMI4.js";
import {
  d as x,
  a as n,
  s as E
} from "./D6rJUPqv.js";
import {
  p as y,
  r as S
} from "./MJZQA7cB.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b40d2afc-7115-4cc4-800c-ca2be506e323", e._sentryDebugIdIdentifier = "sentry-dbid-b40d2afc-7115-4cc4-800c-ca2be506e323")
  } catch {}
})();
const B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var L = f("<span>wplace</span>"),
  R = f('<div><img alt="Wplace logo"/> <!></div>');

function D(e, a) {
  u(a, !0);
  let t = y(a, "size", 3, "default"),
    p = S(a, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = R();
  x(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${a.class??""}`
  }));
  var l = v(s);
  let o;
  var g = _(l, 2);
  {
    var m = A => {
      var r = L();
      let i;
      c(() => i = n(r, 1, "text-base-content font-pixel", null, i, {
        "text-4xl": t() === "default",
        "text-5xl": t() === "lg" || t() === "medium"
      })), d(A, r)
    };
    h(g, A => {
      a.hasText && A(m)
    })
  }
  w(s), c(() => {
    o = n(l, 1, "pixelated h-auto shrink-0", null, o, {
      "w-4": t() === "small",
      "w-10": t() === "default",
      "w-16": t() === "medium",
      "w-20": t() === "lg"
    }), E(l, "src", B)
  }), d(e, s), b()
}
export {
  D as L, B as l
};