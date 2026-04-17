import {
  C as o,
  E as d
} from "./ButFgnm2.js";
import {
  B as f
} from "./BcEZIty_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c517ee2-886e-449a-92ea-3a9220619116", e._sentryDebugIdIdentifier = "sentry-dbid-5c517ee2-886e-449a-92ea-3a9220619116")
  } catch {}
})();

function b(e, n, ...s) {
  var r = new f(e);
  o(() => {
    const a = n() ?? null;
    r.ensure(a, a && (t => a(t, ...s)))
  }, d)
}
export {
  b as s
};