import {
  m as b,
  k as d,
  l as y,
  E as _,
  M as c,
  N as g,
  O as h,
  P as p,
  Q as i
} from "./ik5_Egbm.js";
import {
  B as E
} from "./BPObqDsp.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "e3702e10-e775-40f8-831f-f9bea2e4fb99", e._sentryDebugIdIdentifier = "sentry-dbid-e3702e10-e775-40f8-831f-f9bea2e4fb99")
  })()
} catch {}

function v(e, f, o = !1) {
  d && y();
  var r = new E(e),
    l = o ? _ : 0;

  function t(a, n) {
    if (d) {
      const u = c(e) === g;
      if (a === u) {
        var s = h();
        p(s), r.anchor = s, i(!1), r.ensure(a, n), i(!0);
        return
      }
    }
    r.ensure(a, n)
  }
  b(() => {
    var a = !1;
    f((n, s = !0) => {
      a = !0, t(s, n)
    }), a || t(!1, null)
  }, l)
}
export {
  v as i
};