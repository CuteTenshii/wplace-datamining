(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "bfaef231-8a15-41fb-823f-eaf38d1e9ae4", e._sentryDebugIdIdentifier = "sentry-dbid-bfaef231-8a15-41fb-823f-eaf38d1e9ae4")
  })()
} catch {}
const d = "1772165126251";
export {
  d as v
};