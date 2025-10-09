import {
  h as s,
  e as u,
  i as p,
  E as y,
  j as _,
  k as g,
  l as c,
  m as h,
  o as m,
  q as v
} from "./D2NUMUd6.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19e8b1e1f621a77f893c0ebf0e975e4ec873201a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "dd71b865-864d-44bc-90ea-4b539b991b47", e._sentryDebugIdIdentifier = "sentry-dbid-dd71b865-864d-44bc-90ea-4b539b991b47")
  })()
} catch {}

function E(e, f, b) {
  s && u();
  var t = e,
    d, n, a = null,
    o = null;

  function i() {
    n && (v(n), n = null), a && (a.lastChild.remove(), t.before(a), a = null), n = o, o = null
  }
  p(() => {
    if (d !== (d = f())) {
      var r = h();
      if (d) {
        var l = t;
        r && (a = document.createDocumentFragment(), a.append(l = _()), n && c.skipped_effects.add(n)), o = g(() => b(l, d))
      }
      r ? c.add_callback(i) : i()
    }
  }, y), s && (t = m)
}
export {
  E as c
};