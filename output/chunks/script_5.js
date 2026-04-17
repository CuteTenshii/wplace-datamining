(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "44ae0c9d-73cc-47ea-9783-5e16cad14d41", e._sentryDebugIdIdentifier = "sentry-dbid-44ae0c9d-73cc-47ea-9783-5e16cad14d41")
  } catch {}
})();
const a = "1776443728957";
export {
  a as v
};