import {
  B as i,
  C as b,
  D as l,
  E as _,
  F as h,
  G as g,
  H as p,
  I as f,
  J as v,
  K as E
} from "./aONqeBJ4.js";
import {
  B as T
} from "./DZy5tdVJ.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "7d85e063-d0a5-4c31-a8f7-a3d644a075cd", a._sentryDebugIdIdentifier = "sentry-dbid-7d85e063-d0a5-4c31-a8f7-a3d644a075cd")
  } catch {}
})();

function w(a, n, d) {
  var s;
  i && (s = E, b());
  var r = new T(a);
  l(() => {
    var e = n() ?? null;
    if (i) {
      var c = h(s),
        u = c === v,
        y = e !== null;
      if (u !== y) {
        var o = g();
        p(o), r.anchor = o, f(!1), r.ensure(e, e && (t => d(t, e))), f(!0);
        return
      }
    }
    r.ensure(e, e && (t => d(t, e)))
  }, _)
}
export {
  w as c
};