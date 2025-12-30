import {
  l as o,
  a
} from "../chunks/OdyOvoaP.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1cf3d1d65c850769ca5bf6ca373d9d4a175b4f5c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4e2225e5-ec77-4b12-a5e4-b0c92d056a73", e._sentryDebugIdIdentifier = "sentry-dbid-4e2225e5-ec77-4b12-a5e4-b0c92d056a73")
  })()
} catch {}
export {
  o as load_css, a as start
};