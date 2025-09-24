import {
  g as o
} from "./7naOYfoA.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e3f70f7829e704b21f2ec68a0bb0b01d91efd9a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "56f945bb-c472-4c63-a4d4-2f227147a933", e._sentryDebugIdIdentifier = "sentry-dbid-56f945bb-c472-4c63-a4d4-2f227147a933")
  })()
} catch {}
const t = () => "Cancel",
  f = () => "Cancelar",
  a = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : f();
export {
  a as c
};