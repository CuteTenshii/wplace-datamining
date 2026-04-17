(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d74175fb-48de-4ef4-bb41-cf686de3519c", e._sentryDebugIdIdentifier = "sentry-dbid-d74175fb-48de-4ef4-bb41-cf686de3519c")
  } catch {}
})();
const f = "1776407448387";
export {
  f as v
};