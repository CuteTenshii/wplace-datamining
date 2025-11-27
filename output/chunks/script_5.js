(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d750dbde4bb0382aeca7acd55c05ffdf7a87fc2c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "acc5dd62-673f-41f9-b7f5-caf33d7bcb04", e._sentryDebugIdIdentifier = "sentry-dbid-acc5dd62-673f-41f9-b7f5-caf33d7bcb04")
  })()
} catch {}
const f = "1764260896205";
export {
  f as v
};