import {
  D as t,
  m as i,
  k as s,
  l as r,
  B as l
} from "./8X9bXL-a.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
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

function y(e, n, a) {
  s && r();
  var f = new l(e),
    o = !t();
  i(() => {
    var d = n();
    o && d !== null && typeof d == "object" && (d = {}), f.ensure(d, a)
  })
}
export {
  y as k
};