import {
  g as d
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c9460e31-2c0e-4102-bf1d-d22036aeb43f", e._sentryDebugIdIdentifier = "sentry-dbid-c9460e31-2c0e-4102-bf1d-d22036aeb43f")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  a as c
};