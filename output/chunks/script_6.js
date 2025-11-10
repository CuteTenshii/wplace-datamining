(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4871fd2f83b0bcd7abd0ecfe3a61b3d6255622d1"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "353e1075-f8ae-40ec-9961-ba589af428f5", e._sentryDebugIdIdentifier = "sentry-dbid-353e1075-f8ae-40ec-9961-ba589af428f5")
  })()
} catch {}
const d = "1762797121481";
export {
  d as v
};