(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var b = new e.Error().stack;
    b && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[b] = "94ae947a-8b7b-4b7e-941b-9914872576c5", e._sentryDebugIdIdentifier = "sentry-dbid-94ae947a-8b7b-4b7e-941b-9914872576c5")
  } catch {}
})();
const d = "1776106861101";
export {
  d as v
};