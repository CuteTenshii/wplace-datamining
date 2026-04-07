(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "530e4254-d3f2-4e31-94e5-5a9e9f9862dd", e._sentryDebugIdIdentifier = "sentry-dbid-530e4254-d3f2-4e31-94e5-5a9e9f9862dd")
  } catch {}
})();
const f = "1775566767618";
export {
  f as v
};