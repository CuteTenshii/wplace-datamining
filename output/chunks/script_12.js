import {
  A as o,
  B as c,
  C as l,
  E as _,
  D as h,
  F as g,
  G as p,
  H as i,
  I as v,
  J as E
} from "./CRmpufpB.js";
import {
  B as T
} from "./DJpJYZ2C.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "f830a3cf-ef83-439b-ae42-8476a3b9fa37", a._sentryDebugIdIdentifier = "sentry-dbid-f830a3cf-ef83-439b-ae42-8476a3b9fa37")
  } catch {}
})();

function w(a, n, r) {
  var d;
  o && (d = E, c());
  var t = new T(a);
  l(() => {
    var e = n() ?? null;
    if (o) {
      var u = h(d),
        y = u === v,
        b = e !== null;
      if (y !== b) {
        var f = g();
        p(f), t.anchor = f, i(!1), t.ensure(e, e && (s => r(s, e))), i(!0);
        return
      }
    }
    t.ensure(e, e && (s => r(s, e)))
  }, _)
}
export {
  w as c
};