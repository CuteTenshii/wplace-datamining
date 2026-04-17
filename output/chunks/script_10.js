import {
  C as _,
  A as u,
  B as g,
  E as T,
  D as h,
  I as E,
  V as p,
  F as v,
  G as I,
  H as b,
  J as y
} from "./CdM0B1iz.js";
import {
  B as A
} from "./BURqiXQi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9cbd0829-94e9-4402-941f-e6dab5197448", e._sentryDebugIdIdentifier = "sentry-dbid-9cbd0829-94e9-4402-941f-e6dab5197448")
  } catch {}
})();

function w(e, r, t = !1) {
  var d;
  u && (d = y, g());
  var f = new A(e),
    c = t ? T : 0;

  function o(a, n) {
    if (u) {
      var s = h(d),
        i;
      if (s === E ? i = 0 : s === p ? i = !1 : i = parseInt(s.substring(1)), a !== i) {
        var l = v();
        I(l), f.anchor = l, b(!1), f.ensure(a, n), b(!0);
        return
      }
    }
    f.ensure(a, n)
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