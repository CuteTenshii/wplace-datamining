import {
  m as _,
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
} from "./G_TaGb8Z.js";
import {
  B as R
} from "./Cbs1BdHv.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "67829e48-d9ab-483f-b7f5-aa2ad9759796", a._sentryDebugIdIdentifier = "sentry-dbid-67829e48-d9ab-483f-b7f5-aa2ad9759796")
  } catch {}
})();

function m(a, r, t = !1) {
  var o;
  b && (o = I, g());
  var i = new R(a),
    c = t ? T : 0;

  function d(e, n) {
    if (b) {
      var s = h(o),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), e !== f) {
        var l = v();
        y(l), i.anchor = l, u(!1), i.ensure(e, n), u(!0);
        return
      }
    }
    i.ensure(e, n)
  }
  _(() => {
    var e = !1;
    r((n, s = 0) => {
      e = !0, d(s, n)
    }), e || d(!1, null)
  }, c)
}
export {
  m as i
};