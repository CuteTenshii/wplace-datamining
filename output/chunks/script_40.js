import {
  g as o
} from "./FoV3scVl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c52930fdf8854b5f9bae5ed78e18571583cf0fb7"
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
const f = () => "Confirm",
  d = () => "Confirmar",
  r = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? f() : d();
export {
  r as c
};