(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2c85364e3128b797172dc28599b1641f9b6765ae"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a7fd952c-a79b-4f11-a17b-7708852627a0", e._sentryDebugIdIdentifier = "sentry-dbid-a7fd952c-a79b-4f11-a17b-7708852627a0")
  })()
} catch {}
const d = "1764266243003";
export {
  d as v
};