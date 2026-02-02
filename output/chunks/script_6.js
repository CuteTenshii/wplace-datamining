(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "99b6abfe-7009-4cbd-9dd5-3c4bfd941152", e._sentryDebugIdIdentifier = "sentry-dbid-99b6abfe-7009-4cbd-9dd5-3c4bfd941152")
  })()
} catch {}
const n = "1770036283601";
export {
  n as v
};