import {
  C as _,
  A as b,
  B as g,
  E as T,
  D as h,
  I as E,
  V as p,
  F as v,
  G as I,
  H as l,
  J as y
} from "./BnI0KJSr.js";
import {
  B as A
} from "./dn1LnbKR.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "fcddd0f6e36106ba60797dbbda80e38f1cbe4c75"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "db8a91ac-c0c9-4d04-aec2-6f2b3edcce25", e._sentryDebugIdIdentifier = "sentry-dbid-db8a91ac-c0c9-4d04-aec2-6f2b3edcce25")
  } catch {}
})();

function w(e, r, i = !1) {
  var t;
  b && (t = y, g());
  var d = new A(e),
    u = i ? T : 0;

  function c(a, n) {
    if (b) {
      var s = h(t),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var o = v();
        I(o), d.anchor = o, l(!1), d.ensure(a, n), l(!0);
        return
      }
    }
    d.ensure(a, n)
  }
  _(() => {
    var a = !1;
    r((n, s = 0) => {
      a = !0, c(s, n)
    }), a || c(!1, null)
  }, u)
}
export {
  w as i
};