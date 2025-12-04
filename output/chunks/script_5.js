(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "55c2e0b318410e9d206d43885c4f592c4c06606c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "2c36e2cb-f5d9-45cd-9fb3-556b78039391", e._sentryDebugIdIdentifier = "sentry-dbid-2c36e2cb-f5d9-45cd-9fb3-556b78039391")
  })()
} catch {}
const n = "1764873320156";
export {
  n as v
};