import {
  g as a
} from "./DwU20SJL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "469a7b97473ab29d501541611648ac6bd4beba7b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5a7643af-3ca4-442c-8e0b-9858ca2a1a11", e._sentryDebugIdIdentifier = "sentry-dbid-5a7643af-3ca4-442c-8e0b-9858ca2a1a11")
  })()
} catch {}
const o = () => "Select the report reason",
  r = () => "Selecione o motivo da denúncia",
  d = (e = {}, n = {}) => (n.locale ?? a()) === "en" ? o() : r(),
  s = () => "Search",
  c = () => "Buscar",
  i = (e = {}, n = {}) => (n.locale ?? a()) === "en" ? s() : c();
export {
  d as a, i as s
};