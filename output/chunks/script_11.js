import {
  k as t,
  l as i,
  m as r,
  E as b
} from "./BBaHVBJx.js";
import {
  B as s
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b38a800-f32b-41b7-b269-efdd60da6eb0", e._sentryDebugIdIdentifier = "sentry-dbid-6b38a800-f32b-41b7-b269-efdd60da6eb0")
  })()
} catch {}

function y(e, n, f) {
  t && i();
  var a = new s(e);
  r(() => {
    var d = n() ?? null;
    a.ensure(d, d && (o => f(o, d)))
  }, b)
}
export {
  y as c
};