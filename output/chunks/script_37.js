import {
  g as o
} from "./Dc6DF1Sc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ac7618a676a9d262ff8724cf2a3a13f62011007a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f96103e3-1073-4902-addc-b40e57509c39", e._sentryDebugIdIdentifier = "sentry-dbid-f96103e3-1073-4902-addc-b40e57509c39")
  })()
} catch {}
const t = () => "Cancel",
  a = () => "Cancelar",
  f = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : a();
export {
  f as c
};