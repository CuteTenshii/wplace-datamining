(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4a4894320a12997d7c10bab38a71bb767b99274e"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c4779237-a4a8-4dd2-a1d7-28c35d1b74df", e._sentryDebugIdIdentifier = "sentry-dbid-c4779237-a4a8-4dd2-a1d7-28c35d1b74df")
  })()
} catch {}
const n = "1765376382370";
export {
  n as v
};