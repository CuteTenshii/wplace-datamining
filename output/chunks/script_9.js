import {
  m as c,
  k as l,
  l as g,
  E as T,
  n as h,
  H as E,
  V as p,
  o as v,
  q as y,
  v as u,
  w as I
} from "./BGZizgo7.js";
import {
  B as R
} from "./mM-ynKa3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9257b4fb-7e70-47a7-a9f6-6ade8f65e57b", e._sentryDebugIdIdentifier = "sentry-dbid-9257b4fb-7e70-47a7-a9f6-6ade8f65e57b")
  } catch {}
})();

function m(e, r, t = !1) {
  var d;
  l && (d = I, g());
  var i = new R(e),
    _ = t ? T : 0;

  function o(a, n) {
    if (l) {
      var s = h(d),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var b = v();
        y(b), i.anchor = b, u(!1), i.ensure(a, n), u(!0);
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
  m as i
};