import {
  g as d
} from "./DditNrNW.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d8fe2b59c656bd9f6dccc34a4ac724cc1c260861"
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
const c = () => "Cancel",
  o = () => "Cancelar",
  l = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? c() : o();
export {
  l as c
};