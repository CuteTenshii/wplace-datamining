(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "376bf947-764a-441c-952c-cf8d87397702", e._sentryDebugIdIdentifier = "sentry-dbid-376bf947-764a-441c-952c-cf8d87397702")
  } catch {}
})();
const n = "1774832730550";
export {
  n as v
};