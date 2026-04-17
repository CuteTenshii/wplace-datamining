import {
  A as c,
  B as l,
  C as _,
  E as b,
  D as h,
  F as g,
  G as p,
  H as i,
  I as v,
  J as E
} from "./BBqfZ3Cy.js";
import {
  B as T
} from "./Dd0VJ3Wc.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "c97c93f5-c8ea-43a7-9a8c-74a24fb2c39b", a._sentryDebugIdIdentifier = "sentry-dbid-c97c93f5-c8ea-43a7-9a8c-74a24fb2c39b")
  } catch {}
})();

function w(a, n, r) {
  var d;
  c && (d = E, l());
  var t = new T(a);
  _(() => {
    var e = n() ?? null;
    if (c) {
      var f = h(d),
        u = f === v,
        y = e !== null;
      if (u !== y) {
        var o = g();
        p(o), t.anchor = o, i(!1), t.ensure(e, e && (s => r(s, e))), i(!0);
        return
      }
    }
    t.ensure(e, e && (s => r(s, e)))
  }, b)
}
export {
  w as c
};