import {
  g as d
} from "./Pn4dKiI3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "593fad81c7773faec9a14f5284420d643abf8801"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ad827837-1ed3-4476-b8e7-017499620987", e._sentryDebugIdIdentifier = "sentry-dbid-ad827837-1ed3-4476-b8e7-017499620987")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  f = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  f as c
};