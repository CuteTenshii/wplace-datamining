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
} from "./BrDbkhPu.js";
import {
  B as E
} from "./DSll-rKl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e3702e10-e775-40f8-831f-f9bea2e4fb99", e._sentryDebugIdIdentifier = "sentry-dbid-e3702e10-e775-40f8-831f-f9bea2e4fb99")
  })()
} catch {}

function v(e, a, o = !1) {
  d && y();
  var r = new E(e),
    l = o ? _ : 0;

  function t(f, n) {
    if (d) {
      const u = c(e) === g;
      if (f === u) {
        var s = h();
        p(s), r.anchor = s, i(!1), r.ensure(f, n), i(!0);
        return
      }
    }
    r.ensure(f, n)
  }
  b(() => {
    var f = !1;
    a((n, s = !0) => {
      f = !0, t(s, n)
    }), f || t(!1, null)
  }, l)
}
export {
  v as i
};