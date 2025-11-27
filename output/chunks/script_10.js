import {
  k as t,
  l as b,
  m as i,
  E as s,
  B as l
} from "./BkIpwR9V.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4cf9aabe150b17ea2cd61bdb51395ac00839c3a5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "288854be-a08e-4d4f-b348-abdc2b2fe3c7", e._sentryDebugIdIdentifier = "sentry-dbid-288854be-a08e-4d4f-b348-abdc2b2fe3c7")
  })()
} catch {}

function c(e, n, d) {
  t && b();
  var o = new l(e);
  i(() => {
    var a = n() ?? null;
    o.ensure(a, a && (f => d(f, a)))
  }, s)
}
export {
  c
};