import {
  g as o
} from "./FAoWj6-g.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "276968e1d17fc8ec4f0f441c096845bbc4668125"
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
  c = () => "Cancelar",
  d = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : c();
export {
  d as c
};