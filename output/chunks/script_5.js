(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
    };
    var f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "ff8f6fc4-0252-4afc-8903-fc11359eda99", e._sentryDebugIdIdentifier = "sentry-dbid-ff8f6fc4-0252-4afc-8903-fc11359eda99")
  } catch {}
})();
const n = "1776385540993";
export {
  n as v
};