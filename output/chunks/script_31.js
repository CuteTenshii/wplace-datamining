import {
  g as d
} from "./BkjxUA7W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "15fb4e3d80a4de2b957e29f1299dd0b2bef7a1e3"
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