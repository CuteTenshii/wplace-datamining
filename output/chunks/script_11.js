import {
  j as b,
  h as t,
  i as u,
  E as y,
  Y as _,
  Z as h,
  _ as g,
  V as p,
  B as E,
  a0 as i
} from "./_uPdD6ej.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8ca9d5bb8d7e9609a9f3fa05a0fcc401dd1cd4cb"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cbc66b29-66a2-450c-8c9d-4fddcdfa07ef", e._sentryDebugIdIdentifier = "sentry-dbid-cbc66b29-66a2-450c-8c9d-4fddcdfa07ef")
  })()
} catch {}

function w(e, n, c = !1) {
  t && u();
  var f = new E(e),
    l = c ? y : 0;

  function r(a, d) {
    if (t) {
      const o = _(e) === h;
      if (a === o) {
        var s = g();
        p(s), f.anchor = s, i(!1), f.ensure(a, d), i(!0);
        return
      }
    }
    f.ensure(a, d)
  }
  b(() => {
    var a = !1;
    n((d, s = !0) => {
      a = !0, r(s, d)
    }), a || r(!1, null)
  }, l)
}
export {
  w as i
};