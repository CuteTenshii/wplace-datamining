import {
  g as o
} from "./CC4jxA2W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e7fb9b96-043c-4d59-a561-63bef70e4eba", e._sentryDebugIdIdentifier = "sentry-dbid-e7fb9b96-043c-4d59-a561-63bef70e4eba")
  })()
} catch {}
const f = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? f() : d();
export {
  r as c
};