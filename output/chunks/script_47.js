import "./B5YT6ZOG.js";
import {
  p as u,
  f as c,
  t as n,
  b as A,
  c as m,
  d as v,
  s as y,
  r as _
} from "./FaeLmLA_.js";
import {
  i as h
} from "./GwSmVPTs.js";
import {
  d as w,
  a as r,
  s as x
} from "./v2mNV6VW.js";
import {
  p as E,
  r as T
} from "./YGDO1sUr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a38764e420fdb01cdb08c4f31f9aa71df376c33"
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
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function z(e, t) {
  u(t, !0);
  let a = E(t, "size", 3, "default"),
    b = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  w(s, () => ({
    ...b,
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