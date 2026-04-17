import {
  a7 as s,
  C as t,
  A as o,
  B as i
} from "./Nz8BX01A.js";
import {
  B as c
} from "./B_hj-bKY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6184a289-58ff-4bd2-9548-67c92c329933", e._sentryDebugIdIdentifier = "sentry-dbid-6184a289-58ff-4bd2-9548-67c92c329933")
  } catch {}
})();
const b = Symbol("NaN");

function u(e, a, r) {
  o && i();
  var d = new c(e),
    f = !s();
  t(() => {
    var n = a();
    n !== n && (n = b), f && n !== null && typeof n == "object" && (n = {}), d.ensure(n, r)
  })
}
export {
  u as k
};