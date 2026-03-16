import {
  k as i,
  l as u,
  m as y,
  E as _,
  n as h,
  o as g,
  q as p,
  v as b,
  H as v,
  w as E
} from "./DBVFc_3b.js";
import {
  B as T
} from "./DsV_B9vD.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", e._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(e, n, d) {
  var s;
  i && (s = E, u());
  var r = new T(e);
  y(() => {
    var a = n() ?? null;
    if (i) {
      var f = h(s),
        c = f === v,
        l = a !== null;
      if (c !== l) {
        var o = g();
        p(o), r.anchor = o, b(!1), r.ensure(a, a && (t => d(t, a))), b(!0);
        return
      }
    }
    r.ensure(a, a && (t => d(t, a)))
  }, _)
}
export {
  I as c
};