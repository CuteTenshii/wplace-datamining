(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "4e260d80-1179-4863-8cec-1b43333545c8", e._sentryDebugIdIdentifier = "sentry-dbid-4e260d80-1179-4863-8cec-1b43333545c8")
  } catch {}
})();
const s = "1774645945767";
export {
  s as v
};