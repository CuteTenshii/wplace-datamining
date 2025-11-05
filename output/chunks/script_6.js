(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98d1dff4f9f651349c3d8e3f73a4b0b872bc384a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8667d542-d7f8-420b-9bdb-ea5aabb98171", e._sentryDebugIdIdentifier = "sentry-dbid-8667d542-d7f8-420b-9bdb-ea5aabb98171")
  })()
} catch {}
const n = "1762355606978";
export {
  n as v
};