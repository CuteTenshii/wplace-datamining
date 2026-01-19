import {
  m as b,
  k as t,
  l as c,
  E as y,
  a5 as _,
  a6 as g,
  a7 as h,
  P as p,
  B as E,
  a8 as i
} from "./DcuED2r1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "16e4ebf9-92c5-4ad2-939c-477f90b323c4", e._sentryDebugIdIdentifier = "sentry-dbid-16e4ebf9-92c5-4ad2-939c-477f90b323c4")
  })()
} catch {}

function w(e, n, l = !1) {
  t && c();
  var d = new E(e),
    o = l ? y : 0;

  function r(a, s) {
    if (t) {
      const u = _(e) === g;
      if (a === u) {
        var f = h();
        p(f), d.anchor = f, i(!1), d.ensure(a, s), i(!0);
        return
      }
    }
    d.ensure(a, s)
  }
  b(() => {
    var a = !1;
    n((s, f = !0) => {
      a = !0, r(f, s)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};