(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1dc76760b5957a0899b63650345eafb40d771701"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "96542af8-135d-4df8-8b17-c1d991b60dc0", e._sentryDebugIdIdentifier = "sentry-dbid-96542af8-135d-4df8-8b17-c1d991b60dc0")
  })()
} catch {}
const n = "1765309250641";
export {
  n as v
};