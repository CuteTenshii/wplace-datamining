(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a78a9231-b423-40bd-a241-ba1ca982a1c2", e._sentryDebugIdIdentifier = "sentry-dbid-a78a9231-b423-40bd-a241-ba1ca982a1c2")
  } catch {}
})();
const n = "1776302871204";
export {
  n as v
};