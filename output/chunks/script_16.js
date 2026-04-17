import {
  C as b,
  E as o
} from "./Dcbzw1se.js";
import {
  B as d
} from "./DKKlAk63.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c517ee2-886e-449a-92ea-3a9220619116", e._sentryDebugIdIdentifier = "sentry-dbid-5c517ee2-886e-449a-92ea-3a9220619116")
  } catch {}
})();

function c(e, n, ...s) {
  var r = new d(e);
  b(() => {
    const a = n() ?? null;
    r.ensure(a, a && (t => a(t, ...s)))
  }, o)
}
export {
  c as s
};