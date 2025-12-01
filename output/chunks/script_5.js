(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1d9793ba3d4a0f1311910be29f6f7ac9e32576a2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4d3651b0-2273-402f-90c7-0745d862032e", e._sentryDebugIdIdentifier = "sentry-dbid-4d3651b0-2273-402f-90c7-0745d862032e")
  })()
} catch {}
const n = "1764592842705";
export {
  n as v
};