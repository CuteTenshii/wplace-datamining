(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19c3537dbd7586a0b5506248246feedd8f873fcf"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f251ea4a-17c2-425d-ab50-1573a4276088", e._sentryDebugIdIdentifier = "sentry-dbid-f251ea4a-17c2-425d-ab50-1573a4276088")
  })()
} catch {}
const n = "1766105399270";
export {
  n as v
};