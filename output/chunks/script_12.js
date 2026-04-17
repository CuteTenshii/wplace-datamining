import {
  A as f,
  B as l,
  C as _,
  E as b,
  D as h,
  F as g,
  G as p,
  H as i,
  I as v,
  J as E
} from "./CdM0B1iz.js";
import {
  B as T
} from "./BURqiXQi.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "f830a3cf-ef83-439b-ae42-8476a3b9fa37", a._sentryDebugIdIdentifier = "sentry-dbid-f830a3cf-ef83-439b-ae42-8476a3b9fa37")
  } catch {}
})();

function w(a, n, r) {
  var d;
  f && (d = E, l());
  var t = new T(a);
  _(() => {
    var e = n() ?? null;
    if (f) {
      var u = h(d),
        y = u === v,
        c = e !== null;
      if (y !== c) {
        var o = g();
        p(o), t.anchor = o, i(!1), t.ensure(e, e && (s => r(s, e))), i(!0);
        return
      }
    }
    t.ensure(e, e && (s => r(s, e)))
  }, b)
}
export {
  w as c
};