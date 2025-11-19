(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "399bc8c4e783d71b221f731ebe74f832c15927f3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "47b79bbf-4466-49ea-abaf-ff8698be6994", e._sentryDebugIdIdentifier = "sentry-dbid-47b79bbf-4466-49ea-abaf-ff8698be6994")
  })()
} catch {}
const n = "1763570511006";
export {
  n as v
};