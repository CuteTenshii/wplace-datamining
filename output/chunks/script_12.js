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
} from "./G_TaGb8Z.js";
import {
  B as T
} from "./Cbs1BdHv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", e._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(e, n, r) {
  var s;
  i && (s = E, u());
  var t = new T(e);
  y(() => {
    var a = n() ?? null;
    if (i) {
      var c = h(s),
        f = c === v,
        l = a !== null;
      if (f !== l) {
        var o = g();
        p(o), t.anchor = o, b(!1), t.ensure(a, a && (d => r(d, a))), b(!0);
        return
      }
    }
    t.ensure(a, a && (d => r(d, a)))
  }, _)
}
export {
  I as c
};