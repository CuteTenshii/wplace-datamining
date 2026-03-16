(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ed1316ce-988d-4850-b986-9a4089c3c3e9", e._sentryDebugIdIdentifier = "sentry-dbid-ed1316ce-988d-4850-b986-9a4089c3c3e9")
  } catch {}
})();
const c = "1773689586498";
export {
  c as v
};