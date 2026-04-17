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
  H as l,
  J as y
} from "./Nz8BX01A.js";
import {
  B as A
} from "./B_hj-bKY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "db8a91ac-c0c9-4d04-aec2-6f2b3edcce25", e._sentryDebugIdIdentifier = "sentry-dbid-db8a91ac-c0c9-4d04-aec2-6f2b3edcce25")
  } catch {}
})();

function w(e, r, t = !1) {
  var c;
  b && (c = y, g());
  var f = new A(e),
    u = t ? T : 0;

  function d(a, n) {
    if (b) {
      var s = h(c),
        i;
      if (s === E ? i = 0 : s === p ? i = !1 : i = parseInt(s.substring(1)), a !== i) {
        var o = v();
        I(o), f.anchor = o, l(!1), f.ensure(a, n), l(!0);
        return
      }
    }
    f.ensure(a, n)
  }
  _(() => {
    var a = !1;
    r((n, s = 0) => {
      a = !0, d(s, n)
    }), a || d(!1, null)
  }, u)
}
export {
  w as i
};