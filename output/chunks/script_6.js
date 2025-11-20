(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a38764e420fdb01cdb08c4f31f9aa71df376c33"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7f17d9a3-3b24-403b-8910-74200cd751d3", e._sentryDebugIdIdentifier = "sentry-dbid-7f17d9a3-3b24-403b-8910-74200cd751d3")
  })()
} catch {}
const n = "1763604126140";
export {
  n as v
};