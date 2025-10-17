import {
  g as d
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c9460e31-2c0e-4102-bf1d-d22036aeb43f", e._sentryDebugIdIdentifier = "sentry-dbid-c9460e31-2c0e-4102-bf1d-d22036aeb43f")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  f = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  f as c
};