(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "718929eb34b39115ade64201f12b715208957752"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6e0fcd5f-b427-4143-9b94-267da61a8ace", e._sentryDebugIdIdentifier = "sentry-dbid-6e0fcd5f-b427-4143-9b94-267da61a8ace")
  })()
} catch {}
const d = "1766173748515";
export {
  d as v
};