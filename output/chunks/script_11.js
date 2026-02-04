import {
  k as t,
  l as b,
  m as i,
  E as r
} from "./B2OmeKf3.js";
import {
  B as s
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b38a800-f32b-41b7-b269-efdd60da6eb0", e._sentryDebugIdIdentifier = "sentry-dbid-6b38a800-f32b-41b7-b269-efdd60da6eb0")
  })()
} catch {}

function u(e, n, o) {
  t && b();
  var a = new s(e);
  i(() => {
    var d = n() ?? null;
    a.ensure(d, d && (f => o(f, d)))
  }, r)
}
export {
  u as c
};