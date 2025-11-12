import {
  j as c,
  h as t,
  i as u,
  E as y,
  Y as _,
  Z as h,
  _ as g,
  V as p,
  B as E,
  a0 as i
} from "./q9bO_DSU.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "15fb4e3d80a4de2b957e29f1299dd0b2bef7a1e3"
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
  t && u();
  var f = new E(e),
    o = l ? y : 0;

  function r(a, d) {
    if (t) {
      const b = _(e) === h;
      if (a === b) {
        var s = g();
        p(s), f.anchor = s, i(!1), f.ensure(a, d), i(!0);
        return
      }
    }
    f.ensure(a, d)
  }
  c(() => {
    var a = !1;
    n((d, s = !0) => {
      a = !0, r(s, d)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};