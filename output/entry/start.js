import {
  l as o,
  a as t
} from "../chunks/B-IjB-5n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a8e86ea7c5dac5456cbf3520a3090956fd737b8f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c1e803f6-4c2c-435c-89f5-b6b085f1974d", e._sentryDebugIdIdentifier = "sentry-dbid-c1e803f6-4c2c-435c-89f5-b6b085f1974d")
  })()
} catch {}
export {
  o as load_css, t as start
};