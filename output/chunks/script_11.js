import {
  j as b,
  h as t,
  i as c,
  E as y,
  Z as _,
  _ as h,
  a0 as g,
  W as p,
  B as E,
  a1 as i
} from "./DFT4Ffb_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "52f7dd52d370e3cd3a68b7bd4fba1dfc255f8526"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "67bf5383-3cd0-4060-905a-065556c3259c", e._sentryDebugIdIdentifier = "sentry-dbid-67bf5383-3cd0-4060-905a-065556c3259c")
  })()
} catch {}

function w(e, n, l = !1) {
  t && c();
  var f = new E(e),
    o = l ? y : 0;

  function r(a, s) {
    if (t) {
      const u = _(e) === h;
      if (a === u) {
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
  }, o)
}
export {
  w as i
};