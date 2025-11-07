import {
  g as f
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b373e5df-4cb4-4179-a56e-c25c324e6df3", e._sentryDebugIdIdentifier = "sentry-dbid-b373e5df-4cb4-4179-a56e-c25c324e6df3")
  })()
} catch {}
const t = () => "Refresh",
  d = () => "Atualizar",
  l = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : d();
export {
  l as r
};