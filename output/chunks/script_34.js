import {
  g as o
} from "./DsZdAqoa.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7467695e43643d993d60a0d9c62083c1cee57cdf"
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
const d = () => "Select the report reason",
  t = () => "Selecione o motivo da denúncia",
  l = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? d() : t();
export {
  l as s
};