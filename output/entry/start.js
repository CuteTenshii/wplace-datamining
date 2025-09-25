import {
  l as f,
  a as o
} from "../chunks/Duttoglz.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "088e15254cf0e82f60d1a6be25f10d078aac5191"
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
  f as load_css, o as start
};