(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ed2835ed53e86562ae86aab3834736b02129c64f"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "822a6e75-8447-44d1-8a5b-010f092e0f7e", e._sentryDebugIdIdentifier = "sentry-dbid-822a6e75-8447-44d1-8a5b-010f092e0f7e")
  } catch {}
})();
const f = "1774575228371";
export {
  f as v
};