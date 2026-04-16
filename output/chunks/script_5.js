(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "e9d6fc5a-fd87-42b8-9296-760cce02e57a", e._sentryDebugIdIdentifier = "sentry-dbid-e9d6fc5a-fd87-42b8-9296-760cce02e57a")
  } catch {}
})();
const f = "1776319995567";
export {
  f as v
};