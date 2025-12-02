(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "69e89c3139d56ad7b72a097a21288d9ef2906bde"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "362394a8-c3af-4bdd-8e17-52c63dfb20c6", e._sentryDebugIdIdentifier = "sentry-dbid-362394a8-c3af-4bdd-8e17-52c63dfb20c6")
  })()
} catch {}
const n = "1764681899569";
export {
  n as v
};