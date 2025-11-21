import {
  g as d
} from "./QpTCyiP3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f96103e3-1073-4902-addc-b40e57509c39", e._sentryDebugIdIdentifier = "sentry-dbid-f96103e3-1073-4902-addc-b40e57509c39")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  c = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  c
};