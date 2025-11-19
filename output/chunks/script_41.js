import {
  g as t
} from "./CeWu6W50.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe5b293b0b58eb9d702fd066546411c50747d7aa"
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
  d = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? r() : a(),
  s = () => "Search",
  c = () => "Buscar",
  f = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? s() : c();
export {
  d as a, f as s
};