(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee257193e76342130137aa6a9befade083ce2002"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2f1ccf9a-ba7a-4183-ac35-c503f2a53ec1", e._sentryDebugIdIdentifier = "sentry-dbid-2f1ccf9a-ba7a-4183-ac35-c503f2a53ec1")
  })()
} catch {}
const f = "1764622491616";
export {
  f as v
};