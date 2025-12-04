import {
  m as u,
  k as f,
  l as c,
  E as y,
  V as _,
  W as g,
  X as h,
  R as p,
  B as E,
  Y as i
} from "./CHoDuZDi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "55c2e0b318410e9d206d43885c4f592c4c06606c"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b1552324-d900-4c6f-bab9-101627e611d2", e._sentryDebugIdIdentifier = "sentry-dbid-b1552324-d900-4c6f-bab9-101627e611d2")
  })()
} catch {}

function w(e, n, l = !1) {
  f && c();
  var r = new E(e),
    o = l ? y : 0;

  function t(a, s) {
    if (f) {
      const b = _(e) === g;
      if (a === b) {
        var d = h();
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