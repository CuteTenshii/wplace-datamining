import {
  g as d
} from "./Ck9C8CiE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "05ce49009207a0735deeeb4c7a853abc987d7d99"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9a195607-3e0a-481f-bb4e-c17da1799d60", e._sentryDebugIdIdentifier = "sentry-dbid-9a195607-3e0a-481f-bb4e-c17da1799d60")
  })()
} catch {}
const a = () => "Cancel",
  o = () => "Cancelar",
  c = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? a() : o();
export {
  c
};