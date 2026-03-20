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
} from "./CA_jRce9.js";
import {
  B as R
} from "./B7WQodiT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8982ef6b1b489154c6458cf227ee17f00e1038fe"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "67829e48-d9ab-483f-b7f5-aa2ad9759796", e._sentryDebugIdIdentifier = "sentry-dbid-67829e48-d9ab-483f-b7f5-aa2ad9759796")
  } catch {}
})();

function m(e, r, t = !1) {
  var o;
  b && (o = I, g());
  var i = new R(e),
    _ = t ? T : 0;

  function d(a, n) {
    if (b) {
      var s = h(o),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var l = v();
        y(l), i.anchor = l, u(!1), i.ensure(a, n), u(!0);
        return
      }
    }
    i.ensure(a, n)
  }
  c(() => {
    var a = !1;
    r((n, s = 0) => {
      a = !0, d(s, n)
    }), a || d(!1, null)
  }, _)
}
export {
  m as i
};