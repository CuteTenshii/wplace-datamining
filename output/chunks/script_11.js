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
} from "./CgLM89MT.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2f23e3a8f8ea879ac9c94b9f80bbe3f77b879d5a"
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
  var d = new E(e),
    o = l ? y : 0;

  function r(a, f) {
    if (t) {
      const c = _(e) === h;
      if (a === c) {
        var s = g();
        p(s), d.anchor = s, i(!1), d.ensure(a, f), i(!0);
        return
      }
    }
    d.ensure(a, f)
  }
  b(() => {
    var a = !1;
    n((f, s = !0) => {
      a = !0, r(s, f)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};