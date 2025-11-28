(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bb5d5d7c8d5938b4a51a8b309833405bb5c12631"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "581db516-8fb9-4689-8a7f-b9349ed65af1", e._sentryDebugIdIdentifier = "sentry-dbid-581db516-8fb9-4689-8a7f-b9349ed65af1")
  })()
} catch {}
const n = "1764362922399";
export {
  n as v
};