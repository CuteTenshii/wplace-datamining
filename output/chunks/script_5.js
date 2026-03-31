(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "474a06d87b269a074076fdcef11eba6226920584"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "13a130ad-4749-40d5-87c6-38c81b38056b", e._sentryDebugIdIdentifier = "sentry-dbid-13a130ad-4749-40d5-87c6-38c81b38056b")
  } catch {}
})();
const a = "1774964655266";
export {
  a as v
};