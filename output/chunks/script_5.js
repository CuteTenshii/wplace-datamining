(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "00b4db97-7759-4c23-8f2b-7cec7e6bdf27", e._sentryDebugIdIdentifier = "sentry-dbid-00b4db97-7759-4c23-8f2b-7cec7e6bdf27")
  })()
} catch {}
const d = "1766188911409";
export {
  d as v
};