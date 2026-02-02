(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d3efd4f4-8fb3-435a-89ac-e1b9a11cb218", e._sentryDebugIdIdentifier = "sentry-dbid-d3efd4f4-8fb3-435a-89ac-e1b9a11cb218")
  })()
} catch {}
const n = "1770046819115";
export {
  n as v
};