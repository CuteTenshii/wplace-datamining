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
} from "./Bl5qixfQ.js";
import {
  B as E
} from "./C76OEIx_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5813ae56f58e7333550e54b13dee572a566ecd62"
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
      const u = c(e) === g;
      if (a === u) {
        var s = h();
        p(s), r.anchor = s, i(!1), r.ensure(a, f), i(!0);
        return
      }
    }
    r.ensure(a, f)
  }
  b(() => {
    var a = !1;
    n((f, s = !0) => {
      a = !0, t(s, f)
    }), a || t(!1, null)
  }, l)
}
export {
  v as i
};