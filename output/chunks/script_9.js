import {
  m as b,
  k as f,
  l as c,
  E as y,
  V as _,
  W as g,
  X as h,
  R as p,
  B as E,
  Y as i
} from "./BsKihL7x.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "93f384388d5e7c5014b7c7528c87cda732169ee9"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b83fe376-126d-4693-87ec-8a6529036d5d", e._sentryDebugIdIdentifier = "sentry-dbid-b83fe376-126d-4693-87ec-8a6529036d5d")
  })()
} catch {}

function w(e, n, l = !1) {
  f && c();
  var r = new E(e),
    o = l ? y : 0;

  function t(a, s) {
    if (f) {
      const u = _(e) === g;
      if (a === u) {
        var d = h();
        p(d), r.anchor = d, i(!1), r.ensure(a, s), i(!0);
        return
      }
    }
    r.ensure(a, s)
  }
  b(() => {
    var a = !1;
    n((s, d = !0) => {
      a = !0, t(d, s)
    }), a || t(!1, null)
  }, o)
}
export {
  w as i
};