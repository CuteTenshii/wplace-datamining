(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "44ed61d9-827c-49d8-8069-f606736eeab8", e._sentryDebugIdIdentifier = "sentry-dbid-44ed61d9-827c-49d8-8069-f606736eeab8")
  } catch {}
})();
const f = "1776542433151";
export {
  f as v
};