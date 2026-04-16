import {
  B as i,
  C as l,
  D as _,
  E as h,
  F as b,
  G as g,
  H as p,
  I as f,
  J as v,
  K as E
} from "./B8NcJmf7.js";
import {
  B as T
} from "./DtfkCBwv.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "7d85e063-d0a5-4c31-a8f7-a3d644a075cd", a._sentryDebugIdIdentifier = "sentry-dbid-7d85e063-d0a5-4c31-a8f7-a3d644a075cd")
  } catch {}
})();

function w(a, n, r) {
  var s;
  i && (s = E, l());
  var d = new T(a);
  _(() => {
    var e = n() ?? null;
    if (i) {
      var c = b(s),
        u = c === v,
        y = e !== null;
      if (u !== y) {
        var o = g();
        p(o), d.anchor = o, f(!1), d.ensure(e, e && (t => r(t, e))), f(!0);
        return
      }
    }
    d.ensure(e, e && (t => r(t, e)))
  }, h)
}
export {
  w as c
};