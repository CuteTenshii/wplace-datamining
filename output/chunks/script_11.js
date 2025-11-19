import {
  j as u,
  h as f,
  i as b,
  E as y,
  Z as _,
  _ as h,
  a0 as g,
  W as p,
  B as E,
  a1 as i
} from "./Ci4OD8YS.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d97a8a46c0eab54dca8573924bccbc5e0735b3d"
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
  f && b();
  var r = new E(e),
    o = l ? y : 0;

  function t(a, s) {
    if (f) {
      const c = _(e) === h;
      if (a === c) {
        var d = g();
        p(d), r.anchor = d, i(!1), r.ensure(a, s), i(!0);
        return
      }
    }
    r.ensure(a, s)
  }
  u(() => {
    var a = !1;
    n((s, d = !0) => {
      a = !0, t(d, s)
    }), a || t(!1, null)
  }, o)
}
export {
  w as i
};