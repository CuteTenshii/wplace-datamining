(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a27dd9b2-cb9d-48fc-9058-a53a4fd7e660", e._sentryDebugIdIdentifier = "sentry-dbid-a27dd9b2-cb9d-48fc-9058-a53a4fd7e660")
  } catch {}
})();
const f = "1774035732867";
export {
  f as v
};