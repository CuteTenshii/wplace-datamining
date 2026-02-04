import {
  m as u,
  k as d,
  l as y,
  E as _,
  M as g,
  N as h,
  O as c,
  P as p,
  Q as i
} from "./BxNCv_Ey.js";
import {
  B as E
} from "./BkI4mDnX.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
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
  d && y();
  var r = new E(e),
    l = o ? _ : 0;

  function t(a, f) {
    if (d) {
      const b = g(e) === h;
      if (a === b) {
        var s = c();
        p(s), r.anchor = s, i(!1), r.ensure(a, f), i(!0);
        return
      }
    }
    r.ensure(a, f)
  }
  u(() => {
    var a = !1;
    n((f, s = !0) => {
      a = !0, t(s, f)
    }), a || t(!1, null)
  }, l)
}
export {
  v as i
};