(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "066116d2a0b0fea465998abdea5fdee468dc0d44"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b4b48aaa-349d-453e-a0f2-f9fe1d78c9b0", e._sentryDebugIdIdentifier = "sentry-dbid-b4b48aaa-349d-453e-a0f2-f9fe1d78c9b0")
  } catch {}
})();
const f = "1773715696381";
export {
  f as v
};