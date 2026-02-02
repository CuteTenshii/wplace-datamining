import {
  m as b,
  k as t,
  l as y,
  E as _,
  M as g,
  N as h,
  O as c,
  P as p,
  Q as i
} from "./Pvk3sEWX.js";
import {
  B as E
} from "./CcL1_O_W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e3702e10-e775-40f8-831f-f9bea2e4fb99", e._sentryDebugIdIdentifier = "sentry-dbid-e3702e10-e775-40f8-831f-f9bea2e4fb99")
  })()
} catch {}

function v(e, n, o = !1) {
  t && y();
  var r = new E(e),
    l = o ? _ : 0;

  function d(a, f) {
    if (t) {
      const u = g(e) === h;
      if (a === u) {
        var s = c();
        p(s), r.anchor = s, i(!1), r.ensure(a, f), i(!0);
        return
      }
    }
    r.ensure(a, f)
  }
  b(() => {
    var a = !1;
    n((f, s = !0) => {
      a = !0, d(s, f)
    }), a || d(!1, null)
  }, l)
}
export {
  v as i
};