import {
  m as u,
  k as d,
  l as y,
  E as _,
  M as c,
  N as g,
  O as h,
  P as p,
  Q as i
} from "./0lw74TdK.js";
import {
  B as E
} from "./Bqe4Xki1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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

  function t(a, s) {
    if (d) {
      const b = c(e) === g;
      if (a === b) {
        var f = h();
        p(f), r.anchor = f, i(!1), r.ensure(a, s), i(!0);
        return
      }
    }
    r.ensure(a, s)
  }
  u(() => {
    var a = !1;
    n((s, f = !0) => {
      a = !0, t(f, s)
    }), a || t(!1, null)
  }, l)
}
export {
  v as i
};