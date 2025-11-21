import {
  g as d
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c3da3986-2727-41b4-85e7-13fa1662e896", e._sentryDebugIdIdentifier = "sentry-dbid-c3da3986-2727-41b4-85e7-13fa1662e896")
  })()
} catch {}
const f = () => "Refresh",
  t = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? f() : t();
export {
  l as r
};