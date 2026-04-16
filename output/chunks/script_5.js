(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "400b4ba6-8eb9-4958-8eed-cee40e294751", e._sentryDebugIdIdentifier = "sentry-dbid-400b4ba6-8eb9-4958-8eed-cee40e294751")
  } catch {}
})();
const b = "1776355830302";
export {
  b as v
};