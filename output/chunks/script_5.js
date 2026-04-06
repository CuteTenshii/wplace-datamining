(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "499b14f045c01e257aa2f9d700904a576cc252cf"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "41bc7ced-4cd1-4c7d-8514-aba55e1bf8d1", e._sentryDebugIdIdentifier = "sentry-dbid-41bc7ced-4cd1-4c7d-8514-aba55e1bf8d1")
  } catch {}
})();
const c = "1775506627110";
export {
  c as v
};