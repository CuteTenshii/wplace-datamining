(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "38bb15d6890b2160becfb07b4396631f8d785598"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "120415a4-773b-4817-8dad-4b71d5c25da8", e._sentryDebugIdIdentifier = "sentry-dbid-120415a4-773b-4817-8dad-4b71d5c25da8")
  })()
} catch {}
const n = "1765199375744";
export {
  n as v
};