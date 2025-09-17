import {
  g as o
} from "./DEELUL6Y.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bbdb65ab440efc5218cf5cda66e92d0206f61703"
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
  d = () => "Cancelar",
  a = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  a as c
};