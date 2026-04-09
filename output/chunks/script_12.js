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
} from "./Cu0FD5l7.js";
import {
  B as T
} from "./BfT---R5.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", a._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(a, n, d) {
  var s;
  f && (s = E, u());
  var r = new T(a);
  y(() => {
    var e = n() ?? null;
    if (f) {
      var b = h(s),
        c = b === v,
        l = e !== null;
      if (c !== l) {
        var o = g();
        p(o), r.anchor = o, i(!1), r.ensure(e, e && (t => d(t, e))), i(!0);
        return
      }
    }
    r.ensure(e, e && (t => d(t, e)))
  }, _)
}
export {
  I as c
};