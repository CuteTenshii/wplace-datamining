(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "81e0d27a89a6ed71e59e16e2f2fe2aa899a3b379"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3c207dbc-a3d4-44dd-ad35-8596cfb0da62", e._sentryDebugIdIdentifier = "sentry-dbid-3c207dbc-a3d4-44dd-ad35-8596cfb0da62")
  })()
} catch {}
const n = "1764597724527";
export {
  n as v
};