import {
  h as l,
  e as p,
  i as b,
  E as y,
  j as _,
  k as g,
  l as s,
  m as h,
  o as m,
  q as v
} from "./DUWZzbWe.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d61f5c7c-3d11-4306-a310-052e66e49988", e._sentryDebugIdIdentifier = "sentry-dbid-d61f5c7c-3d11-4306-a310-052e66e49988")
  })()
} catch {}

function E(e, a, u) {
  l && p();
  var t = e,
    f, n, d = null,
    o = null;

  function i() {
    n && (v(n), n = null), d && (d.lastChild.remove(), t.before(d), d = null), n = o, o = null
  }
  b(() => {
    if (f !== (f = a())) {
      var r = h();
      if (f) {
        var c = t;
        r && (d = document.createDocumentFragment(), d.append(c = _()), n && s.skipped_effects.add(n)), o = g(() => u(c, f))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), l && (t = m)
}
export {
  E as c
};