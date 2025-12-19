import {
  k as a,
  l as i,
  m as b,
  E as s,
  B as l
} from "./BdPk12sv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19c3537dbd7586a0b5506248246feedd8f873fcf"
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
  a && i();
  var o = new l(e);
  b(() => {
    var d = n() ?? null;
    o.ensure(d, d && (t => f(t, d)))
  }, s)
}
export {
  c
};