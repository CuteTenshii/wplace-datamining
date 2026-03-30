(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c25d240cfeb94229297bfd517188330be66c0dac"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c97edf5b-4259-4ac7-96cd-357453c0632b", e._sentryDebugIdIdentifier = "sentry-dbid-c97edf5b-4259-4ac7-96cd-357453c0632b")
  } catch {}
})();
const c = "1774875235676";
export {
  c as v
};