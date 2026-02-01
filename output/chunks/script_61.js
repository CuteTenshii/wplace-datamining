import "./BbBNFQef.js";
import {
  p as g,
  f as c,
  t as f,
  b as A,
  c as m,
  s as v,
  d as w,
  r as y
} from "./DDHVoadr.js";
import {
  i as h
} from "./C7lT5LZ2.js";
import {
  f as _,
  a as r,
  s as x
} from "./B0J_DDn1.js";
import {
  p as E,
  r as T
} from "./VcyFbp_8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "92fecf6b-355f-4bbb-8d2c-75718e6a4266", e._sentryDebugIdIdentifier = "sentry-dbid-92fecf6b-355f-4bbb-8d2c-75718e6a4266")
  })()
} catch {}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAABJQTFRFAQEBAAAAHGHnRcxVStlbMXLnk8SHtQAAAAF0Uk5TAEDm2GYAAABMSURBVHjadc9JCgAhDERRa7r/lZs0ikawdv+tkvEYALS07U2QawmOTo1oQBKr8/cUMLY7JLEPYLW0oISSNLtgiojRBfv0AuB67vH3B+FjAY/0rrGiAAAAAElFTkSuQmCC";
var B = c("<span>wplace</span>"),
  L = c('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  g(t, !0);
  let a = E(t, "size", 3, "default"),
    b = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...b,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = w(s);
  let i;
  var p = v(l, 2);
  {
    var u = o => {
      var n = B();
      let d;
      f(() => d = r(n, 1, "text-base-content font-pixel", null, d, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), A(o, n)
    };
    h(p, o => {
      t.hasText && o(u)
    })
  }
  y(s), f(() => {
    i = r(l, 1, "pixelated h-auto shrink-0", null, i, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), x(l, "src", S)
  }), A(e, s), m()
}
export {
  D as L
};