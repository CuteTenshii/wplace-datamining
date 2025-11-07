(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "cca71bdb-827c-4bb1-8fe5-fdb8d33c7502", e._sentryDebugIdIdentifier = "sentry-dbid-cca71bdb-827c-4bb1-8fe5-fdb8d33c7502")
  })()
} catch {}
const n = "1762543944808";
export {
  n as v
};