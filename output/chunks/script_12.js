import {
  A as f,
  B as c,
  C as l,
  E as _,
  D as h,
  F as g,
  G as p,
  H as i,
  I as v,
  J as E
} from "./BldsY2Le.js";
import {
  B as T
} from "./1iKIVv_b.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "f830a3cf-ef83-439b-ae42-8476a3b9fa37", a._sentryDebugIdIdentifier = "sentry-dbid-f830a3cf-ef83-439b-ae42-8476a3b9fa37")
  } catch {}
})();

function w(a, n, r) {
  var d;
  f && (d = E, c());
  var t = new T(a);
  l(() => {
    var e = n() ?? null;
    if (f) {
      var b = h(d),
        u = b === v,
        y = e !== null;
      if (u !== y) {
        var o = g();
        p(o), t.anchor = o, i(!1), t.ensure(e, e && (s => r(s, e))), i(!0);
        return
      }
    }
    t.ensure(e, e && (s => r(s, e)))
  }, _)
}
export {
  w as c
};