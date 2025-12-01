import {
  k as t,
  l as i,
  m as b,
  E as s,
  B as l
} from "./Bcwk37oG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1d9793ba3d4a0f1311910be29f6f7ac9e32576a2"
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
  var f = new l(e);
  b(() => {
    var d = n() ?? null;
    f.ensure(d, d && (o => a(o, d)))
  }, s)
}
export {
  c
};