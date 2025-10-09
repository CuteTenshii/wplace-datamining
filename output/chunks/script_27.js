import {
  g as o
} from "./CItBVTel.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19e8b1e1f621a77f893c0ebf0e975e4ec873201a"
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
  f = () => "Cancelar",
  a = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : f();
export {
  a as c
};