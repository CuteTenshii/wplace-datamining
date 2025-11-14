(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "541dfc1c3ac43dc4153801a7513fe5d50ca07655"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fc13365b-a972-4f6b-83e5-e617c1073c70", e._sentryDebugIdIdentifier = "sentry-dbid-fc13365b-a972-4f6b-83e5-e617c1073c70")
  })()
} catch {}
const d = "1763146055873";
export {
  d as v
};