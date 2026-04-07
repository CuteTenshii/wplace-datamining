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
} from "./DEEyd5H-.js";
import {
  B as T
} from "./BHc60j2E.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ae31973f4926d133f10795b35e7941f19bd2842"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", e._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(e, n, r) {
  var s;
  i && (s = E, u());
  var d = new T(e);
  y(() => {
    var a = n() ?? null;
    if (i) {
      var b = h(s),
        c = b === v,
        l = a !== null;
      if (c !== l) {
        var o = g();
        p(o), d.anchor = o, f(!1), d.ensure(a, a && (t => r(t, a))), f(!0);
        return
      }
    }
    d.ensure(a, a && (t => r(t, a)))
  }, _)
}
export {
  I as c
};