import {
  aj as t,
  m as i,
  k as r,
  l as s
} from "./BBaHVBJx.js";
import {
  B as l
} from "./DFVQWxPd.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a2d67f85c31e3fef075f7f6dde31a8af3e9f3dda"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "58791f92-8da6-480b-a9e3-bd9f0e2188fb", e._sentryDebugIdIdentifier = "sentry-dbid-58791f92-8da6-480b-a9e3-bd9f0e2188fb")
  })()
} catch {}

function u(e, n, d) {
  r && s();
  var a = new l(e),
    o = !t();
  i(() => {
    var f = n();
    o && f !== null && typeof f == "object" && (f = {}), a.ensure(f, d)
  })
}
export {
  u as k
};