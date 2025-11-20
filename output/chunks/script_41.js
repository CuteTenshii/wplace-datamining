import {
  g as t
} from "./Dn1N4dmO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a38764e420fdb01cdb08c4f31f9aa71df376c33"
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
const a = () => "Select the report reason",
  r = () => "Selecione o motivo da denúncia",
  d = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? a() : r(),
  s = () => "Search",
  c = () => "Buscar",
  f = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? s() : c();
export {
  d as a, f as s
};