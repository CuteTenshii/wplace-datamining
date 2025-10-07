import {
  g as a
} from "./GKUa23OF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
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
  f = (e = {}, n = {}) => (n.locale ?? a()) === "en" ? o() : t();
export {
  f as c
};