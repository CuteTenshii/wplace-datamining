import {
  m as r,
  E as t
} from "./CqOPxJme.js";
import {
  B as o
} from "./Bdo-K5OI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "405d9b08e89656e997bc9e3c862de93d5b969d8c"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...a) {
  var f = new o(e);
  r(() => {
    const d = n() ?? null;
    f.ensure(d, d && (s => d(s, ...a)))
  }, t)
}
export {
  b as s
};