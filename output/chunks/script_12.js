import {
  k as b,
  l as u,
  m as y,
  E as _,
  n as h,
  o as g,
  q as p,
  v as i,
  H as v,
  w as E
} from "./06720L-J.js";
import {
  B as T
} from "./uFxPBSpV.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", a._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(a, n, r) {
  var s;
  b && (s = E, u());
  var d = new T(a);
  y(() => {
    var e = n() ?? null;
    if (b) {
      var f = h(s),
        c = f === v,
        l = e !== null;
      if (c !== l) {
        var o = g();
        p(o), d.anchor = o, i(!1), d.ensure(e, e && (t => r(t, e))), i(!0);
        return
      }
    }
    d.ensure(e, e && (t => r(t, e)))
  }, _)
}
export {
  I as c
};