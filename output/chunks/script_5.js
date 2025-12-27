(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0d09a81b307e3e50e12318a904f634e48415b56b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "11d148aa-6498-4540-9e52-15c6fb73bf6a", e._sentryDebugIdIdentifier = "sentry-dbid-11d148aa-6498-4540-9e52-15c6fb73bf6a")
  })()
} catch {}
const d = "1766839667953";
export {
  d as v
};