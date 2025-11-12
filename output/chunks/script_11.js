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
} from "./BYknGsrl.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "deff0df3054d4e17d810032708dfa15d941dfa1b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "cbc66b29-66a2-450c-8c9d-4fddcdfa07ef", e._sentryDebugIdIdentifier = "sentry-dbid-cbc66b29-66a2-450c-8c9d-4fddcdfa07ef")
  })()
} catch {}

function w(e, d, l = !1) {
  t && b();
  var s = new E(e),
    o = l ? y : 0;

  function r(a, n) {
    if (t) {
      const c = _(e) === h;
      if (a === c) {
        var f = g();
        p(f), s.anchor = f, i(!1), s.ensure(a, n), i(!0);
        return
      }
    }
    s.ensure(a, n)
  }
  u(() => {
    var a = !1;
    d((n, f = !0) => {
      a = !0, r(f, n)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};