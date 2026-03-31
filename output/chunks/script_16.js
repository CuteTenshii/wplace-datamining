import {
  m as r,
  E as t
} from "./DjL4expl.js";
import {
  B as o
} from "./CL_UDg1n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "13a4af59f5d722706755b32f23a5d4b27cdb64ce"
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