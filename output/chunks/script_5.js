(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8b4ab28972d63cbdad1764e9fac2da360f24ece0"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "859db66d-5e22-49eb-8803-02a4728c1516", e._sentryDebugIdIdentifier = "sentry-dbid-859db66d-5e22-49eb-8803-02a4728c1516")
  } catch {}
})();
const b = "1773701520595";
export {
  b as v
};