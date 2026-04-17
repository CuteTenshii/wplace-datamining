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
} from "./C0_5AQd4.js";
import {
  B as A
} from "./Cw986E_3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "db8a91ac-c0c9-4d04-aec2-6f2b3edcce25", e._sentryDebugIdIdentifier = "sentry-dbid-db8a91ac-c0c9-4d04-aec2-6f2b3edcce25")
  } catch {}
})();

function w(e, r, f = !1) {
  var t;
  l && (t = y, g());
  var d = new A(e),
    u = f ? T : 0;

  function c(a, n) {
    if (l) {
      var s = h(t),
        i;
      if (s === E ? i = 0 : s === p ? i = !1 : i = parseInt(s.substring(1)), a !== i) {
        var o = v();
        I(o), d.anchor = o, b(!1), d.ensure(a, n), b(!0);
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