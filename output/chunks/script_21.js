import {
  a7 as s,
  C as t,
  A as o,
  B as i
} from "./BBqfZ3Cy.js";
import {
  B as c
} from "./Dd0VJ3Wc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6184a289-58ff-4bd2-9548-67c92c329933", e._sentryDebugIdIdentifier = "sentry-dbid-6184a289-58ff-4bd2-9548-67c92c329933")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, n, r) {
  o && i();
  var d = new c(e),
    f = !s();
  t(() => {
    var a = n();
    a !== a && (a = y), f && a !== null && typeof a == "object" && (a = {}), d.ensure(a, r)
  })
}
export {
  u as k
};