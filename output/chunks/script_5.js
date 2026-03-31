(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "13a4af59f5d722706755b32f23a5d4b27cdb64ce"
    };
    var e = new d.Error().stack;
    e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "2bd468df-9d8e-44ba-9fdc-a4555f4c7c7e", d._sentryDebugIdIdentifier = "sentry-dbid-2bd468df-9d8e-44ba-9fdc-a4555f4c7c7e")
  } catch {}
})();
const n = "1774925660202";
export {
  n as v
};