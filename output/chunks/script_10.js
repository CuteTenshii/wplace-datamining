import {
  m as c,
  k as l,
  l as g,
  E as T,
  n as h,
  H as E,
  X as p,
  o as v,
  q as y,
  v as u,
  w as I
} from "./Bg2fLyAp.js";
import {
  B as R
} from "./D0I7CApi.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "1e0e8686272f8ab69a6b4937a8dffbb2f245b796"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "67829e48-d9ab-483f-b7f5-aa2ad9759796", a._sentryDebugIdIdentifier = "sentry-dbid-67829e48-d9ab-483f-b7f5-aa2ad9759796")
  } catch {}
})();

function m(a, r, t = !1) {
  var o;
  l && (o = I, g());
  var i = new R(a),
    _ = t ? T : 0;

  function d(e, n) {
    if (l) {
      var s = h(o),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), e !== f) {
        var b = v();
        y(b), i.anchor = b, u(!1), i.ensure(e, n), u(!0);
        return
      }
    }
    i.ensure(e, n)
  }
  c(() => {
    var e = !1;
    r((n, s = 0) => {
      e = !0, d(s, n)
    }), e || d(!1, null)
  }, _)
}
export {
  m as i
};