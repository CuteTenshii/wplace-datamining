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
} from "./h0AjwZJZ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ec3fee10a39ac222b6aa79fae966fd9b93c3dd3"
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

function w(e, n, l = !1) {
  t && b();
  var f = new E(e),
    o = l ? y : 0;

  function r(a, d) {
    if (t) {
      const c = _(e) === h;
      if (a === c) {
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
  }, o)
}
export {
  w as i
};