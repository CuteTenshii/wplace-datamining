import {
  g as a
} from "./B3Pi0DVN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "30982d7718bbc4a833ef39834f2cfbbfa1f546ae"
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
  f = (e = {}, n = {}) => (n.locale ?? a()) === "en" ? o() : r(),
  s = () => "Search",
  c = () => "Buscar",
  d = (e = {}, n = {}) => (n.locale ?? a()) === "en" ? s() : c();
export {
  f as a, d as s
};