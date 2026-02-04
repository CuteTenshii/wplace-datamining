(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "d7d4652f-f048-496f-83ca-9b9c704a52a2", e._sentryDebugIdIdentifier = "sentry-dbid-d7d4652f-f048-496f-83ca-9b9c704a52a2")
  })()
} catch {}
const n = "1770231133365";
export {
  n as v
};