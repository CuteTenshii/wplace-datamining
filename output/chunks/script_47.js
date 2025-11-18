import "./CMSI2xec.js";
import {
  p as m,
  f as c,
  t as A,
  b as r,
  c as b,
  d as v,
  s as y,
  r as _
} from "./Dff7lKDG.js";
import {
  i as h
} from "./C4Sx64Nr.js";
import {
  d as w,
  a as d,
  s as x
} from "./CxMyuyR3.js";
import {
  p as E,
  r as T
} from "./FaLwwzG2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5e7c9fd5f328559866810f75338456562566478c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4fc44178-1e5f-486a-904f-ec0832c089ff", e._sentryDebugIdIdentifier = "sentry-dbid-4fc44178-1e5f-486a-904f-ec0832c089ff")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function z(e, t) {
  m(t, !0);
  let s = E(t, "size", 3, "default"),
    p = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var a = L();
  w(a, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = v(a);
  let o;
  var g = y(l, 2);
  {
    var u = i => {
      var f = B();
      let n;
      A(() => n = d(f, 1, "text-base-content font-pixel", null, n, {
        "text-4xl": s() === "default",
        "text-5xl": s() === "lg" || s() === "medium"
      })), r(i, f)
    };
    h(g, i => {
      t.hasText && i(u)
    })
  }
  _(a), A(() => {
    o = d(l, 1, "pixelated", null, o, {
      "size-10": s() === "default",
      "size-16": s() === "medium",
      "size-20": s() === "lg"
    }), x(l, "src", S)
  }), r(e, a), b()
}
export {
  z as L
};