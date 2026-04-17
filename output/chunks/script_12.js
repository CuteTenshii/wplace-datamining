import {
  A as i,
  B as y,
  C as l,
  E as _,
  D as h,
  F as g,
  G as p,
  H as c,
  I as v,
  J as E
} from "./Dcbzw1se.js";
import {
  B as T
} from "./DKKlAk63.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "c97c93f5-c8ea-43a7-9a8c-74a24fb2c39b", a._sentryDebugIdIdentifier = "sentry-dbid-c97c93f5-c8ea-43a7-9a8c-74a24fb2c39b")
  } catch {}
})();

function w(a, n, r) {
  var d;
  i && (d = E, y());
  var t = new T(a);
  l(() => {
    var e = n() ?? null;
    if (i) {
      var f = h(d),
        b = f === v,
        u = e !== null;
      if (b !== u) {
        var o = g();
        p(o), t.anchor = o, c(!1), t.ensure(e, e && (s => r(s, e))), c(!0);
        return
      }
    }
    t.ensure(e, e && (s => r(s, e)))
  }, _)
}
export {
  w as c
};