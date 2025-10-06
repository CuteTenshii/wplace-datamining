import {
  g as d
} from "./C2egeWDR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6fe71e2aef866a931e2568b1d6f6762fddc1f62d"
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
const o = () => "Cancel",
  t = () => "Cancelar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  l as c
};