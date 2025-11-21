import {
  g as t
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c3da3986-2727-41b4-85e7-13fa1662e896", e._sentryDebugIdIdentifier = "sentry-dbid-c3da3986-2727-41b4-85e7-13fa1662e896")
  })()
} catch {}
const f = () => "Refresh",
  o = () => "Atualizar",
  a = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : o();
export {
  a as r
};