import {
  a7 as s,
  C as t,
  A as o,
  B as i
} from "./BnI0KJSr.js";
import {
  B as b
} from "./dn1LnbKR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6184a289-58ff-4bd2-9548-67c92c329933", e._sentryDebugIdIdentifier = "sentry-dbid-6184a289-58ff-4bd2-9548-67c92c329933")
  } catch {}
})();
const c = Symbol("NaN");

function u(e, n, d) {
  o && i();
  var r = new b(e),
    f = !s();
  t(() => {
    var a = n();
    a !== a && (a = c), f && a !== null && typeof a == "object" && (a = {}), r.ensure(a, d)
  })
}
export {
  u as k
};