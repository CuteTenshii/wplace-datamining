import {
  m as b,
  k as t,
  l as c,
  E as y,
  V as _,
  W as g,
  X as h,
  R as p,
  B as E,
  Y as i
} from "./CniRY7QL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "10c5dbe739336528c9b18a68ad9bf5dfd745fca4"
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
  t && c();
  var f = new E(e),
    o = l ? y : 0;

  function r(a, s) {
    if (t) {
      const u = _(e) === g;
      if (a === u) {
        var d = h();
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