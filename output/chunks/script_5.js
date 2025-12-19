(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c74d55667ae34a0f1e0fb08ba8f2c36320dfa773"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "07b78b66-6995-4c76-95ca-27b0e5a6ac59", e._sentryDebugIdIdentifier = "sentry-dbid-07b78b66-6995-4c76-95ca-27b0e5a6ac59")
  })()
} catch {}
const d = "1766110259506";
export {
  d as v
};