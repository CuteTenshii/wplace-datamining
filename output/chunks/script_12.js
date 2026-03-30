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
} from "./mNi6L4zY.js";
import {
  B as T
} from "./BMEspvSI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5caf19ac7c00bf81392f2f2ae2213734555d83f2"
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