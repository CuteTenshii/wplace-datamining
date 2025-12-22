(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f4e63ff6847082fed878819138982e523bd7482d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "2baaf4e9-7d34-46c0-9cc5-ea76df406c66", e._sentryDebugIdIdentifier = "sentry-dbid-2baaf4e9-7d34-46c0-9cc5-ea76df406c66")
  })()
} catch {}
const n = "1766403873258";
export {
  n as v
};