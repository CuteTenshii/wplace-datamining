(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1cf3d1d65c850769ca5bf6ca373d9d4a175b4f5c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f8dd578e-acdd-4651-bce6-c4073357f0fa", e._sentryDebugIdIdentifier = "sentry-dbid-f8dd578e-acdd-4651-bce6-c4073357f0fa")
  })()
} catch {}
const n = "1767124201273";
export {
  n as v
};