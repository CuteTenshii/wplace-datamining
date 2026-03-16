(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5a2a57be-e502-4a24-a48a-ce622d6721d3", e._sentryDebugIdIdentifier = "sentry-dbid-5a2a57be-e502-4a24-a48a-ce622d6721d3")
  } catch {}
})();
const n = "1773685551056";
export {
  n as v
};