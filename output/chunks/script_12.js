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
} from "./DAkfeAd4.js";
import {
  B as T
} from "./BGJhEoIA.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5b6c982e9643479451e4387b2e009c10939a1316"
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
      var f = h(s),
        c = f === v,
        l = a !== null;
      if (c !== l) {
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