(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "51633bbb0f20b0f5578caf566ba6bc15f3497cdd"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a4dfbf5a-5340-4b93-a7ba-54067f838a61", e._sentryDebugIdIdentifier = "sentry-dbid-a4dfbf5a-5340-4b93-a7ba-54067f838a61")
  })()
} catch {}
const f = "1764856825446";
export {
  f as v
};