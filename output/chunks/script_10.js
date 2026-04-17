import {
  C as _,
  A as b,
  B as g,
  E as T,
  D as h,
  I as E,
  V as p,
  F as v,
  G as I,
  H as u,
  J as y
} from "./DK4l5t5k.js";
import {
  B as A
} from "./Bd4Wcq2n.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9cbd0829-94e9-4402-941f-e6dab5197448", e._sentryDebugIdIdentifier = "sentry-dbid-9cbd0829-94e9-4402-941f-e6dab5197448")
  } catch {}
})();

function w(e, r, t = !1) {
  var d;
  b && (d = y, g());
  var i = new A(e),
    c = t ? T : 0;

  function o(a, n) {
    if (b) {
      var s = h(d),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var l = v();
        I(l), i.anchor = l, u(!1), i.ensure(a, n), u(!0);
        return
      }
    }
    i.ensure(a, n)
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