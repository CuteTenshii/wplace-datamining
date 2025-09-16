(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "20acfd88f8d7c9ea7803ba9b0c3c2cc1012eb498"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "de59cd8a-506f-43e6-a3d3-bc92e3ebaf74", e._sentryDebugIdIdentifier = "sentry-dbid-de59cd8a-506f-43e6-a3d3-bc92e3ebaf74")
  })()
} catch {}
const f = "5";
var n;
typeof window < "u" && ((n = window.__svelte ?? (window.__svelte = {})).v ?? (n.v = new Set)).add(f);