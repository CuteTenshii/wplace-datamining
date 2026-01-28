import {
  k as t,
  l as b,
  m as i,
  E as r
} from "./DguyhcA0.js";
import {
  B as s
} from "./Z1td0T_V.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6efb14bb5e52798ae71a524d6603a123d144219"
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

function y(e, n, a) {
  t && b();
  var o = new s(e);
  i(() => {
    var d = n() ?? null;
    o.ensure(d, d && (f => a(f, d)))
  }, r)
}
export {
  y as c
};