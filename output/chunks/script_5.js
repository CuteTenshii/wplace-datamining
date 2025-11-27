(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4cf9aabe150b17ea2cd61bdb51395ac00839c3a5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3f57d7f9-53d0-48d9-a2fc-27e6ccf96aae", e._sentryDebugIdIdentifier = "sentry-dbid-3f57d7f9-53d0-48d9-a2fc-27e6ccf96aae")
  })()
} catch {}
const n = "1764268187461";
export {
  n as v
};