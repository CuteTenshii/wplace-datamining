(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d9dc1590-3f35-4cc7-8e79-58f0e2b2c5fc", e._sentryDebugIdIdentifier = "sentry-dbid-d9dc1590-3f35-4cc7-8e79-58f0e2b2c5fc")
  })()
} catch {}
const f = "1770042496462";
export {
  f as v
};