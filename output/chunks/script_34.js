import {
  g as d
} from "./DFNHoEBO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93d2d5a1c9ea65de4db2c69715b442df23632ed6"
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
const o = () => "Select the report reason",
  t = () => "Selecione o motivo da denúncia",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  l as s
};