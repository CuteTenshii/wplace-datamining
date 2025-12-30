(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f3dcc3e771086c0f63d8ece84cd728044b2a0f0d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "be9437e2-d63a-4f24-a07a-f7b1d52b212b", e._sentryDebugIdIdentifier = "sentry-dbid-be9437e2-d63a-4f24-a07a-f7b1d52b212b")
  })()
} catch {}
const n = "1767128219365";
export {
  n as v
};