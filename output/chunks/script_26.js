import {
  g as f
} from "./BbQIqpWG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "9d334f775ce4e0b40338df37698a54b5ae8c153f"
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
const d = () => "Cancel",
  o = () => "Cancelar",
  l = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? d() : o();
export {
  l as c
};