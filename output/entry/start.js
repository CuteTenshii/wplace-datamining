import {
  l as o,
  a
} from "../chunks/2BylvuNy.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "080ead9e-8a65-4078-938c-ad958f945764", e._sentryDebugIdIdentifier = "sentry-dbid-080ead9e-8a65-4078-938c-ad958f945764")
  })()
} catch {}
export {
  o as load_css, a as start
};