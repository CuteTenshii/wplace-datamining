import {
  C as d,
  E as o
} from "./Nz8BX01A.js";
import {
  B as i
} from "./B_hj-bKY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c517ee2-886e-449a-92ea-3a9220619116", e._sentryDebugIdIdentifier = "sentry-dbid-5c517ee2-886e-449a-92ea-3a9220619116")
  } catch {}
})();

function b(e, n, ...s) {
  var r = new i(e);
  d(() => {
    const a = n() ?? null;
    r.ensure(a, a && (t => a(t, ...s)))
  }, o)
}
export {
  b as s
};