import {
  m as b,
  k as t,
  l as y,
  E as _,
  V as c,
  W as g,
  X as h,
  R as p,
  B as E,
  Y as i
} from "./BdthSYuV.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98e9f0a798d14aeefb12d06ee236fbfeb3f778fb"
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
  t && y();
  var d = new E(e),
    o = l ? _ : 0;

  function r(a, s) {
    if (t) {
      const u = c(e) === g;
      if (a === u) {
        var f = h();
        p(f), d.anchor = f, i(!1), d.ensure(a, s), i(!0);
        return
      }
    }
    d.ensure(a, s)
  }
  b(() => {
    var a = !1;
    n((s, f = !0) => {
      a = !0, r(f, s)
    }), a || r(!1, null)
  }, o)
}
export {
  w as i
};