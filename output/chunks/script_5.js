(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d7cccbef-a5bb-4ca5-89e4-3e448b5e862a", e._sentryDebugIdIdentifier = "sentry-dbid-d7cccbef-a5bb-4ca5-89e4-3e448b5e862a")
  } catch {}
})();
const n = "1776492325254";
export {
  n as v
};