import {
  k as i,
  l as u,
  m as y,
  E as _,
  n as h,
  o as g,
  q as p,
  v as f,
  H as v,
  w as E
} from "./CA9fhze-.js";
import {
  B as T
} from "./B032FXMg.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", a._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(a, n, r) {
  var s;
  i && (s = E, u());
  var d = new T(a);
  y(() => {
    var e = n() ?? null;
    if (i) {
      var b = h(s),
        c = b === v,
        l = e !== null;
      if (c !== l) {
        var o = g();
        p(o), d.anchor = o, f(!1), d.ensure(e, e && (t => r(t, e))), f(!0);
        return
      }
    }
    d.ensure(e, e && (t => r(t, e)))
  }, _)
}
export {
  I as c
};