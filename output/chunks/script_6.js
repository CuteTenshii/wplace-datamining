(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5699240c8856da05e48f188a8f5094ebed5a4fea"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "51c1763c-d3e8-4ede-b4a1-fced2d460da6", e._sentryDebugIdIdentifier = "sentry-dbid-51c1763c-d3e8-4ede-b4a1-fced2d460da6")
  })()
} catch {}
const n = "1762815161596";
export {
  n as v
};