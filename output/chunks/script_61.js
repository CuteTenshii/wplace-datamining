import "./DlAkGZ8n.js";
import {
  p as g,
  f as b,
  t as A,
  b as r,
  c as m,
  s as v,
  d as w,
  r as y
} from "./0lw74TdK.js";
import {
  i as h
} from "./DrYQconx.js";
import {
  f as _,
  a as d,
  s as x
} from "./k6HFfx4L.js";
import {
  p as E,
  r as T
} from "./BVnMFPWi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
var B = b("<span>wplace</span>"),
  L = b('<div><img alt="Wplace logo"/> <!></div>');

function D(e, t) {
  g(t, !0);
  let a = E(t, "size", 3, "default"),
    c = T(t, ["$$slots", "$$events", "$$legacy", "hasText", "size"]);
  var s = L();
  _(s, () => ({
    ...c,
    class: `flex items-center gap-1.5 ${t.class??""}`
  }));
  var l = w(s);
  let i;
  var p = v(l, 2);
  {
    var u = o => {
      var n = B();
      let f;
      A(() => f = d(n, 1, "text-base-content font-pixel", null, f, {
        "text-4xl": a() === "default",
        "text-5xl": a() === "lg" || a() === "medium"
      })), r(o, n)
    };
    h(p, o => {
      t.hasText && o(u)
    })
  }
  y(s), A(() => {
    i = d(l, 1, "pixelated h-auto shrink-0", null, i, {
      "w-4": a() === "small",
      "w-10": a() === "default",
      "w-16": a() === "medium",
      "w-20": a() === "lg"
    }), x(l, "src", S)
  }), r(e, s), m()
}
export {
  D as L
};