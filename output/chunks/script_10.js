import {
  C as _,
  A as l,
  B as g,
  E as T,
  D as h,
  I as E,
  V as p,
  F as v,
  G as I,
  H as u,
  J as y
} from "./BldsY2Le.js";
import {
  B as A
} from "./1iKIVv_b.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9cbd0829-94e9-4402-941f-e6dab5197448", e._sentryDebugIdIdentifier = "sentry-dbid-9cbd0829-94e9-4402-941f-e6dab5197448")
  } catch {}
})();

function w(e, r, f = !1) {
  var d;
  l && (d = y, g());
  var t = new A(e),
    c = f ? T : 0;

  function o(a, n) {
    if (l) {
      var s = h(d),
        i;
      if (s === E ? i = 0 : s === p ? i = !1 : i = parseInt(s.substring(1)), a !== i) {
        var b = v();
        I(b), t.anchor = b, u(!1), t.ensure(a, n), u(!0);
        return
      }
    }
    t.ensure(a, n)
  }
  _(() => {
    var a = !1;
    r((n, s = 0) => {
      a = !0, o(s, n)
    }), a || o(!1, null)
  }, c)
}
export {
  w as i
};