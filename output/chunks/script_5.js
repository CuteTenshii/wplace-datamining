(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "02eccb32-e72f-46ab-9cde-c2a1f67a8375", e._sentryDebugIdIdentifier = "sentry-dbid-02eccb32-e72f-46ab-9cde-c2a1f67a8375")
  } catch {}
})();
const f = "1772180796268";
export {
  f as v
};