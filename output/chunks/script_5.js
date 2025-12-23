(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2e64873115a19acf275cba17d06aff2c6f4b185d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9a2e453f-a696-47ba-8d2f-4823d3111048", e._sentryDebugIdIdentifier = "sentry-dbid-9a2e453f-a696-47ba-8d2f-4823d3111048")
  })()
} catch {}
const n = "1766489226025";
export {
  n as v
};