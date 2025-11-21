import {
  g as t
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d5158827-9b3f-448b-9431-c2881c5374a3", e._sentryDebugIdIdentifier = "sentry-dbid-d5158827-9b3f-448b-9431-c2881c5374a3")
  })()
} catch {}
const r = () => "Select the report reason",
  a = () => "Selecione o motivo da denúncia",
  l = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? r() : a(),
  s = () => "Search",
  c = () => "Buscar",
  f = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? s() : c();
export {
  l as a, f as s
};