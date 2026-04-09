(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "e4e38cb6-3e0e-4c93-8656-ca7e7133e80d", e._sentryDebugIdIdentifier = "sentry-dbid-e4e38cb6-3e0e-4c93-8656-ca7e7133e80d")
  } catch {}
})();
const f = "1775739388640";
export {
  f as v
};