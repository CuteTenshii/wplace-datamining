import {
  g as a
} from "./DxqvS5Ji.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8ca9d5bb8d7e9609a9f3fa05a0fcc401dd1cd4cb"
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
  c = () => "Selecione o motivo da denúncia",
  d = (e = {}, n = {}) => (n.locale ?? a()) === "en" ? o() : c(),
  r = () => "Search",
  s = () => "Buscar",
  f = (e = {}, n = {}) => (n.locale ?? a()) === "en" ? r() : s();
export {
  d as a, f as s
};