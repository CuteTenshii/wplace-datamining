import {
  g as t
} from "./CqypAnHz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "399bc8c4e783d71b221f731ebe74f832c15927f3"
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
  s = () => "Selecione o motivo da denúncia",
  d = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? r() : s(),
  a = () => "Search",
  c = () => "Buscar",
  f = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? a() : c();
export {
  d as a, f as s
};