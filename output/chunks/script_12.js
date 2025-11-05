import {
  h as c,
  e as u,
  i as p,
  E as y,
  j as _,
  k as g,
  l as s,
  m as h,
  o as m,
  q as v
} from "./CxAzxtpI.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98d1dff4f9f651349c3d8e3f73a4b0b872bc384a"
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

function E(e, a, b) {
  c && u();
  var t = e,
    d, n, f = null,
    o = null;

  function i() {
    n && (v(n), n = null), f && (f.lastChild.remove(), t.before(f), f = null), n = o, o = null
  }
  p(() => {
    if (d !== (d = a())) {
      var r = h();
      if (d) {
        var l = t;
        r && (f = document.createDocumentFragment(), f.append(l = _()), n && s.skipped_effects.add(n)), o = g(() => b(l, d))
      }
      r ? s.add_callback(i) : i()
    }
  }, y), c && (t = m)
}
export {
  E as c
};