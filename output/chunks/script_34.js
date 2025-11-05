import {
  g as o
} from "./Dfvc1QYL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98d1dff4f9f651349c3d8e3f73a4b0b872bc384a"
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