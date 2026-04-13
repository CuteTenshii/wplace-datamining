import {
  k as b,
  l as u,
  m as y,
  E as _,
  n as h,
  o as g,
  q as p,
  v as f,
  H as v,
  w as E
} from "./Bg2fLyAp.js";
import {
  B as T
} from "./D0I7CApi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29b3b0d0-433f-4cba-9d46-3b4ebccd419f", e._sentryDebugIdIdentifier = "sentry-dbid-29b3b0d0-433f-4cba-9d46-3b4ebccd419f")
  } catch {}
})();

function I(e, n, r) {
  var s;
  b && (s = E, u());
  var d = new T(e);
  y(() => {
    var a = n() ?? null;
    if (b) {
      var i = h(s),
        c = i === v,
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