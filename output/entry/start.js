import {
  l as o,
  a
} from "../chunks/CeL8N32g.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c498731282e2bfa2154b3f8dba9ff6bac18e13ab"
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
  o as load_css, a as start
};