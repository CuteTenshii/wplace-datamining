import {
  D as _,
  B as b,
  C as g,
  E as T,
  F as h,
  J as E,
  W as p,
  G as v,
  H as I,
  I as u,
  K as y
} from "./aONqeBJ4.js";
import {
  B as R
} from "./DZy5tdVJ.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "4971e4e9-099a-4fd7-a872-57177da8af81", a._sentryDebugIdIdentifier = "sentry-dbid-4971e4e9-099a-4fd7-a872-57177da8af81")
  } catch {}
})();

function w(a, r, t = !1) {
  var d;
  b && (d = y, g());
  var i = new R(a),
    c = t ? T : 0;

  function o(e, n) {
    if (b) {
      var s = h(d),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), e !== f) {
        var l = v();
        I(l), i.anchor = l, u(!1), i.ensure(e, n), u(!0);
        return
      }
    }
    i.ensure(e, n)
  }
  _(() => {
    var e = !1;
    r((n, s = 0) => {
      e = !0, o(s, n)
    }), e || o(!1, null)
  }, c)
}
export {
  w as i
};