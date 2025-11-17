(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8ca9d5bb8d7e9609a9f3fa05a0fcc401dd1cd4cb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "04e21f77-23e8-46ee-9f90-5ca60e4e8792", e._sentryDebugIdIdentifier = "sentry-dbid-04e21f77-23e8-46ee-9f90-5ca60e4e8792")
  })()
} catch {}
const d = "1763407195684";
export {
  d as v
};