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
  H as c,
  J as y
} from "./Bpkf4F49.js";
import {
  B as A
} from "./Bdfur2sK.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9cbd0829-94e9-4402-941f-e6dab5197448", e._sentryDebugIdIdentifier = "sentry-dbid-9cbd0829-94e9-4402-941f-e6dab5197448")
  } catch {}
})();

function w(e, r, t = !1) {
  var d;
  l && (d = y, g());
  var i = new A(e),
    u = t ? T : 0;

  function o(a, n) {
    if (l) {
      var s = h(d),
        f;
      if (s === E ? f = 0 : s === p ? f = !1 : f = parseInt(s.substring(1)), a !== f) {
        var b = v();
        I(b), i.anchor = b, c(!1), i.ensure(a, n), c(!0);
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
  }, u)
}
export {
  w as i
};