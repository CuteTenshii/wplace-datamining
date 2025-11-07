import {
  g as d
} from "./DO1P0MAk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
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
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  a as c
};