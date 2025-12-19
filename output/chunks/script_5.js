(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "38af963429a32dfcd0b04890bc625a0716dd4620"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6bd8783a-faf0-47a7-af8b-d712d4437d52", e._sentryDebugIdIdentifier = "sentry-dbid-6bd8783a-faf0-47a7-af8b-d712d4437d52")
  })()
} catch {}
const n = "1766102400997";
export {
  n as v
};