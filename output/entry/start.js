import {
  l as a,
  a as o
} from "../chunks/DOSQpApy.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "faebb701-c0fe-407e-a5a2-7f6a458ac4b5", e._sentryDebugIdIdentifier = "sentry-dbid-faebb701-c0fe-407e-a5a2-7f6a458ac4b5")
  })()
} catch {}
export {
  a as load_css, o as start
};