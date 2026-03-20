import {
  m as r,
  E as t
} from "./CA_jRce9.js";
import {
  B as o
} from "./B7WQodiT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "afc54e5f-c51f-4dda-902e-af344121ca15", e._sentryDebugIdIdentifier = "sentry-dbid-afc54e5f-c51f-4dda-902e-af344121ca15")
  } catch {}
})();

function b(e, n, ...a) {
  var s = new o(e);
  r(() => {
    const f = n() ?? null;
    s.ensure(f, f && (d => f(d, ...a)))
  }, t)
}
export {
  b as s
};