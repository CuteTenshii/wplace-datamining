import {
  k as i,
  l as y,
  m as _,
  E as c,
  n as h,
  o as g,
  q as p,
  v as f,
  H as v,
  w as E
} from "./BGZizgo7.js";
import {
  B as T
} from "./mM-ynKa3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "658e35b6-5534-44de-8f97-06480bc9407b", e._sentryDebugIdIdentifier = "sentry-dbid-658e35b6-5534-44de-8f97-06480bc9407b")
  } catch {}
})();

function I(e, a, r) {
  var s;
  i && (s = E, y());
  var d = new T(e);
  _(() => {
    var n = a() ?? null;
    if (i) {
      var b = h(s),
        l = b === v,
        u = n !== null;
      if (l !== u) {
        var o = g();
        p(o), d.anchor = o, f(!1), d.ensure(n, n && (t => r(t, n))), f(!0);
        return
      }
    }
    d.ensure(n, n && (t => r(t, n)))
  }, c)
}
export {
  I as c
};