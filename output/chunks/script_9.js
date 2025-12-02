import {
  m as u,
  k as f,
  l as y,
  E as _,
  V as c,
  W as g,
  X as h,
  R as p,
  B as E,
  Y as i
} from "./Dc1GUS8h.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "69e89c3139d56ad7b72a097a21288d9ef2906bde"
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
  f && y();
  var r = new E(e),
    o = l ? _ : 0;

  function t(a, s) {
    if (f) {
      const b = c(e) === g;
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