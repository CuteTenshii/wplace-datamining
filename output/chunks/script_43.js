import {
  g as f
} from "./44LEXnLU.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c5b6f4008280188b6965f20aa04502030e013ff2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7af0aa88-6a65-4204-abd8-fb1fc7e8d27c", e._sentryDebugIdIdentifier = "sentry-dbid-7af0aa88-6a65-4204-abd8-fb1fc7e8d27c")
  })()
} catch {}
const o = () => "Confirm",
  t = () => "Confirmar",
  i = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : t();
export {
  i as c
};