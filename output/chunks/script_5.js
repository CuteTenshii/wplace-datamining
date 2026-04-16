(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c87a65fa-8536-4c57-ab97-9806060150b0", e._sentryDebugIdIdentifier = "sentry-dbid-c87a65fa-8536-4c57-ab97-9806060150b0")
  } catch {}
})();
const b = "1776347602312";
export {
  b as v
};