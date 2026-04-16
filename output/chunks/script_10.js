import {
  D as c,
  B as u,
  C as g,
  E as T,
  F as h,
  J as E,
  W as p,
  G as v,
  H as I,
  I as b,
  K as y
} from "./CP18E9YK.js";
import {
  B as R
} from "./CWcicdud.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
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
        I(l), i.anchor = l, b(!1), i.ensure(e, n), b(!0);
        return
      }
    }
    i.ensure(e, n)
  }
  c(() => {
    var e = !1;
    r((n, s = 0) => {
      e = !0, o(s, n)
    }), e || o(!1, null)
  }, _)
}
export {
  w as i
};