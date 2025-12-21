(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93f384388d5e7c5014b7c7528c87cda732169ee9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "69aa6417-55e8-4afd-9bf9-a2d2a41c7a82", e._sentryDebugIdIdentifier = "sentry-dbid-69aa6417-55e8-4afd-9bf9-a2d2a41c7a82")
  })()
} catch {}
const n = "1766329927394";
export {
  n as v
};