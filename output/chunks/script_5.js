(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e76e01713b9f24724b47470026b2b700ac9e05af"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "57c11843-efab-48f7-97cf-128b00564fb1", e._sentryDebugIdIdentifier = "sentry-dbid-57c11843-efab-48f7-97cf-128b00564fb1")
  })()
} catch {}
const f = "1765199808037";
export {
  f as v
};