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
} from "./DjeFwfzX.js";
import {
  B as T
} from "./DG8YcVmp.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "7d85e063-d0a5-4c31-a8f7-a3d644a075cd", a._sentryDebugIdIdentifier = "sentry-dbid-7d85e063-d0a5-4c31-a8f7-a3d644a075cd")
  } catch {}
})();

function w(a, n, d) {
  var s;
  i && (s = E, l());
  var r = new T(a);
  _(() => {
    var e = n() ?? null;
    if (i) {
      var u = h(s),
        y = u === v,
        c = e !== null;
      if (y !== c) {
        var o = g();
        p(o), r.anchor = o, f(!1), r.ensure(e, e && (t => d(t, e))), f(!0);
        return
      }
    }
    r.ensure(e, e && (t => d(t, e)))
  }, b)
}
export {
  w as c
};