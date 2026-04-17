import {
  C as _,
  A as l,
  B as g,
  E as T,
  D as h,
  I as E,
  V as p,
  F as v,
  G as I,
  H as u,
  J as y
} from "./BBqfZ3Cy.js";
import {
  B as A
} from "./Dd0VJ3Wc.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "db8a91ac-c0c9-4d04-aec2-6f2b3edcce25", a._sentryDebugIdIdentifier = "sentry-dbid-db8a91ac-c0c9-4d04-aec2-6f2b3edcce25")
  } catch {}
})();

function w(a, r, d = !1) {
  var t;
  l && (t = y, g());
  var i = new A(a),
    b = d ? T : 0;

  function c(e, n) {
    if (l) {
      var s = h(t),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), e !== f) {
        var o = v();
        I(o), i.anchor = o, u(!1), i.ensure(e, n), u(!0);
        return
      }
    }
    i.ensure(e, n)
  }
  _(() => {
    var e = !1;
    r((n, s = 0) => {
      e = !0, c(s, n)
    }), e || c(!1, null)
  }, b)
}
export {
  w as i
};