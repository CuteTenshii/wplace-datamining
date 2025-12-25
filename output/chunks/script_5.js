(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee860fc816b3b13288b485f763a0872cd79cba7b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "f5237a2a-c5b9-4974-8f4f-f24fc129b519", e._sentryDebugIdIdentifier = "sentry-dbid-f5237a2a-c5b9-4974-8f4f-f24fc129b519")
  })()
} catch {}
const n = "1766620752738";
export {
  n as v
};