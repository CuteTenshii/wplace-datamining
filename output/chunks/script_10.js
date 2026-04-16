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
  I as _,
  K as y
} from "./B8NcJmf7.js";
import {
  B as R
} from "./DtfkCBwv.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "4971e4e9-099a-4fd7-a872-57177da8af81", a._sentryDebugIdIdentifier = "sentry-dbid-4971e4e9-099a-4fd7-a872-57177da8af81")
  } catch {}
})();

function w(a, r, t = !1) {
  var d;
  u && (d = y, g());
  var i = new R(a),
    b = t ? T : 0;

  function o(e, n) {
    if (u) {
      var s = h(d),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), e !== f) {
        var l = v();
        I(l), i.anchor = l, _(!1), i.ensure(e, n), _(!0);
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
  }, b)
}
export {
  w as i
};