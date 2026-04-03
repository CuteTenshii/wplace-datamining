(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ceaf71126b6ebfffce341bb7a3def1f2574f660c"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3ec6acb7-fe73-44c6-8e45-648dddd54ff3", e._sentryDebugIdIdentifier = "sentry-dbid-3ec6acb7-fe73-44c6-8e45-648dddd54ff3")
  } catch {}
})();
const n = "1775221070928";
export {
  n as v
};