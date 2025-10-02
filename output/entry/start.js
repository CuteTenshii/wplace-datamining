import {
  l as o,
  a
} from "../chunks/kcP_MCMG.js";
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
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5a191b66-7525-49e4-8b03-c06818aa62d5", e._sentryDebugIdIdentifier = "sentry-dbid-5a191b66-7525-49e4-8b03-c06818aa62d5")
  })()
} catch {}
export {
  o as load_css, a as start
};