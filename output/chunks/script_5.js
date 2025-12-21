(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "df9c0bc1fb3c4ec52327763de3771537961b5859"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a1ee1dff-0a76-4b11-ad80-c0185abccba6", e._sentryDebugIdIdentifier = "sentry-dbid-a1ee1dff-0a76-4b11-ad80-c0185abccba6")
  })()
} catch {}
const n = "1766273885492";
export {
  n as v
};