import {
  g as d
} from "./DKiJ5IW8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cc0c831cfe290b2f9f3fef653d3fc44d780a59c1"
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
  c = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : t();
export {
  c
};