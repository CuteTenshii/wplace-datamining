import {
  a8 as s,
  D as t,
  B as o,
  C as i
} from "./CsHGdBfZ.js";
import {
  B as c
} from "./BxovDFHw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "19316600-5f5e-4303-98e9-2dd9ce5f550a", e._sentryDebugIdIdentifier = "sentry-dbid-19316600-5f5e-4303-98e9-2dd9ce5f550a")
  } catch {}
})();
const y = Symbol("NaN");

function u(e, a, d) {
  o && i();
  var r = new c(e),
    f = !s();
  t(() => {
    var n = a();
    n !== n && (n = y), f && n !== null && typeof n == "object" && (n = {}), r.ensure(n, d)
  })
}
export {
  u as k
};