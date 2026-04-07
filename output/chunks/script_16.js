import {
  m as r,
  E as t
} from "./DEEyd5H-.js";
import {
  B as o
} from "./BHc60j2E.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...f) {
  var d = new o(e);
  r(() => {
    const a = n() ?? null;
    d.ensure(a, a && (s => a(s, ...f)))
  }, t)
}
export {
  b as s
};