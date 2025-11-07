(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "593fad81c7773faec9a14f5284420d643abf8801"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "79721b8d-1056-4c1d-b8e2-16049eefbccc", e._sentryDebugIdIdentifier = "sentry-dbid-79721b8d-1056-4c1d-b8e2-16049eefbccc")
  })()
} catch {}
const n = "1762481256285";
export {
  n as v
};