import {
  k as i,
  l as y,
  m as c,
  E as _,
  n as h,
  o as g,
  q as p,
  v as f,
  H as v,
  w as E
} from "./C3nPqK5x.js";
import {
  B as T
} from "./C6C0bLUE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "658e35b6-5534-44de-8f97-06480bc9407b", e._sentryDebugIdIdentifier = "sentry-dbid-658e35b6-5534-44de-8f97-06480bc9407b")
  } catch {}
})();

function I(e, n, r) {
  var s;
  i && (s = E, y());
  var t = new T(e);
  c(() => {
    var a = n() ?? null;
    if (i) {
      var b = h(s),
        l = b === v,
        u = a !== null;
      if (l !== u) {
        var o = g();
        p(o), t.anchor = o, f(!1), t.ensure(a, a && (d => r(d, a))), f(!0);
        return
      }
    }
    t.ensure(a, a && (d => r(d, a)))
  }, _)
}
export {
  I as c
};