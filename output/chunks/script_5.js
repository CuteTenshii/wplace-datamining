(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0c03ff0c-bac1-4d4b-8164-a64f395af434", e._sentryDebugIdIdentifier = "sentry-dbid-0c03ff0c-bac1-4d4b-8164-a64f395af434")
  } catch {}
})();
const n = "1776397959377";
export {
  n as v
};