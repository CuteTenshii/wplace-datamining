import {
  a7 as s,
  C as t,
  A as d,
  B as o
} from "./Dcbzw1se.js";
import {
  B as i
} from "./DKKlAk63.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6184a289-58ff-4bd2-9548-67c92c329933", e._sentryDebugIdIdentifier = "sentry-dbid-6184a289-58ff-4bd2-9548-67c92c329933")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, a, r) {
  d && o();
  var f = new i(e),
    b = !s();
  t(() => {
    var n = a();
    n !== n && (n = c), b && n !== null && typeof n == "object" && (n = {}), f.ensure(n, r)
  })
}
export {
  u as k
};