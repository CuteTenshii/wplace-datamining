import "./CVtsYuox.js";
import {
  p as u,
  f as b,
  t as n,
  b as A,
  c as m,
  d as v,
  s as y,
  r as _
} from "./CYmALYaf.js";
import {
  i as h
} from "./CUW3HYkd.js";
import {
  d as w,
  a as r,
  s as x
} from "./DLoppxIO.js";
import {
  p as E,
  r as T
} from "./7r_dBKZS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fbde751f-b386-4641-91ee-bd50154486ef", e._sentryDebugIdIdentifier = "sentry-dbid-fbde751f-b386-4641-91ee-bd50154486ef")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = b("<span>wplace</span>"),
  L = b('<div><img alt="Wplace logo"/> <!></div>');

function z(e, t) {
  u(t, !0);
  let a = E(t, "size", 3, "default"),
    c = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  w(s, () => ({
    ...c,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = v(s);
  let o;
  var p = y(l, 2);
  {
    var g = i => {
      var d = B();
      let f;
      n(() => f = r(d, 1, "text-base-content font-pixel", null, f, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), A(i, d)
    };
    h(p, i => {
      t.hasText && i(g)
    })
  }
  _(s), n(() => {
    o = r(l, 1, "pixelated", null, o, {
      "size-10": a() === "default",
      "size-16": a() === "medium",
      "size-20": a() === "lg"
    }), x(l, "src", S)
  }), A(e, s), m()
}
export {
  z as L
};