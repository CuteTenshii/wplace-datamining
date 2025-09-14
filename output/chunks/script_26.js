import {
  g as d
} from "./ezbcDjPs.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "672e85eb3631872fd08d4c9c3edf522c2ebd7ca9"
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
const f = () => "Cancel",
  c = () => "Cancelar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? f() : c();
export {
  l as c
};