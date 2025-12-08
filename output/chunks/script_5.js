(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "3a8d7c66397947b49ed2868fcbd9febd8dcf5eb4"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a7fe0416-7b97-4069-a4a0-8b64c9a93593", e._sentryDebugIdIdentifier = "sentry-dbid-a7fe0416-7b97-4069-a4a0-8b64c9a93593")
  })()
} catch {}
const d = "1765227039061";
export {
  d as v
};