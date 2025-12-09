import {
  l as o,
  a as t
} from "../chunks/DeNSJTb4.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e56bf90e2bb69bf6dd1cbc6ce0cb1afca52af8e3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4f0f03dd-b040-4e94-8bac-25c639256ee8", e._sentryDebugIdIdentifier = "sentry-dbid-4f0f03dd-b040-4e94-8bac-25c639256ee8")
  })()
} catch {}
export {
  o as load_css, t as start
};