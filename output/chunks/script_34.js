import {
  g as o
} from "./DH84GWeD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "34cc512744102387f2427379e854c2ea08067337"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1145bd35-ad0d-4d60-9cfe-2435a1f61a0f", e._sentryDebugIdIdentifier = "sentry-dbid-1145bd35-ad0d-4d60-9cfe-2435a1f61a0f")
  })()
} catch {}
const t = () => "Select the report reason",
  d = () => "Selecione o motivo da denúncia",
  l = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  l as s
};