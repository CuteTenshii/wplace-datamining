import {
  C as t,
  E as o
} from "./BnI0KJSr.js";
import {
  B as f
} from "./dn1LnbKR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c517ee2-886e-449a-92ea-3a9220619116", e._sentryDebugIdIdentifier = "sentry-dbid-5c517ee2-886e-449a-92ea-3a9220619116")
  } catch {}
})();

function c(e, n, ...d) {
  var s = new f(e);
  t(() => {
    const a = n() ?? null;
    s.ensure(a, a && (r => a(r, ...d)))
  }, o)
}
export {
  c as s
};