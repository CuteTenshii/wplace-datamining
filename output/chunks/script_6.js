(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "bcbc342b-c21e-4023-89c6-149070dd21d0", e._sentryDebugIdIdentifier = "sentry-dbid-bcbc342b-c21e-4023-89c6-149070dd21d0")
  })()
} catch {}
const n = "1769934633594";
export {
  n as v
};