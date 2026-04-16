import {
  D as b,
  B as u,
  C as g,
  E as T,
  F as h,
  J as E,
  W as p,
  G as v,
  H as I,
  I as c,
  K as y
} from "./jMNCXwTX.js";
import {
  B as R
} from "./bJ_86NIk.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "4971e4e9-099a-4fd7-a872-57177da8af81", a._sentryDebugIdIdentifier = "sentry-dbid-4971e4e9-099a-4fd7-a872-57177da8af81")
  } catch {}
})();

function w(a, r, t = !1) {
  var d;
  u && (d = y, g());
  var i = new R(a),
    _ = t ? T : 0;

  function o(e, n) {
    if (u) {
      var s = h(d),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), e !== f) {
        var l = v();
        I(l), i.anchor = l, c(!1), i.ensure(e, n), c(!0);
        return
      }
    }
    i.ensure(e, n)
  }
  b(() => {
    var e = !1;
    r((n, s = 0) => {
      e = !0, o(s, n)
    }), e || o(!1, null)
  }, _)
}
export {
  w as i
};