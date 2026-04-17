(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "438b589f-6ce9-406b-9e93-652cbaeb52c5", e._sentryDebugIdIdentifier = "sentry-dbid-438b589f-6ce9-406b-9e93-652cbaeb52c5")
  } catch {}
})();
const b = "1776450162754";
export {
  b as v
};