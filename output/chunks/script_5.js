(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "812fed88-6992-467f-94e7-c1910690c2d6", e._sentryDebugIdIdentifier = "sentry-dbid-812fed88-6992-467f-94e7-c1910690c2d6")
  } catch {}
})();
const f = "1776307916916";
export {
  f as v
};