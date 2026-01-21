import {
  m as b,
  k as t,
  l as y,
  E as _,
  L as c,
  M as g,
  N as h,
  O as p,
  B as E,
  P as i
} from "./8X9bXL-a.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b9ce0a1-d4bd-4352-86f9-dd53263447a0", e._sentryDebugIdIdentifier = "sentry-dbid-6b9ce0a1-d4bd-4352-86f9-dd53263447a0")
  })()
} catch {}

function w(e, n, l = !1) {
  t && y();
  var f = new E(e),
    o = l ? _ : 0;

  function r(a, d) {
    if (t) {
      const u = c(e) === g;
      if (a === u) {
        var s = h();
        p(s), f.anchor = s, i(!1), f.ensure(a, d), i(!0);
        return
      }
    }
    f.ensure(a, d)
  }
  b(() => {
    var a = !1;
    n((d, s = !0) => {
      a = !0, r(s, d)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};