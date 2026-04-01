(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "be8234278ededc2527fbc3b765caee2baaf18120"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "38ea5c58-f3e5-496d-ae24-ec7422a753f0", e._sentryDebugIdIdentifier = "sentry-dbid-38ea5c58-f3e5-496d-ae24-ec7422a753f0")
  } catch {}
})();
const a = "1775049234454";
export {
  a as v
};