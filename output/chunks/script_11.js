import {
  j as u,
  h as d,
  i as c,
  E as y,
  Z as _,
  _ as h,
  a0 as g,
  W as p,
  B as E,
  a1 as i
} from "./CYmALYaf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
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
  d && c();
  var r = new E(e),
    o = l ? y : 0;

  function t(a, s) {
    if (d) {
      const b = _(e) === h;
      if (a === b) {
        var f = g();
        p(f), r.anchor = f, i(!1), r.ensure(a, s), i(!0);
        return
      }
    }
    r.ensure(a, s)
  }
  u(() => {
    var a = !1;
    n((s, f = !0) => {
      a = !0, t(f, s)
    }), a || t(!1, null)
  }, o)
}
export {
  w as i
};