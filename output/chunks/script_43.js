import {
  g as f
} from "./BJlatFx3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cf70b86b5c91cdc18d318e8e942fc55d8b1d0f41"
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
  d = () => "Confirmar",
  i = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : d();
export {
  i as c
};