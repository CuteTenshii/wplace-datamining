(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "38850961237e3d7e0cabf73306ceed2d401b42cd"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9b4ebd6c-7856-4363-98ed-14fd5bfc92fb", e._sentryDebugIdIdentifier = "sentry-dbid-9b4ebd6c-7856-4363-98ed-14fd5bfc92fb")
  })()
} catch {}
const n = "1766098493790";
export {
  n as v
};