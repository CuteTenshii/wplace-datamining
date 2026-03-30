(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3ee15fd5-58c1-4a3c-b98b-68e5c78340ec", e._sentryDebugIdIdentifier = "sentry-dbid-3ee15fd5-58c1-4a3c-b98b-68e5c78340ec")
  } catch {}
})();
const f = "1774879183788";
export {
  f as v
};