import {
  C as _,
  A as o,
  B as g,
  E as T,
  D as h,
  I as E,
  V as p,
  F as v,
  G as I,
  H as l,
  J as y
} from "./Dcbzw1se.js";
import {
  B as A
} from "./DKKlAk63.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "db8a91ac-c0c9-4d04-aec2-6f2b3edcce25", e._sentryDebugIdIdentifier = "sentry-dbid-db8a91ac-c0c9-4d04-aec2-6f2b3edcce25")
  } catch {}
})();

function w(e, r, t = !1) {
  var b;
  o && (b = y, g());
  var i = new A(e),
    u = t ? T : 0;

  function c(a, n) {
    if (o) {
      var s = h(b),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var d = v();
        I(d), i.anchor = d, l(!1), i.ensure(a, n), l(!0);
        return
      }
    }
    i.ensure(a, n)
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