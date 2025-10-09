import {
  h as s,
  e as u,
  i as p,
  E as y,
  j as _,
  k as g,
  l as b,
  m as h,
  o as m,
  q as v
} from "./BI2n3g5M.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "396734e5db96c8d18b29022abf53bbd030e61152"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dd71b865-864d-44bc-90ea-4b539b991b47", e._sentryDebugIdIdentifier = "sentry-dbid-dd71b865-864d-44bc-90ea-4b539b991b47")
  })()
} catch {}

function E(e, a, c) {
  s && u();
  var t = e,
    f, n, d = null,
    o = null;

  function i() {
    n && (v(n), n = null), d && (d.lastChild.remove(), t.before(d), d = null), n = o, o = null
  }
  p(() => {
    if (f !== (f = a())) {
      var r = h();
      if (f) {
        var l = t;
        r && (d = document.createDocumentFragment(), d.append(l = _()), n && b.skipped_effects.add(n)), o = g(() => c(l, f))
      }
      r ? b.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};