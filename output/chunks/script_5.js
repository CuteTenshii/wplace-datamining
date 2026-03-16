(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var b = new e.Error().stack;
    b && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[b] = "0006b2fb-463f-45c9-bec5-00aceb09b9b4", e._sentryDebugIdIdentifier = "sentry-dbid-0006b2fb-463f-45c9-bec5-00aceb09b9b4")
  } catch {}
})();
const n = "1773694849795";
export {
  n as v
};