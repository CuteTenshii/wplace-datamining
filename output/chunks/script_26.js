import {
  g as d
} from "./BnlU_GE9.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c15cd1ace8f581becdea18dd6b1672f67db80587"
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
const o = () => "Cancel",
  t = () => "Cancelar",
  a = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  a as c
};