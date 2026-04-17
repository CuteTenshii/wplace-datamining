import {
  a7 as t,
  C as d,
  A as o,
  B as i
} from "./ButFgnm2.js";
import {
  B as c
} from "./BcEZIty_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6184a289-58ff-4bd2-9548-67c92c329933", e._sentryDebugIdIdentifier = "sentry-dbid-6184a289-58ff-4bd2-9548-67c92c329933")
  } catch {}
})();
const b = Symbol("NaN");

function u(e, a, r) {
  o && i();
  var f = new c(e),
    s = !t();
  d(() => {
    var n = a();
    n !== n && (n = b), s && n !== null && typeof n == "object" && (n = {}), f.ensure(n, r)
  })
}
export {
  u as k
};