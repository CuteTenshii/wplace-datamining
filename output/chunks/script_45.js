import {
  g as f
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f21bf8cc-0e87-4d9c-b3a3-228553277fac", e._sentryDebugIdIdentifier = "sentry-dbid-f21bf8cc-0e87-4d9c-b3a3-228553277fac")
  })()
} catch {}
const t = () => "Refresh",
  d = () => "Atualizar",
  c = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : d();
export {
  c as r
};