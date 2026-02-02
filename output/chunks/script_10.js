import {
  m as u,
  k as i,
  l as y,
  E as _,
  M as c,
  N as g,
  O as h,
  P as p,
  Q as d
} from "./CJKTONAG.js";
import {
  B as E
} from "./DfVLgPoh.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
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
  i && y();
  var r = new E(e),
    l = o ? _ : 0;

  function t(a, f) {
    if (i) {
      const b = c(e) === g;
      if (a === b) {
        var s = h();
        p(s), r.anchor = s, d(!1), r.ensure(a, f), d(!0);
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