(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4f89b9b3-0bc7-4abb-aa7b-ad5776474785", e._sentryDebugIdIdentifier = "sentry-dbid-4f89b9b3-0bc7-4abb-aa7b-ad5776474785")
  })()
} catch {}
const n = "1766202665417";
export {
  n as v
};