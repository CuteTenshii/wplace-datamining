(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3b38ab2f-40b5-4060-83c8-358c81c12e70", e._sentryDebugIdIdentifier = "sentry-dbid-3b38ab2f-40b5-4060-83c8-358c81c12e70")
  } catch {}
})();
const f = "1774403719325";
export {
  f as v
};