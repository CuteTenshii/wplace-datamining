import {
  g as f
} from "./DcZIlShl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fe77e0a32f22395333b3f54fb7a95ef6936c7140"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "476c3416-464c-44fb-9f2f-18bebc310382", e._sentryDebugIdIdentifier = "sentry-dbid-476c3416-464c-44fb-9f2f-18bebc310382")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  d = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : t();
export {
  d as c
};