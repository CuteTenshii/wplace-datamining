import {
  m as u,
  k as t,
  l as y,
  E as c,
  V as _,
  W as g,
  X as h,
  R as p,
  B as E,
  Y as i
} from "./C2eLZfbI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c498731282e2bfa2154b3f8dba9ff6bac18e13ab"
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
  var d = new E(e),
    o = l ? c : 0;

  function r(a, s) {
    if (t) {
      const b = _(e) === g;
      if (a === b) {
        var f = h();
        p(f), d.anchor = f, i(!1), d.ensure(a, s), i(!0);
        return
      }
    }
    d.ensure(a, s)
  }
  u(() => {
    var a = !1;
    n((s, f = !0) => {
      a = !0, r(f, s)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};