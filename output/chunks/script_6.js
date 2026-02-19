(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5813ae56f58e7333550e54b13dee572a566ecd62"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1deaec05-75b4-4490-84dc-df940adbb5d5", e._sentryDebugIdIdentifier = "sentry-dbid-1deaec05-75b4-4490-84dc-df940adbb5d5")
  })()
} catch {}
const n = "1771514543080";
export {
  n as v
};