(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "11993b5ff9dc393aaf781ae6a4de4b12b8c982b8"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5aff6712-61c4-4605-917f-9510e9515163", e._sentryDebugIdIdentifier = "sentry-dbid-5aff6712-61c4-4605-917f-9510e9515163")
  })()
} catch {}
const f = "1762901639778";
export {
  f as v
};