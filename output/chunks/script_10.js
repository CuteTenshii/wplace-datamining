import {
  k as t,
  l as b,
  m as i,
  E as s,
  B as l
} from "./D9fqFAK1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "169eae4653f57d833d0e072bc2f6b253b1f72531"
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

function c(e, n, f) {
  t && b();
  var a = new l(e);
  i(() => {
    var d = n() ?? null;
    a.ensure(d, d && (o => f(o, d)))
  }, s)
}
export {
  c
};