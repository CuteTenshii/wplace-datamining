(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "34cc512744102387f2427379e854c2ea08067337"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ac24fe3e-d8ee-4326-9b84-3e1029d1d103", e._sentryDebugIdIdentifier = "sentry-dbid-ac24fe3e-d8ee-4326-9b84-3e1029d1d103")
  })()
} catch {}
const n = "1762362009919";
export {
  n as v
};