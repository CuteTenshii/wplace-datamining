import {
  j as b,
  h as t,
  i as u,
  E as y,
  Y as _,
  Z as h,
  _ as g,
  V as p,
  B as E,
  a0 as i
} from "./DnEjpmVm.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dcafbf70eeb3b56ec7077bb04087bc09c7e58c55"
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
  t && u();
  var f = new E(e),
    l = c ? y : 0;

  function r(a, s) {
    if (t) {
      const o = _(e) === h;
      if (a === o) {
        var d = g();
        p(d), f.anchor = d, i(!1), f.ensure(a, s), i(!0);
        return
      }
    }
    f.ensure(a, s)
  }
  b(() => {
    var a = !1;
    n((s, d = !0) => {
      a = !0, r(d, s)
    }), a || r(!1, null)
  }, l)
}
export {
  w as i
};