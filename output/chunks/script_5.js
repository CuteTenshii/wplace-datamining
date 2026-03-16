(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "59059513-3e8c-4e54-afc1-d58743b7d47a", e._sentryDebugIdIdentifier = "sentry-dbid-59059513-3e8c-4e54-afc1-d58743b7d47a")
  } catch {}
})();
const a = "1773684620183";
export {
  a as v
};