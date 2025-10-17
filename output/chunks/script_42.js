import {
  g as o
} from "./CKM5458v.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
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