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
} from "./CJNfechn.js";
import {
  B as T
} from "./4d85vL6s.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "7d85e063-d0a5-4c31-a8f7-a3d644a075cd", a._sentryDebugIdIdentifier = "sentry-dbid-7d85e063-d0a5-4c31-a8f7-a3d644a075cd")
  } catch {}
})();

function w(a, d, n) {
  var s;
  i && (s = E, l());
  var r = new T(a);
  _(() => {
    var e = d() ?? null;
    if (i) {
      var c = h(s),
        u = c === v,
        y = e !== null;
      if (u !== y) {
        var o = g();
        p(o), r.anchor = o, f(!1), r.ensure(e, e && (t => n(t, e))), f(!0);
        return
      }
    }
    r.ensure(e, e && (t => n(t, e)))
  }, b)
}
export {
  w as c
};