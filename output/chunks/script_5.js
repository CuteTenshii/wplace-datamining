(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "bc58ea63-a12c-4809-acce-593328c9b000", e._sentryDebugIdIdentifier = "sentry-dbid-bc58ea63-a12c-4809-acce-593328c9b000")
  } catch {}
})();
const c = "1774033432531";
export {
  c as v
};