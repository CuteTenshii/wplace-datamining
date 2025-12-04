import {
  k as t,
  l as i,
  m as s,
  E as b,
  B as l
} from "./CZoruRVW.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "333b60866c7f52d6a6d78eeaca70d7067d67d0c1"
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

function c(e, n, a) {
  t && i();
  var o = new l(e);
  s(() => {
    var d = n() ?? null;
    o.ensure(d, d && (f => a(f, d)))
  }, b)
}
export {
  c
};