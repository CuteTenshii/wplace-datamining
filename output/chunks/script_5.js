(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "bf04e4a4-3d96-4c09-928b-07e2499a179a", e._sentryDebugIdIdentifier = "sentry-dbid-bf04e4a4-3d96-4c09-928b-07e2499a179a")
  } catch {}
})();
const f = "1774026699200";
export {
  f as v
};