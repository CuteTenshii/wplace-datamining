import {
  l as a,
  a as o
} from "../chunks/DaCTPMHG.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7ed500f4877d9522a36ae9e4cb9ffdc698db3fc1"
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
  a as load_css, o as start
};