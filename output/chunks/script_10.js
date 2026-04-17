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
  H as b,
  J as y
} from "./ButFgnm2.js";
import {
  B as A
} from "./BcEZIty_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e00cf9360a6b375b0d5f70104e81f621ce41927c"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "db8a91ac-c0c9-4d04-aec2-6f2b3edcce25", e._sentryDebugIdIdentifier = "sentry-dbid-db8a91ac-c0c9-4d04-aec2-6f2b3edcce25")
  } catch {}
})();

function w(e, r, t = !1) {
  var c;
  l && (c = y, g());
  var i = new A(e),
    u = t ? T : 0;

  function d(a, n) {
    if (l) {
      var s = h(c),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var o = v();
        I(o), i.anchor = o, b(!1), i.ensure(a, n), b(!0);
        return
      }
    }
    i.ensure(a, n)
  }
  _(() => {
    var a = !1;
    r((n, s = 0) => {
      a = !0, d(s, n)
    }), a || d(!1, null)
  }, u)
}
export {
  w as i
};