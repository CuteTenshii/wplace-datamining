import "./CRUod-8q.js";
import {
  p as b,
  f as c,
  t as A,
  b as d,
  c as m,
  d as v,
  s as y,
  r as _
} from "./C-9Y3fPa.js";
import {
  i as h
} from "./qwvZIGad.js";
import {
  d as w,
  a as r,
  s as x
} from "./CwSlGFEE.js";
import {
  p as E,
  r as T
} from "./v3ZFA_UY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe5b293b0b58eb9d702fd066546411c50747d7aa"
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
  b(t, !0);
  let a = E(t, "size", 3, "default"),
    p = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  w(s, () => ({
    ...p,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = v(s);
  let o;
  var g = y(l, 2);
  {
    var u = i => {
      var f = B();
      let n;
      A(() => n = r(f, 1, "text-base-content font-pixel", null, n, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), d(i, f)
    };
    h(g, i => {
      t.hasText && i(u)
    })
  }
  _(s), A(() => {
    o = r(l, 1, "pixelated", null, o, {
      "size-10": a() === "default",
      "size-16": a() === "medium",
      "size-20": a() === "lg"
    }), x(l, "src", S)
  }), d(e, s), m()
}
export {
  z as L
};