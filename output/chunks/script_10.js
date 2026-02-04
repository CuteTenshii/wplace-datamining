import {
  m as u,
  k as t,
  l as y,
  E as _,
  M as c,
  N as g,
  O as h,
  P as p,
  Q as i
} from "./B2OmeKf3.js";
import {
  B as E
} from "./DimIQ9-r.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
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
  var d = new E(e),
    l = o ? _ : 0;

  function r(a, f) {
    if (t) {
      const b = c(e) === g;
      if (a === b) {
        var s = h();
        p(s), d.anchor = s, i(!1), d.ensure(a, f), i(!0);
        return
      }
    }
    d.ensure(a, f)
  }
  u(() => {
    var a = !1;
    n((f, s = !0) => {
      a = !0, r(s, f)
    }), a || r(!1, null)
  }, l)
}
export {
  v as i
};