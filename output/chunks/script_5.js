(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8706a848567fc83422d651908aa77f13fdf383e3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "43f729c1-c6c3-4d26-9a63-b310de1afa5e", e._sentryDebugIdIdentifier = "sentry-dbid-43f729c1-c6c3-4d26-9a63-b310de1afa5e")
  })()
} catch {}
const n = "1766519681835";
export {
  n as v
};