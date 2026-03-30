import {
  k as f,
  l as u,
  m as y,
  E as _,
  n as h,
  o as g,
  q as p,
  v as i,
  H as v,
  w as E
} from "./DySbC8v5.js";
import {
  B as T
} from "./YsyuyGUJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b137ab40316e1e3f22728d8060cbbff276df86f5"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", e._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(e, n, r) {
  var s;
  f && (s = E, u());
  var d = new T(e);
  y(() => {
    var a = n() ?? null;
    if (f) {
      var b = h(s),
        c = b === v,
        l = a !== null;
      if (c !== l) {
        var o = g();
        p(o), d.anchor = o, i(!1), d.ensure(a, a && (t => r(t, a))), i(!0);
        return
      }
    }
    d.ensure(a, a && (t => r(t, a)))
  }, _)
}
export {
  I as c
};