import {
  D as t,
  m as i,
  k as s,
  l as r,
  B as l
} from "./CYj7RoHR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "57f41670f2805f713b0da8f3636738eb734a70e1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c10412f6-3506-46ad-95cb-92bc4c89dd7c", e._sentryDebugIdIdentifier = "sentry-dbid-c10412f6-3506-46ad-95cb-92bc4c89dd7c")
  })()
} catch {}

function b(e, n, f) {
  s && r();
  var a = new l(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), a.ensure(d, f)
  })
}
export {
  b as k
};