import {
  m as u,
  k as t,
  l as y,
  E as _,
  V as c,
  W as g,
  X as h,
  R as p,
  B as E,
  Y as i
} from "./D9fqFAK1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "169eae4653f57d833d0e072bc2f6b253b1f72531"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b1552324-d900-4c6f-bab9-101627e611d2", e._sentryDebugIdIdentifier = "sentry-dbid-b1552324-d900-4c6f-bab9-101627e611d2")
  })()
} catch {}

function w(e, n, l = !1) {
  t && y();
  var f = new E(e),
    o = l ? _ : 0;

  function r(a, s) {
    if (t) {
      const b = c(e) === g;
      if (a === b) {
        var d = h();
        p(d), f.anchor = d, i(!1), f.ensure(a, s), i(!0);
        return
      }
    }
    f.ensure(a, s)
  }
  u(() => {
    var a = !1;
    n((s, d = !0) => {
      a = !0, r(d, s)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};