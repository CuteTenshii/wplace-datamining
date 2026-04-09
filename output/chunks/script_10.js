import {
  m as c,
  k as b,
  l as g,
  E as T,
  n as h,
  H as E,
  X as p,
  o as v,
  q as y,
  v as u,
  w as I
} from "./Cu0FD5l7.js";
import {
  B as R
} from "./BfT---R5.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "67829e48-d9ab-483f-b7f5-aa2ad9759796", a._sentryDebugIdIdentifier = "sentry-dbid-67829e48-d9ab-483f-b7f5-aa2ad9759796")
  } catch {}
})();

function m(a, r, d = !1) {
  var t;
  b && (t = I, g());
  var i = new R(a),
    _ = d ? T : 0;

  function o(e, n) {
    if (b) {
      var s = h(t),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), e !== f) {
        var l = v();
        y(l), i.anchor = l, u(!1), i.ensure(e, n), u(!0);
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
  m as i
};