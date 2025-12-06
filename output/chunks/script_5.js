(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3e986a58fcb30a2298358520e06507a40603fbb7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9ad1abfc-10ce-4390-a16b-908ea59bd94e", e._sentryDebugIdIdentifier = "sentry-dbid-9ad1abfc-10ce-4390-a16b-908ea59bd94e")
  })()
} catch {}
const d = "1765022965982";
export {
  d as v
};