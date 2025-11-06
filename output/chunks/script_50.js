import {
  g as d
} from "./DsZdAqoa.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7467695e43643d993d60a0d9c62083c1cee57cdf"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b373e5df-4cb4-4179-a56e-c25c324e6df3", e._sentryDebugIdIdentifier = "sentry-dbid-b373e5df-4cb4-4179-a56e-c25c324e6df3")
  })()
} catch {}
const t = () => "Refresh",
  f = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? t() : f();
export {
  l as r
};