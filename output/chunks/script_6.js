(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "05e3477bd6a9a14e4165d1dc469ad2945d0197f4"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "e9f5d0b9-7e1f-47ef-a14f-2ff35a618ae0", e._sentryDebugIdIdentifier = "sentry-dbid-e9f5d0b9-7e1f-47ef-a14f-2ff35a618ae0")
  })()
} catch {}
const d = "1763400240785";
export {
  d as v
};