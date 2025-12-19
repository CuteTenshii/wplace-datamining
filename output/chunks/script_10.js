import {
  k as t,
  l as i,
  m as b,
  E as s,
  B as l
} from "./D6bzUFXP.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c74d55667ae34a0f1e0fb08ba8f2c36320dfa773"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "03bf059d-b0bd-41ed-93f5-56c412b0f6cf", e._sentryDebugIdIdentifier = "sentry-dbid-03bf059d-b0bd-41ed-93f5-56c412b0f6cf")
  })()
} catch {}

function c(e, n, f) {
  t && i();
  var o = new l(e);
  b(() => {
    var d = n() ?? null;
    o.ensure(d, d && (a => f(a, d)))
  }, s)
}
export {
  c
};