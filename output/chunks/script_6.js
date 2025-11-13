(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c7db87af384652c1dc5fbd166ad20d68993159f9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5b211413-9994-4600-8fd2-bb5ee8d6effb", e._sentryDebugIdIdentifier = "sentry-dbid-5b211413-9994-4600-8fd2-bb5ee8d6effb")
  })()
} catch {}
const n = "1762990432274";
export {
  n as v
};