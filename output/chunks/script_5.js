(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3410a50e-fc54-4308-99ef-d20a64e4b8ec", e._sentryDebugIdIdentifier = "sentry-dbid-3410a50e-fc54-4308-99ef-d20a64e4b8ec")
  } catch {}
})();
const f = "1774705214615";
export {
  f as v
};