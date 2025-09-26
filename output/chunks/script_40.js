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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a39ce8e6-c68e-4670-97d0-cab3082bdbf7", e._sentryDebugIdIdentifier = "sentry-dbid-a39ce8e6-c68e-4670-97d0-cab3082bdbf7")
  })()
} catch {}
const t = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? t() : d();
export {
  r as c
};