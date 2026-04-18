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
} from "./BYTf-X4W.js";
import {
  B as A
} from "./BT5xMYfw.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9cbd0829-94e9-4402-941f-e6dab5197448", e._sentryDebugIdIdentifier = "sentry-dbid-9cbd0829-94e9-4402-941f-e6dab5197448")
  } catch {}
})();

function w(e, r, t = !1) {
  var o;
  b && (o = y, g());
  var i = new A(e),
    c = t ? T : 0;

  function d(a, n) {
    if (b) {
      var s = h(o),
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
      a = !0, d(s, n)
    }), a || d(!1, null)
  }, c)
}
export {
  w as i
};