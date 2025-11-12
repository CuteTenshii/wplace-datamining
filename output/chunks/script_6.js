(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "15fb4e3d80a4de2b957e29f1299dd0b2bef7a1e3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c1ff4037-48b8-4547-8bd5-a67d3938346d", e._sentryDebugIdIdentifier = "sentry-dbid-c1ff4037-48b8-4547-8bd5-a67d3938346d")
  })()
} catch {}
const n = "1762906699935";
export {
  n as v
};