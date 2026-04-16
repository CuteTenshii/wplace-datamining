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
} from "./CJNfechn.js";
import {
  B as R
} from "./4d85vL6s.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "4971e4e9-099a-4fd7-a872-57177da8af81", e._sentryDebugIdIdentifier = "sentry-dbid-4971e4e9-099a-4fd7-a872-57177da8af81")
  } catch {}
})();

function w(e, r, t = !1) {
  var d;
  u && (d = y, g());
  var i = new R(e),
    _ = t ? T : 0;

  function o(a, n) {
    if (u) {
      var s = h(d),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var l = v();
        I(l), i.anchor = l, b(!1), i.ensure(a, n), b(!0);
        return
      }
    }
    i.ensure(a, n)
  }
  c(() => {
    var a = !1;
    r((n, s = 0) => {
      a = !0, o(s, n)
    }), a || o(!1, null)
  }, _)
}
export {
  w as i
};