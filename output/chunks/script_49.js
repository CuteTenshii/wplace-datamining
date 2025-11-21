import {
  g as o
} from "./DaUp8CSR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52f7dd52d370e3cd3a68b7bd4fba1dfc255f8526"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b1459c48-7f79-4156-9b25-61f8a00bb671", e._sentryDebugIdIdentifier = "sentry-dbid-b1459c48-7f79-4156-9b25-61f8a00bb671")
  })()
} catch {}
const f = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? f() : d();
export {
  r as c
};