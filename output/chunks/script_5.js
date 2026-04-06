(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var e = new d.Error().stack;
    e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "93e1d5a8-a38a-41d1-a837-217b98ad3e30", d._sentryDebugIdIdentifier = "sentry-dbid-93e1d5a8-a38a-41d1-a837-217b98ad3e30")
  } catch {}
})();
const n = "1775481158922";
export {
  n as v
};