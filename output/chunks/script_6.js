(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0da4a15a-ed58-4c46-9057-4d7735e3ec53", e._sentryDebugIdIdentifier = "sentry-dbid-0da4a15a-ed58-4c46-9057-4d7735e3ec53")
  })()
} catch {}
const n = "1770224044388";
export {
  n as v
};