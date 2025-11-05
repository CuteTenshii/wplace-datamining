import {
  h as c,
  e as b,
  i as p,
  E as y,
  j as _,
  k as g,
  l as s,
  m as h,
  o as m,
  q as v
} from "./LdQOE0HW.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "34cc512744102387f2427379e854c2ea08067337"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b17aa758-f24f-469a-b814-f63646c2c0b1", e._sentryDebugIdIdentifier = "sentry-dbid-b17aa758-f24f-469a-b814-f63646c2c0b1")
  })()
} catch {}

function E(e, a, u) {
  c && b();
  var d = e,
    t, n, f = null,
    o = null;

  function i() {
    n && (v(n), n = null), f && (f.lastChild.remove(), d.before(f), f = null), n = o, o = null
  }
  p(() => {
    if (t !== (t = a())) {
      var r = h();
      if (t) {
        var l = d;
        r && (f = document.createDocumentFragment(), f.append(l = _()), n && s.skipped_effects.add(n)), o = g(() => u(l, t))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), c && (d = m)
}
export {
  E as c
};