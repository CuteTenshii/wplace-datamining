(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "017c00da74943be59fb953c55a7af7db0cfe4436"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c0e10de7-be30-43f5-89c1-caa719abf923", e._sentryDebugIdIdentifier = "sentry-dbid-c0e10de7-be30-43f5-89c1-caa719abf923")
  } catch {}
})();
const f = "1773777888756";
export {
  f as v
};