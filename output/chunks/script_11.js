import {
  j as u,
  h as t,
  i as b,
  E as y,
  Y as _,
  Z as h,
  _ as g,
  V as p,
  B as E,
  a0 as i
} from "./DXiHgRqS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2df914dd371fba2112b2cd92c4cdc7ac8c5482fe"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cbc66b29-66a2-450c-8c9d-4fddcdfa07ef", e._sentryDebugIdIdentifier = "sentry-dbid-cbc66b29-66a2-450c-8c9d-4fddcdfa07ef")
  })()
} catch {}

function w(e, n, c = !1) {
  t && b();
  var f = new E(e),
    l = c ? y : 0;

  function r(a, d) {
    if (t) {
      const o = _(e) === h;
      if (a === o) {
        var s = g();
        p(s), f.anchor = s, i(!1), f.ensure(a, d), i(!0);
        return
      }
    }
    f.ensure(a, d)
  }
  u(() => {
    var a = !1;
    n((d, s = !0) => {
      a = !0, r(s, d)
    }), a || r(!1, null)
  }, l)
}
export {
  w as i
};