import {
  aj as t,
  m as i,
  k as r,
  l as s
} from "./C_uavZQJ.js";
import {
  B as l
} from "./DKkJ3zcM.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
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

function u(e, n, a) {
  r && s();
  var f = new l(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  u as k
};