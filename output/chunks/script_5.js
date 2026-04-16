(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7e9c2cde-4870-43a7-8906-32b00e3e8028", e._sentryDebugIdIdentifier = "sentry-dbid-7e9c2cde-4870-43a7-8906-32b00e3e8028")
  } catch {}
})();
const f = "1776311411325";
export {
  f as v
};