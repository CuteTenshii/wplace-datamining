import {
  l as o,
  a as f
} from "../chunks/Dq-Wn-QO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "99d09c0a99d21d08ae7e452ed085de091ad1bef9"
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
  o as load_css, f as start
};