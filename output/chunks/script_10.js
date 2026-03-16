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
} from "./DOAgMrHD.js";
import {
  B as R
} from "./BGZlwEO3.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var r = new a.Error().stack;
    r && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[r] = "67829e48-d9ab-483f-b7f5-aa2ad9759796", a._sentryDebugIdIdentifier = "sentry-dbid-67829e48-d9ab-483f-b7f5-aa2ad9759796")
  } catch {}
})();

function m(a, r, t = !1) {
  var o;
  b && (o = I, g());
  var i = new R(a),
    _ = t ? T : 0;

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