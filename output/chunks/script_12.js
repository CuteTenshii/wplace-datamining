import {
  B as i,
  C as l,
  D as _,
  E as b,
  F as h,
  G as g,
  H as p,
  I as f,
  J as v,
  K as E
} from "./CaCjFaGC.js";
import {
  B as T
} from "./6uFwxVbh.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "cfa0387f7130e8b16c3d20b0694a74c32ca6dc49"
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
      var c = h(s),
        u = c === v,
        y = e !== null;
      if (u !== y) {
        var o = g();
        p(o), d.anchor = o, f(!1), d.ensure(e, e && (t => r(t, e))), f(!0);
        return
      }
    }
    d.ensure(e, e && (t => r(t, e)))
  }, b)
}
export {
  w as c
};