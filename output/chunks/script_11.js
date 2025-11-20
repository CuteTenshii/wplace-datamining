import {
  j as c,
  h as t,
  i as b,
  E as y,
  Z as _,
  _ as h,
  a0 as g,
  W as p,
  B as E,
  a1 as i
} from "./FaeLmLA_.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a38764e420fdb01cdb08c4f31f9aa71df376c33"
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
  t && b();
  var d = new E(e),
    o = l ? y : 0;

  function r(a, s) {
    if (t) {
      const u = _(e) === h;
      if (a === u) {
        var f = g();
        p(f), d.anchor = f, i(!1), d.ensure(a, s), i(!0);
        return
      }
    }
    d.ensure(a, s)
  }
  c(() => {
    var a = !1;
    n((s, f = !0) => {
      a = !0, r(f, s)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};