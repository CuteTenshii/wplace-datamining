(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5075ea86ba38314c7942ca2e67d3e2ff3d377749"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "39adb1f7-3531-430f-8056-51aa998a3c25", e._sentryDebugIdIdentifier = "sentry-dbid-39adb1f7-3531-430f-8056-51aa998a3c25")
  } catch {}
})();
const n = "1773798574073";
export {
  n as v
};