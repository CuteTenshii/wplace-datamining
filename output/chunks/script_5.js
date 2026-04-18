(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var b = new e.Error().stack;
    b && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[b] = "45e9c4b4-81bc-4098-beb1-28fab46e2a48", e._sentryDebugIdIdentifier = "sentry-dbid-45e9c4b4-81bc-4098-beb1-28fab46e2a48")
  } catch {}
})();
const n = "1776473562460";
export {
  n as v
};