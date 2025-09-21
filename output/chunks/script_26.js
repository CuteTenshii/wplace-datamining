import {
  g as o
} from "./DeP5M3oG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "825bee11b3c7e8e1af0343e9a8e19271ca51e2c2"
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
  a = () => "Cancelar",
  d = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : a();
export {
  d as c
};