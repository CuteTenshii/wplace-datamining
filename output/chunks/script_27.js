import {
  g as o
} from "./4Szs_zBr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "396734e5db96c8d18b29022abf53bbd030e61152"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f1623e75-917e-46e9-9921-f96d6e11a340", e._sentryDebugIdIdentifier = "sentry-dbid-f1623e75-917e-46e9-9921-f96d6e11a340")
  })()
} catch {}
const t = () => "Cancel",
  d = () => "Cancelar",
  a = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  a as c
};