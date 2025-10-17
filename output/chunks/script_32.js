import {
  g as o
} from "./CC4jxA2W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8c8eb8a7-e1ce-448c-a9d8-6759dade4a2d", e._sentryDebugIdIdentifier = "sentry-dbid-8c8eb8a7-e1ce-448c-a9d8-6759dade4a2d")
  })()
} catch {}
const d = () => "Select the report reason",
  t = () => "Selecione o motivo da denúncia",
  l = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? d() : t();
export {
  l as s
};