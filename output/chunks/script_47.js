import {
  aj as t,
  m as i,
  k as r,
  l as s
} from "./B2OmeKf3.js";
import {
  B as b
} from "./DimIQ9-r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
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

function u(e, n, f) {
  r && s();
  var a = new b(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  u as k
};