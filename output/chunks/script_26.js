import {
  g as o
} from "./D6LZhko2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "73973961cce1223172a2858ab6abc5d2386ef402"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "476c3416-464c-44fb-9f2f-18bebc310382", e._sentryDebugIdIdentifier = "sentry-dbid-476c3416-464c-44fb-9f2f-18bebc310382")
  })()
} catch {}
const t = () => "Cancel",
  c = () => "Cancelar",
  d = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : c();
export {
  d as c
};