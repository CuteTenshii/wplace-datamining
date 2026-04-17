(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d4f6985d-3997-407f-a1a5-598390db8f17", e._sentryDebugIdIdentifier = "sentry-dbid-d4f6985d-3997-407f-a1a5-598390db8f17")
  } catch {}
})();
const n = "1776463772894";
export {
  n as v
};