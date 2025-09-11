import {
  g as f
} from "./BdL8ulug.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c59cd04c2fee1edb5d1a51fc2b49888cf98f5500"
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
const c = () => "Cancel",
  d = () => "Cancelar",
  l = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? c() : d();
export {
  l as c
};