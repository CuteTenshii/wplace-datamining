(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65f7af1ca1d715ef20a4159507e8f6b55052c932"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "31883387-1e2e-4cf8-acfb-213618a65767", e._sentryDebugIdIdentifier = "sentry-dbid-31883387-1e2e-4cf8-acfb-213618a65767")
  })()
} catch {}
const f = "1766154668399";
export {
  f as v
};