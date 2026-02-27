import {
  k as t,
  l as b,
  m as i,
  E as r
} from "./BX08WKHH.js";
import {
  B as s
} from "./BOruZFU3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b38a800-f32b-41b7-b269-efdd60da6eb0", e._sentryDebugIdIdentifier = "sentry-dbid-6b38a800-f32b-41b7-b269-efdd60da6eb0")
  })()
} catch {}

function u(e, n, f) {
  t && b();
  var o = new s(e);
  i(() => {
    var d = n() ?? null;
    o.ensure(d, d && (a => f(a, d)))
  }, r)
}
export {
  u as c
};