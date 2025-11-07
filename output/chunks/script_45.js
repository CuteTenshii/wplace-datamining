import {
  g as d
} from "./DO1P0MAk.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ccbcb242-a46e-40d3-b66f-926d15b2df4f", e._sentryDebugIdIdentifier = "sentry-dbid-ccbcb242-a46e-40d3-b66f-926d15b2df4f")
  })()
} catch {}
const o = () => "Confirm",
  f = () => "Confirmar",
  i = (e = {}, n = {}) => (n.locale ?? d()) === "en" ? o() : f();
export {
  i as c
};