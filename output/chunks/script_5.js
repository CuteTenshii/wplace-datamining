(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var b = new e.Error().stack;
    b && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[b] = "b311136b-92f9-40ee-bd53-03a06c569b51", e._sentryDebugIdIdentifier = "sentry-dbid-b311136b-92f9-40ee-bd53-03a06c569b51")
  } catch {}
})();
const n = "1774574925135";
export {
  n as v
};