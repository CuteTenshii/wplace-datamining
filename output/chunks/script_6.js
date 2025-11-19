(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "41710f7ccc2fafb6890924daac86ac6566913848"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b2ff9da2-c368-4bd5-855d-a3cb1fc7c7af", e._sentryDebugIdIdentifier = "sentry-dbid-b2ff9da2-c368-4bd5-855d-a3cb1fc7c7af")
  })()
} catch {}
const f = "1763573654249";
export {
  f as v
};