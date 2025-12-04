(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72535b980ce58632366910417763e3bb1f48d885"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5694e07b-57e0-4f9d-87f3-947df30fe2a8", e._sentryDebugIdIdentifier = "sentry-dbid-5694e07b-57e0-4f9d-87f3-947df30fe2a8")
  })()
} catch {}
const d = "1764861514770";
export {
  d as v
};