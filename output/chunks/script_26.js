import {
  g as f
} from "./Di_RRjlH.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a2853da5197f1e8876a5229454a4e7ee1aa190e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fce2c009-40ff-4494-9f49-1c0e2d36545d", e._sentryDebugIdIdentifier = "sentry-dbid-fce2c009-40ff-4494-9f49-1c0e2d36545d")
  })()
} catch {}
const o = () => "Cancel",
  t = () => "Cancelar",
  a = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? o() : t();
export {
  a as c
};