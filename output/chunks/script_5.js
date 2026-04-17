(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "e16aec96-225a-45ed-ab67-74407ae0568c", e._sentryDebugIdIdentifier = "sentry-dbid-e16aec96-225a-45ed-ab67-74407ae0568c")
  } catch {}
})();
const n = "1776383538622";
export {
  n as v
};