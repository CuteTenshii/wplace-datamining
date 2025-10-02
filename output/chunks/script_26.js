import {
  g as o
} from "./Dk78P9j5.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "9b2648606e2bb7a01bef003b9890229599179c1c"
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
const t = () => "Cancel",
  c = () => "Cancelar",
  d = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : c();
export {
  d as c
};