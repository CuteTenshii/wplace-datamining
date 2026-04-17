(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "d6ff777c-c932-4cf9-9264-43538f34a43c", e._sentryDebugIdIdentifier = "sentry-dbid-d6ff777c-c932-4cf9-9264-43538f34a43c")
  } catch {}
})();
const n = "1776446887690";
export {
  n as v
};