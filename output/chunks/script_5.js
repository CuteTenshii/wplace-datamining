(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var e = new d.Error().stack;
    e && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[e] = "2bed2bba-34bc-4cd6-9d57-bdc20842a50b", d._sentryDebugIdIdentifier = "sentry-dbid-2bed2bba-34bc-4cd6-9d57-bdc20842a50b")
  } catch {}
})();
const n = "1772198284054";
export {
  n as v
};