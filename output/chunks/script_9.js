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
} from "./wA7ZkjY7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d65f9ae170f28bf8512e5ff594eb3797e287c65b"
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
    o = l ? _ : 0;

  function r(a, s) {
    if (t) {
      const b = c(e) === g;
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